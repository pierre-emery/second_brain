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
## Flashcards

#flashcards/IFT6135/02-entrainement

Qu'est-ce que la descente de gradient par mini-lot ?::Chaque mise à jour utilise le gradient moyen sur un petit lot d'exemples (entre SGD à 1 exemple et le batch complet).

Deux avantages du mini-lot par rapport à SGD à un exemple ?::Estimation du gradient plus précise (moins bruitée) ; opérations matrice-matrice plus efficaces (parallélisation).