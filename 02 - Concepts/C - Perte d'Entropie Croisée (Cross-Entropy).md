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
## Flashcards

#flashcards/IFT6135/02-entrainement

Perte d'entropie croisée pour une sortie softmax et une classe vraie $y$ ?::$l(f(\mathbf{x}), y) = -\log f(\mathbf{x})_y$ : la log-vraisemblance négative de la vraie classe.

Gradient de l'entropie croisée par rapport à la pré-activation de sortie (avant softmax) ?::$\nabla_{\mathbf{a}^{(L+1)}} l = -(\mathbf{e}(y) - f(\mathbf{x})) = f(\mathbf{x}) - \mathbf{e}(y)$ : prédiction moins one-hot.

Interprète intuitivement le gradient $f(\mathbf{x}) - \mathbf{e}(y)$.::Il pousse vers le bas la probabilité de chaque mauvaise classe proportionnellement à sa probabilité prédite, et vers le haut la vraie classe de $1 - f(\mathbf{x})_y$.

Gradient de $-\log f(\mathbf{x})_y$ par rapport à la sortie $f(\mathbf{x})$ ?::$-\mathbf{e}(y) / f(\mathbf{x})_y$