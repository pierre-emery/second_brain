---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Presque tous les algorithmes d'apprentissage (deep learning inclus) peuvent être décrits comme une instance d'une recette assez simple : combiner un **jeu de données**, une **fonction de coût**, une **procédure d'optimisation** et un **modèle**.

## Exemple : [[A - Régression Linéaire|régression linéaire]]

- **Jeu de données** : $\mathbf{X}$ et $\mathbf{y}$
- **Fonction de coût** : $J(\mathbf{w},b) = -\mathbb{E}_{x,y\sim\widehat p_{\text{data}}}\log p_{\text{model}}(y\mid x)$
- **Modèle** : $p_{\text{model}}(y\mid x) = \mathcal{N}(y; \mathbf{x}^\top\mathbf{w}+b,\ 1)$
- **Optimisation** : résoudre où le gradient du coût est nul, via les [[C - Moindres Carrés Ordinaires (MCO)|équations normales]]

## Modularité

Ces quatre composantes peuvent être remplacées indépendamment les unes des autres, ce qui permet d'obtenir une grande variété d'algorithmes :

- Ajouter un terme de [[C - Régularisation|régularisation]] (ex. [[C - Décroissance des poids (Weight Decay)|décroissance des poids]]) à la fonction de coût.
- Remplacer un modèle linéaire par un modèle non linéaire, dans ce cas, la plupart des fonctions de coût ne peuvent plus être optimisées en forme fermée, ce qui impose une procédure itérative comme la [[A - Rétropropagation du gradient (gradient descent)|descente de gradient]].

## Apprentissage supervisé vs non-supervisé

Cette recette supporte les deux cadres : l'apprentissage supervisé fournit $(\mathbf{X},\mathbf{y})$, tandis que l'apprentissage non-supervisé ne fournit que $\mathbf{X}$, avec un coût et un modèle adaptés (ex. reconstruction pour l'[[A - Analyse en composantes principales (PCA)|ACP]] : $J(\mathbf{w}) = \mathbb{E}_x||\mathbf{x}-r(\mathbf{x};\mathbf{w})||_2^2$).

## Cas particuliers

Certains modèles (ex. [[A - Arbre de décision|arbres de décision]], [[A - K-Means|k-means]]) nécessitent des optimiseurs spéciaux, car leur fonction de coût comporte des régions plates qui les rendent inadaptées aux optimiseurs basés sur le gradient. Reconnaître que la plupart des algorithmes suivent cette recette aide à voir les différents algorithmes comme une taxonomie de méthodes reliées plutôt qu'une longue liste de cas isolés.

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Régression Linéaire]]
- [[C - Régularisation]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Moindres Carrés Ordinaires (MCO)]]