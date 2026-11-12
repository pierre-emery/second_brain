---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Variante du [[C - Momentum|momentum]] proposée par Sutskever et al. (ICML 2013) : on applique la « correction » du gradient **après** avoir appliqué le terme de vitesse, c'est-à-dire qu'on évalue le gradient au point intermédiaire $\theta + \alpha v$.

$$v \leftarrow \alpha v - \epsilon\, \nabla_\theta \frac1m \sum_i L\big(f(x^{(i)};\theta + \alpha v), y^{(i)}\big),\qquad \theta \leftarrow \theta + v$$

## Intuition
Image de Hinton (Coursera) : d'abord faire un **grand saut** dans la direction du gradient accumulé ($\alpha v$, vecteur brun), puis **mesurer le gradient là où on arrive** et corriger ($-\epsilon h'$, vecteur rouge). Le momentum standard (vecteurs bleus) mesure le gradient *avant* de sauter. Regarder un pas en avant permet de freiner plus tôt quand on dépasse le creux.

## Formalisme
- **Requis** : taux $\epsilon$, momentum $\alpha$, paramètres initiaux $\theta$, vitesse initiale $v$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot de $m$ exemples ;
  - mise à jour intermédiaire : $\tilde\theta \leftarrow \theta + \alpha v$ ;
  - gradient au point intermédiaire : $h \leftarrow \frac1m \nabla_{\tilde\theta} \sum_i L(f(x^{(i)};\tilde\theta), y^{(i)})$ ;
  - vitesse : $v \leftarrow \alpha v - \epsilon h$ ;
  - mise à jour : $\theta \leftarrow \theta + v$.

## Exemple
Dans un ravin étroit, quand la vitesse accumulée porterait $\theta$ au-delà du fond, le gradient mesuré en $\theta + \alpha v$ pointe déjà dans l'autre sens et réduit la vitesse avant le dépassement.

## IFT6135 — combinaison avec RMSProp
Le cours présente aussi [[A - RMSProp|RMSProp avec momentum de Nesterov]] : même point intermédiaire, mais le gradient est divisé par $\sqrt{r}$.

## Flashcards
#flashcards/IFT6135/08-optimisation

Différence entre momentum standard et momentum de Nesterov ?::Nesterov évalue le gradient au point intermédiaire $\tilde\theta = \theta + \alpha v$ (après le saut), le standard l'évalue en $\theta$.

Écrire les étapes de Nesterov
?
$\tilde\theta = \theta + \alpha v$ ; $h = \frac1m\nabla_{\tilde\theta}\sum_i L(f(x^{(i)};\tilde\theta),y^{(i)})$ ; $v \leftarrow \alpha v - \epsilon h$ ; $\theta \leftarrow \theta + v$.

Pourquoi Nesterov réduit-il les dépassements ?::Il mesure la pente là où la vitesse va l'emmener : s'il va dépasser le creux, le gradient corrige la vitesse avant de faire le pas.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Momentum]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[A - RMSProp]]
