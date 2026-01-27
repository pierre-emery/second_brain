# Définition en Science des données
$$l_{01}(y_i,f(x_i)) = \begin{cases}
0 & \text{si } y_i = f(x_i),\\
1 & \text{si } y_i \neq f(x_i).
\end{cases}  $$
# Définition en Statistiques Bayésiennes
Posons $\Theta=\Theta_0\cup\Theta_1,\Theta_0\cap\Theta_1=\emptyset$ et $\mathcal A=\{0,1\}$
Dans un contexte de test d'hypothèse, 0 correspond à rejeter $H_0:\theta\in\Theta_0$, et 1 correspond à rejeter $H_1:\theta\in\Theta_1$.

La fonction de perte 0-1 est donnée par

$$
L(\theta,a)=
\begin{cases}
0, & \text{si } a=1 \text{ et } \theta\in\Theta_0 \ \text{ou si } a=0 \text{ et } \theta\in\Theta_1,\\
1, & \text{si } a=0 \text{ et } \theta\in\Theta_0 \ (\text{erreur de type I}),\\
1, & \text{ou si } a=1 \text{ et } \theta\in\Theta_1 \ (\text{erreur de type II}).
\end{cases}
$$

L’[[C - Estimateur de Bayes]] associé à cette fonction de perte est conceptuellement simple.

## Proposition
Sous la perte 0-1, nous avons

$$
\delta_\pi(x)=
\begin{cases}
0, & \text{si } \Pr(\theta\in\Theta_0\mid x)<\tfrac12,\\
1, & \text{si } \Pr(\theta\in\Theta_0\mid x)>\tfrac12.
\end{cases}
$$

### Démonstration
La [[C - Perte Espérée à postériori]] n’étant pas continue en \(a\), nous ne pouvons pas la dériver par rapport à \(a\).
Calculons plutôt $\rho(\pi,a=0\mid x)$ et $\rho(\pi,a=1\mid x)$.

$$
\rho(\pi,a=1\mid x)=\mathbb{E}[L(\theta,1)\mid x]
=\int_\Theta L(\theta,1)\pi(\theta\mid x)\,d\theta
$$

$$
=\int_{\Theta_0} L(\theta,1)\pi(\theta\mid x)\,d\theta
+\int_{\Theta_1} L(\theta,1)\pi(\theta\mid x)\,d\theta
$$

$$
=\int_{\Theta_0} 0\cdot \pi(\theta\mid x)\,d\theta
+\int_{\Theta_1} 1\cdot \pi(\theta\mid x)\,d\theta
=\Pr(\theta\in\Theta_1\mid x).
$$

De façon similaire,

$$
\rho(\pi,a=0\mid x)=\Pr(\theta\in\Theta_0\mid x).
$$

#### Quand choisit-on \(a=0\)?
Lorsque $\rho(\pi,a=0\mid x) < \rho(\pi,a=1\mid x)$, c’est-à-dire

$$
\Pr(\theta\in\Theta_0\mid x) < 1-\Pr(\theta\in\Theta_0\mid x)
\quad\Rightarrow\quad
\Pr(\theta\in\Theta_0\mid x) < \tfrac12.
$$

Par conséquent, on choisit

$$
\begin{cases}
a=0, & \text{lorsque } \Pr(\theta\in\Theta_0\mid x)<\tfrac12,\\
a=1, & \text{lorsque } \Pr(\theta\in\Theta_0\mid x)>\tfrac12.
\end{cases}
$$


# Note 
La perte 0-1 n'est pas appropriée pour un espace décisionnel continu. Supposons par exemple qu'on cherche à estimer $\theta\in\Theta$, où $\Theta$ est continu. On a alors $\mathcal A=\Theta$ et $\rho(\pi,a|x)=\mathbb E[L(\theta,a)|x]=\int_{\Theta/\{a\}}\pi(\theta|x)d\theta=1$ 

Maintenant, supposons qu'on souhaite estimer $\theta\in\Theta$ où $\Theta$ est discret.
Alors $\mathcal A =\Theta$ et la perte 0-1 peut être utilisé. La [[C - Perte Espérée à postériori]] satisfait $$
\rho(\pi, a\mid x)=\mathbb{E}[L(\theta,a)\mid x]
=\sum_{\theta\in\Theta} L(\theta,a)\,\pi(\theta\mid x).
$$

Si $a=\theta_0\in\Theta$, alors $L(\theta_0,a)=0$ et $L(\theta,a)=1$ pour tout $\theta\neq \theta_0$, $\theta\in\Theta$. Ainsi,

$$\begin{align*}
\rho(\pi,\theta_0\mid x)
&=\sum_{\theta\in\Theta\setminus\{\theta_0\}} L(\theta,\theta_0)\,\pi(\theta\mid x)
+ L(\theta_0,\theta_0)\,\pi(\theta_0\mid x)\\
&=\sum_{\theta\in\Theta\setminus\{\theta_0\}} 1\cdot \pi(\theta\mid x)\\
&= 1-\pi(\theta_0\mid x).
\end{align*}$$

Pour minimiser $\rho(\pi,a\mid x)$, il faut alors maximiser $\pi(a\mid x)$.
La meilleure décision est donc de poser $\delta_\pi(x)=\operatorname{mode}\big(\pi(\theta\mid x)\big)$.