---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Pour un DAG $G$, le **graphe moralisé** $\bar G$ est le graphe non dirigé sur les mêmes sommets avec
$$\bar E=\underbrace{\{\{i,j\}:(i,j)\in E\}}_{\text{version non dirigée de }E}\ \cup\ \underbrace{\{\{k,l\}:\ k\ne l\in\pi_i\ \text{pour un } i\}}_{\text{« moralisation »}}.$$
En mots : on oublie l'orientation et on **relie tous les parents d'un même nœud** (on fait de $\{i\}\cup\pi_i$ une clique). On n'ajoute des arêtes que si $|\pi_i|>1$, i.e. en présence de **V-structures**.

*Terminologie* : on « marie » les parents, ce qui rend la famille « morale » (d'un point de vue chrétien traditionnel).

## Propriétés

- $\mathcal L(G)\subseteq\mathcal L(\bar G)$ : chaque facteur $p(x_i\mid x_{\pi_i})$ devient un potentiel sur la clique $C_i=\{i\}\cup\pi_i$, avec $Z=1$.
- $\bar G$ est le **plus petit** graphe non dirigé tel que $\mathcal L(G)\subseteq\mathcal L(\bar G)$.
- **Sans V-structure** (forêt dirigée) : $\mathcal L(G)=\mathcal L(\bar G)$. En général seulement l'inclusion (preuve : devoir).
- On **perd l'indépendance marginale des parents** ($X\perp\!\!\!\perp Y$ dans $X\to Z\leftarrow Y$ n'est plus lisible dans $\bar G$).
- Sert à appliquer aux DGM les algorithmes d'inférence écrits pour les UGM ([[A - Élimination de variables]]).

## Exemple

$X\to Z\leftarrow Y$ moralisé donne le triangle non dirigé $\{X,Y,Z\}$ : les arêtes $X-Z$, $Y-Z$ et l'arête « morale » $X-Y$.

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Comment moralise-t-on un DAG ?::On enlève l'orientation des arêtes et on relie deux à deux tous les parents de chaque nœud.

Relation entre $\mathcal L(G)$ et $\mathcal L(\bar G)$ ?::$\mathcal L(G)\subseteq\mathcal L(\bar G)$ en général, avec égalité s'il n'y a pas de V-structure.

Que perd-on en moralisant ?::L'indépendance marginale des parents d'une V-structure.

Potentiels de l'UGM moralisé d'un DGM ?::$\psi_{C_i}(x_{C_i})=p(x_i\mid x_{\pi_i})$ sur $C_i=\{i\}\cup\pi_i$, avec $Z=1$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Comparaison DGM vs UGM]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[M - Modèle Graphique Non-dirigé]]
- [[C - Explication mutuelle (explaining away)]]
- [[C - Couverture de Markov]]
