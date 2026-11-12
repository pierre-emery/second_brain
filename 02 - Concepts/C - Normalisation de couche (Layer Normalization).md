---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Layer normalization** (Ba, Kiros, Hinton 2016) : normalise les activations **à travers les unités d'une couche**, pour chaque exemple séparément, plutôt qu'à travers le mini-lot comme la [[C - Normalisation par lot (Batch Normalization)|batch norm]]. C'est la normalisation standard des RNN et des [[M - Transformer|Transformers]].

$$\mu^l = \frac1H\sum_{i=1}^H x_i^l,\qquad \sigma^l = \sqrt{\frac1H\sum_{i=1}^H (x_i^l - \mu^l)^2},\qquad \hat x_i = \frac{x_i - \mu^l}{\sigma^l},\qquad y_i = \gamma \hat x_i + \beta$$

## Intuition
Les statistiques ne dépendent que de l'exemple courant : aucune dépendance à la taille du lot, et un calcul **identique à l'entraînement et au test**. Dans un RNN, on les recalcule à chaque pas de temps, ce qui règle le problème des séquences de longueurs variables.

## Formalisme
- $H$ = nombre d'unités de la couche $l$ ; $\gamma, \beta$ appris par unité.
- **Pour un CNN** (cube N × C × (H,W) du cours) : on normalise sur **tous les canaux et toutes les positions** d'un même exemple, donc un $\mu, \sigma$ par exemple.

## Exemple
Figure du cours (*attentive reader*) : LN-LSTM converge plus vite et plus bas en erreur de validation que LSTM, BN-LSTM ou BN partout.

## Flashcards
#flashcards/IFT6135/08-optimisation

Sur quoi LayerNorm calcule-t-elle $\mu$ et $\sigma$ ?::Sur les $H$ unités de la couche, pour chaque exemple séparément (dans un CNN : sur tous les canaux et positions d'un exemple).

Pourquoi LayerNorm est-elle préférée à BatchNorm pour les RNN et Transformers ?::Elle ne dépend pas du mini-lot : même calcul à l'entraînement et au test, fonctionne avec des lots de taille 1 et des séquences de longueur variable.

Différence clé BN vs LN en une phrase ?::BN normalise chaque unité à travers les exemples du lot ; LN normalise chaque exemple à travers les unités de la couche.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Normalisation par lot (Batch Normalization)]]
- [[C - Normalisation de groupe (Group Normalization)]]
- [[M - Transformer]]
- [[M - Réseau de Neurones Récurrent (RNN)]]
