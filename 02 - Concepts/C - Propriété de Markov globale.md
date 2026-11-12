---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

$p$ satisfait la **propriété de Markov globale** par rapport à un graphe non dirigé $G$ ssi
$$\forall\ A,B,S\subseteq V\ \text{disjoints tels que } S \text{ sépare } A \text{ de } B \text{ dans } G:\quad X_A\perp\!\!\!\perp X_B\mid X_S .$$
« $S$ sépare $A$ de $B$ » : **tout chemin** de $A$ à $B$ passe par $S$.

## Intuition

Dans un UGM, l'indépendance conditionnelle se lit par **séparation simple** dans le graphe : observer $S$ « coupe » le graphe. Beaucoup plus simple que la [[C - Séparation Directionnelle|d-séparation]] des DGM (pas de V-structures).

## Propriétés

- Factorisation UGM ⇒ Markov global : [[T - La factorisation UGM implique la propriété de Markov globale]].
- Réciproque vraie si $p>0$ : [[T - Théorème de Hammersley-Clifford]]. Fausse en général (devoir 3).
- Cas particulier : la [[C - Couverture de Markov|couverture de Markov]] d'un nœud = ses voisins.

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Propriété de Markov globale (UGM) ?::Pour tous $A,B,S$ disjoints avec $S$ qui sépare $A$ de $B$ dans $G$ : $X_A\perp\!\!\!\perp X_B\mid X_S$.

Que signifie « $S$ sépare $A$ de $B$ » ?::Tout chemin de $A$ à $B$ passe par $S$.

Pourquoi la séparation simple suffit-elle dans un UGM mais pas dans un DGM ?::Un UGM n'a pas de V-structures : observer un nœud bloque toujours les chemins qui y passent. Dans un DGM, observer l'enfant commun d'une V-structure ouvre un chemin (explaining away), d'où la d-séparation.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Non-dirigé]]
- [[C - Indépendance Conditionnelle]]
- [[T - Théorème de Hammersley-Clifford]]
