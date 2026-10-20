---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-09-08
---
Complète la [[T - Loi des grands nombres]] en quantifiant la **vitesse** de concentration de la moyenne empirique autour de l'espérance.

## Exemple (moyenne de Bernoulli)

Pour $B_i \overset{\text{iid}}{\sim} \mathrm{Bern}(\theta)$, avec $\sum_i B_i \sim \mathrm{Bin}(n,\theta)$ : $$E\left[\frac1n\sum_i B_i\right] = \theta, \qquad \mathrm{Var}\left[\frac1n\sum_i B_i\right] = \frac{\theta(1-\theta)}{n}$$ La variance de la moyenne empirique tend vers $0$ quand $n\to\infty$ ; c'est la **concentration**. Plus précisément, le théorème central limite donne : $$\sqrt n\left(\frac1n\sum_i B_i - \theta\right) \ \xrightarrow[n\to\infty]{d}\ \mathcal N\big(0,\ \theta(1-\theta)\big)$$ Le facteur d'échelle $\sqrt n$ est nécessaire pour obtenir une distribution limite non-dégénérée. Pour $n$ grand, la moyenne empirique suit donc approximativement $\mathcal N\left(\theta,\ \frac{\theta(1-\theta)}{n}\right)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[T - Loi des grands nombres]]
- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[D - Loi Gaussienne (Normale)]]
## Flashcards

#flashcards/IFT6269/01-probabilites

Qu'ajoute le TCL à la loi des grands nombres ?::La vitesse de concentration de la moyenne empirique autour de l'espérance (et sa forme limite gaussienne).

Variance de la moyenne empirique de $n$ Bernoulli($\theta$) i.i.d. ?::$\dfrac{\theta(1-\theta)}{n}$ : elle tend vers 0 (concentration).

Énonce le TCL pour une moyenne de Bernoulli.::$\sqrt n\Big(\frac1n\sum_i B_i - \theta\Big) \xrightarrow{d} \mathcal N\big(0, \theta(1-\theta)\big)$.

Pourquoi le facteur $\sqrt n$ dans le TCL ?::Sans lui, la moyenne converge vers une constante (limite dégénérée) ; $\sqrt n$ compense la variance en $1/n$.