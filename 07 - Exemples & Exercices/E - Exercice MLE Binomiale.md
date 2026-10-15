---
cours:
  - IFT6269
type: exercice
statut: complet
maj: 2026-10-15
---
**Énoncé** : Soit $X \sim \mathrm{Bin}(n,\theta)$, $\theta\in[0,1]$, et une observation $x\in\Omega_X={0,\dots,n}$. Trouver $\widehat\theta_{\text{ML}}(x)$.
## Solution

**1. Log-vraisemblance** ([[D - Binomiale]]) : $$\ell(\theta) = \log\binom{n}{x} + x\log\theta + (n-x)\log(1-\theta)$$ ($\log\binom nx$ est constant en $\theta$.)
**2. Point stationnaire** : $$\frac{\partial\ell}{\partial\theta} = \frac{x}{\theta} - \frac{n-x}{1-\theta} = 0 \ \Longrightarrow\ x - \theta x - (n-x)\theta = 0 \ \Longrightarrow\ \theta^\star = \frac{x}{n}$$
**3. Vérification (global)** : $\ell$ est **strictement concave** ($\ell''(\theta)<0$), donc $\theta^\star$ stationnaire $\Rightarrow$ maximum global. $$\boxed{\widehat\theta_{\text{ML}}(x) = \frac{x}{n}}$$la fréquence relative de l'observation, conforme à l'intuition.

**4. Cas des bords** : la contrainte $\theta\in[0,1]$ n'a pas d'effet ici tant que $x\neq 0$ et $x\neq n$ (le stationnaire $x/n$ est déjà à l'intérieur de $[0,1]$). Si $x=0$ ou $x=n$, on utilise la monotonie de $\ell$ sur $[0,1]$ pour conclure que le maximum est sur la frontière (resp. $0$ et $1$) ce qui est cohérent avec $x/n$ de toute façon.

**5. Propriété** : cet estimateur est **non biaisé** : $$E_X[\widehat\theta_{\text{ML}}] = E_X!\left[\frac Xn\right] = \frac{n\theta}{n} = \theta$$ (ce n'est cependant pas une propriété générale du MLE -> voir [[C - Estimateur du Maximum de Vraisemblance (MLE)]]).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Maximisation de la vraisemblance]]
- [[D - Binomiale]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[E - Exercice MLE Multinomiale]]