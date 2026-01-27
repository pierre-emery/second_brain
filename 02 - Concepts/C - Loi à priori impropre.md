La [[C - Distribution à priori]] est un artifice permettant de modéliser l'information à priori.

La densité $\pi(\theta)$ n'a pas obligatoirement à être une vraie densité, en autant que $\int_\Theta \mathcal L(\theta|x)\pi(\theta)d\theta<\infty$ (ceci certifie que la [[C - Distribution a postériori]] est valide, i.e. $\int \pi(\theta|x)d\theta=1$)

## Définition
Une densité à priori telle que $\int_\Theta\pi(\theta)d\theta=\infty$ est dite une densité à priori impropre

Autrement dit une loi à priori impropre est utile du moins tant que la loi à postériori existe.

## Exemple
Supposons que $X|\theta\sim\mathcal N(\theta,\sigma^2)$ où $\sigma^2>0$ est connu. Si nous ne connaissons rien à propos de $\theta$ ceci implique que toutes les valeurs de $\theta$ sont équiprobables.
Dans ce cas $\pi(\theta)=1, \forall \theta \in \mathbb R$.

## Note
Souvent une densité à priori impropre peut être obtenue comme un cas limite d'une vraie densité.
Il est ainsi envisageable de travailler avec une loi normale centrée ([[D - Loi Gaussienne (Normale)]]) de grande [[C - Variance]] pour approche une loi uniforme sur $\mathbb R$ .
### Exemple
Supposons que $\bar X|\theta\sim\mathcal N(\theta,\frac{\sigma^2}{n})$, où $\sigma^2$ est connu. De plus supposons que $\theta\sim\mathcal N(\theta_0,\frac{\sigma^2}{n_0})$. Alors, $\mathbb Var(\theta)=\frac{\sigma^2}{n_0}$.
Si $n_0 \rightarrow 0$,$\mathbb Var(\theta)\rightarrow\infty$ et nous avons de moins en moins d'information sur $\theta$

### Remarque
L'usage de lois à priori impropores est justifié si la loi la à postériori [[C - Distribution a postériori]] est propre (non impropre).
En effet la loi à postériori ne dépend pas de la constante multiplicative de la loi à priori $(c \pi(\theta),\text{par exemple})$; cette constante se simplifie au numérateur et au dénominateur

# Notes
- En vertu du [[T - Théorème de Bayes]] et du [[C - Principe de vraisemblance]] seul la densité à postériori importe
- Si la densité à priori est impropre il faut faire attention $\pi(\theta|x)$ pourrait être impropre ou ne pas exister pour certaines valerus de $x$.
- Plus nous avons d'observations, moins il y a de chances que cela se produise.