Si $\Theta\subseteq\mathbb R$, la fonction de perte linéaire est donnée par $$L(\theta,a)=
\begin{cases}
\displaystyle k_1(a- \theta) & \text{si } \theta\leq a,\\[6pt]
k_2(\theta-a) & \text{si } \theta>a
\end{cases}$$où $k_1,k_2\in\mathbb R^+$. 

# Proposition
Sous la fonction de perte linéaire l'[[C - Estimateur de Bayes]] $\delta_\pi(x)$ correspond au $\frac{k_2}{k_1+k_2}$ percentile de $\pi(\theta|x)$.

### Démonstration
La [[C - Perte Espérée à postériori]] satisfait $$
\rho(\pi, a\mid x)
= \int_{\Theta} L(\theta,a)\,\pi(\theta\mid x)\,d\theta
= \int_{-\infty}^{a} k_1(a-\theta)\,\pi(\theta\mid x)\,d\theta
+\int_{a}^{\infty} k_2(\theta-a)\,\pi(\theta\mid x)\,d\theta.
$$
Minimisons cette expression par rapport à \(a\) en utilisant la [[T - Règle de Leibniz]] :
$$
\frac{\partial}{\partial a}\rho(\pi,a\mid x)
= k_1(a-a)\pi(a\mid x)+\int_{-\infty}^{a} k_1\pi(\theta\mid x)\,d\theta
- k_2(a-a)\pi(a\mid x)-\int_{a}^{\infty} k_2\pi(\theta\mid x)\,d\theta
=0.
$$
Nous trouvons donc

$$
k_1\,\mathbb{P}(\theta\le a\mid x) - k_2\,\mathbb{P}(\theta>a\mid x)=0
$$

$$
\Rightarrow\quad
k_1\,\mathbb{P}(\theta\le a\mid x) - k_2\{1-\mathbb{P}(\theta\le a\mid x)\}=0
$$

$$
\Rightarrow\quad
\mathbb{P}(\theta\le a\mid x)=\frac{k_2}{k_1+k_2}.
$$
C’est bien un minimum car
$$
\frac{\partial^2}{\partial a^2}\rho(\pi,a\mid x)
=\frac{\partial}{\partial a}\{(k_1+k_2)\mathbb{P}(\theta\le a\mid x)-k_2\}
= (k_1+k_2)\pi(a\mid x)+\int_{-\infty}^{a}\frac{\partial}{\partial a}\pi(\theta\mid x)\,d\theta
= (k_1+k_2)\pi(a\mid x)\ge 0.
$$


