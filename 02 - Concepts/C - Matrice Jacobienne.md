---

type: concept

cours: [IFT6135]

statut: brouillon

---
Pour une fonction vectorielle $\mathbf{f}(\mathbf{x}) = [f(\mathbf{x})_1, \ldots, f(\mathbf{x})_k]^\top$, la Jacobienne est

$$\nabla_\mathbf{x} \mathbf{f}(\mathbf{x}) = \begin{bmatrix} \frac{\partial}{\partial x_1}f(\mathbf{x})_1 & \cdots & \frac{\partial}{\partial x_d}f(\mathbf{x})_1 \\ \vdots & \ddots & \vdots \\ \frac{\partial}{\partial x_1}f(\mathbf{x})_k & \cdots & \frac{\partial}{\partial x_d}f(\mathbf{x})_k \end{bmatrix}$$

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Gradient]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition de la jacobienne de $\mathbf{f}: \mathbb{R}^d \to \mathbb{R}^k$ ?::La matrice $k \times d$ des dérivées partielles : $J_{i,j} = \partial f_i / \partial x_j$.

Gradient vs jacobienne vs Hessienne : quelle différence ?::Gradient : dérivées premières d'une fonction **scalaire**. Jacobienne : dérivées premières d'une fonction **vectorielle**. Hessienne : dérivées **secondes** d'une fonction scalaire (= jacobienne du gradient).