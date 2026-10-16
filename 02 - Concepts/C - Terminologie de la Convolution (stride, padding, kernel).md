---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Propriétés qui déterminent la taille de sortie $o_j$ d'une convolution le long d'un axe $j$ :
- $i_j$ : taille de l'entrée le long de l'axe $j$
- $k_j$ : taille du noyau le long de l'axe $j$
- $s_j$ : le **stride** : distance entre deux positions consécutives du noyau
- $p_j$ : le **zero padding** : nombre de zéros ajoutés au début et à la fin de l'axe

**Formule de la taille de sortie** (cas simplifié : convolution 2D, entrée et noyau carrés, mêmes stride/padding sur les deux axes) :
$$o = \left\lfloor \frac{i + 2p - k}{s} \right\rfloor + 1$$
## Types de padding usuels

- **Valid** (pas de padding, $p=0$) : la sortie est plus petite que l'entrée
- **Same** (padding « demi », $p = \lfloor k/2 \rfloor$) : la sortie a la **même** taille que l'entrée
- **Full** (padding complet, $p = k-1$) : le noyau peut chevaucher l'entrée sur un seul pixel ; sortie plus grande que l'entrée
## Liens connexes

- [[C - Convolution Discrète (2D)]]
- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Convolution Dilatée]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Formule de la taille de sortie d'une convolution ?::$o = \left\lfloor \dfrac{i + 2p - k}{s} \right\rfloor + 1$

Entrée 32, noyau 5, padding 2, stride 1 : taille de sortie ?::$\lfloor (32 + 4 - 5)/1 \rfloor + 1 = 32$ (padding « same »).

Entrée 7, noyau 3, padding 0, stride 2 : taille de sortie ?::$\lfloor (7 - 3)/2 \rfloor + 1 = 3$.

Padding valid, same, full : valeur de $p$ et effet sur la taille ?::Valid : $p = 0$, sortie plus petite. Same : $p = \lfloor k/2 \rfloor$, même taille (stride 1). Full : $p = k - 1$, sortie plus grande.