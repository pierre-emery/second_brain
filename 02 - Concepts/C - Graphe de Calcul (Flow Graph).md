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