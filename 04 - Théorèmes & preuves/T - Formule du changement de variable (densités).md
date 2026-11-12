---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Si $X \sim p_X$ et $Y = f(X)$ avec $f : \mathbb R^m \to \mathbb R^m$ **inversible** et dérivable, la densité de $Y$ est la densité de $X$ au point antécédent, corrigée par le **changement local de volume** :
$$p_Y(y) = p_X\big(f^{-1}(y)\big)\,\left|\det\frac{\partial f^{-1}(y)}{\partial y}\right| \qquad\Longleftrightarrow\qquad p_X(x) = p_Y\big(f(x)\big)\,\left|\det\frac{\partial f(x)}{\partial x}\right|.$$

## Intuition
**Masse de probabilité = densité × volume.** La masse doit être conservée : si $f$ étire une région (volume ×2), la densité doit être divisée par 2 pour que l'intégrale reste égale à 1. Exemple du cours : $y = 2x$ avec $x\sim\mathcal N(0,1)$ donne $p(y) = p(x)/2$, une gaussienne deux fois plus large et deux fois moins haute. Le déterminant du jacobien mesure exactement ce facteur local de volume (aire du parallélogramme image du carré unité par $T = \begin{bmatrix} a & b\\ c & d\end{bmatrix}$ : $|ad - bc|$).

## Formalisme / Dérivation (1D)
Si $f$ est monotone **croissante** :
$$p_Y(y) = \frac{d}{dy}\mathbb P(Y\le y) = \frac{d}{dy}\mathbb P(f(X)\le y) = \frac{d}{dy}\mathbb P\big(X\le f^{-1}(y)\big) = p_X\big(f^{-1}(y)\big)\frac{df^{-1}(y)}{dy}.$$
Si $f$ est monotone **décroissante** :
$$p_Y(y) = \frac{d}{dy}\mathbb P\big(X\ge f^{-1}(y)\big) = -p_X\big(f^{-1}(y)\big)\frac{df^{-1}(y)}{dy}.$$
En résumé (le signe est absorbé par la valeur absolue, changement local de **longueur**) :
$$p_Y(y) = \begin{cases} 0 & \text{si } y\notin f(\mathbb R)\\ p_X\big(f^{-1}(y)\big)\left|\dfrac{df^{-1}(y)}{dy}\right| & \text{si } y\in f(\mathbb R).\end{cases}$$
En dimension $m$, la dérivée devient le [[C - Matrice Jacobienne|jacobien]] et sa valeur absolue la valeur absolue du [[C - Déterminant d'une matrice|déterminant]] (changement local de **volume**). Le calcul d'un déterminant général coûte $\mathcal O(m^3)$.

**Log-densité** (forme utilisée en pratique) :
$$\log p_X(x) = \log p_Y\big(f(x)\big) + \log\left|\det\frac{\partial f(x)}{\partial x}\right|.$$

## Exemple
$f(x) = 2x+1$ sur $X\sim\mathcal U[0,1]$ : $Y\sim\mathcal U[1,3]$, densité $1 \cdot |1/2| = 1/2$ sur $[1,3]$.

## Flashcards
#flashcards/IFT6135/10-generatifs

Formule du changement de variable pour une densité ?::$p_Y(y) = p_X(f^{-1}(y))\,\left|\det \partial f^{-1}(y)/\partial y\right|$, ou $\log p_X(x)=\log p_Y(f(x))+\log|\det \partial f/\partial x|$.

Dérive le cas 1D pour $f$ croissante
?
$p_Y(y)=\frac{d}{dy}\mathbb P(f(X)\le y)=\frac{d}{dy}\mathbb P(X\le f^{-1}(y)) = p_X(f^{-1}(y))\frac{df^{-1}}{dy}$ ; si $f$ décroît, on obtient un signe moins, d'où la valeur absolue.

Pourquoi faut-il un facteur de jacobien ?::La masse (densité × volume) doit être conservée ; si $f$ dilate localement le volume, la densité doit diminuer d'autant.

Pourquoi le déterminant est-il un problème pour les flots en grande dimension ?::Un déterminant général coûte $\mathcal O(m^3)$ ; il faut des architectures où il est bon marché (triangulaire, rang faible…).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Probabilité]]
- [[C - Matrice Jacobienne]]
- [[C - Déterminant d'une matrice]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[C - Variable Aléatoire]]
