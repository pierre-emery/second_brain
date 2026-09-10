---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Un **estimateur ponctuel** (ou statistique) est n'importe quelle fonction des données :

$$\widehat\theta_m = g(\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(m)})$$

Cette définition est volontairement très générale : $g$ n'a pas besoin de retourner une valeur proche du vrai $\theta$, ni même d'avoir le même domaine que les valeurs permises de $\theta$. Un **bon** estimateur, cependant, est une fonction dont la sortie est proche du vrai $\theta$ sous-jacent qui a généré les données d'entraînement.

## Point de vue fréquentiste

On suppose que le vrai paramètre $\theta$ est fixe mais inconnu, alors que l'estimé $\widehat\theta$ est une fonction des données. Comme les données proviennent d'un processus aléatoire, toute fonction des données est elle-même aléatoire  $\widehat\theta$ est donc une **variable aléatoire**.

## Estimation de fonction

L'estimation ponctuelle peut aussi porter sur la relation entre une entrée et une cible, plutôt que sur un paramètre scalaire ou vectoriel. On parle alors d'**estimateur de fonction**. On suppose qu'il existe une fonction $f(\mathbf{x})$ décrivant la relation approximative entre $\mathbf{x}$ et $y$ (ex. $y=f(\mathbf{x})+\epsilon$), et on cherche à approximer $f$ par un modèle ou estimé $\hat f$. L'estimation de fonction n'est en réalité rien d'autre qu'un estimateur ponctuel, mais dans l'espace des fonctions plutôt que dans l'espace des paramètres.

## Propriétés étudiées

Les propriétés les plus étudiées d'un estimateur ponctuel sont son [[C - Biais|biais]], sa variance (voir [[C - Compromis Biais-Variance]]) et sa [[C - Consistance d'un Estimateur|consistance]].

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Biais]]
- [[C - Compromis Biais-Variance]]
- [[C - Consistance d'un Estimateur]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[A - Régression Linéaire]]