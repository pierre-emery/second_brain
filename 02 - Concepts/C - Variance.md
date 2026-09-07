---

type: concept

cours: [STT2105, IFT6135]

statut: brouillon

---
$$s^2_x = \frac 1 n \sum^n_{i=1}(x_i-\bar x)^2$$ et [[C - Écart-Type (STD)]] $=s_x$ sont les manières les plus courantes de mesurer la dispersion des valeurs. Cependant comme la [[C - Moyenne]], ils sont sensibles aux valeurs aberrantes.
## Remarque

Il y a d'autres manières de mesurer la diffusion comme :
- la déviation absolue moyenne (la moyenne de $|x_i - \bar x|$)
- la déviation absolue médiane (la médiane de |$x_i -  \bar x$|)
- l'[[C - Écart Interquartile]]

## Définition probabiliste

Pour une variable aléatoire $X$ :

$$\text{Var}[X] = \sum_x (x-E[X])^2\,p(X=x) = E[X^2]-E[X]^2$$

Si $X$ et $Y$ sont indépendantes : $\text{Var}[X+Y] = \text{Var}[X]+\text{Var}[Y]$. On a aussi $\text{Var}(X) = \text{Cov}(X,X)$.

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Covariance]]