---
type: exercice
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Calculer, avec la définition de la [[C - Différentielle (calcul matriciel)|différentielle]], les différentielles de :
1. $f(x)=x-\mu$ ($\mu\in\mathbb R^d$ fixe) ;
2. $g(x)=x^\top Ax$ ($A\in\mathbb R^{d\times d}$ fixe) ;
3. la [[C - Distance de Mahalanobis|distance de Mahalanobis au carré]] $\ell_{\mu,\Sigma}(x)=(x-\mu)^\top\Sigma^{-1}(x-\mu)$.

## Solution

**1.** $f(x+h)-f(x)=(x+h-\mu)-(x-\mu)=h=I_{d}\,h+0$, et $0/\|h\|\to0$. Donc $df_x=I_{d}$.

**2.**
$$g(x+h)-g(x)=(x+h)^\top A(x+h)-x^\top Ax=x^\top Ah+h^\top Ax+h^\top Ah .$$
$h^\top Ax$ est un scalaire, donc égal à sa transposée $x^\top A^\top h$ :
$$g(x+h)-g(x)=x^\top(A+A^\top)h+h^\top Ah .$$
Et $\frac{|h^\top Ah|}{\|h\|}\le\frac{\|A\|\,\|h\|^2}{\|h\|}=\|A\|\,\|h\|\to0$ (exercice). Donc $dg_x=x^\top(A+A^\top)$.

**3.** $\ell=g\circ f$ avec $A=\Sigma^{-1}$. Par la [[T - Règle de la chaîne pour les différentielles|règle de la chaîne]] :
$$d\ell_x=dg_{f(x)}\cdot df_x=(x-\mu)^\top(A+A^\top)\,I_d .$$
$\Sigma^{-1}$ est symétrique, donc $A+A^\top=2\Sigma^{-1}$ :
$$\boxed{d(\ell_{\mu,\Sigma})_x=2\,(x-\mu)^\top\Sigma^{-1}}$$

## À retenir

Annuler cette différentielle (sommée sur les données) est l'étape clé pour trouver le MLE de $\mu$ dans un modèle gaussien (ex. [[M - Analyse Discriminante Linéaire (LDA)|LDA]]) : $\sum_i\Sigma^{-1}(x_i-\mu)=0\Rightarrow\widehat\mu=\bar x$.

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Différentielle de $(x-\mu)^\top\Sigma^{-1}(x-\mu)$ par rapport à $x$ ?::$2(x-\mu)^\top\Sigma^{-1}$ (car $\Sigma^{-1}$ est symétrique).

Astuce pour simplifier $h^\top Ax$ dans le calcul de $d(x^\top Ax)$ ?::C'est un scalaire, donc $h^\top Ax=x^\top A^\top h$.

Pourquoi le terme $h^\top Ah$ est-il négligeable dans $d(x^\top Ax)$ ?::$|h^\top Ah|/\|h\|\le\|A\|\,\|h\|\to0$ : c'est un $o(\|h\|)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Différentielle (calcul matriciel)]]
- [[C - Distance de Mahalanobis]]
- [[T - Règle de la chaîne pour les différentielles]]
