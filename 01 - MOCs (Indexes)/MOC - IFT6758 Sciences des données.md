---
cours: IFT6758
session: Bac
maj: 2026-08-06
---

> Cours croisé IFT3700 (Bacc.) / IFT6758 (Maîtrise) — "Science des données", Vincent Taboga (Mila), basé sur les cours de Gauthier Gidel et Glen Berseth.

## Notes du cours, par thème (auto)

```dataview
TABLE type AS "Type", statut AS "Statut"
FROM ""
WHERE type != "moc-cours" AND cours AND contains(cours, this.cours)
SORT type ASC, file.name ASC
```

## Notes incomplètes (auto)

```dataview
LIST
FROM ""
WHERE type != "moc-cours" AND statut AND statut != "complet" AND cours AND contains(cours, this.cours)
```

## Fondations de la science des données

- [[C - Science des données]]

## Cadre de l'apprentissage

- [[C - Apprentissage Statistique (définition)]]
- [[C - Apprentissage supervisée]]
- [[C - Apprentissage non-supervisée]]

## Prétraitement & ingénierie de caractéristiques

- [[C - Prétraitement des données]]
- [[C - Ingénierie de Caractéristiques]]

## Sélection, entraînement et évaluation de modèles

- [[C - Sélection de modèle]]
- [[C - Hyperparamètres]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Sous-apprentissage]]
- [[C - Surapprentissage]]
- [[C - Principe de parcimonie]]
- [[C - Validation croisée]]
- [[C - Test d'hypothèse]]
- [[C - Risque]]
- [[C - Risque Empirique]]
- [[C - Erreur de généralisation]]
- [[C - Fonction de perte]]
- [[C - Perte 0-1]]
- [[C - Perte quadratique (MSE)]]
- [[C - Perte Vraisemblance]]
- [[C - Vraisemblance]]

## Visualisation & exploration

- [[C - Data Exploration]]
- [[C - Visualisation]]

## Éthique & biais

- [[C - Biais Algorithmiques]]

## MLOps & mise à l'échelle

- [[C - MLOps]]

## Tâches de ML couvertes

- [[C - Classification]]
- [[C - Régression]]
- [[C - Clustering]]
- [[C - Réduction de dimensions]]

## Modèles classiques d'apprentissage supervisé

- [[A - Régression Linéaire]]
- [[A - Régression Polynomiale]]
- [[C - Classification Linéaire]]
- [[C - Neurones Artificiels]]
- [[C - Fonction d'activation]]
- [[A - Réseau de neurones]]
- [[A - Régression Logistique (Binaire)]]
- [[A - Régression Logistique (Multiclasse)]]
- [[A - Arbre de décision]]
- [[A - Forêt Aléatoire]]

## À venir (mentionnés, pas encore développés)

- Word2Vec, n-grammes, SVD (représentations de texte)
- Plongement de graphes (similarité de noeuds, marche aléatoire)

## MOC thématiques liés

- [[MOC - Évaluation & généralisation]]
- [[MOC - Modèles ML (supervisé)]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[MOC - Programmation pour le ML]]