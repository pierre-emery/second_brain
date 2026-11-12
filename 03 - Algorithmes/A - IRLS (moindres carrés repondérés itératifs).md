---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

**IRLS** (*Iteratively Reweighted Least Squares*) = la [[A - Méthode de Newton (optimisation)|méthode de Newton]] appliquée à la log-vraisemblance de la [[M - Régression Logistique (Binaire)|régression logistique]]. Chaque pas de Newton revient à résoudre un problème de **moindres carrés pondérés**, avec des poids qui changent à chaque itération.

## Idée générale / Formalisation

Notation : $X\in\mathbb R^{n\times d}$ (matrice de design, lignes $x_i^\top$), $y\in\{0,1\}^n$, $\mu_i=\sigma(w^\top x_i)$, $D=\mathrm{diag}\big(\mu_i(1-\mu_i)\big)\in\mathbb R^{n\times n}$.

**Gradient et Hessienne** de $\ell(w)=\sum_i y_i\log\sigma(w^\top x_i)+(1-y_i)\log\sigma(-w^\top x_i)$ :
$$\nabla\ell(w)=\sum_i x_i(y_i-\mu_i)=X^\top(y-\mu),\qquad H=-\sum_i x_ix_i^\top\mu_i(1-\mu_i)=-X^\top DX .$$
$v^\top Hv=-\sum_i (v^\top x_i)^2\mu_i(1-\mu_i)\le0$ : $H\preceq0$, **$\ell$ est concave** → Newton maximise bien la log-vraisemblance.

**Pas de Newton** :
$$\begin{aligned}w_{t+1}&=w_t-(-X^\top D_tX)^{-1}X^\top(y-\mu_t)\\&=(X^\top D_tX)^{-1}\big[X^\top D_tXw_t+X^\top(y-\mu_t)\big]\\&=(X^\top D_tX)^{-1}X^\top D_t\,z_t,\qquad z_t\triangleq Xw_t+D_t^{-1}(y-\mu_t).\end{aligned}$$

**Lecture « moindres carrés pondérés »** : avec $\widehat X=D_t^{1/2}X$ et $\widehat y=D_t^{1/2}z_t$, $w_{t+1}=(\widehat X^\top\widehat X)^{-1}\widehat X^\top\widehat y$, i.e.
$$w_{t+1}=\arg\min_w\ \big\|D_t^{1/2}(z_t-Xw)\big\|^2=\arg\min_w\sum_{i=1}^n\frac{\big((z_t)_i-x_i^\top w\big)^2}{D_{ii}^{-1}} .$$
Forme $\frac{(y_i-x_i^\top w)^2}{\sigma_i^2}$ d'un modèle à bruit gaussien : $D_{ii}^{-1}$ joue le rôle d'un **bruit dépendant des données** (hétéroscédastique), $z_t$ d'une cible « linéarisée ».

## Algorithme (étapes)

1. Initialiser $w_0$.
2. Calculer $\mu_t=\sigma(Xw_t)$, $D_t$, $z_t$.
3. Résoudre les moindres carrés pondérés : $w_{t+1}=(X^\top D_tX)^{-1}X^\top D_tz_t$.
4. Répéter jusqu'à convergence.

## Complexité

- Par itération : $O(nd^2+d^3)$ (former $X^\top DX$ et le résoudre) ; mémoire $O(d^2)$.
- Peu d'itérations (convergence quadratique de Newton), mais impraticable quand $d$ est grand → méthodes de premier ordre ([[A - Descente de Gradient Stochastique (SGD)|SGD]], [[A - SAG et SAGA|SAGA]]).

## Avantages / Limites

**Avantages** : très peu d'itérations ; invariance affine de Newton ; chaque pas est un problème de moindres carrés standard.

**Limites** : coût cubique en $d$ ; si les données sont linéairement séparables, le MLE n'existe pas ($\|w\|\to\infty$) et $D_{ii}\to0$.

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Qu'est-ce qu'IRLS ?::La méthode de Newton appliquée à la régression logistique : chaque pas résout des moindres carrés pondérés.

Gradient et Hessienne de la log-vraisemblance logistique (forme matricielle) ?::$\nabla\ell=X^\top(y-\mu)$, $H=-X^\top DX$ avec $D=\mathrm{diag}(\mu_i(1-\mu_i))$.

Pourquoi la log-vraisemblance logistique est-elle concave ?::$v^\top Hv=-\sum_i(v^\top x_i)^2\mu_i(1-\mu_i)\le0$ pour tout $v$.

Mise à jour IRLS ?::$w_{t+1}=(X^\top D_tX)^{-1}X^\top D_tz_t$ avec $z_t=Xw_t+D_t^{-1}(y-\mu_t)$.

Quelle interprétation pour $D_{ii}^{-1}$ dans IRLS ?::Une variance de bruit dépendante des données dans un problème de moindres carrés pondérés.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[M - Régression Logistique (Binaire)]]
- [[A - Méthode de Newton (optimisation)]]
- [[M - Régression Linéaire]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
