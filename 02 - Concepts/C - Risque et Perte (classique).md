Nous ne pouvons pas nous servir directement de la [[C - Fonction de perte]] $L(\theta,a)$ pour choisir la procédure optimal.
Généralement il est impossible de minimiser $L(\theta,a)$ par rapport à $a, \forall\theta\in\Theta$ 
Nous devons prendre des espérances par rapport à $X$ et/ou $\theta$ pour condenser l'information.

## Définition
- $\mathcal D$: Espace des règles de décision
- On appelle règle de décision toute fonction $\delta:\mathcal X \rightarrow \mathcal A$;
- On appelle [[C - Risque Fréquentiste]] de $\delta$ $$R(\theta,\delta)=\mathbb E_X[l(\theta,\delta(X))]=\int_\mathcal X L(\theta,\delta(x))f(x|\theta)dx$$
### Notes :
- Règles de décision: $\delta \in \mathcal D$;
- Décisions: $a=\delta(x)\in\mathcal A$;
- $R(\theta,\delta)$ ne dépend pas de nos observations car nous avons pris l'espérance par rapport à X.
- $R(\theta,\delta)$ est une fonction de $\theta$.
Les deux derniers points impliquent qu'il n'est pas évident de trouver une règle de décision $\delta^*$ si elle existe telle que $R(\theta,\delta^*)\leq R(\theta,\delta), \forall\delta\in\mathcal D,\forall \theta\in\Theta$ 
