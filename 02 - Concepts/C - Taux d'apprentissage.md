---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-11
---
C'est l'un des [[C - Hyperparamètres]] les plus importants lors de l'entraînement d'un modèle.
## Conditions de convergence (SGD)

La descente de gradient stochastique converge si le taux d'apprentissage $\alpha_t$ de la $t$-ième mise à jour satisfait :
$$\sum_{t=1}^\infty \alpha_t = \infty \qquad \text{et} \qquad \sum_{t=1}^\infty \alpha_t^2 < \infty$$
## Stratégies de décroissance

Avec $\delta$ la constante de décroissance :
$$\alpha_t = \frac{\alpha}{1+\delta t} \qquad \text{ou} \qquad \alpha_t = \frac{\alpha}{t^\delta} \quad (0.5 < \delta \leq 1)$$

En pratique, il est souvent préférable d'utiliser un taux fixe pour les premières mises à jour.

## Règles de choix du pas (IFT6269, lecture 8)

Pas trop petit → convergence lente ; trop grand → divergence. Trois règles classiques pour la descente de gradient $w_{t+1}=w_t-\gamma_t\nabla f(w_t)$ :
1. **Pas constant** $\gamma_t=1/L$, où $L$ est la constante de [[C - Continuité de Lipschitz|Lipschitz]] de $\nabla f$ : $\|\nabla f(w)-\nabla f(w')\|\le L\|w-w'\|$.
2. **Pas décroissant** $\gamma_t=C/t$ : $\sum_t\gamma_t=\infty$ (on peut couvrir tout le domaine) et $\sum_t\gamma_t^2<\infty$ (on ne s'éloigne pas trop, on converge).
3. **Recherche linéaire** (*line search*) : $\gamma_t=\arg\min_\gamma f(w_t+\gamma d_t)$ ; coûteux, donc souvent approximatif (conditions d'Armijo ; voir Boyd & Vandenberghe, *Convex Optimization*).

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Hyperparamètres]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Continuité de Lipschitz]]

## Flashcards

#flashcards/IFT6135/02-entrainement

Conditions de convergence de SGD sur le taux $\alpha_t$ ?::$\sum_t \alpha_t = \infty$ et $\sum_t \alpha_t^2 < \infty$.

Interprète les deux conditions de convergence de SGD.::$\sum \alpha_t = \infty$ : on peut aller arbitrairement loin (atteindre l'optimum). $\sum \alpha_t^2 < \infty$ : les pas décroissent assez vite pour que le bruit du gradient s'annule.

Deux stratégies de décroissance du taux d'apprentissage ?::$\alpha_t = \dfrac{\alpha}{1 + \delta t}$ ou $\alpha_t = \dfrac{\alpha}{t^\delta}$ avec $0.5 < \delta \leq 1$.

#flashcards/IFT6269/08-regression-logistique

Pas constant classique en descente de gradient ?::$\gamma=1/L$, $L$ = constante de Lipschitz du gradient.

Qu'est-ce que la recherche linéaire (line search) ?::Choisir $\gamma_t=\arg\min_\gamma f(w_t+\gamma d_t)$ le long de la direction $d_t$ ; souvent approximée (Armijo) car coûteuse.
