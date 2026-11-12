---
type: concept
cours: [IFT6135, IFT6269]
statut: à réviser
maj: 2026-11-11
---
Variante de la [[A - Descente de Gradient Stochastique (SGD)|descente de gradient]] qui met à jour les paramètres à partir d'un petit lot (mini-batch) d'exemples plutôt que d'un seul exemple ou de tout l'ensemble d'entraînement.

**Avantages** :

- Le gradient (perte régularisée moyenne sur le mini-lot) est une estimation plus précise du gradient du risque que celle obtenue avec un seul exemple

- Permet d'exploiter des opérations matrice/matrice, plus efficaces (parallélisation)

## Analyse (IFT6269, lecture 8)

Tirer $B=\{i_1,\dots,i_b\}$, puis $g=\frac1b\sum_{j=1}^b\nabla f_{i_j}(w_t)$ et $w_{t+1}=w_t-\gamma g$ ; coût $O(bd)$ par itération.

**Résultat contre-intuitif** : l'analyse de convergence montre **aucun avantage** à prendre $b>1$ si un pas de mini-lot coûte $b$ fois un gradient. La variance diminue avec $b$, ce qui réduit le nombre d'itérations, mais cette réduction est **plus petite que $b$**. La vraie raison d'utiliser des mini-lots est **computationnelle** : avec du **calcul parallèle**, $b$ gradients coûtent presque autant qu'un seul → gain net.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Parallélisation]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - SAG et SAGA]]

## Flashcards

#flashcards/IFT6135/02-entrainement

Qu'est-ce que la descente de gradient par mini-lot ?::Chaque mise à jour utilise le gradient moyen sur un petit lot d'exemples (entre SGD à 1 exemple et le batch complet).

Deux avantages du mini-lot par rapport à SGD à un exemple ?::Estimation du gradient plus précise (moins bruitée) ; opérations matrice-matrice plus efficaces (parallélisation).

#flashcards/IFT6269/08-regression-logistique

Si un pas de mini-lot coûte $b$ fois un gradient, y a-t-il un gain à prendre $b>1$ ?::Non (en théorie) : la baisse du nombre d'itérations est inférieure au facteur $b$. Le gain vient du parallélisme.
