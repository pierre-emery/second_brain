---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**AdaGrad** (Duchi et al., COLT 2010) adapte un **taux d'apprentissage distinct pour chaque paramètre**, inversement proportionnel à la racine de la somme de tous les carrés de ses gradients passés.

$$r \leftarrow r + h \odot h,\qquad \Delta\theta = -\frac{\epsilon}{\delta + \sqrt{r}} \odot h$$

## Intuition
Les paramètres qui ont reçu de gros gradients voient leur taux diminuer vite ; ceux qui en ont reçu de petits (caractéristiques rares) gardent un grand taux. On progresse ainsi davantage dans les directions plates de l'espace des paramètres.

## Formalisme
- **Requis** : taux global $\epsilon$, paramètres initiaux $\theta$, petite constante $\delta$ (par exemple $10^{-7}$) pour la stabilité numérique.
- Initialiser l'accumulateur $r = 0$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot ; $h \leftarrow \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta), y^{(i)})$ ;
  - accumuler : $r \leftarrow r + h \odot h$ ;
  - calculer : $\Delta\theta \leftarrow -\frac{\epsilon}{\delta + \sqrt r} \odot h$ (division et racine **élément par élément**) ;
  - appliquer : $\theta \leftarrow \theta + \Delta\theta$.

## Exemple
Un poids lié à un mot fréquent reçoit un gradient non nul à chaque pas : $r$ grossit vite, le pas rétrécit. Un poids lié à un mot rare garde un $r$ petit, donc un grand pas quand le mot apparaît.

## IFT6135 — avantages et défauts
- **(+)** Un taux d'apprentissage indépendant par paramètre.
- **(−)** On accumule les gradients **depuis le début** : $r$ ne fait que croître, si bien que le taux effectif s'effondre et l'apprentissage devient très lent plus tard.
- Excellent en **optimisation convexe**, moins bon pour les réseaux de neurones. C'est ce défaut que corrige [[A - RMSProp]].

## Flashcards
#flashcards/IFT6135/08-optimisation

Mise à jour d'AdaGrad ?::$r \leftarrow r + h\odot h$, puis $\theta \leftarrow \theta - \frac{\epsilon}{\delta+\sqrt r}\odot h$ (élément par élément).

Principal défaut d'AdaGrad pour les réseaux profonds ?::$r$ accumule tous les gradients depuis le début, donc il croît sans cesse : le taux effectif tend vers 0 et l'apprentissage ralentit trop tôt.

Pourquoi AdaGrad marche-t-il bien en convexe mais moins en non convexe ?
?
En convexe, réduire le taux au fil du temps est souhaitable pour converger. En non convexe, l'historique des régions traversées au début freine l'apprentissage une fois arrivé dans un bol localement convexe.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Taux d'apprentissage]]
- [[A - RMSProp]]
- [[A - Adam]]
- [[C - Optimisation Convexe]]
