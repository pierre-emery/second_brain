---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
Une couverture de Markov d'un noeud inclut ses parents, enfants et co-parents. Sachant sa couverture de Markov, un noeud est indépendant du reste du réseau.

## Définition (IFT6269, lecture 12)

La **couverture de Markov** (*Markov blanket*) de $i$ est le plus petit ensemble $M$ tel que
$$X_i\perp\!\!\!\perp X_{V\setminus(M\cup\{i\})}\mid X_M .$$

| Modèle | Couverture de Markov de $i$ |
|---|---|
| UGM | les **voisins** : $M=N(i)=\{j:\{i,j\}\in E\}$ |
| DGM | **parents + enfants + parents des enfants** (co-parents) : $M=\pi_i\cup\mathrm{ch}(i)\cup\bigcup_{j\in\mathrm{ch}(i)}\pi_j$ |

Pourquoi les co-parents dans un DGM ? À cause de l'[[C - Explication mutuelle (explaining away)|explaining away]] : sachant un enfant $j$, $i$ et les autres parents de $j$ deviennent dépendants. C'est aussi la clique créée par la [[C - Moralisation|moralisation]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Comparaison DGM vs UGM]]
- [[C - Moralisation]]
- [[C - Explication mutuelle (explaining away)]]

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Définition de la couverture de Markov de $i$ ?::Le plus petit ensemble $M$ tel que $X_i\perp\!\!\!\perp X_{\text{reste}}\mid X_M$.

Couverture de Markov dans un UGM ?::Les voisins de $i$.

Couverture de Markov dans un DGM ?::Parents, enfants et parents des enfants (co-parents).
