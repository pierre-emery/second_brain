---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-10-24
---
$X_1$ et $X_2$ sont indépendantes étant donné $X_3$ si
$$p(x_1,x_2|x_3) = p(x_1|x_3)p(x_2|x_3)$$
ou de façon équivalente $p(x_1|x_2,x_3) = p(x_1|x_3)$ ou $p(x_2|x_1,x_3) = p(x_2|x_3)$.

## Exemple classique
- $Z=$ probabilité qu'une mère porte une maladie génétique liée au chromosome $X$,
- $X=$ probabilité que le premier enfant porte la maladie,
- $Y=$ probabilité pour le second enfant

On a aussi que $X\perp\!\!\!\perp Y|Z$ : une fois le statut de la mère connu, les probabilités des enfants sont indépendantes entre elles. 

C'est ce type d'hypothèse d'indépendance (conditionnelle) qui permet la [[C - Factorisation d'une distribution jointe|factorisation]] au coeur des [[M - Modèle Graphique Probabiliste| modèles graphiques probabilistes]] : l'absence d'arête dans le graphe représente une hypothèse d'indépendance conditionnelle.
## Piège : indépendance par paires ≠ indépendance mutuelle

Un ancêtre commun peut créer de la dépendance : si $Z$= indicateur qu'une mère porte une maladie génétique, $X$ = fille 1 atteinte, $Y$ = fille 2 atteinte, alors typiquement $X \perp\!\!\!\perp Y \mid Z$ mais $X \not\perp\!\!\!\perp Y$ (marginalement) : $Z$ étant inconnu, apprendre que $X=1$ nous renseigne indirectement sur $Z$, donc sur $Y$.

À l'inverse, l'**indépendance par paires n'implique pas l'indépendance mutuelle**. Exemple classique : $X,Y$ deux lancers de pièce indépendants ($X\perp\!\!\!\perp Y$), et $Z \triangleq X \oplus Y$ (XOR). On a $Z\perp\!\!\!\perp X$ et $Z\perp\!\!\!\perp Y$ (indépendance par paires), mais $Z \not\perp\!\!\!\perp (X,Y)$. Ici connaître $X$ et $Y$ détermine $Z$ exactement.
## Formulations et deux faits utiles (IFT6269)

Pour $A,B,C\subseteq V$ :

- **Factorisation (F)** : $X_A\perp\!\!\!\perp X_B\mid X_C\iff p(x_A,x_B\mid x_C)=p(x_A\mid x_C)\,p(x_B\mid x_C)$ pour tous $x_A,x_B,x_C$ avec $p(x_C)>0$.
- **Conditionnelle (C)** : $\iff p(x_A\mid x_B,x_C)=p(x_A\mid x_C)$ pour tous avec $p(x_B,x_C)>0$.
- **Indépendance marginale** : $X_A\perp\!\!\!\perp X_B\mid\emptyset$.

**Fait 1 : on peut répéter des variables.** $X\perp\!\!\!\perp Y,Z\mid Z,W$ est permis et équivaut à $X\perp\!\!\!\perp Y\mid Z,W$ (le $Z$ à gauche ne fait rien). Pratique pour énoncer des théorèmes génériques sans exclure les cas de répétition.

**Fait 2 : décomposition.** $X\perp\!\!\!\perp Y,Z\mid W\ \Rightarrow\ X\perp\!\!\!\perp Y\mid W$ et $X\perp\!\!\!\perp Z\mid W$.

Lecture graphique : [[C - Séparation Directionnelle|d-séparation]] (DGM), séparation simple (UGM, [[C - Propriété de Markov globale]]).
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Indépendance (variables aléatoires)]]
- [[C - Couverture de Markov]]
- [[C - Séparation Directionnelle]]
- [[C - Propriété de Markov globale]]
- [[C - Structures canoniques à trois nœuds]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition de $X_1 \perp\!\!\!\perp X_2 \mid X_3$ ?::$p(x_1, x_2 \mid x_3) = p(x_1 \mid x_3)\,p(x_2 \mid x_3)$, ou $p(x_1 \mid x_2, x_3) = p(x_1 \mid x_3)$.

Exemple de la mère et ses deux enfants (maladie génétique) : quelles indépendances tiennent ?::Les enfants sont indépendants **sachant** le statut de la mère, mais **pas** marginalement : apprendre qu'un enfant est atteint renseigne sur la mère, donc sur l'autre enfant.  

L'indépendance par paires implique-t-elle l'indépendance mutuelle ?::Non. $X, Y$ deux pièces indépendantes et $Z = X \oplus Y$ : indépendance par paires, mais $Z$ est déterminé par $(X,Y)$.

#flashcards/IFT6269/01-probabilites

En quoi l'indépendance conditionnelle est-elle au cœur des modèles graphiques ?::Elle permet la factorisation de la jointe : l'absence d'arête dans le graphe encode une hypothèse d'indépendance conditionnelle.

$X \perp\!\!\!\perp Y \mid Z$ implique-t-il $X \perp\!\!\!\perp Y$ ?::Non. Un ancêtre commun $Z$ inconnu crée de la dépendance : observer $X$ renseigne sur $Z$, donc sur $Y$.

#flashcards/IFT6269/11-modeles-diriges

Deux formulations équivalentes de $X_A\perp\!\!\!\perp X_B\mid X_C$ ?::(F) $p(x_A,x_B\mid x_C)=p(x_A\mid x_C)p(x_B\mid x_C)$ ; (C) $p(x_A\mid x_B,x_C)=p(x_A\mid x_C)$ (là où les conditionnelles sont définies).

Propriété de décomposition de l'indépendance conditionnelle ?::$X\perp\!\!\!\perp Y,Z\mid W\Rightarrow X\perp\!\!\!\perp Y\mid W$ et $X\perp\!\!\!\perp Z\mid W$.

$X\perp\!\!\!\perp Y,Z\mid Z,W$ équivaut à quoi ?::$X\perp\!\!\!\perp Y\mid Z,W$ (répéter une variable conditionnante ne change rien).