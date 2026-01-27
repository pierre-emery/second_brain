- Une règle de décision aléatoire est pour chaque X une mesure de probabilité $\delta^*(x,­.)$  sur $\mathcal A$.
- L'espace de toutes les règles de décision aléatoires est noté $\mathcal D^*$.
- La [[C - Fonction de perte]] d'une règle aléatoire est $$L(\theta,\delta^*(x))=\int_\mathcal AL(\theta,a)\delta^*(x,a)da$$
## Notes
- Les règles de décision aléatoires sont des artifices pour construire une théorie, en pratique ils sont rarement utilisés.
- Les règles de décision aléatoiress ne satisfont pas le [[C - Principe de vraisemblance]]. En effet, pour le même $x$ nous pouvons avoir plusieurs décisions (ou estimés) possibles pour $\theta$.
- Dans le cadre fréquentiste([[C - Statistique fréquentiste]]), les estimateurs aléatoires sont parfais nécessaires (e.g. [[C - Test d'hypothèse]] sur $\theta$ lorsque $X\sim Bin(n,\theta)$). 
- Même s'il existe des estimateurs aléatoires meilleurs que des estimateurs non-aléatoires sous le cadre bayésien nous avons uniquement besoin de considérer les estimateurs non-aléatoires [[T - Théoreme estimateur non-aléatoire]]
 