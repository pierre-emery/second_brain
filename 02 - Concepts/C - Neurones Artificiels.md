---
cours:
  - IFT6758
  - IFT6135
statut: complet
tags: []
prerequis: []
maj: 2026-09-26
---
Fonction affine dont la sortie est donnée en paramètre à une fonction d'activation qui est non linéaire.
## Formule

Pour $R$ entrées $x_1,\dots,x_R$ et poids $w_1,\dots,w_R,w_0$ : $$y = f\left(\sum_{i=1}^R w_ix_i+w_0\right)$$ où $f$ est la [[C - Fonction d'activation]] (non-linéaire), et $w_0$ le biais (une entrée constante à 1).
## Notation formelle (IFT6135)

**Pré-activation** (ou activation d'entrée) :

$$a(\mathbf{x}) = b + \sum_i w_i x_i = b + \mathbf{w}^\top \mathbf{x}$$
**Activation** (sortie du neurone) :

$$h(\mathbf{x}) = g(a(\mathbf{x})) = g(b + \sum_i w_i x_i)$$
où $\mathbf{w}$ sont les poids de connexion, $b$ le biais, et $g(\cdot)$ la fonction d'activation.

**Interprétation géométrique** : $\mathbf{w}$ détermine l'orientation de la frontière de décision (un demi-espace), tandis que le biais $b$ ne fait que déplacer la position de cette frontière (la « falaise » de la fonction d'activation), sans en changer l'orientation.
## Composition : la couche

Une couche est un ensemble de neurones qui traitent tous les mêmes entrées (celles de la couche précédente) et produisent chacun une sortie. En empilant plusieurs couches connectées, on obtient un [[A - Réseau de neurones]] profond.
## Liens connexes

- [[A - Réseau de neurones]]
- [[C - Fonction d'activation]]
- [[C - Neurone Biologique (analogie)]]
- [[MOC - IFT6135 Apprentissage de représentations]]