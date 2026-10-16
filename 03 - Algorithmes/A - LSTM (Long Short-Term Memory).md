---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Le **LSTM** (Hochreiter & Schmidhuber, 1995 -> rapport technique ; article *Neural Computation* en 1997) est une cellule récurrente conçue pour apprendre des **dépendances à long terme** en contournant le [[C - Gradient Explosif et Évanescent (RNN)|gradient évanescent]]. L'état caché $\mathbf{h}_t$ y devient une fonction de **cellules mémoire** $\mathbf{c}_t$, dont le flux d'information est contrôlé par des **portes**.
## Équations

Notation : $\mathrm{sigm}$ = sigmoïde (valeurs dans $(0,1)$, donc une « ouverture » de porte), $\odot$ = produit élément par élément, $C(w_t)$ = entrée au temps $t$.

**Portes d'entrée, d'oubli, de sortie :**
$$\mathbf{i}_t = \mathrm{sigm}(\mathbf{b}_{[i]} + \mathbf{U}_{[i]}\mathbf{h}_{t-1} + \mathbf{W}_{[i]}C(w_t))$$
$$\mathbf{f}_t = \mathrm{sigm}(\mathbf{b}_{[f]} + \mathbf{U}_{[f]}\mathbf{h}_{t-1} + \mathbf{W}_{[f]}C(w_t))$$
$$\mathbf{o}_t = \mathrm{sigm}(\mathbf{b}_{[o]} + \mathbf{U}_{[o]}\mathbf{h}_{t-1} + \mathbf{W}_{[o]}C(w_t))$$

**État de cellule :**
$$\widetilde{\mathbf{c}}_t = \tanh(\mathbf{b}_{[c]} + \mathbf{U}_{[c]}\mathbf{h}_{t-1} + \mathbf{W}_{[c]}C(w_t))$$
$$\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \widetilde{\mathbf{c}}_t$$
**Couche cachée :**
$$\mathbf{h}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)$$
## Rôle de chaque composante

- Les **portes** contrôlent le flux d'information **vers** la cellule ($\mathbf{i}_t$ : quoi écrire, $\mathbf{f}_t$ : quoi garder) et **hors** de la cellule ($\mathbf{o}_t$ : quoi exposer).
- L'**état de cellule** $\mathbf{c}_t$ maintient l'information sur l'entrée ; $\widetilde{\mathbf{c}}_t$ est le contenu candidat.
- La **couche cachée** $\mathbf{h}_t$ voit seulement ce qui passe par la porte de sortie.

Schéma de référence : billet de Chris Olah, *Understanding LSTM Networks* : la « ligne » horizontale du haut ($\mathbf{c}_{t-1} \to \mathbf{c}_t$) ne subit qu'une multiplication ($\times \mathbf{f}_t$) et une addition ($+ \mathbf{i}_t \odot \widetilde{\mathbf{c}}_t$).
## Pourquoi c'est meilleur pour le long terme

En déroulant la récurrence additive de la cellule :

$$\mathbf{c}_t = \sum_{t'=0}^{t} \mathbf{f}_t \odot \cdots \odot \mathbf{f}_{t'+1} \odot \mathbf{i}_{t'} \odot \widetilde{\mathbf{c}}_{t'}$$

- Tant que les **portes d'oubli sont ouvertes** (proches de 1), le gradient peut passer de $\widetilde{\mathbf{c}}_{t'}$ à $\mathbf{c}_t$ sur de **longs écarts temporels**, sans être multiplié par $\mathbf{U}$ ni par $\tanh'$ à chaque pas.

- La **saturation des portes d'oubli n'arrête pas le flux de gradient** : une porte saturée à 1 a une dérivée nulle par rapport à ses propres paramètres, mais le chemin $\mathbf{c}_{t-1} \to \mathbf{c}_t$ a alors un facteur 1.

- Cela suggère d'**initialiser le biais de la porte d'oubli** $\mathbf{b}_{[f]} \gg 0$ (p. ex. $1$), pour que le réseau « se souvienne » par défaut au début de l'entraînement.

- L'apprentissage par [[A - Rétropropagation à travers le temps (BPTT)|BPTT]] est plus efficace ; les gradients se calculent facilement par différentiation automatique.
## Variantes

**Connexions « peephole »** : les portes regardent aussi l'état de cellule.
$$\mathbf{i}_t = \mathrm{sigm}(\mathbf{b}_{[i]} + \mathbf{U}_{[i]}\mathbf{h}_{t-1} + \mathbf{W}_{[i]}C(w_t) + \mathbf{V}_{[i]}\mathbf{c}_{t-1})$$
$$\mathbf{f}_t = \mathrm{sigm}(\mathbf{b}_{[f]} + \mathbf{U}_{[f]}\mathbf{h}_{t-1} + \mathbf{W}_{[f]}C(w_t) + \mathbf{V}_{[f]}\mathbf{c}_{t-1})$$
$$\mathbf{o}_t = \mathrm{sigm}(\mathbf{b}_{[o]} + \mathbf{U}_{[o]}\mathbf{h}_{t-1} + \mathbf{W}_{[o]}C(w_t) + \mathbf{V}_{[o]}\mathbf{c}_{t})$$
(la porte de sortie regarde $\mathbf{c}_t$, déjà calculé.)

**Ablation empirique** : *LSTM: A Search Space Odyssey* (Greff, Srivastava, Koutník, Steunebrink, Schmidhuber, 2015) :
- la **porte d'oubli** est cruciale, ainsi que la **porte de sortie** si l'état de cellule est non borné ;
- **coupler** les portes d'entrée et d'oubli ($\mathbf{f}_t = 1 - \mathbf{i}_t$) fonctionne aussi bien → idée reprise par le [[A - GRU (Gated Recurrent Unit)|GRU]].
## Coût *(complément, hors diapos)*

4 blocs ($i, f, o, \widetilde{c}$) → environ $4 \times (d_h^2 + d_h d_x + d_h)$ paramètres, soit 4 fois un RNN simple de même taille.
## Liens connexes

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[A - GRU (Gated Recurrent Unit)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[C - Fonction d'activation]]
- [[A - ResNet (Connexion Résiduelle)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Équations des trois portes d'un LSTM ?::$\mathbf{i}_t, \mathbf{f}_t, \mathbf{o}_t = \mathrm{sigm}(\mathbf{b}_{[\cdot]} + \mathbf{U}_{[\cdot]}\mathbf{h}_{t-1} + \mathbf{W}_{[\cdot]}C(w_t))$, chacune avec ses propres paramètres.

Équations de la cellule et de l'état caché d'un LSTM ?
?
$\widetilde{\mathbf{c}}_t = \tanh(\mathbf{b}_{[c]} + \mathbf{U}_{[c]}\mathbf{h}_{t-1} + \mathbf{W}_{[c]}C(w_t))$ ; $\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \widetilde{\mathbf{c}}_t$ ; $\mathbf{h}_t = \mathbf{o}_t \odot \tanh(\mathbf{c}_t)$.

Rôle de chaque porte du LSTM ?::$\mathbf{i}_t$ : quoi écrire dans la cellule ; $\mathbf{f}_t$ : quoi garder ; $\mathbf{o}_t$ : quoi exposer dans $\mathbf{h}_t$.

Pourquoi le LSTM apprend-il mieux les dépendances à long terme ?::La cellule est mise à jour de façon **additive** : tant que $\mathbf{f} \approx 1$, le gradient passe de $\widetilde{\mathbf{c}}_{t'}$ à $\mathbf{c}_t$ sans être multiplié par $\mathbf{U}$ ni par $\tanh'$ à chaque pas.

Forme déroulée de $\mathbf{c}_t$ ?::$\mathbf{c}_t = \sum_{t'=0}^{t} \mathbf{f}_t \odot \cdots \odot \mathbf{f}_{t'+1} \odot \mathbf{i}_{t'} \odot \widetilde{\mathbf{c}}_{t'}$

Pourquoi la saturation des portes d'oubli n'arrête-t-elle pas le flux de gradient ?::Une porte saturée à 1 a une dérivée nulle par rapport à ses paramètres, mais le chemin $\mathbf{c}_{t-1} \to \mathbf{c}_t$ a alors un facteur 1 : le gradient passe.

Comment initialiser le biais de la porte d'oubli et pourquoi ?::$\mathbf{b}_{[f]} \gg 0$ (p. ex. 1) : la cellule « se souvient » par défaut au début de l'entraînement.

Qu'est-ce qu'une connexion peephole ?::Les portes reçoivent aussi l'état de cellule ($\mathbf{c}_{t-1}$ pour $i, f$ ; $\mathbf{c}_t$ pour $o$).

Deux conclusions de Greff et al. (2015, « LSTM: A Search Space Odyssey ») ?::La porte d'oubli est cruciale (et la porte de sortie si la cellule est non bornée) ; coupler $\mathbf{f}_t = 1 - \mathbf{i}_t$ fonctionne aussi bien.