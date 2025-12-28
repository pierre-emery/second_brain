Les fonctions d'activation permettent de traiter des données linéairement non-séparables. Ces dernières fonctions apportent de la non-linéarité aux réseaux ce qui permet aux réseaux d’apprendre des représentation complexes. Sans non-linéarité, un réseau est un filtre linéaire.
### ReLU
**Formule :**
$$
\mathrm{ReLU}(x) = \max(0, x)
$$
**Image / intervalle :** $x\in\mathbb{R}$, $\mathrm{ReLU}(x)\in[0,\infty)$.

**Quand l’utiliser :**
- Activation **par défaut** dans les **couches cachées** des réseaux profonds.
- Simple, efficace, gradients stables pour $x>0$.

**Points d’attention :**
- *Dying ReLU* : si beaucoup de neurones restent avec $x<0$, gradient nul $\Rightarrow$ neurones “morts”.
### Sigmoïde (logistic)
**Formule :**
$$
\sigma(x)=\frac{1}{1+e^{-x}}
$$
**Image / intervalle :** $x\in\mathbb{R}$, $\sigma(x)\in(0,1)$.

**Quand l’utiliser :**
- **Dernière couche** pour une **classification binaire** quand on veut une probabilité :
  $$
  p(y=1\mid x)=\sigma(z)
  $$
  où $z$ est le score (logit) du modèle.

**Points d’attention :**
- Saturation quand $|x|$ est grand $\Rightarrow$ gradients petits (vanishing gradients).
- Éviter en couches cachées profondes (souvent remplacée par ReLU/variantes).
### Tangente hyperbolique (tanh)
**Formule :**
$$
\tanh(x)=\frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}
$$
**Image / intervalle :** $x\in\mathbb{R}$, $\tanh(x)\in(-1,1)$.

**Quand l’utiliser :**
- Couches cachées si on veut une activation **centrée en 0** (sorties positives et négatives).
- Historiquement utilisée (et encore présente dans certains modules comme RNN “classiques”).

**Points d’attention :**
- Comme la sigmoïde : saturation pour grands $|x|$ $\Rightarrow$ gradients faibles.
- Souvent moins utilisée que ReLU dans les réseaux profonds standards.
### Softmax (multiclasse, dernière couche)
**Formule :** pour $z\in\mathbb{R}^K$,
$$
\mathrm{softmax}(z)_k=\frac{e^{z_k}}{\sum_{j=1}^{K}e^{z_j}}
$$
**Interprétation :** renvoie une distribution de probabilité sur $K$ classes.

**Quand l’utiliser :**
- **Dernière couche** pour **classification multiclasse** (une seule classe vraie).