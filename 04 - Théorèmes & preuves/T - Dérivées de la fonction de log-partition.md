---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Dans une [[D - Famille exponentielle|famille exponentielle]] canonique, les dérivées successives de la log-partition $A(\eta)$ donnent les **cumulants** de la statistique suffisante : le gradient est la **moyenne**, la hessienne la **covariance**. Conséquence : $A$ est convexe, et le domaine $\Omega$ aussi.
$$\nabla_\eta A(\eta)=\mathbb E_{p(x;\eta)}[T(x)]\triangleq\mu(\eta),\qquad\nabla^2_\eta A(\eta)=\mathrm{Cov}_{p(x;\eta)}[T(x)]$$

## Énoncé

Pour $p(x;\eta)=h(x)\exp\{\eta^\top T(x)-A(\eta)\}$ et $\eta\in\mathrm{int}(\Omega)$ :
1. $\nabla_\eta A(\eta)=\mathbb E_{p(x;\eta)}[T(x)]=\mu(\eta)$, le **vecteur des moments** ;
2. $\dfrac{\partial^2A(\eta)}{\partial\eta_i\partial\eta_j}=\mathbb E_{p(x;\eta)}\big[(T(x)-\mu(\eta))(T(x)-\mu(\eta))^\top\big]_{ij}=\mathrm{Cov}(T(x))_{ij}$ ;
3. $A$ est **convexe** et $\Omega=\{\eta:A(\eta)<\infty\}$ est un ensemble **convexe**.

C'est pourquoi $A$ s'appelle aussi **fonction génératrice des cumulants**. Les dérivées suivantes donnent les cumulants d'ordre supérieur (la 3ᵉ donne le 3ᵉ moment centré ; au-delà de 3, les cumulants ne sont plus forcément les moments centrés).

## Hypothèses

Famille canonique ; $\eta$ dans l'intérieur du domaine (dérivation sous l'intégrale permise).

## Preuve

**Gradient.** Avec $A(\eta)=\log\int\exp\{\eta^\top T(x)\}h(x)\,d\mu(x)$ :
$$\nabla_\eta A(\eta)=\frac{\int T(x)\exp\{\eta^\top T(x)\}h(x)\,d\mu(x)}{\int\exp\{\eta^\top T(x)\}h(x)\,d\mu(x)}=\int T(x)\exp\{\eta^\top T(x)-A(\eta)\}h(x)\,d\mu(x)=\mathbb E_{p(x;\eta)}[T(x)].$$

**Dérivée seconde (cas scalaire).** En dérivant $\int T(x)\exp\{\eta T(x)-A(\eta)\}h(x)d\mu(x)$ :
$$\frac{\partial^2A}{\partial\eta^2}=\int T(x)\exp\{\eta T(x)-A(\eta)\}\big(T(x)-A'(\eta)\big)h(x)\,d\mu(x)=\mathbb E[T(x)^2]-\mathbb E[T(x)]^2=\mathrm{Var}_{p(x;\eta)}[T(x)],$$
car $A'(\eta)=\mathbb E[T(x)]$. Le cas matriciel (covariance) est laissé en exercice dans les notes ; même calcul composante par composante.

**Convexité.** Une variance (une covariance) est $\ge0$ ($\succeq0$), donc $\nabla^2A\succeq0$ : $A$ est convexe, et son ensemble de sous-niveau $\{A<\infty\}=\Omega$ est convexe. $\blacksquare$

## Corollaires / Conséquences

- Gradient de la log-vraisemblance moyenne : $\nabla_\eta\frac1n\sum_i\log p(x^{(i)};\eta)=\hat\mu_n-\mu(\eta)$ → le MLE fait de l'**appariement de moments** $\mu(\hat\eta)=\hat\mu_n$ ([[T - Équivalence maximum de vraisemblance et maximum d'entropie]]).
- La log-vraisemblance est **concave** en $\eta$ (car $-A$ l'est) : pas de maximum local parasite.
- Dans un UGM, calculer $\mu(\eta)$ demande de l'**inférence** → [[C - Estimation des paramètres dans les modèles graphiques]].

## Flashcards
#flashcards/IFT6269/17-famille-exponentielle

Que donnent le gradient et la hessienne de la log-partition $A(\eta)$ ?::$\nabla A=\mathbb E_\eta[T(x)]=\mu(\eta)$ (moyenne) ; $\nabla^2A=\mathrm{Cov}_\eta[T(x)]$ (covariance).

Dérive $\nabla_\eta A(\eta)=\mathbb E[T(x)]$.
?
$A=\log\int e^{\eta^\top T}h\,d\mu$, donc $\nabla A=\frac{\int Te^{\eta^\top T}h\,d\mu}{\int e^{\eta^\top T}h\,d\mu}=\int Te^{\eta^\top T-A}h\,d\mu=\mathbb E_\eta[T]$.

Pourquoi $A(\eta)$ est-elle convexe ?::Sa hessienne est une matrice de covariance, donc semi-définie positive.

Pourquoi la log-vraisemblance d'une famille exponentielle est-elle concave en $\eta$ ?::$\log p(x;\eta)=\eta^\top T(x)-A(\eta)+\log h(x)$ : linéaire moins une fonction convexe.

Pourquoi appelle-t-on $A$ la fonction génératrice des cumulants ?::Ses dérivées successives donnent les cumulants de $T(x)$ : moyenne, variance, 3ᵉ moment centré, etc.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[D - Famille exponentielle]]
- [[T - Équivalence maximum de vraisemblance et maximum d'entropie]]
- [[C - Matrice de Variance-Covariance]]
- [[C - Matrice Hessienne]]
- [[C - Estimation des paramètres dans les modèles graphiques]]
