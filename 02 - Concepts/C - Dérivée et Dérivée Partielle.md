---

type: concept

cours: [IFT6135]

statut: brouillon

---
**Dérivée** : direction et taux d'augmentation d'une fonction

$$\frac{d}{dx}f(x) = \lim_{\Delta \to 0} \frac{f(x+\Delta)-f(x)}{\Delta}$$

  
**Dérivée partielle** : dérivée par rapport à une variable, les autres étant fixées
$$\frac{\partial}{\partial x}f(x,y) = \lim_{\Delta \to 0} \frac{f(x+\Delta,y)-f(x,y)}{\Delta}$$

**Exemple** : pour $f(x,y) = x^2/y$, on a $\frac{\partial f}{\partial x} = \frac{2x}{y}$ (on traite $y$ comme une constante) et $\frac{\partial f}{\partial y} = -\frac{x^2}{y^2}$ (on traite $x$ comme une constante).

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Gradient]]