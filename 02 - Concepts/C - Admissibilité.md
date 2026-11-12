---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
Propriété fréquentiste [[C - Statistique fréquentiste]] nous permettant d'éviter des estimateurs qui ont un risque toujours pire qu'un autre estimateur.
# Définition

Un estimateur $\delta_0$ est inadmissible s'il existe un autre estimateur $\delta_1$ qui domine $\delta_0$, c'est-à-dire que $R(\theta,\delta_1)\leq R(\theta,\delta_0),\forall\theta$, avec une inégalité stricte pour au moins une valeur de $\theta$.
L'estimateur $\delta_0$ est dit admissible sinon.
## Note

L'admissibilité est une bonne propriété pour un estimateur mais ce n'est pas suffisant pour justifier l'utilisation de l'estimateur.

[[C - Lien Estimateurs Bayésiens, Minimax et Admissible]]
## Domination et admissibilité (IFT6269)

$\delta_1$ **domine** $\delta_2$ (pour une perte $L$ donnée) si

$$R(P,\delta_1)\le R(P,\delta_2)\ \ \forall P\in\mathcal P \quad\text{et}\quad \exists P\in\mathcal P:\ R(P,\delta_1)<R(P,\delta_2).$$

$\delta$ est **admissible** s'il n'existe aucun $\delta_0$ qui domine $\delta$.

- Si une règle dominait toutes les autres, on la choisirait ; en général il n'y en a pas → pas de procédure universellement meilleure.
- La plupart des **procédures bayésiennes sont admissibles**.
- Le **MLE n'est pas toujours admissible** : pour la moyenne d'une $\mathcal N_d(\mu,\sigma^2 I)$ avec $d\ge 3$ et perte quadratique, l'[[C - Estimateur de James-Stein]] domine le MLE.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Risque Fréquentiste]]
- [[C - Estimateur de James-Stein]]
- [[C - Minimaxité]]
## Flashcards

#flashcards/IFT6269/05-theorie-decision

Quand dit-on que $\delta_1$ domine $\delta_2$ ?::$R(P,\delta_1)\le R(P,\delta_2)$ pour tout $P\in\mathcal P$, avec inégalité stricte pour au moins un $P$.

Définition d'une règle admissible ?::Aucune autre règle ne la domine.

Le MLE est-il toujours admissible ? Contre-exemple ?::Non : pour la moyenne d'une $\mathcal N_d(\mu,\sigma^2I)$, $d\ge3$, perte quadratique, l'estimateur de James-Stein domine le MLE.

Les procédures bayésiennes sont-elles admissibles ?::La plupart oui (contrairement au MLE).