---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

(*Leaf-plucking*) Soit $n$ une **feuille** du DAG $G$ (n'est parent d'aucun nœud) et $p(x_V)\in\mathcal L(G)$.
1. $p(x_{1:(n-1)})\in\mathcal L(G-\{n\})$ ;
2. si $p(x_{1:n})=\prod_{i=1}^nf_i(x_i\mid x_{\pi_i})$, alors $p(x_{1:(n-1)})=\prod_{i=1}^{n-1}f_i(x_i\mid x_{\pi_i})$ (mêmes facteurs).

## Hypothèses

$G$ DAG, $n$ feuille, $p\in\mathcal L(G)$ avec des facteurs légaux.

## Preuve

$$p(x_{1:(n-1)})=\sum_{x_n}p(x_n,x_{1:(n-1)})=\sum_{x_n}f_n(x_n\mid x_{\pi_n})\prod_{j\ne n}f_j(x_j\mid x_{\pi_j})=\underbrace{\Big(\sum_{x_n}f_n(x_n\mid x_{\pi_n})\Big)}_{=1\ \text{(facteur légal)}}\prod_{j\ne n}f_j(x_j\mid x_{\pi_j}).$$
On a pu sortir le produit de la somme car $n$ est une feuille : **$x_n$ n'apparaît dans aucun $\pi_j$**. $\blacksquare$

## Corollaires / Conséquences

- Propriété fondamentale, utilisée dans beaucoup de preuves sur les DGM (par **récurrence**, car $G-\{n\}$ reste un DAG et a encore une feuille).
- Sert à prouver [[T - Les facteurs d'un DGM sont les conditionnelles]].
- Marginaliser une **feuille** donne un DGM ; marginaliser un nœud **interne** peut sortir de la classe des DGM → [[C - Marginalisation dans les modèles graphiques]].

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Propriété d'élagage des feuilles ?::Si $n$ est une feuille et $p\in\mathcal L(G)$, alors $p(x_{1:n-1})\in\mathcal L(G-\{n\})$, avec les mêmes facteurs pour les autres nœuds.

Étape clé de la preuve d'élagage des feuilles ?::$x_n$ n'apparaît dans aucun $\pi_j$ (feuille), donc $\sum_{x_n}$ ne touche que $f_n$, qui somme à 1.

Pourquoi l'élagage des feuilles échoue-t-il pour un nœud interne ?::Un nœud interne apparaît dans les facteurs de ses enfants ; la somme sur sa valeur couple ces facteurs et ne se réduit pas à 1, donc la marginale ne garde pas la forme produit sur le sous-graphe.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[T - Les facteurs d'un DGM sont les conditionnelles]]
- [[C - Marginalisation dans les modèles graphiques]]
