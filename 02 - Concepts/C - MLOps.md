---
## type: concept
cours: [IFT6758]
statut: incomplet
tags: []
prerequis: ["[[C - Science des données]]"]
maj: 2026-08-06
---
## Définition

L'aspect "mise à l'échelle" de la science des données : une fois un modèle qui fonctionne trouvé, comment l'exécuter et le maintenir en pratique, à grande échelle.

## Suivi des expériences

- Vérifier les expériences pendant leur exécution
- Explorer/analyser davantage au besoin
- Reproductibilité des expériences

## [[C - Virtualisation (Docker)]]

- **Machines virtuelles** : simuler un système d'exploitation sur un système existant, copiable sur plusieurs machines.
- **Docker** : un écosystème de VM légères, facile à partager et déployer. Utile pour la recherche d'hyperparamètres, permet de reproduire le même code sur plusieurs machines.

## Matériel et calcul distribué

- Quel matériel utiliser (ex: traitement d'image → GPU) selon la charge attendue (requêtes/minute) ?
- Comment distribuer les calculs dans le cloud, selon les hypothèses du modèle ?

## Liens connexes

- [[C - Science des données]]
- [[MOC - Programmation pour le ML]]
- [[MOC - IFT6758 Sciences des données]]