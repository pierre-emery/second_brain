Une méthode d'ensemble qui combine plusieurs arbres de décision et agrège leurs résultats. Pour construire les arbres, plusieurs vecteurs aléatoires sont échantillonnés i.i.d. de la même distribution et chaque construction individuelle d'arbre de décision dépend des données et de l'un de ces vecteurs.
$$f(y|x)=\frac{1}{|\mathrm M|}\sum_{m\in\mathrm M}f_m(y|x)$$ ici $f(y|x)$ est une forêt, M un ensemble d'arbre et m un arbre.
Un des intérêt d'utiliser plusieurs arbres et de réduire la variance. Un [[A - Arbre de décision]] seul a souvent une variance élevée (il change beaucoup si tu changes un peu les données). Du coup en utilisant plusieurs arbres et en moyennant leurs prédictions (on peut aussi procéder par vote majoritaire) on réduit la variance et donc le [[C - Surapprentissage]].

## Important
Les forêts aléatoires sont plus efficaces en termes de calcul que les autres méthodes d'ensemble, tout en ayant une précision comparable.

### Des approches de randomisation des arbres
Les entrées de l'arbre de décision peuvent être randomisées de deux façons:
- Sélection aléatoire des entrées ([[C - Forest-RI]])
- Combinaisons linéaires aléatoires ([[C - Forest-RC]])
Ce dernier peut être lié à des projections aléatoires qui sont également utilisées dans d'autres tâches (p.ex., la recherche de kNN ([[A - KNN]]) et la réduction de la dimensionnalité)

## Projections aléatoires
Les projections aléatoires (RP randomized projection) sont un moyen populaire et efficace de projeter des données (numériques) dans un espace de dimensions arbitraires, sans avoir à apprendre la fonction d'encastrement à partir des données.

Pour un ensemble de $n$ points de données de dimension $d$, une construction typique utilise les étapes suivantes :
- Choisir la dimension cible $k>0$, tirer $k\times d$ échantillons i.i.d. d'une distribution donnée, et les organiser dans une matrice $R\in\mathbb R^{d\times k}$
- Normaliser $R$ par un facteur quelconque pour obtenir la matrice $A$ (p.ex., $A=k^{-1/2}R$)
- Organiser les points de données en rangées d'une matrice $X \in \mathbb R^{d\times k}$ et les intégrer par multiplication matricielle $XA\in\mathbb R^{n\times k}$ 
Les forêts aléatoires (FC) peuvent être considérées comme la construction d'arbres de décision sur de multiples instanciations de RP.
La motivation et le raisonnement qui sous-tendent le RP proviennent du célèbre [[T - Lemme de Johnson-Lindenstrauss]]

Il existe plusieurs façons de construire une matrice de projection aléatoire, p.ex.:
Une schéma simple mais efficace de la matrice de projection consiste à tirer aléatoiremeent (i.i.d.) la matrice $R$ (rappel $A=\sqrt k ^{-1}R)$ de:
$$R_{ij} =
\begin{cases}
+\sqrt{s} & \text{with probability } \dfrac{1}{2s}, \\[6pt]
0         & \text{with probability } \left(1 - \dfrac{1}{s}\right), \\[6pt]
-\sqrt{s} & \text{with probability } \dfrac{1}{2s}.
\end{cases}$$
où $s>0$ contrôle la sparsité de la matrice construite.

D'autres constructions permettent des matrices plus clairsemées, ou bien imposent l'orthogonalité pour une projection propre.