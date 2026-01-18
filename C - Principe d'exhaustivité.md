Lorsqu'on travaille avec beaucoup de données, il peut être utile de résumer l'information contenue dans un échantillon.
Supposons des variables aléatoires $X=(X_1,...,X_n)$ dont la distribution dépend d'un paramètre $\theta \in \Theta$.
La vraie valeur du paramètre $\theta$ étant inconnue, nous voudrions résumer l'information disponible dans $X$ sans perdre trop d'information sur $\theta$.

# Définition principe d'exhaustivité
Si une statistique T(X) est exhaustive ([[C - Statistique Exhaustive]]) pour $\theta$, alors toute inférence sur $\theta$ ne devrait dépendre du modèle $X$ qu'à travers la fonction $T(X)$.
Autrement dit, si $x$ et $y$ sont deux échantillons tels que $T(x)=T(y)$ alors l'inférence sur $\theta$ sera la même pour ces deux échantillons.

# Attention
En général se référer à la définition pour vérifier qu'une statistique est exhaustive n'est pas vraiment pratique :
-  Il faut premièrement tenter de deviner la statistique exhaustive;
- La distribution conditionnelle $X|T(X)=t$ est parfois très difficile à calculer (surtout quand X a une distribution continue).
On peut contourner ces difficultés avec le résultat du théorème : [[T - Critère de factorisation de Neyman]]

## Remarque
Parfois toute l'information disponible à propose de $\theta$ peut être résumée à l'aide d'une seule valeur.
La statistique exhaustive est alors un vecteur $T(X) = (T_1(X),...,T_k(X))$.

Il est possible d'utiliser le [[T - Critère de factorisation de Neyman]] pour trouver une [[C - Statistique Exhaustive]] de forme vectorielle
# Exemple ([[D - Loi Gaussienne (Normale)]])
Pour une Normale avec moyenne et variance inconnues
TODO

### Faits à considérer
- L'échantillon X est toujours exhaustif ( pas de condensation de l'information dans ce cas)
- La [[C - Fonction Injective]] d'une [[C - Statistique Exhaustive]] est aussi une statistique exhaustive
- Il existe donc plusieurs statistiques exhaustives pour un modèle donné

# Concept important
On peut trouver une statistique exhaustive qui condense l'information au maximum sans pour autant perdre de l'information au sujet de $\theta$ ([[C - Statistique exhaustive minimale]])

#### Le principe d'exhaustivité, est-il respecté dans un cadre bayésien?
[[T - Principe d'exhaustivité]]

## Remarque
Le principe d'exhaustivité est accepté par la plupart des statisticiens dû au [[T - Théorème de Rao-Blackwell]] qui écarte les estimateurs qui ne dépendent pas des statistiques exhaustives.