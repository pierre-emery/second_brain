Le pire scénario en apprentissage est qu'on aille un [[C - Biais]] et une [[C - Variance (expliquée)]] élevée. Le meilleur scénario serait qu'on aille un bais et une variance faible. En pratique on tombe très souvent en [[C - Sous-apprentissage]] qui se caractérise par un biais élevé et une variance faible ou bien en [[C - Surapprentissage]] qui se caractérise par un biais faible et une variance élevée.
Il y a donc un compromis à aller chercher entres les deux dans le but de minimiser l'erreur.
Un point optimal de complexité du modèle existe là ou les courbes d'erreur de biais et de variance se croisent, et l'erreur minimisée.

**Stratégie pour trouver la complexité optimale**
On entraîne plusieurs modèles avec les mêmes données d'entraînement. 
Leurs performances en généralisation sont mesurées avec les mêmes données de validation.
Le modèle avec les meilleures performances est celui avec la complexité optimale.



