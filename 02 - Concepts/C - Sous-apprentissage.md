---
cours:
  - IFT6758
  - IFT6135
statut: à réviser
tags: []
prerequis:
  - "[[C - Biais]]"
  - "[[C - Variance (expliquée)]]"
maj: 2026-08-06
---
## Définition

- Un modèle trop simple.
- Il ne performe pas bien avec les données d'entraînement et de test.
- N'est pas en mesure de saisir la relation entre les exemples en entrée et les valeurs cibles.
- [[C - Variance (expliquée)]] faible mais [[C - Biais]] élevé.
- Le modèle fait systématiquement des erreurs similaires aux mêmes endroits.

## Causes

- Le modèle est trop simple
- Il a un biais élevé
- La taille du jeu de données d'entraînement n'est pas suffisante
- Pas entraîné assez longtemps

## Exemple

Un modèle linéaire appliqué à une relation clairement non-linéaire est un exemple typique de sous-apprentissage : il n'a pas assez d'expressivité pour capter la courbure des données.

![[Under-overfitting]]

## Solutions

- Ajouter des caractéristiques
- Ajouter des interactions entre les caractéristiques
- Complexifier le modèle ou le changer carrément

## Liens connexes

- [[C - Surapprentissage]]
- [[C - Compromis Biais-Variance]]
- [[C - Complexité d'un modèle (capacité)]]
- [[MOC - IFT6758 Sciences des données]]
- [[MOC - IFT6135 Apprentissage de Représentations]]