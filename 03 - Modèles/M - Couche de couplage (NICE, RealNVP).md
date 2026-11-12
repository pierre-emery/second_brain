---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Couche de [[M - Flot normalisant (Normalizing Flow)|flot]] qui sépare les variables en deux blocs $x = (x_1, x_2)$ : $x_1$ passe **inchangé**, et sert à calculer une transformation simple et inversible de $x_2$. Le jacobien est **triangulaire par blocs**, donc son déterminant est le produit des éléments diagonaux.

$$\text{NICE : } \begin{cases} f(x)_1 = x_1\\ f(x)_2 = x_2 + m(x_1)\end{cases}\qquad\qquad \text{RealNVP : } \begin{cases} f(x)_1 = x_1\\ f(x)_2 = s(x_1)\odot x_2 + m(x_1)\end{cases}$$

## Intuition
L'astuce : $m$ et $s$ peuvent être des réseaux **arbitraires** (non inversibles), car on n'a jamais besoin de les inverser. Pour inverser, on lit $x_1 = y_1$, on recalcule $m(y_1)$ et $s(y_1)$, puis on défait l'opération sur $x_2$. On alterne les rôles des blocs d'une couche à l'autre pour que toutes les variables soient transformées.

## Formalisme
### NICE (Dinh et al. 2014) — couplage additif
- **Inversion** : $x_1 = y_1$, $x_2 = y_2 - m(y_1)$.
- **Inversibilité** : aucune contrainte sur $m$.
- **Jacobien** : $\begin{bmatrix} I & 0\\ \partial m/\partial x_1 & I\end{bmatrix}$, donc $\det = 1$ : la transformation **préserve le volume**.

### RealNVP (Dinh et al. 2016) — couplage affine
- **Inversion** : $x_1 = y_1$, $x_2 = (y_2 - m(y_1)) \oslash s(y_1)$ (division élément par élément).
- **Inversibilité** : $s > 0$ (ou simplement non nul) ; en pratique $s = \exp(\tilde s(x_1))$.
- **Jacobien** : $\begin{bmatrix} I & 0\\ \ast & \mathrm{diag}(s(x_1))\end{bmatrix}$, donc $\det = \prod_j s_j(x_1)$ et $\log|\det| = \sum_j \log|s_j(x_1)|$.

### Glow (Kingma & Dhariwal 2018)
Prolonge RealNVP (convolutions $1\times1$ inversibles entre les couches de couplage) ; la figure du cours montre ses échantillons de visages, plus réalistes que ceux de RealNVP.

## Exemple
Figure du cours : sur une gaussienne 2D, une couche NICE déforme les lignes de niveau sans changer l'aire totale (volume préservé) ; RealNVP peut en plus contracter ou dilater.

## Flashcards
#flashcards/IFT6135/10-generatifs

Écrire une couche de couplage NICE et son inverse ?::$y_1=x_1$, $y_2=x_2+m(x_1)$ ; inverse $x_1=y_1$, $x_2=y_2-m(y_1)$.

Pourquoi le déterminant d'une couche NICE vaut-il 1 ?::Le jacobien est triangulaire par blocs avec des identités sur la diagonale : la transformation préserve le volume.

Déterminant d'une couche RealNVP ?::Le jacobien est triangulaire par blocs avec $\mathrm{diag}(s(x_1))$ : $\det=\prod_j s_j(x_1)$, soit $\log|\det|=\sum_j\log|s_j|$.

Pourquoi $m$ et $s$ peuvent-ils être des réseaux quelconques ?
?
On ne les inverse jamais : l'inverse recalcule $m(y_1)$ et $s(y_1)$ à partir de $y_1 = x_1$, qui n'a pas changé. La seule contrainte est $s\neq 0$ pour RealNVP.

Pourquoi alterner les blocs entre les couches de couplage ?::Sinon $x_1$ ne serait jamais transformé ; en alternant, chaque variable est modifiée sachant les autres.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[T - Formule du changement de variable (densités)]]
- [[C - Matrice Jacobienne]]
- [[C - Matrice Triangulaire]]
