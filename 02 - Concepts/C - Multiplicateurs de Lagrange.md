---
type: concept
cours: IFT6135
statut: à réviser
maj: 2026-09-08
---

Compte tenu d'un problème d'optimisation $\arg\min_{\vec z}f(\vec z)$ s.t. $g_j(\vec z)=0, j=1,...,k$, sa solution optimale doit être un point stationnaire de la fonction Lagrangienne $f_P(\vec z,\lambda_1,...,\lambda_k)=f(\vec z)-\sum_{j=1}^k \lambda_jg_j(\vec z)$, i.e. un point ou $\nabla f_P=0$.

Remarquons que :
- Les points stationnaires peuvent être des points cols/selles pas seulement des points extrêmes.
- Comme $\frac{\partial f_P}{\partial\lambda_j}=g_j$, il suffit de considérer les contraintes intiales et $\frac{\partial f_P}{\partial\vec z}=0$ 
- Attention! C'est une condition nécessaire mais pas suffisante.
## Généralisation aux contraintes d'inégalité

Le cas ci-dessus ne couvre que les contraintes d'**égalité**. Pour une contrainte d'**inégalité** $h(\vec z)\leq 0$, on introduit plutôt un multiplicateur $\lambda\geq0$ et on résout un problème **min-max** :

$$\min_{\vec z}\max_{\lambda,,\lambda\geq0} L(\vec z,\lambda), \quad L(\vec z,\lambda)=f(\vec z)+\lambda,h(\vec z)$$

Si la contrainte est déjà respectée par la solution non contrainte, alors $\lambda=0$ et rien ne change. Sinon, on ajuste $\lambda$ par ascension de gradient jusqu'à ce que la contrainte soit exactement satisfaite (contrainte **active**). Voir [[C - Conditions KKT]] pour la généralisation complète combinant contraintes d'égalité et d'inégalité, et [[C - Moindres Carrés Ordinaires (MCO)]] pour un exemple travaillé.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Conditions KKT]]
- [[C - Dualité]]
- [[C - Moindres Carrés Ordinaires (MCO)]]