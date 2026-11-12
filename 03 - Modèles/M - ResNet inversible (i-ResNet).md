---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Invertible residual network** (Behrmann, Grathwohl, Chen, Duvenaud, Jacobsen, ICML 2019) : un bloc [[M - ResNet (Connexion Résiduelle)|résiduel]] $f(x) = x + g(x)$ devient **inversible** si $g$ est **contractante** ; son log-déterminant s'estime de façon **stochastique** par une série de puissances et l'estimateur de trace de Hutchinson.

$$f(x) = x + g(x),\qquad \left\|\frac{\partial g(x)}{\partial x}\right\|_2 < 1$$

## Intuition
Pas besoin d'architecture spéciale (couplage, masques) : n'importe quel ResNet devient un flot à condition de borner la **constante de Lipschitz** de chaque branche résiduelle. L'inverse n'a pas de forme fermée, mais on l'obtient par itération de point fixe.

## Formalisme
**Inversibilité** (Théorème 1) : si $g$ est $L$-lipschitzienne avec $0 < L < 1$, alors $f(x) = x + g(x)$ est inversible.
*Preuve* : pour $y$ fixé, on pose $x_0 = y$ et $x_t = y - g(x_{t-1})$ pour $t\ge1$. C'est une application contractante, donc par le [[T - Théorème du point fixe de Banach|théorème du point fixe de Banach]], $x_t$ converge vers un unique point fixe $x^*$, qui vérifie $f(x^*) = y$.

**Algorithme d'inversion** : entrée $y$, $n$ itérations ; $x^0 := y$ ; pour $i = 0,\dots,n$ : $x^{i+1} := y - g(x^i)$.

**Imposer $\mathrm{Lip}(g) < 1$** : pour $g = W_3\phi(W_2\phi(W_1))$ (couches convolutives, $\phi$ 1-lipschitzienne), $\mathrm{Lip}(g) < 1$ si $\|W_i\|_2 < 1$ pour chaque couche (norme spectrale). On estime $\tilde\sigma_i \le \|W_i\|_2$ par **itération de la puissance** avec $W_i$ et $W_i^\top$, puis on normalise : $\tilde W_i = c\,W_i/\tilde\sigma_i$ si $c/\tilde\sigma_i < 1$, sinon $\tilde W_i = W_i$.

**Log-déterminant** (série de puissances de la [[C - Trace d'une matrice|trace]] du logarithme matriciel, valide puisque $\|J_g\|_2 < 1$) :
$$\log\left|\det\big(I + J_g(x)\big)\right| = \mathrm{tr}\big(\log(I + J_g)\big) = \sum_{k=1}^\infty \frac{(-1)^{k+1}}{k}\,\mathrm{tr}\big(J_g^k\big),$$
et chaque trace est estimée par l'[[C - Estimateur de trace de Hutchinson|estimateur de Hutchinson]] $\mathrm{tr}(A) = \mathbb E_v[v^\top A v]$, avec $\mathbb E[v] = 0$, $\mathrm{Cov}(v) = I$. Les produits $v^\top J_g^k$ se calculent par produits vecteur-jacobien, sans jamais former $J_g$.

**Biais** : tronquer la série à $n$ termes introduit un **biais**. Chen et al. (2019, *Residual Flows*) proposent un estimateur **sans biais** de type « roulette russe » (troncature aléatoire repondérée).

## Exemple
Figure du cours : sur des données 2D jouets, l'i-ResNet apprend des densités comparables à Glow.

## Flashcards
#flashcards/IFT6135/10-generatifs

Condition pour que $f(x)=x+g(x)$ soit inversible ?::$g$ contractante : $\mathrm{Lip}(g)<1$ (par exemple $\|W_i\|_2<1$ pour chaque couche avec activations 1-lipschitziennes).

Comment inverser un bloc i-ResNet ?::Itération de point fixe $x^{i+1}=y-g(x^i)$ depuis $x^0=y$ ; elle converge par Banach puisque $g$ est contractante.

Comment l'i-ResNet estime-t-il $\log|\det(I+J_g)|$ ?
?
Par la série $\sum_k \frac{(-1)^{k+1}}{k}\mathrm{tr}(J_g^k)$, tronquée, avec chaque trace estimée par Hutchinson $\mathbb E_v[v^\top J_g^k v]$ via des produits vecteur-jacobien.

Quel défaut a la troncature de la série, et quelle correction existe ?::Elle introduit un biais ; Chen et al. (2019) proposent un estimateur sans biais par « roulette russe ».

Comment impose-t-on $\|W_i\|_2<1$ en pratique ?::On estime la norme spectrale par itération de la puissance et on renormalise $W_i \leftarrow cW_i/\tilde\sigma_i$ quand $c/\tilde\sigma_i<1$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[M - ResNet (Connexion Résiduelle)]]
- [[C - Continuité de Lipschitz]]
- [[T - Théorème du point fixe de Banach]]
- [[C - Estimateur de trace de Hutchinson]]
- [[C - Trace d'une matrice]]
