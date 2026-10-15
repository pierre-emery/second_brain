---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un **modèle de langage** assigne une probabilité à une séquence de mots $w_1, \dots, w_T$. Par la [[C - Règle de Chaîne (Probabilité)|règle de chaîne]], la factorisation suivante est **exacte** :
$$p(w_1, \dots, w_T) = \prod_{t=1}^{T} p(w_t \mid w_1, \dots, w_{t-1})$$
Le problème se ramène donc à modéliser la **conditionnelle du mot suivant** étant donné le contexte.

## Hypothèse de Markov d'ordre $n$

Hypothèse fréquente : le $t$-ième mot ne dépend que des $n-1$ mots précédents :

$$p(w_1, \dots, w_T) \approx \prod_{t=1}^{T} p(w_t \mid w_{t-(n-1)}, \dots, w_{t-1})$$
On appelle $w_{t-(n-1)}, \dots, w_{t-1}$ le **contexte**. C'est l'hypothèse derrière les [[C - n-grammes|modèles n-grammes]] et le [[A - Modèle de Langage Neuronal (Bengio 2003)|modèle de langage neuronal]] de Bengio et al.

## Contexte complet

Question posée en cours : peut-on avoir un réseau qui dépend de **tout** le contexte précédent, sans troncature ? Oui : le [[A - Réseau de Neurones Récurrent (RNN)|RNN]] résume $w_1, \dots, w_{t-1}$ dans son état caché $\mathbf{h}_{t-1}$, de taille fixe peu importe $t$.
## Perte d'entraînement

On maximise la vraisemblance, i.e. on minimise la somme des [[C - Perte d'Entropie Croisée (Cross-Entropy)|entropies croisées]] par pas de temps :

$$l = \sum_{t} -\log p(w_{t+1} \mid w_1, \dots, w_t)$$
## Liens connexes

- [[C - n-grammes]]
- [[A - Modèle de Langage Neuronal (Bengio 2003)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Modèle de Markov Caché (HMM)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]