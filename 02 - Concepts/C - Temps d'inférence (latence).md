Le temps d'[[C - Inférence Statistique]] c'est le temps requis pour effectuer une prédiction.

C'est simple à comprendre avec un exemple, disons qu'on applique la méthode [[A - KNN]]
pour la [[C - Classification]]. 
 - Le temps d'apprentissage ([[C - Temps d'entraînement]]) est nul
 - Calcul des distances aux N données d'entraînement à chaque fois
 - Temps d'inférence proportionnel à N
 - Temps en secondes si K est grand
 Bref c'est peu pratique en temps réel...
 alors que pour [[A - Réseau de neurones]] on aurait 
 - Temps d'apprentissage ([[C - Temps d'entraînement]]) long ( heures, jours)...
 - Temps d'inférence constant (quelques ms à une seconde)
 Et c'est donc couramment utilisé en temps réel.

 
 