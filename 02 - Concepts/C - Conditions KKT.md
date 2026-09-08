---
type: concept
cours:
  - IFT6135
  - STT3795
  - IFT2505
statut: à réviser
maj: 2026-09-08
---
Approche générale pour résoudre un problème d'**optimisation contrainte**, qui généralise les [[C - Multiplicateurs de Lagrange|multiplicateurs de Lagrange]] aux contraintes d'**inégalité** (pas seulement d'égalité).

## Description de l'ensemble admissible

On décrit l'ensemble des points admissibles $S$ avec $m$ fonctions de contrainte d'égalité $g^{(i)}$ et $n$ fonctions de contrainte d'inégalité $h^{(j)}$ :

$$S = {\mathbf{x} \mid \forall i,; g^{(i)}(\mathbf{x})=0 ;\text{ et }; \forall j,; h^{(j)}(\mathbf{x})\leq0}$$

## Lagrangien généralisé

On introduit un multiplicateur $\lambda_i$ par contrainte d'égalité et $\alpha_j \geq 0$ par contrainte d'inégalité (les **multiplicateurs KKT**) :

$$L(\mathbf{x},\boldsymbol\lambda,\boldsymbol\alpha) = f(\mathbf{x}) + \sum_i \lambda_i g^{(i)}(\mathbf{x}) + \sum_j \alpha_j h^{(j)}(\mathbf{x})$$

Le problème contraint $\min_{\mathbf{x}\in S} f(\mathbf{x})$ devient équivalent au problème non contraint

$$\min_\mathbf{x}\max_{\boldsymbol\lambda}\max_{\boldsymbol\alpha,,\boldsymbol\alpha\geq0} L(\mathbf{x},\boldsymbol\lambda,\boldsymbol\alpha)$$

En effet : quand toutes les contraintes sont satisfaites, le max interne vaut exactement $f(\mathbf{x})$ ; dès qu'une contrainte est violée, le max interne vaut $+\infty$  ce qui garantit qu'aucun point non-admissible ne peut être optimal, et que l'optimum parmi les points admissibles reste inchangé.

## Contraintes actives vs inactives

Une contrainte d'inégalité $h^{(i)}$ est dite **active** si $h^{(i)}(\mathbf{x}^*)=0$ à l'optimum. Si elle est inactive ($h^{(i)}(\mathbf{x}^*)<0$), retirer cette contrainte ne changerait pas la solution localement, mais une contrainte inactive peut tout de même avoir exclu d'autres solutions optimales ailleurs (ex. une région plate de points également optimaux, partiellement éliminée par la contrainte). À l'optimum, une contrainte inactive force son multiplicateur correspondant à zéro, c'est la **complémentarité** : $\boldsymbol\alpha^\top \mathbf{h}(\mathbf{x}) = 0$. Autrement dit, pour chaque contrainte, soit elle est active (et son multiplicateur peut influencer la solution), soit elle ne l'est pas (et son multiplicateur est mis à zéro).

## Les trois conditions KKT

Conditions nécessaires (mais pas toujours suffisantes) pour qu'un point soit optimal :

1. Le gradient du Lagrangien généralisé est nul.
2. Toutes les contraintes (sur $\mathbf{x}$ et sur les multiplicateurs $\alpha_j\geq0$) sont satisfaites.
3. **Complémentarité** : $\boldsymbol\alpha^\top \mathbf{h}(\mathbf{x}) = 0$.

## Exemple d'application

Voir la version contrainte des [[C - Moindres Carrés Ordinaires (MCO)|moindres carrés]] (contrainte $\mathbf{x}^\top\mathbf{x}\leq1$), qui illustre ce mécanisme avec une seule contrainte d'inégalité, résolue par ascension de gradient sur le multiplicateur.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Multiplicateurs de Lagrange]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[C - Contraintes]]
- [[C - Dualité]]