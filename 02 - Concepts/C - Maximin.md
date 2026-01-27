Puisque les [[C - Estimateur Minimax]] sont conçus pour faire face au pire scénario possible, nous pourrions considérer des distributions à priori qui attribuent, à la pire valeur de $\theta$ une masse/densité importante.
Et peut-être que l'[[C - Estimateur de Bayes]] serait un estimateur minimax dans ce cas.

- Une [[C - Distribution à priori]] $\pi_0$ pour $\theta$ est désignée comme étant moins favorable si $$\inf_\delta r(\pi,\delta)=\sup_\pi\inf_\delta r(\pi,\delta).$$
- On a le [[C - Risque Maximin]] : $\underline R=r(\pi_0,\delta^{\pi_0})$   