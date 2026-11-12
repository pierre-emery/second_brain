---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Technique numérique pour calculer $\log\sum_ia_i$ quand on ne connaît que les $\log a_i$, sans sous-dépassement ni dépassement de capacité : on factorise le plus grand terme.
$$\log\sum_ia_i=\log\tilde a+\log\Big(1+\sum_{j\ne i_{\max}}\exp\big(\log a_j-\log\tilde a\big)\Big),\qquad\tilde a\triangleq\max_ia_i,\ \ i_{\max}\triangleq\arg\max_ia_i$$

## Intuition

Les probabilités d'une longue séquence (HMM, modèle de langue…) sont des produits de nombreux facteurs $<1$ : elles valent vite $10^{-100}$ et deviennent $0$ en virgule flottante. On travaille donc en log. Mais pour **additionner** des probabilités stockées en log, il faut repasser à l'exponentielle, ce qui ramène le problème. En divisant d'abord par le plus grand terme, tous les exposants sont $\le0$, et au moins un terme vaut exactement 1 : rien ne déborde, et rien d'important ne s'annule.

## Formalisme / Dérivation

$$\log\sum_ia_i=\log\Big(\tilde a\sum_i\frac{a_i}{\tilde a}\Big)=\log\tilde a+\log\sum_i\exp(\log a_i-\log\tilde a)=\log\tilde a+\log\Big(1+\sum_{j\ne i_{\max}}\exp(\log a_j-\log\tilde a)\Big).$$
Chaque $\log a_j-\log\tilde a\le0$, donc chaque exponentielle est dans $[0,1]$ et la somme est dans $[1,n]$.

## Exemple

$\log a_1=-1000$, $\log a_2=-1001$ : le calcul naïf donne $\log(e^{-1000}+e^{-1001})=\log(0+0)=-\infty$. Avec l'astuce : $-1000+\log(1+e^{-1})\approx-999{,}687$.

## IFT6269 — HMM

Remède (A) au sous-dépassement de la [[A - Récursion alpha-bêta (avant-arrière)|récursion alpha-bêta]] : stocker $\log\alpha_t$ et appliquer l'astuce à la somme sur $z_{t-1}$. L'autre remède (B) est de normaliser les messages à chaque pas.

## Flashcards
#flashcards/IFT6269/15-hmm

Formule de l'astuce log-sum-exp ?::$\log\sum_ia_i=\log\tilde a+\log\big(1+\sum_{j\ne i_{\max}}e^{\log a_j-\log\tilde a}\big)$, avec $\tilde a=\max_ia_i$.

Pourquoi factoriser par le maximum évite-t-il les problèmes numériques ?::Tous les exposants deviennent $\le0$ et un terme vaut 1 : la somme est dans $[1,n]$, donc ni dépassement ni $\log0$.

Pourquoi a-t-on besoin de log-sum-exp dans un HMM ?
?
Les $\alpha_t$ sont des produits de nombreuses probabilités et sous-dépassent ; on les stocke en log, mais la récursion contient une somme sur $z_{t-1}$, qu'on calcule en log avec cette astuce.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Méthodes numériques]]
- [[C - Erreur d'arrondi et Dépassement de capacité (Overflow-Underflow)]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
