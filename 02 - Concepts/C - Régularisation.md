---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-09
---
Terme ajouté à la fonction objective pour pénaliser certaines valeurs des paramètres $\theta$, en général pour limiter la complexité du modèle et réduire le surapprentissage :

$$\arg\min_\theta\ \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) + \lambda,\Omega(\theta)$$

$\Omega(\theta)$ est le régularisateur, $\lambda$ contrôle son importance. Techniquement, l'ajout de ce terme fait de la minimisation du risque empirique une minimisation du risque **structurel**.

## Exemple le plus classique

Voir [[C - Décroissance des poids (Weight Decay)|décroissance des poids]] pour l'exemple concret le plus utilisé, avec $\Omega(\mathbf{w})=\mathbf{w}^\top\mathbf{w}$.

## Justification théorique

Le [[C - Théorème du No Free Lunch|théorème du No Free Lunch]] implique qu'aucun algorithme n'est universellement meilleur qu'un autre. On doit donc construire des préférences dans l'algorithme, alignées avec le problème à résoudre. La régularisation est une façon générale d'exprimer une préférence pour certaines solutions de l'espace d'hypothèses plutôt que d'autres, plus générale que le simple fait d'inclure ou d'exclure des fonctions de cet espace (exclure une fonction équivaut à exprimer une préférence infiniment forte contre elle).

## Interprétation bayésienne

De nombreuses stratégies de régularisation peuvent être interprétées comme une approximation [[C - Estimation Maximum a Posteriori (MAP)|MAP]] de l'inférence bayésienne, lorsque le terme de régularisation correspond au logarithme d'un prior.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Risque Empirique]]
- [[C - Surapprentissage]]
- [[C - Décroissance des poids (Weight Decay)]]
- [[C - Théorème du No Free Lunch]]
- [[C - Estimation Maximum a Posteriori (MAP)]]