---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
La **rétropropagation à travers le temps** (BPTT, *backpropagation through time*) est simplement la [[A - Rétropropagation du gradient (gradient descent)|rétropropagation]] appliquée au [[C - Graphe de Calcul (Flow Graph)|graphe de calcul]] du [[A - Réseau de Neurones Récurrent (RNN)|RNN]] **déroulé dans le temps**.
- **Propagation avant** : le calcul suit les flèches du graphe, vers l'avant dans le temps.
- **Propagation arrière** : on remonte le temps de $t = T-1$ à $0$, en accumulant les gradients des paramètres partagés à chaque pas.
## Objectif

Minimiser la somme des pertes par pas de temps :
$$l = \sum_{t=0}^{T-1} l_t, \qquad \text{modélisation du langage : } l_t = -\log p(w_{t+1} \mid \dots)$$
## Notation

$\mathbf{a}_t = \mathbf{b} + \mathbf{U}\mathbf{h}_{t-1} + \mathbf{W}C(w_t)$ (pré-activation), $\mathbf{h}_t = \tanh(\mathbf{a}_t)$, sortie $\mathrm{softmax}(\mathbf{c} + \mathbf{V}\mathbf{h}_t)$. On utilise $\tanh'(a) = 1 - \tanh^2(a)$.
## Algorithme

**Initialiser :** $\nabla_{\mathbf{V}} l \Leftarrow 0$, $\nabla_{\mathbf{W}} l \Leftarrow 0$, $\nabla_{\mathbf{U}} l \Leftarrow 0$, $\nabla_{\mathbf{h}_{T-1}} l \Leftarrow 0$

**Pour $t$ de $T-1$ à $0$ :**

1. $\nabla_{\mathbf{V}} l \mathrel{+}= \nabla_{\mathbf{V}} l_t$
2. $\nabla_{\mathbf{h}_t} l \mathrel{+}= \nabla_{\mathbf{h}_t} l_t$  on ajoute la perte locale au gradient qui arrive du futur
3. $\nabla_{\mathbf{a}_t} l \Leftarrow (1 - \mathbf{h}_t^2) \odot \nabla_{\mathbf{h}_t} l$
4. $\nabla_{\mathbf{W}} l \mathrel{+}= (\nabla_{\mathbf{a}_t} l)\, C(w_t)^\top$
5. $\nabla_{\mathbf{U}} l \mathrel{+}= (\nabla_{\mathbf{a}_t} l)\, \mathbf{h}_{t-1}^\top$
6. $\nabla_{\mathbf{h}_{t-1}} l \Leftarrow \mathbf{U}^\top \nabla_{\mathbf{a}_t} l$  gradient transmis au pas précédent

Les $\mathrel{+}=$ sur $\mathbf{V}, \mathbf{W}, \mathbf{U}$ reflètent le [[C - Partage de Paramètres (Poids Partagés)|partage des paramètres]] : le gradient total est la somme des contributions de chaque pas de temps (comme une porte de copie). Le biais se traite pareil : $\nabla_{\mathbf{b}} l \mathrel{+}= \nabla_{\mathbf{a}_t} l$. *(Remarque : au pas $t=0$, $\mathbf{h}_0$ n'a pas de terme récurrent, donc pas de contribution à $\nabla_\mathbf{U}$.)*

Avec la perte d'entropie croisée, le gradient local est $\nabla_{\mathbf{h}_t} l_t = \mathbf{V}^\top\big(f(\mathbf{h}_t) - \mathbf{e}(w_{t+1})\big)$ (voir [[C - Perte d'Entropie Croisée (Cross-Entropy)]]).

## Gradient par rapport à un état caché

En déroulant la récurrence de l'étape 6 :

$$\nabla_{\mathbf{h}_t} l = \sum_{\delta=0}^{T-t-1} \nabla_{\mathbf{h}_t} l_{t+\delta}, \qquad \nabla_{\mathbf{h}_t} l_{t+\delta} = \left(\prod_{t'=t+1}^{t+\delta} \mathbf{U}^\top \mathrm{diag}(1 - \mathbf{h}_{t'}^2)\right) \nabla_{\mathbf{h}_{t+\delta}} l_{t+\delta}$$

Ce produit de $\delta$ matrices est la source des [[C - Gradient Explosif et Évanescent (RNN)|gradients explosifs et évanescents]].
## Variante

Pour les séquences très longues ou infinies : [[A - BPTT Tronquée (Truncated BPTT)]]. En pratique, la [[C - Graphe de Calcul (Flow Graph)|différentiation automatique]] calcule tout cela pour nous.
## Liens connexes

- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - BPTT Tronquée (Truncated BPTT)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]