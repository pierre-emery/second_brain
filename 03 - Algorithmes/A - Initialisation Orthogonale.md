---
type: algorithme
cours:
  - IFT6135
statut: brouillon
maj: 2026-10-15
---
Stratégie d'initialisation de la matrice récurrente $\mathbf{U}$ d'un [[A - Réseau de Neurones Récurrent (RNN)|RNN]] pour contrer le [[C - Gradient Explosif et Évanescent (RNN)|gradient évanescent]] (et explosif) au début de l'entraînement.
## Recette

- Initialiser $\mathbf{U}$ comme une **[[C - Matrice Orthogonale|matrice orthogonale]] aléatoire** : $\mathbf{U}^\top\mathbf{U} = \mathbf{U}\mathbf{U}^\top = \mathbf{I}$.
- Initialiser $\mathbf{W}$ comme d'habitude (petites valeurs aléatoires).
## Pourquoi ça marche

Rappel du facteur répété dans le gradient : $\mathbf{U}^\top \mathrm{diag}(1 - \mathbf{h}_{t'}^2)$.

1. **Multiplier par $\mathbf{U}^\top$ ne change pas la norme** :
$$(\mathbf{U}^\top \mathbf{v})^\top (\mathbf{U}^\top \mathbf{v}) = \mathbf{v}^\top \mathbf{U}\mathbf{U}^\top \mathbf{v} = \mathbf{v}^\top \mathbf{v}$$
2. Avec $\mathbf{W}$ petite, les pré-activations sont proches de 0, donc $\mathbf{h}_{t'} \approx 0$ et $\mathrm{diag}(1 - \mathbf{h}_{t'}^2) \approx \mathbf{I}$.

Le produit de facteurs est donc proche d'une isométrie : le gradient ne s'évanouit ni n'explose **au moins initialement**. Rien ne garantit que $\mathbf{U}$ reste orthogonale pendant l'entraînement.

*(Complément, hors diapos : on génère une matrice orthogonale aléatoire via la décomposition QR d'une matrice gaussienne ; en PyTorch, `torch.nn.init.orthogonal_`.)*
## Liens connexes

- [[C - Matrice Orthogonale]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - Initialisation de Glorot (Xavier)]]
- [[A - Écrêtage du Gradient (Gradient Clipping)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]