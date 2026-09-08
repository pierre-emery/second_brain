---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-09-07
---

Les trois grands axes autour desquels s'organise le cours (et plus largement, la modélisation probabiliste en science des données) :

## I. Représentation (côté probabilité)

Comment représenter une distribution de probabilité **structurée**?

- **Graphe → factorisation** : voir [[C - Factorisation d'une distribution jointe]] — chaque facteur/clique du graphe réduit le nombre de paramètres nécessaires.
- **Paramétrisation** : table complète (« full table ») vs. **famille exponentielle**.

## II. Estimation (côté statistique)

Étant données des données, comment apprendre/estimer les paramètres de la distribution?

- Relié à l'**apprentissage** : ex. maximum de vraisemblance (MLE), maximum d'entropie, appariement de moments (moment matching).

## III. Inférence (« probabilistic inference », côté informatique)

Répondre à des questions sur les données : calculer des distributions **conditionnelles** $p(y\mid x)$ ou **marginales** $p(x)$ — c'est-à-dire « interroger » une observation.

- Relié au **calcul efficace** : ex. [[A - Passation de Messages|passation de messages]] (message passing).
- Pour les cas où le calcul exact devient intraitable : **inférence approximative** — échantillonnage (sampling) ou méthodes variationnelles.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Modèle Graphique Probabiliste]]
- [[C - Factorisation d'une distribution jointe]]
- [[A - Passation de Messages]]
- [[C - Sources d'incertitude]]