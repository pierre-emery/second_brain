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