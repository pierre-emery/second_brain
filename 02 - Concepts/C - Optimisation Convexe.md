---
type: concept
cours:
  - IFT6135
statut: à réviser
maj: 2026-09-08
---
Domaine de l'optimisation spécialisé qui offre de fortes garanties de convergence, mais seulement pour une famille restreinte de fonctions : les fonctions **convexes**, dont la [[C - Matrice Hessienne|Hessienne]] est semi-définie positive partout.

## Pourquoi c'est un cas facile

Les fonctions convexes sont particulièrement bien comportées :

- Elles n'ont **pas de point-selle**.
- Tout minimum local est nécessairement un **minimum global**.

## Pertinence en deep learning

La plupart des problèmes rencontrés en deep learning sont difficiles à formuler comme des problèmes d'optimisation convexe. Les réseaux de neurones donnent typiquement lieu à des fonctions de perte non convexes, avec de nombreux points-selles et minima locaux. L'optimisation convexe n'est donc utilisée qu'en sous-routine de certains algorithmes de deep learning, mais les idées de son analyse restent utiles pour démontrer la convergence de certains algorithmes.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice Hessienne]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[C - Continuité de Lipschitz]]