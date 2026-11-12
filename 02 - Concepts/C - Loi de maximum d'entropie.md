---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
**Principe du maximum d'entropie** : parmi toutes les distributions compatibles avec ce qu'on sait (un ensemble $\mathcal M$ défini par des contraintes tirées des données), choisir celle d'[[C - Entropie|entropie]] maximale, c'est-à-dire la **moins engagée** au-delà des contraintes.
$$\hat p=\arg\max_{q\in\mathcal M}H(q)=\arg\min_{q\in\mathcal M}D_{KL}(q\,\|\,\text{uniforme})$$

## Intuition

L'uniforme est la distribution d'entropie maximale sur $K$ états : elle n'avantage aucun résultat. Le principe dit : reste aussi proche que possible de l'uniforme (au sens de la KL), sans contredire les mesures. Toute structure supplémentaire serait une hypothèse injustifiée.

L'égalité des deux formulations vient de $D_{KL}(q\,\|\,u)=\sum_xq\log q-\sum_xq\log\frac1{|\mathcal X|}=-H(q)+\log|\mathcal X|$.

## Formalisme

**D'où vient $\mathcal M$ ?** Typiquement, d'**appariement de moments** : on choisit des caractéristiques (mesures) $T_1(x),\dots,T_d(x)$ et on impose que les moments du modèle égalent les moments empiriques :
$$\mathcal M=\big\{q:\ \mathbb E_q[T_j(x)]=\mathbb E_{\hat p_n}[T_j(x)]\ \ \forall j=1,\dots,d\big\}.$$
Avec $\alpha_j\triangleq\mathbb E_{\hat p_n}[T_j(x)]$, chaque contrainte s'écrit $\sum_xq(x)T_j(x)=\langle q,T_j\rangle=\alpha_j$ : une **égalité linéaire** en $q$ (vu comme vecteur de $\mathbb R^{|\mathcal X|}$). Le problème
$$\min_{q\in\mathbb R^{|\mathcal X|}}D_{KL}(q\,\|\,u)\quad\text{s.c.}\quad q\in\mathcal M\cap\Delta_{|\mathcal X|}$$
est donc un **problème d'optimisation convexe**.

**Principe généralisé** : $\arg\min_{q\in\mathcal M}D_{KL}(q\,\|\,h_0)$ pour une distribution de référence $h_0$ qu'on veut favoriser. La solution est une famille exponentielle de densité de référence $h_0$.

**Solution** : par [[C - Dualité|dualité lagrangienne]], $q^*(x)\propto u(x)\exp\langle\nu,T(x)\rangle$ (famille exponentielle), et le dual est le MLE → [[T - Équivalence maximum de vraisemblance et maximum d'entropie]].

## Exemple (Wainwright)

On observe que $p_L=3/4$ des kangourous sont gauchers et que $p_B=2/3$ boivent de la Labatt. Quelle proportion fait les deux ? Le maximum d'entropie répond $p(B,L)=p_B\cdot p_L=1/2$ : sans contrainte sur la jointe, la solution la moins engagée est l'**indépendance**.

## Flashcards
#flashcards/IFT6269/16-theorie-information

Énonce le principe du maximum d'entropie.::Choisir $\hat p=\arg\max_{q\in\mathcal M}H(q)$, la distribution d'entropie maximale parmi celles qui respectent les contraintes $\mathcal M$ tirées des données.

Pourquoi maximiser $H(q)$ revient-il à minimiser $D_{KL}(q\,\|\,\text{uniforme})$ ?::$D_{KL}(q\,\|\,u)=-H(q)+\log|\mathcal X|$ : la différence est une constante.

Pourquoi le problème de maximum d'entropie avec contraintes de moments est-il convexe ?::L'objectif $D_{KL}(q\,\|\,u)$ est convexe en $q$, et les contraintes $\sum_xq(x)T_j(x)=\alpha_j$, $q\in\Delta$ sont linéaires.

Exemple des kangourous : quelle solution donne le maximum d'entropie, et pourquoi ?::$p(B,L)=p_Bp_L$ : l'indépendance, car rien ne contraint la jointe et c'est la solution la moins engagée.

Quelle famille obtient-on avec le principe généralisé $\min_qD_{KL}(q\,\|\,h_0)$ ?::Une famille exponentielle de densité de référence $h_0$ (au lieu de l'uniforme).

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Entropie]]
- [[C - Divergence de Kullback-Leibler]]
- [[T - Équivalence maximum de vraisemblance et maximum d'entropie]]
- [[D - Famille exponentielle]]
- [[C - Méthode des moments]]
- [[C - Optimisation Convexe]]
