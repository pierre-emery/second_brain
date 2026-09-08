
## 1. Introduction 

Cette capsule vidéo sera sur les chaînes de Markov. Les chaînes de Markov sont un des outils les plus puissants en mathématiques, super importantes en probabilités et très utilisées en informatique. Elles permettent de modéliser des systèmes qui évoluent dans le temps de façon incertaine. En très bref, une chaîne de Markov se résume essentiellement à une matrice de transition : chacune de ses valeurs représente une probabilité de passer de l'état _x_ à l'état _y_. Et cette idée se retrouve dans énormément d'applications.

On peut d'ailleurs ranger ces applications en deux grandes familles. Dans la première, on observe un système qui existe déjà dans le monde et on le modélise comme une chaîne de Markov :
- **classer les pages web** : l'algorithme PageRank de Google imagine un internaute qui clique au hasard de lien en lien, et juge importantes les pages où il passe le plus souvent ;
- **modéliser des files d'attente** : pour dimensionner un site web, un centre d'appels ou un réseau, on représente le nombre de « clients » qui arrivent, attendent et repartent, ce qui permet d'estimer les temps d'attente et les risques de saturation ;
- **prédire du texte** : les modèles de langage classiques, dits _n-grammes_, devinaient le mot suivant à partir des derniers mots. Ce sont les ancêtres directs des modèles de langage d'aujourd'hui.

Dans la seconde famille, on fabrique une chaîne de Markov, comme un outil, pour résoudre un problème :

- les **méthodes MCMC** construisent une chaîne exprès pour échantillonner des distributions de probabilité trop complexes à manipuler directement.
## 2. Explication un peu plus formelle

Une chaîne de Markov est un modèle décrivant un système qui passe d'un état à un autre, au fil du temps, selon des probabilites. Enfait pour que ca soit une chaine de Markov, on doit respecter la propriété de Markov qui est le cœur du concept. En francais courant cette propriete serait simplement que le prochain état ne dépend que de l'état actuel, et non de tout l'historique passé des etats de la chaine.
Pour l'ecrire en formule ca ressemble a $$\mathbb P[X_{t+1}|X_1,...,X_t]=\mathbb P[X_{t+1}|X_t]$$
où $Xₜ$ désigne l'état du système au temps $t$. Une analogie simple serait disons qu'on jouait aux echecs, on peut choisir le coup suivant en regardant lechiquier au coup $t$, connaitre les coups precedents n'influence pas le choix de ce coup. L'élégance du modèle vient vraiment de cette idée de « mémoire courte » : pour prédire la suite, il suffit de savoir où l'on est maintenant. 

Et la chaîne de Markov est définie par :

- un ensemble d'**états** $S = {1, 2, ..., n}$,
- des probabilités de transition $Pᵢⱼ$, c'est-à-dire la probabilité de passer de l'état $i$ à l'état $j$.
Les probabilités de transition $Pᵢⱼ$ répondent à la question : « Si je suis dans l'état $i$, quelle est la chance de me retrouver dans l'état $j$ au coup suivant? » Par exemple, « s'il fait soleil aujourd'hui, il y a 80 % de chances qu'il fasse soleil demain ».

On rassemble toutes les probabilités de transition dans une matrice de transition P :

$$
P = | P₁₁  P₁₂  ...  P₁ₙ |\\
    | P₂₁  P₂₂  ...  P₂ₙ |\\
    |  ⋮    ⋮    ⋱    ⋮  |\\
    | Pₙ₁  Pₙ₂  ...  Pₙₙ |\\
$$

Chaque ligne doit sommer à 1 parce qu'il s'agit d'un espace probabiliste. La matrice de transition n'est qu'un tableau bien rangé de toutes ces probabilités. Le fait que chaque ligne somme à 1 traduit une certitude : depuis n'importe quel état, il va forcément se passer _quelque chose_. Les chances de tous les futurs possibles, additionnées, font 100 %.

$∑ⱼ Pᵢⱼ = 1$  pour chaque état i


Si l'on connaît la distribution de probabilité actuelle (un vecteur $π$), la distribution à l'étape suivante s'obtient par une simple multiplication :

$$
π' = π · P
$$
la formule $π' = π · P$ est une machine à prédire l'avenir. Si je vous donne les probabilités d'être dans chaque état aujourd'hui, cette multiplication me crache les probabilités pour demain. Et en répétant l'opération, je peux prédire après-demain, et ainsi de suite.


## 3. Un exemple simple

Modélisons une météo très simplifiée avec deux états : **Soleil (S)** et **Pluie (P)**.

Supposons les règles suivantes :

- S'il fait soleil aujourd'hui : 80 % de chances de soleil demain, 20 % de pluie.
- S'il pleut aujourd'hui : 40 % de chances de soleil demain, 60 % de pluie.

La matrice de transition est :

```
            vers S   vers P
depuis S  |  0.8      0.2  |
depuis P  |  0.4      0.6  |
```

Maintenant, supposons qu'aujourd'hui il fasse **soleil avec certitude**. Notre distribution de départ est donc `π = (1, 0)` (100 % soleil, 0 % pluie).

Probabilités pour demain :

$$
π' = (1, 0) · P = (0.8, 0.2)
$$

Demain : 80 % de chances de soleil, 20 % de pluie. C'est simplement la première ligne de la matrice.

Et pour après-demain, on recommence en partant de `(0.8, 0.2)` :

```
Soleil : 0.8 × 0.8 + 0.2 × 0.4 = 0.64 + 0.08 = 0.72
Pluie  : 0.8 × 0.2 + 0.2 × 0.6 = 0.16 + 0.12 = 0.28
```

Après-demain : 72 % de soleil, 28 % de pluie. On voit le système évoluer, étape par étape, vers un certain équilibre.

## 4. Applications concrètes et concepts connexes

Comme mentionné au tout début, les chaînes de Markov sont utilisées dans de nombreuses applications statistiques et informatiques. Maintenant que vous avez une meilleure idée de ce qu'elles sont, je suis sûr que vous remarquerez que beaucoup de choses pourraient se modéliser comme des chaînes de Markov plus ou moins complexes. 

Elles sont aussi liees a de nombreux concepts qui ne sont pas traites dans cette capsule mais qui pourraient etre le sujet de capsules supplementaires.

- La **distribution stationnaire** : à long terme, beaucoup de chaînes se stabilisent vers un équilibre où les proportions ne changent plus. C'est ce vers quoi tendait notre exemple météo, et c'est exactement ce qu'exploite PageRank.
- L'**ergodicité** et les conditions qui garantissent l'existence d'un tel équilibre.
- Les **marches aléatoires**, le cas particulier où l'on se déplace au hasard sur un graphe ou une grille. Au-delà de PageRank, elles servent même à analyser des données : des méthodes de **réduction de dimension** comme les _diffusion maps_ définissent une marche aléatoire sur un nuage de points pour en révéler la structure cachée.
- Les processus de Markov en temps continu et les chaînes cachées (HMM), où l'on n'observe pas directement l'état mais seulement ses conséquences.
