---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**RMSProp** modifie [[A - AdaGrad]] pour mieux fonctionner en **non convexe** : l'accumulation des carrés des gradients est remplacée par une **moyenne mobile à pondération exponentielle**.

$$r \leftarrow \rho\, r + (1-\rho)\, h \odot h,\qquad \Delta\theta = -\frac{\epsilon}{\sqrt{\delta + r}} \odot h$$

## Intuition
L'historique lointain est « oublié » à un rythme fixé par $\rho$. Une fois l'optimisation arrivée dans un bol localement convexe, elle avance comme si AdaGrad venait d'être initialisé dans ce bol, au lieu d'être freinée par les gros gradients du début.

## Formalisme
- **Requis** : taux global $\epsilon$, taux de décroissance $\rho$, paramètres initiaux $\theta$, petite constante $\delta$ (souvent $10^{-6}$) pour stabiliser la division.
- Initialiser $r = 0$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot ; $h \leftarrow \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta), y^{(i)})$ ;
  - accumuler : $r \leftarrow \rho r + (1-\rho) h \odot h$ ;
  - calculer : $\Delta\theta = -\frac{\epsilon}{\sqrt{\delta + r}} \odot h$ (élément par élément) ;
  - appliquer : $\theta \leftarrow \theta + \Delta\theta$.

**Nouvel hyperparamètre** par rapport à AdaGrad : $\rho$, qui contrôle l'échelle de longueur de la moyenne mobile (mémoire effective d'environ $1/(1-\rho)$ pas).

### RMSProp avec momentum de Nesterov
- **Requis** : $\epsilon$, $\rho$, coefficient de momentum $\alpha$, $\theta$, vitesse initiale $v$ ; $r = 0$.
- Point intermédiaire : $\tilde\theta \leftarrow \theta + \alpha v$.
- Gradient : $h \leftarrow \frac1m \nabla_{\tilde\theta} \sum_i L(f(x^{(i)};\tilde\theta), y^{(i)})$.
- Accumuler : $r \leftarrow \rho r + (1-\rho) h \odot h$.
- Vitesse : $v \leftarrow \alpha v - \frac{\epsilon}{\sqrt r} \odot h$.
- Appliquer : $\theta \leftarrow \theta + v$.

## Exemple
Avec $\rho = 0{,}9$, $r$ résume environ les 10 derniers carrés de gradients : un gros gradient vieux de 100 pas ne pèse presque plus rien ($0{,}9^{100} \approx 3\cdot 10^{-5}$).

## IFT6135 — en pratique
Empiriquement, RMSProp est efficace et pratique pour les réseaux profonds, mais il peut être difficile à régler. [[A - Adam]] en est une variante avec momentum et correction de biais.

## Flashcards
#flashcards/IFT6135/08-optimisation

Mise à jour de RMSProp ?::$r \leftarrow \rho r + (1-\rho)h\odot h$, puis $\theta \leftarrow \theta - \frac{\epsilon}{\sqrt{\delta+r}}\odot h$.

Quelle modification RMSProp apporte-t-il à AdaGrad, et pourquoi ?::Il remplace la somme cumulée des $h^2$ par une moyenne mobile exponentielle : l'historique lointain est oublié, donc le taux ne s'effondre plus en non convexe.

Rôle de $\rho$ dans RMSProp ?::Il fixe la longueur de mémoire de la moyenne mobile (environ $1/(1-\rho)$ pas) ; c'est un hyperparamètre de plus qu'AdaGrad.

Écrire RMSProp avec momentum de Nesterov
?
$\tilde\theta = \theta+\alpha v$ ; $h$ calculé en $\tilde\theta$ ; $r \leftarrow \rho r + (1-\rho)h\odot h$ ; $v \leftarrow \alpha v - \frac{\epsilon}{\sqrt r}\odot h$ ; $\theta \leftarrow \theta+v$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[A - AdaGrad]]
- [[A - Adam]]
- [[A - Momentum de Nesterov]]
- [[C - Taux d'apprentissage]]
