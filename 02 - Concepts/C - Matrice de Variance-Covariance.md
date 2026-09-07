---

type: concept

cours: [IFT6135]

statut: brouillon

---
Pour $K$ attributs / variables aléatoires $X_1,\ldots,X_d$, la matrice de covariance regroupe toutes les covariances par paires :

$$\text{Cov}(\mathbf{X}) = \begin{bmatrix} \text{Cov}(X_1,X_1) & \cdots & \text{Cov}(X_1,X_d) \\ \vdots & \ddots & \vdots \\ \text{Cov}(X_d,X_1) & \cdots & \text{Cov}(X_d,X_d) \end{bmatrix}$$
Toujours symétrique et semi-définie positive.
  
**Estimateur (sans biais)** à partir d'un échantillon $\{\mathbf{x}^{(t)}\}$ :

$$\widehat{\Sigma} = \frac{1}{T-1}\sum_t (\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})(\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})^\top$$
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Covariance]]
- [[C - Matrice Symétrique Définie Positive]]