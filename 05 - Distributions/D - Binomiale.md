---
type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-09-08
---
La loi binomiale $\mathrm{Bin}(n,\theta)$ est définie comme la somme de $n$ variables aléatoires [[D - Bernoulli|Bernoulli]] i.i.d. de paramètre $\theta$ : $$X_i \overset{\text{iid}}{\sim} \mathrm{Bern}(\theta), \qquad X \triangleq \sum_{i=1}^n X_i \ \Longrightarrow\ X \sim \mathrm{Bin}(n,\theta)$$

- Support : $\Omega_X = {0,1,\dots,n}$. Espace des paramètres : $\Theta = [0,1]$.
- **pmf** : $$p(x;\theta) = \binom{n}{x}\theta^x(1-\theta)^{n-x}, \qquad \binom{n}{x} \triangleq \frac{n!}{x!(n-x)!}$$ $\binom{n}{x}$ = nombre de façons d'obtenir $x$ succès sur $n$ essais. Le terme $\theta^x(1-\theta)^{n-x}$ est le produit des pmf de $n$ Bernoulli, puisque $\theta^{\sum x_i}(1-\theta)^{\sum(1-x_i)} = \prod_{i=1}^n \mathrm{Bern}(x_i;\theta)$.

## Propriétés

Déduites de celles de la Bernoulli, par [[C - Indépendance (variables aléatoires)|indépendance]] : $$E[X] = \sum_i E[X_i] = n\theta \qquad \mathrm{Var}[X] = \sum_i \mathrm{Var}[X_i] = n\theta(1-\theta)$$
**Intuition** : modélise $n$ lancers de pièce indépendants (ex. le nombre total de faces).

## Lien avec l'interprétation fréquentiste

La moyenne empirique $\frac1n\sum_i X_i$ (avec $\sum_i X_i \sim \mathrm{Bin}(n,\theta)$) converge vers $\theta$ par la [[T - Loi des grands nombres]], et se concentre autour de $\theta$ à un taux donné par le [[T - Théorème central limite]] (voir [[C - Interprétations de la probabilité (fréquentiste vs bayésienne)]]).

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Bernoulli]]
- [[C - Interprétations de la probabilité (fréquentiste vs bayésienne)]]