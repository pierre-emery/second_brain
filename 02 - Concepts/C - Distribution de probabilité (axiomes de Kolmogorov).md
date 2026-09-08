---
## type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-09-04
---
Une **distribution de probabilité** $P$ est une application $P : \mathcal E \to [0,1]$, où $\mathcal E = 2^\Omega$ est l'ensemble de tous les sous-ensembles de $\Omega$ (l'ensemble des « événements », un σ-champ / σ-field en théorie de la mesure).

## Axiomes de Kolmogorov

$P$ satisfait :

1. $P(E) \geq 0 \quad \forall E \in \mathcal E$
2. $P(\Omega) = 1$
3. $P\left(\bigcup_{i=1}^{\infty} E_i\right) = \sum_{i=1}^{\infty} P(E_i)$ quand les $E_i$ sont mutuellement disjoints

> Version simplifiée (Ω dénombrable, cas discret) : $P({\omega}) \geq 0\ \forall \omega \in \Omega$ et $\sum_{\omega \in \Omega} P({\omega}) = 1$. Un cas particulier des axiomes ci-dessus.

Notation : $P({X=x}) = p(x)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Espace de probabilité]]
- [[C - Variable Aléatoire]]