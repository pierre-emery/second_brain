C'est une valeur entre 0 et 1 qui indique la relation linéaire entre deux attributs. 
La formule que nous utilisons est celle de la corrélation de Pearson : $$corr(x,y)=\frac{cov(x,y)}{s_xs_y}$$
$$\begin{align*}
corr(x,y)&=s^{-1}_xs^{-1}_y \frac 1 n \sum_{i=1}^n(x_i-\bar x)(y_i-\bar y)\\
&=\frac 1 n \sum_{i=1}^n\Big(\frac{x_i-\bar x}{s_x}\Big)\Big(\frac{y_i-\bar y}{s_y}\Big)
\end{align*}$$
La corrélation de Pearson est la [[C - Covariance]] ou le [[C - Produit Scalaire]] entre les attributs normalisés.

## Remarques
- Indépendant des magnitudes / écartements
- corr(x,x)=1
- utilisent les formules de [[C - Variance]] et [[C - Covariance]]