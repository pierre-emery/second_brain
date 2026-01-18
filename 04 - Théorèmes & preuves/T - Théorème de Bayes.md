La probabilité conditionnelle de la classe C sachant l'observation x peut être calculée comme $$\mathbb P(C\mid x) = \frac{\mathbb P(x\mid C)\mathbb P(C)}{\mathbb P(x)}$$ en utilisant la probabilité conditionnelle de x sachant C et les probabilités de x et de C.

Dans le cadre de [[A - Classification Naïve Bayésienne]]
- $\mathbb P(C)$ est la probabilité a priori de C ([[C - Distribution a priori]])
- $\mathbb P(x|C)$ est la [[C - Vraisemblance]] de C sachant x
- $\mathbb P(x)$ $est la distribution d'observations 
- $\mathbb P(C|x)$ est la probabilité a posteriori de C sachant x ([[C - Distribution a postériori]])

## Théorème de Bayes version discrète
Considérons A et B deux événements. Si $\mathbb P (B)­\geq 0$, alors les probabilités $\mathbb P(A|B)$ et $\mathbb P(B|A)$ sont reliés de la manière suivante 
$$\mathbb P(A\mid B)= \frac{\mathbb P(A\cup B)}{\mathbb P(B)} = \frac{\mathbb P(B\mid A)\mathbb P(A)}{\mathbb P(B \cap A)+\mathbb P(B\cap A^c)}=\frac{\mathbb P(B\mid A)\mathbb P(A)}{\mathbb P(B \mid A)\mathbb P(A)+\mathbb P(B\mid A^c)\mathbb P(A^c)}$$
## Version continue
Considérons $Y$, une variable aléatoire de densité $g(y)$ et $X|Y=y$ une variable aléatoire de densité $f(x|y)$. La densité conditionnelle de $Y|X=x$ est $$g(y|x)=\frac{f(x|y)g(y)}{\int_yf(x|z)g(z)dz}$$