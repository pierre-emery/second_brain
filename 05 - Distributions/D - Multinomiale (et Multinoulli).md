---
## type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-10-15
---
## Multinoulli (Bernoulli généralisée à $K$ choix)

Pour une variable aléatoire discrète $X_i$ sur $K$ choix, plutôt que $\Omega_{X_i}={1,\dots,K}$, on encode $X_i$ comme un vecteur aléatoire à valeurs dans les **vecteurs de base unitaire** de $\mathbb R^K$ — le **one-hot encoding** (très utilisé en réseaux de neurones) : $$\Omega_{X_i} = {e_1,\dots,e_K}, \qquad e_j = (0,\dots,1,\dots,0)^\top \in \mathbb R^K \ (\text{le } 1 \text{ en position } j)$$ Le paramètre $\pi$ vit dans le [[C - Simplexe de probabilité|simplexe de probabilité]] $\Theta = \Delta_K$. On note $X_i \sim \mathrm{Mult}(\pi)$, de pmf : $$p(x_i;\pi) = \prod_{j=1}^K \pi_j^{x_{i,j}}, \qquad x_{i,j}\in{0,1} \text{ la } j\text{-ième composante de } x_i$$ La Multinoulli est l'équivalent de la [[D - Bernoulli|Bernoulli]] pour $K$ choix (au lieu de 2).

## Multinomiale (Binomiale généralisée à $K$ choix)

Si $X_1,\dots,X_n \overset{\text{iid}}{\sim} \mathrm{Mult}(\pi)$, alors $X \triangleq \sum_{i=1}^n X_i \sim \mathrm{Mult}(n,\pi)$, avec $$\Omega_X = \left\{(n_1,\dots,n_K) \;;\; \forall j\ n_j\in\mathbb N \text{ et } \sum_j n_j = n\right\}$$ C'est l'analogue de la [[D - Binomiale|Binomiale]] pour $K$ choix. Sa pmf (avec $n_j = \sum_i x_{i,j}$ le nombre d'observations de la valeur $j$) : $$p(x;\pi) = \binom{n}{n_1,\dots,n_K}\prod_{j=1}^K \pi_j^{n_j}, \qquad \binom{n}{n_1,\dots,n_K} = \frac{n!}{n_1!\cdots n_K!}$$Chercher le MLE d'un modèle Multinomial (une observation $x$) ou d'un modèle Multinoulli ($n$ observations $x_1,\dots,x_n$) donne le même résultat (à la constante de normalisation $\binom{n}{n_1,\dots,n_K}$ près, absente dans le cas Multinoulli).

## MLE
$$\widehat\pi_{\text{ML}}^{(j)} = \frac{n_j}{n}$$ la fréquence relative de la valeur $j$, comme pour la Binomiale. Voir [[E - Exercice MLE Multinomiale]] pour la dérivation complète via les [[C - Multiplicateurs de Lagrange]].

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Bernoulli]]
- [[D - Binomiale]]
- [[C - Simplexe de probabilité]]
- [[E - Exercice MLE Multinomiale]]