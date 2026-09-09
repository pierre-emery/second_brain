---
type: theoreme
cours:
  - IFT6269
statut: brouillon
maj: 2026-09-08
---
Par application successive de la règle du produit ([[C - Conditionnement (probabilité conditionnelle)]]), il est toujours vrai que $$p(x_1,\dots,x_n) = p(x_{1:n-1}),p(x_n \mid x_{1:n-1}) = \cdots = \prod_{i=1}^n p(x_i \mid x_1,\dots,x_{i-1})$$

Ce produit peut ensuite être simplifié en utilisant les hypothèses d'[[C - Indépendance Conditionnelle|indépendance conditionnelle]] qu'on choisit de faire. C'est exactement ce mécanisme qui permet la [[C - Factorisation d'une distribution jointe|factorisation]] utilisée dans les modèles graphiques dirigés.

## Cas d'un modèle graphique dirigé

Pour un **modèle graphique dirigé**, on simplifie chaque facteur en supposant que $X_i$​ ne dépend, conditionnellement, que de ses **parents** dans le graphe (noté $\pi_i$​), plutôt que de toutes les variables précédentes :

$$p(x_i \mid x_{1:i-1}) = p(x_i \mid x_{\pi_i})$$

C'est cette hypothèse structurelle qui donne au [[C - Modèle Graphique Probabiliste|modèle graphique]] sa factorisation compacte.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Conditionnement (probabilité conditionnelle)]]
- [[C - Factorisation d'une distribution jointe]]
- [[A - Modèle Graphique Probabiliste]]