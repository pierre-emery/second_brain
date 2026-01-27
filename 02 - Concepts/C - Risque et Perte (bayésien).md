Selon l'approche bayésienne, $x$ est connu et $\theta$ est une variable aléatoire.
Pour condenser l'information contenue dans la fonction de perte, nous calculons donc des espérances par rapport à $\theta$.

Pour un échantillon donné, la meilleure décision consiste à minimiser la [[C - Perte Espérée à postériori]]

# Solution bayésienne aux problèmes des fréquentistes 
- Les fonctions $R(\theta,\delta)$ ne sont pas toujours comparables pour différentes règles de décision $\delta$;
- Nous pourrions alors condenser davantage l'information disponible en prenant l'espérance de $R(\theta,\delta)$ par rapport à $\theta$.