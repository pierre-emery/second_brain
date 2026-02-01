## Pour la mesure d'impureté d'un [[A - Arbre de décision]]
Un indice d'inégalité sociale (ou plus formellement, de dispersion statistique) développé par le statisticien/sociologue Corrado Gini :
$$\text{Gini(t)}=1-\sum_c[p(c|t)]^2$$
où $p(c|t)$ est la fréquence de la classe $c$ dans le noeud $t$.

- La valeur minimale de Gini est zéro - obtenue lorsque tous les points de données du noeud ont la même classe
-  L'indice de Gini maximal est de $1-\frac{1}{\text{\#classes}}$ - obtenu lorsque les points de données dans le noeud sont également répartis entre les classes.

La valeur de Gini pour une division est calculée de la même manière que pour une erreur de classification, mais elle fonctionne: