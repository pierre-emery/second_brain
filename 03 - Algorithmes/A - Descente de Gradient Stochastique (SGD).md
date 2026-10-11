---
type: algorithme
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-26
---
Variante de la descente de gradient qui effectue une mise à jour des paramètres après chaque exemple d'entraînement plutôt qu'après avoir parcouru tout l'ensemble :
1. Initialiser $\theta \equiv \{\mathbf{W}^{(1)}, \mathbf{b}^{(1)}, \ldots, \mathbf{W}^{(L+1)}, \mathbf{b}^{(L+1)}\}$
2. Pour $N$ itérations :
   - Pour chaque exemple $(\mathbf{x}^{(t)}, y^{(t)})$ :
     - $\Delta = -\nabla_\theta l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$
     - $\theta \leftarrow \theta + \alpha\,\Delta$

Une **époque** (epoch) correspond à une itération complète sur **tous** les exemples d'entraînement.
## Ingrédients nécessaires

Pour appliquer cet algorithme à un réseau de neurones, il faut : la fonction de perte $l$, une procédure pour calculer les gradients des paramètres (la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]]), le régularisateur $\Omega(\theta)$ (et son gradient), et une méthode d'[[A - Initialisation de Glorot (Xavier)|initialisation]].
## Variantes

- [[A - Descente de Gradient par Mini-lot (Mini-batch)]] : met à jour à partir d'un lot d'exemples plutôt qu'un seul
- [[C - Momentum]] : utilise une moyenne des gradients passés plutôt que le gradient courant seul
- Voir [[C - Taux d'apprentissage]] pour les conditions de convergence et stratégies de décroissance de $\alpha$
## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[C - Momentum]]
- [[C - Taux d'apprentissage]]