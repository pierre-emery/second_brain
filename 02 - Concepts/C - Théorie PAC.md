---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

**PAC** = *Probably Approximately Correct*. Alternative au [[C - Risque Fréquentiste|risque fréquentiste]], courante en théorie de l'apprentissage. Au lieu de regarder la perte **moyenne** sur les jeux de données, on regarde une **borne de queue** (*tail bound*) : une borne $B$ telle que la perte est plus petite que $B$ **avec grande probabilité**.

Pour une perte $L$, une règle $\delta$, une loi $P$ sur $D$ et un petit $\epsilon>0$, on cherche $B$ tel que :
$$\Pr\{L(P,\delta(D))\ \ge\ B\}\ \le\ \epsilon$$
On écrit parfois $B_\epsilon(P,\delta)$ pour rappeler que la borne dépend de $P$, $\delta$ et $\epsilon$.

## Intuition

$L(P,\delta(D))$ est une **variable aléatoire** (car $D$ l'est). On peut résumer sa densité de deux façons :

| Approche | Résume la loi de $L(P,\delta(D))$ par… |
|---|---|
| Risque fréquentiste | sa **moyenne** $R(P,\delta)$ |
| PAC | un **quantile de queue** $B_\epsilon(P,\delta)$ : masse $\le\epsilon$ au-delà |

« Probablement » (probabilité $\ge 1-\epsilon$) « approximativement correct » (perte $\le B$).

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Que cherche la théorie PAC ?::Une borne $B$ telle que $\Pr\{L(P,\delta(D))\ge B\}\le\epsilon$ : la perte est petite avec grande probabilité.

Risque fréquentiste vs approche PAC ?::Le risque résume la loi de la perte par sa moyenne ; PAC par une borne de queue (quantile à $1-\epsilon$).

Que signifient « probablement » et « approximativement correct » dans PAC ?::Probablement : avec probabilité au moins $1-\epsilon$ sur le jeu de données. Approximativement correct : la perte est au plus $B$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Fondements de la théorie de décision]]
- [[C - Risque Fréquentiste]]
