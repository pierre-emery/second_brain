---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-09-04
---
Par application successive de la règle du produit ([[C - Conditionnement (probabilité conditionnelle)]]), il est toujours vrai que $$p(x_1,\dots,x_n) = p(x_{1:n-1}),p(x_n \mid x_{1:n-1}) = \cdots = \prod_{i=1}^n p(x_i \mid x_1,\dots,x_{i-1})$$

Ce produit peut ensuite être simplifié en utilisant les hypothèses d'[[C - Indépendance Conditionnelle|indépendance conditionnelle]] qu'on choisit de faire. C'est exactement ce mécanisme qui permet la [[C - Factorisation d'une distribution jointe|factorisation]] utilisée dans les modèles graphiques dirigés.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Conditionnement (probabilité conditionnelle)]]
- [[C - Factorisation d'une distribution jointe]]
- [[A - Modèle Graphique Probabiliste]]