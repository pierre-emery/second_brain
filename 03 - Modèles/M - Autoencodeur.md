---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Réseau de neurones à propagation avant entraîné à **reproduire son entrée sur sa couche de sortie**. Il se compose d'un **encodeur** $h(x)$, qui produit un code (représentation), et d'un **décodeur** $\hat x$, qui reconstruit l'entrée à partir du code.

$$h(x) = g(a(x)) = \mathrm{sigm}(b + Wx),\qquad \hat x = o(\hat a(x)) = \mathrm{sigm}(c + W^* h(x))$$

## Intuition
Si le code est contraint (plus petit que l'entrée, bruité, peu sensible…), le réseau ne peut pas simplement copier : il doit capturer la **structure** des données d'entraînement. C'est une méthode d'[[C - Apprentissage non-supervisée|apprentissage non supervisé]] qui sert à extraire des caractéristiques, à exploiter les données non étiquetées et à régulariser (voir [[A - Préentraînement glouton couche par couche]]).

## Formalisme
**Poids liés** (*tied weights*) : on impose souvent $W^* = W^\top$.

**Fonction de perte** : on choisit une distribution $p(x\mid\mu)$ sur les entrées, dont les paramètres $\mu$ dépendent de la couche cachée ($\mu = \hat x$), puis on prend $l(f(x)) = -\log p(x \mid \mu)$ (recette générale pour un nouveau type d'entrée).
- **Entrées binaires** : $p$ = Bernoulli factorisée, ce qui donne la somme d'entropies croisées de Bernoulli
$$l(f(x)) = -\sum_k \big(x_k \log \hat x_k + (1-x_k)\log(1-\hat x_k)\big).$$
- **Entrées réelles** : $p$ = gaussienne de moyenne $\mu$ et de covariance identité, $p(x\mid\mu) = \frac{1}{(2\pi)^{D/2}}\exp\!\big(-\tfrac12\sum_k (x_k-\mu_k)^2\big)$, ce qui donne la somme des carrés des écarts
$$l(f(x)) = \tfrac12 \sum_k (\hat x_k - x_k)^2,$$
avec une activation de sortie **linéaire** : $\hat x = c + W^* h(x)$.

**Gradient** : dans les deux cas, il a une forme très simple à la pré-activation de sortie :
$$\nabla_{\hat a(x^{(t)})}\, l(f(x^{(t)})) = \hat x^{(t)} - x^{(t)}.$$
Les gradients des paramètres s'obtiennent par rétropropagation comme dans un réseau ordinaire. **Attention** : avec des poids liés, $\nabla_W l(f(x^{(t)}))$ est la **somme de deux gradients**, car $W$ apparaît à la fois dans l'encodeur et dans le décodeur.

**Taille du code** : voir [[C - Représentation sous-complète et sur-complète]].

## Exemple
Sur MNIST, chaque unité cachée apprend un filtre qu'on peut afficher comme une image de 28 × 28 poids : des traits et des parties de chiffres.

## IFT6135 — Chap. 09 : variantes
- **Linéaire** : avec une perte quadratique et un décodeur linéaire, l'optimum correspond à l'ACP, voir [[T - Optimalité de l'autoencodeur linéaire (ACP)]].
- **Débruiteur** : [[M - Autoencodeur débruiteur (Denoising Autoencoder)]].
- **Contractif** : [[M - Autoencodeur contractif]].
- **Autorégressif** : [[M - MADE (Masked Autoencoder for Distribution Estimation)|MADE]] masque les connexions pour faire un estimateur de densité.

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Écrire l'encodeur et le décodeur d'un autoencodeur à une couche
?
$h(x) = \mathrm{sigm}(b+Wx)$ ; $\hat x = \mathrm{sigm}(c+W^*h(x))$, souvent avec des poids liés $W^* = W^\top$.

Quelle perte pour des entrées binaires ? réelles ?::Binaires : somme d'entropies croisées de Bernoulli $-\sum_k[x_k\log\hat x_k+(1-x_k)\log(1-\hat x_k)]$. Réelles : $\frac12\sum_k(\hat x_k-x_k)^2$ avec une sortie linéaire.

Recette pour adapter un autoencodeur à un nouveau type d'entrée ?::Choisir une distribution $p(x\mid\mu)$, relier $\mu$ à la couche cachée, et utiliser $l = -\log p(x\mid\mu)$ comme perte.

Pourquoi le gradient de $W$ est-il une somme de deux termes avec des poids liés ?::$W$ intervient dans l'encodeur ($Wx$) et dans le décodeur ($W^\top h$) : on additionne les contributions des deux chemins.

Gradient de la perte par rapport à la pré-activation de sortie ?::$\hat x - x$, pour l'entropie croisée avec sortie sigmoïde comme pour la perte quadratique avec sortie linéaire.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[C - Apprentissage non-supervisée]]
- [[A - Analyse en composantes principales (PCA)]]
- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[D - Bernoulli]]
- [[D - Loi Gaussienne (Normale)]]
- [[C - Représentation sous-complète et sur-complète]]
