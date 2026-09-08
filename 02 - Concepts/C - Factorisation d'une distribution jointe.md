---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-09-07
---

**Problème** : pour un étiquetage grammatical (POS tagging), une observation de $T$ mots est notée $(x_1,\dots,x_T) \triangleq x_{1:T}$, avec $x_t \in {1,\dots,k}$ pour un vocabulaire de taille $k$. On veut modéliser $p(x_{1:T})$, mais l'espace d'états est de taille exponentielle : $\approx K^T$ paramètres seraient nécessaires pour spécifier complètement cette distribution.

## Le truc 

On fait une **hypothèse de factorisation** sur $p(x_{1:T})$ : $$p(x_1,\dots,x_T) = f_1(x_1),f_2(x_2\mid x_1),f_3(x_3\mid x_2)\cdots f_T(x_T\mid x_{T-1})$$ Chaque facteur $f$ peut être vu comme une **clique** dans le modèle graphique (thème : **Représentation**, voir [[C - Thèmes clés de l'apprentissage statistique]]) et nécessite $\approx K^2$ paramètres. Avec $T$ facteurs, le nombre total de paramètres passe de $K^T$ (croissance exponentielle en $T$) à $T K^2$ (croissance linéaire en $T$) ce qui est une réduction énorme.

Cette factorisation repose sur des hypothèses d'[[C - Indépendance Conditionnelle|indépendance conditionnelle]] ; voir la [[T - Règle de la chaîne (probabilité)|règle de la chaîne]] pour la justification formelle (la factorisation ci-dessus est un cas simplifié de la règle de la chaîne, où l'on suppose une dépendance markovienne d'ordre 1).

### Deux façons de factoriser : dirigé vs. non-dirigé

L'exemple ci-dessus factorise en distributions conditionnelles, c'est la forme d'une [[A - Modèle Graphique Probabiliste|modèle graphique dirigé]]. Il existe une seconde famille, les [[A - Modèle Graphique Non-dirigé|modèles graphiques non-dirigés]] qui factorisent plutôt en facteurs $\phi^{(i)}$ associés aux [[C - Clique (graphe)|cliques]] du graphe, sans que ces facteurs soient eux-mêmes des distributions (d'où le besoin d'une constante de normalisation $Z$)

**Point important** : être dirigé ou non-dirigé n'est pas une propriété de la distribution $p$ elle-même mais d'une description particulière. N'importe quelle distribution peut en principe être décrite des deux façons.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[A - Modèle Graphique Non-dirigé]] 
- [[T - Règle de la chaîne (probabilité)]]
- [[A - Passation de Messages]]
- [[C - Thèmes clés de l'apprentissage statistique]]