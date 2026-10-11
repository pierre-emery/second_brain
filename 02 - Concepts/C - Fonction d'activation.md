---
cours:
  - IFT6758
  - IFT6135
statut: complet
tags: []
prerequis:
  - "[[C - Neurones Artificiels]]"
maj: 2026-09-26
---
Les fonctions d'activation permettent de traiter des données linéairement non-séparables. Ces dernières fonctions apportent de la non-linéarité aux réseaux ce qui permet aux réseaux d’apprendre des représentation complexes. Sans non-linéarité, un réseau est un filtre linéaire.

### Identité (linéaire)

**Formule :** $$g(a) = a$$
Ne fait aucun « squashing » de l'entrée. Peu utile en pratique (voir remarque ci-dessus sur la non-linéarité).

![[Linear Activation Function 17.02.15.excalidraw]]
### ReLU

**Formule :** $$ \mathrm{ReLU}(x) = \max(0, x) $$ **Image / intervalle :** $x\in\mathbb{R}$, $\mathrm{ReLU}(x)\in[0,\infty)$.

**Quand l’utiliser :**

- Activation **par défaut** dans les **couches cachées** des réseaux profonds (~95% des modèles).
- Simple, efficace, gradients stables pour $x>0$.
-  Tend à donner des neurones avec des activités **parcimonieuses** (sparse).

**Points d’attention :**

- _Dying ReLU_ : si beaucoup de neurones restent avec $x<0$, gradient nul $\Rightarrow$ neurones “morts”.
- Non utilisée avec les réseaux récurrents classiques.

**Variantes** : Leaky ReLU (LReLU) et Parametric ReLU (PReLU) laissent passer une petite pente pour $x<0$ plutôt que de saturer à 0, ce qui évite le problème des neurones morts.

### Sigmoïde (logistic)

**Formule :** $$ \sigma(x)=\frac{1}{1+e^{-x}} $$ **Image / intervalle :** $x\in\mathbb{R}$, $\sigma(x)\in(0,1)$.

**Quand l’utiliser :**

- **Dernière couche** pour une **classification binaire** quand on veut une probabilité : $$ p(y=1\mid x)=\sigma(z) $$ où $z$ est le score (logit) du modèle.

**Points d’attention :**

- Saturation quand $|x|$ est grand $\Rightarrow$ gradients petits (vanishing gradients).
- Éviter en couches cachées profondes (souvent remplacée par ReLU/variantes).

![[Sigmoid Activation Function 17.20.17.excalidraw]]
### Tangente hyperbolique (tanh)

**Formule :** $$ \tanh(x)=\frac{e^{x}-e^{-x}}{e^{x}+e^{-x}} $$ **Image / intervalle :** $x\in\mathbb{R}$, $\tanh(x)\in(-1,1)$.

**Quand l’utiliser :**

- Couches cachées si on veut une activation **centrée en 0** (sorties positives et négatives).
- Historiquement utilisée (et encore présente dans certains modules comme RNN “classiques”).

**Points d’attention :**

- Comme la sigmoïde : saturation pour grands $|x|$ $\Rightarrow$ gradients faibles.
- Souvent moins utilisée que ReLU dans les réseaux profonds standards.

### Maxout

**Formule :** pour $k$ « morceaux » linéaires,

$$g(\mathbf{x}) = \max_{j\in[1,k]} a_j, \qquad a_j = b_j + \mathbf{w}_j^\top \mathbf{x}$$

Généralise ReLU (k=2, avec un des morceaux fixé à 0) et la valeur absolue. Avec $k$ suffisant, peut approximer n'importe quelle fonction convexe linéaire par morceaux.

**Points d'attention :**

- Ni bornée inférieurement ni supérieurement.
- Ne donne pas d'activités parcimonieuses (contrairement à ReLU).
- Gradients eux-mêmes parcimonieux (un seul morceau actif à la fois).
- Multiplie le nombre de paramètres par $k$ par rapport à un neurone standard.
### Softmax (multiclasse, dernière couche)

**Formule :** pour $z\in\mathbb{R}^K$, $$ \mathrm{softmax}(z)_k=\frac{e^{z_k}}{\sum_{j=1}^{K}e^{z_j}} $$ **Interprétation :** renvoie une distribution de probabilité sur $K$ classes.

**Quand l’utiliser :**

- **Dernière couche** pour **classification multiclasse** (une seule classe vraie).

## Exemple : identité vs ReLU (données en cercles concentriques)

Sur des données non-linéairement séparables (2 classes en anneaux concentriques), un réseau à une couche cachée avec fonction d'activation **identité** $f(x)=x$ reste linéaire malgré la couche cachée → frontière de décision **droite**, sépare mal. Le même réseau avec **ReLU** en couche cachée sépare correctement les anneaux → confirme que c'est la non-linéarité, pas la profondeur seule, qui donne l'expressivité.

## Liens connexes

- [[A - Réseau de neurones]]
- [[C - Classification Linéaire]]
- [[T - Théorème d'approximation universelle]]
- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[MOC - IFT6135 Apprentissage de représentations]]