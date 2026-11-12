---
type: exercice
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

UGM sur le cycle $1-2-4-3-1$ (arêtes $\{1,2\},\{1,3\},\{3,4\},\{2,4\}$) :
$$p(x_1,x_2,x_3,x_4)=\frac1Z\,\psi(x_1,x_2)\,\psi(x_1,x_3)\,\psi(x_3,x_4)\,\psi(x_2,x_4).$$
Calculer $p(x_4)$ par [[A - Élimination de variables|élimination de variables]] avec l'ordre $1\to2\to3$ (puis $4$ = requête).

## Solution

$$p(x_4)=\frac1Z\sum_{x_1,x_2,x_3}\psi(x_1,x_2)\psi(x_1,x_3)\psi(x_3,x_4)\psi(x_2,x_4)=\frac1Z\sum_{x_3}\psi(x_4,x_3)\sum_{x_2}\psi(x_2,x_4)\underbrace{\sum_{x_1}\psi(x_1,x_2)\psi(x_1,x_3)}_{m_1(x_2,x_3)}$$

1. **Éliminer $x_1$** : facteurs contenant $x_1$ : $\psi(x_1,x_2),\psi(x_1,x_3)$ → $m_1(x_2,x_3)$. $S_1=\{2,3\}$ : **nouvelle arête $2-3$** (corde).
$$p(x_4)=\frac1Z\sum_{x_3}\psi(x_4,x_3)\underbrace{\sum_{x_2}\psi(x_2,x_4)\,m_1(x_2,x_3)}_{m_2(x_3,x_4)}$$
2. **Éliminer $x_2$** : facteurs $\psi(x_2,x_4),m_1(x_2,x_3)$ → $m_2(x_3,x_4)$, $S_2=\{3,4\}$.
$$p(x_4)=\frac1Z\underbrace{\sum_{x_3}\psi(x_4,x_3)\,m_2(x_3,x_4)}_{m_3(x_4)}$$
3. **Éliminer $x_3$** : → $m_3(x_4)$.
$$\boxed{p(x_4)=\frac1Z\,m_3(x_4)},\qquad Z=\sum_{x_4}m_3(x_4).$$

**Lecture graphique** : les messages circulent $1\xrightarrow{m_1(x_2,x_3)}\cdot\xrightarrow{m_2(x_3,x_4)}3\xrightarrow{m_3(x_4)}4$ ; l'arête ajoutée $2-3$ rend le cycle **[[C - Graphe triangulé|triangulé]]**. Plus grande clique d'élimination $\{1,2,3\}$ : taille 3, donc largeur arborescente $\le 2$ (et $=2$ pour un cycle).

## Flashcards

#flashcards/IFT6269/13-inference

Cycle à 4 nœuds, ordre $1,2,3$ : premier message et arête ajoutée ?::$m_1(x_2,x_3)=\sum_{x_1}\psi(x_1,x_2)\psi(x_1,x_3)$ ; ajoute la corde $2-3$.

Comment obtient-on $Z$ à la fin de l'élimination pour $p(x_4)$ ?::$Z=\sum_{x_4}m_3(x_4)$, car $p(x_4)=m_3(x_4)/Z$.

Dans le cycle à 4 nœuds, pourquoi la plus grande clique d'élimination a-t-elle 3 nœuds, quel que soit l'ordre ?
?
Éliminer n'importe quel nœud relie ses deux voisins (non adjacents dans le cycle) : on crée une clique {nœud, voisin, voisin} de taille 3. La largeur arborescente d'un cycle vaut donc 2.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Élimination de variables]]
- [[C - Graphe triangulé]]
- [[C - Largeur arborescente (treewidth)]]
