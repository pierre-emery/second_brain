---

type: concept

cours: [IFT6135]

statut: brouillon

---
Matrice carrée $\mathbf{X}$ dont tous les éléments hors de la diagonale sont nuls :

$$X_{i,j} = 0 \text{ si } i \neq j$$
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Matrice Identité]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition d'une matrice diagonale ?::Matrice carrée avec $X_{i,j} = 0$ pour tout $i \neq j$.

Le facteur $\mathrm{diag}(1 - \mathbf{h}^2)$ dans la BPTT d'un RNN est une matrice diagonale. Que représente-t-il ?
?
La jacobienne de $\tanh$ appliquée élément par élément : chaque unité ne dépend que de sa propre pré-activation, donc la jacobienne est diagonale, avec $\tanh'(a_i) = 1 - h_i^2$.