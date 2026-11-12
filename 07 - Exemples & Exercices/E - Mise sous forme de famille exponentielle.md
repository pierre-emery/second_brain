---
type: exercice
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Énoncé

Écrire sous la forme $p(x;\eta)=h(x)\exp\{\eta^\top T(x)-A(\eta)\}$ (identifier $h$, $T$, $\eta$, $A$, le domaine $\Omega$) :
1. la multinoulli $\mathrm{Mult}(\pi)$, d'abord naïvement puis sous forme **minimale** ;
2. la gaussienne 1D $\mathcal N(\mu,\sigma^2)$ ;
3. la gaussienne multivariée $\mathcal N(\mu,\Sigma)$ ;
4. un UGM discret à potentiels strictement positifs.

**Astuce générale** : écrire $p=\exp(\log p)$ et lire les termes.

## Solution

**1. Multinoulli.** $X\in\{0,1\}^k$ one-hot ($\Omega_X=\Delta_k\cap\mathcal X$), $\pi\in\Delta_k$.
$$p(x;\pi)=\prod_{j=1}^k\pi_j^{x_j}=\exp\Big(\sum_{j=1}^kx_j\log\pi_j\Big)=\exp\Big(\sum_jx_j\log\pi_j-0\Big).$$
On lit : $\eta_j=\log\pi_j$, $T(x)=x$, $d\mu$ = mesure de comptage, $h(x)=\mathbb 1\{x\in\Delta_k\cap\mathcal X\}$, $A(\eta(\pi))=0$.

*Problème* : $A\equiv0$, alors que ses dérivées devraient donner les moments ! La cause : $\Theta=\mathrm{Int}(\Delta_k)$ est de dimension $k-1$, mais $T$ en a $k$, avec la dépendance linéaire $T_k(x)=1-\sum_{j<k}T_j(x)$ quand $h(x)>0$. La famille **n'est pas minimale** : $\eta$ et $\eta+\alpha\mathbf 1$ donnent la même loi.

*Forme minimale* : $T(x)=(x_1,\dots,x_{k-1})$. Alors
$$Z(\eta)=\sum_{x\in\Omega_X}\exp(\eta^\top T(x))=1+\sum_{j=1}^{k-1}e^{\eta_j},\qquad p(x;\eta)=\exp\Big(\sum_{j=1}^{k-1}\eta_jx_j-\log\Big(1+\sum_{j=1}^{k-1}e^{\eta_j}\Big)\Big).$$
Donc $A(\eta)=\log\big(1+\sum_{j<k}e^{\eta_j}\big)$. Vérification : $\frac{\partial A}{\partial\eta_j}=\frac{e^{\eta_j}}{Z(\eta)}=p(x=j\mid\eta)=\mathbb E[T_j(x)]$ ✓ (le **softmax**).

**2. Gaussienne 1D.** $\theta=(\mu,\sigma^2)$ (paramétrisation par moments).
$$p(x;\mu,\sigma^2)=\frac1{\sqrt{2\pi\sigma^2}}\exp\Big(-\frac{(x-\mu)^2}{2\sigma^2}\Big)=\exp\Big(-\frac{x^2}2\cdot\frac1{\sigma^2}+x\cdot\frac{\mu}{\sigma^2}-\Big[\frac{\mu^2}{2\sigma^2}+\frac12\log(2\pi\sigma^2)\Big]\Big).$$
$$T(x)=\begin{pmatrix}x\\-x^2/2\end{pmatrix},\qquad\eta=\begin{pmatrix}\eta_1\\\eta_2\end{pmatrix}=\begin{pmatrix}\mu/\sigma^2\\1/\sigma^2\end{pmatrix}.$$
$\eta_2=1/\sigma^2>0$ est la **précision**, $\eta_1=\eta_2\mu$. Domaine $\Omega=\{(\eta_1,\eta_2):\eta_2>0,\ \eta_1\in\mathbb R\}$ ; $h(x)=1$ (certains prennent $h=1/\sqrt{2\pi}$).

**3. Gaussienne multivariée.** $\theta=(\mu,\Sigma)$ :
$$p(x)=\exp\Big(-\frac12x^\top\Sigma^{-1}x+x^\top\Sigma^{-1}\mu-\Big[\frac12\mu^\top\Sigma^{-1}\mu+\frac12\log\big((2\pi)^d|\Sigma|\big)\Big]\Big),$$
avec $x^\top\Sigma^{-1}x=\mathrm{tr}(\Sigma^{-1}xx^\top)=\langle\Sigma^{-1},xx^\top\rangle$. D'où la **précision** $\Lambda=\Sigma^{-1}$, $\eta=(\Lambda\mu,\Lambda)$ et $T(x)=(x,\,-xx^\top/2)$.
*(Les notes écrivent $\log(2\pi|\Sigma|)$ ; la normalisation exacte en dimension $d$ est $\log((2\pi)^d|\Sigma|)$.)*

**4. UGM discret**, $\psi_C(x_C)>0$, $\mathcal X_C=\times_{i\in C}\mathcal X_i$ :
$$p(x)=\frac1Z\prod_C\psi_C(x_C)=\exp\Big(\sum_C\log\psi_C(x_C)-\log Z\Big)=\exp\Big(\sum_C\sum_{y_C\in\mathcal X_C}\mathbb 1\{x_C=y_C\}\log\psi_C(y_C)-\log Z\Big).$$
Statistiques $T_{C,y_C}(x)=\mathbb 1\{x_C=y_C\}$, paramètres $\eta_{C,y_C}=\log\psi_C(y_C)$, $A(\eta)=\log Z$. Représentation **non minimale** ($\sum_{y_C}T_{C,y_C}=1$). La multinoulli est le cas du graphe **complet** (une seule clique), avec $K=2^{|V|}$ valeurs si les variables sont binaires.

## À retenir

- Une même loi peut s'écrire de plusieurs façons ; la forme **minimale** est celle où $A$ a un sens (ses dérivées donnent les moments).
- Les paramètres canoniques des gaussiennes sont des **précisions**, pas des variances.
- *Remarque « caractéristiques »* : dans un UGM, on peut ne garder qu'un sous-ensemble pertinent d'indicatrices (p. ex. pour une phrase, $\mathbb 1\{x_i\text{ est un verbe et }x_{i-1}\text{ un nom}\}$ plutôt que toutes les paires de mots, $50\,000^2$).

## Flashcards
#flashcards/IFT6269/17-famille-exponentielle

Pourquoi la forme naïve de la multinoulli ($T(x)=x$, $\eta_j=\log\pi_j$) est-elle insatisfaisante ?::$A\equiv0$ et la famille n'est pas minimale : $T_k=1-\sum_{j<k}T_j$, donc $\eta$ et $\eta+\alpha\mathbf 1$ donnent la même loi.

Log-partition de la multinoulli en forme minimale ?::$A(\eta)=\log(1+\sum_{j=1}^{k-1}e^{\eta_j})$, et $\partial A/\partial\eta_j=e^{\eta_j}/Z=p(x=j)$ (softmax).

Statistique suffisante et paramètre canonique de la gaussienne 1D ?::$T(x)=(x,-x^2/2)$, $\eta=(\mu/\sigma^2,\ 1/\sigma^2)$ : des précisions.

Écris un UGM discret à potentiels positifs comme une famille exponentielle.::$T_{C,y_C}(x)=\mathbb 1\{x_C=y_C\}$, $\eta_{C,y_C}=\log\psi_C(y_C)$, $A=\log Z$ (représentation non minimale).

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[D - Famille exponentielle]]
- [[D - Multinomiale (et Multinoulli)]]
- [[D - Loi Gaussienne (Normale)]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Dérivées de la fonction de log-partition]]
