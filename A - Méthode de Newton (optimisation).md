---
cours:
  - IFT6135
  - MAT2412
statut: brouillon
maj: 2026-09-08
---
Algorithme d'optimisation de **second ordre**, par opposition à la [[A - Rétropropagation du gradient (gradient descent)|descente de gradient]], un algorithme de **premier ordre** qui n'utilise que le gradient. Newton utilise en plus la [[C - Matrice Hessienne|Hessienne]] pour exploiter l'information de courbure.

## Dérivation : approximation de Taylor du second ordre

Newton approxime $f(\mathbf{x})$ près d'un point $\mathbf{x}^{(0)}$ par un développement de Taylor du second ordre :

$$f(\mathbf{x}) \approx f(\mathbf{x}^{(0)}) + (\mathbf{x}-\mathbf{x}^{(0)})^\top\nabla_\mathbf{x}f(\mathbf{x}^{(0)}) + \frac{1}{2}(\mathbf{x}-\mathbf{x}^{(0)})^\top \mathbf{H}(f)(\mathbf{x}^{(0)}) (\mathbf{x}-\mathbf{x}^{(0)})$$

En résolvant pour le point critique de cette approximation, on obtient la mise à jour :

$$\mathbf{x}^* = \mathbf{x}^{(0)} - \mathbf{H}(f)(\mathbf{x}^{(0)})^{-1}\nabla_\mathbf{x}f(\mathbf{x}^{(0)})$$

## Cas particulier : fonction quadratique

Quand $f$ est une fonction quadratique **définie positive**, appliquer cette mise à jour une seule fois saute directement au minimum de $f$ (ex. [[C - Moindres Carrés Ordinaires (MCO)|moindres carrés]]). Quand $f$ n'est pas exactement quadratique mais peut être localement approximée comme une quadratique définie positive, on applique la mise à jour de façon itérative ce qui atteint souvent le point critique beaucoup plus vite que la descente de gradient.

## Mise en garde : attraction vers les points-selles

Cette rapidité près d'un minimum local devient un défaut près d'un **point-selle** : Newton n'est fiable que lorsque le point critique proche est un minimum, c'est-à-dire quand **toutes** les valeurs propres de la Hessienne sont positives. La descente de gradient, elle, n'est pas nécessairement attirée par un point-selle (à moins que le gradient n'y pointe directement).

## Coût

Requiert le calcul et l'inversion de la Hessienne à chaque itération ce qui est coûteux en haute dimension, contrairement à la descente de gradient qui n'a besoin que du gradient.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice Hessienne]]
- [[C - Gradient]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Moindres Carrés Ordinaires (MCO)]]