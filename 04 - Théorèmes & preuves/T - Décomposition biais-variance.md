---
type: theoreme
cours: [IFT6269, IFT6135]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Pour un estimateur $\widehat\theta_n$ de $\theta$ et la perte quadratique $L(\theta,\widehat\theta_n)=\|\theta-\widehat\theta_n\|_2^2$, le [[C - Risque Fréquentiste|risque fréquentiste]] se décompose en :
$$R(P_\theta,\delta_n)=\mathbb E_{D\sim P_\theta}\big[\|\theta-\widehat\theta_n\|^2\big]=\big\|\text{biais}(\widehat\theta_n)\big\|^2+\mathrm{Var}[\widehat\theta_n]$$
avec $\text{biais}(\widehat\theta_n)=\mathbb E[\widehat\theta_n]-\theta$ et $\mathrm{Var}[\widehat\theta_n]=\mathbb E\|\widehat\theta_n-\mathbb E\widehat\theta_n\|^2$.

## Preuve

On ajoute et retire $\mathbb E[\widehat\theta_n]$ :
$$\begin{aligned}
R&=\mathbb E\big[\|\theta-\mathbb E[\widehat\theta_n]+\mathbb E[\widehat\theta_n]-\widehat\theta_n\|^2\big]\\
&=\mathbb E\big[\|\theta-\mathbb E\widehat\theta_n\|^2\big]+\mathbb E\big[\|\mathbb E\widehat\theta_n-\widehat\theta_n\|^2\big]+2\,\mathbb E\big[\langle\theta-\mathbb E\widehat\theta_n,\ \mathbb E\widehat\theta_n-\widehat\theta_n\rangle\big]\\
&=\|\theta-\mathbb E\widehat\theta_n\|^2+\mathbb E\big[\|\mathbb E\widehat\theta_n-\widehat\theta_n\|^2\big]+2\,\langle\theta-\mathbb E\widehat\theta_n,\ \underbrace{\mathbb E\widehat\theta_n-\mathbb E\widehat\theta_n}_{=0}\rangle\\
&=\|\text{biais}(\widehat\theta_n)\|^2+\mathrm{Var}[\widehat\theta_n].\qquad\blacksquare
\end{aligned}$$
Clé : $\theta-\mathbb E\widehat\theta_n$ est **déterministe**, on peut sortir l'espérance du produit scalaire.

## Conséquences

- Un estimateur **biaisé** peut avoir un risque plus faible qu'un non biaisé si sa variance est suffisamment plus petite → [[C - Estimateur de James-Stein]].
- **D'autres pertes** donneraient une autre fonction du biais et de la variance, donc une autre priorité entre les deux.
- Courbe en U de l'erreur de test vs capacité : faible capacité = biais élevé (sous-apprentissage), haute capacité = variance élevée (surapprentissage). Voir [[C - Compromis Biais-Variance]].

## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Décomposition biais-variance du risque quadratique ?::$\mathbb E\|\theta-\widehat\theta_n\|^2=\|\mathbb E\widehat\theta_n-\theta\|^2+\mathbb E\|\widehat\theta_n-\mathbb E\widehat\theta_n\|^2$.

Pourquoi le terme croisé s'annule-t-il dans la preuve biais-variance ?::$\theta-\mathbb E\widehat\theta_n$ est déterministe : $\mathbb E\langle\theta-\mathbb E\widehat\theta_n,\mathbb E\widehat\theta_n-\widehat\theta_n\rangle=\langle\theta-\mathbb E\widehat\theta_n,0\rangle=0$.

Un estimateur biaisé peut-il battre un estimateur sans biais en risque quadratique ?::Oui, si la réduction de variance compense le biais au carré (ex. James-Stein vs MLE).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Compromis Biais-Variance]]
- [[C - Biais]]
- [[C - Variance]]
- [[C - Risque Fréquentiste]]
- [[E - Estimateur de Bayes sous perte quadratique]]
