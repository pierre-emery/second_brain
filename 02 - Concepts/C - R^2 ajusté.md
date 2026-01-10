Le problème avec le [[C - R^2 (coefficient de détermination)]] est qu'il tend à surévaluer la qualité de la régression linéaire. 
Le $R^2$ ajusté pénalise alors avec l'ajout de caractéristiques x supplémentaires qui n'améliorent pas un modèle donc on a $$\begin{align*}
R^2&=1-\frac{SSE}{SST}\\
R^2_{ajusté}&=1-\frac{N-1}{N-p}\frac{SSE}{SST}
\end{align*}$$
et on a donc que $R^2_{ajusté}\leq R^2$ et N: Nombre de données et p: Nombre de paramètres d'un modèle 