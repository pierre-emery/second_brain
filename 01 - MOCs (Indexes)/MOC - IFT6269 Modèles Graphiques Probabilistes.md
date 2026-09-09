---
type: moc-cours
cours:
  - IFT6269
sujet: Modèles graphiques probabilistes
maj: 2026-09-08
---

> IFT6269 — Probabilistic Graphical Models, Simon Lacoste-Julien (Mila / UdeM).

```dataview 

TABLE type AS "Type", statut AS "Statut"

FROM ""

WHERE type != "moc-cours" AND cours AND contains(cours, this.cours[0])

SORT type ASC, file.name ASC

``` 

## Notes incomplètes (auto)

```dataview

LIST

FROM ""

WHERE type != "moc-cours" AND statut AND statut != "complet" AND cours AND contains(cours, this.cours[0])

``` 

## Fondements probabilistes

- [[C - Sources d'incertitude]]
- [[C - Espace de probabilité]]
- [[C - Variable Aléatoire]]
- [[C - Distribution de probabilité (axiomes de Kolmogorov)]]
- [[C - Fonction de masse et de densité (pmf-pdf)]]
- [[C - Fonction de répartition (CDF)]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[C - Espérance]]
- [[C - Indépendance (variables aléatoires)]]
- [[C - Conditionnement (probabilité conditionnelle)]]

## Résultats fondamentaux

- [[T - Théorème de Bayes]]
- [[T - Règle de la chaîne (probabilité)]]
- [[T - Loi des grands nombres]]
- [[T - Théorème central limite]]

## Modèles graphiques probabilistes

- [[A - Modèle Graphique Probabiliste]]
- [[A - Modèle Graphique Non-dirigé]]
- [[C - Clique (graphe)]]
- [[A - Modèle de Markov Caché (HMM)]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Séparation Directionnelle]]

## Inférence et calcul

- [[A - Passation de Messages]]


## Modèles paramétriques et distributions

- [[C - Modèle paramétrique]]
- [[D - Bernoulli]]
- [[D - Binomiale]]
- [[D - Beta]]
- [[D - Loi de Poisson]]
- [[D - Loi Gaussienne (Normale)]]
- [[D - Gamma]]

## Statistique fréquentiste et bayésienne
- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[C - Statistique fréquentiste]]
- [[C - Modèle Bayésien]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]
- [[C - Vraisemblance]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]

## Thèmes du cours

- [[C - Thèmes clés de l'apprentissage statistique]]

## À venir (mentionnés, pas encore développés)

- Modèles graphiques dirigés vs. non dirigés (formalisme complet, à venir dans le cours)
- Inférence approximative : échantillonnage, méthodes variationnelles
- Estimation : maximum de vraisemblance, maximum d'entropie, appariement de moments
- Paradoxe de Borel-Kolmogorov (propriétés contre-intuitives du conditionnement continu)
- Propriétés générales des estimateurs (biais, variance, consistance; MAP)

## MOC thématiques liés

- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]