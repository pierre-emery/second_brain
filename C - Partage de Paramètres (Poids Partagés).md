---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Deuxième idée derrière les réseaux convolutionnels : partager la **même** matrice de poids entre les unités cachées à différentes positions de l'image, plutôt que d'apprendre des poids indépendants par position ([[C - Connectivité Locale (Champ Récepteur)|couche localement connectée]]).

**Justification (stationnarité)** : les statistiques de l'image sont similaires à différentes positions : un détecteur de bord utile en haut à gauche l'est probablement aussi en bas à droite.

Les unités qui partagent leurs poids forment ensemble une **carte de caractéristiques** (feature map), un patron visuel (ex. un bord orienté) détecté à toutes les positions de l'image.

**Bénéfices** :
- Réduit encore le nombre de paramètres (un seul filtre au lieu d'un filtre par position)
- Donne l'**équivariance** aux translations (voir [[C - Équivariance vs Invariance]])

Concrètement, ce partage de poids **est** l'opération de convolution : voir [[C - Convolution Discrète (2D)]].
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Connectivité Locale (Champ Récepteur)]]
- [[C - Équivariance vs Invariance]]
- [[C - Convolution Discrète (2D)]]
- [[MOC - IFT6135 Apprentissage de représentations]]