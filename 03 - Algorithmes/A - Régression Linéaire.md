---
cours:
  - IFT6758
statut: à réviser
maj: 2026-09-09
---
## Définition / Formule

$$f(x) = a_0 + a_1x_1 + \dots + a_Nx_N$$ Les $a_i$ sont les **paramètres à apprendre**.

L'algèbre linéaire donne directement les paramètres qui minimisent l'erreur quadratique ([[C - Moindres Carrés Ordinaires (MCO)]]) : $$\hat a = (\mathbf X^\top \mathbf X)^{-1}\mathbf X^\top \mathbf y$$
## [[C - Complexité d'un modèle (capacité)]] pour régression linéaire

- On peut complexifier un modèle linéaire "de base" en y ajoutant de nouvelles combinaisons de caractéristiques: $$\begin{align*} &\text{Modèle de base: } &&\hat y =\beta_0+\beta_1x_1+\beta_2x_2\ &\text{Ajout d'interactions: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2\ &\text{Ajout de non-linéarités: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2+\beta_4x_1^2+\beta_5x^2_2\ &\text{Ajout de caractéristiques: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3\

\end{align*}$$

- Les paramètres $\beta$ des modèles linéaires sont faciles à estimer avec la méthodes des [[C - Moindres Carrés Ordinaires (MCO)]] (l'entraînement n'est pas un problème)
- Le nombre d'intéractions posisbles augmente comme $D^2$ ou D est la dimensionnalité de x

## Terme d'ordonnée à l'origine (biais) : linéaire vs affine

Le terme « régression linéaire » désigne souvent, de façon un peu abusive, un modèle légèrement plus riche avec un paramètre supplémentaire $b$ :

$$\hat y = \mathbf{w}^\top\mathbf{x} + b$$

La correspondance entre paramètres et prédictions reste linéaire, mais la correspondance entre caractéristiques et prédictions est désormais **affine** (le graphe des prédictions reste une droite, mais qui n'a plus besoin de passer par l'origine). Le terme $b$ est appelé le **biais** de la transformation affine mais attention, ce sens de « biais » (le résultat est « biaisé » vers $b$ en l'absence d'entrée) est complètement différent du [[C - Biais|biais statistique]] d'un estimateur.

Plutôt que d'ajouter explicitement $b$, une astuce courante consiste à augmenter $\mathbf{x}$ d'une entrée supplémentaire toujours fixée à 1 : le poids associé à cette entrée joue alors le rôle du biais.

## Justification par maximum de vraisemblance

Voir [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] : minimiser l'erreur quadratique moyenne équivaut exactement à maximiser la log-vraisemblance conditionnelle sous l'hypothèse $p(y\mid\mathbf{x})=\mathcal{N}(y;\widehat y(\mathbf{x};\mathbf{w}),\sigma^2)$ ce qui justifie a posteriori le choix, autrement arbitraire, de la MSE comme critère d'entraînement.

## Les métriques qui permettent l'[[MOC - Évaluation & généralisation]]

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Biais]]
- [[A - Régression Linéaire Bayésienne]]
- [[C - Recette de construction d'un algorithme ML]]



