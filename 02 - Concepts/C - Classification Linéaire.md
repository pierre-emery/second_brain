---
## type: concept
cours: [IFT6758]
statut: complet
tags: []
prerequis: ["[[C - Classification]]", "[[C - Hyperplan]]"]
maj: 2026-08-06
---
## Définition

Un classificateur linéaire sépare les classes à l'aide d'une frontière de décision **linéaire** (un [[C - Hyperplan]] en dimension $n$). C'est le cas le plus simple de [[C - Classification]] — mais beaucoup de problèmes réels ne sont **pas** linéairement séparables.

## Exemple : deux classes en anneaux concentriques

Données 2D, deux classes bien séparées mais avec une frontière **non-linéairement séparable** (classe 1 au centre, classe 0 en anneau autour). Un classificateur linéaire (perceptron simple, ou réseau de neurones dont la couche cachée a une activation **identité**, voir [[C - Fonction d'activation]]) ne peut tracer qu'une droite et sépare mal les données. Il faut de la **non-linéarité** (ex: ReLU) pour bien capturer une frontière courbe.

## Lien avec la régression logistique

La [[A - Régression Logistique (Binaire)]] cherche justement une frontière linéaire dans l'espace des scores (avant la sigmoïde) : $a = w^\top x + b$, puis $p(y=1|x) = \sigma(a)$. La frontière de décision ($p=0.5$) correspond à $a=0$, donc à un hyperplan.

## Lien avec les SVM

Les [[A - Machines à vecteurs de support (SVM)]] cherchent aussi un hyperplan séparateur, mais en maximisant la marge entre les classes plutôt qu'en modélisant une probabilité. Pour les cas non-linéairement séparables, on utilise l'[[C - Astuce du noyau]] pour projeter implicitement les données dans un espace où elles deviennent linéairement séparables.

## Liens connexes

- [[C - Classification]]
- [[C - Hyperplan]]
- [[A - Régression Logistique (Binaire)]]
- [[A - Machines à vecteurs de support (SVM)]]
- [[C - Fonction d'activation]]