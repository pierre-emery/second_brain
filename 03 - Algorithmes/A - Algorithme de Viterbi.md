---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Algorithme de **décodage** : il trouve la configuration la plus probable $\arg\max_x p(x)$ en lançant l'[[A - Algorithme max-produit|algorithme max-produit]] dans un sens tout en **stockant les arg max**, puis en **remontant les pointeurs** (*backtracking*). Dans un HMM, il donne la séquence d'états cachés la plus probable :
$$\hat z_{1:T}=\arg\max_{z_{1:T}}p(z_{1:T}\mid\bar x_{1:T}).$$

## Intuition

Le message de max-produit $m_{i\to j}(x_j)$ dit : « si $x_j$ valait telle valeur, voici le meilleur score atteignable dans le sous-arbre derrière $i$ ». En retenant, pour chaque valeur de $x_j$, **quel $x_i$** réalisait ce max, on peut reconstruire la configuration gagnante une fois qu'on connaît la meilleure valeur à la racine.

## Algorithme (étapes)

1. **Passe avant** : calculer les messages max-produit des feuilles vers la racine. Pour chaque message $m_{i\to j}(x_j)$, stocker le tableau de pointeurs $x_i^*(x_j)=\arg\max_{x_i}\big[\cdots\big]$.
2. **Racine** : $x_r^*=\arg\max_{x_r}\psi_r(x_r)\prod_{k\in N(r)}m_{k\to r}(x_r)$.
3. **Retour arrière** : descendre de la racine vers les feuilles en lisant $x_i^*=x_i^*(x_j^*)$ dans les tableaux de pointeurs.

**Structures de données** (fig. 16.8 des notes) : pour chaque arête, un tableau « message » indexé par les valeurs de $x_j$, et un tableau « arg max » de même taille contenant $\arg\max_{x_i}f(x_i,x_j)$.

## Complexité

Chaîne de longueur $T$ à $k$ états : $O(Tk^2)$ en temps et $O(Tk)$ en mémoire pour les pointeurs (contre $O(k^T)$ par énumération).

## Exemple : HMM

Chaîne $z_1\to\dots\to z_T$ avec observations $\bar x_t$ : passe avant
$$\delta_t(z_t)=p(\bar x_t\mid z_t)\max_{z_{t-1}}p(z_t\mid z_{t-1})\,\delta_{t-1}(z_{t-1}),\qquad \delta_1(z_1)=p(z_1)p(\bar x_1\mid z_1),$$
en stockant l'arg max sur $z_{t-1}$ ; puis $\hat z_T=\arg\max\delta_T$ et retour arrière. C'est la récursion $\alpha$ de la [[A - Récursion alpha-bêta (avant-arrière)|récursion alpha-bêta]] avec $\max$ à la place de $\sum$. *(La forme $\delta_t$ est la version standard ; les notes la présentent via max-produit général.)*

## Avantages / Limites

**Avantages** : décodage exact et linéaire en $T$.

**Limites** : donne **la** meilleure séquence jointe, qui peut différer de la suite des états marginalement les plus probables (arg max du lissage $p(z_t\mid\bar x_{1:T})$ pris un par un) ; on l'implémente en log pour éviter le sous-dépassement.

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Qu'est-ce que l'algorithme de Viterbi ?::Max-produit vers la racine en stockant les arg max, puis retour arrière le long des pointeurs pour obtenir $\arg\max_xp(x)$.

Pourquoi faut-il stocker des pointeurs dans Viterbi ?::Les messages ne donnent que la valeur maximale ; pour reconstruire la configuration, il faut savoir quel $x_i$ réalisait le max pour chaque valeur de $x_j$.

Récursion de Viterbi dans un HMM ?::$\delta_t(z_t)=p(\bar x_t\mid z_t)\max_{z_{t-1}}p(z_t\mid z_{t-1})\delta_{t-1}(z_{t-1})$, avec pointeurs sur l'arg max en $z_{t-1}$.

La séquence de Viterbi est-elle la suite des états marginalement les plus probables ?
?
Pas forcément. Viterbi maximise la probabilité **jointe** de toute la séquence ; prendre $\arg\max_{z_t}p(z_t\mid\bar x_{1:T})$ pour chaque $t$ séparément peut donner une autre séquence, voire une séquence de probabilité nulle.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Algorithme max-produit]]
- [[M - Modèle de Markov Caché (HMM)]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
