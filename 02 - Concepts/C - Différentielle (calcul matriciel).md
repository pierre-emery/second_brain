---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

**Motivation.** En 1D, $f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$ ; mais diviser par un vecteur ou une matrice n'a pas de sens. On réécrit donc :
$$f(x_0+h)-f(x_0)=f'(x_0)\cdot h+e(h),\qquad \lim_{h\to0}\frac{e(h)}{h}=0,$$
i.e. variation = **opérateur linéaire** appliqué à $h$ + erreur négligeable. Cette forme se généralise.

**Définition.** $f:\mathbb R^m\to\mathbb R^n$ est **différentiable** en $x_0$ s'il existe un opérateur **linéaire** $df_{x_0}:\mathbb R^m\to\mathbb R^n$ tel que
$$\forall\Delta\in\mathbb R^m,\quad f(x_0+\Delta)-f(x_0)=df_{x_0}(\Delta)+o(\|\Delta\|),$$
où $o(\|\Delta\|)$ (« petit o ») désigne une fonction $h$ telle que $\lim_{\|\Delta\|\to0}h(\|\Delta\|)/\|\Delta\|=0$. $df_{x_0}$ est la **différentielle** de $f$ en $x_0$ ; elle ne dépend que de $x_0$ et est linéaire : $df_{x_0}(\Delta_1+b\Delta_2)=df_{x_0}(\Delta_1)+b\,df_{x_0}(\Delta_2)$.
## Formes concrètes

| Fonction                              | Forme de $df_{x_0}$                                                                                            | Action sur $\Delta$                                                     |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| $f:\mathbb R^m\to\mathbb R^n$         | [[C - Matrice Jacobienne\|jacobienne]] $\in\mathbb R^{n\times m}$, $(df_{x_0})_{ij}=\partial f_i/\partial x_j$ | produit matriciel $df_{x_0}\Delta$                                      |
| $f:\mathbb R^{n\times n}\to\mathbb R$ | matrice $df_{x_0}\in\mathbb R^{n\times n}$                                                                     | [[C - Trace d'une matrice\|trace]] : $\mathrm{tr}(df_{x_0}^\top\Delta)$ |

La même définition marche pour matrices et tenseurs ; par défaut $\|\cdot\|$ = [[C - Norme|norme de Frobenius]]. Cette convention donne la **disposition « numérateur »** (*numerator layout*) : attention, plusieurs conventions coexistent, il faut en garder une seule (vérifier sur la page Wikipedia *Matrix calculus*).
## Exemples

- $f(x)=x-\mu$ : $df_x=I_{d}$.
- $g(x)=x^\top Ax$ : $dg_x=x^\top(A+A^\top)$.
- [[C - Distance de Mahalanobis]] : $d\ell_x=2(x-\mu)^\top\Sigma^{-1}$.
- $\log|A|$ : différentielle $A^{-1}$ → [[T - Différentielle du log-déterminant]].

Détails : [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]] ; composition : [[T - Règle de la chaîne pour les différentielles]].
## Remarques

Référence : Magnus & Neudecker, *Matrix Differential Calculus with Applications in Statistics and Econometrics*.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Matrice Jacobienne]]
- [[C - Gradient]]
- [[T - Règle de la chaîne pour les différentielles]]
- [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]]
- [[T - Différentielle du log-déterminant]]

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Définition de la différentielle de $f:\mathbb R^m\to\mathbb R^n$ en $x_0$ ?::L'opérateur linéaire $df_{x_0}$ tel que $f(x_0+\Delta)-f(x_0)=df_{x_0}(\Delta)+o(\|\Delta\|)$.

Que signifie $o(\|\Delta\|)$ ?::Une fonction $h$ avec $h(\|\Delta\|)/\|\Delta\|\to0$ quand $\|\Delta\|\to0$ : négligeable devant $\Delta$.

Forme de la différentielle pour $f:\mathbb R^m\to\mathbb R^n$ ?::La jacobienne $n\times m$, $(df)_{ij}=\partial f_i/\partial x_j$, appliquée par produit matriciel.

Forme de la différentielle pour $f:\mathbb R^{n\times n}\to\mathbb R$ ?::Une matrice $df$ telle que $df(\Delta)=\mathrm{tr}(df^\top\Delta)$.

Différentielle de $x^\top Ax$ ?::$x^\top(A+A^\top)$.