---
type: concept
cours: IFT6135
statut: brouillon
maj: 2026-09-09
---
En moyenne sur toutes les distributions génératrice de données possibles, tout algorithme de classification obtient le même taux d'erreur en généralisant sur des points jamais observés. Autrement dit : aucun algorithme d'apprentissage n'est universellement meilleur qu'un autre. Même l'algorithme le plus sophistiqué obtient en moyenne sur toutes les tâches possibles la même performance qu'un algorithme qui prédit simplement que tout point appartient à la même classe.

## Conséquence pratique

Ce résultat ne tient que lorsqu'on moyenne sur toutes les distributions génératrices possibles (un scénario purement théorique). En pratique, on fait des hypothèses sur le type de distributions rencontrées dans le monde réel, ce qui permet de concevoir des algorithmes performants sur ces distributions spécifiques.

L'objectif de la recherche en apprentissage automatique n'est donc pas de chercher un algorithme universellement optimal mais de comprendre quels types de distributions sont pertinents pour les tâches réelles, et quels algorithmes fonctionnent bien sur ce type de données. C'est ce qui justifie l'usage de la [[C - Régularisation|régularisation]]. Construire des préférences dans l'algorithme, alignées avec le problème qu'on cherche à résoudre.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Régularisation]]
- [[C - Complexité d'un modèle (capacité)]]