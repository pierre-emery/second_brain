---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
En visualisant ce que chaque couche d'un CNN entraîné détecte (Zeiler & Fergus, 2013), on observe une hiérarchie de caractéristiques de plus en plus abstraites :
- **Couche 1** : bords orientés et couleurs simples
- **Couche 2** : textures et motifs (coins, cercles, grilles)
- **Couche 3** : combinaisons de textures (nids d'abeille, roues, formes végétales)
- **Couche 4-5** : parties d'objets et objets entiers (visages de chiens, roues de véhicules, oiseaux)

Cette hiérarchie émerge naturellement de l'empilement de couches de convolution/pooling. Chaque couche combine les caractéristiques détectées par la précédente pour en détecter de plus complexes, sur un champ récepteur de plus en plus grand.

## Liens connexes

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Connectivité Locale (Champ Récepteur)]]
- [[MOC - IFT6135 Apprentissage de représentations]]