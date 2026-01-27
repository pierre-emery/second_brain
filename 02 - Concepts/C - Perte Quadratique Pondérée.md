Si $\Theta\subseteq \mathbb R$ elle est donnée par $L(\theta,a)=w(\theta)(\theta-a)^2$ où $w:\Theta\rightarrow\mathbb R^+$ 
alors $\delta_\pi(x)=\frac{\mathbb E[w(\theta)\theta\mid x]}{\mathbb E[w(\theta)\mid x]}=\frac{\int_\Theta w(\theta)\theta\mathcal L(\theta\mid x)\pi(\theta)d\theta}{\int_\Theta w(\theta)\mathcal L(\theta\mid x)\pi(\theta)d\theta}$ 

### Démonstration
La [[C - Perte Espérée à postériori]] satisfait $p(\pi,a|x)=\mathbb E_{\theta|x}[L(\theta,a)]=\mathbb E[w(\theta)(\theta-a)^2|x]$ 
Par conséquent, $$\begin{align*}
p(\pi,a|x)&=\int_\Theta w(\theta)(\theta^2-2a\theta+a^2)\pi(\theta|x)d\theta\\
&=\mathbb E[w(\theta)\theta^2|x]-2a\mathbb E[w(\theta)\theta|x]+a^2\mathbb E[w(\theta)|x]
\end{align*}$$
Trouvons la décision $a$ qui minimise $\rho(\pi, a \mid x)$ :

$$
\frac{\partial}{\partial a}\rho(\pi, a \mid x)
= -2\,\mathbb{E}[\omega(\theta)\theta \mid x]
+ 2a\,\mathbb{E}[\omega(\theta)\mid x]
= 0
$$

implique que

$$
a = \frac{\mathbb{E}[\omega(\theta)\theta \mid x]}{\mathbb{E}[\omega(\theta)\mid x]}.
$$

De plus, c’est bien un minimum car

$$
\frac{\partial^2}{\partial a^2}\rho(\pi, a \mid x)
= 2\,\mathbb{E}[\omega(\theta)\mid x] \ge 0.
$$




