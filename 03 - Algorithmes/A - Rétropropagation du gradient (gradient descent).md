---
type: algorithme
cours:
  - IFT6135
statut: complet
maj: 2026-10-15
---
Procédure itérative pour minimiser une fonction (typiquement le risque empirique régularisé).

## Algorithme (descente de gradient, batch)

1. Initialiser $\theta$
2. Pour $N$ itérations :
    - $\Delta = -\frac{1}{T}\sum_t \nabla_\theta l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$
    - $\theta \leftarrow \theta + \alpha,\Delta$

$\alpha$ est le [[C - Taux d'apprentissage]]. La direction $-\nabla_\mathbf{x} f(\mathbf{x})$ correspond à la direction de plus forte diminution de $f$  (voir la dérivation ci-dessous pour la justification).

## Dérivation : pourquoi le gradient négatif ?

La **dérivée directionnelle** dans une direction unitaire $\mathbf{u}$ est la pente de $f$ le long de cette direction : la dérivée de $f(\mathbf{x}+\alpha\mathbf{u})$ par rapport à $\alpha$, évaluée à $\alpha=0$, ce qui vaut (par la règle de dérivation en chaîne) $\mathbf{u}^\top\nabla_\mathbf{x}f(\mathbf{x})$.

Pour trouver la direction de plus forte décroissance, on cherche :

$$\min_{\mathbf{u},,\mathbf{u}^\top\mathbf{u}=1} \mathbf{u}^\top\nabla_\mathbf{x}f(\mathbf{x}) = \min_{\mathbf{u}} ||\mathbf{u}||_2,||\nabla_\mathbf{x}f(\mathbf{x})||_2\cos\theta$$

où $\theta$ est l'angle entre $\mathbf{u}$ et le gradient. Comme $||\mathbf{u}||_2=1$, ceci se simplifie à $\min_\mathbf{u}\cos\theta$, minimisé quand $\mathbf{u}$ pointe dans la direction **opposée** au gradient. Le gradient pointe donc directement « vers le haut » (plus forte augmentation), et le gradient négatif pointe directement « vers le bas ».

## Choix du taux d'apprentissage

- Constante fixe et petite (approche la plus commune, utilisée dans l'algorithme ci-dessus).
- Résoudre analytiquement pour la taille de pas qui annule la dérivée directionnelle.
- **Recherche linéaire** (_line search_) : évaluer $f(\mathbf{x}-\epsilon\nabla_\mathbf{x}f(\mathbf{x}))$ pour plusieurs valeurs de $\epsilon$ et garder celle qui minimise le mieux $f$.

## Convergence

L'algorithme converge quand chaque élément du gradient est nul (ou très proche de zéro en pratique) c'est-à-dire à un [[C - Points Critiques et Optima (local, global, point-selle)|point critique]]. Dans certains cas simples, on peut éviter l'itération et résoudre directement $\nabla_\mathbf{x}f(\mathbf{x})=0$ pour $\mathbf{x}$ (voir [[C - Moindres Carrés Ordinaires (MCO)]]).

## Limite : mauvais usage de la courbure

La descente de gradient n'exploite pas l'information de courbure contenue dans la [[C - Matrice Hessienne|Hessienne]]. Sur une fonction dont la Hessienne a un [[C - Nombre de Conditionnement (matrice)|nombre de conditionnement]] élevé (ex. un « canyon » très allongé), l'algorithme perd du temps à osciller d'un mur du canyon à l'autre plutôt que d'avancer efficacement vers le minimum. La [[A - Méthode de Newton (optimisation)|méthode de Newton]] (2e ordre) corrige ce problème en utilisant la Hessienne.

## Généralisation à l'espace discret

Le concept général est de répéter de petits pas vers de meilleures configurations et il se généralise à l'espace discret sous le nom de **hill climbing** (montée de colline, pour une maximisation).

## Voir aussi

Voir [[A - Descente de Gradient Stochastique (SGD)]] pour la variante qui met à jour $\theta$ après chaque exemple plutôt qu'après avoir parcouru tout l'ensemble d'entraînement.
## Extension aux réseaux récurrents

Appliquée au graphe d'un RNN déroulé dans le temps, la rétropropagation devient la [[A - Rétropropagation à travers le temps (BPTT)|BPTT]].
## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Gradient]]
- [[C - Risque Empirique]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[A - Méthode de Newton (optimisation)]]
- [[C - Nombre de Conditionnement (matrice)]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[A - Rétropropagation à travers le temps (BPTT)]]
## Flashcards

#flashcards/IFT6135/02-entrainement

Mise à jour de la descente de gradient (batch) sur le risque empirique régularisé ?
?
$\Delta = -\frac{1}{T}\sum_t \nabla_\theta l(f(\mathbf{x}^{(t)}; \theta), y^{(t)}) - \lambda\nabla_\theta\Omega(\theta)$, puis $\theta \leftarrow \theta + \alpha\Delta$.

Pourquoi $-\nabla f$ est-elle la direction de plus forte descente ?::La dérivée directionnelle vaut $\mathbf{u}^\top\nabla f = \|\nabla f\|\cos\theta$ pour $\|\mathbf{u}\| = 1$ ; elle est minimale quand $\cos\theta = -1$, i.e. $\mathbf{u}$ opposé au gradient.

Quand la descente de gradient converge-t-elle ?::À un point critique, où le gradient est (presque) nul.

Pourquoi la descente de gradient est-elle lente quand la Hessienne est mal conditionnée ?::Elle ignore la courbure : dans un « canyon » allongé, elle oscille d'une paroi à l'autre au lieu d'avancer ; la méthode de Newton corrige cela.

Qu'est-ce que la recherche linéaire (line search) ?::Évaluer $f(\mathbf{x} - \epsilon\nabla f)$ pour plusieurs $\epsilon$ et garder le meilleur pas.

Comment s'appelle la rétropropagation appliquée à un RNN déroulé ?::La rétropropagation à travers le temps (BPTT).