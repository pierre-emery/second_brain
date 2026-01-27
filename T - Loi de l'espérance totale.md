Il existe un lien entre minimiser $r(\pi,\delta)$ par rapport à $\delta$ (règle de décision) et minimiser $p(\pi,a|x)$ par rapport à $a=\delta(x)$(action)

$$\begin{align*}
r(\pi,\delta)&=\mathbb E_X[p(\pi,\delta(X)|X)]\\
&=\int_Xp(\pi,\delta(x)|x)m(x)dx
\end{align*}$$
Donc minimiser $r(\pi,\delta)$ est équivalent à minimiser $p(\pi,\delta(x)|x),\forall x \in \mathcal M$ où $\mathcal M$ est l'ensemble des x pour lesquels une [[C - Perte Espérée à postériori]] minimale est atteignable et $\mathbb P(X\in\mathcal M)=1$.