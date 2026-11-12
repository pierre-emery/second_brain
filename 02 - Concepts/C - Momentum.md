---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Technique d'optimisation utilisant une moyenne à décroissance exponentielle des gradients précédents plutôt que le gradient courant seul :

$$\overline{\nabla}^{(t)}_\theta = \nabla_\theta l(f(\mathbf{x}^{(t)}), y^{(t)}) + \beta\,\overline{\nabla}^{(t-1)}_\theta$$
Permet de traverser les plateaux plus rapidement en « prenant de l'élan » dans une direction cohérente.

## IFT6135 — Chap. 08 : SGD avec momentum
**Motivation** : accélérer l'apprentissage, surtout quand les gradients sont **petits mais cohérents**. Image physique : une petite bille qui roule sur la surface définie par la perte. Elle prend de la vitesse dans les directions où le gradient est doux mais constant, et les oscillations dans les directions à forte courbure (« ravins ») s'amortissent.

Algorithme (notation du cours, Goodfellow algo. 8.2) :
- **Requis** : taux d'apprentissage $\epsilon$, paramètre de momentum $\alpha$, paramètres initiaux $\theta$, vitesse initiale $v$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot de $m$ exemples ;
  - gradient : $h \leftarrow \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta), y^{(i)})$ ;
  - vitesse : $v \leftarrow \alpha v - \epsilon h$ ;
  - mise à jour : $\theta \leftarrow \theta + v$.

**Vitesse terminale** : si le gradient vaut toujours $h$, la vitesse converge vers $v = -\frac{\epsilon h}{1-\alpha}$. Le pas effectif est donc multiplié par $\frac{1}{1-\alpha}$ (×10 pour $\alpha = 0{,}9$).

**Moyenne mobile exponentielle** : en déroulant, $v_t = -\epsilon \sum_{k \ge 0} \alpha^k h_{t-k}$, une somme des gradients passés pondérée exponentiellement. C'est la même forme que la notation $\overline{\nabla}$ ci-dessus (avec $\beta = \alpha$).

Variante : [[A - Momentum de Nesterov]], qui évalue le gradient après le saut de vitesse.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[A - Momentum de Nesterov]]
- [[A - Adam]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Formule de la mise à jour avec momentum ?::$\overline{\nabla}^{(t)}_\theta = \nabla_\theta l(f(\mathbf{x}^{(t)}), y^{(t)}) + \beta\,\overline{\nabla}^{(t-1)}_\theta$ : moyenne à décroissance exponentielle des gradients.

Quel problème le momentum aide-t-il à résoudre ?::Traverser plus vite les plateaux et points-selles en accumulant de l'« élan » dans une direction cohérente (et amortir les oscillations).

#flashcards/IFT6135/08-optimisation

Mise à jour SGD + momentum (notation du chap. 08) ?::$v \leftarrow \alpha v - \epsilon h$, puis $\theta \leftarrow \theta + v$.

Dérive la vitesse terminale du momentum pour un gradient constant $h$
?
À l'équilibre $v = \alpha v - \epsilon h$, donc $v = -\epsilon h/(1-\alpha)$ : le pas est amplifié d'un facteur $1/(1-\alpha)$ (×10 pour $\alpha=0{,}9$).

Pourquoi le momentum amortit-il les oscillations dans un ravin ?::Les composantes du gradient qui changent de signe d'un pas à l'autre s'annulent dans la moyenne exponentielle ; celles qui gardent le même signe s'accumulent.
