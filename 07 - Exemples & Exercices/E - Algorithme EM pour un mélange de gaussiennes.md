---
type: exercice
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Énoncé

Pour un [[M - Mélange de gaussiennes (GMM)|mélange de gaussiennes]] $z_i\sim\mathrm{Mult}(\pi)$, $x_i\mid z_{ij}=1\sim\mathcal N(\mu_j,\Sigma_j)$, dériver les étapes E et M de l'[[A - Algorithme EM (espérance-maximisation)|EM]] :
1. l'étape E (responsabilités $\tau^{(t)}_{ij}$) ;
2. les mises à jour $\hat\pi_j$, $\hat\mu_j$, $\hat\Sigma_j$ ;
3. une initialisation raisonnable, et le lien avec K-Means.

## Solution

**1. Étape E.** $q_{t+1}(z)=p(z\mid x;\theta_t)=\prod_ip(z_i\mid x_i;\theta_t)$, avec $q_{t+1}(z_i)\propto p(x_i\mid z_i;\theta_t)\,p(z_i;\theta_t)$ :
$$\tau^{(t)}_{ij}\triangleq q_{t+1}(z_{ij}=1)=\frac{\pi^{(t)}_j\,\mathcal N(x_i\mid\mu^{(t)}_j,\Sigma^{(t)}_j)}{\sum_{l=1}^k\pi^{(t)}_l\,\mathcal N(x_i\mid\mu^{(t)}_l,\Sigma^{(t)}_l)}=\frac{p(x_i,z_{ij}=1\mid\theta^{(t)})}{p(x_i\mid\theta^{(t)})}.$$
Comme la log-vraisemblance complète est linéaire en $z_{ij}$, seule la marginale $\mathbb E_q[z_{ij}]=q(z_{ij}=1)=\tau_{ij}$ est nécessaire :
$$\mathbb E_q[\log p(x,z;\theta)]=\sum_{i=1}^n\sum_{j=1}^k\tau^{(t)}_{ij}\big(\log\mathcal N(x_i\mid\mu_j,\Sigma_j)+\log\pi_j\big).$$

**2. Étape M** : maximiser cette quantité en $\{\pi_j,\mu_j,\Sigma_j\}$. Les trois blocs se séparent. *(Le cours donne les résultats ; les dérivations sont ajoutées.)*

- **$\pi$** (sous $\sum_j\pi_j=1$) : [[C - Lagrangien|lagrangien]] $\sum_{i,j}\tau_{ij}\log\pi_j+\lambda(1-\sum_j\pi_j)$ ⇒ $\pi_j=\frac1\lambda\sum_i\tau_{ij}$, et $\sum_j\sum_i\tau_{ij}=n$ (chaque ligne somme à 1) ⇒ $\lambda=n$ :
$$\hat\pi^{(t+1)}_j=\frac1n\sum_{i=1}^n\tau^{(t)}_{ij}.$$
- **$\mu_j$** : $\log\mathcal N(x_i\mid\mu_j,\Sigma_j)=-\frac12(x_i-\mu_j)^\top\Sigma_j^{-1}(x_i-\mu_j)+\text{cst}$ ; par la différentielle de la [[C - Distance de Mahalanobis|distance de Mahalanobis]], $\sum_i\tau_{ij}\Sigma_j^{-1}(x_i-\mu_j)=0$ ⇒
$$\hat\mu^{(t+1)}_j=\frac{\sum_{i=1}^n\tau^{(t)}_{ij}\,x_i}{\sum_{i=1}^n\tau^{(t)}_{ij}}\qquad(\text{moyenne pondérée}).$$
- **$\Sigma_j$** : en paramétrant par la précision $\Lambda_j=\Sigma_j^{-1}$, l'objectif est $\sum_i\tau_{ij}\big[\frac12\log|\Lambda_j|-\frac12\mathrm{tr}\big(\Lambda_j(x_i-\mu_j)(x_i-\mu_j)^\top\big)\big]$ ; avec [[T - Différentielle du log-déterminant|$d\log|\Lambda|=\Lambda^{-1}$]] et $d\,\mathrm{tr}(\Lambda S)=S$ :
$$\hat\Sigma^{(t+1)}_j=\frac{\sum_{i=1}^n\tau^{(t)}_{ij}\,(x_i-\hat\mu^{(t+1)}_j)(x_i-\hat\mu^{(t+1)}_j)^\top}{\sum_{i=1}^n\tau^{(t)}_{ij}}\qquad(\text{covariance empirique pondérée}).$$

Ce sont les MLE d'une gaussienne et d'une multinoulli, avec des **comptes souples** au lieu de comptes durs (comme pour [[M - Analyse Discriminante Linéaire (LDA)|LDA]] avec des étiquettes observées).

**3. Initialisation et lien avec K-Means.**
- $\mu^{(0)}_j$ : centres de [[A - K-Means++]] ;
- $\Sigma^{(0)}_j=\sigma^2I$ avec $\sigma^2$ **grand** (covariance sphérique large) ;
- $\pi^{(0)}_j$ : proportions des groupes de K-Means++.

Si on fixe $\Sigma_j=\sigma^2I$ et qu'on fait $\sigma^2\to0$ : $\tau_{ij}\propto\pi_j\exp(-\|x_i-\mu_j\|^2/2\sigma^2)$ se concentre sur le centre le plus proche (assignation dure), et la mise à jour de $\mu_j$ devient la moyenne des points assignés : **on retrouve exactement K-Means**.

## À retenir

E = responsabilités (Bayes) ; M = MLE pondérés (proportion moyenne, moyenne pondérée, covariance pondérée). K-Means = limite dure et sphérique de l'EM pour le GMM.

## Flashcards
#flashcards/IFT6269/10-non-supervise

Mises à jour de l'étape M pour un GMM ?::$\hat\pi_j=\frac1n\sum_i\tau_{ij}$ ; $\hat\mu_j=\sum_i\tau_{ij}x_i/\sum_i\tau_{ij}$ ; $\hat\Sigma_j=\sum_i\tau_{ij}(x_i-\hat\mu_j)(x_i-\hat\mu_j)^\top/\sum_i\tau_{ij}$.

Dérive la mise à jour de $\pi_j$ dans l'EM pour un GMM.
?
Maximiser $\sum_{i,j}\tau_{ij}\log\pi_j$ s.c. $\sum_j\pi_j=1$ : le lagrangien donne $\pi_j=\frac1\lambda\sum_i\tau_{ij}$, et comme $\sum_j\tau_{ij}=1$, $\lambda=n$.

Pourquoi l'étape E d'un GMM se réduit-elle aux $\tau_{ij}$ ?::La log-vraisemblance complète est linéaire en $z_{ij}$ : son espérance ne fait intervenir que $\mathbb E_q[z_{ij}]=\tau_{ij}$.

Comment initialiser l'EM pour un GMM ?::Moyennes et proportions issues de K-Means++, et covariances sphériques larges $\sigma^2I$.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Mélange de gaussiennes (GMM)]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[A - K-Means]]
- [[A - K-Means++]]
- [[C - Distance de Mahalanobis]]
- [[T - Différentielle du log-déterminant]]
