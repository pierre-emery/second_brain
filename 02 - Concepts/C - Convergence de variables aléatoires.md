---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définitions

Soit une suite $\{X_n\}_{n\ge1}$ et une variable $X$.

**En distribution** ($X_n\xrightarrow{d}X$) : les [[C - Fonction de répartition (CDF)|fonctions de répartition]] convergent,
$$\lim_{n\to\infty}F_n(x)=F(x)\quad\forall x\ \text{(où }F\text{ est continue)}.$$
**En norme $L^k$** ($X_n\xrightarrow{L^k}X$) :
$$\lim_{n\to\infty}\mathbb E\big[\|X_n-X\|_k^k\big]=0 .$$
**En probabilité** ($X_n\xrightarrow{p}X$) :
$$\forall\epsilon>0,\quad \lim_{n\to\infty}\Pr\{\|X_n-X\|\ge\epsilon\}=0 .$$
## Propriétés

- $L^2\ \Rightarrow$ en probabilité (par Markov/Tchebychev : $\Pr\{\|X_n-X\|\ge\epsilon\}\le\mathbb E\|X_n-X\|^2/\epsilon^2$). **La réciproque est fausse.**
- En probabilité $\Rightarrow$ en distribution.
- Ces modes définissent la [[C - Consistance d'un Estimateur|consistance]] (en probabilité) et la consistance $L^2$ d'un estimateur ; la convergence en distribution apparaît dans le [[T - Théorème central limite|TCL]] et la normalité asymptotique du [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Consistance d'un Estimateur]]
- [[T - Loi des grands nombres]]
- [[T - Théorème central limite]]
## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Convergence en probabilité ?::$\forall\epsilon>0,\ \Pr\{\|X_n-X\|\ge\epsilon\}\to0$.

Convergence en $L^k$ ?::$\mathbb E[\|X_n-X\|_k^k]\to0$.

Convergence en distribution ?::$F_n(x)\to F(x)$ (en tout point de continuité de $F$).

$L^2$ ⇒ probabilité ? Et la réciproque ?::Oui (inégalité de Markov/Tchebychev). La réciproque est fausse.