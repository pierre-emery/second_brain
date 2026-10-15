---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Un terme général pour divers phénomènes qui surviennent lors de l'analyse et du traitement de données en haute dimension.

- Thème commun - la signification statistique est difficile, peu pratique, ou même impossible à obtenir en raison de la rareté des données dans les hautes dimensions.
- Provoque de mauvaises performances des méthodes statistiques classiques par rapport aux données de faible dimension.

Solution courante - réduire la dimension des données dans le cadre de leur (pré)traitement. [[C - Prétraitement]]

## Exemple concret : croissance exponentielle des régions

Imaginons l'espace des entrées organisé en grille, avec $v$ régions distinctes à différencier le long de chaque axe :

- En **1 dimension**, il suffit de $v$ régions et donc au moins $v$ exemples pour bien généraliser (un exemple par région).
- En **2 dimensions**, il faut distinguer $v\times v = v^2$ régions.
- En **3 dimensions**, $v^3$ régions.
- Plus généralement, pour $d$ dimensions, on a besoin de $O(v^d)$ régions et donc au moins autant d'exemples pour qu'une méthode reposant uniquement sur le voisinage local (ex. [[A - KNN|k plus proches voisins]]) ait au moins un exemple par région.

C'est le cœur du problème statistique posé par la haute dimension : le nombre de configurations possibles de $\mathbf{x}$ devient rapidement bien plus grand que le nombre d'exemples d'entraînement disponibles, laissant la plupart des cellules de la grille **sans aucun exemple**.

## Pourquoi les méthodes classiques échouent

De nombreux algorithmes traditionnels supposent implicitement que la sortie en un nouveau point doit ressembler à la sortie au point d'entraînement le plus proche (l'**hypothèse de lissage**, _smoothness prior_). Cette hypothèse fonctionne bien tant qu'il y a assez d'exemples pour observer la fonction cible sur l'essentiel de son domaine ce qui devient impossible en haute dimension avec un nombre fixe d'exemples.

## Ce qui permet malgré tout de généraliser

Il est possible de représenter efficacement un très grand nombre de régions (ex. $O(2^k)$) avec seulement $O(k)$ exemples, à condition d'introduire des **dépendances entre les régions** via des hypothèses supplémentaires sur la distribution génératrice sous-jacente permettant une généralisation **non locale**. C'est l'idée centrale derrière le deep learning : supposer que les données sont générées par la composition de facteurs (features), potentiellement à plusieurs niveaux d'une hiérarchie, ce qui procure un gain exponentiel entre le nombre d'exemples et le nombre de régions qu'on peut distinguer.

## Liens connexes

- [[MOC - Non-supervisé & réduction de dimension]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Prétraitement]]
- [[A - KNN]]
- [[C - Hypothèse de Variété (Manifold Hypothesis)]]
- [[C - Réduction de dimensions]]