---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Planar flow** (Rezende & Mohamed 2015) : couche de [[M - Flot normalisant (Normalizing Flow)|flot normalisant]] qui ajoute à l'identité une perturbation de **rang 1**, ce qui rend le déterminant du jacobien calculable en $\mathcal O(d)$ grâce à une identité de déterminant.

$$f(x) = x + u\,h(w^\top x + b),\qquad u, w\in\mathbb R^d,\ b\in\mathbb R$$

## Intuition
Chaque couche contracte ou dilate l'espace **perpendiculairement à l'hyperplan** $w^\top x + b = 0$. Une seule couche est peu expressive ; on en empile $K$ pour façonner des densités complexes (figure du cours : une gaussienne ou une uniforme devient multimodale avec $K = 1, 2, 10$).

## Formalisme
- **Inversibilité** : avec $h = \tanh$, il suffit que $u^\top w > -1$.
- **Déterminant du jacobien** : $\frac{\partial f}{\partial x} = I + h'(w^\top x + b)\,u w^\top$, matrice de rang 1 ajoutée à l'identité, donc (lemme du déterminant matriciel, cas $k = 1$ de l'[[T - Identité du déterminant de Sylvester|identité de Sylvester]]) :
$$\left|\det\frac{\partial f}{\partial x}\right| = \left|\det\big(I + h'(w^\top x+b)\,uw^\top\big)\right| = \left|1 + h'(w^\top x + b)\,u^\top w\right|.$$
Coût $\mathcal O(d)$ au lieu de $\mathcal O(d^3)$.

## Exemple
VAE sur MNIST binarisé (Rezende et al. 2015), borne sur $-\ln p(x)$ : DLGM à covariance diagonale $\le 89{,}9$ ; avec flot planaire $K = 10$ : $\le 87{,}5$ ; $K = 20$ : $\le 86{,}5$ ; $K = 40$ : $\le 85{,}7$ ; $K = 80$ : $\le 85{,}1$. Plus de couches donnent une meilleure postérieure approchée.

## Flashcards
#flashcards/IFT6135/10-generatifs

Forme d'une couche de flot planaire ?::$f(x) = x + u\,h(w^\top x + b)$.

Dérive le déterminant du jacobien d'un flot planaire
?
$J = I + h'(w^\top x+b)\,uw^\top$, de rang 1 + identité ; par $\det(I+ab^\top)=1+b^\top a$ : $|\det J| = |1 + h'(w^\top x+b)\,u^\top w|$.

Condition d'inversibilité d'un flot planaire avec $\tanh$ ?::$u^\top w > -1$.

Limite principale du flot planaire ?::Chaque couche ne déforme l'espace que dans une seule direction (rang 1) : il faut empiler beaucoup de couches.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[M - Flot de Sylvester]]
- [[T - Identité du déterminant de Sylvester]]
- [[C - Matrice Jacobienne]]
