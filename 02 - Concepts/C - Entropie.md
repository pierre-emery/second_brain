## Mesure d'impureté pour les [[A - Arbre de décision]]
Concept standard de la théorie d'information qui mesure l'impureté d'un noeud en fonction du nombre de bits nécessaire pour y représenter les étiquettes de classe:
$$\text{Entropy}(t)=-\sum_cp(c|t)\log_2p(c|t)$$
où $p(c|t)$ est la fréquence de la classe $c$ dans le noeud $t$.

- L'entropie minimale est de zéro - obtenue lorsque tous les points de données du noeud ont la même classe
- L'entropie maximale est de log(#classes) - obtenue lorsque les points de données dans le noeud sont également répartis entre les classes.

