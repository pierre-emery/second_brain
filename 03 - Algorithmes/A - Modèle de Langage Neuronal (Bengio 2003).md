---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Modèle de Bengio, Ducharme, Vincent et Jauvin (2003) : modéliser la conditionnelle de Markov d'ordre $n$
$$p(w_t \mid w_{t-(n-1)}, \dots, w_{t-1})$$
avec un **réseau de neurones**, en apprenant des représentations de mots qui permettent de **généraliser à des n-grammes jamais observés** dans le corpus d'entraînement (voir la limite des [[C - n-grammes]]).
## Architecture

1. **Table de consultation** (lookup) : chaque mot du contexte $w_{t-n+1}, \dots, w_{t-1}$ est remplacé par son vecteur $C(w)$, une ligne de la matrice $\mathbf{C}$ — voir [[C - Plongement de Mots (Word Embedding)]]. La matrice $\mathbf{C}$ est **partagée entre toutes les positions** du contexte.
2. **Couche cachée** $\tanh$ sur la concaténation $[C(w_{t-n+1}); \dots; C(w_{t-1})]$.
3. **Sortie softmax** sur tout le vocabulaire : la $i$-ème sortie vaut $P(w_t = i \mid \text{contexte})$. C'est là que se fait **la majeure partie du calcul** (taille du vocabulaire).
4. (Optionnel, flèches pointillées) connexions **directes** des plongements vers la sortie.
## Intuition de la généralisation

Des mots qui apparaissent dans des contextes similaires obtiennent des plongements proches ; un contexte nouveau composé de mots « voisins » de contextes connus produit donc une prédiction raisonnable, au lieu d'une probabilité nulle.
## Limite

La fenêtre de contexte est **fixe** ($n-1$ mots). Le [[A - Réseau de Neurones Récurrent (RNN)|RNN]] lève cette limite en conditionnant sur tout le passé.
## Liens connexes

- [[C - Modélisation du Langage]]
- [[C - n-grammes]]
- [[C - Plongement de Mots (Word Embedding)]]
- [[A - Réseau de neurones]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Architecture du modèle de langage neuronal de Bengio et al. (2003) ?::Plongements $C(w)$ des $n-1$ mots du contexte (matrice $\mathbf{C}$ partagée) → concaténation → couche tanh → softmax sur le vocabulaire.
<!--SR:!2026-10-20,4,270-->

Où se fait l'essentiel du calcul dans le modèle de Bengio ?::Dans la couche de sortie softmax, dont la taille est celle du vocabulaire.

Limite du modèle de Bengio que le RNN lève ?::La fenêtre de contexte est fixe ($n-1$ mots).