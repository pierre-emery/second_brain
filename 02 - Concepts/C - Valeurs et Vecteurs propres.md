---

type: concept

cours: [IFT6135]

statut: brouillon

---
Pour une matrice $\mathbf{X}$, les paires $(\lambda_i, \mathbf{u}_i)$ telles que

$$\mathbf{X}\mathbf{u}_i = \lambda_i \mathbf{u}_i \quad \text{et} \quad \mathbf{u}_i^\top \mathbf{u}_j = 1_{i=j}$$

**Propriétés :**

- Décomposition : $\mathbf{X} = \sum_i \lambda_i \mathbf{u}_i \mathbf{u}_i^\top$
- Déterminant (pour toute matrice) : $\det(\mathbf{X}) = \prod_i \lambda_i$
- $\mathbf{X}$ est définie positive si $\lambda_i > 0\ \forall i$
- Le rang de $\mathbf{X}$ est le nombre de valeurs propres non-nulles
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Rang d'une matrice]]
- [[C - Déterminant d'une matrice]]
- [[C - Matrice Symétrique Définie Positive]]
## Flashcards

#flashcards/IFT6135/00-revision

Équation définissant une paire valeur propre / vecteur propre $(\lambda, \mathbf{u})$ ?::$\mathbf{X}\mathbf{u} = \lambda\mathbf{u}$, avec $\mathbf{u} \neq \mathbf{0}$.

Décomposition spectrale d'une matrice symétrique réelle ?::$\mathbf{X} = \sum_i \lambda_i \mathbf{u}_i\mathbf{u}_i^\top$, avec des vecteurs propres orthonormaux ($\mathbf{u}_i^\top\mathbf{u}_j = 1_{i=j}$).

Critère de définie positivité via les valeurs propres (matrice symétrique) ?::$\mathbf{X}$ est définie positive ssi $\lambda_i > 0$ pour tout $i$.

Lien entre déterminant et valeurs propres ?::$\det(\mathbf{X}) = \prod_i \lambda_i$ (valeurs propres comptées avec multiplicité, éventuellement complexes).