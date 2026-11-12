---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

[[M - Régression Linéaire|Régression linéaire]] + pénalité $\frac\lambda2\|w\|^2$. Deux lectures équivalentes :
1. moindres carrés (ERM) + [[C - Régularisation L2 (Weight Decay)|régularisation L2]] ;
2. remplacer le [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] de $w$ par un [[C - Estimation Maximum a Posteriori (MAP)|MAP]] avec un a priori gaussien.

## Formalisation (vue MAP)

Modèle $y\mid x,w\sim\mathcal N(w^\top x,\sigma^2)$ et a priori $p(w)=\mathcal N(w\mid 0,\ I/\lambda)$ :
$$\log p(w\mid y,X)=\log p(y_{1:n}\mid x_{1:n};w)+\log p(w)+\text{cst}=\log p(y_{1:n}\mid x_{1:n};w)-\frac\lambda2\|w\|^2+\text{cst}$$
(avec $\sigma^2=1$, ou en absorbant $\sigma^2$ dans $\lambda$). En annulant le gradient :
$$(X^\top X+\lambda I)\,w=X^\top y\quad\Longrightarrow\quad \boxed{\widehat w_{\text{MAP}}=(X^\top X+\lambda I)^{-1}X^\top y}$$

## Propriétés

- $X^\top X+\lambda I$ est **toujours inversible** pour $\lambda>0$ (valeurs propres $\ge\lambda$) : règle le problème $n<d$ de la régression linéaire sans passer par la pseudo-inverse instable.
- $-\log p(w\mid y,X)$ est **fortement convexe** en $w$ → unique minimum global.
- **Bonne pratique** : standardiser (moyenne empirique 0, écart-type 1) ou normaliser (ex. $[0,1]$ ou norme unité) les caractéristiques, sinon la pénalité traite inégalement des variables à des échelles différentes.

## Complexité

- Entraînement : $O(nd^2+d^3)$ (former $X^\top X$ puis résoudre).
- Inférence : $O(d)$ par prédiction.

## Hyperparamètres

$\lambda$ (force de la régularisation = précision de l'a priori).

## Flashcards

#flashcards/IFT6269/07-regression-lineaire

Solution fermée de la régression ridge ?::$\widehat w=(X^\top X+\lambda I)^{-1}X^\top y$.

Ridge comme estimateur MAP : quel a priori ?::$p(w)=\mathcal N(0,I/\lambda)$, gaussien centré, combiné à la vraisemblance gaussienne.

Pourquoi $X^\top X+\lambda I$ est-elle toujours inversible ?::$X^\top X\succeq0$, donc toutes les valeurs propres de $X^\top X+\lambda I$ sont $\ge\lambda>0$.

Pourquoi standardiser les caractéristiques avant ridge ?::La pénalité $\|w\|^2$ dépend de l'échelle des variables ; sans standardisation, elle pénalise inégalement les poids.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Régression Linéaire]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
- [[C - Optimisation Convexe]]
