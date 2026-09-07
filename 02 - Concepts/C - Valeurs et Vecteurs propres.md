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