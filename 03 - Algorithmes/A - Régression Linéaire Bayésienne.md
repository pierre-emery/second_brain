---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Application de l'inférence bayésienne complète (voir [[C - Modèle Bayésien]]) au problème de la [[A - Régression Linéaire|régression linéaire]] : plutôt que d'estimer un seul vecteur de poids $\mathbf{w}$, on calcule une **distribution a posteriori** complète sur $\mathbf{w}$.

## Vraisemblance

Pour des prédictions $\widehat{\mathbf{y}} = \mathbf{X}\mathbf{w}$ sur l'ensemble d'entraînement, on suppose (comme pour la [[C - Estimateur du Maximum de Vraisemblance (MLE)|justification par MLE]] de la régression linéaire) :

$$p(\mathbf{y}\mid \mathbf{X},\mathbf{w}) = \mathcal{N}(\mathbf{y}; \mathbf{X}\mathbf{w}, \mathbf{I}) \propto \exp\left(-\frac{1}{2}(\mathbf{y}-\mathbf{X}\mathbf{w})^\top(\mathbf{y}-\mathbf{X}\mathbf{w})\right)$$

## Prior

On spécifie un prior gaussien sur $\mathbf{w}$, reflétant une croyance large et incertaine avant d'observer les données :

$$p(\mathbf{w}) = \mathcal{N}(\mathbf{w};\boldsymbol\mu_0,\boldsymbol\Lambda_0)$$

## Distribution a posteriori

En combinant vraisemblance et prior, la distribution a posteriori est elle-même gaussienne, de moyenne $\boldsymbol\mu_m$ et covariance $\boldsymbol\Lambda_m$ :

$$\boldsymbol\Lambda_m = (\mathbf{X}^\top\mathbf{X}+\boldsymbol\Lambda_0^{-1})^{-1}, \qquad \boldsymbol\mu_m = \boldsymbol\Lambda_m(\mathbf{X}^\top\mathbf{y}+\boldsymbol\Lambda_0^{-1}\boldsymbol\mu_0)$$

## Lien avec la décroissance des poids

Si $\boldsymbol\mu_0 = \mathbf{0}$ et $\boldsymbol\Lambda_0 = \frac{1}{\alpha}\mathbf{I}$, alors $\boldsymbol\mu_m$ donne exactement la même estimation de $\mathbf{w}$ que la régression linéaire fréquentiste avec une pénalité de [[C - Décroissance des poids (Weight Decay)|décroissance des poids]] $\alpha\mathbf{w}^\top\mathbf{w}$.

## Différence essentielle avec l'approche fréquentiste/MAP

L'estimation bayésienne complète fournit une **matrice de covariance** donnant une mesure de la plausibilité de chaque valeur possible de $\mathbf{w}$ plutôt qu'une seule estimation ponctuelle $\boldsymbol\mu_m$. Autre différence : l'estimé bayésien n'est pas défini si $\alpha=0$ (le processus bayésien ne peut pas commencer avec un prior infiniment large sur $\mathbf{w}$).

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Régression Linéaire]]
- [[C - Modèle Bayésien]]
- [[C - Décroissance des poids (Weight Decay)]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]