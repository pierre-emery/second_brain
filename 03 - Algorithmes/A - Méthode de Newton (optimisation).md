---
type: algorithme
cours: [IFT6135, MAT2412, IFT6269]
statut: brouillon
maj: 2026-11-11
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

## Newton amorti et invariance affine (IFT6269, lecture 8)

**Newton amorti** (*damped*) : pour stabiliser, on ajoute un pas $\gamma_t$ :
$$w_{t+1}=w_t-\gamma_t\,H^{-1}(w_t)\nabla f(w_t)$$
On itère jusqu'à $\|w_{t+1}-w_t\|\le\epsilon$.

**Coût vs nombre d'itérations** : descente de gradient $O(d)$ temps et mémoire par itération, mais beaucoup d'itérations ; Newton $O(d^2)$ mémoire et $O(d^3)$ temps (inverser $H$) par itération, mais beaucoup moins d'itérations. → Inutilisable en grande dimension (« big data »).

**Invariance affine** : Newton est invariant à un changement d'échelle (affine) des variables, grâce à $H^{-1}$ qui « bien-conditionne » l'espace. Exemple : $f(w)=w_1^2+w_2^2$ ($H=2I$) → GD et Newton pointent tous deux vers $(0,0)$. Reparamétrisons $w_1=u_1/a$, $w_2=u_2/b$ ($a\ne b$) : $g(u)=u_1^2/a^2+u_2^2/b^2$.
- GD : $\Delta u=-2\gamma\,(u_1/a^2,\ u_2/b^2)$ → **pas** proportionnel à $u$, ne pointe pas vers le minimum (zig-zag dans une vallée elliptique).
- Newton : $\Delta u=-\gamma\,\mathrm{diag}(a^2,b^2)\,(u_1/a^2,\ u_2/b^2)=-\gamma\,u$ → pointe **directement** vers le minimum.

Application à la régression logistique : [[A - IRLS (moindres carrés repondérés itératifs)|IRLS]].

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Matrice Hessienne]]
- [[C - Gradient]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - IRLS (moindres carrés repondérés itératifs)]]
- [[C - Nombre de Conditionnement (matrice)]]

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Mise à jour de Newton amorti ?::$w_{t+1}=w_t-\gamma_tH^{-1}(w_t)\nabla f(w_t)$.

Coût par itération : descente de gradient vs Newton ?::GD : $O(d)$. Newton : $O(d^2)$ mémoire, $O(d^3)$ temps (inversion de la Hessienne) ; mais beaucoup moins d'itérations.

Qu'est-ce que l'invariance affine de Newton ?::Ses pas ne dépendent pas d'un changement d'échelle linéaire des variables : $H^{-1}$ recorrige la géométrie, donc il pointe vers le minimum même dans une vallée elliptique, contrairement à GD.
