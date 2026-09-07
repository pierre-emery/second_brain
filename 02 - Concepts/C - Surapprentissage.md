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

- Apprend les détails et le bruit dans les données d'entraînement.
- Produit de bons résultats sur les données d'entraînement, mais de mauvais résultats sur les données de validation et de test.
- Mémorise les données au lieu d'apprendre et de comprendre la tendance sous-jacente.
- N'est pas en mesure de généraliser avec de nouvelles données.
- Biais faible mais variance élevée.

## Causes

- Modèle trop complexe
- Variance élevée
- Taille du jeu de données d'entraînement insuffisante
- Entraîné trop longtemps

## Exemple

Un modèle de degré 10 ajusté sur des données bruitées, qui suit parfaitement chaque point d'entraînement (y compris le bruit) plutôt que la tendance réelle — c'est le cas classique du "forcefitting -- too good to be true".

![[Under-overfitting]]

## Solutions

- Enlever des caractéristiques
- Réduction de dimensionnalité
- Régularisation
- Ajouter des données
- Nettoyer les données (valeurs aberrantes)
- Simplifier le modèle ou le changer carrément

## Liens connexes

- [[C - Sous-apprentissage]]
- [[C - Compromis Biais-Variance]]
- [[C - Early stopping]]
- [[MOC - IFT6758 Sciences des données]]
- - [[MOC - IFT6135 Apprentissage de Représentations]]