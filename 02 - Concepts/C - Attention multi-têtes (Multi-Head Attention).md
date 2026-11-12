---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
On exécute $H$ [[C - Auto-attention (Self-Attention)|auto-attentions]] en parallèle, chacune avec ses propres projections $W_Q^{(h)}, W_K^{(h)}, W_V^{(h)}$ (souvent de dimension $d_m/H$), puis on concatène les sorties et on les projette.

$$\mathrm{MultiHead}(X) = \big[\mathrm{head}_1;\dots;\mathrm{head}_H\big]\,W_O,\qquad \mathrm{head}_h = \mathrm{softmax}\!\left(\frac{XW_Q^{(h)}\,(XW_K^{(h)})^\top}{\sqrt{d_k}}\right)XW_V^{(h)}$$

## Intuition
Une seule tête fait **une** moyenne pondérée par position ; elle ne peut pas regarder à la fois le sujet du verbe et l'antécédent d'un pronom. Plusieurs têtes peuvent se concentrer sur des relations différentes. Exemple du cours : pour « it », une tête regarde « animal », une autre « tired ». Avec toutes les têtes affichées ensemble, c'est plus difficile à interpréter.

## Formalisme
- Chaque tête : les étapes 1 à 4 de l'auto-attention, avec ses propres projections linéaires.
- Sorties concaténées, puis une couche linéaire produit l'entrée de la couche $p+1$.
- Encodeur multicouche : chaque couche = attention multi-têtes + réseau à propagation avant (*feed forward*), empilées $J$ fois.

## Exemple
BERT-Base : 12 têtes, dimension 768, donc 64 dimensions par tête.

## Flashcards
#flashcards/IFT6135/06-transformer

Pourquoi utiliser plusieurs têtes d'attention ?::Une tête ne fait qu'une moyenne pondérée ; plusieurs têtes capturent des relations différentes en parallèle (par exemple « it » → « animal » et « it » → « tired »).

Comment combine-t-on les têtes ?::On concatène leurs sorties puis on applique une projection linéaire $W_O$.

Pourquoi le coût total reste-t-il comparable à une seule tête ?::Chaque tête travaille en dimension $d_m/H$ : la somme des coûts est à peu près celle d'une tête pleine dimension.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Auto-attention (Self-Attention)]]
- [[M - Transformer]]
