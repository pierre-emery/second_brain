---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Les trois tâches d'inférence marginale classiques dans un [[M - Modèle de Markov Caché (HMM)|HMM]] : estimer l'état caché $z_t$ à partir d'observations passées, présentes ou futures.

| Tâche | Quantité | Question |
|---|---|---|
| **Prédiction** | $p(z_t\mid x_{1:t-1})$ | Où va-t-on ensuite ? |
| **Filtrage** | $p(z_t\mid x_{1:t})$ | Où est-on maintenant ? |
| **Lissage** (*smoothing*) | $p(z_t\mid x_{1:T}),\ t<T$ | Où était-on dans le passé ? |

La tâche générale est $p(z_{1:T}\mid x_{1:T})$ ; son mode (la séquence la plus probable) s'obtient par l'[[A - Algorithme de Viterbi]].

## Intuition

- **Filtrage** : l'observation $x_t$ est une version **bruitée** du « signal » $z_t$ ; on « filtre » le bruit en combinant toutes les observations reçues jusqu'ici. C'est une estimation **en ligne**.
- **Lissage** : on attend d'avoir toute la séquence et on utilise aussi le futur pour réviser l'estimation de $z_t$ (hors ligne, plus précis).
- **Prédiction** : on projette le filtrage d'un pas avec la matrice de transition.

## Formalisme

Toutes se calculent avec la [[A - Récursion alpha-bêta (avant-arrière)|récursion alpha-bêta]], grâce à l'indépendance conditionnelle « futur ⫫ passé | présent » :
- Filtrage : $p(z_t\mid\bar x_{1:t})=\tilde\alpha_t(z_t)=\alpha_t(z_t)/\sum_{z_t}\alpha_t(z_t)$.
- Lissage : $p(z_t\mid\bar x_{1:T})\propto\alpha_t(z_t)\,\beta_t(z_t)$.
- Prédiction *(relation ajoutée, découle des définitions)* : $p(z_t\mid\bar x_{1:t-1})=\sum_{z_{t-1}}p(z_t\mid z_{t-1})\,\tilde\alpha_{t-1}(z_{t-1})$, i.e. $A\tilde\alpha_{t-1}$.

## Exemple

Reconnaissance de la parole : le filtrage donne, en temps réel, la distribution du phonème courant ; le lissage, une fois la phrase terminée, corrige les phonèmes ambigus grâce aux sons qui suivent.

## Flashcards
#flashcards/IFT6269/15-hmm

Prédiction, filtrage, lissage : quelles quantités ?::Prédiction $p(z_t\mid x_{1:t-1})$ ; filtrage $p(z_t\mid x_{1:t})$ ; lissage $p(z_t\mid x_{1:T})$, $t<T$.

D'où vient le terme « filtrage » ?::$x_t$ est une version bruitée du signal caché $z_t$ ; on filtre le bruit en calculant $p(z_t\mid x_{1:t})$.

Comment obtient-on la prédiction à partir du filtrage ?::$p(z_t\mid\bar x_{1:t-1})=\sum_{z_{t-1}}p(z_t\mid z_{t-1})p(z_{t-1}\mid\bar x_{1:t-1})=A\tilde\alpha_{t-1}$.

Pourquoi le lissage est-il plus précis que le filtrage ?::Il utilise aussi les observations futures $\bar x_{t+1:T}$ (via $\beta_t$), qui apportent de l'information sur $z_t$.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle de Markov Caché (HMM)]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
- [[C - Inférence dans les modèles graphiques]]
