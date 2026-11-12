---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Soit $\widehat\theta$ un estimateur **sans biais** d'un paramètre scalaire $\theta$. Sous des conditions de régularité,
$$\mathrm{Var}[\widehat\theta]\ \ge\ \frac{1}{I(\theta)}$$
où $I(\theta)$ est l'[[C - Information de Fisher|information de Fisher]]. (Version multivariée : $\mathrm{Cov}[\widehat\theta]\succeq I(\theta)^{-1}$.)

## Hypothèses

Régularité de $p(x;\theta)$ (support indépendant de $\theta$, dérivation sous l'intégrale permise) ; estimateur sans biais.

## Preuve

Non vue en classe. *(Idée : Cauchy-Schwarz entre $\widehat\theta-\theta$ et le score $\partial_\theta\log p(X;\theta)$, dont la covariance vaut 1 pour un estimateur sans biais.)*

## Corollaires / Conséquences

**Optimalité asymptotique du MLE** : parmi les estimateurs sans biais d'un paramètre scalaire, le [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] a asymptotiquement la plus petite variance, puisque $\sqrt n(\widehat\theta_{\text{MLE}}-\theta)\xrightarrow{d}\mathcal N(0,I(\theta)^{-1})$ atteint la borne.

## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Borne de Cramér-Rao ?::Pour $\widehat\theta$ sans biais d'un $\theta$ scalaire : $\mathrm{Var}[\widehat\theta]\ge 1/I(\theta)$.

Quel lien entre Cramér-Rao et le MLE ?::Le MLE atteint asymptotiquement la borne ($\sqrt n(\widehat\theta-\theta)\to\mathcal N(0,I^{-1})$) : variance asymptotique minimale parmi les estimateurs sans biais.

Quelle hypothèse sur l'estimateur la borne de Cramér-Rao (forme de base) exige-t-elle ?::Qu'il soit sans biais (plus des conditions de régularité sur $p(x;\theta)$, ex. support indépendant de $\theta$).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Information de Fisher]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
