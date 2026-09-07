---
## type: concept
cours: [IFT6758, STT2105, STT3790]
statut: complet
tags: []
prerequis: ["[[C - Fonction de perte]]"]
maj: 2026-08-06
---
Le risque est synônyme d'erreur. Mais comment mesurer l'erreur? L'idée est de trouver l'erreur moyenen sur toutes les données possible. On prend donc l'espérance sur la distribution des données. $R(f) = \mathrm E [l(Y,f(X))]$ pour une [[C - Fonction de perte]] $l(Y,f(X))$ qui mesure l'erreur du modèle. 
! Attention ! En pratique on ne peut pas calculer l'espérance sur toutes les données possible, on n'a simplement accès à un jeu de donnée de taille finie on approxime donc le risque d'apprentissage par le [[C - Risque Empirique]].

## Objectif des algorithmes

L'entraînement revient à chercher, parmi une famille de modèles $\mathcal F$, celui qui minimise le risque : $$\min_{f\in\mathcal F} R(f)$$