---
type: concept
cours:
  - IFT6135
statut: à réviser
maj: 2026-09-26
---
Variante de la [[A - Descente de Gradient Stochastique (SGD)|descente de gradient]] qui met à jour les paramètres à partir d'un petit lot (mini-batch) d'exemples plutôt que d'un seul exemple ou de tout l'ensemble d'entraînement.

**Avantages** :

- Le gradient (perte régularisée moyenne sur le mini-lot) est une estimation plus précise du gradient du risque que celle obtenue avec un seul exemple

- Permet d'exploiter des opérations matrice/matrice, plus efficaces (parallélisation)
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Parallélisation]]