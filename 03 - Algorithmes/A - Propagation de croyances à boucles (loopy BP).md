---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Application de l'[[A - Algorithme somme-produit (propagation de croyances)|algorithme somme-produit]] en mode **parallèle** à un graphe **avec cycles** (*loopy* = avec boucles). C'est une méthode d'**inférence approximative** : exacte sur un arbre, sans garantie sur un graphe quelconque.
$$m^{\text{new}}_{i\to j}(x_j)=\big(m^{\text{old}}_{i\to j}(x_j)\big)^{\alpha}\Big(\sum_{x_i}\psi_i(x_i)\psi_{i,j}(x_i,x_j)\prod_{k\in N(i)\setminus\{j\}}m^{\text{old}}_{k\to i}(x_i)\Big)^{1-\alpha}$$

## Intuition

Sur un arbre, l'ordonnancement parallèle (*flooding*) converge vers les bons messages en $d$ étapes. Sur un graphe avec cycles, il n'y a plus de « feuilles » d'où partir, mais on peut quand même itérer les mêmes mises à jour locales en espérant atteindre un point fixe. L'information circule alors autour des cycles et peut être comptée plusieurs fois, d'où l'approximation.

## Algorithme (étapes)

1. Initialiser tous les messages $m_{i\to j}(x_j)$ et $m_{j\to i}(x_i)$, pour chaque $\{i,j\}\in E$, à la distribution uniforme.
2. À chaque étape, calculer en parallèle le nouveau message à partir des anciens, en faisant une **combinaison convexe dans le domaine log** entre l'ancien message et le nouveau calcul (formule ci-dessus), avec un pas $\alpha\in[0,1]$. Cette stabilisation s'appelle l'**amortissement** (*damping*).
3. Répéter jusqu'à convergence (approximative) des messages, puis lire les marginales comme dans SPA.

## Propriétés

- Sur un **arbre** : le point fixe donne les **marginales exactes**.
- Sur un graphe avec cycles : pas de convergence garantie en général, ni vers les bonnes marginales ; si le graphe n'est « pas trop bouclé », les approximations sont souvent raisonnables.
- Le damping ($\alpha>0$) réduit les oscillations des messages.

## Hyperparamètres

Pas d'amortissement $\alpha$ ; nombre d'itérations / critère d'arrêt ; initialisation des messages.

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Qu'est-ce que la propagation de croyances à boucles (loopy BP) ?::Les mises à jour parallèles de somme-produit appliquées telles quelles à un graphe avec cycles ; méthode d'inférence approximative.

Qu'est-ce que l'amortissement (damping) dans loopy BP ?::Prendre une combinaison convexe, dans le domaine log, entre l'ancien message et le nouveau : $m^{\text{new}}=(m^{\text{old}})^\alpha(\text{calcul})^{1-\alpha}$, pour stabiliser les mises à jour.

Loopy BP donne-t-il les bonnes marginales ?
?
Sur un arbre oui (le point fixe est exact). Sur un graphe avec cycles, il peut ne pas converger, ou converger vers de mauvaises marginales ; il donne souvent de bonnes approximations si le graphe est peu bouclé.

Pourquoi l'approximation se dégrade-t-elle avec les cycles ?::Les messages circulent autour des cycles : une même information peut revenir à son point de départ et être comptée plusieurs fois.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[C - Inférence dans les modèles graphiques]]
- [[A - Algorithme de l'arbre de jonction]]
- [[M - Modèle d'Ising]]
