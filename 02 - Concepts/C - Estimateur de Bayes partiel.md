C'est une règle de décision qui minimise la [[C - Perte Espérée à postériori]] pour tout x où un minimum peut être atteint.
C'est donc $$
\delta_{\pi}(x)=
\begin{cases}
\displaystyle \arg\min_{a\in A}\,\rho(\pi,a\mid x), & \text{si } x\in \mathcal M,\\[6pt]
\text{n’importe quoi}, & \text{sinon.}
\end{cases}
$$
Notons que si $\mathcal M =  \mathcal X$ alors l'estimateur de Bayes associé à la densité à priori $\pi$ est un [[C - Estimateur de Bayes formel]]
## Notes: 
- Il est beaucoup plus facile de minimiser $p(\pi,a|x)$ que $r(\pi,\delta)$ car nous minimisons par rapport à une variable et non par rapport à une fonction.
- Si l'[[C - Estimateur de Bayes]] associé à $\pi$ n'existe pas, il peut tout de même être possible d'identifier un estimateur de Bayes partiel en tentant de minimiser $p(\pi,\delta|x)$ pour $x\in\mathcal M$.