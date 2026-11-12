---
type: concept
cours:
  - IFT6269
statut: à réviser
maj: 2026-10-24
---

En théorie des graphes, un ensemble de noeuds est une clique si tous ces noeuds sont connectés deux à deux par une arête dans le grpahe $G$ (sous-graphe complet).

Dans le contexte des [[A - Modèle Graphique Non-dirigé| modèles graphiques non-dirigés]], chaque clique $C^{(i)}$ du graphe est associée à un facteur $\phi^{(i)}(C^{(i)})$ utilisé dans la factorisation de la distribution jointe. La taille des cliques détermine directement le nombre de paramètres nécessaires pour représenter chaque facteur (exponentiel dans le nombre de variables de la clique), d'où l'intérêt de trouver des factorisations en petites cliques.

## Clique maximale (IFT6269)

Une **clique maximale** ne peut pas être étendue en ajoutant un sommet. Toute clique est incluse dans au moins une clique maximale ; dans un [[A - Modèle Graphique Non-dirigé|UGM]], il suffit donc de mettre des potentiels sur les cliques maximales $\mathcal C_{\max}$. Exemples de cliques de taille 1 (un nœud) à 5 (graphe complet $K_5$).
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Non-dirigé]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Graphe triangulé]]
- [[C - Largeur arborescente (treewidth)]]
## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

Qu'est-ce qu'une clique ?::Un ensemble de nœuds tous reliés deux à deux (sous-graphe complet).

Pourquoi chercher des factorisations en petites cliques ?::Le nombre de paramètres d'un facteur croît exponentiellement avec la taille de sa clique.

Qu'est-ce qu'une clique maximale ?::Une clique qu'on ne peut pas agrandir en ajoutant un sommet.