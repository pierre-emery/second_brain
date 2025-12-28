Un réseau de neurone est une fonction de la forme : $f(x;\theta)=f_L(f_{L-1}(...(f_1(x))...))$
- Ils sont composés de [[C - Neurones Artificiels]]
- Une couche est un ensemble de neurones. Chaque neurone de la couche traite les entrées de la couche précédente et produit une sortie
- Plusieurs couches connectées forment un réseau de neurones artificiels profond. Trois types de couches: entrée, sortie, couches cachées. Les sorties d’une couche sont les entrées de la suivante.
- À la sortie d'un neurone artificiel on applique une [[C - Fonction d'activation]] (non linéaire)
- La fonction d’activation de la dernière couche d’un réseau de neurones artificiels permet d’adapter la sortie à la tâche que nous voulons accomplir ([[C - Classification]] binaire ou multiclasse, [[C - Régression]])