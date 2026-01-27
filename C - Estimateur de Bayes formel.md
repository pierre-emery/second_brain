Si $\delta_0$ est tel que $p(\pi,\delta_0(x)|x)<p(\pi,\delta(x)|x)$ pour tout $x$ et toute règle de décision $\delta$ alors $\delta_0$ est appelé un estimateur de Bayes formel.

### Notes
- $\delta_0$ est la meilleure décision pour chaque x;
- Le fait que $\delta_0$ soit ou non un estimateur de Bayes formel dépend de la [[C - Distribution a priori]] utilisée.
Parfois il n'existe pas d'estimateur de Bayes formel. Étant donné l'échantillon x, il se pourrait que :
- $p(\pi,\delta(x)|x)=\infty$ pour tout $\delta$;
- aucun $\delta$ n'atteigne le minimum de $p(\pi,\delta(x)|x)<\infty$ parce que l'espace décisionnel est ouvert ($\mathcal A=(0,1)$).
