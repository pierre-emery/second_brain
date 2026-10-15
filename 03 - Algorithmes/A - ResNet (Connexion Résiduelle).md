---
type: algorithme
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Architecture (He, Zhang, Ren & Sun, 2015) qui ajoute une **connexion de saut** (skip connection) autour d'un petit bloc de couches convolutionnelles : la sortie du bloc est additionnée à son entrée avant l'activation finale.

**Bloc de base** (ResNet-34) : deux convolutions 3×3, avec la connexion résiduelle reliant l'entrée directement à la sortie (avant le ReLU final).

**Bloc « bottleneck »** (ResNet-50/101/152) : convolution 1×1 (réduit les canaux) → 3×3 → 1×1 (restaure les canaux), plus économe en calcul pour les réseaux très profonds.
## Motivation

Empiler naïvement plus de couches dans un [[A - Réseau de neuronnes convolutionnels (CNN)|CNN]] finit par **dégrader** la performance au-delà d'un certain point (pas seulement à cause du surapprentissage). Les connexions résiduelles permettent d'entraîner des réseaux beaucoup plus profonds (jusqu'à 152 couches) en facilitant la circulation du gradient à travers le réseau.
## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Complexité d'un modèle (capacité)]]
- [[MOC - IFT6135 Apprentissage de représentations]]