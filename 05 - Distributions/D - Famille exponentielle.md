---
type: distribution
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Famille de distributions de la forme
$$p(x\mid\eta)=h(x)\,\exp\big(\eta^\top T(x)-A(\eta)\big)$$
- $\eta$ : **paramètre canonique** (naturel)
- $T(x)$ : **statistique suffisante**
- $A(\eta)$ : **log-partition** (normalisation), $A(\eta)=\log\int h(x)e^{\eta^\top T(x)}dx$
- $h(x)$ : mesure de base

L'exposant est **linéaire en $\eta$ et en $T(x)$**. Une grande partie des lois usuelles en sont des cas particuliers ([[D - Bernoulli|Bernoulli]], [[D - Loi Gaussienne (Normale)|gaussienne]], [[D - Loi de Poisson|Poisson]], [[D - Multinomiale (et Multinoulli)|multinomiale]], [[D - Gamma|Gamma]], [[D - Beta|Beta]]…).

> Sujet traité en détail plus tard dans le cours : note à compléter.

## Apparitions jusqu'ici dans IFT6269

- Classes conditionnelles dans la famille exponentielle ⇒ $p(y\mid x)$ est **logistique** → [[T - Classes conditionnelles exponentielles et régression logistique]].
- Pour la gaussienne, l'estimateur des [[C - Méthode des moments|moments]] coïncide avec le MLE (propriété générale de la famille exponentielle).
- Un [[M - Modèle Graphique Non-dirigé|UGM]] à potentiels strictement positifs est une famille exponentielle (énergie = $\sum_C\log\psi_C$).

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Forme générale de la famille exponentielle ?::$p(x\mid\eta)=h(x)\exp(\eta^\top T(x)-A(\eta))$.

Nommer $\eta$, $T(x)$, $A(\eta)$ dans la famille exponentielle.::Paramètre canonique, statistique suffisante, fonction de log-partition.

Pourquoi un UGM à potentiels strictement positifs est-il une famille exponentielle ?::$p(x)=\exp\{\sum_C\log\psi_C(x_C)-\log Z\}$ : l'exposant est une somme (énergie négative), linéaire en des paramètres $\theta_C$ et des statistiques $T_C(x_C)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
- [[C - Méthode des moments]]
- [[M - Modèle Graphique Non-dirigé]]
