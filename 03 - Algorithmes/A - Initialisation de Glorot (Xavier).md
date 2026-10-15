---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-09-26

---
Méthode d'initialisation des paramètres d'un réseau de neurones (Glorot & Bengio, 2010).

**Biais** : initialisés à 0.

**Poids** : ne peuvent pas être initialisés à 0 (avec activation tanh, cela mène à un gradient nul et donc un point-selle) ni tous à la même valeur (les unités cachées d'une couche se comporteraient alors toutes de façon identique. Il faut **briser la symétrie**).

**Recette** : échantillonner $W^{(k)}_{i,j} \sim U[-b, b]$ où

$$b = \frac{\sqrt{6}}{\sqrt{H_k + H_{k-1}}}$$

$H_k$ étant la taille de la couche $k$ (nombre d'unités de $\mathbf{h}^{(k)}(\mathbf{x})$). L'idée est d'échantillonner autour de 0 tout en brisant la symétrie ; d'autres valeurs de $b$ peuvent aussi bien fonctionner (ce n'est pas une science exacte).

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[A - Réseau de neurones]]
- [[C - Fonction d'activation]]