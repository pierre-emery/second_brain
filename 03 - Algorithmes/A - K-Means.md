---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Intuition

Algorithme de **regroupement** (*clustering*) non supervisé. On suppose $K$ groupes, chacun représenté par un **centre** $\mu_k$ ; les points d'un même groupe doivent être proches de leur centre. Partant de centres aléatoires, on alterne : (1) assigner chaque point au centre le plus proche, (2) recentrer chaque centre sur ses points. Chaque étape diminue une mesure de **distorsion**.

## Idée générale / Formalisation

Observations $x_i\in\mathbb R^p$, $i=1..n$ ; centres $\mu_k\in\mathbb R^p$, $k=1..K$ ; [[C - Variable latente|indicatrices latentes]] $z_{i,k}=1$ ssi $x_i$ appartient au groupe $k$ (0 sinon).

**Distorsion** :
$$J(\mu,z)=\sum_{i=1}^n\sum_{k=1}^K z_{i,k}\,\|x_i-\mu_k\|_2^2$$
K-Means = **minimisation alternée** (descente par blocs de coordonnées) de $J$.

## Algorithme (étapes)

1. Initialiser les centres $\mu$ (aléatoirement, ou [[A - K-Means++]]).
2. **Minimiser en $z$** : $z_{i,k}=1$ si $\|x_i-\mu_k\|^2=\min_s\|x_i-\mu_s\|^2$ (centre le plus proche) ⇔ placer $x_i$ dans la **cellule de Voronoï** de $\mu_k$.
3. **Minimiser en $\mu$** : $\nabla_{\mu_k}J=-2\sum_iz_{i,k}(x_i-\mu_k)=0\Rightarrow\mu_k=\dfrac{\sum_iz_{i,k}x_i}{\sum_iz_{i,k}}$ (moyenne des points du groupe).
4. Revenir à 2 jusqu'à convergence.

## Complexité

- Par itération : $O(nKp)$. Très rapide, peu d'itérations.
- **Converge en un nombre fini d'itérations** (nombre fini d'assignations, $J$ décroît) vers un **minimum local** seulement. Trouver le meilleur regroupement est **NP-difficile** en général.

## Hyperparamètres

- **$K$** : heuristique de régularisation $J(\mu,z,K)=\sum_{i,j}z_{i,j}\|x_i-\mu_j\|^2+\lambda K$, avec $\lambda$ à régler. (Plus tard : modèles **non paramétriques**, ex. mélange par processus de Dirichlet, où l'on obtient $p(K\mid\text{données})$.)
- **Initialisation** : cruciale → redémarrages aléatoires multiples (garder la partition de distorsion minimale) ou [[A - K-Means++]].
- **Distance** : avec $L_2$, groupes **sphériques** ; le « bon » regroupement dépend du problème et donc de la distance choisie. Les limites du K-Means sont corrigées par le **[[M - Mélange de gaussiennes (GMM)|mélange de gaussiennes]]**.

## Avantages / Limites

**Avantages** : simple, très rapide, convergence finie garantie.

**Limites** : minimum local ; sensible à l'initialisation, à $K$ et à la distance ; groupes sphériques ; sans K-Means++, la solution peut être arbitrairement mauvaise par rapport à l'optimum.

## Lien avec l'EM

K-Means est une version **dure** de l'[[A - Algorithme EM (espérance-maximisation)|EM]] : son étape « E » assigne chaque point à **un** groupe (au lieu d'une postérieure souple), et son étape « M » recalcule les centres. C'est exactement la limite de l'EM pour un [[M - Mélange de gaussiennes (GMM)|GMM]] à covariances $\sigma^2I$ fixées quand $\sigma^2\to0$ (voir [[E - Algorithme EM pour un mélange de gaussiennes]]). Les deux sont des [[C - Montée par blocs de coordonnées|méthodes par blocs de coordonnées]] (descente sur la distorsion ici, montée sur l'ELBO pour EM).

## Flashcards

#flashcards/IFT6269/10-non-supervise

Distorsion minimisée par K-Means ?::$J(\mu,z)=\sum_i\sum_kz_{i,k}\|x_i-\mu_k\|^2$.

Les deux étapes alternées de K-Means ?::(1) en $z$ : assigner chaque point au centre le plus proche (cellules de Voronoï) ; (2) en $\mu$ : chaque centre devient la moyenne de ses points.

K-Means converge-t-il ? Vers quoi ?::Oui, en un nombre fini d'itérations, mais seulement vers un minimum local (problème global NP-difficile).

Pourquoi les groupes de K-Means sont-ils sphériques ?::À cause de la distance $L_2$ ; un mélange de gaussiennes corrige ce problème.

Heuristique pour choisir $K$ ?::Pénaliser la distorsion : $J+\lambda K$, avec $\lambda$ à régler.

Comment K-Means s'obtient-il comme cas limite de l'EM pour un GMM ?::Avec $\Sigma_j=\sigma^2I$ fixé et $\sigma^2\to0$, les responsabilités deviennent des assignations dures au centre le plus proche, et l'étape M recalcule des moyennes.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[A - K-Means++]]
- [[C - Variable latente]]
- [[A - Regroupement hiérarchique]]
- [[A - DBScan]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[M - Mélange de gaussiennes (GMM)]]
- [[C - Montée par blocs de coordonnées]]
