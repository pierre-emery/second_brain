---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Vecteur **ajouté au plongement de chaque jeton** pour donner au [[M - Transformer|Transformer]] une notion d'ordre. L'auto-attention est invariante aux permutations des entrées. L'encodage peut être **appris** ou **prédéfini** (sinusoïdal).

$$PE_{(pos,\,2i)} = \sin\!\left(\frac{pos}{10000^{2i/d_{\text{model}}}}\right),\qquad PE_{(pos,\,2i+1)} = \cos\!\left(\frac{pos}{10000^{2i/d_{\text{model}}}}\right)$$

## Intuition
L'ordre des mots est essentiel à la langue et à la grammaire. Les RNN en tiennent compte par construction, mais l'[[C - Auto-attention (Self-Attention)|auto-attention]] traite l'entrée comme un ensemble. Chaque position reçoit donc une « signature » :
- ce n'est plus un simple nombre (comme l'indice $pos$), mais un **plongement** ;
- il est **hors du modèle** (additionné à l'entrée), ce qui laisse de la liberté.

Chaque paire de dimensions $(2i, 2i+1)$ est une sinusoïde de fréquence différente, des oscillations rapides aux plus lentes (comme les bits d'un compteur binaire, mais continues). Le produit scalaire entre deux encodages dépend surtout de la distance entre les positions (diagonale de la carte du cours), ce qui facilite l'apprentissage de relations relatives : $PE_{pos+k}$ est une fonction linéaire de $PE_{pos}$.

## Formalisme
- Entrée de l'encodeur : $x_{pos} = \text{plongement}(w_{pos}) + PE_{pos}$, de même dimension $d_{\text{model}}$.
- Variante **apprise** : une table de vecteurs indexée par la position (BERT, ViT).

## Exemple
« Je suis étudiant » avec $d=4$ (diapo du cours) : la position 0 a pour encodage $(0, 0, 1, 1)$, la position 1 $(0{,}84;\ 0{,}0001;\ 0{,}54;\ 1)$ et la position 2 $(0{,}91;\ 0{,}0002;\ -0{,}42;\ 1)$ On reconnaît $\sin(pos)$ en 1re composante ($0{,}84 = \sin 1$, $0{,}91 = \sin 2$) et $\cos(pos)$ en 3e ($0{,}54 = \cos 1$, $-0{,}42 = \cos 2$) : la figure (Jalammar) regroupe les sinus puis les cosinus au lieu de les alterner. Les 2e composantes sont illustratives : elles ne suivent pas exactement la formule.

## IFT6135 — ce qui compte
Ablation du papier original (ligne E) : encodage sinusoïdal et encodage appris donnent **les mêmes résultats**. Pour ViT, les plongements de position appris ne portent pas d'information 2D explicite.

## Flashcards
#flashcards/IFT6135/06-transformer

Pourquoi le Transformer a-t-il besoin d'un encodage positionnel ?::L'auto-attention est invariante aux permutations : sans information de position, l'ordre des mots serait perdu.

Formule de l'encodage positionnel sinusoïdal ?::$PE_{(pos,2i)}=\sin(pos/10000^{2i/d})$, $PE_{(pos,2i+1)}=\cos(pos/10000^{2i/d})$.

Encodage sinusoïdal ou appris : lequel est meilleur selon Vaswani et al. ?::Résultats équivalents ; le sinusoïdal ne demande aucun paramètre et peut s'appliquer à des longueurs non vues.

Pourquoi des sinusoïdes de fréquences différentes ?::Elles donnent à chaque position une signature unique, et le décalage $pos\to pos+k$ est une transformation linéaire, ce qui aide à apprendre des positions relatives.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[M - Transformer]]
- [[C - Auto-attention (Self-Attention)]]
- [[C - Plongement de Mots (Word Embedding)]]
