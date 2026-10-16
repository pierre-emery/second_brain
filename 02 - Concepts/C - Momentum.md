---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-09-26

---
Technique d'optimisation utilisant une moyenne à décroissance exponentielle des gradients précédents plutôt que le gradient courant seul :

$$\overline{\nabla}^{(t)}_\theta = \nabla_\theta l(f(\mathbf{x}^{(t)}), y^{(t)}) + \beta\,\overline{\nabla}^{(t-1)}_\theta$$
Permet de traverser les plateaux plus rapidement en « prenant de l'élan » dans une direction cohérente.
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Formule de la mise à jour avec momentum ?::$\overline{\nabla}^{(t)}_\theta = \nabla_\theta l(f(\mathbf{x}^{(t)}), y^{(t)}) + \beta\,\overline{\nabla}^{(t-1)}_\theta$ : moyenne à décroissance exponentielle des gradients.

Quel problème le momentum aide-t-il à résoudre ?::Traverser plus vite les plateaux et points-selles en accumulant de l'« élan » dans une direction cohérente (et amortir les oscillations).