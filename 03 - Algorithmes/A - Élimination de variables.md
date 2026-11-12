---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

(*Variable Elimination*, VE, ou *Graph Eliminate*, GE.) Calculer une marginale en **sommant les variables une à une**, en réorganisant la somme grâce à la **distributivité** $c\cdot(a+b)=c\cdot a+c\cdot b$ :
$$\sum_{x_1,x_2}f(x_1)g(x_2)=\Big(\sum_{x_1}f(x_1)\Big)\Big(\sum_{x_2}g(x_2)\Big),\qquad \sum_{x_{1:n}}\prod_if_i(x_i)=\prod_i\Big(\sum_{x_i}f_i(x_i)\Big).$$
Avec $k$ valeurs par variable : on passe d'une somme de $k^n$ termes, chacun un produit de $n$ facteurs ($O(k^n n)$), à un produit de $n$ sommes de $k$ termes ($O(kn)$). VE généralise cette idée à des potentiels quelconques.

## Algorithme (étapes)

Calcul de $p(x_F)$ dans un UGM de cliques $\mathcal C$.

**Initialiser**
1. Choisir un **ordre d'élimination** où les nœuds de $F$ sont **les derniers**.
2. Mettre tous les $\psi_C(x_C)$ dans une **liste active**.

**Mettre à jour** — pour chaque variable $x_i$ à éliminer, dans l'ordre :
1. Retirer de la liste active tous les facteurs contenant $x_i$ et faire leur produit $\prod_{\alpha:\,i\in\alpha}\psi_\alpha(x_\alpha)$.
2. Sommer sur $x_i$ pour obtenir un nouveau facteur (**message**)
$$m_i(x_{S_i})\triangleq\sum_{x_i}\prod_{\alpha:\,i\in\alpha}\psi_\alpha(x_\alpha),\qquad S_i\triangleq\Big(\bigcup_{\alpha:\,i\in\alpha}\alpha\Big)\setminus\{i\}.$$
3. Remettre $m_i(x_{S_i})$ dans la liste active (noté $\psi_{S_i}$ par cohérence).

**Normaliser** : les facteurs restants ne portent que sur $x_F$ ; $p(x_F)$ leur est proportionnelle → normaliser (la constante donne $Z$).

Exemple détaillé : [[E - Élimination de variables sur un cycle à 4 nœuds]].

## Complexité

Avec $k$ valeurs par variable :
- **Mémoire** $\approx k^{\max_i|S_i|}\cdot(\#\text{facteurs})$ ;
- **Temps** $\approx k^{\max_i|S_i|+1}\cdot n$ (chaque élimination manipule la clique $\{i\}\cup S_i$).

Tout dépend de la taille de la plus grande **clique d'élimination** $\{i\}\cup S_i$, qui dépend de l'**ordre**. Avec le meilleur ordre, $\max_i|S_i|$ = la [[C - Largeur arborescente (treewidth)|largeur arborescente]] $\mathrm{tw}$, d'où un coût $\approx k^{\mathrm{tw}+1}n$ *(les notes écrivent $2^{\mathrm{tw}+2}$ en comptant large)*.

**Les ordres ne se valent pas** : dans un graphe en étoile à $n+1$ nœuds, éliminer d'abord le centre crée une clique de taille $n$ (facteur énorme) ; éliminer d'abord les feuilles ne crée que des cliques de taille 2 (cohérent avec $\mathrm{tw}=1$).

## Propriétés

- Éliminer $x_i$ relie tous les nœuds de $S_i$ entre eux (nouvelle clique) : c'est la [[C - Marginalisation dans les modèles graphiques|marginalisation dans un UGM]].
- Le graphe augmenté de toutes les arêtes ajoutées est **[[C - Graphe triangulé|triangulé]]**.
- Trouver le meilleur ordre (= calculer la largeur arborescente) est **NP-difficile**.

## Avantages / Limites

**Avantages** : exact ; linéaire sur les arbres ; efficace pour une faible largeur arborescente.

**Limites** : une requête à la fois (refaire tout le calcul pour chaque marginale → somme-produit réutilise les messages) ; exponentiel en la largeur arborescente (ex. grille, Ising).

## Flashcards

#flashcards/IFT6269/13-inference

Propriété algébrique au cœur de l'élimination de variables ?::La distributivité : $\sum_{x_{1:n}}\prod_if_i(x_i)=\prod_i\sum_{x_i}f_i(x_i)$ ($O(k^nn)\to O(kn)$).

Étapes d'élimination d'une variable $x_i$ ?::Retirer les facteurs contenant $x_i$, les multiplier, sommer sur $x_i$ pour obtenir $m_i(x_{S_i})$, remettre ce message dans la liste active.

Où placer les nœuds requête $F$ dans l'ordre d'élimination ?::À la fin : on les garde, on élimine tout le reste.

Coût en temps de l'élimination de variables ?::$\approx k^{\max_i|S_i|+1}\cdot n$ : exponentiel en la taille de la plus grande clique d'élimination.

Exemple d'ordre d'élimination catastrophique ?::Éliminer le centre d'un graphe en étoile d'abord : crée une clique de taille $n$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Inférence dans les modèles graphiques]]
- [[A - Passation de Messages]]
- [[E - Élimination de variables sur un cycle à 4 nœuds]]
- [[C - Graphe triangulé]]
- [[C - Largeur arborescente (treewidth)]]
- [[C - Marginalisation dans les modèles graphiques]]
