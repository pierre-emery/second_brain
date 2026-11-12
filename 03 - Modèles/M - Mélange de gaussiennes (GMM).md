---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Modèle à [[C - Variable latente|variable latente]] pour des données non étiquetées (*Gaussian Mixture Model*) : chaque point vient d'une de $k$ composantes gaussiennes, choisie au hasard selon des proportions $\pi$. C'est la version **probabiliste et souple** du [[A - K-Means]].
$$z_i\sim\mathrm{Mult}(\pi),\qquad x_i\mid z_i=j\ \sim\ \mathcal N(\mu_j,\Sigma_j),\qquad p(x_i;\theta)=\sum_{j=1}^k\pi_j\,\mathcal N(x_i\mid\mu_j,\Sigma_j)$$

## Intuition

On imagine que les données ont été générées en deux temps : tirer un groupe $j$ avec probabilité $\pi_j$, puis tirer le point d'une gaussienne propre à ce groupe. Chaque groupe a sa propre forme (covariance $\Sigma_j$) : les groupes peuvent être allongés, inclinés, de tailles différentes, contrairement aux boules du K-Means. L'appartenance est **souple** : un point a une probabilité d'appartenir à chaque groupe.

## Formalisme

**Paramètres** : $\theta=\big(\pi,(\mu_j)_{j=1}^k,(\Sigma_j)_{j=1}^k\big)$, avec $\pi\in\Delta_k$ ; $z_i$ encodé en one-hot ($z_{ij}=1$ ssi $x_i$ vient de la composante $j$). On note $x=x_{1:n}$, $z=z_{1:n}$.

**Modèle graphique** : en [[C - Notation en plaques|notation en plaques]], $z_i\to x_i$ dans une plaque $i=1..n$, avec $x_i$ observé et $z_i$ latent.

**Log-vraisemblance complète** (si $z$ était observé) :
$$\log p(x,z;\theta)=\sum_{i=1}^n\Big[\underbrace{\log p(x_i\mid z_i;\theta)}_{\text{gaussienne}}+\underbrace{\log p(z_i;\theta)}_{\text{multinoulli}}\Big]=\sum_{i=1}^n\sum_{j=1}^kz_{ij}\big(\log\mathcal N(x_i\mid\mu_j,\Sigma_j)+\log\pi_j\big).$$

**Postérieure (responsabilités)** : les couples $(x_i,z_i)$ sont indépendants, donc $p(z\mid x)=\prod_ip(z_i\mid x_i)$ et
$$\tau_{ij}\triangleq p(z_{ij}=1\mid x_i;\theta)=\frac{\pi_j\,\mathcal N(x_i\mid\mu_j,\Sigma_j)}{\sum_{l=1}^k\pi_l\,\mathcal N(x_i\mid\mu_l,\Sigma_l)}.$$

**Estimation** : la vraisemblance marginale $\sum_i\log\sum_j\pi_j\mathcal N(x_i\mid\mu_j,\Sigma_j)$ est multimodale et sans forme fermée → [[A - Algorithme EM (espérance-maximisation)|EM]], détaillé dans [[E - Algorithme EM pour un mélange de gaussiennes]].

## Propriétés

- **Pas une famille exponentielle** : un mélange de familles exponentielles n'en est pas une ([[D - Famille exponentielle]]). La méthode des moments et le MLE peuvent donc différer (méthodes spectrales, [[C - Méthode des moments]]).
- **Lien avec K-Means** : avec $\Sigma_j=\sigma^2I$ fixé et $\sigma^2\to0$, l'EM du GMM devient exactement K-Means.
- **Non-identifiabilité** : permuter les composantes donne la même loi (symétrie des étiquettes), d'où une vraisemblance multimodale.

## Hyperparamètres

Nombre de composantes $k$ ; structure des covariances (pleine, diagonale, sphérique, partagée) ; initialisation.

## IFT6269 — notation

Les notes de 2020 écrivent $\theta=(\pi,(\mu_i)_{i=1}^n,(\Sigma_i)_{i=1}^n)$ : **coquille**, les composantes sont indexées par $j=1..k$, pas par les données.

## Flashcards
#flashcards/IFT6269/10-non-supervise

Modèle génératif d'un mélange de gaussiennes ?::$z_i\sim\mathrm{Mult}(\pi)$, puis $x_i\mid z_i=j\sim\mathcal N(\mu_j,\Sigma_j)$ ; marginale $p(x_i)=\sum_j\pi_j\mathcal N(x_i\mid\mu_j,\Sigma_j)$.

Formule de la responsabilité $\tau_{ij}$ ?::$\tau_{ij}=\pi_j\mathcal N(x_i\mid\mu_j,\Sigma_j)/\sum_l\pi_l\mathcal N(x_i\mid\mu_l,\Sigma_l)=p(z_{ij}=1\mid x_i)$.

Pourquoi n'y a-t-il pas de forme fermée pour le MLE d'un GMM ?::La log-vraisemblance contient $\log\sum_j\pi_j\mathcal N(\cdot)$ : le log d'une somme, multimodal, non concave. On passe par EM.

Que se passe-t-il pour un GMM avec $\Sigma_j=\sigma^2I$ fixé quand $\sigma^2\to0$ ?
?
Les responsabilités $\tau_{ij}$ deviennent des indicatrices du centre le plus proche (assignation dure), et l'étape M recalcule des moyennes : on retrouve exactement K-Means.

Avantages d'un GMM sur K-Means ?::Appartenance souple (probabiliste) et groupes de formes différentes (covariances $\Sigma_j$), pas seulement sphériques.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[E - Algorithme EM pour un mélange de gaussiennes]]
- [[A - K-Means]]
- [[A - K-Means++]]
- [[C - Variable latente]]
- [[D - Loi Gaussienne (Normale)]]
- [[D - Multinomiale (et Multinoulli)]]
- [[M - Modèle de Markov Caché (HMM)]]
