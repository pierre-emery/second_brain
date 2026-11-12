---
type: modele
cours: [IFT6758, IFT6269]
statut: complet
tags: []
prerequis: ["[[C - Classification]]", "[[D - Bernoulli]]"]
maj: 2026-11-11
---
Pour un problème de [[C - Classification]]binaire le jeu de donnée est constitué de paires (x,y) avec x un vecteur de caractéristiques et y = 0 ou y = 1 une classe associée. On peut utiliser le modèle probabiliste suivant $p(y|x;\theta) = \text{Ber}(y|\sigma(w^\top x +b))$ qui se traduit comme la probabilité de la classe y étant donnée les carctéristiques x. Aussi le paramètre de la [[D - Bernoulli]] dépend de x: selon les caractéristiques la probabilité de la classe change. On a donc $p(y=1|x;\theta)=\sigma(a)=\frac{1}{1+e^{-a}}$ ou $a = w^\top x +b$

## Exemple : classification des Iris

Classifier le type d'iris (Virginica ou non) selon les caractéristiques des pétales : la sigmoïde donne une probabilité continue entre 0 et 1, et on trace la frontière de décision là où cette probabilité vaut 0.5.

## Formulation (IFT6269, lectures 6 & 8)

Approche **conditionnelle** de la classification binaire : on ne modélise que $p(Y\mid X)$, $X\in\mathbb R^d$, $Y\in\{0,1\}$.
$$p(Y=1\mid X=x)=\sigma(w^\top x),\qquad Y\mid X=x\sim\text{Bernoulli}\big(\sigma(w^\top x)\big)$$
$$p(y\mid x)=\sigma(w^\top x)^y\,\sigma(-w^\top x)^{1-y}.$$
Avec $y\in\{-1,1\}$, une seule formule : $p(y\mid x)=\sigma(y\,w^\top x)$.

### Pourquoi cette forme ? (motivation générative)
Toujours, $p(Y=1\mid x)=\sigma(f(x))$ avec $f$ le [[C - Log-ratio des cotes (log-odds)|log-ratio des cotes]]. Si les classes conditionnelles sont dans la [[D - Famille exponentielle|famille exponentielle]], $f(x)=w^\top\phi(x)$ est linéaire → [[T - Classes conditionnelles exponentielles et régression logistique]]. Beaucoup de modèles génératifs différents donnent le **même** modèle logistique : d'où sa **robustesse**.

### Maximum de vraisemblance conditionnelle
$$\ell(w)=\sum_{i=1}^n\Big[y_i\log\sigma(w^\top x_i)+(1-y_i)\log\sigma(-w^\top x_i)\Big]$$
Avec $v_i=w^\top x_i$ et $\nabla_w\sigma(v_i)=x_i\,\sigma(v_i)\sigma(-v_i)$ ([[C - Fonction Sigmoïde|dérivée de la sigmoïde]]) :
$$\nabla_w\ell(w)=\sum_i x_i\Big[y_i\underbrace{(\sigma(-v_i)+\sigma(v_i))}_{=1}-\sigma(v_i)\Big]=\sum_{i=1}^n x_i\big(y_i-\sigma(w^\top x_i)\big).$$
$\nabla\ell=0$ est une **équation transcendante** : pas de forme fermée (contrairement à la [[M - Régression Linéaire|régression linéaire]] où l'équation est linéaire) → méthodes numériques.

### Optimisation
- $\ell$ est **concave** ($H=-X^\top DX\preceq0$) → tout point stationnaire est un maximum global.
- Newton = [[A - IRLS (moindres carrés repondérés itératifs)|IRLS]] (peu d'itérations, $O(d^3)$ chacune).
- Gros $n$, gros $d$ : [[A - Descente de Gradient Stochastique (SGD)|SGD]], mini-lots, [[A - SAG et SAGA|SAG/SAGA]] (défaut de scikit-learn).

## Liens connexes

- [[M - Régression Logistique (Multiclasse)]]
- [[C - Fonction d'activation]] (sigmoïde)
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Fonction Sigmoïde]]
- [[C - Log-ratio des cotes (log-odds)]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
- [[A - IRLS (moindres carrés repondérés itératifs)]]
- [[A - SAG et SAGA]]
- [[C - Approches génératives, conditionnelles et discriminantes]]

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Modèle de la régression logistique ?::$Y\mid X=x\sim\text{Bernoulli}(\sigma(w^\top x))$, i.e. $p(y\mid x)=\sigma(w^\top x)^y\sigma(-w^\top x)^{1-y}$.

Log-vraisemblance conditionnelle de la régression logistique ?::$\ell(w)=\sum_i y_i\log\sigma(w^\top x_i)+(1-y_i)\log\sigma(-w^\top x_i)$.

Gradient de la log-vraisemblance logistique ?::$\nabla\ell(w)=\sum_i x_i(y_i-\sigma(w^\top x_i))$.

Pourquoi n'y a-t-il pas de forme fermée pour la régression logistique ?::$\nabla\ell=0$ est une équation transcendante (non linéaire en $w$), contrairement aux équations normales de la régression linéaire.

Écriture compacte de $p(y\mid x)$ avec $y\in\{-1,1\}$ ?::$p(y\mid x)=\sigma(y\,w^\top x)$.
