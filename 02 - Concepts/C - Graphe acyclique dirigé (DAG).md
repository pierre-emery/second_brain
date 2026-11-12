---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Un **DAG** (*directed acyclic graph*) est un [[C - Graphe dirigé et non dirigé|graphe dirigé]] **sans cycle**.

**Ordre topologique.** Un ordre $I:V\to\{1,\dots,n\}$ est topologique pour $G$ ssi (1) $I$ est bijectif et (2) $a\in\pi_b\Rightarrow I(a)<I(b)$.
En rangeant les nœuds selon $I$, chaque parent apparaît **avant** son enfant : toutes les flèches « pointent vers la droite », il n'y a aucune arête arrière.

**Caractérisation** : $G$ est un DAG $\iff$ $G$ admet un ordre topologique → [[T - Caractérisation des DAG par ordre topologique]].

## Exemple

$E=\{(1,2),(2,4),(1,3),(3,4),(3,5)\}$ : l'ordre $1,2,3,4,5$ est déjà topologique.

## Rôle dans IFT6269

Le graphe sous-jacent d'un [[M - Modèle Graphique Dirigé (DGM)|modèle graphique dirigé]] (réseau bayésien) doit être un DAG ; l'ordre topologique sert dans presque toutes les preuves (chaîne de probabilité, propriété de Markov locale, [[T - Renversement d'arête couverte|renversement d'arête]]).

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Qu'est-ce qu'un DAG ?::Un graphe dirigé sans cycle.

Définition d'un ordre topologique ?::Une bijection $I:V\to\{1..n\}$ telle que $a\in\pi_b\Rightarrow I(a)<I(b)$ : les parents avant les enfants.

Pourquoi un modèle graphique dirigé exige-t-il un graphe acyclique ?::Avec un cycle, aucun ordre ne place les parents avant les enfants : le produit $\prod_ip(x_i\mid x_{\pi_i})$ ne correspond plus à une règle de la chaîne valide et n'a pas de garantie d'être normalisé.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Graphe dirigé et non dirigé]]
- [[T - Caractérisation des DAG par ordre topologique]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[M - Réseaux de croyances bayésiens (BBN)]]
