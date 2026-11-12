---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Soit $f:\mathbb R^m\to\mathbb R^n$ et $g:\mathbb R^n\to\mathbb R^q$ différentiables. Alors
$$d(g\circ f)_{x_0}=dg_{f(x_0)}\cdot df_{x_0}$$
produit des jacobiennes $dg_{f(x_0)}\in\mathbb R^{q\times n}$ et $df_{x_0}\in\mathbb R^{n\times m}$ (toujours bien défini dimensionnellement).

## Hypothèses

$f$ différentiable en $x_0$, $g$ différentiable en $f(x_0)$ (au sens de la [[C - Différentielle (calcul matriciel)|différentielle]]).

## Preuve

Non faite en classe. *(Idée : $g(f(x_0+\Delta))-g(f(x_0))=dg\big(df(\Delta)+o(\|\Delta\|)\big)+o(\|df(\Delta)+o(\|\Delta\|)\|)=dg\,df(\Delta)+o(\|\Delta\|)$ par linéarité et bornitude des opérateurs.)*

## Corollaires / Conséquences

- S'étend à la composition de plus de deux fonctions (exercice).
- Application : $\ell(x)=(x-\mu)^\top A(x-\mu)=(g\circ f)(x)$ avec $f(x)=x-\mu$, $g(u)=u^\top Au$ → $d\ell_x=(x-\mu)^\top(A+A^\top)$. Voir [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]].

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Règle de la chaîne pour les différentielles ?::$d(g\circ f)_{x_0}=dg_{f(x_0)}\cdot df_{x_0}$ (produit des jacobiennes).

Avec la règle de la chaîne, dériver $d\ell_x$ pour $\ell(x)=(x-\mu)^\top A(x-\mu)$.::$\ell=g\circ f$ avec $f(x)=x-\mu$ ($df=I$) et $g(u)=u^\top Au$ ($dg_u=u^\top(A+A^\top)$), donc $d\ell_x=(x-\mu)^\top(A+A^\top)$.

Pourquoi le produit $dg_{f(x_0)}\,df_{x_0}$ est-il toujours bien défini ?::$dg_{f(x_0)}\in\mathbb R^{q\times n}$ et $df_{x_0}\in\mathbb R^{n\times m}$ : les dimensions intérieures coïncident ($n$), ce qui donne une jacobienne $q\times m$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Différentielle (calcul matriciel)]]
- [[C - Matrice Jacobienne]]
