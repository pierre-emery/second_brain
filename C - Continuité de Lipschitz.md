---
type: concept
cours:
  - IFT6135
statut: à réviser
maj: 2026-09-08
---
Une fonction $f$ est **Lipschitz continue** si son taux de changement est borné par une constante $L$ (la constante de Lipschitz) :

$$\forall \mathbf{x}, \forall \mathbf{y},\quad |f(\mathbf{x})-f(\mathbf{y})| \leq L,||\mathbf{x}-\mathbf{y}||_2$$

## Utilité

Cette propriété permet de quantifier une hypothèse importante en optimisation : qu'un petit changement de l'entrée fait par un algorithme comme la [[A - Rétropropagation du gradient (gradient descent)|descente de gradient]] produit seulement un petit changement en sortie. C'est une contrainte relativement faible et de nombreux problèmes d'optimisation en deep learning peuvent être rendus Lipschitz continus avec des modifications mineures.

## Pertinence

Le deep learning manque généralement de garanties fortes de convergence, car la famille de fonctions utilisées (réseaux de neurones) est trop complexe. Restreindre une fonction (ou sa dérivée) à être Lipschitz continue est l'une des façons d'obtenir certaines garanties malgré tout, sans aller jusqu'à exiger la [[C - Optimisation Convexe|convexité]].

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Optimisation Convexe]]
- [[A - Rétropropagation du gradient (gradient descent)]]