---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
C'est l'un des [[C - Hyperparamètres]] les plus importants lors de l'entraînement d'un modèle.
## Conditions de convergence (SGD)

La descente de gradient stochastique converge si le taux d'apprentissage $\alpha_t$ de la $t$-ième mise à jour satisfait :
$$\sum_{t=1}^\infty \alpha_t = \infty \qquad \text{et} \qquad \sum_{t=1}^\infty \alpha_t^2 < \infty$$
## Stratégies de décroissance

Avec $\delta$ la constante de décroissance :
$$\alpha_t = \frac{\alpha}{1+\delta t} \qquad \text{ou} \qquad \alpha_t = \frac{\alpha}{t^\delta} \quad (0.5 < \delta \leq 1)$$

En pratique, il est souvent préférable d'utiliser un taux fixe pour les premières mises à jour.
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Hyperparamètres]]
