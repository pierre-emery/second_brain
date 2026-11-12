---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
La meilleure approximation de rang $k$ d'une matrice $A$ en norme de Frobenius s'obtient en tronquant sa décomposition en valeurs singulières (SVD) aux $k$ plus grandes valeurs singulières.

$$A = U\Sigma V^\top \;\Longrightarrow\; B^* = \arg\min_{B:\ \mathrm{rang}(B) = k} \|A - B\|_F = U_{\cdot,\le k}\,\Sigma_{\le k,\le k}\,V_{\cdot,\le k}^\top$$

## Intuition
La SVD écrit $A$ comme une somme de matrices de rang 1, $\sum_i \sigma_i u_i v_i^\top$, classées par importance $\sigma_i$. Garder les $k$ premiers termes conserve le plus d'« énergie » ; l'erreur résiduelle est $\|A - B^*\|_F^2 = \sum_{i>k}\sigma_i^2$.

## Formalisme
- $A = U\Sigma V^\top$ : $\Sigma$ diagonale (valeurs singulières décroissantes), $U$ et $V$ orthonormales (colonnes/lignes).
- $U_{\cdot,\le k}$ : les $k$ premières colonnes de $U$ ; $\Sigma_{\le k,\le k}$ : le bloc $k\times k$ en haut à gauche ; $V_{\cdot,\le k}$ : les $k$ premières colonnes de $V$.

## Exemple
$A = \mathrm{diag}(5, 2, 1)$ : la meilleure approximation de rang 1 est $\mathrm{diag}(5, 0, 0)$, avec une erreur $\sqrt{2^2+1^2} = \sqrt5$.

## IFT6135 — usage
C'est le théorème utilisé (sans preuve) pour démontrer que l'autoencodeur linéaire optimal correspond à l'ACP : [[T - Optimalité de l'autoencodeur linéaire (ACP)]].

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Énoncé du théorème d'Eckart-Young ?::La matrice de rang $k$ la plus proche de $A=U\Sigma V^\top$ en norme de Frobenius est $U_{\cdot,\le k}\Sigma_{\le k,\le k}V_{\cdot,\le k}^\top$ (SVD tronquée).

Erreur de l'approximation de rang $k$ optimale ?::$\|A-B^*\|_F^2 = \sum_{i>k}\sigma_i^2$, la somme des carrés des valeurs singulières écartées.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Algèbre linéaire]]
- [[A - Analyse en composantes principales (PCA)]]
- [[C - Rang d'une matrice]]
- [[C - Norme]]
- [[T - Optimalité de l'autoencodeur linéaire (ACP)]]
