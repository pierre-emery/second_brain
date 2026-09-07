---

type: algorithme

cours: [IFT6135]

statut: brouillon

---
Variante de la descente de gradient qui effectue une mise à jour des paramètres après chaque exemple d'entraînement plutôt qu'après avoir parcouru tout l'ensemble :
1. Initialiser $\theta$
2. Pour $N$ itérations :
   - Pour chaque exemple $(\mathbf{x}^{(t)}, y^{(t)})$ :
     - $\Delta = -\nabla_\theta l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$
     - $\theta \leftarrow \theta + \alpha\,\Delta$

## Liens connexes
- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Rétropropagation du gradient (gradient descent)]]