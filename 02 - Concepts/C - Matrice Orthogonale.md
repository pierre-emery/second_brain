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
## Flashcards

#flashcards/IFT6135/00-revision

Définition d'une matrice orthogonale $\mathbf{X}$ ?::$\mathbf{X}^\top = \mathbf{X}^{-1}$, i.e. $\mathbf{X}^\top\mathbf{X} = \mathbf{X}\mathbf{X}^\top = \mathbf{I}$ ; ses colonnes forment une base orthonormale.

Démontre qu'une matrice orthogonale conserve la norme.
?
$\|\mathbf{X}\mathbf{v}\|^2 = (\mathbf{X}\mathbf{v})^\top(\mathbf{X}\mathbf{v}) = \mathbf{v}^\top\mathbf{X}^\top\mathbf{X}\mathbf{v} = \mathbf{v}^\top\mathbf{v} = \|\mathbf{v}\|^2$

Module des valeurs propres d'une matrice orthogonale ?::Toutes de module 1 (c'est une isométrie : rotation ou réflexion).
<!--SR:!2026-10-17,1,230-->

Pourquoi la propriété d'isométrie des matrices orthogonales est-elle utile pour les RNN ?::Initialiser la matrice récurrente $\mathbf{U}$ orthogonale fait que multiplier répétitivement le gradient par $\mathbf{U}^\top$ ne le fait ni exploser ni s'évanouir (au moins au début).