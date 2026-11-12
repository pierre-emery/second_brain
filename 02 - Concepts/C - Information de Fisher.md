---
type: concept
cours: [IFT6269]
statut: incomplet
maj: 2026-11-11
---
## Définition

Pour un modèle $p(x;\theta)$ :
$$I(\theta)=\mathbb E_\theta\!\left[\nabla_\theta\log p(X;\theta)\,\nabla_\theta\log p(X;\theta)^\top\right]=-\,\mathbb E_\theta\!\left[\nabla^2_\theta\log p(X;\theta)\right]$$

(la seconde égalité sous conditions de régularité). C'est la variance du **score** $\nabla_\theta\log p(X;\theta)$, ou la courbure moyenne de la log-vraisemblance.
## Rôle dans le cours

- Variance asymptotique du [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] : $\sqrt n(\widehat\theta_{\text{MLE}}-\theta)\xrightarrow{d}\mathcal N(0,I(\theta)^{-1})$.
- Apparaît dans la [[T - Borne de Cramér-Rao]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[T - Borne de Cramér-Rao]]
- [[C - Vraisemblance]]
- [[C - Matrice Hessienne]]
## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Information de Fisher (deux écritures) ?::$I(\theta)=\mathbb E[\nabla\log p\,\nabla\log p^\top]=-\mathbb E[\nabla^2\log p]$.