---
## type: concept
cours: [IFT6758]
statut: incomplet
tags: []
prerequis: ["[[C - Surapprentissage]]", "[[C - Sous-apprentissage]]"]
maj: 2026-08-06
---
## Définition

Ensemble de méthodes pour vérifier qu'un modèle entraîné généralise bien, plutôt que de simplement bien coller aux données d'entraînement.

## Méthodes

- **Holdout (ensemble de test)** : réserver une partie des données, jamais vue à l'entraînement, pour évaluer la performance finale.
- **Validation croisée (k-fold)** : diviser les données en k parties, entraîner sur k-1 d'entre elles et valider sur la dernière, en alternant la partie de validation.
- **Entraînement / Validation / Test** : si assez de données, séparer en 3 ensembles — entraînement (ajuster les paramètres), validation (ajuster les hyperparamètres), test (évaluation finale, jamais utilisé pour ajuster quoi que ce soit).

## Pourquoi

Permet de détecter le [[C - Surapprentissage]] et le [[C - Sous-apprentissage]] avant de déployer le modèle, et de savoir si on a assez de données à diviser.

## Liens connexes

- [[C - Sélection de modèle]]
- [[C - Hyperparamètres]]
- [[C - Test d'hypothèse]]
- [[MOC - IFT6758 Sciences des données]]