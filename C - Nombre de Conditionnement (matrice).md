---
type: concept
cours: IFT6135
statut: complet
maj: 2026-09-08
---
Mesure à quel point une fonction change rapidement par rapport à de petits changements dans ses entrées. Une fonction qui change beaucoup pour une petite perturbation de l'entrée est problématique en calcul scientifique : une erreur d'arrondi sur l'entrée peut produire un grand changement en sortie.

## Définition (via les valeurs propres)

Pour $f(x)=A^{−1}x$ avec $A\in \mathbb R^{n×n}$ diagonalisable, le nombre de conditionnement est
$$\max_{i,j}\left|\frac{\lambda_i}{\lambda_j}\right|$$​soit le ratio entre la plus grande et la plus petite [[C - Valeurs et Vecteurs propres|valeur propre]] (en valeur absolue).

## Interprétation

Quand ce nombre est grand, la matrice est dite **mal conditionnée** : l'[[C - Inverse d'une matrice|inversion]] de $A$ est particulièrement sensible aux erreurs dans l'entrée. Cette sensibilité est une propriété **intrinsèque** de la matrice elle-même, pas une conséquence de l'algorithme d'inversion utilisé. L'erreur numérique du processus d'inversion s'ajoute par-dessus, en pratique.

## Conséquence en optimisation

Une [[C - Matrice Hessienne|Hessienne]] mal conditionnée ressemble à un « canyon » très allongé : la direction de plus forte courbure a beaucoup plus de courbure que la direction de plus faible courbure. La [[A - Rétropropagation du gradient (gradient descent)|descente de gradient]] a alors tendance à osciller d'un mur du canyon à l'autre plutôt que d'avancer efficacement. C'est un problème que la [[A - Méthode de Newton (optimisation)|méthode de Newton]] corrige en exploitant l'information de courbure.

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Inverse d'une matrice]]
- [[C - Erreur d'arrondi et Dépassement de capacité (Overflow-Underflow)]]
- [[A - Méthode de Newton (optimisation)]]