---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
## Quelle serait la meilleure projection?

- Trouvez un sous-espace $S\subseteq \mathbb R^n$ t.q. $\dim(S)=k$ et les données sont bien approximées par $\hat x = \text{proj}_S x$
- $\implies$ Trouvez un sous-espace $S\subseteq \mathbb R^n$ t.q. $S = \text{span}{u_1,...,u_k}$ et $||x-\hat x||$ sont minimales pour les points de données $x$ où $\hat x = \text{proj}_S x$
- $\implies$ trouvez $k$ vecteurs $u_1,...,u_k$ t.q. $N^{-1}\sum_{i=1}^N||x_i-\hat x_i||^2$ est minimale avec $\hat x = \text{proj}_{\text{span}{u_1,...,u_k}}x$.

#### Comment trouver ces vecteurs $u_1,...,u_k$?

En supposant les données centrées ($\mathbb{E}[\mathbf{x}]=\mathbf{0}$, sinon on centre en soustrayant la moyenne en prétraitement), la solution passe par les [[C - Valeurs et Vecteurs propres|valeurs propres]] de la matrice de covariance échantillonnale non biaisée $\text{Var}[\mathbf{x}] = \frac{1}{m-1}\mathbf{X}^\top\mathbf{X}$ : les vecteurs $u_1,\ldots,u_k$ optimaux sont les vecteurs propres de $\mathbf{X}^\top\mathbf{X}$ associés aux $k$ plus grandes valeurs propres.

## Dérivation alternative par SVD

Les composantes principales peuvent aussi être obtenues via la [[C - Valeurs et Vecteurs propres|décomposition en valeurs singulières]] (SVD) : ce sont les **vecteurs singuliers droits** de $\mathbf{X}$. Si $\mathbf{X}=\mathbf{U}\boldsymbol\Sigma\mathbf{W}^\top$ est la SVD de $\mathbf{X}$, alors :

$$\mathbf{X}^\top\mathbf{X} = (\mathbf{U}\boldsymbol\Sigma\mathbf{W}^\top)^\top\mathbf{U}\boldsymbol\Sigma\mathbf{W}^\top = \mathbf{W}\boldsymbol\Sigma^2\mathbf{W}^\top$$

ce qui retrouve l'équation de vecteurs propres habituelle avec $\mathbf{W}$ comme base de vecteurs propres.

## L'ACP donne une covariance diagonale

L'ACP apprend une représentation $\mathbf{z}=\mathbf{W}^\top\mathbf{x}$ telle que $\text{Var}[\mathbf{z}]$ est **diagonale**. En utilisant la SVD de $\mathbf{X}$ :

$$\text{Var}[\mathbf{x}] = \frac{1}{m-1}\mathbf{X}^\top\mathbf{X} = \frac{1}{m-1}\mathbf{W}\boldsymbol\Sigma^2\mathbf{W}^\top$$

Puisque $\mathbf{U}^\top\mathbf{U}=\mathbf{I}$ (par définition de la SVD, $\mathbf{U}$ est orthogonale), on peut montrer que la covariance de $\mathbf{z}$ est bien diagonale :

$$\text{Var}[\mathbf{z}] = \frac{1}{m-1}\mathbf{Z}^\top\mathbf{Z} = \frac{1}{m-1}\mathbf{W}^\top\mathbf{X}^\top\mathbf{X}\mathbf{W} = \frac{1}{m-1}\boldsymbol\Sigma^2$$

en utilisant cette fois $\mathbf{W}^\top\mathbf{W}=\mathbf{I}$.

## Interprétation : démêler les facteurs de variation

Cette capacité de l'ACP à transformer les données vers une représentation dont les éléments sont mutuellement **non corrélés** est une propriété importante : c'est un exemple simple de représentation qui tente de démêler les facteurs de variation sous-jacents inconnus dans les données. Ici, ce démêlage prend la forme d'une **rotation** de l'espace d'entrée (décrite par $\mathbf{W}$) qui aligne les axes principaux de variance avec la base du nouvel espace de représentation.

**Limite** : la corrélation n'est qu'une forme de dépendance parmi d'autres. D'autres méthodes sont nécessaires pour démêler des formes de dépendance plus complexes qu'une simple transformation linéaire ne peut capturer.

## Liens connexes

- [[MOC - Non-supervisé & réduction de dimension]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Matrice de Variance-Covariance]]
- [[C - Projection Orthogonale]]
- [[C - Hypothèse de Variété (Manifold Hypothesis)]]
- [[C - Corrélation]]