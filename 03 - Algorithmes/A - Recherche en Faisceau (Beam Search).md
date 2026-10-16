---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
À l'inférence, un modèle [[A - Seq2Seq (Encodeur-Décodeur)|Seq2Seq]] doit trouver la séquence la plus probable :
$$\arg\max_{\mathbf{w}}\, p(\mathbf{w} \mid \mathbf{x}) = \arg\max_{\mathbf{w}} \sum_{t=0}^{T-1} \log p(w_{t+1} \mid \mathbf{x}, w_1, \dots, w_t)$$

La recherche exacte est intraitable (il y a $|V|^T$ séquences). La **recherche en faisceau** (beam search) l'approxime.
## Algorithme

- Maintenir les **$k$ meilleures séquences partielles** (« hypothèses ») — $k$ est la taille du faisceau.
- À chaque pas, étendre chaque hypothèse avec chaque mot possible, puis ne garder que les $k$ meilleures.
- Les hypothèses sont **classées selon la log-probabilité de la sous-séquence** (somme des log-probabilités conditionnelles).
- **Arrêter** quand l'hypothèse en tête se termine par le symbole de **fin de phrase**.

Cas limite : $k = 1$ = décodage **glouton** (on prend le mot le plus probable à chaque pas).
## Exemple du cours ($k = 2$)

Au premier pas, « The » est le mot le plus probable et « An » le deuxième. On garde les deux. Au pas suivant, c'est l'extension de **« An »** (→ « RNN ») qui obtient le meilleur score cumulé, puis « example », puis « . » → « An RNN example . ».

Morale : une hypothèse qui n'était **pas** en tête au début peut gagner au final — ce que le décodage glouton aurait raté.
## Remarque *(complément, hors diapos)*

Comme chaque log-probabilité est négative, le score favorise les séquences **courtes** ; on normalise souvent par la longueur ($\frac{1}{T^\alpha}\sum \log p$).
## Liens connexes

- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[C - Modélisation du Langage]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Pourquoi a-t-on besoin d'une approximation pour décoder $\arg\max_\mathbf{w} p(\mathbf{w} \mid \mathbf{x})$ ?::Il y a $|V|^T$ séquences possibles : la recherche exacte est intraitable.

Algorithme de la recherche en faisceau ?::Garder les $k$ meilleures hypothèses partielles, les étendre à chaque pas, les classer par log-probabilité cumulée, ne garder que les $k$ meilleures ; arrêter quand la meilleure se termine par la fin de phrase.

Recherche en faisceau avec $k = 1$ ?::C'est le décodage glouton.

Quel avantage du faisceau illustre l'exemple « The » / « An » du cours ?::Une hypothèse qui n'est pas en tête au début (« An ») peut gagner au final : le glouton l'aurait écartée.

Quel biais a le score de log-probabilité cumulée, et comment le corriger ? *(complément)*::Il favorise les séquences courtes (chaque terme est négatif) ; on normalise par la longueur.