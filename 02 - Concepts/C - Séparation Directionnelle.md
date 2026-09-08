---
type: concept
cours:
  - IFT6269
statut: à réviser
maj: 2026-09-08
---
## Intuition
Dans un [[A - Modèle Graphique Probabiliste|modèle graphique dirigé]], la structure du graphe permet de lire rapidement quelles variables interagissent directement (arête entre elles) et lesquelles n'interagissent qu'indirectement, via des variables intermédiaires. Par exemple, dans une chaîne $a\rightarrow b\rightarrow c$ où $a$ influence $b$ qui influence $c$ mais où $a$ et $c$ sont indépendantes sachant $b$. 

La d-séparation formalise et généralise cette lecture graphique de l'indépendance conditionnelle à des graphes arbitraires.

# Définition formelle

Deux événements X et Y sont d-séparés sachant l'évidence E si chaque chemin non orienté entre eux est bloqué par un des éléments suivants :
- Un noeud $z \in E$ sur le chemin ayant une arête entrante et une autre sortante.
- Un noeud $z \in E$ sur le chemin ayant deux arêtes sortantes
- Un noeud $z \notin E$ sur le chemin ayant deux arêtes entrantes ou l'un de ses descendants

Si $X$ et $Y$ sont d-séparés sachant $E$ alors $X\perp\!\!\!\perp Y|E$ dans toute distribution factorisée selon ce graphe.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[C - Indépendance Conditionnelle]]
- [[C - Couverture de Markov]]