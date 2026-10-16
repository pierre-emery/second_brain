---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Troisième idée derrière les réseaux convolutionnels : regrouper (pool) les unités cachées d'un même voisinage, généralement en prenant leur **maximum** (max pooling).

Quand le pooling est effectué sur des voisinages **non chevauchants**, on parle de **subsampling** (sous-échantillonnage).

**Résout deux problèmes** :
- Introduit l'**invariance locale** aux translations (voir [[C - Équivariance vs Invariance]])
- Réduit le nombre d'unités cachées dans la couche suivante (donc les calculs et le nombre de paramètres en aval)
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Équivariance vs Invariance]]
- [[C - Connectivité Locale (Champ Récepteur)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Qu'est-ce que le max pooling ?::Remplacer un voisinage d'unités par leur maximum.

Deux problèmes résolus par le pooling ?::Ajouter de l'invariance locale aux translations ; réduire le nombre d'unités (calculs et paramètres en aval).

Qu'appelle-t-on subsampling ?::Un pooling sur des voisinages **non chevauchants**.

Comment le gradient traverse-t-il un max pooling ?::Il est entièrement routé vers l'entrée qui était maximale ; les autres reçoivent 0.