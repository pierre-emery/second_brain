---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Fonction qui combine l'objectif d'un problème d'optimisation contraint et ses contraintes, pondérées par des **multiplicateurs de Lagrange**. C'est la brique de base de la [[C - Dualité|dualité lagrangienne]].
$$L(x,\lambda,\nu)\triangleq f(x)+\sum_{j=1}^m\lambda_jf_j(x)+\sum_{k=1}^n\nu_kg_k(x)$$
pour le problème $\min_xf(x)$ s.c. $f_j(x)\le0$ ($\forall j$) et $g_k(x)=0$ ($\forall k$).

## Intuition

Au lieu d'imposer les contraintes « dur », on les **pénalise** : chaque violation coûte $\lambda_j f_j(x)$ ou $\nu_k g_k(x)$. Si l'adversaire (les multiplicateurs) peut choisir la pénalité librement, il punira infiniment toute violation : minimiser contre le pire multiplicateur revient à résoudre le problème contraint.

## Formalisme : interprétation par point-selle

$$h(x)\triangleq\sup_{\lambda\ge0,\ \nu}L(x,\lambda,\nu)=\begin{cases}f(x)&\text{si } x \text{ est réalisable}\\+\infty&\text{sinon}\end{cases}$$
(si $f_j(x)>0$, $\lambda_j\to\infty$ ; si $g_k(x)\ne0$, $\nu_k\to\pm\infty$ ; sinon le meilleur choix est $\lambda_jf_j(x)=0$). Le problème contraint équivaut donc au problème **non contraint**
$$\inf_x\ \sup_{\lambda\ge0,\nu}L(x,\lambda,\nu).$$
Échanger $\inf$ et $\sup$ donne le **problème dual** (voir [[C - Dualité]]).

Les fonctions sont ici à valeurs réelles étendues, $f:\mathbb R^d\to\mathbb R\cup\{\infty\}$, de domaine $\mathrm{dom}(f)=\{x:f(x)<\infty\}$.

## Exemple

MLE multinoulli : $\max_\pi\sum_kn_k\log\pi_k$ s.c. $\sum_k\pi_k=1$. Lagrangien $\sum_kn_k\log\pi_k+\nu(1-\sum_k\pi_k)$ ; gradient nul $\Rightarrow\pi_k=n_k/\nu$, et la contrainte donne $\nu=n$, donc $\hat\pi_k=n_k/n$.

## Flashcards
#flashcards/IFT6269/16-theorie-information

Lagrangien du problème $\min f$ s.c. $f_j\le0$, $g_k=0$ ?::$L(x,\lambda,\nu)=f(x)+\sum_j\lambda_jf_j(x)+\sum_k\nu_kg_k(x)$, avec $\lambda\ge0$.

Que vaut $\sup_{\lambda\ge0,\nu}L(x,\lambda,\nu)$ ?::$f(x)$ si $x$ est réalisable, $+\infty$ sinon.

Pourquoi impose-t-on $\lambda_j\ge0$ mais pas de signe pour $\nu_k$ ?
?
Une inégalité $f_j\le0$ n'est violée que dans un sens : un $\lambda_j\ge0$ suffit à la pénaliser (et donne 0 au mieux quand elle est satisfaite). Une égalité peut être violée dans les deux sens, donc $\nu_k$ doit pouvoir être positif ou négatif.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Dualité]]
- [[C - Conditions KKT]]
