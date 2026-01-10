La métrique de performance est une manière de quantifier la performance d'un modèle d'apprentissage automatique. Attention! La fonction de perte n'est pas une métrique de performance. La nuance est que [[C - Fonction de perte]] est utilisée lors d'un entraînement alors que la métrique de performance est utilisée à la fin pour évaluer le modèle final.



L'évolution générale d'une métrique de performance ressemble à une réflexion par rapport à l'axe horizontal de la [[C - Courbe d'apprentissage (loss vs epochs)]]

Il faut cesser l'entraînement lorsque le meilleur compromis est atteint entre la mémorisation et la compréhension des données [[C - Early stopping]]
### Quand se fier à la courbe de perte et quand se fier à [[C - Courbe de métrique (accuracy... vs epochs)]] pour décider quand s'arrêter?
- Fonction de perte :  ne capture pas toujours ce qui est le plus importnat. Fonction dérivable qui a un comportement similaire à la métrique. Ne sert qu'à l'optimisation.
- Métrique de performance : définit au mieux les performances du modèle. Dépend de la manière dont on a l'intention d'utiliser le modèle.
## Métriques de performance dans le cadre de régression
[[C - R^2 (coefficient de détermination)]]
[[C - R^2 ajusté]]
[[C - Erreur absolue moyenne (MAE)]]
[[C - Perte quadratique (MSE)]]
[[C - Racine de l'erreur quadratique (RMSE)]]

## Métriques de performance dans le cadre de classification
- [[C - Exactitude (accuracy)]]
- [[C - Précision]]
- [[C - Rappel (sensibilité)]]
- [[C - Spécificité]]
- [[C - Courbe ROC & AUC]]