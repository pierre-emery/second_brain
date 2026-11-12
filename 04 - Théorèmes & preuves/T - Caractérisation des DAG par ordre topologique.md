---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Un graphe dirigé $G$ est un [[C - Graphe acyclique dirigé (DAG)|DAG]] $\iff$ $G$ admet un ordre topologique.

## Preuve

**(⇒)** Faire un parcours en profondeur (DFS) sur $G$ et numéroter les nœuds **en ordre décroissant** au moment où l'on a épuisé leurs enfants (fin de visite). Comme il n'y a pas de cycle, on trouve toujours des nœuds sans enfant restant à visiter, et un nœud reçoit toujours son numéro après tous ses descendants → chaque parent a un numéro plus petit que ses enfants. On obtient un ordre topologique en $O(|V|+|E|)$.

**(⇐)** (trivial) Avec un ordre topologique, toutes les arêtes vont d'un petit indice vers un plus grand : il n'y a aucune arête arrière, donc aucun cycle (un cycle exigerait de revenir à un indice plus petit). $\blacksquare$

## Corollaires / Conséquences

- Tout DAG a au moins une **feuille** (nœud sans enfant) : le dernier dans l'ordre topologique. Utilisé par la [[T - Propriété d'élagage des feuilles]].
- Algorithme de tri topologique en temps linéaire.

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Caractérisation des DAG ?::$G$ est un DAG ssi il admet un ordre topologique.

Comment construire un ordre topologique d'un DAG ?::DFS : numéroter les nœuds en ordre décroissant quand on a fini de visiter leurs enfants ; $O(|V|+|E|)$.

Pourquoi un graphe muni d'un ordre topologique ne peut-il pas contenir de cycle ?::Toutes les arêtes vont d'un indice plus petit vers un plus grand ; un cycle exigerait au moins une arête qui revient vers un indice plus petit.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Graphe acyclique dirigé (DAG)]]
- [[C - Graphe dirigé et non dirigé]]
