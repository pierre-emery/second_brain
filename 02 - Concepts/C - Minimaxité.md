- Le [[C - Risque Minimax]] associé à une [[C - Fonction de perte]] L est $$\bar R=\inf_{\delta^*\in\mathcal D^*}\sup_{\theta\in\Theta}R(\theta,\delta^*).$$
- Un [[C - Estimateur Minimax]] nous protège contre le pire scénario possible.
- Les estimateurs minimax n'existent pas toujours. Cependant certaines conditions garantissent leur existence [[T - Conditions Minimax]] 
- Il est généralement difficile d'identifier les estimateurs minimax.
- [[C - Maximin]] 

## Proposition 
Si $\delta_0$ est un [[C - Estimateur de Bayes]] par rapport à $\pi_0$ et si $R(\theta,\delta_0)\leq r(\pi_0),\forall\theta$ dans le support de $\pi_0$ alors $\delta_0$ est un [[C - Estimateur Minimax]] et $\pi_0$ est la [[C - Distribution à priori]] la moins favorable.

### Démonstration
$\bar R\leq \sup_\theta R(\theta,\delta_0)\leq r(\pi_0,\delta_{0}) =\inf_{\delta}r(\pi_0,\delta)\leq \underline R\leq\bar R$ ce sont donc toutes des égalités.

## Autre proposition
Supposons qu'il existe une suite de densités à priori propres $\{\pi_n\}_{n\geq1}$ sur $\Theta$ et que $\delta_n$ est un estimateur de Bayes par rapport à $\pi_n,n\geq1$. S'il existe une règle de décision $\delta_0$ telle que $$R(\theta,\delta_0)\leq\lim_{n\rightarrow\infty}r(\pi_n)<\infty,\forall\theta\in\Theta$$ alors $\delta_0$ est minimax.
 