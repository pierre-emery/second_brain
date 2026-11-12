---
type: concept
cours: [IFT6758, STT2105, STT3790, IFT6135, IFT6269]
statut: complet
tags: []
prerequis:
  - "[[C - Risque]]"
maj: 2026-11-11
---
Le risque empirique est l'approximation du [[C - Risque]] sur le jeu de donnée qu'on a pratiquement. Il est donné par $\widehat R(f) = \frac{1}{|D|}\Sigma_{i=1}^{|D|}l(y_i,f(x_i))$ pour la [[C - Fonction de perte]] $l(y_i,f(x_i))$ qui mesure l'erreur du modèle. (ici $|D|$ est la cardinalité du jeu de donnée).

Cadre pour concevoir des algorithmes d'apprentissage : on choisit les paramètres $\theta$ qui minimisent la perte moyenne sur l'ensemble d'entraînement, éventuellement régularisée :

$$\arg\min_\theta\ \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) + \lambda\,\Omega(\theta)$$

où $l(f(\mathbf{x}^{(t)};\theta), y^{(t)})$ est la fonction de perte.

L'apprentissage est ainsi posé comme un problème d'optimisation. Idéalement on voudrait optimiser directement l'erreur de classification, mais elle n'est pas différentiable. La fonction de perte agit comme substitut (ex. une borne supérieure).

## ERM comme règle de décision (IFT6269)

Le but est $f^*=\arg\min_{f\in\mathcal Y^{\mathcal X}}\mathbb E_{P_0}[\ell(y,f(x))]$, incalculable puisque $P_0$ est inconnu. L'**ERM** (*empirical risk minimizer*) est un estimateur de $f^*$ restreint à un **espace d'hypothèses** $\mathcal F\subseteq\mathcal Y^{\mathcal X}$ :
$$\widehat f_{\text{ERM}}=\arg\min_{f\in\mathcal F}\ \widehat{\mathbb E}[\ell(y,f(x))]=\arg\min_{f\in\mathcal F}\ \frac1n\sum_{i=1}^n\ell(y_i,f(x_i))$$
C'est une [[C - Règle de décision]] $\delta:\mathcal D\to\mathcal Y^{\mathcal X}$ ; le risque minimisé empiriquement est le [[C - Risque|risque de Vapnik]].

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Fonction de perte]]
- [[C - Régularisation]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Règle de décision]]

## Flashcards

#flashcards/IFT6135/00-revision

Formule du risque empirique régularisé ?::$\arg\min_\theta \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)}; \theta), y^{(t)}) + \lambda\,\Omega(\theta)$

Pourquoi minimise-t-on une perte substitut plutôt que l'erreur de classification ?::L'erreur de classification n'est pas différentiable ; la perte (p. ex. entropie croisée) en est un substitut lisse, souvent une borne supérieure.

#flashcards/IFT6269/05-theorie-decision

Définition de l'estimateur ERM ?::$\widehat f_{\text{ERM}}=\arg\min_{f\in\mathcal F}\frac1n\sum_i\ell(y_i,f(x_i))$, minimiseur du risque empirique sur l'espace d'hypothèses $\mathcal F$.
