---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Fonction de perte standard pour la classification (avec sortie softmax), correspondant à la négative log-vraisemblance d'une distribution multinomiale :

$$l(f(\mathbf{x}), y) = -\log f(\mathbf{x})_y$$

où $f(\mathbf{x})_y = p(y\mid\mathbf{x})$ est la probabilité prédite pour la vraie classe $y$.

  **Gradient par rapport à la sortie du réseau** :

$$\nabla_{f(\mathbf{x})} \left[-\log f(\mathbf{x})_y\right] = -\frac{\mathbf{e}(y)}{f(\mathbf{x})_y}$$
où $\mathbf{e}(y)$ est le vecteur one-hot de $y$.

  **Gradient par rapport à la pré-activation de sortie** (avant le softmax) se simplifie élégamment :

$$\nabla_{\mathbf{a}^{(L+1)}(\mathbf{x})} \left[-\log f(\mathbf{x})_y\right] = -(\mathbf{e}(y) - f(\mathbf{x}))$$

C'est ce résultat simple qui initie la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]].
## Liens connexes

- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Fonction de perte]]
- [[C - Fonction d'activation]]
- [[A - Rétropropagation du gradient (gradient descent)]]