---
type: concept
cours:
  - IFT6135
  - STT2105
statut: brouillon
---
## Définition dans le cadre du cours de stats bayésienne
Un modèle statistique paramétrique consiste en l'observation d'une variable aléatoire $X$ de densité $f(x;\theta)$ où $f$ dépend uniquement de $\theta \in \Theta \subseteq \mathrm R^k$. 
### Notes :
- Si on observe $x = (x_1,...,x_n)$ provenant de n variables aléatoires i.i.d., la densité conjointe correspond à la fonction de [[C - Vraisemblance]]
$$\mathcal L(\theta|x)=\prod_{i=1}^n f(x_i;\theta)=f(x;\theta)$$
- Notre but est d'utiliser l'information contenue dans l'échantillon ainsi que toute autre information disponible pour faire de [[C - Inférence Statistique]] sur $\theta$


Sa capacité est fixe : elle n'augmente pas avec la quantité de données d'entraînement (à l'opposé du [[C - Modèle Non Paramétrique]]). Exemples : classifieur linéaire, réseau de neurones à nombre de couches cachées fixe.

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Modèle Non Paramétrique]]