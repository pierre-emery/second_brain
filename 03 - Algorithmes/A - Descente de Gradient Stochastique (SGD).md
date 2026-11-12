---
type: algorithme
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-12
---
Variante de la descente de gradient qui effectue une mise à jour des paramètres après chaque exemple d'entraînement plutôt qu'après avoir parcouru tout l'ensemble :
1. Initialiser $\theta \equiv \{\mathbf{W}^{(1)}, \mathbf{b}^{(1)}, \ldots, \mathbf{W}^{(L+1)}, \mathbf{b}^{(L+1)}\}$
2. Pour $N$ itérations :
   - Pour chaque exemple $(\mathbf{x}^{(t)}, y^{(t)})$ :
     - $\Delta = -\nabla_\theta l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$
     - $\theta \leftarrow \theta + \alpha\,\Delta$

Une **époque** (epoch) correspond à une itération complète sur **tous** les exemples d'entraînement.
## Ingrédients nécessaires

Pour appliquer cet algorithme à un réseau de neurones, il faut : la fonction de perte $l$, une procédure pour calculer les gradients des paramètres (la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]]), le régularisateur $\Omega(\theta)$ (et son gradient), et une méthode d'[[A - Initialisation de Glorot (Xavier)|initialisation]].
## Variantes

- [[A - Descente de Gradient par Mini-lot (Mini-batch)]] : met à jour à partir d'un lot d'exemples plutôt qu'un seul
- [[C - Momentum]] : utilise une moyenne des gradients passés plutôt que le gradient courant seul
- Voir [[C - Taux d'apprentissage]] pour les conditions de convergence et stratégies de décroissance de $\alpha$

## IFT6135 — Chap. 08 : méthodes du premier ordre
Les méthodes d'optimisation pratiques se divisent en méthodes du **premier ordre** (gradient seulement) et du **second ordre** (courbure, via l'approximation de Taylor $\hat J(\theta) = J(a) + \nabla_\theta J(a)(\theta - a) + \tfrac12 (\theta - a)^\top H (\theta - a)$, voir [[A - Méthode de Newton (optimisation)]]). Le chapitre 08 porte sur le premier ordre.

Notation du cours (Goodfellow, algo. 8.1), à l'itération $k$ :
- **Requis** : taux d'apprentissage $\epsilon_k$, paramètres initiaux $\theta$.
- Tant que le critère d'arrêt n'est pas atteint :
  - tirer un mini-lot de $m$ exemples $\{x^{(1)},\dots,x^{(m)}\}$ et leurs cibles $y^{(i)}$ ;
  - estimer le gradient : $\hat h \leftarrow \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta), y^{(i)})$ ;
  - mettre à jour : $\theta \leftarrow \theta - \epsilon_k\, \hat h$.

**(+)** fonctionne sur un seul exemple ou un mini-lot, et reste probablement la méthode la plus utilisée pour les modèles profonds. **(−)** peut converger lentement (oscillations dans les ravins, plateaux). Améliorations : [[C - Momentum]], [[A - Momentum de Nesterov]], taux adaptatifs ([[A - AdaGrad]], [[A - RMSProp]], [[A - Adam]]).

#flashcards/IFT6135/08-optimisation

Mise à jour SGD sur mini-lot (notation du chap. 08) ?::$\hat h = \frac1m \nabla_\theta \sum_i L(f(x^{(i)};\theta),y^{(i)})$, puis $\theta \leftarrow \theta - \epsilon_k \hat h$.

Différence entre méthodes du premier et du second ordre ?::Premier ordre : seulement le gradient (SGD, Adam…). Second ordre : courbure via la hessienne, approximation quadratique de Taylor (Newton), coûteuse en grande dimension.

## SGD pour le « big data » (IFT6269, lecture 8)

Avec $n$ et $d$ grands : Newton coûte $O(d^3)$ par itération, et la descente de gradient plein lot $w_{t+1}=w_t-\gamma_t\frac1n\sum_i\nabla f_i(w_t)$ coûte $O(nd)$ par itération. SGD tire un indice $i_t$ au hasard et fait
$$w_{t+1}=w_t-\gamma\,\nabla f_{i_t}(w_t)\qquad(O(d)\ \text{par itération}).$$
**Défaut** : grande **variance** (un exemple au gradient anormalement grand dévie fortement la mise à jour) → convergence lente, $O(1/t)$, et pas décroissant nécessaire. Variantes : [[A - Descente de Gradient par Mini-lot (Mini-batch)|mini-lot]], méthodes à variance réduite [[A - SAG et SAGA|SAG/SAGA]]. SGD est un exemple de **méthode de gradient incrémental**.

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[C - Momentum]]
- [[C - Taux d'apprentissage]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - SAG et SAGA]]

## Flashcards

#flashcards/IFT6135/00-revision

Mise à jour SGD pour un exemple $(\mathbf{x}^{(t)}, y^{(t)})$ ?
?
$\Delta = -\nabla_\theta l(f(\mathbf{x}^{(t)}; \theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$, puis $\theta \leftarrow \theta + \alpha\Delta$.

Qu'est-ce qu'une époque ?::Un passage complet sur tous les exemples d'entraînement.

Quatre ingrédients pour entraîner un réseau par SGD ?::La perte $l$, une procédure de calcul des gradients (rétropropagation), le régularisateur $\Omega$ et son gradient, une méthode d'initialisation.

Différence entre descente de gradient (batch) et SGD ?::Batch : une mise à jour après avoir moyenné le gradient sur tout l'ensemble. SGD : une mise à jour après chaque exemple (gradient bruité mais beaucoup plus de pas).

#flashcards/IFT6269/08-regression-logistique

Coût par itération : GD plein lot vs SGD ?::Plein lot : $O(nd)$. SGD : $O(d)$.

Principal défaut de SGD ?::Sa forte variance (gradient d'un seul exemple) : convergence lente $O(1/t)$, pas décroissant requis.
