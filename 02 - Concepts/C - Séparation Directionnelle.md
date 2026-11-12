---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
## Intuition
Dans un [[M - Modèle Graphique Probabiliste|modèle graphique dirigé]], la structure du graphe permet de lire rapidement quelles variables interagissent directement (arête entre elles) et lesquelles n'interagissent qu'indirectement, via des variables intermédiaires. Par exemple, dans une chaîne $a\rightarrow b\rightarrow c$ où $a$ influence $b$ qui influence $c$ mais où $a$ et $c$ sont indépendantes sachant $b$. 

La d-séparation formalise et généralise cette lecture graphique de l'indépendance conditionnelle à des graphes arbitraires.

# Définition formelle

Deux événements X et Y sont d-séparés sachant l'évidence E si chaque chemin non orienté entre eux est bloqué par un des éléments suivants :
- Un noeud $z \in E$ sur le chemin ayant une arête entrante et une autre sortante.
- Un noeud $z \in E$ sur le chemin ayant deux arêtes sortantes
- Un noeud $z \notin E$ sur le chemin ayant deux arêtes entrantes ou l'un de ses descendants

Si $X$ et $Y$ sont d-séparés sachant $E$ alors $X\perp\!\!\!\perp Y|E$ dans toute distribution factorisée selon ce graphe.

## Définition rigoureuse (IFT6269, lecture 11)

But : répondre à « $X_A\perp\!\!\!\perp X_B\mid X_C$ ? » à partir du DAG. La séparation simple des graphes non dirigés ne suffit pas dans un graphe dirigé ; il faut la généraliser.

**Chaîne.** Une chaîne de $a$ à $b$ est une suite $(v_1,\dots,v_m)$ avec $v_1=a$, $v_m=b$ et, pour tout $j$, $(v_j,v_{j+1})\in E$ **ou** $(v_{j+1},v_j)\in E$ : un chemin dans le graphe **symétrisé**.

**Définition (d-séparation).** $C$ = ensemble observé.
1. Une chaîne est **bloquée en $d$** (sachant $C$) si
   - soit $d\in C$ et $(v_{i-1},d,v_{i+1})$ **n'est pas** une V-structure ;
   - soit $d\notin C$, $(v_{i-1},d,v_{i+1})$ **est** une V-structure et **aucun descendant de $d$** n'est dans $C$.
2. Une chaîne est **bloquée** si elle est bloquée en au moins un nœud.
3. $A$ et $B$ sont **d-séparés par $C$** ssi **toutes** les chaînes de $a\in A$ à $b\in B$ sont bloquées.

**Théorème (toutes les indépendances d'un DGM).** $p\in\mathcal L(G)\iff X_A\perp\!\!\!\perp X_B\mid X_C$ pour **tous** $A,B,C$ tels que $A$ et $B$ sont d-séparés par $C$ dans $G$.

**Exemples.**
- Chaîne de Markov $X_1\to\dots\to X_T$ : montrer « futur $\perp\!\!\!\perp$ passé | présent » avec la théorie des chaînes de Markov peut être pénible ; la d-séparation le donne immédiatement.
- HMM (états → observations bruitées) : utile car on n'observe qu'une version bruitée du processus.

Implémentation intuitive : [[A - Bayes-Ball]]. Cas particulier : [[T - Propriété de Markov locale dirigée]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Indépendance Conditionnelle]]
- [[C - Couverture de Markov]]
- [[A - Bayes-Ball]]
- [[C - Structures canoniques à trois nœuds]]
- [[C - Explication mutuelle (explaining away)]]
- [[T - Propriété de Markov locale dirigée]]
- [[M - Modèle Graphique Dirigé (DGM)]]

#flashcards/IFT6269/00-modeles-graphiques

Chaîne $a \to b \to c$ : quelle indépendance conditionnelle tient ?::$a \perp\!\!\!\perp c \mid b$.

Trois façons dont un nœud $z$ bloque un chemin (d-séparation, évidence $E$) ?::(1) $z \in E$ avec une arête entrante et une sortante (chaîne) ; (2) $z \in E$ avec deux arêtes sortantes (fourche) ; (3) collision : $z$ a deux arêtes entrantes et ni $z$ ni ses descendants ne sont dans $E$.

Que garantit la d-séparation de $X$ et $Y$ sachant $E$ ?::$X \perp\!\!\!\perp Y \mid E$ dans toute distribution qui se factorise selon le graphe.

Pourquoi observer une collision (ou un descendant) débloque-t-il le chemin ?::« Explaining away » : connaître l'effet commun rend ses causes dépendantes.

#flashcards/IFT6269/11-modeles-diriges

Qu'est-ce qu'une « chaîne » au sens de la d-séparation ?::Un chemin dans le graphe symétrisé : on peut suivre les arêtes dans les deux sens.

Quand une chaîne est-elle bloquée en $d$ sachant $C$ ?::Si $d\in C$ et $d$ n'est pas une V-structure sur la chaîne ; ou si $d\notin C$, $d$ est une V-structure et aucun descendant de $d$ n'est dans $C$.

Quand $A$ et $B$ sont-ils d-séparés par $C$ ?::Quand toutes les chaînes de $A$ à $B$ sont bloquées.

Théorème de la d-séparation ?::$p\in\mathcal L(G)$ ssi $X_A\perp\!\!\!\perp X_B\mid X_C$ pour tous les triplets où $C$ d-sépare $A$ et $B$.
