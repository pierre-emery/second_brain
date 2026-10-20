---
type: concept
cours:
  - IFT6269
statut: à réviser
maj: 2026-09-08
---
En théorie des graphes, un ensemble de noeuds est une clique si tous ces noeuds sont connectés deux à deux par une arête dans le grpahe $G$ (sous-graphe complet).

Dans le contexte des [[A - Modèle Graphique Non-dirigé| modèles graphiques non-dirigés]], chaque clique $C^{(i)}$ du graphe est associée à un facteur $\phi^{(i)}(C^{(i)})$ utilisé dans la factorisation de la distribution jointe. La taille des cliques détermine directement le nombre de paramètres nécessaires pour représenter chaque facteur (exponentiel dans le nombre de variables de la clique), d'où l'intérêt de trouver des factorisations en petites cliques.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Non-dirigé]]
- [[C - Factorisation d'une distribution jointe]]
## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

Qu'est-ce qu'une clique ?::Un ensemble de nœuds tous reliés deux à deux (sous-graphe complet).

Pourquoi chercher des factorisations en petites cliques ?::Le nombre de paramètres d'un facteur croît exponentiellement avec la taille de sa clique.