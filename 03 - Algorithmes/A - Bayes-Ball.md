---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

Algorithme intuitif d'**accessibilité** (*reachability*) pour lire toutes les indépendances conditionnelles d'un DAG via la [[C - Séparation Directionnelle|d-séparation]]. Pour tester $X\perp\!\!\!\perp Z\mid Y$ : poser une balle sur chaque nœud de $X$, la laisser rebondir selon des règles locales ; si **aucune** balle n'atteint $Z$, alors $X\perp\!\!\!\perp Z\mid Y$ (sinon, pas garanti). Les balles implémentent les règles de blocage de la d-séparation et peuvent voyager **dans les deux sens** le long des arêtes.

## Algorithme (étapes) : règles des trois structures

Le nœud du milieu est $Y$ (ombragé = observé).

| Structure | $Y$ **non** observé | $Y$ **observé** |
|---|---|---|
| Chaîne $X\to Y\to Z$ | passe | **bloquée** |
| Deux enfants (fourche) $X\leftarrow Y\to Z$ | passe | **bloquée** |
| V-structure $X\to Y\leftarrow Z$ | **bloquée** | passe |

Mnémotechnique : chaîne et fourche se comportent « normalement » (observer bloque), la V-structure à l'envers (observer — elle ou un descendant — ouvre : [[C - Explication mutuelle (explaining away)|explaining away]]).

## Complexité

Linéaire en la taille du graphe, $O(|V|+|E|)$ (parcours de graphe avec états).

## Exemple

- Chaîne de Markov $X_1\to X_2\to\dots\to X_T$ : observer le présent $X_t$ bloque toute balle partant du passé → futur $\perp\!\!\!\perp$ passé sachant présent, immédiatement.
- [[M - Modèle de Markov Caché (HMM)|HMM]] : sachant l'état caché $Z_t$, les observations passées et futures sont séparées.

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Bayes-Ball : comment tester $X\perp\!\!\!\perp Z\mid Y$ ?::Lancer des balles depuis $X$ ; si aucune n'atteint $Z$ en suivant les règles de blocage, l'indépendance tient.

Règle Bayes-Ball pour une chaîne ou une fourche ?::La balle passe si le nœud du milieu est non observé, elle est bloquée s'il est observé.

Règle Bayes-Ball pour une V-structure ?::Bloquée si le nœud du milieu (et ses descendants) n'est pas observé ; passe s'il est observé.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Séparation Directionnelle]]
- [[C - Structures canoniques à trois nœuds]]
- [[M - Modèle Graphique Dirigé (DGM)]]
