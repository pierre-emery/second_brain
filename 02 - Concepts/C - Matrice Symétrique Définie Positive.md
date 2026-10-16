---

type: concept

cours: [IFT6135]

statut: brouillon

---
Matrice $\mathbf{X}$ symétrique telle que

$$\mathbf{v}^\top \mathbf{X} \mathbf{v} > 0 \quad \forall \mathbf{v} \in \mathbb{R}^d$$

(si l'inégalité est $\geq$, la matrice est dite semi-définie positive).

**Équivalence via les valeurs propres** : $\mathbf{X}$ est définie positive si et seulement si $\lambda_i > 0\ \forall i$.

Les matrices de covariance sont toujours symétriques semi-définies positives.

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Matrice Symétrique]]
- [[C - Matrice de Variance-Covariance]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition d'une matrice symétrique définie positive ?::$\mathbf{X}$ symétrique avec $\mathbf{v}^\top\mathbf{X}\mathbf{v} > 0$ pour tout $\mathbf{v} \neq \mathbf{0}$ (semi-définie si $\geq 0$).

Pourquoi une matrice de covariance est-elle semi-définie positive ?::$\mathbf{v}^\top\mathrm{Cov}(\mathbf{X})\mathbf{v} = \mathrm{Var}(\mathbf{v}^\top\mathbf{X}) \geq 0$.

Que signifie une Hessienne définie positive en un point critique ?::Courbure positive dans toutes les directions → minimum local.