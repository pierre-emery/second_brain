---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Pour une gaussienne $\mathcal N(\mu,\Sigma)$, la **distance de Mahalanobis au carré** de $x$ à $\mu$ est
$$\ell_{\mu,\Sigma}(x)=(x-\mu)^\top\Sigma^{-1}(x-\mu),\qquad x\in\mathbb R^d .$$
## Intuition

Distance euclidienne **après « blanchiment »** : on mesure l'écart à la moyenne en unités d'écart-type, en tenant compte des corrélations. Les lignes de niveau sont les ellipses de la gaussienne. Avec $\Sigma=I$, on retrouve $\|x-\mu\|^2$.

## Propriétés

- Apparaît dans le log de la densité gaussienne : $\log\mathcal N(x\mid\mu,\Sigma)=-\frac12\ell_{\mu,\Sigma}(x)-\frac12\log|\Sigma|-\frac d2\log 2\pi$. D'où son rôle dans tous les MLE/MAP gaussiens.
- Différentielle : $d(\ell_{\mu,\Sigma})_x=2(x-\mu)^\top\Sigma^{-1}$ → [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Loi Gaussienne (Normale)]]
- [[C - Matrice de Variance-Covariance]]
- [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]]
- [[A - Analyse Discriminante Linéaire (LDA)]]
## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Distance de Mahalanobis au carré ?::$(x-\mu)^\top\Sigma^{-1}(x-\mu)$.

Où la distance de Mahalanobis apparaît-elle dans la log-densité gaussienne ?::$\log\mathcal N(x\mid\mu,\Sigma)=-\frac12(x-\mu)^\top\Sigma^{-1}(x-\mu)-\frac12\log|\Sigma|+\text{cst}$.