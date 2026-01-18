Il faut considérer: 
- $G = (N,E)$ un [[G - Graphe Orientié]]
- $N$ un ensemble de noeuds
- $E$ un ensemble des arcs
- Ou un arc $e = (i,j)$ représente une liaison de $i$ vers $j$ avec $i \in N, j \in N$ 
Maintenant $\forall e \in E$ on note $x_e$ le flot circulant sur l'arc.
Et $\forall e \in E$ on note $c_e$ la capacité de l'arc.

## [[C - Fonction Objective]]
Objectif: maximiser le flot d'une source $S$ à un puit $T$.
Équivalent à maximiser le flot sortant de la source $S$

On peut donc écrire l'objectif comme 
$$max \sum_{e \text{ sortant de S}}x_e$$
ou bien une alternative équivalente est :
$$max \sum_{(S,j)\in E}x_{Sj}-\sum_{(i,S)\in E}x_{iS}$$ (à utiliser quand on a des arcs entrants dans S)
## [C - Contraintes]]
la fonction objective est sujet aux contraintes:
1. $x_e \leq c_e, \forall e\in E$
2. $\sum_{(i,j)\in E}x_{ij}=\sum_{(j,i)\in E}x_{ji}, \forall j \in N\\ \{S,T\}$ 
3. $x_e \geq 0, \forall e \in E$ 
qu'on interprète comme 1. Le flot doit respecter la capacité de l'arc et 2. le flot entrant est égal au flot sortant à chaque noeud. Sauf à la source $S$ et au puit $T$.

Le problème de flot maximum est pareil au problème de [[C - Coupe Minimale]].