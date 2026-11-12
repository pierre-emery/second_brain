---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Version de l'[[A - Algorithme somme-produit (propagation de croyances)|algorithme somme-produit]] où la somme est remplacée par un **max** : au lieu des marginales, on calcule la **valeur maximale** de la distribution, $\max_x p(x)$, et (avec des pointeurs) son **arg max**, la configuration la plus probable.
$$m_{i\to j}(x_j)=\max_{x_i}\Big(\psi_{i,j}(x_i,x_j)\,\psi_i(x_i)\prod_{k\in N(i)\setminus\{j\}}m_{k\to i}(x_i)\Big)$$

## Intuition

SPA ne repose que sur la **distributivité** de $\times$ sur $+$. N'importe quelle paire d'opérations distributives donne un algorithme du même type. Avec $(\max,\times)$ : $\max(a\cdot b,a\cdot c)=a\cdot\max(b,c)$ pour $a\ge0$, donc on peut « pousser » le max à l'intérieur du produit comme on poussait la somme.
> Somme-produit → **marginales** ; max-produit → **arg max** (décodage).

## Formalisme / Dérivation

**Semi-anneaux.** SPA fonctionne sur tout **semi-anneau** $(R,\oplus,\otimes)$ ($\otimes$ distributif sur $\oplus$, pas besoin d'inverses pour $\oplus$) :

| Semi-anneau | Distributivité | Algorithme |
|---|---|---|
| $(\mathbb R,+,\times)$ | $a(b+c)=ab+ac$ | somme-produit |
| $(\mathbb R_+,\max,\times)$ | $\max(ab,ac)=a\max(b,c)$ | **max-produit** |
| $(\mathbb R,\max,+)$ | $\max(a+b,a+c)=a+\max(b,c)$ | max-somme (max-produit en log) |

**Astuce de distributivité, version max :**
$$\max_{x_{1:n}}\prod_i f_i(x_i)=\prod_i\max_{x_i}f_i(x_i).$$

**Valeur maximale.** Sur un arbre enraciné en 1 (ex. figure 16.7 des notes) : $\max_{x_{1:5}}\frac1Z\prod_C\psi_C(x_C)=\frac1Z\max_{x_1}m_{2\to1}(x_1)$ (en incluant $\psi_1$ et tous les messages entrants de 1).

**Arg max.** En calculant chaque $m_{i\to j}(x_j)$, on **stocke l'argument du max** $x_i^*(x_j)$ pour chaque valeur de $x_j$. Après la passe vers la racine, on prend l'arg max à la racine, puis on **remonte les pointeurs** : c'est l'[[A - Algorithme de Viterbi]].

## Complexité

Identique à SPA : $O(|E|\,k^2)$ sur un arbre, plus $O(|E|\,k)$ de mémoire pour les pointeurs d'arg max.

## Avantages / Limites

**Avantages** : décodage exact (configuration MAP) sur les arbres, même coût que SPA.

**Limites** : exact seulement sur les arbres (ou via un arbre de jonction) ; en pratique, on travaille en log, avec $(\max,+)$, pour éviter le sous-dépassement.

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Quelle propriété algébrique permet de passer de somme-produit à max-produit ?::La distributivité de $\times$ sur $\max$ : $\max(ab,ac)=a\max(b,c)$ pour $a\ge0$. SPA marche sur n'importe quel semi-anneau.

Somme-produit vs max-produit : que calcule chacun ?::Somme-produit : les marginales (et $Z$). Max-produit : $\max_xp(x)$ et, avec des pointeurs, l'arg max (configuration la plus probable).

Message de max-produit ?::$m_{i\to j}(x_j)=\max_{x_i}\psi_{i,j}(x_i,x_j)\psi_i(x_i)\prod_{k\in N(i)\setminus\{j\}}m_{k\to i}(x_i)$.

Pourquoi utilise-t-on souvent le semi-anneau $(\max,+)$ en pratique ?::C'est max-produit en log : on additionne des log-potentiels au lieu de multiplier des probabilités, ce qui évite le sous-dépassement numérique.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[A - Algorithme de Viterbi]]
- [[A - Élimination de variables]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
