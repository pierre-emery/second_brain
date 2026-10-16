---
type: algorithme
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Réseau de neurones spécifiquement conçu pour des entrées ayant une topologie spatiale (images 2D, vidéo 3D, audio 1D). Contrairement à un [[A - Réseau de neurones|MLP]] fully-connected qui serait inutilisable pour de grandes images (ex. ~2 milliards de paramètres pour une image 200×200 avec 40K unités cachées).
Un CNN exploite trois idées :

1. [[C - Connectivité Locale (Champ Récepteur)]] : chaque unité ne voit qu'un patch de l'entrée
2. [[C - Partage de Paramètres (Poids Partagés)]] : le même filtre (noyau) est réutilisé à toutes les positions → [[C - Convolution Discrète (2D)|opération de convolution]]
3. [[C - Couche de Pooling (Max Pooling)]] : agrège les unités d'un voisinage pour réduire la résolution et ajouter de l'invariance locale
## Architecture typique

Un CNN alterne des couches de convolution et de pooling, puis termine généralement par une ou plusieurs couches **fully-connected** avant la sortie (ex. LeNet : conv → pooling → conv → pooling → fully-connected → sortie). Le nombre de canaux (cartes de caractéristiques) augmente généralement en profondeur tandis que la résolution spatiale diminue.

**Entrées de taille variable** : plutôt que d'utiliser des couches fully-connected (qui exigent une taille fixe), on peut réduire progressivement par pooling jusqu'à des cartes 1×1, ou utiliser un pooling global (ex. average pooling) dont la taille s'adapte à l'entrée.
## Entraînement

Le réseau est entraîné par [[A - Descente de Gradient Stochastique (SGD)|descente de gradient stochastique]] ; la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]] s'applique de la même façon qu'à un réseau fully-connected, mais il faut aussi propager le gradient à travers les opérations de convolution et de pooling. [[C - Fonction d'activation|ReLU]] est un choix populaire car il favorise la circulation du gradient dans des réseaux profonds.
## Apprentissage hiérarchique

Voir [[C - Apprentissage Hiérarchique des Caractéristiques (CNN)]] : les premières couches détectent des bords/couleurs, les couches intermédiaires des textures, et les couches profondes des parties d'objets ou des objets entiers.
## Invariance

La convolution donne de l'**équivariance** aux translations, le pooling ajoute de l'**invariance locale** — voir [[C - Équivariance vs Invariance]]. Pour l'invariance aux rotations/échelle, voir [[C - Augmentation de Données (Data Augmentation)]].
## Variantes et extensions

- [[A - ResNet (Connexion Résiduelle)]] : connexions de saut pour entraîner des réseaux très profonds
- [[C - Convolution Dilatée]] : élargir le champ récepteur sans plus de paramètres (WaveNet, ByteNet)
- [[A - Convolution Transposée (Déconvolution)]] : pour les sorties structurées (segmentation sémantique, génération d'images)
- [[C - Terminologie de la Convolution (stride, padding, kernel)]] : formule de la taille de sortie, types de padding (valid/same/full)
## Liens connexes

- [[A - Réseau de neurones]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - Modèles ML (supervisé)]]
## Flashcards

#flashcards/IFT6135/03-cnn

Les trois idées fondatrices d'un CNN ?::Connectivité locale, partage de paramètres (convolution), pooling.

Architecture typique d'un CNN (ex. LeNet) ?::Alternance convolution → pooling, puis couches fully-connected avant la sortie ; les canaux augmentent en profondeur et la résolution diminue.

Comment traiter des entrées de taille variable avec un CNN ?::Remplacer les couches fully-connected par un pooling global (p. ex. average pooling) dont la taille s'adapte à l'entrée.

Pourquoi ReLU est-elle populaire dans les CNN profonds ?::Elle ne sature pas pour $x > 0$, ce qui facilite la circulation du gradient.