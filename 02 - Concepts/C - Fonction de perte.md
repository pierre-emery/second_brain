Une fonction de perte est n'importe quelle fonction telle que $L:\Theta \times \mathcal A \rightarrow [0,\infty)$  où $\Theta$ est l'espace paramètre et $\mathcal A$ est l'espace décisionnel.
## Notes
- $L(\theta,a)$ mesure la perte (ou l'erreur) associée à la décision $a$ lorsque le paramètre est $\theta$
- Nous pourrions construire notre propre fonction de perte pour un problème donné, mais c'est souvent trop compliqué
- Il existe des fonctions de perte standards qui en général font l'affaire
Voici quelques exemples de fonction de pertes
- [[C - Perte quadratique (MSE)]]
- [[C - Perte 0-1]]
- [[C - Perte Vraisemblance]] 

## Lien avec densité à priori
La fonction de perte et la [[C - Distribution a priori]] sont reliées de très près. Si $L(\theta, a) = \omega(\theta)(\theta - a)^2$ alors

$$
\delta_\pi(x)=
\frac{\int_{\Theta} \omega(\theta)\,\theta\,L(\theta\mid x)\,\pi(\theta)\,d\theta}
{\int_{\Theta} \omega(\theta)\,L(\theta\mid x)\,\pi(\theta)\,d\theta}.
$$

Posons $\pi^*(\theta)\propto \pi(\theta)\omega(\theta)$, soit une nouvelle densité *a priori* car $\omega(\theta)\ge 0$ pour tout $\theta$.
Si

$$
\int_{\Theta}\omega(\theta)\pi(\theta)L(\theta\mid x)\,d\theta < \infty,
$$

alors

$$
\delta_\pi(x)=
\frac{\int_{\Theta}\theta\,\pi^*(\theta)\,L(\theta\mid x)\,d\theta}
{\int_{\Theta}\pi^*(\theta)\,L(\theta\mid x)\,d\theta}
= \mathbb{E}^*[\theta\mid x].
$$

Il s’agit de l’[[C - Estimateur de Bayes]] lorsque $\pi^*(\theta)$ et la densité *a priori* est

$$
L(\theta, a) = (\theta - a)^2.
$$ ce qui est la [[C - Perte quadratique (MSE)]]

## Notes:
- Si $k_1=k_2=k$, alors $L(\theta,a)=k|\theta-a|$, soit la fonction de perte en valeur absolue. Dans ce cas $\delta_\pi(x)=\text{médiane de }\pi(\theta|x)$.
- Comme il est plus facile de calculer l'espérance que de calcler un percentile, la fonction de [[C - Perte quadratique (MSE)]] est plus utilisée que la fonction de [[C - Perte Linéaire]]