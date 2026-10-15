---
type: concept
cours: IFT6135
statut: complet
maj: 2026-09-08
---
Sur un ordinateur, une infinité de nombres réels doit être représentée avec un nombre fini de bits ce qui introduit presque toujours une petite **erreur d'arrondi**. Cette erreur devient problématique quand elle s'accumule sur de nombreuses opérations, pouvant faire échouer en pratique des algorithmes qui fonctionnent en théorie.
## Underflow (soupassement)

Se produit quand un nombre proche de zéro est arrondi à zéro. Problématique car plusieurs fonctions se comportent très différemment selon que leur argument soit exactement zéro ou une petite valeur positive par exemple la division par zéro, ou $log⁡(0)=−\infty$ qui devient ensuite indéfini (`NaN`) dans d'autres calculs.

## Overflow (dépassement)

Se produit quand un nombre de grande magnitude est approximé par $\infty$ ou $−\infty$. Les opérations arithmétiques suivantes transforment généralement ces valeurs infinies en `NaN`.

## Exemple : stabiliser le softmax
​
$$\text{softmax}(x)_i=\frac{\exp(x_i)}{\sum_{j=1}^n\exp(x_j)}$$

Si tous les $x_i$​ sont égaux à une constante $c$ de grande magnitude :

- $c$ très négatif $\implies$ underflow de $\exp⁡(c)\implies$ dénominateur nul $\implies$ résultat indéfini.
- $c$ très positif $\implies$ overflow de $\exp⁡(c)\implies$ dénominateur nul $\implies$ résultat indéfini.

**Solution** : évaluer $\text{softmax}(\mathbf z)$ avec  $\mathbf z=\mathbf x−\max _i x_i$. Le résultat analytique est inchangé (soustraire une constante de l'entrée ne change pas la valeur du softmax), mais numériquement : le plus grand argument de $\exp$ devient $0$ (ce qui élimine l'overflow), et au moins un terme du dénominateur vaut 1 (ce qui élimine l'underflow qui mènerait à une division par zéro).

**Attention** : un underflow au numérateur peut encore produire un résultat de zéro. Calculer $\log(\text{softmax}(x))$ naïvement (en deux étapes séparées) peut donc donner $−\infty$ à tort. Il faut implémenter une fonction `log_softmax` dédiée, stabilisée avec la même astuce.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Nombre de Conditionnement (matrice)]]