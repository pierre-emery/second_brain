---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**MADE** (Germain, Gregor, Murray, Larochelle, ICML 2015) : [[M - Autoencodeur|autoencodeur]] dont on **masque des connexions** pour que la sortie $\hat x_d$ ne dépende que de $x_{<d}$. Les sorties deviennent alors les conditionnelles $p(x_d\mid x_{<d})$ d'un [[C - Modèle génératif autorégressif|modèle autorégressif]].

$$h(x) = g\big(b + (W \odot M^W)x\big),\qquad \hat x = \mathrm{sigm}\big(c + (V \odot M^V)h(x)\big)$$

## Intuition
Comment obtenir un autoencodeur autorégressif ? Il faut qu'il n'existe **aucun chemin de calcul** entre la sortie $\hat x_d$ et les entrées $x_d,\dots,x_D$ (pour un ordre donné). Autrement dit, sur chacun de ces chemins, au moins une connexion de $W$ ou de $V$ doit être nulle. Le plus simple : multiplier chaque matrice de poids élément par élément par un **masque binaire** dont les zéros correspondent aux connexions à retirer. C'est une généralisation des travaux de Bengio & Bengio (2000).

## Formalisme
**Construction des masques** : on attribue à chaque unité cachée $k$ un entier $m(k) \in \{1,\dots,D-1\}$, le nombre maximal d'entrées auxquelles elle peut être connectée.
- couche cachée $l$ : $M^{W^l}_{k',k} = \mathbb 1\big[m^l(k') \ge m^{l-1}(k)\big]$ (pour la 1re couche, $m^0(d) = d$) ;
- sortie : $M^V_{d,k} = \mathbb 1\big[d > m^L(k)\big]$ (inégalité **stricte**, pour que $\hat x_d$ ne voie pas $x_d$).

On tire les $m^l(k)$ en partant de $\min_{k'} m^{l-1}(k')$ pour ne pas avoir d'unités inutiles.

**Perte** (entrées binaires) : $\hat x = \mathrm{decode}(\mathrm{encode}(x))$ et
$$\mathcal L(x) = -\sum_{i=1}^{|x|}\big(x_i\log\hat x_i + (1-x_i)\log(1-\hat x_i)\big),$$
qui est exactement la log-vraisemblance négative $-\log p(x)$, puisque $\hat x_i = p(x_i = 1\mid x_{<i})$.

**Entraînement agnostique à l'ordre** : on peut tirer un nouvel ordre (et de nouveaux masques) à chaque mise à jour, ce qui entraîne un ensemble de modèles.

## Exemple
Figure du cours, $D = 3$ avec l'ordre $(x_2, x_3, x_1)$ : les sorties donnent $p(x_2)$, $p(x_3\mid x_2)$ et $p(x_1\mid x_2, x_3)$. La sortie de $x_2$ (1re dans l'ordre) n'est connectée à rien : c'est un biais seul. Les unités cachées avec $m = 1$ ne voient que $x_2$.

## IFT6135 — propriétés
- L'entraînement a la même complexité qu'un autoencodeur ordinaire.
- Calculer $p(x)$ = **une seule passe avant**.
- L'**échantillonnage** demande $D$ passes avant.
- En pratique, il faut parfois de très grandes couches cachées, car toutes les unités ne peuvent pas contribuer à chaque conditionnelle.
- Échantillons sur MNIST binarisé : chiffres plausibles mais imparfaits.

## Flashcards
#flashcards/IFT6135/10-generatifs

Condition sur les chemins de calcul pour qu'un autoencodeur soit autorégressif ?::Aucun chemin entre la sortie $\hat x_d$ et les entrées $x_d,\dots,x_D$ : sur chaque chemin, au moins une connexion doit valoir 0.

Règles de masques de MADE
?
Chaque unité cachée reçoit $m(k)\in\{1,\dots,D-1\}$. Couches cachées : connexion si $m^l(k')\ge m^{l-1}(k)$. Sortie : connexion si $d > m^L(k)$ (stricte, pour que $\hat x_d$ ne voie pas $x_d$).

Coût de $p(x)$ vs coût d'un échantillon dans MADE ?::$p(x)$ : une passe avant. Échantillon : $D$ passes avant (une par dimension).

Pourquoi la perte d'entropie croisée de MADE est-elle une vraie log-vraisemblance ?::Les sorties sont $\hat x_i = p(x_i=1\mid x_{<i})$, donc $\sum_i$ BCE $= -\sum_i\log p(x_i\mid x_{<i}) = -\log p(x)$.

Qu'est-ce que l'entraînement agnostique à l'ordre ?::Tirer un ordre (et des masques) différent à chaque mise à jour : le même réseau apprend les conditionnelles de plusieurs ordres.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Probabilité]]
- [[C - Modèle génératif autorégressif]]
- [[M - Autoencodeur]]
- [[M - PixelCNN]]
- [[D - Bernoulli]]
