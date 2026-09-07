---
## type: concept
cours: [IFT6758]
statut: complet
tags: []
prerequis: []
maj: 2026-08-06
---
Fonction affine dont la sortie est donnée en paramètre à une fonction d'activation qui est non linéaire.

## Formule

Pour $R$ entrées $x_1,\dots,x_R$ et poids $w_1,\dots,w_R,w_0$ : $$y = f\left(\sum_{i=1}^R w_ix_i+w_0\right)$$ où $f$ est la [[C - Fonction d'activation]] (non-linéaire), et $w_0$ le biais (une entrée constante à 1).

## Composition : la couche

Une couche est un ensemble de neurones qui traitent tous les mêmes entrées (celles de la couche précédente) et produisent chacun une sortie. En empilant plusieurs couches connectées, on obtient un [[A - Réseau de neurones]] profond.

## Liens connexes

- [[A - Réseau de neurones]]
- [[C - Fonction d'activation]]