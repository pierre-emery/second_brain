Si l'inférence sur $\theta$ est basée sur la [[C - Distribution a postériori]] alors le principe de vraisemblance est satisfait.

### Démonstration
$$\begin{align}
\pi_1(\theta|x)&=\frac{\mathcal L_1(\theta|x)\pi(\theta)}{\int_\Theta\mathcal L_1(\theta|x)\pi(\theta)d\theta}\\
&=\frac{C(x,y)\mathcal L_2(\theta|y)\pi(\theta)}{\int_\Theta C(x,y)\mathcal L_2(\theta|y)\pi(\theta)d\theta}\\
&=\frac{\mathcal L_2(\theta|y)\pi(\theta)}{\int_\Theta \mathcal L_2(\theta|y)\pi(\theta)d\theta} = \pi_2(\theta|y)\\
\end{align}$$