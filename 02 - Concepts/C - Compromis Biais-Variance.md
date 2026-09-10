---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-09
---

Le pire scénario en apprentissage est qu'on aille un [[C - Biais]] et une [[C - Variance (expliquée)]] élevée. Le meilleur scénario serait qu'on aille un bais et une variance faible. En pratique on tombe très souvent en [[C - Sous-apprentissage]] qui se caractérise par un biais élevé et une variance faible ou bien en [[C - Surapprentissage]] qui se caractérise par un biais faible et une variance élevée.

Il y a donc un compromis à aller chercher entres les deux dans le but de minimiser l'erreur. Un point optimal de complexité du modèle existe là ou les courbes d'erreur de biais et de variance se croisent, et l'erreur minimisée.

## Stratégie pour trouver la complexité optimale

On entraîne plusieurs modèles avec les mêmes données d'entraînement. Leurs performances en généralisation sont mesurées avec les mêmes données de validation. Le modèle avec les meilleures performances est celui avec la complexité optimale.

## Formalisation : décomposition de l'erreur quadratique moyenne

Pour un [[C - Estimateur Ponctuel|estimateur]] $\widehat\theta_m$ du vrai paramètre $\theta$, l'erreur quadratique moyenne (MSE) se décompose exactement en deux termes :

$$\text{MSE} = \mathbb{E}\big[(\widehat\theta_m-\theta)^2\big] = \text{Biais}(\widehat\theta_m)^2 + \text{Var}(\widehat\theta_m)$$

Cette identité formalise le compromis : un estimateur désirable garde à la fois son biais et sa variance sous contrôle, puisque la MSE totale incorpore les deux. Choisir entre deux estimateurs, l'un plus biaisé, l'autre de plus grande variance, revient à comparer leur MSE plutôt que de ne regarder qu'une seule des deux quantités.

## Lien avec la capacité

Quand l'erreur de généralisation est mesurée par la MSE, augmenter la [[C - Complexité d'un modèle (capacité)|capacité]] d'un modèle tend à **diminuer le biais** et à **augmenter la variance** d'où la courbe en U de l'erreur de généralisation en fonction de la capacité.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Estimateur Ponctuel]]
- [[C - Complexité d'un modèle (capacité)]]



