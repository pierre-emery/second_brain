## Exemple ([[D - Bernoulli]])
Considérons $X_i|\theta \sim$ Bernouilli($\theta),i=1,...,n$ des variables aléatoires conditonnellement i.i.d. sachant $\theta$. Supposons que $\theta \sim Beta(\alpha,\beta)$. ([[D - Beta]])

Quelle est la densité à postériori $\pi(\theta|x_1,...,x_n)$?
#### Solution:
- On observe $x=(x_1,\dots,x_n)$ et on pose $s=\sum_{i=1}^n x_i$.
- On trouve donc la [[C - Vraisemblance]] : $L(\theta\mid x) =\prod_{i=1}^n \theta^{x_i}(1-\theta)^{1-x_i}=\theta^{s}(1-\theta)^{n-s}$
- On peut maintenant trouver la distribution à postériori
$$
\pi(\theta\mid x)\propto L(\theta\mid x)\,\pi(\theta)
\propto \theta^{s}(1-\theta)^{n-s}\,\theta^{\alpha-1}(1-\theta)^{\beta-1}
=\theta^{\alpha+s-1}(1-\theta)^{\beta+n-s-1}.$$$$
\boxed{\;\theta\mid x \sim \mathrm{Beta}(\alpha+s,\;\beta+n-s)\;}
$$

#### Truc:
$\pi(\theta|x)$ est une densité. L'intégrale $m(x)=\int_\Theta \mathcal L(\theta|x)\pi(\theta)d\theta$ au dénominateur ne dépend pas de \theta et ne sert donc qu'à normaliser la densité à postériori de sorte à avoir $\int_\Theta \pi(\theta|x)d\theta =1$. 
Avec une bonne connaissanec des distributions il est donc possible de déduire la distribution la postériori à partir du terme $\mathcal L(\theta|x)\pi(\theta)$ et même si on veut, déterminer la constante de normalisation.

## Exemple ([[D - Exponentielle]])
Supposons que les variables aléatoires $X_i \sim Exp(\theta)$ pour  $i = 1,...,n$ sont conditionnellement indépendantes étant donné $\theta$.
De plus supposons que $\theta \sim \Gamma(\alpha,\lambda)$. ([[D - Gamma]])

Quelle est la densité à postériori de $\theta|x_1,...,x_n$?

#### Solution:
Puisque $X_i\mid\theta \sim \mathrm{Exp}(\theta)$, i.i.d. conditionnellement à $\theta$, avec densité
$$
f(x\mid\theta)=\theta e^{-\theta x},\quad x\ge 0.
$$
et la [[C - Distribution à priori]] $\theta\sim\Gamma(\alpha,\lambda)$ (paramétrisation « taux »), on a
$\pi(\theta)\propto \theta^{\alpha-1}e^{-\lambda\theta},\quad \theta>0$.
On observe $(x=(x_1,\dots,x_n)$ et on pose $S=\sum_{i=1}^n x_i$.
On trouve donc la [[C - Vraisemblance]]$L(\theta\mid x)=\prod_{i=1}^n \theta e^{-\theta x_i}=\theta^{n}e^{-\theta S}$.
On peut maintenant trouver la distribution a posteriori :
$$
\pi(\theta\mid x)\propto L(\theta\mid x)\,\pi(\theta)
\propto \theta^{n}e^{-\theta S}\,\theta^{\alpha-1}e^{-\lambda\theta}
=\theta^{\alpha+n-1}e^{-(\lambda+S)\theta}.
$$
$$
\boxed{\;\theta\mid x \sim \Gamma(\alpha+n,\;\lambda+S)\;}
$$
## Exemple 3 — Cas discret : calculs de posterior

Supposons que  $\mathcal X \in\{0,1,2\}$ et que $\Theta\in\{1,2,3\}$. Le  modèle échantionnal possède les masses de probabilités suiavntes: 

| $\mathbb P(X=x\mid\theta=1)$ | $\theta=1$ | $\theta=2$ | $\theta=3$ |
| ---------------------------: | ---------: | ---------: | ---------: |
|                        $x=0$ |        0.5 |        0.1 |          0 |
|                        $x=1$ |       0.25 |        0.3 |        0.8 |
|                        $x=2$ |       0.25 |        0.6 |        0.2 |

La [[C - Distribution à priori]] de $\theta$ satisfait $$
\pi(\theta)=
\begin{cases}
0.2 & \text{si }\theta=1,\\
0.3 & \text{si }\theta=2,\\
0.5 & \text{si }\theta=3.
\end{cases}
$$
Calculer $\pi(\theta|x=0)$ et $\mathbb P(\theta=2|x_1=2,x_2=0)$ :
#### Solution
On a du [[T - Théorème de Bayes]] pour un cas discret:
$$
\pi(\theta\mid x)=\frac{P(x\mid\theta)\pi(\theta)}{\sum_{\theta'}P(x\mid\theta')\pi(\theta')}.
$$
Et donc les poids non normalisés (pour $x=0$) :
$$
w_1=0.5\cdot 0.2=0.10,\quad
w_2=0.1\cdot 0.3=0.03,\quad
w_3=0\cdot 0.5=0.
$$
La somme des poids donne donc: $w_1+w_2+w_3=0.13$.
Et on a les résultats :
$$
\boxed{\pi(1\mid x=0)=\frac{0.10}{0.13}=\frac{10}{13}\approx 0.7692}
$$
$$
\boxed{\pi(2\mid x=0)=\frac{0.03}{0.13}=\frac{3}{13}\approx 0.2308}
$$
$$
\boxed{\pi(3\mid x=0)=0}
$$
Puis pour $P(\theta=2\mid x_1=2,x_2=0)$
On suppose que $X_1,X_2$ sont conditionnellement indépendantes sachant $\theta$ :
$P(x_1=2,x_2=0\mid\theta)=P(2\mid\theta)\,P(0\mid\theta)$.
Et donc les poids non normalisés :$$
w_1=(0.25)(0.5)\cdot 0.2=0.025,\quad
w_2=(0.6)(0.1)\cdot 0.3=0.018,\quad
w_3=(0.2)(0)\cdot 0.5=0.
$$
La somme des poids donne donc: $w_1+w_2+w_3=0.043$.
Et on trouve :$$
\boxed{P(\theta=2\mid x_1=2,x_2=0)=\frac{0.018}{0.043}=\frac{18}{43}\approx 0.4186}
$$
# Attention
Il faut cependant être prudent lorsqu’on travaille avec des distributions particulières telles que des mélanges, ou tout simplement avec des distributions discrètes non identifiées. Dans de tels cas, il est plus prudent de procéder par la méthode longue pour déterminer la distribution à postériori.