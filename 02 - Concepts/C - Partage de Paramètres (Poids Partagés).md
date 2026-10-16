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
## Flashcards

#flashcards/IFT6135/03-cnn

Qu'est-ce que le partage de paramètres dans un CNN ?::Utiliser le **même** filtre à toutes les positions de l'image : ce qui revient exactement à une convolution.

Quelle hypothèse justifie le partage de paramètres ?::La stationnarité : les statistiques de l'image sont semblables partout ; un détecteur utile à un endroit l'est ailleurs.

Deux bénéfices du partage de paramètres ?::Beaucoup moins de paramètres ; équivariance aux translations.

Qu'est-ce qu'une carte de caractéristiques (feature map) ?::L'ensemble des unités qui partagent un même filtre : la détection d'un même patron à toutes les positions.

Où retrouve-t-on le partage de paramètres dans un RNN ?::Les mêmes matrices $\mathbf{W}, \mathbf{U}, \mathbf{V}$ sont réutilisées à **chaque pas de temps** (partage dans le temps plutôt que dans l'espace).