---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Un graphe non dirigé admet un **arbre de jonction** (un arbre de cliques qui vérifie la propriété d'intersection courante) **si et seulement s'il est triangulé** (aussi appelé *décomposable*).

## Énoncé

$$\exists\ \text{arbre de jonction pour } G\iff G\ \text{est triangulé (décomposable)}.$$
Dans ce cas, pour toute $p$ qui se factorise sur $G$ :
$$p(x_V)=\frac{\prod_{C}p(x_C)}{\prod_{S}p(x_S)},$$
où $C$ parcourt les cliques (nœuds de l'arbre) et $S$ les séparateurs (arêtes de l'arbre).

## Hypothèses

$G$ non dirigé ; [[C - Graphe triangulé|triangulé]] = aucun cycle de longueur $\ge4$ sans corde.

## Preuve

Non faite en classe (résultat cité, théorème 16.1 des notes de 2020).

## Corollaires / Conséquences

- On peut toujours se ramener à ce cas : l'[[A - Élimination de variables|élimination de variables]] produit un graphe augmenté triangulé.
- L'[[A - Algorithme de l'arbre de jonction|algorithme de l'arbre de jonction]] s'applique donc à tout graphe, au prix de cliques plus grosses après triangulation.
- Cas particulier : un arbre est triangulé ; ses cliques sont les arêtes et ses séparateurs les nœuds, d'où la [[T - Reparamétrisation d'un UGM en arbre par ses marginales]].

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Quand un graphe admet-il un arbre de jonction ?::Si et seulement s'il est triangulé (décomposable).

Que devient la formule $\prod_Cp(x_C)/\prod_Sp(x_S)$ pour un arbre ?
?
Les cliques sont les arêtes $\{i,j\}$ et les séparateurs sont les nœuds, comptés autant de fois qu'ils séparent deux arêtes : on retrouve $p(x)=\prod_ip(x_i)\prod_{\{i,j\}}\frac{p(x_i,x_j)}{p(x_i)p(x_j)}$.

Comment rendre un graphe quelconque utilisable par l'arbre de jonction ?::Le trianguler, p. ex. avec le graphe augmenté de l'élimination de variables.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Algorithme de l'arbre de jonction]]
- [[C - Graphe triangulé]]
- [[T - Reparamétrisation d'un UGM en arbre par ses marginales]]
