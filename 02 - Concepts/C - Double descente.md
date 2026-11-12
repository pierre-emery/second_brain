---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Phénomène observé par Belkin et al. (2018) : quand on augmente la capacité d'un modèle, le risque de test suit d'abord la courbe en U classique, culmine au **seuil d'interpolation** (le modèle ajuste juste assez les données d'entraînement), puis **redescend** dans le régime sur-paramétré.

$$\text{risque de test}(\text{capacité}) :\ \searrow\ \nearrow\ \underbrace{\text{pic}}_{\text{seuil d'interpolation}}\ \searrow$$

## Intuition
- **Régime « classique »** (sous-paramétré) : le compromis biais-variance habituel, en U.
- **Régime « moderne »** (sur-paramétré, interpolant) : il existe une infinité de solutions à erreur d'entraînement nulle. Interprétation proposée (avec un point d'interrogation dans le cours) : SGD trouve une solution de **petite norme** parmi elles, d'où une surface de décision plus lisse, sous la contrainte d'ajuster les données. Le comportement ressemble à celui des méthodes à noyau (non paramétriques).

## Les réseaux peuvent mémoriser
Zhang, Bengio, Hardt, Recht, Vinyals (ICLR 2017), *Understanding deep learning requires rethinking generalization* : un modèle Inception sur CIFAR-10 atteint une erreur d'entraînement nulle même avec :
- des **étiquettes aléatoires** (toutes remplacées au hasard) ;
- des **pixels mélangés** (la même permutation pour toutes les images) ;
- des **pixels aléatoires** (une permutation différente pour chaque image) ;
- des images **gaussiennes** (bruit de même moyenne et variance que les données).

Conclusion : la capacité brute des réseaux suffit à tout mémoriser. Les mesures de capacité classiques ne suffisent donc pas à expliquer pourquoi ils généralisent sur les vraies données.

## Exemple
Un MLP dont on augmente la largeur : l'erreur de test monte vers la largeur où le nombre de paramètres ≈ nombre d'exemples, puis redescend sous son minimum « classique » pour des largeurs beaucoup plus grandes.

## Flashcards
#flashcards/IFT6135/07-regularisation

Qu'est-ce que le seuil d'interpolation dans la double descente ?::La capacité à partir de laquelle le modèle ajuste parfaitement les données d'entraînement ; le risque de test y culmine, puis redescend.

Interprétation proposée de la 2ᵉ descente dans les réseaux sur-paramétrés ?::Parmi les nombreuses solutions interpolantes, SGD trouve une solution de petite norme, donc une surface de décision plus lisse (comme une méthode à noyau).

Que montre l'expérience de Zhang et al. (2017) avec des étiquettes aléatoires ?::Un réseau (Inception, CIFAR-10) atteint une erreur d'entraînement nulle même sur des étiquettes ou pixels aléatoires : il peut tout mémoriser, donc sa capacité seule n'explique pas sa généralisation.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Évaluation & généralisation]]
- [[C - Compromis Biais-Variance]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Surapprentissage]]
- [[C - Régularisation]]
