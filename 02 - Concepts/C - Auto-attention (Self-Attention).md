---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Mécanisme où **chaque position d'une séquence calcule sa nouvelle représentation comme une combinaison convexe des représentations de toutes les positions de la même séquence**. Les poids sont donnés par la similarité entre une **requête** (query) et des **clés** (keys).

$$\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\frac{QK^\top}{\sqrt{d_m}}\right)V$$

## Intuition
Pour encoder « it » dans « *The animal didn't cross the street because it was too tired* », le modèle doit chercher des indices ailleurs dans la phrase et associer « it » à « animal ». L'auto-attention crée ces liens directement, en un seul pas, quelle que soit la distance (pas de biais de localité, contrairement aux RNN et aux CNN).

## Formalisme / Dérivation (étapes du cours)
Entrées $x_1,\dots,x_T$ (vecteurs lignes) à la couche $p$.
1. **Projections** clé, valeur, requête :
$$k_i = x_iW_K,\qquad v_i = x_iW_V,\qquad q_i = x_iW_Q.$$
2. **Scores d'interaction** : produit scalaire mis à l'échelle entre requête et clé :
$$e_{ij} = \frac{1}{\sqrt{d_m}}\,q_ik_j^\top.$$
3. **Scores d'attention** : softmax sur les positions $j$ :
$$\alpha_{ij} = \frac{\exp(e_{ij})}{\sum_{l=1}^T \exp(e_{il})}.$$
4. **Combinaison convexe** des valeurs, puis projection de sortie :
$$z_i = \Big(\sum_{j=1}^T \alpha_{ij}v_j\Big)W_F.$$
On obtient ainsi une **tête** d'attention ; on en combine plusieurs dans l'[[C - Attention multi-têtes (Multi-Head Attention)|attention multi-têtes]].

**Pourquoi diviser par $\sqrt{d_m}$** : si les composantes de $q$ et $k$ sont indépendantes, de moyenne 0 et de variance 1, alors $q\cdot k$ a une variance $d_m$. Sans mise à l'échelle, les scores deviennent grands, la softmax sature (presque one-hot) et ses gradients deviennent minuscules.

**Coût** : $\mathcal O(T^2\cdot d)$ pour une séquence de longueur $T$ (toutes les paires), contre $\mathcal O(T\cdot d^2)$ pour un RNN et $\mathcal O(T\cdot d^2\cdot w)$ pour une convolution de largeur $w$. Avec $T = d = 1000$ et $w = 3$ : $4\cdot10^9$ FLOPs pour l'attention, $16\cdot10^9$ pour un LSTM, $6\cdot10^9$ pour une convolution. L'attention n'est **bon marché que si $T \ll d$** ; pour les images, $T = 3072$ devient coûteux.

## Exemple
Phrase « Nobel committee awards Strickland who advanced optics » : la ligne de la matrice $A = (\alpha_{ij})$ pour « who » met beaucoup de poids sur « Strickland ».

## IFT6135 — lien avec l'attention de Bahdanau
L'[[M - Attention Douce (Bahdanau)|attention douce]] fait attendre le décodeur sur les états de l'encodeur (attention croisée, score par un petit MLP). L'auto-attention applique la même idée à l'intérieur d'une séquence, avec un produit scalaire mis à l'échelle et des projections $W_Q, W_K, W_V$ apprises.

## Flashcards
#flashcards/IFT6135/06-transformer

Écrire les 4 étapes de l'auto-attention
?
$q_i=x_iW_Q$, $k_i=x_iW_K$, $v_i=x_iW_V$ ; $e_{ij}=q_ik_j^\top/\sqrt{d_m}$ ; $\alpha_{ij}=\mathrm{softmax}_j(e_{ij})$ ; $z_i=(\sum_j\alpha_{ij}v_j)W_F$.

Pourquoi diviser les scores par $\sqrt{d_m}$ ?::Avec des composantes de variance 1, $q\cdot k$ a une variance $d_m$ ; sans mise à l'échelle, la softmax sature et ses gradients s'évanouissent.

Complexité de l'auto-attention vs RNN vs convolution ?::Attention $\mathcal O(T^2 d)$ ; RNN $\mathcal O(T d^2)$ ; convolution $\mathcal O(T d^2 w)$. L'attention est bon marché seulement si $T\ll d$.

Avantage de l'auto-attention sur un RNN pour les dépendances longues ?::Chemin de longueur 1 entre deux positions quelconques (pas de biais de localité) et calcul parallèle sur toutes les positions.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Attention Douce (Bahdanau)]]
- [[C - Attention multi-têtes (Multi-Head Attention)]]
- [[M - Transformer]]
- [[C - Produit Scalaire]]
