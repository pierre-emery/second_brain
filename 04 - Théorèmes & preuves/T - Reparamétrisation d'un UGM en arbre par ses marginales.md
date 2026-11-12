---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Sur un arbre, la distribution se réécrit **uniquement avec ses marginales de nœuds et d'arêtes** : on peut choisir les potentiels de l'UGM égaux aux marginales (nœuds) et aux « rapports de dépendance » (arêtes), avec $Z=1$.

## Énoncé

Soit $G=(V,E)$ un **arbre** et $p\in\mathcal L(G)$ à marginales non nulles. Alors
$$p(x_{1:n})=\prod_{i\in V}\underbrace{p(x_i)}_{\psi_i(x_i)}\prod_{\{i,j\}\in E}\underbrace{\frac{p(x_i,x_j)}{p(x_i)\,p(x_j)}}_{\psi_{i,j}(x_i,x_j)}\qquad(Z=1).$$

## Hypothèses

Arbre ; marginales $p(x_i)>0$ (pour que les rapports soient définis).

## Preuve (idée vue en classe)

Comme pour les DGM, on part de facteurs $f_{i,j}\ge0$, $f_i\ge0$ qui vérifient la **cohérence locale** :
$$\sum_{x_j}f_{i,j}(x_i,x_j)=f_i(x_i)\ \ \forall x_i,\qquad\sum_{x_i}f_{i,j}(x_i,x_j)=f_j(x_j)\ \ \forall x_j,\qquad\sum_{x_i}f_i(x_i)=1.$$
On définit $p(x)=\prod_if_i(x_i)\prod_{\{i,j\}\in E}\frac{f_{i,j}(x_i,x_j)}{f_i(x_i)f_j(x_j)}$ et on montre (en sommant les feuilles une à une, comme l'[[T - Propriété d'élagage des feuilles|élagage des feuilles]]) que les marginales sont les bonnes : $p(x_i)=f_i(x_i)$ et $p(x_i,x_j)=f_{i,j}(x_i,x_j)$. En prenant $f_i=p(x_i)$ et $f_{i,j}=p(x_i,x_j)$ (qui sont cohérents), on obtient l'énoncé.

*Étape clé (feuille $\ell$ de parent $j$)* : $\sum_{x_\ell}f_\ell(x_\ell)\frac{f_{j,\ell}(x_j,x_\ell)}{f_j(x_j)f_\ell(x_\ell)}=\frac{1}{f_j(x_j)}\sum_{x_\ell}f_{j,\ell}(x_j,x_\ell)=1$ par cohérence locale.

## Corollaires / Conséquences

- Cas particulier de la factorisation par arbre de jonction $\prod_Cp(x_C)/\prod_Sp(x_S)$ (cliques = arêtes, séparateurs = nœuds) : [[T - Arbre de jonction et graphes triangulés]].
- Après [[A - Algorithme somme-produit (propagation de croyances)|somme-produit]], on dispose précisément de ces marginales : on peut reparamétrer le modèle avec elles.
- Analogue non dirigé de « les facteurs d'un DGM sont les conditionnelles » ([[T - Les facteurs d'un DGM sont les conditionnelles]]).

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Reparamétrisation d'un UGM en arbre par ses marginales ?::$p(x)=\prod_ip(x_i)\prod_{\{i,j\}\in E}\frac{p(x_i,x_j)}{p(x_i)p(x_j)}$, avec $Z=1$.

Qu'est-ce que la cohérence locale de facteurs $f_{i,j}$, $f_i$ ?::$\sum_{x_j}f_{i,j}=f_i$, $\sum_{x_i}f_{i,j}=f_j$ et $\sum_{x_i}f_i=1$ : les facteurs d'arête se marginalisent sur les facteurs de nœud.

Pourquoi sommer une feuille $\ell$ donne-t-il 1 dans la preuve ?::Son facteur se simplifie en $\frac1{f_j(x_j)}\sum_{x_\ell}f_{j,\ell}(x_j,x_\ell)=1$ par cohérence locale ; on peut donc élaguer l'arbre feuille par feuille.

Pourquoi cette factorisation est-elle propre aux arbres ?
?
Elle est un cas particulier de $\prod_Cp(x_C)/\prod_Sp(x_S)$, qui exige un arbre de jonction. Sur un graphe avec cycles, des marginales localement cohérentes peuvent ne correspondre à aucune distribution jointe, et le produit ne donne pas les bonnes marginales.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Arbre de jonction et graphes triangulés]]
- [[T - Les facteurs d'un DGM sont les conditionnelles]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
