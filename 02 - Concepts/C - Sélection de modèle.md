---
cours:
  - IFT6758
  - IFT6135
statut: incomplet
tags: []
prerequis: []
maj: 2026-08-06
---

## Définition

Le choix, parmi plusieurs familles de modèles possibles, de celle la mieux adaptée au problème à résoudre.

## Ce qu'il faut considérer

Pour un même problème de [[C - Classification]], plusieurs familles sont possibles, chacune avec ses compromis :

- **[[A - Machines à vecteurs de support (SVM)]]** : théorie solide, mais difficile à appliquer en grande dimension
- **[[A - Régression Linéaire]]** : simple à appliquer, mais suppose une relation linéaire entre les entrées et la sortie ce qui n'est pas toujours réaliste
- **[[A - Réseau de neurones]]** : plus expressif, mais long/difficile à entraîner et peu interprétable

# Sélection d'hyperparamètres

Processus de choix des meilleurs hyperparamètres, effectué sur l'ensemble de **validation** $\mathcal{D}^{\text{valid}}$ (distinct de $\mathcal{D}^{\text{train}}$ et $\mathcal{D}^{\text{test}}$).

- $\mathcal{D}^{\text{train}}$ sert à entraîner le modèle
- $\mathcal{D}^{\text{valid}}$ sert à choisir les hyperparamètres
- $\mathcal{D}^{\text{test}}$ sert à estimer la performance de généralisation

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Hyperparamètres]]
- [[C - Erreur de généralisation]]
- [[C - Interprétabilité]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Validation croisée]]
- [[MOC - IFT6758 Sciences des données]]