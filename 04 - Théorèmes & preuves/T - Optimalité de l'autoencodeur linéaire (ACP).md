---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Pour la perte quadratique et un **décodeur linéaire**, une paire encodeur/décodeur optimale (au sens de la plus petite erreur de reconstruction d'entraînement) est
$$h(x) = \Sigma_{\le k,\le k}^{-1}\,(U_{\cdot,\le k})^\top x,\qquad \hat x = U_{\cdot,\le k}\,\Sigma_{\le k,\le k}\,h(x),$$
où $X = U\Sigma V^\top$ est la SVD de la matrice des données (une colonne par exemple) et $k$ la taille de la couche cachée. Si les entrées sont centrées et réduites, l'encodeur correspond à l'**ACP**.

## Intuition
Un code de dimension $k$ suivi d'un décodeur linéaire produit une reconstruction $W^*h(X)$ de rang au plus $k$. La meilleure reconstruction de rang $k$ de $X$ est connue ([[T - Théorème d'Eckart-Young]]) : c'est la projection sur les $k$ premières directions singulières, exactement ce que fait l'ACP. Une non-linéarité dans l'encodeur ne peut donc pas faire mieux que l'ACP avec cette perte et ce décodeur.

## Formalisme / Dérivation
**Objectif** (on peut prendre n'importe quel encodeur) :
$$\arg\min_\theta \frac12 \sum_t\sum_k (x_k^{(t)} - \hat x_k^{(t)})^2 \;=\; \arg\min_{W^*,\,h(X)} \frac12 \|X - W^*h(X)\|_F^2.$$
1. $W^*h(X)$ est de rang $\le k$ ; par Eckart-Young, l'optimum est atteint avec $W^* = U_{\cdot,\le k}\Sigma_{\le k,\le k}$ et $h(X) = V_{\cdot,\le k}^\top$.
2. **Montrons que $h(X)$ est un encodeur linéaire** (en supposant $X^\top X$ inversible) :
$$\begin{aligned}
h(X) &= V_{\cdot,\le k}^\top = V_{\cdot,\le k}^\top (X^\top X)^{-1}(X^\top X) &&\text{(multiplier par l'identité)}\\
&= V_{\cdot,\le k}^\top (V\Sigma^\top U^\top U\Sigma V^\top)^{-1}(V\Sigma^\top U^\top X) &&\text{(remplacer par la SVD)}\\
&= V_{\cdot,\le k}^\top (V\Sigma^\top\Sigma V^\top)^{-1} V\Sigma^\top U^\top X &&(U^\top U = I)\\
&= V_{\cdot,\le k}^\top V(\Sigma^\top\Sigma)^{-1}V^\top V\Sigma^\top U^\top X &&((V\Sigma^\top\Sigma V^\top)^{-1} = V(\Sigma^\top\Sigma)^{-1}V^\top)\\
&= I_{\le k,\cdot}\,(\Sigma^\top\Sigma)^{-1}\Sigma^\top U^\top X &&(V^\top V = I)\\
&= I_{\le k,\cdot}\,\Sigma^{-1}(\Sigma^\top)^{-1}\Sigma^\top U^\top X = I_{\le k,\cdot}\,\Sigma^{-1}U^\top X\\
&= \Sigma_{\le k,\le k}^{-1}(U_{\cdot,\le k})^\top X. &&(I_{\le k,\cdot}\text{ garde les } k \text{ premières lignes})
\end{aligned}$$
Donc $h(x) = \Sigma_{\le k,\le k}^{-1}(U_{\cdot,\le k})^\top x$ est **linéaire**.
3. **Lien avec l'ACP** : si on normalise $x^{(t)} \leftarrow \frac{1}{\sqrt T}\big(x^{(t)} - \frac1T\sum_{t'} x^{(t')}\big)$, alors $XX^\top$ est la matrice de covariance empirique ; ses vecteurs propres sont les vecteurs singuliers gauches $U$ et ses valeurs propres les $\sigma_i^2$. L'encodeur projette donc sur les $k$ composantes principales (à une mise à l'échelle par $\Sigma^{-1}$ près).

## Exemple
Données 2D allongées selon la diagonale, $k=1$ : l'autoencodeur linéaire optimal projette chaque point sur la direction principale (la diagonale) puis le replace sur cette droite.

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Énoncé de l'optimalité de l'autoencodeur linéaire ?::Pour la perte quadratique et un décodeur linéaire, $h(x)=\Sigma_{\le k,\le k}^{-1}U_{\cdot,\le k}^\top x$ et $\hat x = U_{\cdot,\le k}\Sigma_{\le k,\le k}h(x)$ sont optimaux ; avec des entrées centrées, c'est l'ACP.

Quel théorème donne $W^*$ et $h(X)$ optimaux, et pourquoi s'applique-t-il ?::Eckart-Young : $W^*h(X)$ est de rang au plus $k$, et la meilleure approximation de rang $k$ de $X$ est la SVD tronquée.

Dérive que $h(X)=V_{\cdot,\le k}^\top$ est un encodeur linéaire
?
On écrit $V_{\cdot,\le k}^\top(X^\top X)^{-1}X^\top X$, on remplace $X$ par sa SVD, on utilise $U^\top U = I$ et $V^\top V = I$ : on obtient $I_{\le k,\cdot}\Sigma^{-1}U^\top X = \Sigma_{\le k,\le k}^{-1}U_{\cdot,\le k}^\top X$.

Quelle normalisation des entrées fait coïncider l'encodeur avec l'ACP ?::$x^{(t)} \leftarrow \frac{1}{\sqrt T}(x^{(t)}-\bar x)$ : $XX^\top$ devient la covariance empirique, dont les vecteurs propres sont les colonnes de $U$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Autoencodeur]]
- [[A - Analyse en composantes principales (PCA)]]
- [[T - Théorème d'Eckart-Young]]
- [[C - Matrice de Variance-Covariance]]
