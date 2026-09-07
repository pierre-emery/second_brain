---

type: concept

cours: [IFT6135]

statut: brouillon

---
Vecteur des dérivées partielles d'une fonction scalaire par rapport à un vecteur d'entrée :

$$\nabla_\mathbf{x} f(\mathbf{x}) = \left[\frac{\partial}{\partial x_1}f(\mathbf{x}), \ldots, \frac{\partial}{\partial x_d}f(\mathbf{x})\right]^\top$$
Indique la direction de plus forte augmentation de $f$.

Pour une fonction $f(\mathbf{X})$ qui prend une matrice en entrée, le gradient est une matrice de même taille : $(\nabla_\mathbf{X} f(\mathbf{X}))_{i,j} = \frac{\partial}{\partial X_{i,j}}f(\mathbf{X})$.
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Dérivée et Dérivée Partielle]]
- [[C - Matrice Hessienne]]
- [[C - Matrice Jacobienne]]
- [[A - Rétropropagation du gradient (gradient descent)]]