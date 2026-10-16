---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un [[A - Réseau de Neurones Récurrent (RNN)|RNN]] se rend profond simplement en **empilant** des couches récurrentes : la séquence d'états cachés d'une couche devient la séquence d'entrée de la couche au-dessus. Chaque couche $\ell$ a ses propres paramètres $\mathbf{b}^{(\ell)}, \mathbf{U}^{(\ell)}, \mathbf{W}^{(\ell)}$, partagés dans le temps.
## Équations (2 couches)

$$\mathbf{h}^{(1)}_t = \tanh\!\left(\mathbf{b}^{(1)} + \mathbf{U}^{(1)}\mathbf{h}^{(1)}_{t-1} + \mathbf{W}^{(1)} C(w_t)\right)$$
$$\mathbf{h}^{(2)}_t = \tanh\!\left(\mathbf{b}^{(2)} + \mathbf{U}^{(2)}\mathbf{h}^{(2)}_{t-1} + \mathbf{W}^{(2)} \mathbf{h}^{(1)}_t\right)$$

La sortie au temps $t$ est calculée à partir de la couche du haut $\mathbf{h}^{(2)}_t$.
Il y a donc deux « axes » de profondeur : **verticale** (les couches, via $\mathbf{W}^{(\ell)}$) et **temporelle** (la récurrence, via $\mathbf{U}^{(\ell)}$).
## Usages au-delà de la modélisation du langage

- [[C - Étiquetage de Séquence]] : étiquetage de mots (parties du discours, reconnaissance d'entités nommées), reconnaissance de caractères.
- Encodeur/décodeur dans [[A - Seq2Seq (Encodeur-Décodeur)]].
- Version bidirectionnelle : voir [[A - RNN Bidirectionnel]].
## Liens connexes

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[A - Réseau de neurones]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention 

Équation de la 2e couche d'un RNN empilé ?::$\mathbf{h}^{(2)}_t = \tanh(\mathbf{b}^{(2)} + \mathbf{U}^{(2)}\mathbf{h}^{(2)}_{t-1} + \mathbf{W}^{(2)}\mathbf{h}^{(1)}_t)$

Quels sont les deux « axes » de profondeur d'un RNN profond ?::Vertical (les couches, via $\mathbf{W}^{(\ell)}$) et temporel (la récurrence, via $\mathbf{U}^{(\ell)}$).