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
## Flashcards

#flashcards/IFT6135/00-revision

Élément $(i,j)$ de la matrice de covariance ?::$\mathrm{Cov}(X_i, X_j)$ ; la diagonale contient les variances.

Deux propriétés structurelles de toute matrice de covariance ?::Symétrique et semi-définie positive.
<!--SR:!2026-10-19,3,250-->

Estimateur sans biais de la covariance à partir de $T$ exemples ?::$\widehat\Sigma = \frac{1}{T-1}\sum_t (\mathbf{x}^{(t)} - \widehat{\boldsymbol\mu})(\mathbf{x}^{(t)} - \widehat{\boldsymbol\mu})^\top$ : avec $T-1$, pas $T$.