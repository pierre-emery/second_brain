---
## type: algorithme
cours: [IFT6758]
statut: complet
tags: []
prerequis: ["[[A - Régression Linéaire]]"]
maj: 2026-08-06
---
## Idée

On peut transformer le vecteur d'entrée $x$ en un vecteur de caractéristiques $\phi(x)$ qui inclut des termes polynomiaux, puis appliquer une [[A - Régression Linéaire]] classique sur $\phi(x)$ : $$\phi(\mathbf x) = [1, x_1, x_2, x_1^2, x_2^2, x_1x_2]$$

Le modèle reste linéaire **en les paramètres**, mais la fonction résultante $f(x)$ peut capturer des courbes.

## Limite

Ces caractéristiques doivent être créées "à la main", contrairement aux [[A - Réseau de neurones|réseaux de neurones]], qui apprennent ces transformations automatiquement.

## Lien avec le surapprentissage

Le degré du polynôme est un [[C - Hyperparamètres|hyperparamètre]] qui contrôle directement la [[C - Complexité d'un modèle (capacité)|complexité]] du modèle :

- Degré trop faible (ex: 2 sur des données complexes) → [[C - Sous-apprentissage]]
- Degré trop élevé (ex: 14, 20) → le modèle oscille pour coller à chaque point d'entraînement → [[C - Surapprentissage]] (erreur d'entraînement très faible, erreur de test élevée)

## Liens connexes

- [[A - Régression Linéaire]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Surapprentissage]] / [[C - Sous-apprentissage]]