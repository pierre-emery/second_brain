---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Variante de [[C - Régularisation]] pénalisant la valeur absolue des poids (pas des biais) :

$$\Omega(\theta) = \sum_k \sum_i \sum_j |W^{(k)}_{i,j}|$$
**Gradient** : $\nabla_{\mathbf{W}^{(k)}} \Omega(\theta) = \text{sign}(\mathbf{W}^{(k)})$, où $\text{sign}(\mathbf{W}^{(k)})_{i,j} = \mathbb{1}_{W^{(k)}_{i,j}>0} - \mathbb{1}_{W^{(k)}_{i,j}<0}$

**Différence clé avec L2** : pousse certains poids à devenir **exactement** 0 (induit de la parcimonie). Équivaut à un a priori **Laplacien** sur les poids.

## IFT6135 — Chap. 07 : solution par seuillage doux
Notation du cours : $\tilde J(w; X, y) = J(w; X, y) + \beta \|w\|_1$, d'où
$$\nabla_w \tilde J(w; X, y) = \nabla_w J(w; X, y) + \beta\,\mathrm{sign}(w).$$

**Dérivation.** On reprend l'approximation quadratique autour de l'optimum non régularisé $w^*$, $\hat J(w) = J(w^*) + \tfrac12 (w-w^*)^\top H (w-w^*)$, avec l'hypothèse simplificatrice d'une **hessienne diagonale** $H = \mathrm{diag}(\gamma_1,\dots,\gamma_N)$, $\gamma_i > 0$ (par exemple des entrées décorrélées). L'objectif se découple alors en $N$ problèmes indépendants :
$$\tilde J(w_i) = \tfrac12 \gamma_i (w_i - w_i^*)^2 + \beta |w_i|.$$
Chacun admet la solution en forme fermée (**seuillage doux**, *soft thresholding*) :
$$w_i = \mathrm{sign}(w_i^*)\,\max\!\left(|w_i^*| - \frac{\beta}{\gamma_i},\, 0\right).$$

**Lecture** :
- si $|w_i^*| \le \beta/\gamma_i$, le poids est mis **exactement à 0** : la pénalité l'emporte sur le gain de la perte ;
- sinon, il est décalé vers 0 de $\beta/\gamma_i$ (translation, pas un facteur multiplicatif comme en L2).

Géométriquement : les lignes de niveau de $\|w\|_1$ sont des losanges, dont les coins tombent sur les axes ; l'optimum touche souvent un coin, d'où des coordonnées nulles.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Régularisation]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Matrice Hessienne]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Régularisateur L1 et son gradient ?::$\Omega = \sum_{k,i,j} |W^{(k)}_{i,j}|$ ; $\nabla_{\mathbf{W}}\Omega = \mathrm{sign}(\mathbf{W})$.

Différence clé de L1 par rapport à L2 ?::L1 pousse des poids à être **exactement** 0 (parcimonie) ; a priori de Laplace.

Pourquoi L1 produit-elle des zéros exacts alors que L2 non ?::Le gradient de L1 garde une magnitude constante près de 0 et pousse jusqu'à 0 ; celui de L2 ($2W$) s'annule près de 0, donc les poids rétrécissent sans s'annuler.

#flashcards/IFT6135/07-regularisation

Solution L1 avec hessienne diagonale $H=\mathrm{diag}(\gamma_i)$ ?::$w_i = \mathrm{sign}(w_i^*)\max(|w_i^* | - \beta/\gamma_i, 0)$ (seuillage doux).

Quand le seuillage doux met-il un poids exactement à 0 ?::Quand $|w_i^*| \le \beta/\gamma_i$ : le gain de perte d'un poids non nul ne compense pas la pénalité.

Comparer l'effet de L1 et L2 sur une composante de $w^*$
?
L2 la **multiplie** par $\lambda_i/(\lambda_i+\alpha)$ (jamais exactement 0). L1 la **translate** vers 0 de $\beta/\gamma_i$ et la coupe à 0 si elle est trop petite (parcimonie).
