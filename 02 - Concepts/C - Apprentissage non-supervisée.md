Recherche des motifs cachés dans des données **sans étiquettes**

Entraîner un modèle $\theta$ en utilisant les données d'entrée ($x_i$). Contrairement à l'apprentissage supervisé, on ne connait pas les sorties ($y_i$)
Comment faire alors? 
- On pose l'hypothèse que les points x avec la même étiquette devraient se ressembler. Et le modèle cherge donc à regrouper des points de données d'entrée similaires (explication propre que au [[C - Clustering]])
- On pose l'hypothèse qu'il existe une représentation en basse dimensions des données (cas [[C - Réduction de dimensions]])