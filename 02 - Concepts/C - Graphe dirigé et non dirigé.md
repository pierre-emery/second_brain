---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

**Graphe dirigé** $G=(V,E)$ : sommets $V=\{1,\dots,n\}$ et arêtes $E\subseteq V\times V$, ensemble de **paires ordonnées** de sommets distincts : $E=\{(i,j)\mid i,j\in V,\ i\ne j\}$. Pas de boucle $(i,i)$.

**Graphe non dirigé** : $E$ est un ensemble de **paires non ordonnées** (2-ensembles) $\{i,j\}$, $i\ne j$ ; donc $\{i,j\}=\{j,i\}$ et $|e|=2$ pour toute arête.
## Vocabulaire

| Notion                  | Dirigé                                                                                               | Non dirigé                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Chemin** de $i$ à $j$ | suite $(i,v_1,\dots,v_k,j)$, $k\ge0$, avec $(i,v_1),\dots,(v_k,j)\in E$ ; noté $i\rightsquigarrow j$ | même chose avec $\{i,v_1\},\dots,\{v_k,j\}\in E$ |
| Relations locales       | **parents** $\pi_i=\{j:(j,i)\in E\}$ ; **enfants** $\mathrm{ch}(k)=\{\ell:(k,\ell)\in E\}$           | **voisins** $N(i)=\{j:\{i,j\}\in E\}$            |

Un chemin peut aussi être vu comme la suite de ses arêtes.

**Cycle** : suite $v_1,\dots,v_k,v_1$ de nœuds distincts ($v_1\ne v_k$) avec une arête (dirigée / non dirigée) de $v_i$ à $v_{i+1}$ pour tout $i<k$ et de $v_k$ à $v_1$. Équivalent : un chemin de $v$ à $v$ pour un certain $v$.

Un graphe dirigé sans cycle est un [[G - Graphes Acycliques Directs (DAG)|DAG]].
## Exemple

$V=\{1,\dots,5\}$, $E=\{(1,2),(2,4),(1,3),(3,4),(3,5)\}$ : DAG ; parent de 2 = $\{1\}$, enfants de 3 = $\{4,5\}$, chemin dirigé $1\to3\to4$. Sa version non dirigée contient le cycle $1-3-4-2-1$ ; voisins de 4 = $\{2,3\}$.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[G - Graphes Acycliques Directs (DAG)]]
- [[C - Clique (graphe)]]
- [[C - Matrice d'Adjacence]]
- [[A - Modèle Graphique Dirigé (DGM)]]
- [[A - Modèle Graphique Non-dirigé]]

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Arêtes d'un graphe dirigé vs non dirigé ?::Dirigé : paires ordonnées $(i,j)$. Non dirigé : 2-ensembles $\{i,j\}$ ($\{i,j\}=\{j,i\}$). Pas de boucles.

Parents, enfants, voisins : définitions ?::$\pi_i=\{j:(j,i)\in E\}$ ; $\mathrm{ch}(k)=\{\ell:(k,\ell)\in E\}$ ; $N(i)=\{j:\{i,j\}\in E\}$ (non dirigé).

Qu'est-ce qu'un cycle ?::Une suite de nœuds distincts $v_1,\dots,v_k$ reliés successivement, plus une arête de $v_k$ à $v_1$ (un chemin de $v$ à $v$).