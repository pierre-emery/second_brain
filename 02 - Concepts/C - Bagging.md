---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Bagging** (*bootstrap aggregating*) : méthode de moyenne de modèles qui réduit la **variance** d'un estimateur. On entraîne $m$ modèles sur $m$ échantillons bootstrap du jeu de données, puis on combine leurs prédictions.

$$\hat f_{\text{bag}}(x) = \frac1m \sum_{k=1}^m \hat f_k(x)\quad(\text{régression}),\qquad \hat y = \text{vote majoritaire}(\hat y_1,\dots,\hat y_m)\quad(\text{classification}).$$

## Intuition
Chaque modèle fait des erreurs différentes parce qu'il a vu un jeu de données légèrement différent. En moyenne, ces erreurs se compensent en partie : si $k$ modèles ont des erreurs de variance $v$ et de covariance $c$, l'erreur de la moyenne a une variance $\frac{v}{k} + \frac{k-1}{k}c$. Le gain est maximal quand les erreurs sont décorrélées ($c = 0$).

## Formalisme
Étant donné un ensemble d'entraînement $D$ de taille $n$ :
1. générer $m$ nouveaux ensembles $D_1,\dots,D_m$, chacun de taille $n'$, en tirant dans $D$ **uniformément avec remise** ;
2. entraîner un modèle sur chaque $D_k$ ;
3. combiner par **moyenne** (régression) ou **vote** (classification).

## Exemple
Figure du cours (« 8 ») : le sac 1 contient surtout des « 8 » avec le trou du haut, le sac 2 surtout ceux avec le trou du bas. Chaque modèle apprend un détecteur différent ; ensemble, ils sont plus robustes.

## IFT6135 — lien avec le dropout
Le [[C - Dropout|dropout]] s'interprète comme du bagging d'un nombre exponentiel de sous-réseaux, avec trois différences : moyenne approximative, moyenne géométrique au lieu d'arithmétique, et partage de poids entre les membres.

## Flashcards
#flashcards/IFT6135/07-regularisation

Procédure du bagging ?::Tirer $m$ jeux de données avec remise depuis $D$, entraîner un modèle sur chacun, combiner par moyenne (régression) ou par vote (classification).

Pourquoi le bagging réduit-il la variance et pas le biais ?::Moyenner des modèles aux erreurs en partie décorrélées réduit la variance de l'erreur ; le modèle moyen a à peu près le même biais que chaque membre.

Quand le bagging n'aide-t-il pas ?::Quand les erreurs des modèles sont parfaitement corrélées : la variance de la moyenne reste $v$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[C - Dropout]]
- [[M - Forêt Aléatoire]]
- [[C - Compromis Biais-Variance]]
