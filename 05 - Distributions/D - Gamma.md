---
type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-09-08
---
$$\Gamma(x\mid\alpha,\beta) \propto x^{\alpha-1}e^{-\beta x}, \qquad x > 0$$ où $\alpha$ est le paramètre de **forme** (shape) et $\beta$ le paramètre de **taux** (rate, ou inverse-échelle). Support : $\Omega_X = \mathbb R_+$. Souvent utilisée pour modéliser des **nombres positifs**.

## Propriétés

$$E[X] = \frac{\alpha}{\beta}, \qquad \mathrm{Var}[X] = \frac{\alpha}{\beta^2}$$

## Cas particulier

La loi **exponentielle** $\mathrm{Exp}(\beta)$ est un cas particulier : $\mathrm{Exp}(\beta) = \Gamma(1,\beta)$.

## Conjugaison

Sert de [[C - Distribution à priori|prior conjugué]] pour le paramètre de taux d'une exponentielle (voir l'exemple dans [[C - Distribution à postériori]]).

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]