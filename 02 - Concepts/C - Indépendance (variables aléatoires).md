---

type: concept

cours: [IFT6135]

statut: brouillon

---
$X_1$ et $X_2$ sont indépendantes (noté $X_1\perp\!\!\!\perp X_2$) ssi

$$p(x_1,x_2) = p(x_1)p(x_2)\;\;\;\forall(x_1,x_2)\in\Omega_{X_1}\times\Omega_{X_2}$$ $$\quad \text{ou de façon équivalente} \quad p(x_1|x_2)=p(x_1) \text{ ou } p(x_2|x_1)=p(x_2)$$
Des variables aléatoires $X_1,...,X_n$ sont mutuellement indépendantes ssi
$$p(x_{1:n})=\prod_{i=1}^np(x_i)\;\;\;\forall x_{1:n}\in\bigtimes_{i=1}^n\Omega_{X_i}$$

**Conséquences si indépendantes :** (lien avec [[C - Conditionnement (probabilité conditionnelle)]])

- $E[XY] = E[X]E[Y]$
- $\text{Cov}(X_1,X_2) = 0$
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$
- $p(x|y)=\frac{p(x,y)}{p(y)}=\frac{p(x)p(y)}{p(y)}=p(x)$ (c.-à-d. connaître $Y$ n'apport aucune information sur $X$)
### Indépendance conditionnelle 

![[C - Indépendance Conditionnelle]]

## Deux structures graphiques opposées (aperçu)

- **Fourche** (ancêtre commun) : $p(x,y,z) = p(x\mid z)\,p(y\mid z)\,p(z)$ → $X \perp\!\!\!\perp Y \mid Z$, mais pas nécessairement $X\perp\!\!\!\perp Y$.

- **Collision** (v-structure) : $p(x,y,z) = p(z\mid x,y)\,p(x)\,p(y)$ → $X\perp\!\!\!\perp Y$ (marginalement), mais généralement **pas** $X\perp\!\!\!\perp Y \mid Z$. C'est le phénomène du **« explaining away »** (observer un effet commun $Z$ rend ses causes $X,Y$ dépendantes). Ce sujet sera formalisé plus tard avec la d-séparation dans les modèles graphiques dirigés.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[C - Indépendance Conditionnelle]]
- [[C - Covariance]]