---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Auto-attention où chaque position **ne peut regarder que les positions précédentes** (et elle-même). On l'obtient en mettant les scores des positions futures à $-\infty$ **avant la softmax**.

$$\alpha_{ij} = \frac{\exp(e_{ij} + M_{ij})}{\sum_l \exp(e_{il} + M_{il})},\qquad M_{ij} = \begin{cases} 0 & j\le i\\ -\infty & j > i\end{cases}$$

## Intuition
Dans le décodeur, on génère la sortie de gauche à droite : à l'entraînement, il ne faut pas que la prédiction du mot $i$ puisse « tricher » en voyant le mot $i$ lui-même ou les suivants. Le masque garantit la propriété **autorégressive** tout en calculant toutes les positions en parallèle, comme les masques de [[M - MADE (Masked Autoencoder for Distribution Estimation)|MADE]] ou les convolutions masquées de [[M - PixelCNN|PixelCNN]].

## Formalisme
- $\exp(-\infty) = 0$ : les positions futures reçoivent un poids exactement nul, et la softmax reste normalisée sur les positions permises.
- La matrice d'attention devient **triangulaire inférieure**.
- Au test, on génère pas à pas : la sortie du pas $t$ devient l'entrée du pas $t+1$.

## Exemple
Traduction « Je suis étudiant » → « I am a student » : au pas 2, le décodeur a produit « I » et prédit « am » en n'attendant que sur « <s> I » (et sur l'encodeur via l'attention encodeur-décodeur).

## Flashcards
#flashcards/IFT6135/06-transformer

Comment masque-t-on le futur dans le décodeur du Transformer ?::On met à $-\infty$ les scores $e_{ij}$ avec $j>i$ avant la softmax ; leurs poids deviennent exactement 0.

Pourquoi masquer avant la softmax et non après ?::Avant, la softmax renormalise sur les positions permises ; mettre des poids à 0 après la softmax laisserait une somme inférieure à 1.

Pourquoi l'attention causale permet-elle un entraînement parallèle ?::Toutes les cibles sont connues (*teacher forcing*) ; le masque empêche chaque position de voir le futur, donc on calcule toutes les positions en une seule passe.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Auto-attention (Self-Attention)]]
- [[M - Transformer]]
- [[M - GPT (GPT-1, GPT-2, GPT-3)]]
- [[C - Modèle génératif autorégressif]]
