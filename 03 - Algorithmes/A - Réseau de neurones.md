Un réseau de neurone est une fonction de la forme : $f(x;\theta)=f_L(f_{L-1}(...(f_1(x))...))$
- Ils sont composés de [[C - Neurones Artificiels]]
- Une couche est un ensemble de neurones. Chaque neurone de la couche traite les entrées de la couche précédente et produit une sortie
- Plusieurs couches connectées forment un réseau de neurones artificiels profond. Trois types de couches: entrée, sortie, couches cachées. Les sorties d’une couche sont les entrées de la suivante.
- À la sortie d'un neurone artificiel on applique une [[C - Fonction d'activation]] (non linéaire)
- La fonction d’activation de la dernière couche d’un réseau de neurones artificiels permet d’adapter la sortie à la tâche que nous voulons accomplir ([[C - Classification]] binaire ou multiclasse, [[C - Régression]])

## [[C - Complexité d'un modèle (capacité)]]

ATTENTION! ajouter des couches à une réseau de neurones n'est pas toujours la solution

- Ça améliore les performances d'un réseau de neurones jusqu'à un certain point. 
- Les performances peuvent chuter si on en ajoute trop (problème de la [[A - Rétropropagation du gradient (gradient descent)]]
- C'est  particulièrement vrai avec l'architecture classique des RN convolutionnels
- L'erreur de classification finit par augmenter avec le nombre de couches

Changer la structure du réseau de neurones est souvent plus efficace
- Le réseau ResNet surpasse les performances des [[A - Réseau de neuronnes convolutionnels (CNN)]] classiques
- La structure de ResNet lui permet d'améliorer ses performances en ajoutant des couches.
- Famille de modèles Resnet (18, 34, 50, 101, 152 couches)

Changer de famille de modèles est encore plus efficace
- Les performances finissent par plaffoner pour une famille de structure donnée
- Il faut tester des structures différentes de RN
- Trop peaufiner un modèle préféré diminue les retours sur investissement.
- Il est important d'être au courant de la littérature et des ressources disponibles.

## [[C - Interprétabilité]]
L'interprétabilité des résultats des réseaux de neurones est un champ actif de recherche. Il faut être un expert pour comprendre un résultat et ses implications. Mais un système expert de nouvelle génération pourrait expliquer ses décisions
