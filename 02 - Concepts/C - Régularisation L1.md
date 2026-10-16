---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-09-26

---
Variante de [[C - Régularisation]] pénalisant la valeur absolue des poids (pas des biais) :

$$\Omega(\theta) = \sum_k \sum_i \sum_j |W^{(k)}_{i,j}|$$
**Gradient** : $\nabla_{\mathbf{W}^{(k)}} \Omega(\theta) = \text{sign}(\mathbf{W}^{(k)})$, où $\text{sign}(\mathbf{W}^{(k)})_{i,j} = \mathbb{1}_{W^{(k)}_{i,j}>0} - \mathbb{1}_{W^{(k)}_{i,j}<0}$

**Différence clé avec L2** : pousse certains poids à devenir **exactement** 0 (induit de la parcimonie). Équivaut à un a priori **Laplacien** sur les poids.
## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Régularisation]]
- [[C - Régularisation L2 (Weight Decay)]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Régularisateur L1 et son gradient ?::$\Omega = \sum_{k,i,j} |W^{(k)}_{i,j}|$ ; $\nabla_{\mathbf{W}}\Omega = \mathrm{sign}(\mathbf{W})$.

Différence clé de L1 par rapport à L2 ?::L1 pousse des poids à être **exactement** 0 (parcimonie) ; a priori de Laplace.

Pourquoi L1 produit-elle des zéros exacts alors que L2 non ?::Le gradient de L1 garde une magnitude constante près de 0 et pousse jusqu'à 0 ; celui de L2 ($2W$) s'annule près de 0, donc les poids rétrécissent sans s'annuler.