---
type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Définition

Famille de distributions de la forme
$$p(x\mid\eta)=h(x)\,\exp\big(\eta^\top T(x)-A(\eta)\big)$$
- $\eta$ : **paramètre canonique** (naturel)
- $T(x)$ : **statistique suffisante**
- $A(\eta)$ : **log-partition** (normalisation), $A(\eta)=\log\int h(x)e^{\eta^\top T(x)}dx$
- $h(x)$ : mesure de base

L'exposant est **linéaire en $\eta$ et en $T(x)$**. Une grande partie des lois usuelles en sont des cas particuliers ([[D - Bernoulli|Bernoulli]], [[D - Loi Gaussienne (Normale)|gaussienne]], [[D - Loi de Poisson|Poisson]], [[D - Multinomiale (et Multinoulli)|multinomiale]], [[D - Gamma|Gamma]], [[D - Beta|Beta]]…).

## Définitions précises (IFT6269)

- **Statistique** : toute fonction $\phi(X)$ d'une variable aléatoire. Une statistique $T(X)$ est **suffisante** pour $p_\theta$ si $\theta\perp\!\!\!\perp X\mid T(X)$ → [[C - Statistique Exhaustive]].
- **Famille exponentielle** : famille paramétrique de la forme
$$p(x;\theta)\,d\mu(x)=h(x)\exp\big\{b(\theta)^\top T(x)-A(\theta)\big\}\,d\mu(x).$$
  - $h(x)\,d\mu(x)$ : **mesure de référence** ; $d\mu$ est la **mesure de base** (Lebesgue pour une v.a. continue, de comptage pour une v.a. discrète), $h(x)\ge0$ la **densité de référence** (seule contrainte : non négative). Elle fixe le support.
  - $T(x)$ : statistique suffisante ; $\eta=b(\theta)$ : **paramètre canonique** ; $A$ : **log-partition** (ou log-normalisation, **fonction génératrice des cumulants**).
- **Famille canonique** : $\eta=\theta=b(\theta)$, d'où $p(x;\eta)=h(x)\exp\{\eta^\top T(x)-A(\eta)\}$. On travaille désormais avec $\eta$.
- **Domaine** : $\Omega=\{\eta\in\mathbb R^p:A(\eta)<\infty\}$.
- **Famille minimale** : les composantes de $T(x)$ sont linéairement indépendantes (sinon plusieurs $\eta$ donnent la même loi).
- **Famille plate** : famille dont le domaine $\Omega$ est convexe (c'est toujours le cas, car $A$ est convexe).
- **Famille courbe** : reparamétrisation $\eta:\Theta\to\Omega$ telle que $\eta(\Theta)$ est une **variété courbe** de $\Omega$. Ex. : $\mathcal N(\mu,\mu^2)$ trace une parabole dans le plan $(\mu,\sigma^2)$ (et reste courbe en paramètres canoniques).

**$A$ est bien la log-partition** : $1=\int p(x;\eta)\,d\mu(x)=e^{-A(\eta)}\int h(x)\exp\{\eta^\top T(x)\}d\mu(x)$, donc
$$A(\eta)=\log\int_{\mathcal X}h(x)\exp\{\eta^\top T(x)\}\,d\mu(x).$$
Si $\Omega_X$ est discret, $p(x;\eta)$ est une pmf ; s'il est continu, une densité.

**C'est une propriété d'une *famille*, pas d'une loi** : toute loi $p$ est trivialement dans une famille exponentielle ($h=p$, $\eta=0$, $T$ quelconque). On ne peut donc parler que de familles, chacune définie par le choix de $h$, de $T$ et de $\Omega_X$, ses membres étant indexés par les $\eta$ valides.

**Propriétés de $A$** : $\nabla A=\mathbb E[T(x)]$, $\nabla^2A=\mathrm{Cov}[T(x)]$, donc $A$ et $\Omega$ sont convexes → [[T - Dérivées de la fonction de log-partition]].

**Familles qui ne sont PAS exponentielles.**
- **Mélanges** : le produit de familles exponentielles en est une, mais pas le mélange $\alpha h_1e^{\eta_1^\top T_1-A_1}+(1-\alpha)h_2e^{\eta_2^\top T_2-A_2}$, qui ne se factorise pas en $h_3e^{\eta_3^\top T_3-A_3}$ (ex. classique : le mélange de gaussiennes).
- **Uniforme$(0,\theta)$** : dans une famille exponentielle, le support est $\{x:h(x)>0\}$, indépendant du paramètre (l'exponentielle ne s'annule pas). Ici le support dépend de $\theta$ : contradiction.

**Exemples détaillés** (multinoulli minimale, gaussiennes 1D et multivariée, UGM discret) : [[E - Mise sous forme de famille exponentielle]].

**Appariement de moments ≠ MLE en général** : ils coïncident seulement quand on apparie les moments **de $T(x)$**. Ex. : la loi Gamma $\Gamma(\alpha,\beta)$ a $T(x)=(\log x,\ x)$ ; apparier plutôt $\tilde T(x)=(x,\ x^2)$ donne un autre estimateur que le MLE. Voir [[T - Équivalence maximum de vraisemblance et maximum d'entropie]].

## Apparitions jusqu'ici dans IFT6269

- Classes conditionnelles dans la famille exponentielle ⇒ $p(y\mid x)$ est **logistique** → [[T - Classes conditionnelles exponentielles et régression logistique]].
- Pour la gaussienne, l'estimateur des [[C - Méthode des moments|moments]] coïncide avec le MLE (propriété générale de la famille exponentielle).
- Un [[M - Modèle Graphique Non-dirigé|UGM]] à potentiels strictement positifs est une famille exponentielle (énergie = $\sum_C\log\psi_C$).

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Forme générale de la famille exponentielle ?::$p(x\mid\eta)=h(x)\exp(\eta^\top T(x)-A(\eta))$.

Nommer $\eta$, $T(x)$, $A(\eta)$ dans la famille exponentielle.::Paramètre canonique, statistique suffisante, fonction de log-partition.

Pourquoi un UGM à potentiels strictement positifs est-il une famille exponentielle ?::$p(x)=\exp\{\sum_C\log\psi_C(x_C)-\log Z\}$ : l'exposant est une somme (énergie négative), linéaire en des paramètres $\theta_C$ et des statistiques $T_C(x_C)$.

#flashcards/IFT6269/17-famille-exponentielle

Pourquoi n'a-t-il pas de sens de dire qu'une loi isolée « est dans la famille exponentielle » ?::Toute loi $p$ s'écrit trivialement ainsi ($h=p$, $\eta=0$). La propriété ne concerne que des familles, définies par $h$, $T$ et $\Omega_X$.

Pourquoi Uniforme$(0,\theta)$ n'est-elle pas une famille exponentielle ?::Dans une famille exponentielle, le support $\{h>0\}$ ne dépend pas du paramètre ; ici il dépend de $\theta$.

Un mélange de gaussiennes est-il une famille exponentielle ?::Non : une somme pondérée de deux familles exponentielles ne se factorise pas en une seule forme $h\,e^{\eta^\top T-A}$.

Qu'est-ce qu'une famille exponentielle minimale ?::Une famille dont les composantes de $T(x)$ sont linéairement indépendantes ; sinon plusieurs $\eta$ donnent la même loi.

Qu'est-ce qu'une famille exponentielle courbe ? Exemple ?::Une reparamétrisation $\eta(\theta)$ dont l'image est une variété courbe de $\Omega$ ; ex. $\mathcal N(\mu,\mu^2)$.

Quand l'appariement de moments donne-t-il le MLE dans une famille exponentielle ?::Seulement si on apparie les moments de la statistique suffisante $T(x)$ (pas, p. ex., $(x,x^2)$ pour une Gamma).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
- [[C - Méthode des moments]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Dérivées de la fonction de log-partition]]
- [[E - Mise sous forme de famille exponentielle]]
- [[T - Équivalence maximum de vraisemblance et maximum d'entropie]]
- [[C - Loi de maximum d'entropie]]
- [[C - Statistique Exhaustive]]
- [[C - Estimation des paramètres dans les modèles graphiques]]
