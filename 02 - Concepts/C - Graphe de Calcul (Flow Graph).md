---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-26
---
**Vue objet** : chaque noeud peut être un objet avec :
- une méthode **fprop** qui calcule sa valeur à partir de ses enfants (entrées)
- une méthode **bprop** qui calcule le gradient de la perte par rapport à chacun de ses enfants 

Appeler fprop de chaque noeud dans le bon ordre donne la propagation avant. Appeler bprop dans l'ordre **inverse** donne la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]] ce qui est le principe de la **différentiation automatique** qui ne nécessite d'atteindre que les noeuds paramètres.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Rétropropagation du gradient (gradient descent)]]

## Flashcards

#flashcards/IFT6135/02-entrainement

Que font les méthodes fprop et bprop d'un nœud du graphe de calcul ?::fprop calcule la valeur du nœud à partir de ses entrées ; bprop calcule le gradient de la perte par rapport à chacune de ses entrées.

Dans quel ordre appelle-t-on fprop et bprop ?::fprop dans l'ordre topologique (propagation avant) ; bprop dans l'ordre **inverse** (rétropropagation) : c'est la différentiation automatique.