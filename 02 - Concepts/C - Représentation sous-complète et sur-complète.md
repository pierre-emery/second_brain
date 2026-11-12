---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Dans un [[M - Autoencodeur|autoencodeur]], la couche cachée est **sous-complète** (*undercomplete*) si elle est plus petite que la couche d'entrée, et **sur-complète** (*overcomplete*) si elle est plus grande.

$$\dim h < \dim x\ \ (\text{sous-complète})\qquad\qquad \dim h > \dim x\ \ (\text{sur-complète})$$

## Intuition
- **Sous-complète** : la couche cachée **compresse** l'entrée. Elle ne compressera bien que les exemples de la distribution d'entraînement : les unités cachées seront de bonnes caractéristiques pour cette distribution, mais de mauvaises pour d'autres types d'entrées.
- **Sur-complète** : aucune compression. Chaque unité cachée pourrait simplement **copier** une composante de l'entrée, donc rien ne garantit que les unités extraient une structure utile.

## Formalisme
Dans le cas sur-complet, il faut une autre façon d'éviter les solutions triviales (copie) :
- corrompre l'entrée : [[M - Autoencodeur débruiteur (Denoising Autoencoder)]] ;
- pénaliser explicitement la sensibilité du code : [[M - Autoencodeur contractif]] ;
- imposer la parcimonie du code (autoencodeur parcimonieux, mentionné).

## Exemple
Entrée MNIST de 784 pixels : 100 unités cachées donnent un code sous-complet, 2000 unités un code sur-complet.

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Pourquoi un autoencodeur sous-complet apprend-il des caractéristiques utiles ?::Il doit compresser l'entrée, ce qu'il ne peut faire qu'en capturant la structure de la distribution d'entraînement.

Défaut d'un autoencodeur sous-complet ?::Ses caractéristiques sont bonnes pour la distribution d'entraînement mais mauvaises pour d'autres types d'entrées.

Quel risque présente un code sur-complet, et comment le contrer ?::Le réseau peut copier chaque composante de l'entrée sans rien apprendre. Parades : bruit à l'entrée (débruiteur), pénalité sur le jacobien (contractif), parcimonie.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Autoencodeur]]
- [[M - Autoencodeur débruiteur (Denoising Autoencoder)]]
- [[M - Autoencodeur contractif]]
