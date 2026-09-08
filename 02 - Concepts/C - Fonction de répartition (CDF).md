---
type: concept
cours:
  - IFT6269
statut: brouillon
maj: 2026-09-07
---
Pour $\Omega_X \subseteq \mathbb R$ la distribution $P_X$ est entièrement caractérisée par sa fonction de répartition (cumulative distribution function (cdf)): $$F_X(x)\triangleq P_X\{X\leq x\}$$
### Propriétés
1. $F_X$ est non-décroissante
2. $lim_{x\rightarrow-\infty}F_X(x)=0$
3. $lim_{x\rightarrow+\infty}F_X(x)=1$

Pour une variable discrète, la cdf est constante par morceaux, avec des sauts. Pour une variable continue, la cdf est ­­« absolument continue », c'est-à-dire différentiable presque partout, et il existe $f(x)$ tel que $F_X(x)=\int_{-\infty}^xf(u)du$. Cette fonction $f$ est la [[C - Fonction de masse et de densité (pmf-pdf)]] (densité dans ce cas). Là où $f$ est continue, $\frac{d}{dx}F_X(x)=f(x)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Espace de Probabilité]]
- [[C - Fonction de masse et de densité (pmf-pdf)]]