---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Solution au problème du [[C - Gradient Explosif et Évanescent (RNN)|gradient explosif]].
## Règle

Soit $\theta$ n'importe quelle matrice/vecteur de paramètres du modèle (p. ex. $\mathbf{W}$, $\mathbf{U}$ ou $\mathbf{V}$). **Avant la mise à jour**, si la [[C - Norme|norme]] de $\nabla_\theta l$ dépasse un seuil $C$, on la remet à l'échelle :
$$\nabla_\theta l \Leftarrow C \times \frac{\nabla_\theta l}{\|\nabla_\theta l\|} \qquad \text{si } \|\nabla_\theta l\| > C$$
- La **direction** du gradient est conservée ; seule sa **longueur** est plafonnée à $C$.
- Souvent appliqué avec $\theta$ = la **concaténation de tous les paramètres** du modèle (écrêtage par norme globale), ce qui préserve aussi la direction relative entre les blocs de paramètres.
## Ce que ça ne règle pas

L'écrêtage empêche des pas démesurés, mais ne fait **rien** contre le gradient **évanescent** : voir [[A - Initialisation Orthogonale]] et [[A - LSTM (Long Short-Term Memory)]].

*(Complément, hors diapos : en PyTorch, `torch.nn.utils.clip_grad_norm_(model.parameters(), C)` entre `loss.backward()` et `optimizer.step()`.)*

## Liens connexes

- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Taux d'apprentissage]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
## Flashcards

#flashcards/IFT6135/05-rnn-attention

Règle de l'écrêtage du gradient ?::Si $\|\nabla_\theta l\| > C$ : $\nabla_\theta l \leftarrow C \dfrac{\nabla_\theta l}{\|\nabla_\theta l\|}$.

Que conserve et que modifie l'écrêtage du gradient ?::Il conserve la **direction** et plafonne la **longueur** à $C$.

L'écrêtage aide-t-il contre le gradient évanescent ?::Non, seulement contre l'explosion.

Sur quoi applique-t-on souvent l'écrêtage ?::Sur la concaténation de **tous** les paramètres du modèle (norme globale).