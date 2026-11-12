---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Pour $A\in\mathbb R^{m\times d}$ et $B\in\mathbb R^{d\times m}$ :
$$\det(I_m + AB) = \det(I_d + BA).$$
Cas particulier $d = 1$ (**lemme du déterminant matriciel**) : $\det(I + uw^\top) = 1 + w^\top u$.

## Intuition
$AB$ ($m\times m$) et $BA$ ($d\times d$) ont les **mêmes valeurs propres non nulles**. Comme $\det(I+M) = \prod_i (1+\lambda_i)$ et que les valeurs propres nulles contribuent un facteur 1, les deux déterminants sont égaux. Si $d\ll m$, on remplace un calcul en $\mathcal O(m^3)$ par un calcul en $\mathcal O(d^3)$.

## Formalisme / Dérivation
Par les compléments de Schur de la matrice par blocs $\begin{bmatrix} I_m & -A\\ B & I_d\end{bmatrix}$ :
$$\det\begin{bmatrix} I_m & -A\\ B & I_d\end{bmatrix} = \det(I_d)\,\det(I_m + A I_d^{-1} B) = \det(I_m)\,\det(I_d + B I_m^{-1} A),$$
d'où $\det(I_m + AB) = \det(I_d + BA)$.

## Exemple
$u = (1,2)^\top$, $w = (3,1)^\top$ : $\det\begin{bmatrix}4 & 1\\ 6 & 3\end{bmatrix} = 12 - 6 = 6$ et $1 + w^\top u = 1 + 3 + 2 = 6$.

## IFT6135 — usage
Rend calculables les déterminants des [[M - Flot planaire|flots planaires]] ($d=1$) et des [[M - Flot de Sylvester|flots de Sylvester]].

## Flashcards
#flashcards/IFT6135/10-generatifs

Énoncé de l'identité de Sylvester ?::$\det(I_m+AB)=\det(I_d+BA)$ pour $A$ de taille $m\times d$ et $B$ de taille $d\times m$.

Cas rang 1 de l'identité de Sylvester ?::$\det(I+uw^\top)=1+w^\top u$.

Pourquoi $\det(I_m+AB)=\det(I_d+BA)$ est-il intuitif ?::$AB$ et $BA$ ont les mêmes valeurs propres non nulles, et $\det(I+M)=\prod(1+\lambda_i)$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Algèbre linéaire]]
- [[C - Déterminant d'une matrice]]
- [[C - Valeurs et Vecteurs propres]]
- [[M - Flot planaire]]
- [[M - Flot de Sylvester]]
