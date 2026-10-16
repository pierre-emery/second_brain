---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un réseau de neurones récurrent (RNN) traite une séquence $x_1, \dots, x_T$ en mettant à jour **récursivement** un état caché persistant $\mathbf{h}_t$, qui résume tout ce qui a été vu jusqu'au temps $t$. Les **mêmes paramètres** sont réutilisés à chaque pas de temps.
## Motivation : les limites du MLP

Un [[A - Réseau de neurones|réseau multicouche (MLP)]] classique :
- **ne peut pas modéliser des séquences** : entrées et sorties de taille fixe, aucune structure temporelle ;
- fait un traitement **purement feed-forward** : aucune « mémoire », aucune rétroaction.

Or les séquences sont partout : reconnaissance d'écriture manuscrite (le sens d'un trait dépend des traits voisins), reconnaissance vocale, traduction automatique (où l'alignement entre mots source et cible n'est pas monotone).
## Équations (RNN pour la modélisation du langage)

Avec $C(w_t)$ le [[C - Plongement de Mots (Word Embedding)|plongement]] du mot $w_t$ :
$$\mathbf{h}_t = \tanh\!\left(\mathbf{b} + \mathbf{U}\,\mathbf{h}_{t-1} + \mathbf{W}\,C(w_t)\right)$$$$p(w_{t+1} = i \mid w_1, \dots, w_t) = \mathrm{softmax}\!\left(\mathbf{c} + \mathbf{V}\,\mathbf{h}_t\right)_i$$
- $\mathbf{W}$ : entrée → caché ; $\mathbf{U}$ : caché → caché (la **récurrence**) ; $\mathbf{V}$ : caché → sortie.
- Pour calculer $p(w_t \mid w_1, \dots, w_{t-1})$ on utilise $\mathbf{h}_{t-1}$, qui encode **tout le contexte précédent**  contrairement au [[A - Modèle de Langage Neuronal (Bengio 2003)|modèle neuronal à fenêtre fixe]] qui ne voit que $n-1$ mots.
- La couche de sortie peut être un softmax **hiérarchique** pour réduire le coût sur un grand vocabulaire.
## Vue « déroulée » dans le temps

On « déroule » le réseau en un graphe acyclique : une copie de la cellule par pas de temps, toutes partageant $\mathbf{W}, \mathbf{U}, \mathbf{V}$ (voir [[C - Partage de Paramètres (Poids Partagés)|partage de paramètres]], ici à travers le **temps** plutôt que l'espace).
Exemple : $\mathbf{w} = [\text{« An »}, \text{« RNN »}, \text{« example »}, \text{« . »}]$ ($T = 4$)
- $\mathbf{h}_0 = \tanh(\mathbf{b} + \mathbf{W}\,C(\texttt{<BOS>}))$ prédit $w_1$, où $C(\texttt{<BOS>})$ est un plongement unique pour la position de **début de phrase** (`<BOS>` n'est **pas** une sortie possible) ;
- $\mathbf{h}_1$ (à partir de $C(w_1)$) prédit $w_2$, etc. ;
- le symbole « . » sert de symbole de **fin de phrase**.

La probabilité de la séquence est alors la factorisation exacte par [[C - Règle de Chaîne (Probabilité)|règle de chaîne]] (voir [[C - Modélisation du Langage]]) :
$$p(\mathbf{w}) = p(w_1)\,p(w_2 \mid w_1)\,p(w_3 \mid w_1, w_2)\,p(w_4 \mid w_1, w_2, w_3)$$
## Entraînement

Par [[A - Rétropropagation à travers le temps (BPTT)|rétropropagation à travers le temps (BPTT)]], sur la somme des pertes par pas de temps. Problèmes principaux : [[C - Gradient Explosif et Évanescent (RNN)|gradients explosifs et évanescents]].
## Variantes et usages

- [[C - RNN Profond (Empilé)]] : empiler plusieurs couches récurrentes
- [[A - LSTM (Long Short-Term Memory)]] et [[A - GRU (Gated Recurrent Unit)]] : cellules à portes pour les dépendances à long terme
- [[A - RNN Bidirectionnel]] : utiliser aussi le contexte futur
- [[C - Étiquetage de Séquence]] et [[C - Classification de Séquence]]
- [[A - Seq2Seq (Encodeur-Décodeur)]] puis [[A - Attention Douce (Bahdanau)]]
## Liens connexes

- [[A - Réseau de neurones]]
- [[C - Modélisation du Langage]]
- [[C - Fonction d'activation]]
- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Deux limites du MLP pour les séquences ?::Entrées/sorties de taille fixe sans structure temporelle ; traitement purement feed-forward, sans mémoire.

Équation de l'état caché d'un RNN ?::$\mathbf{h}_t = \tanh(\mathbf{b} + \mathbf{U}\mathbf{h}_{t-1} + \mathbf{W}C(w_t))$

Rôle de $\mathbf{W}$, $\mathbf{U}$ et $\mathbf{V}$ dans un RNN ?::$\mathbf{W}$ : entrée → caché ; $\mathbf{U}$ : caché → caché (récurrence) ; $\mathbf{V}$ : caché → sortie.

Quel état caché sert à calculer $p(w_t \mid w_1, \ldots, w_{t-1})$ ?::$\mathbf{h}_{t-1}$.

Comment est calculé $\mathbf{h}_0$ ?::$\mathbf{h}_0 = \tanh(\mathbf{b} + \mathbf{W}C(\texttt{<BOS>}))$, sans terme récurrent.

Que signifie « dérouler » un RNN ?::Représenter le calcul comme un graphe acyclique avec une copie de la cellule par pas de temps, toutes partageant les mêmes paramètres.