---
type: concept
cours:
  - IFT6135
statut: complet
maj: 2026-09-28
---
Deux propriétés distinctes que l'on souhaite pour un modèle de vision :

**Équivariance** : si l'entrée est translatée, la sortie (la carte de caractéristiques) est translatée de la même façon. C'est ce que donne directement le [[C - Partage de Paramètres (Poids Partagés)|partage de paramètres]] d'une couche de convolution. Le même patron est détecté, juste décalé.

**Invariance** : si l'entrée est translatée (légèrement), la sortie **ne change pas**. C'est ce que donne le [[C - Couche de Pooling (Max Pooling)|pooling]] : en résumant une petite région par son maximum, une translation locale de la caractéristique dans cette région ne change pas le résultat du pooling.

En résumé : la **convolution** rend le réseau équivariant aux translations ; le **pooling** ajoute de l'invariance locale par-dessus. Aucun des deux ne donne d'invariance aux rotations ou aux changements d'échelle, pour cela, voir [[C - Augmentation de Données (Data Augmentation)]].
## Liens connexes

- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Couche de Pooling (Max Pooling)]]
- [[C - Augmentation de Données (Data Augmentation)]]
- [[MOC - IFT6135 Apprentissage de représentations]]