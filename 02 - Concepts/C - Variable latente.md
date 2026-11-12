---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Définition

Une **variable latente** est une variable aléatoire du modèle qui n'est **jamais observée**. En apprentissage non supervisé, on n'a pas d'étiquettes ; on peut supposer qu'à chaque donnée $X_i$ correspond une variable cachée $Z_i$ (ex. le **groupe** / *cluster* d'où provient $X_i$), et chercher à l'inférer.

## Deux vues des données non étiquetées

| Vue | Modèle graphique | Idée |
|---|---|---|
| **Distribution de mélange** | $X_i$ seul (plaque $i=1..n$) | $p(x)$ est un mélange de composantes (ex. deux gaussiennes) |
| **Variable latente** | $Z_i\to X_i$ (plaque), $Z_i$ non ombragé | on explicite l'appartenance $Z_i$ de chaque point à un groupe |

Les deux décrivent la même $p(x)$ (on marginalise $Z$), mais la vue latente expose la **structure** (les groupes) qu'on veut apprendre. Le cours adopte la vue latente.

## Exemples

- [[A - K-Means]] : $z_{i,k}$ = indicatrice « $x_i$ appartient au groupe $k$ » (assignation dure).
- [[M - Mélange de gaussiennes (GMM)|Mélange de gaussiennes]] : assignation probabiliste ; l'[[A - Algorithme EM (espérance-maximisation)|EM]] calcule $p(z\mid x)$ à l'étape E (voir [[C - Inférence dans les modèles graphiques]]).
- [[M - Modèle de Markov Caché (HMM)|HMM]] : états cachés.

## MLE avec variables latentes

$\log p(x;\theta)=\sum_i\log\sum_{z_i}p(x_i,z_i;\theta)$ : le log d'une somme rend l'objectif multimodal et non concave. Options : montée de gradient sur cet objectif non concave, ou [[A - Algorithme EM (espérance-maximisation)|EM]], qui maximise l'[[C - Borne inférieure de la log-vraisemblance (ELBO)|ELBO]].

## Flashcards

#flashcards/IFT6269/10-non-supervise

Qu'est-ce qu'une variable latente ?::Une variable du modèle qui n'est jamais observée (ex. le groupe d'origine $Z_i$ d'une donnée $X_i$).

Deux vues des données non étiquetées ?::Distribution de mélange ($p(x)$ mélange de composantes) ou modèle à variables latentes ($Z_i\to X_i$, on explicite l'assignation).

Dans K-Means, quelle est la variable latente ?::Les indicatrices $z_{i,k}$ d'appartenance de $x_i$ au groupe $k$ (assignation dure), jamais observées.

Pourquoi le MLE est-il difficile avec des variables latentes ?::$\log p(x;\theta)=\sum_i\log\sum_{z_i}p(x_i,z_i;\theta)$ : le log d'une somme donne un objectif multimodal et non concave.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[C - Notation en plaques]]
- [[A - K-Means]]
- [[C - Méthode des moments]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[M - Mélange de gaussiennes (GMM)]]
- [[C - Borne inférieure de la log-vraisemblance (ELBO)]]
