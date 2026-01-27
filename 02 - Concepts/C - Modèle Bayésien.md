Soit $\theta$ un paramètre qui prend des valeurs dans l'espace paramètre $\Theta$. La densité utilisée pour modéliser le caractère aléatoire de $\theta$ est appelé [[C - Distribution à priori]] et est dénotée $\pi$ .

Un modèle de statistique bayésien est composé d'un modèle statistique paramétrique $f(x|\theta)$ et d'une densité à priori $\pi(\theta)$ ([[C - Distribution à priori]]).
#### Exemple intuitif:
Appliquons maintenant le [[T - Théorème de Bayes]] à notre problème d'[[C - Inférence Statistique]]: On observe un échantillon $x_1,...,x_n$ tel que $X_i|\theta \sim f(x_i|\theta)$ indépendamment pour $i=1,...,n$ et on sait que $\theta \sim \pi (\theta)$. Alors,
$$\pi(\theta|x)=\frac{\mathcal L(\theta|x)\pi(\theta)}{\int_\Theta\mathcal L(\theta|x)\pi(\theta)d\theta}=\frac{\prod_{i=1}^nf(x_i|\theta)\pi(\theta)}{\int_\Theta\prod_{i=1}^nf(x_i|\theta)\pi(\theta)d\theta}$$
La densité $\pi(\theta|x)$ est appelée [[C - Distribution a postériori]]

## Idée
- Initialement nous croyons que $\pi$ la densité à priori est un bon modèle pour la variable aléatoire $\theta$. La densité$\pi(\theta)$ est le meilleur choix qu'on puisse faire étant donné l'information que l'on possède.
- Nous obtenons alors l'échantillon $x_1,...,x_n$ provenant d'une densité qui dépend de $\theta$. Puisque nous avons maintenant plus d'information sur $\theta$, nous devons mettre $\pi$ à jour, en utilisant toute l'information que l'on possède.
- En utilisant Bayes, on obtient alors $\pi(\theta|x)$, qui est le meilleur choix de densité pour $\theta$ étant donné cette informaton additionnelle.

## Choix d'une bonne densité à priori



Une fois le choix d'une bonne distribution à propri on l'utilise pour obtenir les quantitiés nécessaires à l'inférence bayésienne.
- La densité conjointe de $(X,\theta)$ est $\psi(\theta,x)=f(x|\theta)\pi(\theta)$  (ou $\mathcal L(\theta|x)\pi(\theta)$ s'il y a plusieurs observations)
- La densité marginale de X est $m(x)=\int_\Theta f(x|\theta)\pi(\theta)d\theta$ 
- La densité à postériori de $\theta$ est $\pi(\theta|x)=\frac{\psi(\theta,x)}{m(x)}=\frac{f(x|\theta)\pi(\theta)}{\int_\Theta f(x|\theta)\pi(\theta)d\theta}$
- La densité prédictive de $Y$ lorsque $Y \sim g(y|\theta,x)$ est $g(y|x)=\int_\Theta g(y|\theta,x)\pi(\theta|x)d\theta$
