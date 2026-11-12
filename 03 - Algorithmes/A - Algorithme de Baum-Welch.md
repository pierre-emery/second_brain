---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Estimation par **maximum de vraisemblance** des paramètres d'un [[M - Modèle de Markov Caché (HMM)|HMM]] à partir de séquences observées seulement. Comme les états $z$ sont latents, on utilise l'[[A - Algorithme EM (espérance-maximisation)|algorithme EM]] : l'étape E est la [[A - Récursion alpha-bêta (avant-arrière)|récursion alpha-bêta]], l'étape M donne des estimateurs en forme fermée à partir de **comptes souples**.
$$\hat\theta^{(s+1)}=\arg\max_\theta\ \mathbb E_{q_{s+1}}\big[\log p(x,z\mid\theta)\big],\qquad q_{s+1}=p(z\mid x,\theta^{(s)})$$

## Intuition

Si on observait les états, l'estimation serait triviale : compter les transitions $m\to l$, les états initiaux, et ajuster les émissions sur les points de chaque état. On ne les observe pas, donc on remplace les comptes durs par des **comptes souples** (*soft counts*) : les probabilités a posteriori des états et des transitions, calculées par lissage avec les paramètres courants. On itère : lissage (E), recomptage (M).

## Formalisme / Dérivation

**Paramètres** $\theta=\{\eta,A,\pi\}$ :
$$p(x_t\mid z_t=k)=f(x_t\mid\eta_k),\qquad p(z_{t+1}=i\mid z_t=j)=A_{ij},\qquad p(z_1=i)=\pi_i.$$
Données : $N$ séquences $x^{(i)}=x^{(i)}_{1:T_i}$. Encodage one-hot : $z^{(i)}_{t,k}=1$ ssi $z^{(i)}_t=k$.

**Log-vraisemblance complète.**
$$\log p(x,z\mid\theta)=\sum_{i=1}^N\Big[\log p(z_1^{(i)})+\sum_{t=1}^{T_i}\log p(\bar x_t^{(i)}\mid z_t^{(i)})+\sum_{t=2}^{T_i}\log p(z_t^{(i)}\mid z_{t-1}^{(i)})\Big]$$
Terme à terme, en one-hot :
1. $\log p(z_1^{(i)})=\sum_kz^{(i)}_{1,k}\log\pi_k$
2. $\log p(\bar x_t^{(i)}\mid z_t^{(i)})=\sum_kz^{(i)}_{t,k}\log f(\bar x^{(i)}_t\mid\eta_k)$
3. $\log p(z_t^{(i)}\mid z_{t-1}^{(i)})=\sum_{l,m}z^{(i)}_{t,l}\,z^{(i)}_{t-1,m}\log A_{l,m}$

**Étape E** : l'espérance est linéaire, il suffit de calculer
$$\tau^{(i)}_{t,k}\triangleq\mathbb E_{q_{s+1}}\big[z^{(i)}_{t,k}\big]=p\big(z^{(i)}_t=k\mid\bar x^{(i)}_{1:T_i},\theta^{(s)}\big)\quad(\text{lissage}),$$
$$\tau^{(i)}_{t,l,m}\triangleq q_{s+1}\big(z^{(i)}_{t,l}=1,z^{(i)}_{t-1,m}=1\big)=p\big(z^{(i)}_t=l,z^{(i)}_{t-1}=m\mid\bar x^{(i)}_{1:T_i},\theta^{(s)}\big)\quad(\text{marginale d'arête}).$$
Tous deux sortent de la récursion alpha-bêta.

**Étape M** (maximiser sous contraintes de normalisation, comme le MLE multinoulli) :
$$\hat\pi_k^{(s+1)}=\frac{\sum_{i=1}^N\tau^{(i)}_{1,k}}{\sum_l\sum_{i=1}^N\tau^{(i)}_{1,l}}=\frac1N\sum_{i=1}^N\tau^{(i)}_{1,k},\qquad\hat A^{(s+1)}_{l,m}=\frac{\sum_{i=1}^N\sum_{t=2}^{T_i}\tau^{(i)}_{t,l,m}}{\sum_u\sum_{i=1}^N\sum_{t=2}^{T_i}\tau^{(i)}_{t,u,m}}.$$
$\hat\eta_k$ dépend du modèle d'émission : MLE pondéré par les comptes souples, comme pour un [[M - Mélange de gaussiennes (GMM)|mélange de gaussiennes]] ([[E - Algorithme EM pour un mélange de gaussiennes]]). Pour des émissions gaussiennes, moyenne empirique pondérée : $\hat\mu_k=\frac{\sum_i\sum_t\tau^{(i)}_{t,k}\bar x^{(i)}_t}{\sum_i\sum_t\tau^{(i)}_{t,k}}$ *(formule explicite ajoutée, cas standard)*.

## Algorithme (étapes)

1. Initialiser $\theta^{(0)}=\{\eta,A,\pi\}$.
2. **E** : pour chaque séquence, lancer la récursion alpha-bêta avec $\theta^{(s)}$ → $\tau_{t,k}$ (nœuds) et $\tau_{t,l,m}$ (arêtes).
3. **M** : mettre à jour $\pi$, $A$ (comptes souples normalisés) et $\eta$ (MLE pondéré).
4. Répéter jusqu'à convergence de la log-vraisemblance $\sum_i\log p(\bar x^{(i)})$ (donnée gratuitement par $\prod_tc_t$).

## Complexité

Par itération : $O\big(\sum_iT_i\,k^2\big)$ (coût de la récursion alpha-bêta).

## Avantages / Limites

**Avantages** : mises à jour en forme fermée ; la vraisemblance ne décroît jamais (propriété d'EM).

**Limites** : maximum local seulement → sensible à l'initialisation ; nombre d'états $k$ à choisir.

## IFT6269 — remarques

Baum-Welch = forward-backward (récursion α-β / somme-produit) + EM. Pour décoder la séquence d'états la plus probable une fois $\theta$ appris, on utilise l'[[A - Algorithme de Viterbi]] (max-produit).

## Flashcards
#flashcards/IFT6269/15-hmm

Qu'est-ce que l'algorithme de Baum-Welch ?::EM pour un HMM : étape E = récursion alpha-bêta (lissage), étape M = comptes souples normalisés.

Que sont les comptes souples $\tau_{t,k}$ et $\tau_{t,l,m}$ ?::$\tau_{t,k}=p(z_t=k\mid\bar x,\theta^{(s)})$ (lissage) et $\tau_{t,l,m}=p(z_t=l,z_{t-1}=m\mid\bar x,\theta^{(s)})$ (marginale d'arête).

Mise à jour de la matrice de transition dans Baum-Welch ?::$\hat A_{l,m}=\sum_i\sum_{t\ge2}\tau_{t,l,m}/\sum_u\sum_i\sum_{t\ge2}\tau_{t,u,m}$ : transitions souples $m\to l$ normalisées par colonne.

Pourquoi l'étape E se réduit-elle au calcul de marginales de nœuds et d'arêtes ?
?
La log-vraisemblance complète est linéaire en $z_{t,k}$ et en $z_{t,l}z_{t-1,m}$ ; son espérance ne fait donc intervenir que $\mathbb E[z_{t,k}]$ et $\mathbb E[z_{t,l}z_{t-1,m}]$, soit les marginales de lissage des nœuds et des arêtes.

Baum-Welch trouve-t-il le MLE global ?::Non, seulement un maximum local (comme tout EM) : le résultat dépend de l'initialisation.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Modèle de Markov Caché (HMM)]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Variable latente]]
- [[D - Multinomiale (et Multinoulli)]]
- [[A - Algorithme de Viterbi]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[M - Mélange de gaussiennes (GMM)]]
