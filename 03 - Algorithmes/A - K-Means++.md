---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Intuition

Schéma d'**initialisation** des centres du [[A - K-Means]] qui corrige un défaut théorique majeur : avec une initialisation quelconque, la solution peut être arbitrairement mauvaise par rapport à l'optimum. Idée : **bien étaler** les $K$ centres initiaux.

## Algorithme (étapes)

1. Choisir le premier centre **uniformément** parmi les points.
2. Pour chaque point $x_i$, calculer $D_{\mu_t}(x_i)$ = distance de $x_i$ au **centre le plus proche** déjà choisi.
3. Choisir un nouveau centre parmi les points avec probabilité **$\propto D_{\mu_t}(x_i)^2$**.
4. Répéter 2–3 jusqu'à avoir $K$ centres ; lancer ensuite K-Means standard.

## Complexité

$O(nKp)$ pour l'initialisation.

## Garantie

Avec cette initialisation, la solution est **$O(\log K)$-compétitive** par rapport à la solution K-Means optimale (en espérance / avec grande probabilité).

## Remarques

Arthur & Vassilvitskii (2007), *k-means++: the advantages of careful seeding*, SODA.

## Usage pour initialiser l'EM

L'initialisation est cruciale pour l'[[A - Algorithme EM (espérance-maximisation)|EM]] d'un [[M - Mélange de gaussiennes (GMM)|GMM]] : on prend les centres K-Means++ comme moyennes initiales $\mu^{(0)}_j$, les proportions des groupes comme $\pi^{(0)}_j$, et de larges covariances sphériques $\sigma^2I$.

## Flashcards

#flashcards/IFT6269/10-non-supervise

Comment K-Means++ choisit-il chaque nouveau centre ?::Au hasard parmi les points, avec probabilité $\propto D(x_i)^2$, le carré de la distance au centre le plus proche déjà choisi.

Garantie de K-Means++ ?::Solution $O(\log K)$-compétitive par rapport à l'optimum de K-Means.

Pourquoi tirer les centres avec probabilité $\propto D(x)^2$ plutôt qu'uniformément ?::Les points loin des centres déjà choisis ont plus de chances d'être pris : les centres initiaux s'étalent et couvrent les groupes, ce qui évite des solutions arbitrairement mauvaises.

À quoi sert K-Means++ pour un mélange de gaussiennes ?::À initialiser l'EM : moyennes $\mu_j^{(0)}$ et proportions $\pi_j^{(0)}$ prises des groupes de K-Means++.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[A - K-Means]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[M - Mélange de gaussiennes (GMM)]]
