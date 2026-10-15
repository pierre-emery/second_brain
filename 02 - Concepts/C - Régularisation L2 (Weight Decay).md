---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Forme la plus courante de [[C - Régularisation]], pénalisant la norme au carré des poids (pas des biais) :

$$\Omega(\theta) = \sum_k \sum_i \sum_j \left(W^{(k)}_{i,j}\right)^2 = \sum_k ||\mathbf{W}^{(k)}||_F^2$$
  **Gradient** : $\nabla_{\mathbf{W}^{(k)}} \Omega(\theta) = 2\mathbf{W}^{(k)}$

  **Interprétation** : équivaut à placer un **a priori gaussien** sur les poids. Aussi appelée « weight decay » car elle tire les poids vers 0 à chaque mise à jour.
## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Régularisation]]
- [[C - Régularisation L1]]
- [[C - Norme]]