---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-11-12
---
La méthode du early stopping ou de l'arrêt prématuré permet de cesser l'entraînement lorsque le meilleur compromis est atteint entre la mémorisation et la compréhension des données.

**En pratique** : arrêter l'entraînement quand l'erreur sur l'ensemble de validation recommence à augmenter (avec une certaine marge/patience), même si l'erreur d'entraînement continue de diminuer. Le nombre d'époques devient ainsi un hyperparamètre choisi via l'ensemble de validation plutôt que fixé à l'avance.

## IFT6135 — Chap. 07 : méta-algorithme
Paramètres : $n$ = nombre de pas entre deux évaluations ; $p$ = **patience**, nombre d'évaluations consécutives sans amélioration avant d'abandonner ; $\theta_o$ = paramètres initiaux.

1. $\theta \leftarrow \theta_o$, $i \leftarrow 0$, $j \leftarrow 0$, $v \leftarrow \infty$, $\theta^* \leftarrow \theta$, $i^* \leftarrow i$
2. Tant que $j < p$ :
   - entraîner $n$ pas ; $i \leftarrow i + n$ ; $v' \leftarrow \text{ErreurValidation}(\theta)$
   - si $v' < v$ : $j \leftarrow 0$, $\theta^* \leftarrow \theta$, $i^* \leftarrow i$, $v \leftarrow v'$
   - sinon : $j \leftarrow j + 1$
3. Retourner $\theta^*$ et le meilleur nombre de pas $i^*$.

Méta-algorithme : il marche avec n'importe quel algorithme d'entraînement et n'importe quelle mesure d'erreur de validation.

### Réentraîner sur train + validation
Pour ne pas « gaspiller » l'ensemble de validation, deux stratégies (le cours les qualifie de **dangereuses**) :
1. Réentraîner depuis une nouvelle initialisation sur train + valid pendant le **même nombre de pas** $i^*$ que celui trouvé.
2. Continuer l'entraînement sur train + valid jusqu'à ce que la perte sur la validation retombe à la perte d'entraînement atteinte au moment de l'arrêt. **Pas de garantie d'arrêt.**

### Perte de substitution
L'early stopping aide quand on optimise une perte de substitution (log-vraisemblance) alors qu'on se soucie d'une autre mesure, comme la perte 0-1 (dérivée nulle presque partout, donc impossible à optimiser directement). La perte 0-1 est peu coûteuse à calculer : on s'en sert comme critère d'arrêt. Souvent, elle continue de s'améliorer longtemps après que la log-vraisemblance de validation a commencé à se dégrader.

### Pourquoi c'est un régularisateur
L'early stopping restreint l'optimisation à un petit volume de l'espace des paramètres autour de l'initialisation. Avec un modèle linéaire, une perte quadratique et une descente de gradient simple, il est **équivalent à une régularisation L2** : voir [[T - Équivalence early stopping et régularisation L2]].

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Surapprentissage]]
- [[C - Sous-apprentissage]]
- [[C - Sélection de modèle]]
- [[C - Régularisation]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[T - Équivalence early stopping et régularisation L2]]

## Flashcards

#flashcards/IFT6135/02-entrainement 

Principe de l'early stopping ?::Arrêter l'entraînement quand l'erreur de validation recommence à augmenter (avec une patience), même si l'erreur d'entraînement baisse encore.

Quel hyperparamètre l'early stopping règle-t-il implicitement ?::Le nombre d'époques, choisi via l'ensemble de validation.

#flashcards/IFT6135/07-regularisation

Rôle de la patience $p$ dans le méta-algorithme d'early stopping ?::Nombre d'évaluations consécutives sans amélioration de l'erreur de validation tolérées avant d'arrêter ; on retourne les meilleurs paramètres vus, pas les derniers.

Deux façons de réutiliser la validation après l'early stopping, et leur risque ?
?
(1) Réentraîner de zéro sur train+valid pendant le même nombre de pas $i^*$. (2) Continuer sur train+valid jusqu'à ce que la perte de validation atteigne la perte d'entraînement au moment de l'arrêt. Risque : le nombre de pas optimal change avec plus de données, et (2) peut ne jamais s'arrêter.

Pourquoi utiliser la perte 0-1 comme critère d'arrêt alors qu'on entraîne avec la log-vraisemblance ?::La 0-1 est la mesure qui nous intéresse mais elle n'est pas dérivable (gradient nul presque partout) ; elle est peu coûteuse à évaluer, et elle se dégrade souvent bien après la log-vraisemblance de validation.

Par quel mécanisme l'early stopping régularise-t-il ?::Il confine les paramètres à un voisinage de l'initialisation ; dans le cas quadratique, c'est équivalent à L2 avec $\alpha\approx 1/(\tau\eta)$.
