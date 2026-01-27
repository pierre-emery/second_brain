Il existe des liens importants entre les estimateurs bayésiens, minimax et admissibles.  ([[C - Estimateur Minimax]], [[C - Estimateur de Bayes]], [[C - Admissibilité]])
Ces liens aident à identifier des estimateurs possédant des propriétés désirées.

Stratégie pour montrer les liens (preuves par contradiction)
1. On suppose que la conclusion est fausse;
2. À partir de cette hypothèse, on montre qu’une des conditions de la proposition ne peut pas être satisfaite.

## Proposition 1 — Minimax unique ⇒ admissible
Si $\delta_0$ est l’unique estimateur minimax, alors $\delta_0$ est admissible.
#### Démonstration
Supposons que $\delta_0$ est inadmissible.  
Alors, il existe un estimateur $\delta_1$ qui le domine, c’est-à-dire
$$
R(\theta,\delta_1)\le R(\theta,\delta_0),\quad \forall \theta\in\Theta,
$$
avec inégalité stricte pour au moins une valeur de $\theta$.  
Cela implique
$$
\sup_{\theta} R(\theta,\delta_1)\le \sup_{\theta} R(\theta,\delta_0)
= \inf_{\delta^*\in D^*}\sup_{\theta}R(\theta,\delta^*).
$$
- Si $\sup_{\theta}R(\theta,\delta_1)=\sup_{\theta}R(\theta,\delta_0)$, alors $\delta_0$ n’est pas unique minimax.
- Si $\sup_{\theta}R(\theta,\delta_1)<\sup_{\theta}R(\theta,\delta_0)$, alors $\delta_0$ n’est pas minimax.
Dans les deux cas, contradiction. Donc $\delta_0$ est admissible. 
## Proposition 2 — Risque constant + admissible ⇒ minimax unique
 Si $\delta_0$ est admissible et possède un [[C - Risque Fréquentiste]] constant, alors $\delta_0$ est l’unique estimateur minimax.

*(Démonstration : flemme et pour les autres aussi)*
## Proposition 3 — Conditions suffisantes : Bayes ⇒ admissible
 Si
1. $\pi(\theta)>0$, $\forall \theta\in\Theta$,
2. $r(\pi)=r(\pi,\delta_\pi)<\infty$,
3. $R(\theta,\delta)$ est continue en $\theta$, $\forall \delta$,
alors l’estimateur de Bayes $\delta_\pi$ est admissible.
## Proposition 4 — Bayes unique ⇒ admissible
 Si l’estimateur de Bayes associé à $\pi$ est **unique**, alors il est admissible.
## Proposition 5 — Perte strictement convexe + risque intégré fini ⇒ admissible
 Si $\delta_\pi$ est un estimateur de Bayes par rapport à $\pi$, si la fonction de perte est strictement convexe, et si

$$
r(\pi)=\int_{\Theta} R(\theta,\delta_\pi)\,\pi(\theta)\,d\theta < \infty,
$$

alors $\delta_\pi$ est admissible.
## Proposition 6 — Cas discret : Bayes avec prior positif ⇒ admissible
Si $\Theta$ est discret, si $\pi$ assigne une probabilité positive à chaque $\theta\in\Theta$, et si $\delta_\pi$ est un estimateur de Bayes (par rapport à $\pi$), alors $\delta_\pi$ est admissible.
## Proposition 7 — Même fonction de risque pour tous les Bayes ⇒ tous admissibles
Si tous les estimateurs de Bayes par rapport à $\pi$ possèdent la même fonction de risque, alors ces estimateurs sont tous admissibles.
