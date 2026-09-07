---

type: algorithme

cours: [IFT6135]

statut: brouillon

---
Procédure itérative pour minimiser une fonction (typiquement le risque empirique régularisé).

**Descente de gradient (batch)** :
1. Initialiser $\theta$
2. Pour $N$ itérations :
   - $\Delta = -\frac{1}{T}\sum_t \nabla_\theta l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$
   - $\theta \leftarrow \theta + \alpha\,\Delta$

$\alpha$ est le [[C - Taux d'apprentissage]]. La direction $-\nabla_\mathbf{x} f(\mathbf{x})$ correspond à la direction de plus forte diminution de $f$.
  
Voir aussi [[A - Descente de Gradient Stochastique (SGD)]] pour la variante qui met à jour $\theta$ après chaque exemple plutôt qu'après avoir parcouru tout l'ensemble d'entraînement.

## Liens connexes
- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Gradient]]
- [[C - Risque Empirique]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]