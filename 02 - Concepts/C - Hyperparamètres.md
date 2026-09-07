---
cours:
  - IFT6758
  - IFT6135
statut: incomplet
tags: []
prerequis: []
maj: 2026-08-06
---
## Définition

Paramètres d'un modèle qui ne sont pas appris directement à partir des données pendant l'entraînement, mais fixés/choisis avant ou entre les entraînements. Par opposition aux paramètres $\theta$ optimisés par [[A - Rétropropagation du gradient (gradient descent)]]. Exemples : le taux d'apprentissage, le coefficient de régularisation $\lambda$, le nombre de couches d'un réseau.

## Exemples

- Nombre d'arbres et profondeur dans une [[A - Forêt Aléatoire]]
- Nombre de "grappes" (clusters) dans [[A - K-Means]]
- Nombre de paramètres/couches dans un [[A - Réseau de neurones]]

## Réglage

On essaie différentes valeurs et on choisit celles qui donnent les meilleures performances sur l'ensemble de validation (jamais sur le test) voir [[C - Validation croisée]].

Le choix des hyperparamètres se fait via la [[C - Sélection de modèle]], sur l'ensemble de validation.
## Liens connexes

- [[C - Complexité d'un modèle (capacité)]]
- [[C - Validation croisée]]
- [[MOC - IFT6758 Sciences des données]]
- [[MOC - IFT6135 Apprentissage de Représentations]]