# En bref
C'est un classificateur simple et populaire.
- L'algorithme d'induction conçoit un partitionnement hiérarchique des données en sous-ensembles homogènes qui se composnet pour la plupart d'une seule classe
- La classification des nouveaux points de données se fait en suivant les branches de l'arbre et le vote majoritaire dans les noeuds des feuilles

Le surajustement et la variance élevée sont courants avec les arbres de décision mais peuvent être atténués par l'élagage et la randomisation

Les [[A - Forêt Aléatoire]] sont un exemple populaire d'ensemble de classification
- Ils utilisent des arbres multiples pour obtenir des frontières de décision solides et flexibles
- La randomisation est réalisée par la sélection ou la projection d'éléments aléatoire avant la construction de chaque arbre
# Définition 
C'est un modèle simple et efficace de [[C - Classification]]. 

L'étape d'induction d'arbre construit essentiellement un ensemble de règles IF-THEN qui peut être visualisé comme un arbre pour tester l'appartenance à une classe de points de données.

L'étape déduction teste ces conditions et suit les branches de l'arbre pour établir l'appartenance à une classe.

Intuitivement on peut y penser comme une construction d'interview pour estimer la classification de chaque point de données.

#### Algorithmes d'induction d'arbres proposés
- CART (classification and regression trees)
- ID3 (Iterative Dichotomiser 3) & C4.5
- SLIQ & SPRINT
- Rainforest & BOAT
La plupart suivent un paradigme top-down de base connu comme Hunt's Algorithm, bien que certains utilisent des approches alternatives (p. ex. des constructions bottom-up) et des étapes d'implémentation particulières pour améliorer les performances
# Fonctionnement 

Ils effectuent un découpage hiérarchique de l'espace 
d'entrée. Chaque noeud correspond à un test sur une caractéristique (une variable d'entrée). Les feuilles de l'arbre correspondent aux prédictions. 
La question est donc comment les entraîner? Il faut construire les arbres de manière itérative avec une approche gloutonne ([[C - Greedy Algorithm]]):
- On cherche à chaque fois  à découper le jeu de données en deux selon un critère. 
- Le critère sélectionné doit minimiser l'erreur
Un arbre décisionnel gère implicitement les interactions entre les attributs x sans avoir à les spécifier comme dans un modèle multilinéaire.
Tout pareil pour les autres modèles basés sur les arbres de décisions ([[A - Forêt Aléatoire]], [[A - Gradient Boosted Trees (XGBoost)]])

## Construction
Un arbre est construit de haut en bas en utilisant une approche de gloutonne récursive :
1. Start with all the training samples at the root
2. Choose the best attribute & split into several data subsets
3. Create a branch & child node for each subset
4. Run the algorithm recursively for each child node and associated subset
5. Stop the recursion when one of the following conditions are met :
- All the data points in the node have the same class label
- There are no attributes left to split by
- The node is empty
Si un noeud de feuille contient plus d'une étiquette de classe, utilisez un vote à la majorité/pluralité pour définir sa classe.
### [[C - Divison arbre de décision]]
Chaque noeud interne de l'arbre prend en compte :
- un sous-ensemble de données, basé sur le chemin qui y mène
- un attribut permettant de tester et de générer des sous-ensembles plus petits à transmettre aux noeuds enfants
La division d'un noeud en noeuds enfants dépend du type de l'attribut testé et de la configuration de l'algorithme.

Par exemple, certains algorithmes forcent des divisions binaires (p. ex., CART), tandis que d'autres permettent des divisions multivoies (p. ex., C4.5).

Comment choisir le meilleur attribut et la meilleur divison à utiliser à chaque noeud?
On cherche à augmenter l'homogénéité et réduire l'hétérogénéité des sous-noeuds qui en résultent. En d'autres termes - on cherche des sous-ensembles aussi purs que possible par rapport aux classes.

### Mesures d'impureté et gain d'information 
L'impureté peut être quantifiée de plusieurs façons qui varient d'un algorithme à l'autre :
- [[C - Erreur de Classification]]
- [[C - Entropie]] (e.g. ID3 and C4.5)
- [[C - Gini Index]] (e.g. CART, SLIQ and SPRINT)
En général, ces mesures sont équivalentes dans la plupart des cas, mais il existe des cas spécifiques où l'une d'entre elles peut être avantageuse par rapport aux autres.

Le gain d'impureté d'une division $t\rightarrow t_1,...,t_k$ est la différence $$\Delta_{\text{Impurity}}=\text{Impurity(t)}-\sum_{i=1}\frac{\text{\#pts}(t_i)}{\text{\#pts}(t)}\text{Impurity}(t_i)$$
entre l'impureté à $t$ et la moyenne pondérée des impuretés enfantines.

#### [[C - Gain d'information et d'impurité]]
Des études ont montré que le choix des mesures d'impuretés a peu d'effet sur la qualité de la [[C - Classification]]. Néanmoins, chaque choix a son propre biais.
##### Information gain:
biaisé en faveur des attributs multivalorisés
##### Gain ratio : 
a tendance a préférer les divisions déséquilibrées où une partition est nettement plus petite que les autres
##### [[C - Gini Index]]:
- biaisé en faveur des attributs multivalorisés
- a des difficultés quand le \# classes est grand
- tend à favoriser des partitions de même taille et de même pureté

### Frontières de décision
Les frontières de décision indiquent quelle régions correspondent à quelle classe le truc c'est que pour les arbres de décisions les frontières sont rectangulaires

Si on veut considérer les régions non rectangulaires on utilise des arbres de décision obliques qui prennent en compte les combinaisons linéaires d'attributs

# Les pours et les contres des arbres de décision
- Facile à interpréter, Facile de gérer différents types d'entrées et Robuste aux valeurs aberrantes
- MAIS il peuvent facilement tomber en [[C - Surapprentissage]] et sont instables (forte [[C - Variance (expliquée)]]) de petits changements dans les données d'entrée peuvent avoir un gros impact sur la structure de l'arbre.

# [[C - Complexité d'un modèle (capacité)]]

La complexité des arbres décisionnels dépend de la profondeur de l'arbre et des critères de décision à chaque noeud
- Pour réduire la complexité il faut limiter sa profondeur
- Pour l'augmenter il faut passer à une forêt aléatoire

### L'élagage des arbres

Des arbres de décision trop grands peuvent facilement surajuster les données d'entraînement ([[C - Surapprentissage]]) et ne pas bien généraliser.

Dans ce cas, la complexit. du modèle peut être quantifiée par le nombre de noeuds dans l'arbre. Pour éviter le surajustement la taille de l'arbre induit doit être limité. 

On peut aussi utiliser le [[C - Principe de longueur minimale de description (LMD)]] de la théorie d'information.

La taille de l'arbre de décision est réduite par l'élagage:
- [[C - Pré-élagage]]
- [[C - Post-élagage]]

### Lien vers [[A - Forêt Aléatoire]]
Alors que les arbres de décision sont simples et efficaces, ils sont égalements sensibles aux variations d'entraînement et au suréquipement. Pour réduire la variance et augmenter la stabilité, plusieurs arbres de décision peuvent être combinés ensemble pour former une forêt.
