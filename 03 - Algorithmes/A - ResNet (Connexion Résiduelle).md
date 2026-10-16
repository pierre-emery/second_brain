---
type: algorithme
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Architecture (He, Zhang, Ren & Sun, 2015) qui ajoute une **connexion de saut** (skip connection) autour d'un petit bloc de couches convolutionnelles : la sortie du bloc est additionnée à son entrée avant l'activation finale.

**Bloc de base** (ResNet-34) : deux convolutions 3×3, avec la connexion résiduelle reliant l'entrée directement à la sortie (avant le ReLU final).

**Bloc « bottleneck »** (ResNet-50/101/152) : convolution 1×1 (réduit les canaux) → 3×3 → 1×1 (restaure les canaux), plus économe en calcul pour les réseaux très profonds.
## Motivation

Empiler naïvement plus de couches dans un [[A - Réseau de neuronnes convolutionnels (CNN)|CNN]] finit par **dégrader** la performance au-delà d'un certain point (pas seulement à cause du surapprentissage). Les connexions résiduelles permettent d'entraîner des réseaux beaucoup plus profonds (jusqu'à 152 couches) en facilitant la circulation du gradient à travers le réseau.
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Complexité d'un modèle (capacité)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Qu'est-ce qu'une connexion résiduelle ?::Une connexion de saut qui additionne l'entrée d'un bloc à sa sortie (avant l'activation finale) : le bloc apprend un résidu $F(\mathbf{x})$, sortie $F(\mathbf{x}) + \mathbf{x}$.

Quel problème motive ResNet ?::Empiler plus de couches dégrade la performance même en entraînement (pas seulement du surapprentissage) ; les connexions résiduelles facilitent la circulation du gradient.  

Structure d'un bloc « bottleneck » de ResNet-50 ?::Convolution 1×1 (réduit les canaux) → 3×3 → 1×1 (restaure les canaux).

Pourquoi le chemin additif d'un bloc résiduel aide-t-il le gradient ? *(lien avec le LSTM)*::La dérivée de $\mathbf{x} + F(\mathbf{x})$ contient l'identité : le gradient passe directement sans être multiplié par les poids du bloc : même principe que la cellule additive du LSTM.