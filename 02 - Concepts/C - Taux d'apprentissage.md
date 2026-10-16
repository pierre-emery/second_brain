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
## Flashcards

#flashcards/IFT6135/02-entrainement

Conditions de convergence de SGD sur le taux $\alpha_t$ ?::$\sum_t \alpha_t = \infty$ et $\sum_t \alpha_t^2 < \infty$.

Interprète les deux conditions de convergence de SGD.::$\sum \alpha_t = \infty$ : on peut aller arbitrairement loin (atteindre l'optimum). $\sum \alpha_t^2 < \infty$ : les pas décroissent assez vite pour que le bruit du gradient s'annule.

Deux stratégies de décroissance du taux d'apprentissage ?::$\alpha_t = \dfrac{\alpha}{1 + \delta t}$ ou $\alpha_t = \dfrac{\alpha}{t^\delta}$ avec $0.5 < \delta \leq 1$.
