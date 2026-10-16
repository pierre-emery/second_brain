---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Méthode de [[C - Sélection de modèle]] alternative à la [[C - Recherche en Grille (Grid Search)|recherche en grille]] : on spécifie une distribution sur les valeurs de chaque hyperparamètre (ex. uniforme sur un intervalle), puis on échantillonne indépendamment chaque hyperparamètre pour former une configuration, répété autant de fois que voulu.

On peut ensuite raffiner la grille/les distributions autour des meilleures configurations trouvées.
## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Sélection de modèle]]
- [[C - Recherche en Grille (Grid Search)]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Principe de la recherche aléatoire ?::Définir une distribution par hyperparamètre et échantillonner indépendamment chaque configuration, autant de fois que voulu.

Pourquoi la recherche aléatoire est-elle souvent meilleure que la grille ? *(complément)*::Pour le même budget, elle essaie beaucoup plus de valeurs distinctes de chaque hyperparamètre important (Bergstra & Bengio, 2012).