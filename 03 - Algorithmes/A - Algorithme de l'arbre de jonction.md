---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Généralisation de l'[[A - Algorithme somme-produit (propagation de croyances)|algorithme somme-produit]] aux graphes **triangulés** quelconques : on fait passer des messages non plus entre nœuds, mais entre **cliques** organisées en un **arbre de jonction** (*junction tree*). À la fin, on obtient les marginales exactes de chaque clique $p(x_C)$ et de chaque séparateur $p(x_S)$.
$$p(x_V)=\frac{\prod_C p(x_C)}{\prod_S p(x_S)}$$

## Intuition

SPA est exact sur les arbres. Si le graphe a des cycles, on regroupe les nœuds en « super-nœuds » (les cliques) de façon à ce que le graphe des cliques soit un **arbre**, puis on applique la même idée. Le prix : chaque message porte sur un **séparateur** (intersection de deux cliques), donc le coût est exponentiel en la taille des cliques, i.e. en la [[C - Largeur arborescente (treewidth)|largeur arborescente]].

## Formalisme / Dérivation

**Arbre de cliques et propriété d'intersection courante.** Un arbre dont les nœuds sont les cliques maximales a la *running intersection property* si :
$$j\in C_1\cap C_2\ \Longrightarrow\ j\in C_k\ \text{ pour toute clique } C_k \text{ sur le chemin de } C_1 \text{ à } C_2.$$
Un arbre de cliques qui vérifie cette propriété est un **arbre de jonction**. Les **séparateurs** sont les intersections $S=C_i\cap C_j$ des cliques voisines.

**Existence** : un arbre de jonction existe **ssi** le graphe est triangulé → [[T - Arbre de jonction et graphes triangulés]]. On peut toujours trianguler un graphe en lançant l'[[A - Élimination de variables|élimination de variables]] (le graphe augmenté est triangulé).

**Construction.** Former le **graphe des cliques** (une arête entre chaque paire de cliques qui partagent au moins un nœud, pondérée par la taille du séparateur), puis prendre un **arbre couvrant de poids maximal**. Cet arbre a la propriété d'intersection courante : c'est un arbre de jonction.

## Algorithme (étapes)

1. Écrire la distribution sous forme d'arbre de jonction :
$$p(x_V)=\frac1Z\frac{\prod_C\psi_C(x_C)}{\prod_S\varphi_S(x_S)},\qquad\varphi_S(x_S)=1\ \text{à l'initialisation}.$$
2. Faire passer des messages sur l'arbre de jonction, qui mettent à jour $\psi_C^{\text{new}}$ et $\varphi_S^{\text{new}}$.
3. Répéter l'étape 2 jusqu'à convergence (collecte puis distribution suffisent sur un arbre).

À la fin : $\psi_C^{\text{new}}\propto p(x_C)$ et $\varphi_S^{\text{new}}\propto p(x_S)$.

## Exemple (fig. 16.9 des notes, 2020)

Graphe triangulé à 6 nœuds, cliques $A=\{1,2,3\}$, $B=\{2,3,4\}$, $C=\{3,4,5\}$, $D=\{4,5,6\}$. Arbre de jonction : la chaîne $A-B-C-D$ avec séparateurs $\{2,3\}$, $\{3,4\}$, $\{4,5\}$ (poids 2). Les arêtes $A-C$ (séparateur $\{3\}$) et $B-D$ (séparateur $\{4\}$) existent dans le graphe des cliques mais ont un poids 1 : l'arbre couvrant de poids maximal les écarte.

## Complexité

Exponentielle en la taille de la plus grande clique : $O\big(\#\text{cliques}\cdot k^{\max_C|C|}\big)$, soit $\approx k^{\mathrm{tw}+1}$ par clique avec une bonne triangulation.

## Avantages / Limites

**Avantages** : inférence **exacte** sur n'importe quel graphe ; toutes les marginales de cliques d'un coup.

**Limites** : trouver la meilleure triangulation est NP-difficile ; intractable si la largeur arborescente est grande (ex. grilles) → inférence approximative.

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Qu'est-ce que la propriété d'intersection courante (running intersection) ?::Si un nœud $j$ est dans deux cliques $C_1$ et $C_2$, il est dans toutes les cliques du chemin entre $C_1$ et $C_2$ dans l'arbre.

Comment construire un arbre de jonction à partir d'un graphe triangulé ?::Former le graphe des cliques, pondérer chaque arête par la taille du séparateur, et prendre un arbre couvrant de poids maximal.

Factorisation d'une distribution sur un arbre de jonction ?::$p(x_V)=\prod_Cp(x_C)/\prod_Sp(x_S)$ (cliques au numérateur, séparateurs au dénominateur).

Pourquoi l'algorithme de l'arbre de jonction reste-t-il exponentiel ?::Les messages portent sur les séparateurs et les potentiels sur les cliques : le coût croît comme $k^{\text{taille de la plus grande clique}}$, donc exponentiellement en la largeur arborescente.

Que faire si le graphe n'est pas triangulé ?::Le trianguler d'abord, p. ex. en lançant l'élimination de variables (le graphe augmenté est triangulé), puis construire l'arbre de jonction.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[T - Arbre de jonction et graphes triangulés]]
- [[C - Graphe triangulé]]
- [[C - Clique (graphe)]]
- [[C - Largeur arborescente (treewidth)]]
- [[A - Élimination de variables]]
