La [[A - Classification Naïve Bayésienne]] suppose une indépendance de classe pour simplifier les estimations de probabilité mais ça n'est pas toujours applicable
On doit parfoit considérer également les dépendances $P(x[j]|x[i],C)$.

On va donc faire un graphe de réseau de dépendance et pour ce faire un utilise [[G - Graphes Acycliques Directs (DAG)]] pour ce faire. Chaque noeud ne devrait a priori dépendre que de ses parents.

La structure de DAG fournit des informations qualitatives sur les dépendances conditionelles qui devraient être prises en compte. Ceci est généralement donné par conception (p. ex. de connaissances préalables ou d'experts). La partie quantitative du réseau est donnée par des [[C - Tables de dépendances conditionnelle (CDT)]].
Étant donné une structure de réseau les entrées CDT de chaque noeud sachant ses parents sont estimées de façon similaire à la [[A - Classification Naïve Bayésienne]] pour les attributs observables et par optimisation pour les cachés.
### Construction gloutonne de l'algo [[C - Greedy Algorithm]]
Afin que l'estimation des probabilités de CDT soit faisable, il faudrait que le nombdre de parents pour chaque noeud soit le plus petit possible, tout en maintenant l'interprétabilité des causes-effets.
Un simple algorithme glouton d'inférence de  la structure du réseau est le suivant :
```
Initialize a set of nodes V = {x[1],...,x[n]}
While V != None do:
	Select a node v in V and remove it from V
	Choose a minimal set of parents U in V such that P(v|U,V\U) = P(v|U)
	Add edges from every node in U to v
```
Par contre, cet algorithme dépend fortement de l'ordre de balayage des noeuds en V.

### Propagation de croyances
Étant donné un réseau de croyance bayésien, les probabilités conjointes sont calculées en utilisant la règle de la chaine:
$$\begin{align*}
P(x[1],...,x[n],C) &= P(x[1]|x[2],...,x[n],C)P(x[2],...,x[n],C)\\
&=P(x[1]|parents(x[1]))P(x[2],...,x[n],C)\\
&= \prod_j P(x[j]|parents(x[j]))
\end{align*}$$
Notez que C peut aussi être étendu pour considérer plusieurs noeuds de sortie.
De plus les valeurs manquantes peuvent naturellement être traitées en considérant des ensembles partiels d'attributs. Les [[C - Vraisemblance]] et les [[C - Distribution a posteriori]] peuvent alors être estimées en utiisant des probabilités conjointes.
Lorsqu'on considère la propagation des croyances il est utile d'identifier l'indépendance entre les événements dans le réseau. [[C - Couverture de Markov]] 
On peut tester l'indépendance entre les événements sachant d'évidence en utilisant la d-séparation ([[C - Séparation Directionnelle]])