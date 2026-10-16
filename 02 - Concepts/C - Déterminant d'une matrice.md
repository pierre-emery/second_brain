---

type: concept

cours: [IFT6135]

statut: brouillon

---
Scalaire associé à une matrice carrée, notamment relié à l'inversibilité (une matrice n'est pas inversible si $\det(\mathbf{X})=0$).

  
**Propriétés utiles :**

- Matrice triangulaire : $\det(\mathbf{X}) = \prod_i X_{i,i}$
- Transposée : $\det(\mathbf{X}^\top) = \det(\mathbf{X})$
- Inverse : $\det(\mathbf{X}^{-1}) = \det(\mathbf{X})^{-1}$
- Produit : $\det(\mathbf{X}^{(1)}\mathbf{X}^{(2)}) = \det(\mathbf{X}^{(1)})\det(\mathbf{X}^{(2)})$
- Via valeurs propres (**pour toute matrice**) : $\det(\mathbf{X}) = \prod_i \lambda_i$
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Inverse d'une matrice]]
## Flashcards

#flashcards/IFT6135/00-revision

Lien entre déterminant et inversibilité ?::$\mathbf{X}$ est inversible si et seulement si $\det(\mathbf{X}) \neq 0$.

Donne 4 propriétés du déterminant (transposée, inverse, produit, valeurs propres).
?
$\det(\mathbf{X}^\top) = \det(\mathbf{X})$ ; $\det(\mathbf{X}^{-1}) = \det(\mathbf{X})^{-1}$ ; $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})$ ; $\det(\mathbf{X}) = \prod_i \lambda_i$.

Pourquoi une matrice avec une valeur propre nulle n'est-elle pas inversible ?::Parce que $\det(\mathbf{X}) = \prod_i \lambda_i = 0$ (et il existe $\mathbf{u} \neq 0$ avec $\mathbf{X}\mathbf{u} = 0$, donc l'espace nul n'est pas trivial).