---

type: concept

cours: [IFT6135]

statut: brouillon

---
$X_1$ et $X_2$ sont indépendantes étant donné $X_3$ si

$$p(x_1,x_2|x_3) = p(x_1|x_3)p(x_2|x_3)$$
ou de façon équivalente $p(x_1|x_2,x_3) = p(x_1|x_3)$ ou $p(x_2|x_1,x_3) = p(x_2|x_3)$.

## Exemple classique
- $Z=$ probabilité qu'une mère porte une maladie génétique liée au chromosome $X$,
- $X=$ probabilité que le premier enfant porte la maladie,
- $Y=$ probabilité pour le second enfant

On a aussi que $X\perp\!\!\!\perp Y|Z$ : une fois le statut de la mère connu, les probabilités des enfants sont indépendantes entre elles. 

C'est ce type d'hypothèse d'indépendance (conditionnelle) qui permet la [[C - Factorisation d'une distribution jointe|factorisation]] au coeur des [[A - Modèle Graphique Probabiliste| modèles graphiques probabilistes]] : l'absence d'arête dans le graphe représente une hypothèse d'indépendance conditionnelle.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[C - Indépendance (variables aléatoires)]]
- [[C - Couverture de Markov]]