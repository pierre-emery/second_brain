---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
La méthode du early stopping ou de l'arrêt prématuré permet de cesser l'entraînement lorsque le meilleur compromis est atteint entre la mémorisation et la compréhension des données.

**En pratique** : arrêter l'entraînement quand l'erreur sur l'ensemble de validation recommence à augmenter (avec une certaine marge/patience), même si l'erreur d'entraînement continue de diminuer. Le nombre d'époques devient ainsi un hyperparamètre choisi via l'ensemble de validation plutôt que fixé à l'avance.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Surapprentissage]]
- [[C - Sous-apprentissage]]
- [[C - Sélection de modèle]]