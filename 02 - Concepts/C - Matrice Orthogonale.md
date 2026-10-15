---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-10-15
---
Matrice $\mathbf{X}$ dont la transposée est égale à l'inverse :

$$\mathbf{X}^\top = \mathbf{X}^{-1}$$

Ses colonnes (et lignes) forment une base orthonormale.
## Propriété : conservation de la norme

Pour tout vecteur $\mathbf{v}$ :
$$\|\mathbf{X}\mathbf{v}\|^2 = (\mathbf{X}\mathbf{v})^\top(\mathbf{X}\mathbf{v}) = \mathbf{v}^\top\mathbf{X}^\top\mathbf{X}\mathbf{v} = \mathbf{v}^\top\mathbf{v} = \|\mathbf{v}\|^2$$

Multiplier par une matrice orthogonale (ou sa transposée) est une **isométrie** : rotations et réflexions. Toutes ses valeurs propres sont de module 1.
## IFT6135 -> Réseaux récurrents

Cette propriété motive l'[[A - Initialisation Orthogonale|initialisation orthogonale]] de la matrice récurrente $\mathbf{U}$ d'un RNN : multiplier répétitivement le gradient par $\mathbf{U}^\top$ ne le fait ni exploser ni s'évanouir (voir [[C - Gradient Explosif et Évanescent (RNN)]]).
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Inverse d'une matrice]]
- [[C - Transposée d'une matrice]]
- [[A - Initialisation Orthogonale]]
- [[C - Norme]]