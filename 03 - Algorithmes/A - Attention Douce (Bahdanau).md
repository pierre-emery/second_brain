---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
*Neural Machine Translation by Jointly Learning to Align and Translate*, Bahdanau, Cho, Bengio, ICLR 2015. Diapos de D. Bahdanau, éditées par A. Courville et A. Agrawal.

## Problème : le Seq2Seq « vanille »

Dans un [[A - Seq2Seq (Encodeur-Décodeur)|encodeur-décodeur]] classique :
- **goulot d'étranglement** : toute la phrase source est compressée dans le dernier état caché de l'encodeur ; encoder 50 mots dans un vecteur demande de très gros modèles ;
- **dépendances très longues** : les gradients doivent remonter ~50 pas sans s'évanouir → entraînement lent, beaucoup de données.
## Idée : l'attention douce

- Le décodeur **se concentre sur les états cachés pertinents de l'encodeur** à chaque pas, au lieu de tout comprimer dans le dernier état → **plus de goulot**.
- Cela crée **dynamiquement des raccourcis** dans le graphe de calcul, par lesquels le gradient circule librement → **dépendances plus courtes**.

- Fonctionne le mieux avec un encodeur [[A - RNN Bidirectionnel|bidirectionnel]] : $\mathbf{h}_j = [\overrightarrow{\mathbf{h}}_j ; \overleftarrow{\mathbf{h}}_j]$ (« annotations »).

## Équations — vecteur de contexte

À chaque pas $i$, le décodeur consomme une **combinaison pondérée différente** des états de l'encodeur, appelée **vecteur de contexte** (ou *glimpse*) $c_i$ :
$$p(y_i \mid y_1, \dots, y_{i-1}, \mathbf{x}) = g(y_{i-1}, s_i, c_i)$$
$$s_i = f(s_{i-1}, y_{i-1}, c_i)$$
$$c_i = \sum_{j=1}^{T_x} \alpha_{ij}\, h_j$$

où $s_i$ est l'état du décodeur. Contrairement au Seq2Seq de base, la probabilité de chaque mot cible est conditionnée sur un contexte **distinct** $c_i$.
## Équations -> d'où viennent les poids ?

Ils sont calculés par **un autre réseau** :
$$\alpha_{ij} = \frac{\exp(e_{ij})}{\sum_{k=1}^{T_x} \exp(e_{ik})}, \qquad e_{ij} = a(s_{i-1}, h_j)$$

- $\alpha_{i\cdot}$ est un softmax sur les positions source : des poids positifs qui somment à 1 (une distribution « douce » sur où regarder).
- $e_{ij}$ est un **score d'alignement** : à quel point la position source $j$ est pertinente pour produire $y_i$, étant donné l'état précédent du décodeur.
- Choix de l'article original : un **MLP à une couche** (attention « additive ») :
$$a(s_{i-1}, h_j) = \mathbf{v}_a^\top \tanh(\mathbf{W}_a s_{i-1} + \mathbf{U}_a h_j)$$
Tout est **différentiable** → le modèle d'alignement est appris **conjointement** avec la traduction par rétropropagation, sans supervision d'alignement.
## Visualisation

Les poids $\alpha_{ij}$ forment un **alignement doux** appris entre mots source et cible. Exemples du cours :

- anglais → français : « European Economic Area » ↔ « Espace économique européen ». L'attention **inverse l'ordre** de l'adjectif et du nom correctement ;
- anglais → allemand : le verbe « occupies » s'aligne avec « einnimmt » en **dernière position** de la phrase allemande.

Bonnes visualisations : distill.pub/2016/augmented-rnns (*Attentional interfaces*).
## Résultats (traduction anglais → français)

- **Pas de chute de performance sur les phrases longues** : le BLEU de RNNsearch-50 reste ~stable jusqu'à 60 mots, alors que l'encodeur-décodeur (RNNenc) s'effondre au-delà de ~20 mots.
- Bien meilleur que l'encodeur-décodeur : BLEU 26.75 (RNNsearch-50) contre 17.82 (RNNencdec-50) sur toutes les phrases.
- Sans mots inconnus, comparable au système de traduction statistique (SMT) Moses : 36.15 (RNNsearch-50\*, entraîné plus longtemps) contre 35.63. 

(Le suffixe 30/50 = longueur maximale des phrases d'entraînement.)
## Liens connexes

- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[A - RNN Bidirectionnel]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - GRU (Gated Recurrent Unit)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Deux bénéfices de l'attention douce par rapport au Seq2Seq vanille ?::Plus de goulot d'étranglement (le décodeur voit tous les états de l'encodeur) ; raccourcis dans le graphe de calcul → dépendances plus courtes pour le gradient.

Formule du vecteur de contexte $c_i$ ?::$c_i = \sum_{j=1}^{T_x} \alpha_{ij} h_j$ : moyenne pondérée des annotations de l'encodeur.

Formule des poids d'attention $\alpha_{ij}$ ?::$\alpha_{ij} = \dfrac{\exp(e_{ij})}{\sum_k \exp(e_{ik})}$ avec $e_{ij} = a(s_{i-1}, h_j)$.

Fonction de score de l'attention de Bahdanau (additive) ?::$a(s_{i-1}, h_j) = \mathbf{v}_a^\top\tanh(\mathbf{W}_a s_{i-1} + \mathbf{U}_a h_j)$ : un MLP à une couche.

Équations du décodeur avec attention ?::$s_i = f(s_{i-1}, y_{i-1}, c_i)$ ; $p(y_i \mid y_{<i}, \mathbf{x}) = g(y_{i-1}, s_i, c_i)$.

Quel encodeur utilise-t-on avec l'attention de Bahdanau et pourquoi ?::Bidirectionnel : $h_j = [\overrightarrow{h}_j; \overleftarrow{h}_j]$ résume toute la phrase centrée sur le mot $j$.

Comment l'alignement est-il appris dans l'attention de Bahdanau ?::Conjointement avec la traduction, par rétropropagation (tout est différentiable), sans supervision d'alignement.

Résultat clé de RNNsearch vs RNNencdec sur les phrases longues ?::RNNsearch ne perd pas de performance avec la longueur, alors que l'encodeur-décodeur s'effondre au-delà de ~20 mots (BLEU 26.75 vs 17.82).

Exemple d'alignement non monotone appris par l'attention ?::« European Economic Area » ↔ « Espace économique européen » (ordre inversé), ou le verbe allemand en fin de phrase.