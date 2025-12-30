Ils effectuent un découpage hiérarchique de l'espace d'entrée. Chaque noeud correspond à un test sur une caractéristique (une variable d'entrée). Les feuilles de l'arbre correspondent aux prédictions. 
La question est donc comment les entraîner? Il faut construire les arbres de mani;re itérative avec une approche gloutonne ([[C - Greedy Algorithm]]):
- On cherche à chaque fois  à découper le jeu de données en deux selon un critère. 
- Le critère sélectionné doit minimiser l'erreur
Un arbre décisionnel gère implicitement les interactions entre les attributs x sans avoir à les spécifier comme dans un modèle multilinéaire.
Tout pareil pour les autres modèles basés sur les arbres de décisions ([[A - Forêt Aléatoire]], [[A - Gradient Boosted Trees (XGBoost)]])

# Les pours et les contres des arbres de décision
- Facile à interpréter, Facile de gérer différents types d'entrées et Robuste aux valeurs aberrantes
- MAIS il peuvent facilement tomber en [[C - Surapprentissage]] et sont instables (forte [[C - Variance (expliquée)]]) de petits changements dans les données d'entrée peuvent avoir un gros impact sur la structure de l'arbre.

# [[C - Complexité d'un modèle (capacité)]]

La complexité des arbres décisionnels dépend de la profondeur de l'arbre et des critères de décision à chaque noeud
- Pour réduire la complexité il faut limiter sa profondeur
- Pour l'augmenter il faut passer à une forêt aléatoire