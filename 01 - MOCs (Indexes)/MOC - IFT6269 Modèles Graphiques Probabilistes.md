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
### Théorie des graphes

- [[C - Graphe dirigé et non dirigé]]
- [[G - Graphes Acycliques Directs (DAG)]]
- [[T - Caractérisation des DAG par ordre topologique]]
### Modèles dirigés (réseaux bayésiens)

- [[A - Modèle Graphique Dirigé (DGM)]]
- [[T - Propriété d'élagage des feuilles]]
- [[T - Les facteurs d'un DGM sont les conditionnelles]]
- [[C - Structures canoniques à trois nœuds]]
- [[C - Explication mutuelle (explaining away)]]
- [[T - Propriété de Markov locale dirigée]]
- [[A - Bayes-Ball]]
- [[T - Inclusion des modèles graphiques]]
- [[T - Renversement d'arête couverte]]
### Modèles non dirigés

- [[C - Propriété de Markov globale]]
- [[T - La factorisation UGM implique la propriété de Markov globale]]
- [[T - Théorème de Hammersley-Clifford]]
- [[C - Couverture de Markov]]
- [[A - Modèle d'Ising]]
### DGM ↔ UGM

- [[C - Moralisation]]
- [[C - Comparaison DGM vs UGM]]
- [[C - Marginalisation dans les modèles graphiques]]
- [[C - Notation en plaques]]
## Inférence et calcul

- [[A - Passation de Messages]]
- [[C - Inférence dans les modèles graphiques]]
- [[A - Élimination de variables]]
- [[C - Graphe triangulé]]
- [[C - Largeur arborescente (treewidth)]]
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
## Théorie de la décision statistique

- [[C - Fondements de la théorie de décision]]
- [[C - Règle de décision]]
- [[C - Fonction de perte]]
- [[C - Risque Fréquentiste]]
- [[C - Risque]] (risque de Vapnik)
- [[C - Admissibilité]]
- [[C - Minimaxité]]
- [[C - Risque intégré]]
- [[C - Perte Espérée à postériori]]
- [[C - Théorie PAC]]
- [[C - Risque Empirique]] (ERM)
## Propriétés des estimateurs

- [[C - Méthode des moments]]
- [[C - Convergence de variables aléatoires]]
- [[C - Biais]]
- [[C - Consistance d'un Estimateur]]
- [[T - Décomposition biais-variance]]
- [[C - Estimateur de James-Stein]]
- [[C - Information de Fisher]]
- [[T - Borne de Cramér-Rao]]
- [[T - Invariance du MLE (estimateur plug-in)]]
## Régression et classification

- [[C - Approches génératives, conditionnelles et discriminantes]]
- [[A - Régression Linéaire]]
- [[A - Régression Ridge]]
- [[A - Régression Logistique (Binaire)]]
- [[C - Fonction Sigmoïde]]
- [[C - Log-ratio des cotes (log-odds)]]
- [[D - Famille exponentielle]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
- [[A - Analyse Discriminante Linéaire (LDA)]]
## Apprentissage non supervisé

- [[C - Variable latente]]
- [[A - K-Means]]
- [[A - K-Means++]]
## Optimisation

- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[C - Matrice Hessienne]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Fonction Objective]]
- [[C - Contraintes]]
- [[C - Simplexe de probabilité]]
- [[C - Taux d'apprentissage]]
- [[A - Méthode de Newton (optimisation)]]
- [[A - IRLS (moindres carrés repondérés itératifs)]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[A - SAG et SAGA]]
## Calcul matriciel

- [[C - Différentielle (calcul matriciel)]]
- [[C - Matrice Jacobienne]]
- [[T - Règle de la chaîne pour les différentielles]]
- [[C - Distance de Mahalanobis]]
- [[T - Différentielle du log-déterminant]]
## Thèmes du cours

- [[C - Thèmes clés de l'apprentissage statistique]]
## À venir (mentionnés, pas encore développés)

- Inférence approximative : échantillonnage, méthodes variationnelles
- Estimation : maximum d'entropie, appariement de moments
- Paradoxe de Borel-Kolmogorov (propriétés contre-intuitives du conditionnement continu)
- Conditions KKT (contraintes d'inégalité), dualité
- Algorithme somme-produit (propagation de croyances), arbre de jonction
- Mélange de gaussiennes et EM
- Échantillonnage de Gibbs, champ moyen (inférence approximative sur grilles)

## Exercices

- [[E - Exercice MLE Binomiale]]
- [[E - Exercice MLE Multinomiale]]
- [[E - Estimateur de Bayes sous perte quadratique]]
- [[E - Différentielles usuelles (forme quadratique et Mahalanobis)]]
- [[E - Élimination de variables sur un cycle à 4 nœuds]]
## MOC thématiques liés

- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]