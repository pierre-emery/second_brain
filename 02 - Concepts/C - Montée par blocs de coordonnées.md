---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Méthode d'optimisation qui découpe les variables en **blocs** et optimise alternativement par rapport à un bloc en gardant les autres fixés (*block-coordinate ascent* ; « descente » si on minimise).
$$\text{deux blocs :}\quad a_{t+1}=\arg\max_aF(a,b_t),\qquad b_{t+1}=\arg\max_bF(a_{t+1},b)$$

## Intuition

Optimiser conjointement sur $(a,b)$ peut être difficile, alors que chaque sous-problème (un bloc, l'autre fixé) est facile, parfois en forme fermée. Chaque étape ne peut que faire monter l'objectif ($F(a_{t+1},b_{t+1})\ge F(a_{t+1},b_t)\ge F(a_t,b_t)$), donc la suite des valeurs est monotone.

## Exemple

- [[A - K-Means]] : **descente** par blocs sur la distorsion $J(\mu,z)$, en alternant $z$ (assignations) et $\mu$ (centres).
- [[A - Algorithme EM (espérance-maximisation)]] : **montée** par blocs sur l'[[C - Borne inférieure de la log-vraisemblance (ELBO)|ELBO]] $\mathcal L(q,\theta)$ — bloc $q$ (étape E), puis bloc $\theta$ (étape M).

## Limites

La monotonie garantit seulement la convergence vers un **point stationnaire** (souvent un optimum local), pas l'optimum global ; le résultat dépend de l'initialisation.

## Flashcards
#flashcards/IFT6269/10-non-supervise

Qu'est-ce que la montée par blocs de coordonnées ?::Optimiser alternativement chaque bloc de variables, les autres étant fixés.

Pourquoi l'objectif est-il monotone en montée par blocs ?::Chaque étape maximise exactement sur un bloc à partir du point courant, donc ne peut pas faire baisser l'objectif.

Quels sont les blocs dans K-Means et dans EM ?::K-Means : assignations $z$ et centres $\mu$ (descente sur la distorsion). EM : distribution $q$ et paramètres $\theta$ (montée sur l'ELBO).

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[A - K-Means]]
- [[A - Algorithme EM (espérance-maximisation)]]
