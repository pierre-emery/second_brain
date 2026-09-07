---

type: concept

cours: [STT2105, IFT6135]

statut: brouillon

---
La mesure dans laquelle les attributs varient ensemble et est calculé par $$cov(x,y) = \frac 1 n \sum^n_{i=1}(x_i - \bar x)(y_i-\bar y)$$Cette valeur dépend de l'ampleur / l'étendue des valeurs des attributs.

Pour K attributs, ceux-ci forment la [[C - Matrice de Variance-Covariance]].
## Définition probabiliste
$$\text{Cov}(X_1,X_2) = E[(X_1-E[X_1])(X_2-E[X_2])] = \sum_{x_1}\sum_{x_2}(x_1-E[X_1])(x_2-E[X_2])\,p(x_1,x_2)$$
Si $X_1, X_2$ indépendantes, $\text{Cov}(X_1,X_2)=0$. On a $\text{Var}(X) = \text{Cov}(X,X)$.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice de Variance-Covariance]]
- [[C - Indépendance (variables aléatoires)]]