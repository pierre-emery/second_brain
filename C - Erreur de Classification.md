## Pour les [[A - Arbre de décision]]
Le taux d'erreur encouru en classant le noeud entier par vote de pluralité : $$\text{Error}(t)=1-\max_c\{p(c|t)\}$$ où $p(c|t)$ est la fréquence de la classe $c$ dans le noeud $t$.
- L'erreur minimale est de zéro - obtenue lorsque tous les points de données du noeud ont la même classe
- L'erreur maximale est de $1-\frac{1}{\text{\#classes}}$ obtenue lorsque les points de données dans le noeud sont également répartis entre les classes.

L'erreur de classification ne détecte pas toujours d'améliorations.