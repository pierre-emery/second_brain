---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-11-12
---
Terme ajouté à la fonction objective pour pénaliser certaines valeurs des paramètres $\theta$, en général pour limiter la complexité du modèle et réduire le surapprentissage :

$$\arg\min_\theta\ \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) + \lambda\,\Omega(\theta)$$
$\Omega(\theta)$ est le régularisateur, $\lambda$ contrôle son importance. Techniquement, l'ajout de ce terme fait de la minimisation du risque empirique une minimisation du risque **structurel**.
## Formes courantes
- [[C - Régularisation L2 (Weight Decay)]] pénalise $||\mathbf{W}||_F^2$, a priori gaussien
- [[C - Régularisation L1]] pénalise $|\mathbf{W}|$, a priori Laplacien, induit la parcimonie

Dans les deux cas, la régularisation s'applique uniquement aux **poids**, jamais aux biais.
## Exemple le plus classique

Voir [[C - Régularisation L2 (Weight Decay)|décroissance des poids]] pour l'exemple concret le plus utilisé, avec $\Omega(\mathbf{w})=\mathbf{w}^\top\mathbf{w}$.
## Justification théorique

Le [[C - Théorème du No Free Lunch|théorème du No Free Lunch]] implique qu'aucun algorithme n'est universellement meilleur qu'un autre. On doit donc construire des préférences dans l'algorithme, alignées avec le problème à résoudre. La régularisation est une façon générale d'exprimer une préférence pour certaines solutions de l'espace d'hypothèses plutôt que d'autres, plus générale que le simple fait d'inclure ou d'exclure des fonctions de cet espace (exclure une fonction équivaut à exprimer une préférence infiniment forte contre elle).
## Interprétation bayésienne

De nombreuses stratégies de régularisation peuvent être interprétées comme une approximation [[C - Estimation Maximum a Posteriori (MAP)|MAP]] de l'inférence bayésienne, lorsque le terme de régularisation correspond au logarithme d'un prior.

## IFT6135 — Chap. 07 : méthodes de régularisation
**Définition du cours** : imposer des contraintes supplémentaires à un modèle pour améliorer sa performance sur l'ensemble de **test** (pas d'entraînement), soit en encodant une connaissance a priori, soit en forçant le modèle à considérer d'autres hypothèses qui expliquent aussi les données d'entraînement.

**Pourquoi** : un régularisateur échange plus de **biais** contre moins de **variance** ([[C - Compromis Biais-Variance]]). Un bon régularisateur fait un échange *profitable* : il réduit beaucoup la variance sans trop augmenter le biais.
- Variance du modèle entraîné : varie-t-il beaucoup si l'ensemble d'entraînement change ?
- Biais : le modèle moyen est-il proche de la vraie solution ?
- L'erreur de généralisation (MSE) se décompose en biais² + variance ([[T - Décomposition biais-variance]]).

Notation du cours (risque structurel) : $\tilde J(\theta; X, y) = J(\theta; X, y) + \alpha\,\Omega(\theta)$, avec $\theta = [w, b]$ et typiquement $\Omega(\theta) = \tfrac12\|w\|_2^2$ ou $\|w\|_1$.

**Panorama des méthodes vues** :
- pénalités sur les paramètres : [[C - Régularisation L2 (Weight Decay)|L2]], [[C - Régularisation L1|L1]] ;
- [[C - Early stopping]] (équivalent à L2 dans le cas quadratique) ;
- [[C - Dropout]] (moyenne d'ensemble implicite) ;
- [[C - Augmentation de Données (Data Augmentation)|augmentation de données]] ;
- tâches auxiliaires : [[A - Préentraînement glouton couche par couche|préentraînement non supervisé]], [[C - Apprentissage multitâche (Multi-task Learning)|apprentissage multitâche]], auto-supervision, transfert.

**Limites de la vision classique** : les réseaux profonds peuvent mémoriser des étiquettes aléatoires, et le risque de test peut redescendre au-delà du seuil d'interpolation : voir [[C - Double descente]].

## Flashcards
#flashcards/IFT6135/07-regularisation

Définition de la régularisation selon le cours ?::Contraintes supplémentaires imposées au modèle pour améliorer la performance en test (pas en entraînement), en encodant un a priori ou en forçant à considérer d'autres hypothèses expliquant les données.

Qu'est-ce qu'un régularisateur « efficace » en termes de biais et de variance ?::Il fait un échange profitable : il réduit beaucoup la variance sans trop augmenter le biais.

Citer quatre familles de méthodes de régularisation vues au chap. 07
?
Pénalités sur les paramètres (L2, L1) ; early stopping ; dropout (ensemble implicite) ; tâches auxiliaires (préentraînement non supervisé, multitâche, auto-supervision). Plus l'augmentation de données.

Pourquoi la régularisation s'applique-t-elle aux poids et pas aux biais ?::Les biais ne contrôlent pas l'interaction entre entrées et ont peu de paramètres ; les régulariser risque surtout le sous-apprentissage.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Risque Empirique]]
- [[C - Surapprentissage]]
- [[C - Théorème du No Free Lunch]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
- [[C - Régularisation L1]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Compromis Biais-Variance]]
- [[C - Early stopping]]
- [[C - Dropout]]
- [[C - Double descente]]
