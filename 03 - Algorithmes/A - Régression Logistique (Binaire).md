---
## type: algorithme
cours: [IFT6758]
statut: complet
tags: []
prerequis: ["[[C - Classification]]", "[[D - Bernoulli]]"]
maj: 2026-08-06
---
Pour un problème de [[C - Classification]]binaire le jeu de donnée est constitué de paires (x,y) avec x un vecteur de caractéristiques et y = 0 ou y = 1 une classe associée. On peut utiliser le modèle probabiliste suivant $p(y|x;\theta) = \text{Ber}(y|\sigma(w^\top x +b))$ qui se traduit comme la probabilité de la classe y étant donnée les carctéristiques x. Aussi le paramètre de la [[D - Bernoulli]] dépend de x: selon les caractéristiques la probabilité de la classe change. On a donc $p(y=1|x;\theta)=\sigma(a)=\frac{1}{1+e^{-a}}$ ou $a = w^\top x +b$

## Exemple : classification des Iris

Classifier le type d'iris (Virginica ou non) selon les caractéristiques des pétales : la sigmoïde donne une probabilité continue entre 0 et 1, et on trace la frontière de décision là où cette probabilité vaut 0.5.

## Liens connexes

- [[A - Régression Logistique (Multiclasse)]]
- [[C - Fonction d'activation]] (sigmoïde)