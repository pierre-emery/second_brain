---
## type: exercice
cours: [IFT6269]
statut: complet
maj: 2026-10-15
---
**Énoncé** : Soit $X \sim \mathrm{Mult}(n,\pi)$, $\pi\in\Delta_K$, et une observation $x=(n_1,\dots,n_K)$ où $n_j=\sum_i x_{i,j}$. Trouver $\widehat\pi_{\text{ML}}(x)$.

## Solution

**1. Log-vraisemblance** ([[D - Multinomiale (et Multinoulli)]]) : $$\ell(\pi) = \sum_{j=1}^K n_j \log\pi_j - \underbrace{\log Z}_{\text{constant en }\pi}$$ On veut maximiser $\ell(\pi)$ sous la contrainte $\pi\in\Delta_K$, c.-à-d. $\forall j\ \pi_j\geq 0$ et $\sum_j\pi_j=1$  (voir [[C - Simplexe de probabilité]]).

**2. Lagrangien** (contrainte d'égalité $g(\pi) = 1-\sum_j\pi_j=0$, voir [[C - Multiplicateurs de Lagrange]]) : $$\mathcal J(\pi,\lambda) = \sum_{j=1}^K n_j\log\pi_j + \lambda\left(1-\sum_{j=1}^K\pi_j\right)$$
**3. Points stationnaires** : $$\frac{\partial\mathcal J}{\partial\pi_j} = \frac{n_j}{\pi_j} - \lambda = 0 \ \Longrightarrow\ \pi_j^\star = \frac{n_j}{\lambda}$$ En imposant la contrainte $\sum_j \pi_j^\star = 1$ : $$\sum_{j=1}^K \pi_j^\star = 1 \ \Longrightarrow\ \lambda = \sum_{j=1}^K n_j = n$$
**4. Résultat** : $$\boxed{\widehat\pi_{\text{ML}}^{(j)} = \frac{n_j}{n}}$$ la fréquence relative de la valeur $j$, l'analogue exact du résultat de l'[[E - Exercice MLE Binomiale|exercice Binomiale]].

**5. Vérification (global)** : $\ell$ est concave ($\forall\pi$, $\mathrm{Hessienne}(\ell)(\pi)\preceq 0$), donc le point stationnaire est un maximum **global**. Noter que $\pi_j^\star \geq 0$ automatiquement, respectant la contrainte de positivité du simplexe (qui n'a pas eu besoin d'être imposée explicitement dans le Lagrangien).

> **Alternative** : reparamétrer avec $\pi_K = 1-\sum_{j=1}^{K-1}\pi_j$ pour se ramener à une optimisation sans contrainte d'égalité sur un objet plein $\Delta_{K-1}^c \subset \mathbb R^{K-1}$ (voir [[C - Simplexe de probabilité]]) ce qui est plus adapté aux techniques standards (stationnarité + Hessienne), mais moins symétrique.

## Interprétation géométrique des multiplicateurs de Lagrange

Au point stationnaire, $\nabla f(\pi^\star) = -\lambda \nabla g(\pi^\star)$ : les gradients de l'objectif et de la contrainte sont **parallèles** (les courbes de niveau de $f$ sont tangentes à la courbe de contrainte $g=0$).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Maximisation de la vraisemblance]]
- [[D - Multinomiale (et Multinoulli)]]
- [[C - Simplexe de probabilité]]
- [[C - Multiplicateurs de Lagrange]]
- [[E - Exercice MLE Binomiale]]