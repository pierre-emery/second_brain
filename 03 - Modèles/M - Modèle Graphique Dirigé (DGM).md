---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

Un **modèle graphique dirigé** (DGM), ou **réseau bayésien**, est une **famille de distributions** définie par un [[C - Graphe acyclique dirigé (DAG)|DAG]] $G$ : toutes celles qui se factorisent en un facteur par nœud, conditionnel à ses parents. Le graphe encode ainsi des hypothèses d'[[C - Indépendance Conditionnelle|indépendance conditionnelle]] et rend tractable la représentation de distributions en haute dimension (ex. 100 variables binaires : $2^{100}$ entrées pour une table complète).

## Idée générale / Formalisation

**Notation.** Variables discrètes $X_1,\dots,X_n$ (pour éviter les difficultés du conditionnement continu, cf. paradoxe de Borel-Kolmogorov), une par nœud de $G=(V,E)$. Pour $A\subseteq V$ : $p(x_A)=P\{X_i=x_i,\ i\in A\}=\sum_{x_{A^c}}p(x_A,x_{A^c})$.

**Définition.**
$$\mathcal L(G)\triangleq\Big\{p\ \text{sur}\ x_V:\ \exists\ \text{facteurs légaux } f_i\ \text{t.q.}\ p(x_V)=\prod_{i=1}^n f_i(x_i\mid x_{\pi_i})\ \ \forall x_V\Big\}$$
Un **facteur légal** $f_i:\Omega_{X_i}\times\Omega_{X_{\pi_i}}\to[0,1]$ vérifie $\sum_{x_i}f_i(x_i,x_{\pi_i})=1$ pour tout $x_{\pi_i}$ : c'est une **table de probabilités conditionnelles** (CPT). On dit que $p$ **se factorise selon $G$**, noté $p\in\mathcal L(G)$.

**Les facteurs sont les vraies conditionnelles** ([[T - Les facteurs d'un DGM sont les conditionnelles]]) : $p\in\mathcal L(G)\Rightarrow p(x_i\mid x_{\pi_i})=f_i(x_i,x_{\pi_i})$. D'où la **définition équivalente** :
$$p\in\mathcal L(G)\iff p(x)=\prod_{i=1}^n p(x_i\mid x_{\pi_i})\quad\forall x .$$
> Pourquoi ne pas commencer par là ? Cette définition est **circulaire** : $p(x_i\mid x_{\pi_i})$ est définie à partir de la jointe ; on ne peut pas a priori définir une jointe comme produit de ses propres conditionnelles (il pourrait n'exister aucune distribution qui le vérifie).

Exemple : pour la [[C - Explication mutuelle (explaining away)|V-structure]] $X\to Z\leftarrow Y$, $p\in\mathcal L(G)\iff p(x,y,z)=f_x(x)f_y(y)f_z(z\mid x,y)$.

## Cas extrêmes

- **Graphe vide** ($E=\emptyset$) : $p(x)=\prod_ip(x_i)$, indépendance totale : le plus **petit** DGM.
- **Graphe complet** (DAG à $n(n-1)/2$ arêtes) : $p(x)=\prod_ip(x_i\mid x_1,\dots,x_{i-1})$, la [[T - Règle de la chaîne (probabilité)|règle de la chaîne]], toujours vraie : **toutes** les distributions, le plus **gros** DGM.
- Ajouter des arêtes ⇒ plus de distributions : [[T - Inclusion des modèles graphiques]].

## Propriétés principales

- [[T - Propriété d'élagage des feuilles]] (marginaliser une feuille reste dans le DGM du sous-graphe).
- [[C - Structures canoniques à trois nœuds]] : chaîne, cause latente, V-structure.
- Indépendances : [[T - Propriété de Markov locale dirigée]], [[C - Séparation Directionnelle|d-séparation]], [[A - Bayes-Ball]].
- [[T - Renversement d'arête couverte]] (équivalence de Markov).
- [[C - Marginalisation dans les modèles graphiques|Marginalisation]] : close seulement pour les feuilles.
- Comparaison avec les UGM : [[C - Comparaison DGM vs UGM]] ; conversion par [[C - Moralisation]].

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Définition formelle du DGM $\mathcal L(G)$ ?::Les $p$ telles que $p(x_V)=\prod_if_i(x_i\mid x_{\pi_i})$ pour des facteurs légaux $f_i$ ($f_i\ge0$, $\sum_{x_i}f_i(x_i,x_{\pi_i})=1$).

Qu'est-ce qu'un facteur légal ?::Une fonction $f_i(x_i,x_{\pi_i})\in[0,1]$ qui somme à 1 en $x_i$ pour chaque $x_{\pi_i}$ : une CPT.

Pourquoi ne définit-on pas directement le DGM par $p=\prod_ip(x_i\mid x_{\pi_i})$ ?::C'est circulaire : les conditionnelles sont définies par la jointe ; il faut d'abord montrer que les facteurs légaux sont les conditionnelles.

DGM du graphe vide vs du graphe complet ?::Vide : distributions totalement indépendantes (le plus petit). Complet : toutes les distributions, par la règle de la chaîne (le plus gros).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Probabiliste]]
- [[M - Réseaux de croyances bayésiens (BBN)]]
- [[C - Graphe acyclique dirigé (DAG)]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Tables de dépendances conditionnelle (CDT)]]
- [[M - Modèle Graphique Non-dirigé]]
