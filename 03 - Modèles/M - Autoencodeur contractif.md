---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Contractive autoencoder** (Rifai, Vincent, Muller, Glorot, Bengio 2011) : [[M - Autoencodeur|autoencodeur]] dont la perte contient un terme **explicite** qui pénalise la sensibilité de l'encodeur à son entrée, mesurée par la norme de Frobenius de son **jacobien**.

$$l(f(x^{(t)})) + \lambda\,\big\|\nabla_{x^{(t)}} h(x^{(t)})\big\|_F^2,\qquad \big\|\nabla_{x^{(t)}} h(x^{(t)})\big\|_F^2 = \sum_j\sum_k \left(\frac{\partial h(x^{(t)})_j}{\partial x^{(t)}_k}\right)^2$$

## Intuition
On veut des caractéristiques qui reflètent **seulement les variations observées dans l'ensemble d'entraînement**, et qui soient invariantes aux autres. Deux termes s'opposent :
- la **reconstruction** pousse l'encodeur à garder la bonne information ;
- le **jacobien** pousse l'encodeur à jeter toute l'information.

Compromis : l'encodeur ne garde que la bonne information. Illustration du cours : il doit rester sensible aux variations le long de la variété des données (sinon il reconstruit mal), mais n'a pas besoin de l'être dans les directions orthogonales, jamais observées.

## Formalisme
- Perte de reconstruction pour des observations binaires : $l(f(x^{(t)})) = -\sum_k \big(x_k^{(t)}\log\hat x_k^{(t)} + (1-x_k^{(t)})\log(1-\hat x_k^{(t)})\big)$.
- Pour $h(x) = \mathrm{sigm}(b + Wx)$ : $\frac{\partial h_j}{\partial x_k} = h_j(1-h_j)W_{jk}$, d'où $\|J\|_F^2 = \sum_j \big(h_j(1-h_j)\big)^2 \sum_k W_{jk}^2$, qui se calcule en forme fermée.

## Exemple
Données le long d'une courbe en 2D : le code doit varier quand on se déplace le long de la courbe (pour reconstruire), mais peut rester constant quand on s'en éloigne perpendiculairement.

## IFT6135 — contractif vs débruiteur
Le gradient du contractif est **déterministe**, donc on peut utiliser des optimiseurs du second ordre (gradient conjugué, L-BFGS…), et il peut être plus stable que le [[M - Autoencodeur débruiteur (Denoising Autoencoder)|débruiteur]] (gradient échantillonné). En revanche, le débruiteur est plus simple : pas de jacobien à calculer.

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Perte de l'autoencodeur contractif ?::Reconstruction $+\ \lambda\|\nabla_x h(x)\|_F^2$, où $\|\nabla_x h\|_F^2=\sum_{j,k}(\partial h_j/\partial x_k)^2$.

Expliquer le compromis entre les deux termes de la perte contractive
?
La reconstruction veut garder l'information utile ; la pénalité sur le jacobien voudrait tout jeter (code constant). Résultat : seules les variations présentes dans les données (le long de la variété) sont encodées.

Calculer $\|J\|_F^2$ pour $h=\mathrm{sigm}(b+Wx)$ ?::$\partial h_j/\partial x_k = h_j(1-h_j)W_{jk}$, donc $\|J\|_F^2 = \sum_j (h_j(1-h_j))^2\sum_k W_{jk}^2$.

Pourquoi le contractif permet-il des optimiseurs du second ordre ?::Son objectif est déterministe (pas de bruit échantillonné comme le débruiteur), donc gradient conjugué ou L-BFGS sont applicables.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Autoencodeur]]
- [[M - Autoencodeur débruiteur (Denoising Autoencoder)]]
- [[C - Matrice Jacobienne]]
- [[C - Hypothèse de Variété (Manifold Hypothesis)]]
