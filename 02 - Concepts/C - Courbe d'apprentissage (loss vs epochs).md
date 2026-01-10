La courbe d'apprentissage est le stéthoscope de l'apprentissage automatique.
Il ne faut pas se contenter des performances finales d'un modèle pour décider s'il est bien entraîné. Il faut aussi voir les l'évolutions de sa [[C - Fonction de perte]] et ses métriques de performance ([[C - Courbe de métrique (accuracy... vs epochs)]])

### Quand se fier à la courbe de perte et quand se fier à [[C - Courbe de métrique (accuracy... vs epochs)]] pour décider quand s'arrêter?
- Fonction de perte :  ne capture pas toujours ce qui est le plus importnat. Fonction dérivable qui a un comportement similaire à la métrique. Ne sert qu'à l'optimisation.
- Métrique de performance : définit au mieux les performances du modèle. Dépend de la manière dont on a l'intention d'utiliser le modèle.

La courbe d'apprentissage est le tracé de la performance d'apprentissage en fonction du temps.
Seuls les algorithmes qui apprennent de manière incrémentale ont une telle courbe.
Typiquement on observe trois phases :
- Modèle peu performant avec les deux ensembles de données (train et test), mais s'améliore lentement (phase de [[C - Sous-apprentissage]]).
- Meilleur compromis entre mémorisation et compréhension des données [[C - Compromis Biais-Variance]] (La méthode de [[C - Early stopping]] permet d'arrêter l'entraînement ici)
- Le modèle mémorise les données d'entraînement mais ne peut plus prédire correctement celles de test (phase de [[C - Surapprentissage]])

# Les différents scénarios et comment les reconnaitres
### Entrainement trop court 
- Les courbes d'entraînement et de test ont un comportement similaire et des perforamnces médiocres.
- Il faut entraîner plus longtemps pour y remedier.
### [[C - Taux d'apprentissage]] mal ajusté
- Dans l'[[A - Rétropropagation du gradient (gradient descent)]], les paramètres $\theta$ d'un modèle sont mis à jour selon $\theta = \theta - lr^* \nabla_{\theta}J(\theta)$  où $lr$ est le [[C - Taux d'apprentissage]] (learning rate) et $J(\theta)$ est la [[C - Fonction de perte]].  
### Ensemble d'entraînement trop petit
- Ça fait que ce n'est pas assez varié en termes de données. Le modèle entraîné reconnaît peu de données de l'ensemble de test; Il ne peut faire de bonnes prédictions
- Les solutions sont donc d'augmenter le nombre de données, d'uniformiser les deux ensembles, de mélanger régulièrement les données d'entraînement afin d'éviter les erreurs périodiques.

### Ensembles d'entraînements et de test trop différents
- Le modèle entraîné reconnaît peu de données dans l'ensemble de test; Il ne peut faire de bonnes prédictions. (ce scénario arrive souvent lorsque l'ensemble d'entraînement contient de vieilles données et celui de tests de nouvelles données).
- La solution est d'uniformiser les jeux de données avant de les séparer en deux ensembles d'entraînement et de test.
### Ensemble de test trop petit
- Les statistiques sont basées sur un ensemble de test trop petit sont bruitées. Les deux ensembles risquent donc d'être stratifiés différemment
- Solutions : augmenter le nombre de données, uniformiser les deux ensembles
### Ensemble de test trop facile
- Il arrive que l'ensemble de test contient les données les plus fréquentes. Elles sont faciles à traiter par le modèle et peu d'erreurs sont observées. Les performances de test sont meilleures que celles en entrainement.
- Solutions : augmenter le nombre de données, uniformiser les deux ensembles
