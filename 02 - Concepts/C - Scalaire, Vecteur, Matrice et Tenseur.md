---
type: concept
cours: [IFT6135]
statut: complet
maj: 2026-09-08
---
Les quatre types d'objets de base manipulés en algèbre linéaire, distingués par leur nombre d'axes et par une convention de notation propre à chacun.

## Scalaire

Un nombre seul, en contraste avec les autres objets qui sont des tableaux de plusieurs nombres. Noté en **italique minuscule**, ex. $s \in \mathbb{R}$ (un scalaire réel) ou $n \in \mathbb{N}$ (un scalaire entier naturel).

## Vecteur

Un tableau de nombres arrangés en ordre : chaque élément est identifié par sa position (son indice). Noté en **minuscule grasse**, ex. $\mathbf{x}$, avec ses éléments notés en italique et indicés : $x_1, x_2, \ldots, x_n$. Si chaque élément appartient à $\mathbb{R}$ et qu'il y a $n$ éléments, alors $\mathbf{x} \in \mathbb{R}^n$ (le produit cartésien de $\mathbb{R}$ répété $n$ fois). On peut voir un vecteur comme un point dans l'espace, chaque élément étant sa coordonnée le long d'un axe différent.

## Matrice

Un tableau de nombres à **2 dimensions** : chaque élément est identifié par deux indices plutôt qu'un seul. Notée en **majuscule grasse**, ex. $\mathbf{A}$, avec ses éléments notés en italique non-grasse : $A_{i,j}$ (l'élément à la ligne $i$, colonne $j$). Si $\mathbf{A}$ a une hauteur $m$ et une largeur $n$, alors $\mathbf{A} \in \mathbb{R}^{m\times n}$. Voir [[C - Indexation de Vecteurs et Matrices]] pour la notation d'une ligne ou d'une colonne complète.

## Tenseur

Généralisation à un nombre arbitraire d'axes (plus de 2) : un tableau de nombres arrangés sur une grille régulière, à un nombre variable de dimensions. Noté avec une police spéciale, ex. $\mathsf{A}$, avec l'élément aux coordonnées $(i,j,k)$ noté $\mathsf{A}_{i,j,k}$. Les réseaux de neurones manipulent typiquement des tenseurs (ex. un lot d'images en 4 dimensions : batch × canaux × hauteur × largeur).

## Résumé des conventions de notation

|Objet|Notation|Exemple|
|---|---|---|
|Scalaire|minuscule italique|$s$|
|Vecteur|minuscule grasse|$\mathbf{x}$|
|Matrice|majuscule grasse|$\mathbf{A}$|
|Tenseur|police spéciale|$\mathsf{A}$|

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Indexation de Vecteurs et Matrices]]
- [[C - Transposée d'une matrice]]