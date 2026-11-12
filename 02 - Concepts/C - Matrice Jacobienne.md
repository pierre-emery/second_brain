---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-11
---
Pour une fonction vectorielle $\mathbf{f}(\mathbf{x}) = [f(\mathbf{x})_1, \ldots, f(\mathbf{x})_k]^\top$, la Jacobienne est

$$\nabla_\mathbf{x} \mathbf{f}(\mathbf{x}) = \begin{bmatrix} \frac{\partial}{\partial x_1}f(\mathbf{x})_1 & \cdots & \frac{\partial}{\partial x_d}f(\mathbf{x})_1 \\ \vdots & \ddots & \vdots \\ \frac{\partial}{\partial x_1}f(\mathbf{x})_k & \cdots & \frac{\partial}{\partial x_d}f(\mathbf{x})_k \end{bmatrix}$$

## Jacobienne = différentielle (IFT6269)

La jacobienne $df_{x_0}\in\mathbb R^{n\times m}$ est la matrice de la [[C - Différentielle (calcul matriciel)|différentielle]] de $f:\mathbb R^m\to\mathbb R^n$ : $f(x_0+\Delta)-f(x_0)=df_{x_0}\Delta+o(\|\Delta\|)$. La composition se traite par produit de jacobiennes : [[T - Règle de la chaîne pour les différentielles]].

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Gradient]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Différentielle (calcul matriciel)]]
- [[T - Règle de la chaîne pour les différentielles]]

## Flashcards

#flashcards/IFT6135/00-revision

Définition de la jacobienne de $\mathbf{f}: \mathbb{R}^d \to \mathbb{R}^k$ ?::La matrice $k \times d$ des dérivées partielles : $J_{i,j} = \partial f_i / \partial x_j$.

Gradient vs jacobienne vs Hessienne : quelle différence ?::Gradient : dérivées premières d'une fonction **scalaire**. Jacobienne : dérivées premières d'une fonction **vectorielle**. Hessienne : dérivées **secondes** d'une fonction scalaire (= jacobienne du gradient).
