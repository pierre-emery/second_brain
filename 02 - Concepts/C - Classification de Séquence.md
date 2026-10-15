---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
**Classification de séquence** : prédire **une seule** étiquette pour une séquence entière (p. ex. sentiment d'une critique, genre d'un morceau audio).
## Cas particulier de Seq2Seq

On peut la voir comme un cas particulier de [[A - Seq2Seq (Encodeur-Décodeur)|Seq2Seq]] où la séquence cible n'a qu'**un seul mot** : $\mathbf{w} = w_1$, et $w_1$ est l'étiquette de la séquence d'entrée.
## Représentation de taille fixe

L'intérêt clé du [[A - Réseau de Neurones Récurrent (RNN)|RNN]] ici : il transforme une séquence de **longueur variable** en une représentation de **taille fixe** (typiquement l'état caché final $\mathbf{h}_T$, ou la concaténation des états finaux d'un [[A - RNN Bidirectionnel|RNN bidirectionnel]]), sur laquelle on applique un classifieur softmax.

## Liens connexes

- [[C - Étiquetage de Séquence]]
- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]