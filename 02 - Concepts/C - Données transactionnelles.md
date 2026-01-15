Pour ce type de données, chaque observation est une transaction qui contient un ensemble d'éléments ou une séquence d'événements.

Les documents texte peuvent être considérés comme des données transactionnelle de deux façons:
- Chaque document peut être considéré comme une grosse transaction contenant des mots. Les techniques [[C - Bag of Words]] ignorent les structures grammaticales et représentent un document comme un histogramme des occurences de mots. Des approches similaires peuvent être appliquées aux images, aux questionnaires, etc. avec une étape de regroupement appropriée pour la construction du dictionnaire.
- Un document peut être considéré comme un ensemble de données transactionnelles, ce qui contient des contextes de mots (p. ex avec [[C - n-grammes]] ou [[C - skip-grammes]]). Les techniques [[C - Word 2 vec]] utilisent cette approche pour associer des cordonnées numériques (typiquement $\in \mathrm R ^{300}$) aux mots en fonction des contextes dans lesquels ils apparaissent.

Dans certains cas, les données transactionnelles peuvent être converties sous formes tabulaire ([[C - Données tabulaires]]) en considérant la matrice de termes ([[C - Bag of Words]]).

Attention : Ceci perd l'information séquentielle et son application à des valerus continues nécessite une étape de discrétisation.