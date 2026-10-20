---
type: algorithme
cours: [IFT6269]
statut: brouillon 
maj: 2026-09-07
---
Façon organisée et efficace de calculer une marginale, ex. $p(x_1) = \sum_{x_2,\dots,x_T} p(x_{1:T})$, en exploitant la [[C - Factorisation d'une distribution jointe|factorisation]] de $p(x_{1:T})$.
## Dérivation

En partant de $$p(x_1) = \sum_{x_2,\dots,x_T} f_1(x_1)f_2(x_2\mid x_1)f_3(x_3\mid x_2)\cdots f_T(x_T\mid x_{T-1})$$ on applique la propriété distributive du produit sur une somme ($a(b+c) = ab+ac$) pour réorganiser les sommes de l'intérieur vers l'extérieur : $$p(x_1) = f_1(x_1)\left(\sum_{x_2} f_2(x_2\mid x_1)\left(\sum_{x_3} f_3(x_3\mid x_2)\Big(\cdots \big(\sum_{x_T} f_T(x_T\mid x_{T-1})\big)\cdots\Big)\right)\right)$$
Le terme $\sum_{x_T} f_T(x_T\mid x_{T-1})$ est appelé un **message**, noté $M_T(x_{T-1})$.
## Récursion

Les messages se calculent récursivement de la droite vers la gauche : $$M_{T-2}(x_{T-2}) = \sum_{x_{T-1}} f_{T-1}(x_{T-1}\mid x_{T-2}) \cdot M_T(x_{T-1})$$ et ainsi de suite, jusqu'à $x_1$.
$$x_1 \to x_2 \to x_3 \to \cdots \to x_{T-1} \to x_T$$$$\longleftarrow M_T(x_{T-1})$$
## Complexité

- Chaque message coûte $O(K^2)$ à calculer.
- Il y a $T$ messages à calculer (un par étape).
- **Complexité totale : $O(T \cdot K^2) \ll O(K^T)$** c'est exactement le même gain que celui de la [[C - Factorisation d'une distribution jointe|factorisation]] (thème : **Inférence**, voir [[C - Thèmes clés de l'apprentissage statistique]]).

Cet algorithme sera revu plus formellement plus tard dans le cours; on y reviendra aussi pour l'**inférence approximative** (échantillonnage, méthodes variationnelles) quand le calcul exact n'est plus tractable.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Modèle Graphique Probabiliste]]
- [[C - Modèle de Markov Caché (HMM)]]
- [[C - Thèmes clés de l'apprentissage statistique]]
## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

À quoi sert la passation de messages ?::Calculer efficacement une marginale (ex. $p(x_1)$) en exploitant la factorisation de la jointe.

Quelle propriété algébrique permet la passation de messages ?::La distributivité, $a(b+c) = ab + ac$ : on pousse chaque somme le plus à l'intérieur possible.

Qu'est-ce que le message $M_T(x_{T-1})$ dans une chaîne ?::$M_T(x_{T-1}) = \sum_{x_T} f_T(x_T \mid x_{T-1})$ ; les messages se calculent récursivement de droite à gauche.

Complexité de la passation de messages sur une chaîne de longueur $T$ à $K$ états, vs le calcul naïf ?::$O(TK^2)$ contre $O(K^T)$.