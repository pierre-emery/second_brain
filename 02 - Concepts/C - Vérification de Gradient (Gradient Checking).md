---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Méthode pour déboguer une implémentation de fprop/bprop, en comparant le gradient calculé à une approximation par différences finies :

$$\frac{\partial f(x)}{\partial x} \approx \frac{f(x+\epsilon) - f(x-\epsilon)}{2\epsilon}$$

où $f(x)$ est la perte et $x$ un paramètre. Si le gradient analytique (rétropropagation) et cette approximation numérique concordent, l'implémentation est probablement correcte.
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Dérivée et Dérivée Partielle]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Formule de différence finie centrée utilisée pour vérifier un gradient ?::$\dfrac{\partial f}{\partial x} \approx \dfrac{f(x + \epsilon) - f(x - \epsilon)}{2\epsilon}$

À quoi sert la vérification de gradient ?::Déboguer une implémentation de fprop/bprop en comparant le gradient analytique à l'approximation numérique.