---
type: distribution
cours:
  - IFT6135
  - IFT6269
  - STT2105
  - STT3790
statut: brouillon
maj: 2026-09-08
---
**Cas univarié** ($X \in \mathbb{R}$) :

$$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \quad E[X]=\mu,\ \text{Var}[X]=\sigma^2$$

**Cas multivarié** ($\mathbf{X} \in \mathbb{R}^d$) :

$$p(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^d \det(\Sigma)}}\exp\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol\mu)^\top \Sigma^{-1}(\mathbf{x}-\boldsymbol\mu)\right), \quad E[\mathbf{X}]=\boldsymbol\mu,\ \text{Cov}[\mathbf{X}]=\Sigma$$
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Matrice de Variance-Covariance]]
- [[T - Théorème central limite]]