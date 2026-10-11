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