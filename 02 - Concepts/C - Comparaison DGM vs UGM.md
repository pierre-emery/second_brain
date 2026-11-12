---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Tableau récapitulatif

|                                                                          | [[A - Modèle Graphique Dirigé (DGM)\|Modèle dirigé (DGM)]]                                                      | [[A - Modèle Graphique Non-dirigé\|Modèle non dirigé (UGM)]]                        |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Factorisation**                                                        | $p(x)=\prod_{i=1}^np(x_i\mid x_{\pi_i})$                                                                        | $p(x)=\frac1Z\prod_{C\in\mathcal C}\psi_C(x_C)$                                     |
| **Facteurs**                                                             | conditionnelles normalisées ($Z=1$)                                                                             | potentiels $\ge0$ quelconques                                                       |
| **Indépendances**                                                        | [[C - Séparation Directionnelle\|d-séparation]] ; $X_i\perp\!\!\!\perp X_{\mathrm{nd}(i)}\mid X_{\pi_i}$ ; etc. | [[C - Propriété de Markov globale\|séparation]] : $X_A\perp\!\!\!\perp X_B\mid X_S$ |
| **[[C - Couverture de Markov\|Couverture de Markov]]**                   | parents + enfants + co-parents                                                                                  | voisins                                                                             |
| **[[C - Marginalisation dans les modèles graphiques\|Marginalisation]]** | non close en général (close pour les feuilles)                                                                  | close (relier les voisins)                                                          |
| **Ne capture pas exactement**                                            | la grille (cycle de 4 nœuds)                                                                                    | la V-structure                                                                      |

## Conversion

- DGM → UGM : [[C - Moralisation]], avec $\mathcal L(G)\subseteq\mathcal L(\bar G)$ (égalité sans V-structure).
- Chaque formalisme exprime des ensembles d'indépendances que l'autre ne peut pas exprimer exactement : V-structure (marginalement indépendants, dépendants sachant l'enfant) pour les DGM ; cycle à 4 nœuds / grille ($A\perp\!\!\!\perp C\mid B,D$ et $B\perp\!\!\!\perp D\mid A,C$) pour les UGM.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[A - Modèle Graphique Dirigé (DGM)]]
- [[A - Modèle Graphique Non-dirigé]]
- [[C - Moralisation]]
## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Structure qu'un UGM ne peut pas capturer exactement ?::La V-structure (indépendance marginale + dépendance sachant l'enfant).
  
Structure qu'un DGM ne peut pas capturer exactement ?::Le cycle à 4 nœuds / la grille ($A\perp\!\!\!\perp C\mid B,D$ et $B\perp\!\!\!\perp D\mid A,C$).

Critère d'indépendance : DGM vs UGM ?::DGM : d-séparation. UGM : séparation simple dans le graphe.