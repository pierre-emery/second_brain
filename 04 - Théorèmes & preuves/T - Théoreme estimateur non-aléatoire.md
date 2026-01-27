S'il existe un [[C - Estimateur de Bayes]] minimsant le [[C - Risque intégré]] alors il existe un estimateur de Bayes non-aléatoire

## Démonstration
Nous voulons montrer que $$\inf_{\delta\in\mathcal D}r(\pi,\delta)=\inf_{\delta^{*}\in D^{*}} r(\pi,\delta^{*}),
\qquad \forall\,\pi \text{ sur } \Theta.$$
1. Comme $D\subset D^*$, on a automatiquement $$\inf_{\delta^*\in D^*} r(\pi,\delta^*) \le \inf_{\delta\in D} r(\pi,\delta)$$
2. Pour l’autre sens, prends une règle aléatoire $\delta^∗$. Conditionne sur $X=x$ :$$
r(\pi,\delta^*)=\mathbb E_X\Big[\int_A \rho(\pi,a\mid X)\,\delta^*(X,a)\,da\Big].$$
3. Pour chaque $x$, une moyenne pondérée est ≥ au minimum :
$$\int_A \rho(\pi,a\mid x)\,\delta^*(x,a)\,da \ \ge\ \inf_{a\in A}\rho(\pi,a\mid x)$.$$
4. Donc $$r(\pi,\delta^*) \ge \mathbb E_X\big[\inf_{a\in A}\rho(\pi,a\mid X)\big]$$
5. En choisissant une règle non-aléatoire $\delta_\pi(x)\in\arg\min_{a\in A}\rho(\pi,a\mid x)$ (quand l’argmin existe), on atteint cette borne.  
### Conclusion :
les infimums sont égaux, donc un [[C - Estimateur de Bayes]] peut être pris non-aléatoire.

Voici un résultat nous permettant de trouver une règle non-aléatoire qui soit meilleure qu'une règle aléatoire [[T - Dé-randomisation (perte convexe)]]