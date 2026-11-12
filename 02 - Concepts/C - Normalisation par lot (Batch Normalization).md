---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Batch normalization** (Ioffe & Szegedy, ICML 2015) : **reparamétrisation** du modèle où chaque activation est centrée et réduite avec les statistiques calculées **sur le mini-lot**, puis remise à l'échelle par deux paramètres appris $\gamma, \beta$.

$$\hat x_i = \frac{x_i - \mu_B}{\sqrt{\sigma_B^2 + \epsilon}},\qquad y_i = \gamma \hat x_i + \beta \equiv \mathrm{BN}_{\gamma,\beta}(x_i)$$

## Intuition
L'article la motive par la réduction du « *internal covariate shift* » : la distribution des entrées d'une couche change pendant l'entraînement parce que les couches précédentes changent. Normaliser stabilise ces distributions, permet des taux d'apprentissage plus grands et accélère beaucoup l'entraînement (courbe ImageNet du cours : BN-Inception atteint la précision d'Inception en beaucoup moins de pas). $\gamma$ et $\beta$ redonnent au réseau sa capacité de représentation : il peut retrouver l'identité avec $\gamma = \sigma_B$, $\beta = \mu_B$.

## Formalisme
Mini-lot $B = \{x_1,\dots,x_m\}$, appliqué à chaque activation $x^{(k)}$ **indépendamment** (on omet $k$) :
1. moyenne du lot : $\mu_B = \frac1m\sum_{i=1}^m x_i$
2. variance du lot : $\sigma_B^2 = \frac1m\sum_{i=1}^m (x_i - \mu_B)^2$
3. normalisation : $\hat x_i = \frac{x_i - \mu_B}{\sqrt{\sigma_B^2 + \epsilon}}$ ($\epsilon$ pour la stabilité numérique)
4. échelle et décalage : $y_i = \gamma \hat x_i + \beta$

La normalisation est rétropropagée : les gradients passent aussi par $\mu_B$ et $\sigma_B$. Au **test**, on remplace les statistiques du lot par des moyennes mobiles calculées pendant l'entraînement.

### Pour un CNN
Les statistiques sont calculées sur le mini-lot **et** sur les positions spatiales de la carte de caractéristiques (un $\mu, \sigma$ par canal $i$) ; $H$ hauteur, $W$ largeur, $T$ exemples du mini-lot :
$$\mu_i = \frac{1}{HWT}\sum_{t=1}^T\sum_{l=1}^W\sum_{m=1}^H x_{tilm},\qquad \sigma_i^2 = \frac{1}{HWT}\sum_{t=1}^T\sum_{l=1}^W\sum_{m=1}^H (x_{tilm} - \mu_i)^2.$$

## Exemple
Lot de 4 valeurs d'une unité : $\{1, 2, 3, 6\}$ → $\mu_B = 3$, $\sigma_B^2 = 3{,}5$ → $\hat x \approx \{-1{,}07; -0{,}53; 0; 1{,}60\}$, puis $y = \gamma\hat x + \beta$.

## IFT6135 — limites et alternatives
BN dépend de la taille du lot : elle se dégrade avec de **petits mini-lots** (statistiques bruitées) et s'adapte mal aux RNN (longueurs variables). D'où les alternatives : [[C - Normalisation de couche (Layer Normalization)]], [[C - Normalisation d'instance (Instance Normalization)]], [[C - Normalisation de groupe (Group Normalization)]].

## Flashcards
#flashcards/IFT6135/08-optimisation

Écrire les 4 étapes de la batch norm
?
$\mu_B = \frac1m\sum x_i$ ; $\sigma_B^2 = \frac1m\sum(x_i-\mu_B)^2$ ; $\hat x_i = (x_i-\mu_B)/\sqrt{\sigma_B^2+\epsilon}$ ; $y_i = \gamma\hat x_i+\beta$.

Pourquoi apprendre $\gamma$ et $\beta$ après la normalisation ?::Pour ne pas réduire la capacité de représentation : le réseau peut retrouver l'identité ($\gamma=\sigma_B$, $\beta=\mu_B$) ou toute autre échelle.

Sur quels axes BN calcule-t-elle ses statistiques dans un CNN ?::Sur le mini-lot ($T$) et les dimensions spatiales ($H$, $W$), séparément pour chaque canal.

Que fait-on au test avec BN, et pourquoi ?::On utilise des moyennes mobiles de $\mu$ et $\sigma^2$ estimées à l'entraînement, pour que la prédiction d'un exemple ne dépende pas des autres exemples du lot.

Principale faiblesse de BN ?::Elle dépend de la taille du lot : ses statistiques deviennent bruitées avec de petits mini-lots, et elle s'applique mal aux RNN.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Normalisation de couche (Layer Normalization)]]
- [[C - Normalisation d'instance (Instance Normalization)]]
- [[C - Normalisation de groupe (Group Normalization)]]
- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[M - Réseau de neuronnes convolutionnels (CNN)]]
