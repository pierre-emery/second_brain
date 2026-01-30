La complexité algorithmique est explicitée en temps et en espace. 
Il y a une certaine notation utilisée 
- $T(n)\in O(g(n))$ représente la borne supérieure
- $T(n)\in \Omega (g(n))$ est la borne inférieure
- $T(n) \in \Theta (g(n))$ est l'ordre exact
## Complexité en temps
Idée : compter le nombre d'opérations de bases effectuée (addition, multiplications, etc) et regarder la croissance quand la taille d'entrée augmente..

Cependant il est difficile, en général, de trouver le nombre exact d’opérations. Donc on cherche à comprendre comment le nombre d’opérations augmente quand le problème devient plus grand.
Pour ce faire on utilise la croissance asymptotique [[C - Croissance Asymptotique (Big O)]]

## Interprétation
Dépend vraiment du contexte mais de manière générale une complexité algorithmique polynomiale : $T(m,n) = O(poly(m,n))$ est considére comme une croissance raisonnable ($O(mn^2),O((m+n)^3)$)
Alors que une croissance exponentielle explose trop vite $T(n)=O(2^n),O(n!)$.

### Récurrences

Beaucoup d'algorithmes utilisent le concept [[C - Divide & Conquer]] et parmis eux beaucoup donnent une récurrence du type : $$T(n)=aT(\frac nb)+f(n)$$
- $a=$ nombre de sous-problèmes
- $\frac nb=$ taille de chaque sous-problème
- $f(n)=$coût hors récursion (pour merge par exemple)

Dans ces cas on utilise [[T - Master Theorem]] pour calculer sa complexité temporelle.

## Complexité en Espace
L'espace doit être vu comme $S(n)=$ mémoire auxiliaire $+$ pile de récursion

L'idée est que en récursion on considère la profondeur $\times$ coût par appel.

## Compromis Temps-Espace
On peut souvent gagner du temps en utilisant plus de mémoire par exemple en programmation dynamique (memoization) ou bien avec des tables de hachage. Ou à l'inverse réduire la mémoire au prix d'un temps plus grand de calcul ( streaming, recomputation).


