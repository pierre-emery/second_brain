---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Group normalization** (Wu & He 2018) : compromis entre la [[C - Normalisation de couche (Layer Normalization)|normalisation de couche]] et la [[C - Normalisation d'instance (Instance Normalization)|normalisation d'instance]]. On partitionne les canaux en $G$ **groupes** et on normalise, pour chaque exemple, sur les canaux d'un groupe et toutes les positions spatiales.

$$\mu_{t,g} = \frac{1}{|S_g|}\sum_{(c,l,m)\in S_g} x_{tclm},\qquad \sigma_{t,g}^2 = \frac{1}{|S_g|}\sum_{(c,l,m)\in S_g}(x_{tclm} - \mu_{t,g})^2,\qquad S_g = \{c \in g\}\times[W]\times[H]$$

## Intuition
- $G = 1$ : un seul groupe contenant tous les canaux, c'est la **LayerNorm**.
- $G = C$ : un groupe par canal, c'est l'**InstanceNorm**.
- Entre les deux, les canaux qui ont tendance à varier ensemble partagent leurs statistiques, sans dépendre du mini-lot.

## Formalisme
On spécifie des groupes d'unités ou de canaux (dans un CNN) à normaliser comme en LayerNorm, puis on applique $\gamma, \beta$ appris par canal. Plus flexible que LayerNorm.

## Exemple
ResNet-50 sur ImageNet (courbes du cours) : avec 32 images par GPU, GN suit BN de près en erreur de validation et fait mieux que LN et IN. Avec de **petits mini-lots**, GN dépasse BN, dont l'erreur augmente quand le lot rétrécit.

## Flashcards
#flashcards/IFT6135/08-optimisation

Comment GroupNorm généralise-t-elle LN et IN ?::Avec $G$ groupes de canaux : $G=1$ donne LayerNorm, $G=C$ donne InstanceNorm.

Quand préférer GroupNorm à BatchNorm ?::Quand les mini-lots sont petits (grosses images, détection, segmentation) : GN ne dépend pas de la taille du lot, BN se dégrade.

Classer BN, LN, IN, GN selon les axes de normalisation dans un CNN
?
BN : (N, H, W) par canal. LN : (C, H, W) par exemple. IN : (H, W) par exemple et par canal. GN : (C/G, H, W) par exemple et par groupe de canaux.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Normalisation par lot (Batch Normalization)]]
- [[C - Normalisation de couche (Layer Normalization)]]
- [[C - Normalisation d'instance (Instance Normalization)]]
- [[M - ResNet (Connexion Résiduelle)]]
