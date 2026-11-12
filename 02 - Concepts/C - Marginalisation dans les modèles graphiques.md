---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Question : si on marginalise une variable de **toutes** les distributions d'un modèle graphique, obtient-on encore un modèle graphique (sur un graphe plus petit) ?
## DGM : pas clos en général

- Marginaliser une **feuille** : oui, on obtient le DGM du sous-graphe $G-\{n\}$ → [[T - Propriété d'élagage des feuilles]].
- Marginaliser un nœud **interne** : l'ensemble des marginales peut **ne pas être représentable** par un DGM.
## UGM : clos

Si $p\in\mathcal L(G)$ (UGM), alors $p(x_1,\dots,x_{n-1})$ se factorise dans le graphe $G'$ obtenu en **retirant le nœud $n$ et en reliant tous ses voisins entre eux** (ils forment une nouvelle clique) :
- $V'=V\setminus\{n\}$ ;
- $E'$ = arêtes de $G$ sans $n$ + toutes les arêtes entre voisins de $n$.

*Pourquoi* : $\sum_{x_n}\prod_{C\ni n}\psi_C(x_C)$ est une fonction des seuls voisins de $n$ → un nouveau potentiel sur la clique des voisins. C'est exactement l'étape de base de l'[[A - Élimination de variables|élimination de variables]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Dirigé (DGM)]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Propriété d'élagage des feuilles]]
- [[A - Élimination de variables]]
- [[C - Comparaison DGM vs UGM]]
## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Les DGM sont-ils clos sous marginalisation ?::Seulement pour les feuilles ; marginaliser un nœud interne peut donner un ensemble non représentable par un DGM.

Marginaliser le nœud $n$ d'un UGM : quel graphe obtient-on ?::On retire $n$ et on relie tous ses voisins entre eux (nouvelle clique).