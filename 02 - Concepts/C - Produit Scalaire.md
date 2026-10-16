---

type: concept

cours: [IFT6135]

statut: brouillon

---
Pour deux vecteurs $\mathbf{x}^{(1)}, \mathbf{x}^{(2)} \in \mathbb{R}^d$, le produit scalaire (dot product) est

$$\langle \mathbf{x}^{(1)}, \mathbf{x}^{(2)} \rangle = \mathbf{x}^{(1)\top}\mathbf{x}^{(2)} = \sum_{i=1}^d x_i^{(1)} x_i^{(2)}$$

Il permet de définir la norme euclidienne : $||\mathbf{x}||_2 = \sqrt{\mathbf{x}^\top \mathbf{x}}$.

Pour les matrices, l'équivalent est le produit matriciel : $(\mathbf{X}^{(1)}\mathbf{X}^{(2)})_{i,j} = \sum_k X^{(1)}_{i,k} X^{(2)}_{k,j}$.

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Norme]]

## Flashcards

#flashcards/IFT6135/00-revision

Formule du produit scalaire de deux vecteurs $\mathbf{x}, \mathbf{y} \in \mathbb{R}^d$ ?::$\mathbf{x}^\top\mathbf{y} = \sum_{i=1}^d x_i y_i$

Comment le produit scalaire définit-il la norme euclidienne ?::$\|\mathbf{x}\|_2 = \sqrt{\mathbf{x}^\top\mathbf{x}}$

Élément $(i,j)$ du produit matriciel $\mathbf{A}\mathbf{B}$ ?::$(\mathbf{A}\mathbf{B})_{i,j} = \sum_k A_{i,k} B_{k,j}$ : le produit scalaire de la ligne $i$ de $\mathbf{A}$ et de la colonne $j$ de $\mathbf{B}$.