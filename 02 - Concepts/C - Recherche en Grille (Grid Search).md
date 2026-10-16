---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Méthode de [[C - Sélection de modèle]] : spécifier un ensemble de valeurs à tester pour chaque hyperparamètre, puis essayer **toutes** les configurations possibles (produit cartésien), en retenant celle avec la meilleure performance sur l'ensemble de validation.

Alternative : voir [[C - Recherche Aléatoire (Random Search)]].
## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Sélection de modèle]]
- [[C - Hyperparamètres]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Principe de la recherche en grille ?::Choisir un ensemble de valeurs par hyperparamètre et tester **toutes** les combinaisons (produit cartésien), en gardant la meilleure en validation.

Principal défaut de la recherche en grille ?::Le coût explose exponentiellement avec le nombre d'hyperparamètres, et elle gaspille des essais sur les hyperparamètres peu importants.