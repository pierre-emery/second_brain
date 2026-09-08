---
type: concept
cours: [IFT6135, IFT6758, STT3790]
statut: brouillon
maj: 2026-09-08
---
Méthode qui trouve $\mathbf{x}$ minimisant l'erreur quadratique :

$$f(\mathbf{x}) = \frac{1}{2}||\mathbf{A}\mathbf{x}-\mathbf{b}||_2^2$$

C'est le problème résolu par exemple par la [[A - Régression Linéaire]] ($\mathbf{A}$ = matrice de caractéristiques, $\mathbf{b}$ = cibles).

## Solution analytique (forme fermée)

En dérivant, le gradient est :

$$\nabla_\mathbf{x} f(\mathbf{x}) = \mathbf{A}^\top\mathbf{A}\mathbf{x}-\mathbf{A}^\top\mathbf{b}$$

En le posant à zéro, la solution directe est :

$$\mathbf{x} = (\mathbf{A}^\top\mathbf{A})^{-1}\mathbf{A}^\top\mathbf{b}$$

ce qui correspond au [[C - Pseudo-inverse de Moore-Penrose|pseudo-inverse]] $\mathbf{A}^+\mathbf{b}$ lorsque $\mathbf{A}^\top\mathbf{A}$ est inversible.

## Solution itérative (descente de gradient)

Le même problème peut être résolu par [[A - Rétropropagation du gradient (gradient descent)|descente de gradient]], en suivant $-\nabla_\mathbf{x} f(\mathbf{x})$ à petits pas jusqu'à ce que $||\mathbf{A}^\top\mathbf{A}\mathbf{x}-\mathbf{A}^\top\mathbf{b}||_2$ soit sous une tolérance $\delta$. Comme $f$ est quadratique, la [[A - Méthode de Newton (optimisation)|méthode de Newton]] convergerait ici en une seule itération vers le minimum global.

## Version contrainte

Si on minimise $f(\mathbf{x})$ sous la contrainte $\mathbf{x}^\top\mathbf{x} \leq 1$ :

- Si la solution non contrainte $\mathbf{x}^* = \mathbf{A}^+\mathbf{b}$ respecte déjà la contrainte, c'est la solution du problème contraint.
- Sinon, on utilise le [[C - Multiplicateurs de Lagrange|lagrangien]] $L(\mathbf{x},\lambda) = f(\mathbf{x}) + \lambda(\mathbf{x}^\top\mathbf{x}-1)$ avec $\lambda\geq0$, et on résout $\min_\mathbf{x}\max_{\lambda,\lambda\geq0} L(\mathbf{x},\lambda)$. En dérivant par rapport à $\mathbf{x}$, la solution prend la forme :

$$\mathbf{x} = (\mathbf{A}^\top\mathbf{A}+2\lambda\mathbf{I})^{-1}\mathbf{A}^\top\mathbf{b}$$

On ajuste ensuite $\lambda$ par **ascension de gradient** : $\frac{\partial}{\partial\lambda}L = \mathbf{x}^\top\mathbf{x}-1$, positif tant que la norme de $\mathbf{x}$ dépasse 1, donc on augmente $\lambda$ jusqu'à ce que $\mathbf{x}$ respecte exactement la contrainte. Voir [[C - Conditions KKT]] pour la généralisation de ce mécanisme.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Régression Linéaire]]
- [[C - Pseudo-inverse de Moore-Penrose]]
- [[A - Méthode de Newton (optimisation)]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Conditions KKT]]
- [[C - Gradient]]