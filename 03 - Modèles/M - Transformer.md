---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Modèle **séquence à séquence** introduit par Vaswani et al. (*Attention Is All You Need*, NIPS 2017), qui remplace la récurrence par l'**[[C - Auto-attention (Self-Attention)|auto-attention]]**. Il se compose d'une pile de 6 encodeurs et d'une pile de 6 décodeurs ; chaque sous-couche est entourée d'une connexion résiduelle suivie d'une normalisation de couche.

$$\text{sortie d'une sous-couche} = \mathrm{LayerNorm}\big(x + \mathrm{Sublayer}(x)\big)$$

## Intuition
Les RNN traitent les jetons un par un (pas de parallélisme, chemins longs entre mots éloignés). Le Transformer relie directement toutes les positions entre elles par l'attention : entraînement massivement parallèle et dépendances longues « à égalité de chances ». L'ordre est réinjecté par l'[[C - Encodage positionnel (Positional Encoding)|encodage positionnel]].

## Formalisme
**Encodeur** (une couche, répétée $N=6$ fois) :
1. [[C - Attention multi-têtes (Multi-Head Attention)|auto-attention multi-têtes]] → Add & Norm ;
2. réseau à propagation avant appliqué **position par position** → Add & Norm.

**Décodeur** (une couche, répétée $N = 6$ fois) :
1. auto-attention **masquée** ([[C - Attention masquée (causale)]]) : chaque position ne voit que les positions précédentes → Add & Norm ;
2. **attention encodeur-décodeur** : les requêtes viennent du décodeur, les clés $K_{\text{encdec}}$ et les valeurs $V_{\text{encdec}}$ de la sortie de l'encodeur → Add & Norm ;
3. propagation avant → Add & Norm.

**Couche finale** : linéaire (logits de la taille du vocabulaire) → softmax (log-probabilités) → on prend l'argmax (ou on échantillonne) pour choisir le mot.

**Résidus et normalisation** : chaque sous-couche de chaque encodeur a une connexion résiduelle suivie d'une [[C - Normalisation de couche (Layer Normalization)|normalisation de couche]], $\mathrm{LayerNorm}(x + \mathrm{Sublayer}(x))$ (voir [[M - ResNet (Connexion Résiduelle)]]).

## Exemple : résultats
- Traduction WMT-2014 (BLEU) : EN-DE GNMT 24,6 ; ConvSeq2Seq 25,2 ; **Transformer 28,4**. EN-FR : 39,9 ; 40,5 ; **41,8**. Le Transformer s'entraîne plus de 3× plus vite que les autres.
- Génération de Wikipédia (ROUGE) : seq2seq-attention 12,7 ; Transformer-ED ($L=500$) 34,2 ; Transformer-DMCA ($L = 11000$) 36,2.

## IFT6135 — ce qui compte (ablations)
- Réduire la taille des clés de l'attention nuit au modèle (ligne B).
- Un modèle plus gros est meilleur (ligne C).
- Le dropout aide (ligne D).
- Encodage positionnel sinusoïdal ou appris : mêmes résultats (ligne E).
- Coût : l'attention est en $\mathcal O(T^2 d)$, donc bon marché seulement si $T\ll d$.

Descendants : [[M - BERT]] (encodeur seul), [[M - GPT (GPT-1, GPT-2, GPT-3)|GPT]] (décodeur seul), [[M - Vision Transformer (ViT)|ViT]] (images).

## Flashcards
#flashcards/IFT6135/06-transformer

Composition d'une couche d'encodeur du Transformer ?::Auto-attention multi-têtes → Add & Norm → propagation avant position par position → Add & Norm.

Trois sous-couches d'une couche de décodeur ?
?
(1) Auto-attention masquée (pas de regard sur le futur) ; (2) attention encodeur-décodeur (requêtes du décodeur, clés et valeurs de l'encodeur) ; (3) propagation avant. Chacune avec résidu + LayerNorm.

Formule de la connexion autour de chaque sous-couche ?::$\mathrm{LayerNorm}(x+\mathrm{Sublayer}(x))$.

D'où viennent $Q$, $K$ et $V$ dans l'attention encodeur-décodeur ?::$Q$ vient du décodeur ; $K$ et $V$ viennent de la sortie de l'encodeur.

Quatre enseignements des ablations du Transformer ?::Réduire la taille des clés nuit ; plus gros est meilleur ; le dropout aide ; encodage positionnel sinusoïdal ≈ appris.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[C - Auto-attention (Self-Attention)]]
- [[C - Attention multi-têtes (Multi-Head Attention)]]
- [[C - Encodage positionnel (Positional Encoding)]]
- [[C - Attention masquée (causale)]]
- [[C - Normalisation de couche (Layer Normalization)]]
- [[M - Seq2Seq (Encodeur-Décodeur)]]
- [[M - Attention Douce (Bahdanau)]]
