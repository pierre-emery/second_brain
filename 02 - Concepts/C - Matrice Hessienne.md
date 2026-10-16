---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: brouillon
maj: 2026-10-15
---
Matrice des dérivées secondes d'une fonction scalaire $f(\mathbf{x})$ :

$$\nabla^2_\mathbf{x} f(\mathbf{x}) = \begin{bmatrix} \frac{\partial^2}{\partial x_1^2}f(\mathbf{x}) & \cdots & \frac{\partial^2}{\partial x_1 \partial x_d}f(\mathbf{x}) \\ \vdots & \ddots & \vdots \\ \frac{\partial^2}{\partial x_d \partial x_1}f(\mathbf{x}) & \cdots & \frac{\partial^2}{\partial x_d^2}f(\mathbf{x}) \end{bmatrix}$$

Encode la courbure de $f$ et permet de caractériser les points critiques (minimum, maximum, point-selle).

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Gradient]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]

## Flashcards

#flashcards/IFT6135/00-revision

Définition de la Hessienne ?::La matrice des dérivées secondes : $(\nabla^2_\mathbf{x} f)_{i,j} = \frac{\partial^2 f}{\partial x_i \partial x_j}$.

Courbure de $f$ dans la direction $\mathbf{v}$ ?::$\mathbf{v}^\top\nabla^2_\mathbf{x} f(\mathbf{x})\,\mathbf{v}$

À quoi sert la Hessienne en un point critique ?::À classer le point : définie positive → minimum local, définie négative → maximum local, signes mixtes → point-selle.
<!--SR:!2026-10-19,3,250-->