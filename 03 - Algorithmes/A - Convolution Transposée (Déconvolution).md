---
type: algorithme
cours:
  - IFT6135
statut: à réviser
maj: 2026-09-28
---
Opération qui est l'"inverse" naturel de la convolution. C'est en fait l'opération effectuée lors de la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]] à travers une couche de convolution. Elle prend une carte de caractéristiques plus petite et produit une sortie plus grande (l'opposé d'une convolution avec stride > 1).

## Usage : sorties structurées 
Utile pour des tâches où la sortie doit avoir une structure spatiale de même dimensions que l'entrée, via une architecture encodeur-décodeur (convolution + pooling pour encoder, convolution transposée + "unpooling" pour décoder) : 
- **Segmentation sémantique** : prédire une classe pour chaque pixel
- **Génération d'images**

## Attention : artefacts en damier

La convolution transposée peut produire des **artefacts en damier** (checkerboard artifacts) dus au chevauchement inégal du noyau. L'alternative généralement préférée pour les modèles génératifs : **interpolation puis convolution** (resize-convolution), qui évite ce problème.
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Convolution Discrète (2D)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Qu'est-ce qu'une convolution transposée ?::L'opération qui agrandit une carte de caractéristiques : c'est aussi l'opération effectuée en rétropropagation à travers une convolution.

Deux usages de la convolution transposée ?::Segmentation sémantique (une classe par pixel) et génération d'images, dans des architectures encodeur-décodeur.

Quel artefact produit la convolution transposée et quelle alternative ?::Des artefacts en damier (chevauchement inégal du noyau) ; alternative : interpolation puis convolution (resize-convolution).