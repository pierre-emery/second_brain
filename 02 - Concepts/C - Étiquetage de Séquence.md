---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
**Étiquetage de séquence** (sequence labeling / tagging) : prédire une étiquette $y_t$ pour **chaque** élément $x_t$ d'une séquence d'entrée. Entrée et sortie ont la **même longueur** et sont **alignées** position par position.
## Avec un RNN

À chaque pas de temps, la sortie $p(y_t \mid \dots)$ est calculée à partir de l'état caché $\mathbf{h}_t$ (de la couche du haut si le [[C - RNN Profond (Empilé)|RNN est profond]]). Pas besoin de `<BOS>` : $\mathbf{h}_1$ est calculé directement à partir de $x_1$.
## Exemples

- **Étiquetage de mots** : parties du discours (POS tagging), reconnaissance d'entités nommées (NER). Entrées : plongements $C(w_t)$.
- **Étiquetage de séquence en général** : reconnaissance de caractères manuscrits, où chaque $\mathbf{x}_t$ est un vecteur (p. ex. une image de lettre) plutôt qu'un mot.
## Limite d'un RNN unidirectionnel

Pour prédire $y_2$, un RNN gauche → droite **ne peut pas utiliser l'information des pas suivants** ($x_3, \dots$), alors que l'entrée complète est disponible. Solution : [[A - RNN Bidirectionnel]].
## Cas où l'alignement n'existe pas

Si la sortie n'a pas la même longueur que l'entrée ou n'est pas alignée (traduction), ce n'est plus un problème d'étiquetage : voir [[A - Seq2Seq (Encodeur-Décodeur)]].

## Liens connexes

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Classification de Séquence]]
- [[A - RNN Bidirectionnel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]