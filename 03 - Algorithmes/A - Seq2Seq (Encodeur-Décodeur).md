---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un RNN ([[A - LSTM (Long Short-Term Memory)|LSTM]] ou [[A - GRU (Gated Recurrent Unit)|GRU]]) donne de bons modèles sur un espace de séquences cibles $\mathbf{w}$. L'apprentissage **séquence à séquence** (Seq2Seq) vise à prédire une séquence cible $\mathbf{w}$ **à partir d'une séquence d'entrée** $\mathbf{x}$ : modéliser $p(\mathbf{w} \mid \mathbf{x})$.

- Application type : **traduction automatique**.
- On ne peut pas supposer que $\mathbf{w}$ a la même longueur que $\mathbf{x}$, ni qu'elles sont alignées → impossible de traiter le problème comme un simple [[C - Étiquetage de Séquence|étiquetage]].
## Architecture

On fait d'abord lire **toute** la séquence d'entrée par un RNN (l'**encodeur**), puis on continue avec un RNN qui génère la cible comme un [[C - Modélisation du Langage|modèle de langage]] (le **décodeur**), dont l'état initial est l'état final de l'encodeur.

Exemple :

- $\mathbf{x} = [\text{« Un »}, \text{« exemple »}, \text{« de »}, \text{« RNN »}, \text{« . »}]$ ($T_x = 5$)
- $\mathbf{w} = [\text{« An »}, \text{« RNN »}, \text{« example »}, \text{« . »}]$ ($T = 4$)

Le dernier pas de l'encodeur (« . ») produit $p(w_1 \mid \dots)$ ; ensuite chaque $w_t$ est réinjecté pour prédire $w_{t+1}$.

Astuces mentionnées en cours :
- ça peut marcher **mieux avec des paramètres RNN différents** pour traiter $\mathbf{x}$ (encodeur) et $\mathbf{w}$ (décodeur) ;
- ça peut marcher **mieux en lisant $\mathbf{x}$ à l'envers** ($x_4, x_3, x_2, x_1$ puis « . ») : les premiers mots source se retrouvent proches des premiers mots cibles, ce qui raccourcit les dépendances les plus critiques *(astuce de Sutskever et al., 2014 (attribution hors diapos))*.
## Entraînement

Par [[A - Rétropropagation à travers le temps (BPTT)|BPTT]] et descente de gradient sur :
$$l = \sum_{t=0}^{T-1} -\log p(w_{t+1} \mid \mathbf{x}, w_1, \dots, w_t)$$
Le décodeur est conditionné sur les **vrais** mots précédents $w_1, \dots, w_t$ (appelé *teacher forcing* — terme hors diapos).

En pratique, on regroupe les exemples en **mini-lots de séquences de tailles similaires** (moins de remplissage/padding gaspillé).
## Inférence

Il faut trouver $\arg\max_{\mathbf{w}} p(\mathbf{w} \mid \mathbf{x})$, intraitable exactement → [[A - Recherche en Faisceau (Beam Search)]].
## Limites du Seq2Seq « vanille »

- **Goulot d'étranglement** : toute la phrase source doit être compressée dans **un seul vecteur** (l'état final de l'encodeur). Encoder 50 mots dans un vecteur est difficile → il faut de très gros modèles.
- **Dépendances très longues** : le gradient doit remonter ~50 pas sans s'évanouir → entraînement lent et gourmand en données.
- Capturer les dépendances à long terme est **crucial** : le premier mot source $x_1$ peut déterminer le premier mot cible $w_1$, séparés par toute la séquence.

Améliorations : encodeur [[A - RNN Bidirectionnel|bidirectionnel]], puis surtout l'[[A - Attention Douce (Bahdanau)|attention]].
## Cas particulier

[[C - Classification de Séquence]] = Seq2Seq avec une cible d'un seul symbole.
## Liens connexes

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[A - Recherche en Faisceau (Beam Search)]]
- [[A - Attention Douce (Bahdanau)]]
- [[A - RNN Bidirectionnel]]
- [[C - Modélisation du Langage]]
- [[MOC - IFT6135 Apprentissage de Représentations]]