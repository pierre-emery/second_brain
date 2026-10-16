---

type: concept

cours: [IFT6135]

statut: brouillon

---
Mesure de la « taille » d'un vecteur ou d'une matrice.

**Norme euclidienne (vecteur)** :

$$||\mathbf{x}||_2 = \sqrt{\mathbf{x}^\top \mathbf{x}} = \sqrt{\sum_i x_i^2}$$

**Norme de Frobenius (matrice)** :

$$||\mathbf{X}||_F = \sqrt{\text{trace}(\mathbf{X}^\top \mathbf{X})} = \sqrt{\sum_i \sum_j X_{i,j}^2}$$
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Produit Scalaire]]
- [[C - Trace d'une matrice]]
## Flashcards

#flashcards/IFT6135/00-revision

Norme euclidienne d'un vecteur (deux écritures) ?::$\|\mathbf{x}\|_2 = \sqrt{\mathbf{x}^\top\mathbf{x}} = \sqrt{\sum_i x_i^2}$

Norme de Frobenius d'une matrice (deux écritures) ?::$\|\mathbf{X}\|_F = \sqrt{\mathrm{trace}(\mathbf{X}^\top\mathbf{X})} = \sqrt{\sum_{i,j} X_{i,j}^2}$

Quelle norme pénalise la régularisation L2 des poids d'un réseau ?::Le carré de la norme de Frobenius, $\|\mathbf{W}\|_F^2$.