Ce résultat est utile dans le cadre bayésien et fréquentiste [[C - Statistique fréquentiste]].
# Théorème
Supposons que $\mathcal A$ est convexe et que $\forall \theta \in \Theta, L(\theta, a)$ est une fonction convexe en $a$. Supposons que $\delta^∗$ est un estimateur aléatoire et soit $B = \Big\{ x : \int_A |a|\delta^∗ (x, a)da < \infty \Big\}$ . Alors si $\delta(x) =\int_A a\delta^∗ (x, a)da$, nous avons $L(\theta, \delta(x)) \leq L(\theta, \delta^∗ (x)), \forall x \in B$ .

## Démonstration 
Les hypothèses de convexité nous permettent d'invoquer l'inégalité de Jensen.