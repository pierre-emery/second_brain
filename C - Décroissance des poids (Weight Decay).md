---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Exemple concret et le plus classique de [[C - Régularisation|régularisation]] : on exprime une **préférence** pour des poids $\mathbf{w}$ de plus petite norme $L^2$, plutôt que d'interdire complètement certaines fonctions de l'espace d'hypothèses.

## Critère

Pour une [[A - Régression Linéaire|régression linéaire]], on minimise :

$$J(\mathbf{w}) = \text{MSE}_{\text{train}} + \lambda,\mathbf{w}^\top\mathbf{w}$$

où $\lambda \geq 0$ contrôle la force de la préférence pour des poids petits. Quand $\lambda=0$, aucune préférence n'est imposée ; plus $\lambda$ est grand, plus les poids sont forcés à être petits.

## Effet

Minimiser $J(\mathbf{w})$ crée un compromis entre bien ajuster les données d'entraînement et garder les poids petits. Le résultat : une pente plus faible, ou un poids réparti sur moins de caractéristiques ce qui aide à contrôler le [[C - Surapprentissage|surapprentissage]] (grand $\lambda$ → risque de [[C - Sous-apprentissage|sous-apprentissage]] si trop fort ; $\lambda\to0$ → risque de surapprentissage, en particulier avec un modèle à haute capacité comme un polynôme de haut degré).

## Généralisation

En général, on régularise un modèle $f(\mathbf{x};\theta)$ en ajoutant à la fonction de coût un terme **régularisateur** $\Omega(\theta)$. Pour la décroissance des poids, $\Omega(\mathbf{w})=\mathbf{w}^\top\mathbf{w}$, mais d'autres régularisateurs sont possibles.

## Interprétation bayésienne

La décroissance des poids correspond exactement à une [[C - Estimation Maximum a Posteriori (MAP)|estimation MAP]] avec un prior gaussien centré en zéro sur les poids voir cette note pour la dérivation.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Régularisation]]
- [[C - Théorème du No Free Lunch]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
- [[C - Surapprentissage]]
- [[C - Sous-apprentissage]]