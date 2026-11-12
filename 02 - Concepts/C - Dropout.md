---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Technique de [[C - Régularisation|régularisation]] (Hinton et al., 2012) : à chaque présentation d'un exemple, on **supprime aléatoirement chaque unité cachée** avec une probabilité $p$ (souvent 0,5). Au test, on garde toutes les unités et on multiplie les poids sortants par la probabilité de conservation (« divisés par 2 » pour $p = 0{,}5$).

$$\tilde h = m \odot h,\qquad m_j \sim \mathrm{Bernoulli}(1-p)\ \text{i.i.d.};\qquad \text{au test : } W \leftarrow (1-p)\,W$$

## Intuition
- **Effet 1 : prévenir la co-adaptation.** Sans dropout, chaque paramètre change pour réduire la perte *sachant ce que font toutes les autres unités* ; des co-adaptations complexes se forment, qui ne généralisent pas. Avec le dropout, la présence des autres unités n'est plus fiable : chaque unité doit être utile seule, dans une grande variété de contextes.
- **Effet 2 : moyenne d'ensemble.** Chaque masque définit un sous-réseau ; il y a $2^{|h|}$ architectures possibles. Entraîner avec le dropout revient à entraîner cet ensemble avec **partage de poids**, comme du [[C - Bagging|bagging]].

## Formalisme : moyenne géométrique et mise à l'échelle des poids
Hinton et al. : le dropout approxime une **moyenne géométrique** des prédictions des sous-réseaux, plutôt qu'une moyenne arithmétique :
$$\text{arithmétique : } \frac1N\sum_{i=1}^N x_i \qquad \text{géométrique : } \Big(\prod_{i=1}^N x_i\Big)^{1/N}.$$
- Pour un réseau à **une seule couche cachée** de $N$ unités et une sortie **softmax**, utiliser le réseau « moyen » (tous les poids divisés par 2) est **exactement** équivalent à la moyenne géométrique (renormalisée) des distributions prédites par les $2^N$ sous-réseaux.
- Pour un réseau profond, c'est une **approximation** (*weight scaling inference rule*).

## Dropout vs bagging : différences
1. La moyenne de modèles n'est qu'**approximative** en profondeur.
2. Le bagging utilise en général une moyenne **arithmétique** ; le dropout approxime une moyenne **géométrique**.
3. Les membres de l'ensemble ne sont **pas indépendants** : ils partagent fortement leurs poids.

## Exemple : résultats empiriques (Courville)
- MNIST (784-1024-1024-2048-10), erreur de test : L2 1,62 % ; L1 1,60 % ; KL-sparsité 1,55 % ; max-norm 1,35 % ; **dropout 1,25 %** ; **dropout + max-norm 1,05 %**. Le dropout est encore plus efficace avec dropout sur l'entrée (20 %).
- **Moyenne géométrique vs arithmétique** (petits réseaux, 2 couches ReLU de 10 unités, $2^{20}$ masques calculés exhaustivement, 7 tâches binaires) : aucun avantage systématique de l'arithmétique (test de Wilcoxon non significatif).
- **Qualité de l'approximation** : avec des ReLU, les prédictions par mise à l'échelle des poids sont aussi bonnes, ou meilleures, que la moyenne géométrique exacte.
- **Dropout vs ensembles à poids non liés** (MNIST) : un vrai ensemble de copies masquées entraînées indépendamment aide un peu, mais le dropout fait **mieux**. Le partage de poids a donc un effet propre.

## Flashcards
#flashcards/IFT6135/07-regularisation

Que fait le dropout à l'entraînement et au test ?::Entraînement : chaque unité cachée est supprimée avec probabilité $p$ (0,5). Test : on garde toutes les unités et on multiplie les poids par $1-p$ (divise par 2).

Deux effets du dropout selon Hinton et al. ?::(1) Il empêche la co-adaptation des unités ; (2) il fait une moyenne d'ensemble implicite sur $2^{|h|}$ sous-réseaux, comme du bagging.

Dans quel cas la mise à l'échelle des poids donne-t-elle exactement la moyenne géométrique ?::Une seule couche cachée et une sortie softmax : le réseau moyen (poids /2) égale la moyenne géométrique renormalisée des $2^N$ sous-réseaux. En profondeur, c'est une approximation.

Trois différences entre dropout et bagging ?
?
(1) La moyenne n'est qu'approximative en profondeur ; (2) moyenne géométrique au lieu d'arithmétique ; (3) les membres partagent leurs poids, ils ne sont pas indépendants.

Le dropout bat-il un ensemble de réseaux à poids indépendants ?::Oui (MNIST) : bagger des copies masquées non liées aide un peu, mais le dropout fait mieux, donc le partage de poids compte.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Évaluation & généralisation]]
- [[C - Régularisation]]
- [[C - Bagging]]
- [[D - Bernoulli]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[M - Réseau de neurones]]
