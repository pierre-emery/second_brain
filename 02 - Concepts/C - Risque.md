---
type: concept
cours: [IFT6758, STT2105, STT3790, IFT6269]
statut: complet
tags: []
prerequis: ["[[C - Fonction de perte]]"]
maj: 2026-11-11
---
Le risque est synônyme d'erreur. Mais comment mesurer l'erreur? L'idée est de trouver l'erreur moyenen sur toutes les données possible. On prend donc l'espérance sur la distribution des données. $R(f) = \mathrm E [l(Y,f(X))]$ pour une [[C - Fonction de perte]] $l(Y,f(X))$ qui mesure l'erreur du modèle. 
! Attention ! En pratique on ne peut pas calculer l'espérance sur toutes les données possible, on n'a simplement accès à un jeu de donnée de taille finie on approxime donc le risque d'apprentissage par le [[C - Risque Empirique]].

## Objectif des algorithmes

L'entraînement revient à chercher, parmi une famille de modèles $\mathcal F$, celui qui minimise le risque : $$\min_{f\in\mathcal F} R(f)$$

## Vocabulaire IFT6269 : risque de Vapnik

Dans le cadre de la [[C - Fondements de la théorie de décision|théorie de la décision]] appliquée à la prédiction, $L(P,f)=\mathbb E_{P_0}[\ell(Y,f(X))]$ est la **perte statistique** de l'action $f$. On l'appelle traditionnellement **erreur de généralisation** ou **risque** en ML ; Simon Lacoste-Julien l'appelle **risque de Vapnik** pour la distinguer du [[C - Risque Fréquentiste|risque fréquentiste]] $R(P,\delta)=\mathbb E_D[L(P,\delta(D))]$ des statisticiens.

> ⚠️ Dans ce vault, [[C - Erreur de généralisation]] désigne l'**écart** risque − risque empirique (sens IFT6758) ; dans IFT6269, « erreur de généralisation » = le risque lui-même.

## Liens connexes

- [[C - Risque Fréquentiste]]
- [[C - Fondements de la théorie de décision]]

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Qu'appelle-t-on le « risque de Vapnik » ?::$\mathbb E_{P_0}[\ell(Y,f(X))]$, l'erreur de généralisation d'une fonction de prédiction $f$ ; nommé ainsi pour le distinguer du risque fréquentiste.
