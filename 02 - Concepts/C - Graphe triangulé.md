---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
## Définition

Une **corde** est une arête entre deux nœuds **non consécutifs** d'un cycle.

Un graphe est **triangulé** (ou *cordal*) s'il n'a **aucun cycle de longueur $\ge4$ sans corde** : tout cycle de 4 nœuds ou plus peut être « cassé » par une corde.
## Exemple

Le carré $1-2-4-3-1$ n'est pas triangulé ; en ajoutant la diagonale $2-3$, il le devient.

## Lien avec l'inférence

Lors de l'[[A - Élimination de variables|élimination de variables]], éliminer un nœud relie tous ses voisins restants (nouvelle clique). Le **graphe augmenté** (arêtes originales + arêtes ajoutées) est **toujours triangulé** : l'élimination ajoute exactement assez d'arêtes pour cela. Ses cliques sont les cliques d'élimination, qui déterminent le coût (→ [[C - Largeur arborescente (treewidth)]]). Base de l'algorithme de l'**arbre de jonction**.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Élimination de variables]]
- [[C - Largeur arborescente (treewidth)]]
- [[C - Clique (graphe)]]
## Flashcards

#flashcards/IFT6269/13-inference

Qu'est-ce qu'un graphe triangulé ?::Un graphe sans cycle de longueur $\ge4$ dépourvu de corde.

Qu'est-ce qu'une corde ?::Une arête entre deux nœuds non consécutifs d'un cycle.

Quel lien entre élimination de variables et graphes triangulés ?::Le graphe augmenté par les arêtes ajoutées pendant l'élimination est toujours triangulé.