---
type: algorithme
cours:
  - IFT6269
statut: à réviser
maj: 2026-09-08
---


Second grand formalisme de [[A - Modèle Graphique Probabiliste|modèle graphique probabiliste]] (avec le cas dirigé) : le graphe $G$ utilise des arêtes **non-orientées**. Contrairement au cas dirigé, il ne factorise pas la distribution en distributions conditionnelles, mais en un produit de fonctions plus générales associées aux [[C - Clique (graphe)|cliques]] du graphe.

## Construction

- Une [[C - Clique (graphe)|clique]] $C^{(i)}$ est un sous-ensemble de nœuds tous connectés entre eux dans $G$.
- Chaque clique est associée à un **facteur** (ou potentiel) $\phi^{(i)}(C^{(i)}) \geq 0$. Ce facteur est une fonction quelconque, **pas nécessairement une distribution de probabilité** : rien n'impose qu'il somme ou s'intègre à 1.
- La probabilité d'une configuration donnée des variables est **proportionnelle** au produit de tous ces facteurs : plus le produit est grand, plus la configuration est probable. Comme ce produit ne somme pas forcément à 1, on introduit une **constante de normalisation** $Z$ (aussi appelée fonction de partition), définie comme la somme (ou l'intégrale) sur tous les états possibles du produit des $\phi$ :

$$p(x) = \frac{1}{Z}\prod_i \phi^{(i)}\big(C^{(i)}\big)$$

## Intuition

Le non-dirigé est souvent plus naturel quand les interactions entre variables sont **symétriques** (pas de sens causal ou séquentiel clair), par exemple des contraintes de cohérence mutuelle entre pixels voisins d'une image, plutôt que des dépendances du type « une variable génère l'autre ».

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[C - Clique (graphe)]]
- [[C - Factorisation d'une distribution jointe]]