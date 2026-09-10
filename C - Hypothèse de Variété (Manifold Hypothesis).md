---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Hypothèse selon laquelle les données de haute dimension rencontrées dans le monde réel (images, texte, son) ne remplissent pas uniformément l'espace $\mathbb{R}^n$, mais se concentrent plutôt près d'un petit nombre de **variétés** (manifolds) des sous-espaces de dimension bien plus faible que $n$, potentiellement courbes.

## Pourquoi le croire? Argument 1 : distribution concentrée

La distribution de probabilité sur les images, textes ou sons naturels est **hautement concentrée**. Du bruit uniforme ne ressemble presque jamais à une entrée structurée de ces domaines. Des points échantillonnés uniformément dans l'espace des pixels ressemblent à de la « neige » de télévision, pas à une image naturelle. De même, générer un texte en choisissant des lettres uniformément au hasard produit presque toujours une suite absurde plutôt qu'un texte en langue naturelle.

## Pourquoi le croire? Argument 2 : voisinages et transformations

Une distribution concentrée ne suffit pas à elle seule à montrer que les données reposent sur un petit nombre de variétés. Il faut aussi que les exemples rencontrés soient connectés entre eux par d'autres exemples, chacun entouré d'exemples similaires atteignables en appliquant des transformations qui font parcourir la variété. Pour des images, on peut imaginer plusieurs transformations continues de ce type : éclaircir/assombrir graduellement, déplacer ou faire pivoter des objets, changer graduellement des couleurs, etc. Plusieurs variétés distinctes coexistent généralement (ex. la variété des visages humains n'est probablement pas connectée à celle des visages de chats).

## Implication pratique

Quand les données reposent sur une variété de faible dimension, il est souvent plus naturel de représenter les données en termes de **coordonnées sur la variété**, plutôt qu'en coordonnées dans $\mathbb{R}^n$. Analogie : on donne des directions en termes de numéros civiques le long d'une route (variété 1D dans un espace 3D), pas en coordonnées 3D absolues. Extraire ces coordonnées de variété est difficile, mais c'est une des promesses centrales derrière plusieurs méthodes de [[C - Réduction de dimensions|réduction de dimensionnalité]].

## Liens connexes

- [[MOC - Non-supervisé & réduction de dimension]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Malédiction de la dimensionnalité]]
- [[C - Réduction de dimensions]]
- [[A - Isomap]]
- [[A - Diffusion Maps]]