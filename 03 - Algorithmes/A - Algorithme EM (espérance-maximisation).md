---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Méthode itérative pour calculer un **maximum de vraisemblance** dans un modèle à [[C - Variable latente|variables latentes]] $z$ (*Expectation-Maximization*). C'est une [[C - Montée par blocs de coordonnées|montée par blocs de coordonnées]] sur l'[[C - Borne inférieure de la log-vraisemblance (ELBO)|ELBO]] $\mathcal L(q,\theta)$, qui minore $\log p(x;\theta)$.
$$\textbf{E : }\ q_{t+1}(z)=p(z\mid x;\theta_t)\qquad\textbf{M : }\ \theta_{t+1}=\arg\max_\theta\ \mathbb E_{q_{t+1}(z)}\big[\log p(x,z;\theta)\big]$$

## Intuition

Si les latentes étaient observées, le MLE serait facile (problème « complet », souvent concave, en forme fermée). EM alterne :
- **E** : **compléter** les données manquantes par des « valeurs souples » (la postérieure de $z$ sachant $x$ et les paramètres courants) ;
- **M** : résoudre le MLE **du modèle complètement observé**, pondéré par ces valeurs souples.

Analogies du cours :
- **[[M - Analyse Discriminante Linéaire (LDA)|LDA de Fisher]]** : on observait $x$ (gaussien) **et** l'étiquette $y$ ; le MLE était un problème convexe. EM fait la même chose, en remplaçant les $y$ manquants par leurs valeurs souples.
- **[[A - K-Means]]** : une étape E « dure » (assignations $z$), puis une étape M (recalcul des centres $\mu$).

## Formalisme / Dérivation

**Problème.** Avec $n$ données i.i.d. :
$$\log p(x_{1:n};\theta)=\sum_{i=1}^n\log p(x_i;\theta)=\sum_{i=1}^n\log\Big(\sum_{z_i}p(x_i,z_i;\theta)\Big).$$
La somme **dans** le log rend l'objectif multimodal et en général non concave. Deux options : montée de gradient sur un objectif non concave, ou EM.

**Borne.** Par [[T - Inégalité de Jensen|Jensen]], pour tout $q$ : $\log p(x;\theta)\ge\mathcal L(q,\theta)=\mathbb E_q[\log p(x,z;\theta)]+H(q)$.

**Étape E** : $q_{t+1}=\arg\max_q\mathcal L(q,\theta_t)$. L'égalité dans Jensen ($\log$ strictement concave) impose $p(x,z)/q(z)$ constant, donc $q\propto p(x,z)$ :
$$q_{t+1}(z)=p(z\mid x;\theta_t),\qquad\mathcal L(q_{t+1},\theta_t)=\log p(x;\theta_t)\ge\mathcal L(q,\theta_t)\ \ \forall q .$$
La borne devient **serrée** au point courant.

**Étape M** : $\theta_{t+1}=\arg\max_\theta\mathcal L(q_{t+1},\theta)=\arg\max_\theta\mathbb E_{q_{t+1}}[\log p(x,z;\theta)]$ (l'entropie $H(q)$ ne dépend pas de $\theta$). C'est un MLE **à information complète**. Quand $z$ est binaire (ou one-hot), on remplace souvent $z$ par $\mathbb E_q[z]$ dans la log-vraisemblance complète : ce sont les **valeurs souples**.

## Propriétés

**a) La log-vraisemblance ne décroît jamais.**
$$\log p(x;\theta_{t+1})\ \ge\ \mathcal L(q_{t+1},\theta_{t+1})\ \ge\ \mathcal L(q_{t+1},\theta_t)\ =\ \log p(x;\theta_t).$$
(1) borne valable pour tout $q$ ; (2) définition de $\theta_{t+1}$ ; (3) borne serrée après l'étape E.

**b) Convergence** vers un **point stationnaire** de $\log p(x;\theta)$ ($\nabla_\theta\log p(x;\theta)=0$), pas forcément le maximum global.

**c) Écart = KL** : $\log p(x;\theta)-\mathcal L(q,\theta)=D_{KL}(q(\cdot)\,\|\,p(\cdot\mid x;\theta))$. L'étape E annule cet écart ; l'**EM variationnel** restreint $q$ à une famille simple $\mathcal Q$ (étape E approximative).

## Algorithme (étapes)

1. Initialiser $\theta_0$ (plusieurs redémarrages aléatoires ; pour un GMM, [[A - K-Means++]] pour les moyennes).
2. **E** : calculer $q_{t+1}(z)=p(z\mid x;\theta_t)$ — en pratique, seulement les marginales nécessaires (ex. $\tau_{ij}$ pour un GMM, nœuds et arêtes pour un HMM).
3. **M** : $\theta_{t+1}=\arg\max_\theta\mathbb E_{q_{t+1}}[\log p(x,z;\theta)]$.
4. Répéter jusqu'à stabilisation de $\log p(x;\theta_t)$.

## Exemples

- [[M - Mélange de gaussiennes (GMM)]] → [[E - Algorithme EM pour un mélange de gaussiennes]].
- [[M - Modèle de Markov Caché (HMM)|HMM]] → [[A - Algorithme de Baum-Welch]] (étape E = récursion alpha-bêta).
- DGM avec variables latentes (voir [[C - Estimation des paramètres dans les modèles graphiques]]).

## Avantages / Limites

**Avantages** : monotone (pas de pas à régler) ; étape M souvent en forme fermée ; interprétation naturelle (données manquantes).

**Limites** : optimum local seulement → l'initialisation est cruciale ; convergence parfois lente ; l'étape E exige la postérieure exacte (sinon EM variationnel).

## Flashcards
#flashcards/IFT6269/10-non-supervise

Étapes E et M de l'EM ?::E : $q_{t+1}(z)=p(z\mid x;\theta_t)$. M : $\theta_{t+1}=\arg\max_\theta\mathbb E_{q_{t+1}}[\log p(x,z;\theta)]$.

Pourquoi l'étape E choisit-elle $q=p(z\mid x;\theta_t)$ ?::C'est le $q$ qui maximise l'ELBO : il rend Jensen serré ($p(x,z)/q(z)$ constant), d'où $\mathcal L(q_{t+1},\theta_t)=\log p(x;\theta_t)$.

Prouve que l'EM ne fait jamais baisser la log-vraisemblance.
?
$\log p(x;\theta_{t+1})\ge\mathcal L(q_{t+1},\theta_{t+1})$ (borne) $\ge\mathcal L(q_{t+1},\theta_t)$ (définition de l'étape M) $=\log p(x;\theta_t)$ (borne serrée après l'étape E).

Vers quoi l'EM converge-t-il ?::Vers un point stationnaire de $\log p(x;\theta)$, souvent un maximum local : il faut plusieurs initialisations.

Pourquoi l'entropie $H(q)$ disparaît-elle de l'étape M ?::Elle ne dépend pas de $\theta$ : maximiser $\mathcal L(q_{t+1},\theta)$ revient à maximiser la log-vraisemblance complète espérée.

En quoi K-Means est-il une version « dure » de l'EM ?::Son étape E assigne chaque point à un seul groupe (au lieu d'une postérieure souple), et son étape M recalcule les centres.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[C - Borne inférieure de la log-vraisemblance (ELBO)]]
- [[T - Inégalité de Jensen]]
- [[C - Montée par blocs de coordonnées]]
- [[C - Variable latente]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[M - Mélange de gaussiennes (GMM)]]
- [[A - Algorithme de Baum-Welch]]
- [[A - K-Means]]
