MSE pour Mean Squared Error est la variance des erreurs du modèle.
Elle est sensible aux écarts importants entre les prévisions d'un modèle et les observations.
$$\widehat R(\theta) = \frac 1 N \sum_{i=1}^N||y_i-f(x_i;\theta)||_2^2 $$
## Définition plus simple dans le cours de stats bayésienne
La fonction de perte quadratique est la plus utilisée car c'est la plus facile à travailler.
- Si $\Theta\subseteq\mathbb R$ la fonction de perte quadratique est donnée par $L(\theta,a)=(\theta-a)^2$  
- Si $\Theta \subseteq  \mathbb R^p$ la fonction de perte quadratique est donnée par $L(\theta,a)=(\theta-a)^\top Q(\theta-a)$ où $Q$ est une [[C - Matrice Symétrique Définie Positive]].
Si on a la fonction de perte quadratique, alors $\delta_\pi(x)=\mathbb E[\theta\mid x]=\frac{\int_\Theta \theta\mathcal L(\theta\mid x)\pi(\theta)d\theta}{\int_\Theta \mathcal L(\theta\mid x)\pi(\theta)d\theta}$ 
### Démonstration
En fait on est dans un cas particulier de la même preuve mais pour la [[C - Perte Quadratique Pondérée]] avec $w(\theta)=1$.

## Cas matriciel
Si $L(\theta,a)=(\theta-a)^\top Q(\theta-a)$ alors $\delta_\pi(x)=\mathbb E[\theta|x],\forall \theta$.

### Démonstration
La [[C - Perte Espérée à postériori]] satsifait$$
\rho(\pi, a \mid x)
= \mathbb{E}_{\theta\mid x}\!\left[(\theta-a)^\top Q(\theta-a)\right]
= \mathbb{E}\!\left[\left(\{\theta-\mathbb{E}[\theta\mid x]\}+\{\mathbb{E}[\theta\mid x]-a\}\right)^\top
Q\left(\{\theta-\mathbb{E}[\theta\mid x]\}+\{\mathbb{E}[\theta\mid x]-a\}\right)\,\middle|\,x\right].
$$
En développant cette forme quadratique, on obtient

$$
\rho(\pi, a \mid x)
=
\mathbb{E}_{\theta\mid x}\!\left[(\theta-\mathbb{E}[\theta\mid x])^\top Q(\theta-\mathbb{E}[\theta\mid x])\right]
+2(\mathbb{E}[\theta\mid x]-a)^\top Q\,\mathbb{E}[\theta-\mathbb{E}[\theta\mid x]\mid x]
+(\mathbb{E}[\theta\mid x]-a)^\top Q(\mathbb{E}[\theta\mid x]-a).
$$

Le deuxième terme est nul car $\mathbb{E}_{\theta\mid x}[\theta-\mathbb{E}[\theta\mid x]]= \mathbb{E}[\theta\mid x]-\mathbb{E}[\theta\mid x]=0$. 
Puisque $Q$ est définie positive, les deux autres termes sont $\geq 0$. 
De plus, $\theta\neq\mathbb E[\theta|x]$ à moins d'un cas dégénéré. 
Par conséquent $\delta_\pi(x)=a=\mathbb E[\theta|x]$ 

# Notes
Quoique facile à évaluer, la fonction de perte quadratique a tendance à surévaluer les grandes pertes.
De plus la sur et sous-estimation sont traitées de façon symétrique.
La fonction de [[C - Perte Linéaire]] remédie à ces problèmes.