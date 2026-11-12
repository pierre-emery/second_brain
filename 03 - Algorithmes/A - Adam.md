---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Adam** (*adaptive moments*, Kingma & Ba 2014) : variante de [[A - RMSProp]] + [[C - Momentum|momentum]] qui estime par moyennes mobiles exponentielles le **1er moment** (moyenne) et le **2e moment non centré** du gradient, avec une **correction de biais** pour leur initialisation à zéro. C'est aujourd'hui l'optimiseur par défaut en apprentissage profond.

$$\hat s = \frac{s}{1-\rho_1^t},\quad \hat r = \frac{r}{1-\rho_2^t},\qquad \Delta\theta = -\epsilon\,\frac{\hat s}{\sqrt{\hat r} + \delta}$$

## Intuition
- $s$ joue le rôle du momentum : une direction moyenne lissée du gradient.
- $r$ joue le rôle de RMSProp : une échelle propre à chaque paramètre.
- Le pas $\hat s/\sqrt{\hat r}$ est à peu près invariant à l'échelle du gradient, et sa magnitude est bornée d'environ $\epsilon$.

## Formalisme
- **Requis** : pas $\epsilon$ (défaut suggéré 0,001) ; taux de décroissance $\rho_1, \rho_2 \in [0,1)$ (défauts 0,9 et 0,999) ; $\delta$ pour la stabilité (défaut $10^{-8}$) ; paramètres initiaux $\theta$.
- Initialiser $s = 0$, $r = 0$, $t = 0$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot ; $h \leftarrow \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta), y^{(i)})$ ; $t \leftarrow t + 1$ ;
  - 1er moment biaisé : $s \leftarrow \rho_1 s + (1-\rho_1) h$ ;
  - 2e moment biaisé : $r \leftarrow \rho_2 r + (1-\rho_2) h \odot h$ ;
  - corrections : $\hat s \leftarrow \frac{s}{1-\rho_1^t}$, $\hat r \leftarrow \frac{r}{1-\rho_2^t}$ ;
  - calculer : $\Delta\theta = -\epsilon \frac{\hat s}{\sqrt{\hat r} + \delta}$ (élément par élément) ;
  - appliquer : $\theta \leftarrow \theta + \Delta\theta$.

### Pourquoi corriger le biais
En déroulant depuis $s_0 = 0$ : $s_t = (1-\rho_1)\sum_{k=1}^t \rho_1^{t-k} h_k$. Si les gradients ont une moyenne stationnaire $\mathbb E[h]$,
$$\mathbb E[s_t] = \mathbb E[h]\,(1-\rho_1)\sum_{k=1}^t \rho_1^{t-k} = \mathbb E[h]\,(1 - \rho_1^t).$$
Les estimations sont donc biaisées vers 0 au début (surtout $r$, car $\rho_2 = 0{,}999$). Diviser par $1-\rho^t$ corrige ce biais ; l'effet disparaît quand $t$ est grand.

## Différences avec RMSProp + momentum (cours)
1. Le momentum est intégré directement comme estimation (pondérée exponentiellement) du **1er moment** du gradient.
2. Adam ajoute des **corrections de biais** aux deux moments ; sans elles, RMSProp a un 2e moment très biaisé au début de l'entraînement.

## Exemple
Au pas $t=1$ : $s = 0{,}1\,h$ et $r = 0{,}001\,h^2$. Sans correction, $s/\sqrt r \approx 3{,}16\,\mathrm{sign}(h)$ ; avec correction, $\hat s = h$, $\hat r = h^2$, donc un pas de $\epsilon\,\mathrm{sign}(h)$, comme prévu.

## Flashcards
#flashcards/IFT6135/08-optimisation

Écrire les mises à jour d'Adam
?
$s \leftarrow \rho_1 s+(1-\rho_1)h$ ; $r \leftarrow \rho_2 r+(1-\rho_2)h\odot h$ ; $\hat s = s/(1-\rho_1^t)$, $\hat r = r/(1-\rho_2^t)$ ; $\theta \leftarrow \theta - \epsilon\,\hat s/(\sqrt{\hat r}+\delta)$.

Dérive pourquoi Adam divise $s$ par $1-\rho_1^t$
?
Avec $s_0=0$, $s_t = (1-\rho_1)\sum_k \rho_1^{t-k}h_k$, d'où $\mathbb E[s_t] = \mathbb E[h](1-\rho_1^t)$ : l'estimation est biaisée vers 0 ; diviser par $1-\rho_1^t$ la rend sans biais.

Valeurs par défaut des hyperparamètres d'Adam ?::$\epsilon = 0{,}001$, $\rho_1 = 0{,}9$, $\rho_2 = 0{,}999$, $\delta = 10^{-8}$.

Deux différences entre Adam et RMSProp + momentum ?::(1) Le momentum est une estimation du 1er moment, pondérée exponentiellement ; (2) correction de biais des deux moments (initialisés à 0).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[A - RMSProp]]
- [[A - AdaGrad]]
- [[C - Momentum]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Taux d'apprentissage]]
