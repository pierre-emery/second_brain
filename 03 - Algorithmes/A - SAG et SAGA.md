---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

Méthodes de gradient incrémental **à variance réduite** pour minimiser une somme finie $f(w)=\frac1n\sum_{i=1}^n f_i(w)$ (ex. régression logistique sur un grand jeu de données). Idée : réduire la variance de [[A - Descente de Gradient Stochastique (SGD)|SGD]] grâce à de la **mémoire** : on garde le dernier gradient calculé pour chaque exemple.

On obtient le « meilleur des deux mondes » : coût par itération de SGD ($O(d)$, indépendant de $n$) **et** convergence linéaire comme la descente de gradient plein lot (avec un **grand pas constant**).

| Méthode | Coût / itération | Taux de convergence |
|---|---|---|
| Gradient plein lot (FG, déterministe) | $O(n)$ | linéaire $O(\rho^t)$ |
| SGD (stochastique) | $O(1)$ | sous-linéaire $O(1/t)$ |
| SAG / SAGA (hybride) | $O(1)$ | linéaire $O(\rho^k)$ |

## Algorithme (étapes)

**SAG** (*Stochastic Average Gradient*). Mémoire $v_1,\dots,v_n$ (dernier gradient vu pour chaque $f_i$).
1. Tirer $i_t$ uniformément ; mettre à jour **une seule** mémoire : $v_{i_t}\leftarrow\nabla f_{i_t}(w_t)$ (les autres $v_j$ restent inchangés).
2. $w_{t+1}=w_t-\gamma\,\frac1n\sum_{i=1}^n v_i$.

Défaut : en espérance sur $i_t$, la direction n'est **pas** égale à $\nabla f(w_t)$ (**biaisée**) → preuve de convergence de dizaines de pages avec des constantes trouvées numériquement.

**SAGA** : petite modification pour rendre la direction **non biaisée** :
$$w_{t+1}=w_t-\gamma\Big(\nabla f_{i_t}(w_t)\ \underbrace{-\,v_{i_t}+\frac1n\sum_{i=1}^n v_i}_{\text{correction réductrice de variance}}\Big),\quad\text{puis } v_{i_t}\leftarrow\nabla f_{i_t}(w_t).$$
La correction est d'espérance nulle sur $i_t$ ($\mathbb E[v_{i_t}]=\frac1n\sum_i v_i$) → direction non biaisée, preuve de convergence de quelques lignes.

## Complexité

- Par itération : $O(d)$ (on maintient la moyenne $\frac1n\sum_i v_i$ incrémentalement).
- Mémoire : $O(nd)$ en général ; pour les modèles linéaires (gradient $=\text{scalaire}\times x_i$), $O(n)$ suffit.

## Hyperparamètres

Pas $\gamma$ (constant, grand, typiquement $\propto 1/L$).

## Avantages / Limites

**Avantages** : convergence linéaire avec des itérations bon marché ; pas constant ; SAGA est l'optimiseur par défaut de la régression logistique dans **scikit-learn** (`solver="saga"`).

**Limites** : coût mémoire des $v_i$ ; conçu pour des sommes finies (pas un flux infini de données).

## Remarques

- SAG : article *Minimizing Finite Sums with the Stochastic Average Gradient* (Schmidt, Le Roux, Bach), prix Lagrange en programmation mathématique.
- SAGA : Defazio, Bach, Lacoste-Julien, NIPS 2014.
- Approfondi dans IFT6132 (Advanced Structured Prediction and Optimization).

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Idée centrale de SAG/SAGA ?::Réduire la variance de SGD avec de la mémoire : garder le dernier gradient $v_i$ de chaque exemple et utiliser leur moyenne.

Mise à jour SAG ?::Mettre à jour une seule mémoire $v_{i_t}=\nabla f_{i_t}(w_t)$, puis $w_{t+1}=w_t-\gamma\frac1n\sum_iv_i$.

Mise à jour SAGA ?::$w_{t+1}=w_t-\gamma\big(\nabla f_{i_t}(w_t)-v_{i_t}+\frac1n\sum_iv_i\big)$.

Différence clé SAG vs SAGA ?::La direction de SAG est biaisée (preuve très complexe) ; celle de SAGA est non biaisée (correction d'espérance nulle, preuve courte).

Coût par itération et taux : plein lot vs SGD vs SAGA ?::Plein lot : $O(n)$, linéaire. SGD : $O(1)$, $O(1/t)$. SAGA : $O(1)$, linéaire.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[M - Régression Logistique (Binaire)]]
