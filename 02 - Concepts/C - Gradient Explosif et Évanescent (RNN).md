---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-10-15
---
Dans un [[A - Réseau de Neurones Récurrent (RNN)|RNN]], le gradient d'une perte future $1_{t+\delta}$ par rapport à un état caché passé $\mathbf{h}_t$ s'obtient (voir [[A - Rétropropagation à travers le temps (BPTT)|BPTT]]) par un produit de $\delta$ matrices : $$\nabla_{\mathbf{h}_t} l_{t+\delta} = \left(\prod_{t'=t+1}^{t+\delta} \mathbf{U}^\top \mathrm{diag}(1 - \mathbf{h}_{t'}^2)\right) \nabla_{\mathbf{h}_{t+\delta}} l_{t+\delta}$$
Chaque facteur est la [[C - Matrice Jacobienne|jacobienne]] transposée $\partial \mathbf{h}_{t'} / \partial \mathbf{h}_{t'-1} = \mathrm{diag}(1 - \mathbf{h}_{t'}^2)\,\mathbf{U}$. Et $\nabla_{\mathbf{h}_t} l = \sum_{\delta} \nabla_{\mathbf{h}_t} l_{t+\delta}$.

Question clé : que se passe-t-il quand l'écart $\delta$ grandit ?
## Gradient explosif

- Si $\mathbf{U}$ est « grande », alors $\nabla_{\mathbf{h}_t} l_{t+\delta}$ **croît exponentiellement** avec $\delta$.
- Les gradients sur $\mathbf{W}$ et sur… $\mathbf{U}$ elle-même deviennent alors énormes → pas de mise à jour démesurés, entraînement instable.
- Solution : [[A - Écrêtage du Gradient (Gradient Clipping)|écrêtage du gradient]].
## Gradient évanescent (vanishing gradient)

- Si $\mathbf{U}$ est « petite » **ou** si les unités cachées $\mathbf{h}_{t'}$ sont **saturées** ($|h| \approx 1 \Rightarrow 1 - h^2 \approx 0$), alors $\nabla_{\mathbf{h}_t} l_{t+\delta}$ **décroît exponentiellement**.
- Le modèle **ne peut pas apprendre les dépendances à long terme** : le signal d'erreur d'un mot lointain n'atteint jamais les états qui auraient dû le capturer.
- Solutions : [[A - Initialisation Orthogonale]], et surtout les cellules à portes [[A - LSTM (Long Short-Term Memory)|LSTM]] / [[A - GRU (Gated Recurrent Unit)|GRU]] ; plus tard l'[[A - Attention Douce (Bahdanau)|attention]], qui crée des raccourcis dans le graphe.

## Intuition spectrale *(complément, hors diapos)*

En ignorant le facteur $\mathrm{diag}(1-\mathbf{h}^2)$ (dont les entrées sont dans $(0, 1]$), le produit se comporte comme $(\mathbf{U}^\top)^\delta$, dont la norme évolue asymptotiquement comme $\rho(\mathbf{U})^\delta$, où $\rho$ est le rayon spectral (plus grande [[C - Valeurs et Vecteurs propres|valeur propre]] en module). « Grande » ≈ $\rho > 1$ (condition nécessaire à l'explosion), « petite » ≈ plus grande valeur singulière $< 1$ (condition suffisante à l'évanescence, Pascanu et al. 2013). Comme $\tanh' \leq 1$, la saturation ne peut que rendre l'évanescence plus probable.
## Lien avec les réseaux profonds

C'est le même phénomène que dans un réseau feed-forward très profond (voir [[A - ResNet (Connexion Résiduelle)|ResNet]]), mais aggravé : la **même** matrice $\mathbf{U}$ est multipliée à chaque pas, au lieu de matrices différentes.
## Liens connexes

- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[A - Écrêtage du Gradient (Gradient Clipping)]]
- [[A - Initialisation Orthogonale]]
- [[A - LSTM (Long Short-Term Memory)]]
- [[C - Fonction d'activation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Quand le gradient d'un RNN explose-t-il ?::Quand $\mathbf{U}$ est « grande » : $\nabla_{\mathbf{h}_t} l_{t+\delta}$ croît exponentiellement avec $\delta$.

Quand le gradient d'un RNN s'évanouit-il (deux causes) ?::Quand $\mathbf{U}$ est « petite », ou quand les unités cachées sont saturées ($1 - h^2 \approx 0$).

Conséquence concrète du gradient évanescent ?::Le modèle ne peut pas apprendre les dépendances à long terme.

Conséquence concrète du gradient explosif ?::Gradients énormes sur $\mathbf{W}$ et $\mathbf{U}$ → pas démesurés, entraînement instable.

Solutions : à quel problème répond chacune ? écrêtage, initialisation orthogonale, LSTM/GRU.::Écrêtage → explosion. Initialisation orthogonale → les deux, au début. LSTM/GRU → évanescence (chemin additif).

Pourquoi le problème est-il pire dans un RNN que dans un réseau profond feed-forward ?::La **même** matrice $\mathbf{U}$ est multipliée à chaque pas, au lieu de matrices différentes : les effets se composent exponentiellement.

Quelle quantité spectrale gouverne l'explosion/évanescence ? *(complément)*::Le rayon spectral de $\mathbf{U}$ : $> 1$ nécessaire à l'explosion ; plus grande valeur singulière $< 1$ suffit à l'évanescence.