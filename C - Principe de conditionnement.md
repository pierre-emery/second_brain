Si deux expériences peuvent être menées pour faire une inférence sur le même paramètre $\theta$ et si l'on choisit l'une d'elles avec probabilité $p$, alors l'inférence sur $\theta$ ne devrait pas dépendre que de l'expérience choisie.

Le principe de conditionnement est difficilement discutable lorsqu'on connaît l'expérience sélectionnée; il est donc accepté par tous les statisticiens.

## Exemple [[D - Loi Gaussienne (Normale)]]
Dans l'exemple on verra de quelle façon notre inférence est pénalisée ([[C - Inférence Statistique]]) lorsque nous choisissons d'ignorer le principe de conditionnement et en ne tenant pas compte de l'expérience choisie.

Supposons que des mesures puissent être prises avec deux appareils différents, un étant plus précis que l'autre:
- $E_1: X|\theta \sim \mathcal N(\theta,1)$ 
- $E_2: X|\theta \sim \mathcal N(\theta,100)$
X représente la variable aléatoire de la mesure fournie par les appareils (incluant donc un terme d'erreur qui peut être plus ou moins important).
Les deux appareils ont la même probabilité d'être utilisés $\mathbb P(E_1)=\mathbb P(E_2)=0.5$ 

Nous cherchons un intervalle de confiance de niveau 90% pour $\theta$ qui représente la mesure réelle de ce que l'on cherche ;a mesurer