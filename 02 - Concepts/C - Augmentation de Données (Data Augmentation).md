---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Un réseau convolutionnel est équivariant aux petites translations (grâce à la convolution) et légèrement invariant à celles-ci localement (grâce au [[C - Couche de Pooling (Max Pooling)|pooling]]), mais il n'est **pas** naturellement invariant aux rotations ou aux changements d'échelle.

**Solution** : générer artificiellement des exemples d'entraînement supplémentaires en appliquant ces transformations (translation, rotation, mise à l'échelle, recadrage) aux images existantes. Le réseau apprend alors lui-même à devenir invariant à ces transformations en les voyant explicitement pendant l'entraînement.
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Équivariance vs Invariance]]
- [[MOC - IFT6135 Apprentissage de représentations]]

## Flashcards

#flashcards/IFT6135/03-cnn

Principe de l'augmentation de données ?::Créer de nouveaux exemples en appliquant des transformations (translation, rotation, échelle, recadrage) aux images existantes.

Quel problème des CNN l'augmentation de données résout-elle ?::L'absence d'invariance naturelle aux rotations et changements d'échelle : le réseau l'apprend en voyant ces transformations.