---

type: concept

cours: [IFT6135]

statut: brouillon

---
**Points critiques** : $\{\mathbf{x} \in \mathbb{R}^d \mid \nabla_\mathbf{x} f(\mathbf{x}) = 0\}$

**Courbure** dans la direction $\mathbf{v}$ : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v}$

**Types de points critiques** (via la Hessienne) :

- Minimum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} > 0\ \forall \mathbf{v}$ (Hessienne définie positive)
- Maximum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} < 0\ \forall \mathbf{v}$ (Hessienne définie négative)
- Point-selle : la courbure est positive dans certaines directions, négative dans d'autres

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice Hessienne]]
- [[C - Gradient]]