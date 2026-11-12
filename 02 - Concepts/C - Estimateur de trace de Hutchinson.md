---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Estimateur **sans biais** de la [[C - Trace d'une matrice|trace]] d'une matrice $A$ qui n'utilise que des produits matrice-vecteur :
$$\mathrm{tr}(A) = \mathbb E_v\big[v^\top A v\big],\qquad \mathbb E[v] = 0,\ \ \mathrm{Cov}(v) = I.$$

## Intuition
On ne peut pas toujours former $A$ (un jacobien $m\times m$ en grande dimension), mais on sait calculer $Av$ ou $v^\top A$ efficacement (par différentiation automatique). En moyenne sur des vecteurs aléatoires isotropes, $v^\top A v$ ne retient que la diagonale.

## Formalisme / Dérivation
$$\mathbb E[v^\top A v] = \mathbb E\Big[\sum_{i,j} v_i A_{ij} v_j\Big] = \sum_{i,j} A_{ij}\,\mathbb E[v_i v_j] = \sum_{i,j} A_{ij}\,\delta_{ij} = \mathrm{tr}(A),$$
puisque $\mathbb E[v_iv_j] = \mathrm{Cov}(v)_{ij} = \delta_{ij}$ quand $\mathbb E[v]=0$. On utilise souvent $v\sim\mathcal N(0,I)$ ou des composantes de Rademacher ($\pm1$).

## Exemple
$A = \mathrm{diag}(2, 3)$, $v\in\{\pm1\}^2$ : $v^\top A v = 2v_1^2 + 3v_2^2 = 5 = \mathrm{tr}(A)$ pour tout $v$.

## IFT6135 — usage
Dans les [[M - ResNet inversible (i-ResNet)|flots résiduels]], il estime chaque $\mathrm{tr}(J_g^k)$ de la série du log-déterminant, avec des produits vecteur-jacobien.

## Flashcards
#flashcards/IFT6135/10-generatifs

Estimateur de trace de Hutchinson ?::$\mathrm{tr}(A)=\mathbb E_v[v^\top Av]$ avec $\mathbb E[v]=0$ et $\mathrm{Cov}(v)=I$.

Montre que l'estimateur de Hutchinson est sans biais
?
$\mathbb E[v^\top Av]=\sum_{i,j}A_{ij}\mathbb E[v_iv_j]=\sum_{i,j}A_{ij}\delta_{ij}=\mathrm{tr}(A)$.

Pourquoi est-il utile pour les flots ?::Il n'exige que des produits vecteur-jacobien : on estime $\mathrm{tr}(J^k)$ sans jamais construire le jacobien.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Algèbre linéaire]]
- [[C - Trace d'une matrice]]
- [[C - Estimation Monte Carlo]]
- [[M - ResNet inversible (i-ResNet)]]
