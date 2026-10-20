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

#flashcards/IFT6269/00-modeles-graphiques

Chaîne $a \to b \to c$ : quelle indépendance conditionnelle tient ?::$a \perp\!\!\!\perp c \mid b$.

Trois façons dont un nœud $z$ bloque un chemin (d-séparation, évidence $E$) ?::(1) $z \in E$ avec une arête entrante et une sortante (chaîne) ; (2) $z \in E$ avec deux arêtes sortantes (fourche) ; (3) collision : $z$ a deux arêtes entrantes et ni $z$ ni ses descendants ne sont dans $E$.

Que garantit la d-séparation de $X$ et $Y$ sachant $E$ ?::$X \perp\!\!\!\perp Y \mid E$ dans toute distribution qui se factorise selon le graphe.

Pourquoi observer une collision (ou un descendant) débloque-t-il le chemin ?::« Explaining away » : connaître l'effet commun rend ses causes dépendantes.