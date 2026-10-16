---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
La convolution d'une image $\mathbf{x}$ avec un noyau $\mathbf{k}$ est calculée comme :

$$(\mathbf{x} * \mathbf{k})_{ij} = \sum_{p,q} x_{i+p,\,j+q}\,k_{r-p,\,r-q}$$

où $\tilde{k}$ (le noyau utilisé dans la somme) correspond à $k$ avec ses lignes et colonnes retournées (« flipped »). En pratique dans les réseaux convolutionnels modernes, on n'effectue généralement pas ce retournement (c'est alors une **corrélation croisée**, mais le nom « convolution » est resté par convention).

**Avec non-linéarité**, la sortie devient un détecteur d'une caractéristique à n'importe quelle position de l'image :

$$y_j = g_j\,\tanh\left(\sum_i k_{ij} * x_i\right)$$
où $x_i$ est le $i$-ième canal d'entrée, $k_{ij}$ le noyau de convolution, et $g_j$ un facteur d'échelle appris (Jarret et al., 2009).
## Zero padding

On peut utiliser du **remplissage par des zéros** (zero padding) autour de l'image pour permettre au noyau de dépasser les bords (voir [[C - Terminologie de la Convolution (stride, padding, kernel)]] pour les types de padding).

## Liens connexes

- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Terminologie de la Convolution (stride, padding, kernel)]]
- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Différence entre convolution et corrélation croisée ?::La convolution retourne (« flip ») le noyau avant de le faire glisser ; la corrélation croisée non. Les CNN calculent en fait une corrélation croisée, mais on garde le nom « convolution ».
<!--SR:!2026-10-15,0,230-->

Couche de convolution avec non-linéarité (Jarrett et al., 2009) ?::$y_j = g_j \tanh\!\left(\sum_i k_{ij} * x_i\right)$ : somme sur les canaux d'entrée $i$ de la convolution par le noyau $k_{ij}$, puis activation et échelle apprise $g_j$.

À quoi sert le zero padding ?::Permettre au noyau de dépasser les bords de l'image, pour contrôler la taille de sortie.