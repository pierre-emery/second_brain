---
type: moc-cours
cours: [IFT6269]
session: Automne 2026
sujet: Modèles graphiques probabilistes
prof: Simon Lacoste-Julien
credits: 4
jours: [1, 3]          
couleur: "#7c5cff"     
évaluations:
  - {nom: Devoir 1, poids: 4, echeance: 2026-09-23, note: }
  - {nom: Devoir 2, poids: 4, echeance: 2026-10-14, note: }
  - {nom: Devoir 3, poids: 4, echeance: 2026-11-03, note: }
  - {nom: Devoir 4, poids: 4, echeance: 2026-11-25, note: }
  - {nom: Devoir 5, poids: 4, echeance: 2026-12-23, note: }
  - {nom: Projet (rapport + poster), poids: 30, echeance: 2026-12-21, note: }
  - {nom: Examen final, poids: 50, echeance: 2026-12-16, note: }
maj: 2026-09-25
---
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

- [[C - Espace de Probabilité]]
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
- [[D - Multinomiale (et Multinoulli)]]
## Statistique fréquentiste et bayésienne

- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[C - Statistique fréquentiste]]
- [[C - Modèle Bayésien]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]
- [[C - Vraisemblance]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[A - Maximisation de la vraisemblance]]

## Optimisation

- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[C - Matrice Hessienne]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Fonction Objective]]
- [[C - Contraintes]]
- [[C - Simplexe de probabilité]]
## Thèmes du cours

- [[C - Thèmes clés de l'apprentissage statistique]]

## À venir (mentionnés, pas encore développés)

- Inférence approximative : échantillonnage, méthodes variationnelles
- Estimation : maximum d'entropie, appariement de moments
- Paradoxe de Borel-Kolmogorov (propriétés contre-intuitives du conditionnement continu)
- Conditions KKT (contraintes d'inégalité), dualité
- Estimateur de James-Stein (inadmissibilité du MLE)
## Exercices

- [[E - Exercice MLE Binomiale]]
- [[E - Exercice MLE Multinomiale]]
## MOC thématiques liés

- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]