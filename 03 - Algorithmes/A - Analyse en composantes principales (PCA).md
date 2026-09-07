## Quelle serait la meilleure projection?
- Trouvez un sous-espace $S\subseteq \mathbb R^n$ t.q. $\dim(S)=k$ et les données sont bien approximées par $\hat x = \text{proj}_S x$
- $\implies$ Trouvez un sous-espace $S\subseteq \mathbb R^n$ t.q. $S = \text{span}\{u_1,...,u_k\}$ et $||x-\hat x||$ sont minimales pour les points de données $x$ où $\hat x = \text{proj}_S x$ 
- $\implies$ trouvez $k$ vecteurs $u_1,...,u_k$ t.q. $N^{-1}\sum_{i=1}^N||x_i-\hat x_i||^2$ est minimale avec $\hat x = \text{proj}_{\text{span}\{u_1,...,u_k\}}x$.
#### Comment trouver ces vecteurs $u_1,...,u_k$?
Minimisez