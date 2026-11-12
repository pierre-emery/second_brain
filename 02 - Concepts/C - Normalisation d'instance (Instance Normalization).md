---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Instance normalization** (Ulyanov et al. 2017, *The Missing Ingredient for Fast Stylization*) : dans un CNN, normalise chaque **canal de chaque exemple** séparément, uniquement sur les dimensions spatiales.

$$y_{tijk} = \frac{x_{tijk} - \mu_{ti}}{\sqrt{\sigma_{ti}^2 + \epsilon}},\qquad \mu_{ti} = \frac{1}{HW}\sum_{l=1}^W\sum_{m=1}^H x_{tilm},\qquad \sigma_{ti}^2 = \frac{1}{HW}\sum_{l=1}^W\sum_{m=1}^H (x_{tilm} - \mu_{ti})^2$$

## Intuition
La moyenne et la variance d'une carte de caractéristiques encodent surtout le **contraste et le « style »** de l'image. Les retirer exemple par exemple rend le réseau insensible au contraste de l'image d'entrée, ce qui est utile pour la stylisation.

## Formalisme
Indices : $t$ exemple du mini-lot, $i$ canal, $(j,k)$ ou $(l,m)$ positions ; $H$ hauteur, $W$ largeur.
Comparaison avec la [[C - Normalisation par lot (Batch Normalization)|batch norm]], qui somme **aussi sur $t$** :
$$\mu_i = \frac{1}{HWT}\sum_{t=1}^T\sum_{l=1}^W\sum_{m=1}^H x_{tilm}.$$

## Exemple
Re-stylisation d'images et modèles génératifs comme les GAN.

## Flashcards
#flashcards/IFT6135/08-optimisation

Sur quels axes InstanceNorm normalise-t-elle ?::Sur $H \times W$ seulement, pour chaque exemple $t$ et chaque canal $i$ séparément.

Différence entre les formules de $\mu$ en InstanceNorm et en BatchNorm ?::IN : $\mu_{ti} = \frac1{HW}\sum_{l,m}x_{tilm}$ (par exemple et par canal). BN : $\mu_i = \frac1{HWT}\sum_{t,l,m}x_{tilm}$ (par canal, sur tout le lot).

Pour quelles applications utilise-t-on InstanceNorm ?::Les modèles génératifs (GAN) et surtout la re-stylisation, car elle retire le contraste et le style propres à chaque image.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Normalisation par lot (Batch Normalization)]]
- [[C - Normalisation de couche (Layer Normalization)]]
- [[C - Normalisation de groupe (Group Normalization)]]
- [[M - Réseau de neuronnes convolutionnels (CNN)]]
