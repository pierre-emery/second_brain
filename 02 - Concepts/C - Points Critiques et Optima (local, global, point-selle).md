---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
**Points critiques** : $\{\mathbf{x} \in \mathbb{R}^d \mid \nabla_\mathbf{x} f(\mathbf{x}) = 0\}$

**Courbure** dans la direction $\mathbf{v}$ : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v}$

**Types de points critiques** (via la Hessienne) :

- Minimum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} > 0\ \forall \mathbf{v}$ (Hessienne définie positive)
- Maximum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} < 0\ \forall \mathbf{v}$ (Hessienne définie négative)
- Point-selle : la courbure est positive dans certaines directions, négative dans d'autres

## Optimisation d'un réseau de neurones : non-convexité

Il n'y a pas un unique optimum global : on peut permuter les unités cachées d'une couche (avec leur connexions) et obtenir exactement la même fonction. On dit que les paramètres des unités cachées ne sont pas **indentifiables**.

L'optimisation peut rester bloquée dans un minimum local ou un **plateau**. Des travaux (Dauphin, Pascanu, Gulcehre, Cho, Ganguli, Bengio, NIPS 2014) suggèrent qu'en haute dimension, les points critiques problématiques sont souvent des **points de selles** que de véritables minima locaux d'où l'intérêt du [[C - Momentum]] pour les traverser plus rapidement.
## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice Hessienne]]
- [[C - Gradient]]
- [[C - Momentum]]
- [[A - Initialisation de Glorot (Xavier)]]
- 