Si $f(x|\theta$) admet une [[C - Statistique Exhaustive]], alors la [[C - Distribution a postériori]] de $\theta$ ne dépend de $x$ qu'à traers $T(x)$.

#### Démonstration
Posons $T(x)=t$ alors on a $$\begin{align}
\pi(\theta|x)&=\frac{\mathcal L(\theta|x)\pi(\theta)}{\int_\Theta\mathcal L(\theta|x)\pi(\theta)d\theta}\\
&=\frac{g(t|\theta)h(x)\pi(\theta)}{\int_\Theta g(t|\theta)h(x)\pi(\theta)d\theta}\\
&=\frac{g(t|\theta)\pi(\theta)}{\int_\Theta g(t|\theta)\pi(\theta)d\theta}\\
\end{align}$$