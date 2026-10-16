---
cours:
  - IFT6758
  - IFT6135
statut: à réviser
tags: []
prerequis: []
maj: 2026-08-06
---
La complexité d'un modèle est sa capacité à extraire de plus en plus d'information des données. Les principaux facteurs qui l'influencent sont :

- le nombre de paramètres à entraîner
- la structure/architecture du modèle
## Exemple

Comment mesurer la complexité selon le type de modèle :
- **[[A - Arbre de décision]]** : profondeur de l'arbre
- **[[A - Forêt Aléatoire]]** : nombre d'arbres, profondeur des arbres
- **[[A - Réseau de neurones]]** : nombre de paramètres, nombre de couches
## Situation typique où il faut considérer la complexité

- On peut améliorer les performances en augmentant les données d'entraînement
- Les performances finissent par saturer ; ajouter des données n'améliore alors plus rien
- Les performances maximales dépendent alors de la complexité
- Pour de meilleures performances, il faut augmenter la complexité ou changer de modèle
## Liens connexes
- [[C - Sous-apprentissage]]
- [[C - Surapprentissage]]
- [[C - Hyperparamètres]]
- [[C - Principe de parcimonie]]
- [[MOC - IFT6758 Sciences des données]]
- [[MOC - IFT6135 Apprentissage de représentations]]

## Flashcards

#flashcards/IFT6135/00-revision 

Deux facteurs principaux de la capacité d'un modèle ?::Le nombre de paramètres et l'architecture/structure du modèle.
<!--SR:!2026-10-19,3,250-->

Les performances plafonnent malgré plus de données d'entraînement. Que faire ?::Augmenter la capacité du modèle ou changer de famille de modèles.