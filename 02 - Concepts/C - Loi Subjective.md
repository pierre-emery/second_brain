La probabilité subjective d'un événement doit refléter notre opinion de la chance que cet événement se produise.

En utilisant cette définition de la probabilité nous pouvons construire $\pi(\theta)$. ([[C - Distribution à priori]])
Cette approche n'est pas forcément facile dans la pratique. L'idée est de se baser sur des données antérieures.

### Méthode 1: [[G - Histogramme]]
 
 À l'aide d'information disponible sur $\theta$, on crée un histogramme qui par la suite va être lissé à l'aide de méthodes non paramétriques.
 
 Désavantage: Densité habituellement difficile à travailler.
 Dans un cadre paramétrique, cette approche revient ;a choisir une valeur particulière du paramètre à l'aide d'information à priori. 

### Méthode 2: Ajustement d'une densité
Considérons $\Pi=\{\pi(\theta\mid\lambda)\mid\lambda\in\Omega)\}$ .
- a) Déterminer autant de moments (percentiles) que la dimensions de $\lambda$;
- b) À l'aide de ces valeurs, obtenir $\hat\lambda$, et utiliser $\pi(\theta,\hat\lambda)$ comme densité à priori.

## Notes
1. Les moments sont souvent plus faciles à spécifier que les percentiles, mais cette méthode est plus dangereuse car les moments dépendent fortement des ailes de la classe de densités choisie;
2. Une fois la densité choisie, on peut la comparer à notre histogramme. Nous ne nous attardons pas davantage sur cette approche. Notons que l’approche subjective est indépendante du modèle échantillonnal $f(x|\theta)$ considéré. Nous nous tournons plutôt vers les approches partiellement informative et non informative, qui nécessitent un minimum d’information sur le modèle échantillonnal. ([[C - Loi de maximum d'entropie]])

 