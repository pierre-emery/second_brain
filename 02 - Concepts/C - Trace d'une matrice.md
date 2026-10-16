---

type: concept

cours: [IFT6135]

statut: brouillon

---
Somme des éléments diagonaux d'une matrice carrée :

$$\text{trace}(\mathbf{X}) = \sum_i X_{i,i}$$

**Propriété cyclique** (trace d'un produit invariante par permutation circulaire) :

$$\text{trace}(\mathbf{X}^{(1)}\mathbf{X}^{(2)}\mathbf{X}^{(3)}) = \text{trace}(\mathbf{X}^{(3)}\mathbf{X}^{(1)}\mathbf{X}^{(2)}) = \text{trace}(\mathbf{X}^{(2)}\mathbf{X}^{(3)}\mathbf{X}^{(1)})$$

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Norme]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition de la trace ?::Somme des éléments diagonaux : $\mathrm{trace}(\mathbf{X}) = \sum_i X_{i,i}$.

Propriété cyclique de la trace ?::$\mathrm{trace}(\mathbf{A}\mathbf{B}\mathbf{C}) = \mathrm{trace}(\mathbf{C}\mathbf{A}\mathbf{B}) = \mathrm{trace}(\mathbf{B}\mathbf{C}\mathbf{A})$ : invariante par permutation **circulaire** (pas par n'importe quelle permutation).

Comment s'écrit $\|\mathbf{X}\|_F^2$ avec une trace ?::$\|\mathbf{X}\|_F^2 = \mathrm{trace}(\mathbf{X}^\top\mathbf{X})$