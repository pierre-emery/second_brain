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

## Flashcards

#flashcards/IFT6135/00-revision

Définition du gradient $\nabla_\mathbf{x} f(\mathbf{x})$ ?::Le vecteur des dérivées partielles $\left[\frac{\partial f}{\partial x_1}, \ldots, \frac{\partial f}{\partial x_d}\right]^\top$.

Quelle direction indique le gradient ?::La direction de plus forte **augmentation** de $f$ ; $-\nabla f$ est celle de plus forte diminution.

Quelle est la forme du gradient d'une fonction scalaire $f(\mathbf{X})$ d'une matrice ?::Une matrice de même taille que $\mathbf{X}$ : $(\nabla_\mathbf{X} f)_{i,j} = \partial f / \partial X_{i,j}$.