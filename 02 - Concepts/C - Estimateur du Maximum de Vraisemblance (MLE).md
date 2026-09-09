---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: à réviser
maj: 2026-09-08
---

Estimateur des paramètres $\theta$ qui maximise la vraisemblance des données observées :

$$\widehat\theta = \arg\max_\theta\ p(\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(T)})$$

**Exemple (gaussienne)** : la moyenne échantillonnale $\widehat{\boldsymbol\mu}$ est le MLE de $\boldsymbol\mu$. La matrice de covariance échantillonnale (avec $T-1$) n'est **pas** le MLE. Le MLE utilise plutôt $T$ :

$$\frac{T-1}{T}\widehat\Sigma = \frac{1}{T}\sum_t (\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})(\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})^\top$$

## Exemple (Binomiale, IFT6269)

Pour $X \sim \mathrm{Bin}(n,\theta)$ observé, $x$ succès sur $n$ essais : $$\widehat\theta_{\text{MLE}}(x) = \frac{x}{n}$$ Le MLE est **non biaisé** ($E[\widehat\theta_{\text{MLE}}]=\theta$), mais il a tendance à sur-apprendre (overfitting) sur peu de données : si toutes les observations sont des succès ($x=n$), le MLE donne $\widehat\theta=1$ avec une confiance totale, sans encoder d'incertitude résiduelle. Comparer avec l'estimateur bayésien (voir [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]).

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Vraisemblance]]
- [[C - Hypothèse i.i.d.]]
- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[D - Binomiale]]