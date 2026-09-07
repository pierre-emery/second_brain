---
## type: concept
cours: [IFT6758]
statut: incomplet
tags: []
prerequis: []
maj: 2026-08-06
---
## Définition

Étape qui consiste à préparer les données brutes pour faciliter le travail des modèles, avant l'entraînement.

## Pourquoi c'est important

Paradigme "garbage in, garbage out" : de mauvaises données produisent de mauvaises prédictions, peu importe la qualité du modèle utilisé ensuite.

## Prétraitement

- Nettoyer les données pour éliminer le bruit / les erreurs
- Gérer les [[C - Valeurs Aberrantes]]

## Augmentation

- Mise à l'échelle des données (normalisation)
- Construction de nouvelles entrées ([[C - Ingénierie de Caractéristiques]])

## Changement de représentation

Selon le type de données, il peut être utile de les convertir dans un autre format (ex: transformer une séquence de points en image). Il y a un compromis entre le temps de traitement gagné et l'espace disque occupé par la nouvelle représentation.

## Liens connexes

- [[C - Ingénierie de Caractéristiques]]
- [[C - Valeurs Aberrantes]]
- [[MOC - IFT6758 Sciences des données]]