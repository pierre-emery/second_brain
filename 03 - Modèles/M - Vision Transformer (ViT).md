---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Vision Transformer** (Dosovitskiy et al. 2020, *An Image is Worth 16x16 Words*) : un encodeur [[M - Transformer|Transformer]] standard appliqué à une image **découpée en patchs** ; chaque patch aplati est projeté linéairement et traité comme un jeton.

$$z_0 = [x_{\text{class}};\ x_p^1E;\ x_p^2E;\ \dots;\ x_p^NE] + E_{\text{pos}},\qquad \hat y = \mathrm{MLP}\big(\mathrm{LN}(z_L^0)\big)$$

## Intuition
Contrairement au [[M - Réseau de neuronnes convolutionnels (CNN)|CNN]], ViT a très peu de biais inductifs propres à l'image :
- **connectivité locale** : seulement dans les MLP (par patch) ;
- **équivariance par translation** : seulement dans les MLP ;
- **auto-attention** : globale dès la 1re couche ;
- **structure 2D** : utilisée seulement pour découper en patchs ; les plongements de position ne portent pas d'information 2D explicite.

Il doit donc apprendre ces régularités à partir des données : il brille avec un préentraînement à très grande échelle (JFT-300M).

## Formalisme
1. Découper l'image en $N$ patchs (par exemple 16 × 16), les aplatir, projeter par $E$.
2. Ajouter un jeton de classe $x_{\text{class}}$ appris et des plongements de position $E_{\text{pos}}$ appris.
3. Encodeur Transformer ($L$ couches : LN → attention multi-têtes → résidu ; LN → MLP → résidu).
4. Tête de classification (MLP) sur la sortie du jeton de classe.

| Modèle | Couches | Taille cachée $D$ | MLP | Têtes | Params |
|---|---|---|---|---|---|
| ViT-Base | 12 | 768 | 3072 | 12 | 86 M |
| ViT-Large | 24 | 1024 | 4096 | 16 | 307 M |
| ViT-Huge | 32 | 1280 | 5120 | 16 | 632 M |

## Exemple : résultats
Préentraîné sur JFT, ViT-H/14 obtient 88,55 % sur ImageNet (vs 87,54 % pour BiT-L ResNet152x4 et 88,4 % pour Noisy Student EfficientNet-L2), avec bien moins de calcul (2,5 k TPUv3-jours vs 9,9 k et 12,3 k).
**Ce que le modèle apprend** : les filtres d'embedding RGB ressemblent à des bases de fonctions locales ; la similarité entre plongements de position reproduit la structure ligne/colonne 2D ; certaines têtes attendent globalement dès les premières couches (distance d'attention moyenne), et les cartes d'attention se concentrent sur l'objet (chien, avion…).

## IFT6135 — au-delà : vision-langage
- **ViLBERT** (Lu et al. 2019) : extension de BERT à deux flux (régions d'image et texte) reliés par une co-attention, préentraînée sur des paires image-légende.
- **Encodeur-décodeurs** et méthodes par **prompting zéro-coup ou few-shot** : MAPL (sous-titrage zéro-coup, VQA en 2 exemples), Flamingo.

## Flashcards
#flashcards/IFT6135/06-transformer

Comment ViT transforme-t-il une image en séquence ?::Il découpe l'image en patchs (16 × 16), les aplatit, les projette linéairement, ajoute un jeton de classe et des plongements de position appris.

Quels biais inductifs du CNN manquent à ViT ?
?
Connectivité locale et équivariance par translation (seulement dans les MLP par patch), structure 2D (seulement au découpage ; positions apprises sans 2D explicite). L'attention est globale dès la 1re couche.

Pourquoi ViT a-t-il besoin d'énormément de données ?::Avec peu de biais inductifs, il doit apprendre la localité et la structure 2D à partir des données ; préentraîné sur JFT, il dépasse les meilleurs CNN avec moins de calcul.

Que montre la similarité des plongements de position appris par ViT ?::Ils retrouvent la structure 2D (lignes et colonnes) même si on ne la leur a pas fournie.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Transformer]]
- [[M - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Équivariance vs Invariance]]
- [[C - Encodage positionnel (Positional Encoding)]]
- [[M - BERT]]
