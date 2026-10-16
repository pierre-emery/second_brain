---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un **plongement** (embedding) associe à chaque mot $w$ d'un vocabulaire $V$ un vecteur dense $C(w) \in \mathbb{R}^d$, avec $d \ll |V|$. Les plongements sont rangés dans une matrice $\mathbf{C} \in \mathbb{R}^{|V| \times d}$ et **appris** conjointement avec le reste du réseau.
## Opération de consultation (lookup)

Avec $\mathbf{e}(w)$ le vecteur one-hot du mot (indice de $w$ dans le vocabulaire) :

$$C(w) = \mathbf{C}^\top \mathbf{e}(w)$$

En pratique on n'effectue pas le produit matriciel : on lit directement la ligne d'indice $w$ (« table look-up »). Le gradient ne met à jour que les lignes des mots présents dans le mini-lot.
## Pourquoi c'est utile

- Les paramètres sont **partagés** : la même matrice $\mathbf{C}$ sert à toutes les positions du contexte (et à tous les pas de temps d'un RNN).
- Des mots utilisés dans des contextes semblables obtiennent des vecteurs proches → généralisation à des combinaisons jamais vues (motivation du [[A - Modèle de Langage Neuronal (Bengio 2003)|modèle de Bengio et al.]]).
## Tokens spéciaux

En modélisation de séquences on ajoute des plongements pour des symboles spéciaux, p. ex. `<BOS>` (début de phrase), utilisé en entrée mais jamais prédit en sortie.
## Liens connexes

- [[A - Modèle de Langage Neuronal (Bengio 2003)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Word 2 vec]]
- [[C - Hypothèse de Variété (Manifold Hypothesis)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Qu'est-ce qu'un plongement de mots ?::Un vecteur dense $C(w) \in \mathbb{R}^d$ ($d \ll |V|$) appris pour chaque mot, rangé dans une matrice $\mathbf{C} \in \mathbb{R}^{|V| \times d}$.

Comment s'écrit la consultation (lookup) d'un plongement avec un vecteur one-hot ?::$C(w) = \mathbf{C}^\top\mathbf{e}(w)$ ; en pratique, on lit directement la ligne $w$.

Qu'est-ce que `<BOS>` et peut-il être prédit ?::Le plongement spécial de début de phrase, utilisé en entrée pour calculer $\mathbf{h}_0$ ; il n'est **jamais** une sortie possible.