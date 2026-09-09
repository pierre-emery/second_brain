---
type: concept
cours:
  - IFT6135
  - STT2105
statut: brouillon
maj: 2026-09-08
---
## Définition dans le cadre du cours de stats bayésienne
Un modèle statistique paramétrique consiste en l'observation d'une variable aléatoire $X$ de densité $f(x;\theta)$ où $f$ dépend uniquement de $\theta \in \Theta \subseteq \mathrm R^k$. 
### Notes :
- Si on observe $x = (x_1,...,x_n)$ provenant de n variables aléatoires i.i.d., la densité conjointe correspond à la fonction de [[C - Vraisemblance]]
$$\mathcal L(\theta|x)=\prod_{i=1}^n f(x_i;\theta)=f(x;\theta)$$
- Notre but est d'utiliser l'information contenue dans l'échantillon ainsi que toute autre information disponible pour faire de [[C - Inférence Statistique]] sur $\theta$

Sa capacité est fixe : elle n'augmente pas avec la quantité de données d'entraînement (à l'opposé du [[C - Modèle Non Paramétrique]]). Exemples : classifieur linéaire, réseau de neurones à nombre de couches cachées fixe.

## Notes supplémentaires de IFT6269
Une famille de distributions est définie formellement comme : $$\mathcal P_\Theta=\{p(­­\cdot\;;\theta)|\theta\in\Theta\}$$
où $p(\cdot\;;\theta)$ est la [[C - Fonction de masse et de densité (pmf-pdf)|pmf ou pdf]] possible (selon le contexte) dépendant du paramètre $\theta$, et $\Theta$ est l'ensemble des paramètres valides. Un modèle paramétrique est une telle famille définie par un nombre fini et fixe de paramètres (à l'opposé du [[C - Modèle Non Paramétrique|modèle non paramétrique]])

> Remarque de notation : écrire $p_\theta(x;\theta)$ serait un abus de notation, puisque $p(x;\theta)$ n'est qu'un scalaire pour un $x$ donné, pas une pmf/pdf. On écrit plutôt $\{p(x;\theta)\mid\theta\in\Theta\}$.

Le support $\Omega_X$ de la distribution est généralement fixe pour tout $\theta \in\Theta$ (mais pas toujours). Exemples : $\Omega_X={0,1}$ pour une pièce, $\Omega_X=[0,+\infty)$ pour une famille de type gamma. 
## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Modèle Non Paramétrique]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[D - Bernoulli]]
- [[D - Loi Gaussienne (Normale)]]