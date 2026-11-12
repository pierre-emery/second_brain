---
type: modele
cours: [IFT6269]
statut: à réviser
maj: 2026-11-12
---
Second grand formalisme de [[M - Modèle Graphique Probabiliste|modèle graphique probabiliste]] (avec le cas dirigé) : le graphe $G$ utilise des arêtes **non-orientées**. Contrairement au cas dirigé, il ne factorise pas la distribution en distributions conditionnelles, mais en un produit de fonctions plus générales associées aux [[C - Clique (graphe)|cliques]] du graphe.

## Construction

- Une [[C - Clique (graphe)|clique]] $C^{(i)}$ est un sous-ensemble de nœuds tous connectés entre eux dans $G$.
- Chaque clique est associée à un **facteur** (ou potentiel) $\phi^{(i)}(C^{(i)}) \geq 0$. Ce facteur est une fonction quelconque, **pas nécessairement une distribution de probabilité** : rien n'impose qu'il somme ou s'intègre à 1.
- La probabilité d'une configuration donnée des variables est **proportionnelle** au produit de tous ces facteurs : plus le produit est grand, plus la configuration est probable. Comme ce produit ne somme pas forcément à 1, on introduit une **constante de normalisation** $Z$ (aussi appelée fonction de partition), définie comme la somme (ou l'intégrale) sur tous les états possibles du produit des $\phi$ :

$$p(x) = \frac{1}{Z}\prod_i \phi^{(i)}\big(C^{(i)}\big)$$

## Intuition

Le non-dirigé est souvent plus naturel quand les interactions entre variables sont **symétriques** (pas de sens causal ou séquentiel clair), par exemple des contraintes de cohérence mutuelle entre pixels voisins d'une image, plutôt que des dépendances du type « une variable génère l'autre ».

## Définition formelle (IFT6269, lecture 12)

Aussi appelé **champ aléatoire de Markov** (*Markov random field*) ou réseau de Markov. Soit $G=(V,E)$ non dirigé et $\mathcal C$ l'ensemble de ses [[C - Clique (graphe)|cliques]] ($C\in\mathcal C\iff\forall i\ne j\in C,\ \{i,j\}\in E$).
$$\mathcal L(G)\triangleq\Big\{p:\ p(x_V)=\frac1Z\prod_{C\in\mathcal C}\psi_C(x_C)\ \text{pour des potentiels } \psi_C(x_C)\ge0\Big\},\qquad Z\triangleq\sum_x\prod_{C\in\mathcal C}\psi_C(x_C)\ \text{(fonction de partition)}.$$

**⚠️ Les potentiels ne sont pas des probabilités.** Dans un DGM on peut voir le facteur d'un nœud comme $p(x_i\mid x_{\pi_i})$ ; dans un UGM, $\psi_C(x_C)$ n'a **pas de lien direct** avec $p(x_C)$.

**Non-unicité.** Multiplier un $\psi_C$ par une constante ne change pas $p$ (on renormalise avec un nouveau $Z$). Et on peut regrouper des potentiels : sur $A,B,C,D,E$ où $(A,B,E)$ est une clique,
$$\psi(A,B,E)\psi(A,B)\psi(A,E)\psi(B,E)\psi(B,C)\psi(C,D)\psi(D,E)=\psi'(A,B,E)\psi(B,C)\psi(C,D)\psi(D,E).$$
**Il suffit donc de considérer les cliques maximales** $\mathcal C_{\max}$ : si $C'\subseteq C$, on pose $\psi^{\text{new}}_C=\psi^{\text{old}}_C\,\psi^{\text{old}}_{C'}$. *(On verra que la sur-paramétrisation des arbres avec $\psi_i(x_i)$ et $\psi_{ij}(x_i,x_j)$ est parfois pratique.)*

**Graphes triviaux.**
- $E=\emptyset$ : cliques = singletons, $p=\prod_i\psi_i(x_i)$ → variables **mutuellement indépendantes**.
- Graphe complet (une seule grande clique) : $p=\frac1Z\psi_V(x_V)$ → **aucune** hypothèse, toute distribution.
- Inclusion : $E\subseteq E'\Rightarrow\mathcal L(G)\subseteq\mathcal L(G')$ ([[T - Inclusion des modèles graphiques]]).

**Famille exponentielle.** Si $\psi_C(x_C)>0$ partout :
$$p(x_V)=\exp\Big\{\sum_{C\in\mathcal C}\underbrace{\log\psi_C(x_C)}_{\langle\theta_C,T_C(x_C)\rangle}-\log Z\Big\}$$
$\sum_C\log\psi_C$ est l'**énergie négative** : $p$ est une [[D - Famille exponentielle|famille exponentielle]]. Exemples : [[M - Modèle d'Ising]], modélisation de réseaux sociaux.

**Indépendances.** Séparation simple dans le graphe : [[C - Propriété de Markov globale]] ; factorisation ⇒ Markov global ([[T - La factorisation UGM implique la propriété de Markov globale]]), avec réciproque si $p>0$ ([[T - Théorème de Hammersley-Clifford]]).

**Marginalisation** : close — retirer $n$ et relier ses voisins ([[C - Marginalisation dans les modèles graphiques]]).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Clique (graphe)]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Propriété de Markov globale]]
- [[T - Théorème de Hammersley-Clifford]]
- [[C - Comparaison DGM vs UGM]]
- [[C - Moralisation]]
- [[M - Modèle d'Ising]]
- [[C - Marginalisation dans les modèles graphiques]]
- [[T - Reparamétrisation d'un UGM en arbre par ses marginales]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[C - Estimation des paramètres dans les modèles graphiques]]

## Arbres, inférence et apprentissage

- Sur un **arbre**, la loi se reparamètre par ses marginales : $p(x)=\prod_ip(x_i)\prod_{\{i,j\}\in E}\frac{p(x_i,x_j)}{p(x_i)p(x_j)}$ → [[T - Reparamétrisation d'un UGM en arbre par ses marginales]].
- Inférence : [[A - Algorithme somme-produit (propagation de croyances)]] (arbres), [[A - Algorithme de l'arbre de jonction]] (graphes triangulés), [[A - Propagation de croyances à boucles (loopy BP)]] (approximatif).
- Apprentissage : gradient $\hat\mu_C-\mu_C(\eta)$, qui demande de l'inférence → [[C - Estimation des paramètres dans les modèles graphiques]].

## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

Factorisation d'un modèle graphique non dirigé ?::$p(x) = \dfrac1Z\prod_i \phi^{(i)}(C^{(i)})$, un facteur $\phi^{(i)} \geq 0$ par clique.

Les facteurs $\phi$ d'un modèle non dirigé sont-ils des distributions ?::Non : ce sont des fonctions positives quelconques, d'où la constante de normalisation $Z$.

Qu'est-ce que la fonction de partition $Z$ ?::La somme (ou intégrale) du produit des facteurs sur toutes les configurations, qui normalise $p$ à 1.

#flashcards/IFT6269/12-modeles-non-diriges

Définition formelle d'un UGM $\mathcal L(G)$ ?::$p(x)=\frac1Z\prod_{C\in\mathcal C}\psi_C(x_C)$, $\psi_C\ge0$ sur les cliques, $Z=\sum_x\prod_C\psi_C(x_C)$.

Pourquoi peut-on se restreindre aux cliques maximales dans un UGM ?::Toute clique est incluse dans une clique maximale ; on absorbe son potentiel par produit dans celui de la clique maximale.

Un potentiel $\psi_C$ est-il la marginale $p(x_C)$ ?::Non, aucun lien direct ; il est défini à une constante près (renormalisée par $Z$).

UGM à potentiels strictement positifs : quelle famille ?::Une famille exponentielle : $p=\exp\{\sum_C\log\psi_C(x_C)-\log Z\}$ (énergie négative).

UGM sur le graphe sans arête vs le graphe complet ?::Sans arête : indépendance mutuelle. Complet : toutes les distributions.

Comment se reparamètre un UGM en arbre avec ses marginales ?::$p(x)=\prod_ip(x_i)\prod_{\{i,j\}\in E}p(x_i,x_j)/(p(x_i)p(x_j))$, avec $Z=1$.
