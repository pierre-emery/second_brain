Soit $X\subseteq\mathbb R^d$ un ensemble de données fini de taille $|X|=n$. Pour tout $0<\varepsilon<1$ et$k>8\frac{\ln(n)}{\varepsilon^2}$ arbitraires, il existe un plongement linéaire f de $X$ dans $\mathbb R^k$ tel que $(1-\varepsilon)\leq\frac{||f(x)-f(y)||^2}{||x-y||^2}\leq(1+\varepsilon)$.

# Version alternative Lemme JL distributionnel
Étant données des $0<\varepsilon$, $\delta<\frac 12$ et $k>\frac{C}{\varepsilon^2}\ln(\frac 1 \delta)$ arbitraires où $C$ est une constante, soit $R$ une matrice $k\times d$ t.q. $R_{ij}\sim^{i.i.d.}\mathcal N(0,1)$. Alors, pour $A=\frac{1}{\sqrt k}R$ et pour tout $x\in\mathbb R^d$ unitaire, $Pr[||Ax||^2-1\leq\varepsilon]\geq(1-\delta)$.

