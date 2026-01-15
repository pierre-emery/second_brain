### Exemple typique
Supposons que $x_1,\ldots,x_m \sim \mathcal{N}(\mu,\sigma)$ i.i.d., on veut estimer $\mu$ et $\sigma$.
On peut formuler $P(x\mid \mu,\sigma)$. Alors, comme les échantillons sont i.i.d., on peut calculer
$P(x_1,\ldots,x_m\mid \mu,\sigma)=\prod_{i=1}^mP(x_i\mid \mu,\sigma)$ et maximiser cette vraisemblance.
Plus précisément, on maximiserait la log-vraisemblance
$\sum_{i=1}^m \ln\!\big(P(x_i\mid \mu,\sigma)\big)$, qui est plus simple à différencier puis maximiser via son gradient par rapport à $\mu$ et $\sigma$.