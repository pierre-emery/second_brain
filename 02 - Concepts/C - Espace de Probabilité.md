---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: brouillon
maj: 2026-09-04
---
---


# Définition simple donnée en IFT6135

Triplet $(\Omega, \mathcal{F}, P)$ :

- $\Omega$ : espace des résultats possibles
- $\mathcal{F}$ : espace des événements possibles
- $P$ : mesure de probabilité, associe à un événement sa probabilité $[0,1]$

**Exemple** (lancer d'un dé) : $\Omega = {1,2,3,4,5,6}$, événement $e={1,5} \in \mathcal{F}$, $P({1,5}) = 2/6$.

**Propriétés (axiomes)** :

1. $P({\omega}) \geq 0\ \forall \omega \in \Omega$
2. $\sum_{\omega \in \Omega} P({\omega}) = 1$

# Notes supplémentaires de IFT6269

## Construction formelle

- $\Omega$ : l'**espace échantillon**, l'ensemble des « événements élémentaires » — les valeurs possibles de la variable aléatoire. Ex. pour un dé, $\Omega = {1,2,3,4,5,6}$.

![[C - Variable Aléatoire]]

![[C - Distribution de probabilité (axiomes de Kolmogorov)]]

## Pourquoi la théorie des probabilités?

Voir [[C - Sources d'incertitude]] pour la motivation : la probabilité est un cadre principié pour modéliser l'incertitude, qui peut venir de phénomènes intrinsèquement aléatoires, d'information partielle, ou d'une modélisation incomplète.

## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Variable Aléatoire]]
- [[C - Distribution de probabilité (axiomes de Kolmogorov)]]
- [[C - Fonction de masse et de densité (pmf-pdf)]]
- [[C - Fonction de répartition (CDF)]]
- [[C - Distribution jointe et marginale]]
- [[C - Sources d'incertitude]]