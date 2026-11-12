---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
Première propriété à analyser pour une [[C - Règle de décision|règle de décision]] : la perte **moyennée sur les jeux de données** possibles.
$$R(P,\delta) \triangleq \mathbb E_{D\sim P}\big[L(P,\delta(D))\big]$$
Les deux formules ci-dessous en sont les cas paramétriques ($P=P_\theta$).

## Cas Continu
$$R(\theta,\delta)=\mathbb E_X[l(\theta,\delta(X))]=\int_\mathcal X L(\theta,\delta(x))f(x|\theta)dx$$
## Cas discret 
$$R(\theta,\delta)=\mathbb E_X[l(\theta,\delta(X))]=\sum_{x\in\mathcal X}L(\theta,\delta(x))\mathbb P_\theta[X=x]$$

## Remarques (IFT6269)

- $R(P,\delta)$ est une **fonction de $P$** : en pratique on ne connaît pas $P$, donc on ne connaît jamais la valeur du risque d'une règle. C'est un **outil d'analyse théorique** : on peut dire « pour tout $P$ dans la famille $\mathcal P$, $\delta_1$ a un risque plus faible que $\delta_2$ ».
- **Ne pas confondre** le risque fréquentiste (espérance sur $D$ de la perte statistique) avec le [[C - Risque|risque de Vapnik]] / erreur de généralisation $\mathbb E_{P_0}[\ell(Y,f(X))]$ qui est la *perte* $L(P,f)$ dans le cadre ML. Le risque fréquentiste d'un algorithme d'apprentissage est donc l'erreur de généralisation **moyenne** sur les jeux d'entraînement.

## Profils de risque

Pour $\theta\in\mathbb R$, on trace $\theta\mapsto R(P_\theta,\delta)$ pour chaque règle. Souvent **aucune règle ne gagne partout** : ex. $\delta_1$ (courbe en U) est meilleure près de $\theta=0$, mais $\delta_2$ (risque constant) l'emporte loin de 0. Comme $\theta$ est inconnu, on ne sait pas laquelle choisir → il faut réduire chaque courbe à un **scalaire** : [[C - Minimaxité|minimax]] (pire cas), [[C - Risque intégré|pondération]] (moyenne sous $\pi$), ou passer au [[C - Perte Espérée à postériori|critère bayésien]].

## Décomposition sous perte quadratique
Avec $L(\theta,\widehat\theta)=\|\theta-\widehat\theta\|^2$ : $R = \|\text{biais}\|^2 + \text{Var}$, voir [[T - Décomposition biais-variance]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Fondements de la théorie de décision]]
- [[C - Règle de décision]]
- [[C - Admissibilité]]
- [[C - Théorie PAC]]
- [[T - Décomposition biais-variance]]

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Définition du risque fréquentiste d'une règle $\delta$ ?::$R(P,\delta)=\mathbb E_{D\sim P}[L(P,\delta(D))]$ : la perte moyennée sur les jeux de données.

Peut-on calculer le risque fréquentiste en pratique ?::Non : il dépend de la vraie loi $P$, inconnue. C'est un outil d'analyse théorique (comparaisons « pour tout $P\in\mathcal P$ »).

Risque fréquentiste vs risque de Vapnik ?::Vapnik : $\mathbb E_{P_0}[\ell(Y,f(X))]$ pour une fonction $f$ fixée (c'est la perte $L(P,f)$). Fréquentiste : espérance de cette perte sur le jeu d'entraînement $D$ qui a produit $\widehat f=\delta(D)$.

Que faire quand deux profils de risque se croisent ?::Réduire chaque profil à un scalaire : pire cas (minimax), moyenne pondérée par $\pi(\theta)$, ou adopter le critère bayésien.
