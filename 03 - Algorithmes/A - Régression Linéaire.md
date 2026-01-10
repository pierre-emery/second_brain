## [[C - Complexité d'un modèle (capacité)]] pour régression linéaire
- On peut complexifier un modèle linéaire "de base" en y ajoutant de nouvelles combinaisons de caractéristiques: 
$$\begin{align*}
&\text{Modèle de base: } &&\hat y =\beta_0+\beta_1x_1+\beta_2x_2\\
&\text{Ajout d'interactions: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2\\
&\text{Ajout de non-linéarités: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2+\beta_4x_1^2+\beta_5x^2_2\\
&\text{Ajout de caractéristiques: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3\\

\end{align*}$$
- Les paramètres $\beta$ des modèles linéaires sont faciles à estimer avec la méthodes des [[C - Moindres Carrés Ordinaires (MCO)]] (l'entraînement n'est pas un problème)
- Le nombre d'intéractions posisbles augmente comme $D^2$ ou D est la dimensionnalité de x


## Les métriques qui permettent l'[[MOC - Évaluation & généralisation]]




