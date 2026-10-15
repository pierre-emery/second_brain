---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Première idée derrière les réseaux convolutionnels : au lieu de connecter chaque unité cachée à **toute** l'image (fully-connected), chaque unité n'est connectée qu'à une sous-région (patch) de l'image d'entrée, appelée son **champ récepteur** (receptive field).

**Pourquoi** : une couche fully-connected sur une image de 200×200 avec 40K unités cachées demande ~2 milliards de paramètres. La corrélation spatiale dans une image est de toute façon **locale**, donc ce n'est pas seulement un gaspillage de paramètres, mais on n'a généralement pas assez de données pour les apprendre correctement.

Chaque unité est connectée à **tous les canaux** de son patch (1 canal si image en niveaux de gris, 3 pour RGB).

## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[MOC - IFT6135 Apprentissage de représentations]]