---
## type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-10-15
---
L'espace des paramètres valides pour une distribution catégorielle à $K$ choix (voir [[D - Multinomiale (et Multinoulli)]]) : $$\Delta_K \triangleq \left\{\pi \in \mathbb R^K \;;\; \forall j\ \pi_j \geq 0 \text{ et } \sum_{j=1}^K \pi_j = 1\right\}$$
Le simplexe de probabilité est un objet de dimension $(K-1)$ dans $\mathbb R^K$, à cause de la contrainte $\sum_j \pi_j = 1$. Ex. $\Delta_3$ est un ensemble 2-dimensionnel (un triangle) plongé dans $\mathbb R^3$. Cette dimensionnalité réduite complique l'optimisation directement sur $\Delta_K$.

## Reparamétrisation en objet plein

Une façon de contourner ce problème : reparamétrer avec $\pi_1,\dots,\pi_{K-1} \geq 0$ sous la contrainte $\sum_{j=1}^{K-1}\pi_j \leq 1$, et poser $\pi_K = 1 - \sum_{j=1}^{K-1}\pi_j$. On obtient alors un objet **plein** (full-dimensional) dans $\mathbb R^{K-1}$, parfois appelé le « coin du cube » (corner of the cube) : $$\Delta_{K-1}^c = \left\{(\pi_1,\dots,\pi_{K-1}) \in \mathbb R^{K-1} \;;\; \forall j\ \pi_j\geq 0 \text{ et } \sum_{j=1}^{K-1}\pi_j \leq 1\right\}$$ Ceci permet d'appliquer directement les techniques d'optimisation sans contrainte d'égalité (voir [[C - Points Critiques et Optima (local, global, point-selle)]]). L'alternative est d'optimiser directement sur $\Delta_K$ avec les [[C - Multiplicateurs de Lagrange]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Multinomiale (et Multinoulli)]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Contraintes]]