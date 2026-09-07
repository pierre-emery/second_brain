---

type: concept

cours: [IFT6135]

statut: brouillon

---
Estimateur des paramètres $\theta$ qui maximise la vraisemblance des données observées :

$$\widehat\theta = \arg\max_\theta\ p(\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(T)})$$

**Exemple (gaussienne)** : la moyenne échantillonnale $\widehat{\boldsymbol\mu}$ est le MLE de $\boldsymbol\mu$. La matrice de covariance échantillonnale (avec $T-1$) n'est **pas** le MLE. Le MLE utilise plutôt $T$ :

$$\frac{T-1}{T}\widehat\Sigma = \frac{1}{T}\sum_t (\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})(\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})^\top$$

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Vraisemblance]]
- [[C - Hypothèse i.i.d.]]