---
cours:
  - IFT6758
  - STT2105
  - STT3790
  - IFT6135
statut: complet
tags: []
prerequis:
  - "[[C - Risque]]"
maj: 2026-08-06
---
Le risque empirique est l'approximation du [[C - Risque]] sur le jeu de donnée qu'on a pratiquement. Il est donné par $\widehat R(f) = \frac{1}{|D|}\Sigma_{i=1}^{|D|}l(y_i,f(x_i))$ pour la [[C - Fonction de perte]] $l(y_i,f(x_i))$ qui mesure l'erreur du modèle. (ici $|D|$ est la cardinalité du jeu de donnée).

Cadre pour concevoir des algorithmes d'apprentissage : on choisit les paramètres $\theta$ qui minimisent la perte moyenne sur l'ensemble d'entraînement, éventuellement régularisée :

$$\arg\min_\theta\ \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) + \lambda\,\Omega(\theta)$$

où $l(f(\mathbf{x}^{(t)};\theta), y^{(t)})$ est la fonction de perte.

L'apprentissage est ainsi posé comme un problème d'optimisation. Idéalement on voudrait optimiser directement l'erreur de classification, mais elle n'est pas différentiable. La fonction de perte agit comme substitut (ex. une borne supérieure).

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Fonction de perte]]
- [[C - Régularisation]]
- [[A - Rétropropagation du gradient (gradient descent)]]