---
type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-09-08
---
$$\mathrm{Beta}(\theta;\alpha,\beta) \triangleq \frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{B(\alpha,\beta)}\mathbb 1_{[0,1]}(\theta)$$ où $B(\alpha,\beta) \triangleq \dfrac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$ est la **fonction Beta**, et $\Gamma(a) \triangleq \int_0^\infty u^{a-1}e^{-u},du$ est la **fonction Gamma**.

- Support : $\Omega_\Theta = [0,1]$ — c'est pourquoi elle sert typiquement de [[C - Distribution à priori|distribution à priori]] pour un paramètre de probabilité (ex. le $\theta$ d'une [[D - Bernoulli|Bernoulli]]).
- $E[\mathrm{Beta}(\theta;\alpha,\beta)] = \dfrac{\alpha}{\alpha+\beta}$
- Cas particulier : la loi Beta est une loi de **Dirichlet à 2 éléments**.

## Conjugaison avec la Bernoulli/Binomiale

Si $\theta \sim \mathrm{Beta}(\alpha,\beta)$ (a priori) et $X\mid\theta \sim \mathrm{Bin}(n,\theta)$ (ou une somme de [[D - Bernoulli|Bernoulli]]), alors la [[C - Distribution à postériori|distribution a postériori]] est aussi une Beta : $$\theta \mid X=x \ \sim\ \mathrm{Beta}(\alpha+x,\ \beta+n-x)$$ C'est un exemple classique de **conjugaison** (voir [[C - Modèle Bayésien]] et [[C - Distribution à postériori]] pour la dérivation complète (avec $\alpha=\beta=1$, prior uniforme)).

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Bernoulli]]
- [[D - Binomiale]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]