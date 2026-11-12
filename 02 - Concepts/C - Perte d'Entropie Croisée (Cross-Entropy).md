---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-12
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

- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Fonction de perte]]
- [[C - Fonction d'activation]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Entropie]]
- [[C - Divergence de Kullback-Leibler]]

## IFT6269 — entropie croisée comme perte statistique

Dans le cadre de la [[C - Fondements de la théorie de décision|théorie de la décision]] pour l'estimation de densité, la perte logarithmique donne la perte statistique de l'action $\hat q$ quand la vraie loi est $p_\theta$ :
$$L(p_\theta,\hat q)=\mathbb E_{X\sim p_\theta}[-\log\hat q(X)]=H(p_\theta)+D_{KL}(p_\theta\,\|\,\hat q).$$
C'est l'**entropie croisée** de $p_\theta$ vers $\hat q$. Elle est minimisée en $\hat q=p_\theta$, où elle vaut l'[[C - Entropie|entropie]] $H(p_\theta)$ ; l'excès est la [[C - Divergence de Kullback-Leibler|divergence KL]]. La perte de classification ci-dessus est le cas où $p$ est le one-hot de la vraie classe (entropie nulle).

## Flashcards

#flashcards/IFT6135/02-entrainement

Perte d'entropie croisée pour une sortie softmax et une classe vraie $y$ ?::$l(f(\mathbf{x}), y) = -\log f(\mathbf{x})_y$ : la log-vraisemblance négative de la vraie classe.

Gradient de l'entropie croisée par rapport à la pré-activation de sortie (avant softmax) ?::$\nabla_{\mathbf{a}^{(L+1)}} l = -(\mathbf{e}(y) - f(\mathbf{x})) = f(\mathbf{x}) - \mathbf{e}(y)$ : prédiction moins one-hot.

Interprète intuitivement le gradient $f(\mathbf{x}) - \mathbf{e}(y)$.::Il pousse vers le bas la probabilité de chaque mauvaise classe proportionnellement à sa probabilité prédite, et vers le haut la vraie classe de $1 - f(\mathbf{x})_y$.

Gradient de $-\log f(\mathbf{x})_y$ par rapport à la sortie $f(\mathbf{x})$ ?::$-\mathbf{e}(y) / f(\mathbf{x})_y$

#flashcards/IFT6269/16-theorie-information

Décomposition de l'entropie croisée $\mathbb E_p[-\log\hat q]$ ?::$H(p)+D_{KL}(p\,\|\,\hat q)$ : l'entropie (irréductible) plus la KL (excès dû à $\hat q$).
