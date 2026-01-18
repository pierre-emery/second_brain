Si x et y sont deux échantillons tels que $\mathcal L_1(\theta|x)$ est proportionnel à $\mathcal L_2(\theta|y)$. C'est-à-dire s'il existe une constante $C(x,y)$ telle que $$\mathcal L_1(\theta|x) = C(x,y)\mathcal L_2(\theta|y) (\text{c-à-d } \mathcal L_1(\theta|x)\propto_\theta\mathcal L_2(\theta|y))$$ pour tout $\theta \in \Theta$ alors les conclusions tirées de x et y devraient être identique.

## Est-ce un principe raisonnable?
Le sujet est controversé chez les statisticiens, il n'est pas universellement accepté.

# Exemple [[D - Bernoulli]] [[D - Binomiale]] [[D - Géométrique]] [[D - Binomiale Négative]]

Considérons deux expériences:
- $X$ est le nombre de succès dans $n$ tirs à pile ou face avec probabilité de succès $\theta$ pour chacun des tirs. $$\implies X_i|\theta \sim Bern(\theta) \implies X = \sum_{i=1}^nX_i\sim Bin(n,\theta)$$
- Y est le nombre de tirs ( indépendants étant donné $\theta$) requis pour obtenir $r$ succès. La probabilité de succès est $\theta$. $$\implies Y_i|\theta \sim Geo(\theta) \implies Y = \sum_{i=1}^rY_i\sim Bin Neg(r,\theta)$$
Il faut comparer les estimateurs à vraisemblance maximale et les estimateurs sans biais pour chacun des expériences.

[[T - Principe de Vraisemblance]]
