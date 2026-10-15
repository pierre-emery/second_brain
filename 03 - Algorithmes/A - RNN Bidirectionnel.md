---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Quand on conditionne sur une **séquence d'entrée complète** (déjà entièrement disponible), rien n'oblige à la parcourir uniquement de gauche à droite. Un RNN unidirectionnel **ne peut pas utiliser l'information des pas de temps suivants** -> problème pour l'[[C - Étiquetage de Séquence|étiquetage]] (le tag de « RNN » dépend aussi de « example » qui suit).
## Principe

- Un RNN parcourt la séquence de **gauche à droite** : $\overrightarrow{\mathbf{h}}_t$.
- Un **autre** RNN (paramètres distincts) la parcourt de **droite à gauche** : $\overleftarrow{\mathbf{h}}_t$.
- La représentation au temps $t$ est la **concaténation** : $\mathbf{h}_t = [\overrightarrow{\mathbf{h}}_t ; \overleftarrow{\mathbf{h}}_t]$, qui résume à la fois le passé et le futur de $x_t$.

**Attention :** inutilisable pour la génération auto-régressive (modèle de langage, décodeur), puisque le futur n'existe pas encore.
## RNN bidirectionnel profond

Pour l'étiquetage (POS, NER) : à chaque couche, les deux directions reçoivent la **concaténation** des deux directions de la couche du dessous ; la sortie $p(y_t \mid \dots)$ lit les deux directions de la couche du haut. Voir [[C - RNN Profond (Empilé)]].
## Seq2Seq bidirectionnel

L'**encodeur** est bidirectionnel ; l'état initial du décodeur combine l'état final du RNN avant (après $x_T$) et l'état final du RNN arrière (après $x_1$). Ainsi $x_1$ est « proche » du début du décodage, ce qui raccourcit les dépendances critiques (même motivation que l'inversion de l'entrée dans [[A - Seq2Seq (Encodeur-Décodeur)|Seq2Seq]]).

C'est aussi l'encodeur utilisé avec l'[[A - Attention Douce (Bahdanau)|attention de Bahdanau]] : chaque annotation $\mathbf{h}_j = [\overrightarrow{\mathbf{h}}_j ; \overleftarrow{\mathbf{h}}_j]$ résume la phrase entière centrée sur le mot $x_j$.
## Liens connexes

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Étiquetage de Séquence]]
- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[A - Attention Douce (Bahdanau)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]