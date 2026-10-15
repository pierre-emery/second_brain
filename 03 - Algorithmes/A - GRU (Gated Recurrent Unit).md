---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Le **GRU** (Cho, van Merriënboer, Bahdanau, Bengio, 2014) est une simplification du [[A - LSTM (Long Short-Term Memory)|LSTM]] : moins de portes, pas de distinction entre état de cellule et état caché.
## Équations

**Portes de mise à jour et de réinitialisation :**
$$\mathbf{z}_t = \mathrm{sigm}(\mathbf{b}_{[z]} + \mathbf{U}_{[z]}\mathbf{h}_{t-1} + \mathbf{W}_{[z]}C(w_t))$$
$$\mathbf{r}_t = \mathrm{sigm}(\mathbf{b}_{[r]} + \mathbf{U}_{[r]}\mathbf{h}_{t-1} + \mathbf{W}_{[r]}C(w_t))$$
**État de cellule :**
$$\widetilde{\mathbf{c}}_t = \tanh(\mathbf{b}_{[c]} + \mathbf{U}_{[c]}(\mathbf{r}_t \odot \mathbf{h}_{t-1}) + \mathbf{W}_{[c]}C(w_t))$$
$$\mathbf{c}_t = (1 - \mathbf{z}_t) \odot \mathbf{c}_{t-1} + \mathbf{z}_t \odot \widetilde{\mathbf{c}}_t$$
**Couche cachée :**
$$\mathbf{h}_t = \mathbf{c}_t$$
## Ce qui change par rapport au LSTM

| | LSTM | GRU |
|---|---|---|
| Portes | entrée $\mathbf{i}$, oubli $\mathbf{f}$, sortie $\mathbf{o}$ | mise à jour $\mathbf{z}$, réinitialisation $\mathbf{r}$ |
| Mise à jour de la cellule | $\mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \widetilde{\mathbf{c}}_t$ | $(1-\mathbf{z}_t) \odot \mathbf{c}_{t-1} + \mathbf{z}_t \odot \widetilde{\mathbf{c}}_t$ |
| État caché | $\mathbf{o}_t \odot \tanh(\mathbf{c}_t)$ | $\mathbf{c}_t$ |
| Blocs de paramètres | 4 | 3 |
  
- **Moins de portes** → moins de paramètres et de calculs.
- La porte de mise à jour **couple** oubli et entrée ($\mathbf{f} = 1 - \mathbf{z}$, $\mathbf{i} = \mathbf{z}$) : une interpolation convexe entre l'ancien état et le candidat (variante jugée efficace par Greff et al. (2015)).
- La porte de réinitialisation $\mathbf{r}_t$ décide quelle partie de l'état passé sert à calculer le candidat ($\mathbf{r} \approx 0$ : « repartir de zéro »).
- La **couche cachée est l'état de cellule** : encore moins de calculs (pas de porte de sortie ni de $\tanh$ final).

Le mécanisme anti-évanescence est le même : quand $\mathbf{z}_t \approx 0$, $\mathbf{c}_t \approx \mathbf{c}_{t-1}$ et le gradient traverse le pas de temps presque intact.
## Liens connexes

- [[A - LSTM (Long Short-Term Memory)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]