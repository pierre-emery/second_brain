---

type: concept

cours: [IFT6135]

statut: brouillon

---
Nombre de colonnes linéairement indépendantes d'une matrice.

Un ensemble de vecteurs $\{\mathbf{x}^{(t)}\}$ est linéairement dépendant si

$$\exists\, \mathbf{w}, t^* \text{ tel que } \mathbf{x}^{(t^*)} = \sum_{t \neq t^*} w_t \mathbf{x}^{(t)}$$

**Lien avec les valeurs propres** : le rang d'une matrice est égal au nombre de ses valeurs propres non-nulles.
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Espace Image (Range) d'une matrice]]
- [[C - Espace Nul (Null Space) d'une matrice]]
- [[C - Valeurs et Vecteurs propres]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition du rang d'une matrice ?::Le nombre de colonnes linéairement indépendantes.

Quand un ensemble de vecteurs $\{\mathbf{x}^{(t)}\}$ est-il linéairement dépendant ?::Quand l'un d'eux s'écrit comme combinaison linéaire des autres : $\exists\, t^*, \mathbf{w}$ tels que $\mathbf{x}^{(t^*)} = \sum_{t \neq t^*} w_t \mathbf{x}^{(t)}$.

Lien entre rang et valeurs propres ? (attention à la condition)::Pour une matrice diagonalisable (p. ex. symétrique), le rang est le nombre de valeurs propres non nulles. Ce n'est pas vrai en général (contre-exemple : $\begin{bmatrix}0&1\\0&0\end{bmatrix}$ a rang 1 mais deux valeurs propres nulles).