---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-08
---
Conventions pour désigner des parties d'un [[C - Scalaire, Vecteur, Matrice et Tenseur|vecteur ou d'une matrice]], plutôt qu'un seul élément.

## Lignes et colonnes d'une matrice

Pour une matrice $\mathbf{A}$, on isole une coupe horizontale ou verticale complète en fixant un seul indice et en remplaçant l'autre par « : » :

- $A_{i,:}$ : la $i$-ème **ligne** de $\mathbf{A}$.
- $A_{:,i}$ : la $i$-ème **colonne** de $\mathbf{A}$.

## Sous-ensemble d'éléments d'un vecteur

Pour accéder simultanément à plusieurs éléments d'un vecteur $\mathbf{x}$, on définit un ensemble d'indices $S$ (ex. $S={1,3,6}$) et on écrit $\mathbf{x}_S$ pour le sous-vecteur correspondant ($x_1, x_3, x_6$). Le signe « $-$ » indexe le complément : $\mathbf{x}_{-1}$ désigne $\mathbf{x}$ privé de $x_1$, et $\mathbf{x}_{-S}$ désigne $\mathbf{x}$ privé de tous les éléments indexés par $S$.

## Fonction appliquée à une matrice

Quand on indexe le résultat d'une fonction appliquée à une matrice (plutôt qu'une simple variable), on n'utilise pas la convention minuscule/majuscule habituelle : $f(\mathbf{A})_{i,j}$ désigne l'élément $(i,j)$ de la matrice obtenue en appliquant $f$ à $\mathbf{A}$ — utile pour noter une opération appliquée élément par élément (ex. une fonction d'activation appliquée à une couche entière).

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Scalaire, Vecteur, Matrice et Tenseur]]
- [[C - Espace Image (Range) d'une matrice]]