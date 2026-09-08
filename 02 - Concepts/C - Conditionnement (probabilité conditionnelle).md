---
type: concept
cours:
  - IFT6269
statut: brouillon
maj: 2026-09-07
---
## Pour des événements

Pour des événements $A$ et $B$ avec $P(B) \neq 0$, la probabilité de $A$ sachant $B$ : $$P(A\mid B) \triangleq \frac{P(A \cap B)}{P(B)} \quad \text{(}P(B)\text{ agit comme normalisateur)}$$ Intuition : on se restreint au sous-espace où $B$ se produit, et dans cet espace, on regarde le sous-espace où $A$ se produit aussi.

**Loi des probabilités totales** : pour une partition ${A_i}$ de $\Omega$, $$P(B) = \sum_{A \in \text{partition de } \Omega} P(A \cap B)$$

## Pour des variables aléatoires

$$P(X=x \mid Y=y) \triangleq \frac{P(X=x, Y=y)}{P(Y=y)}$$ $P(Y=y) = \sum_x P(X=x,Y=y)$ est une constante de normalisation, nécessaire pour obtenir une vraie distribution de probabilité. D'où la **règle du produit** : $$p(x,y) = p(x\mid y),p(y) \quad \text{(toujours vraie, sauf si } p(y)=0\text{)}$$

### Cas discret : pmf conditionnelle

$$p(x\mid y) \triangleq P({X=x}\mid {Y=y}) = \frac{P({X=x,Y=y})}{P({Y=y})} = \frac{p(x,y)}{p(y)}$$ $p(x\mid y) \propto p(x,y)$ (« proportionnel à »), avec normalisation $\sum_x p(x,y) = p(y)$.

### Cas continu : pdf conditionnelle

$$p(x\mid y) \triangleq \frac{p(x,y)}{p(y)}$$ **Point subtil** : $p(x\mid y)$ est **indéfinie** quand $p(y)=0$. Voir le [paradoxe de Borel-Kolmogorov](https://en.wikipedia.org/wiki/Borel%E2%80%93Kolmogorov_paradox) pour des propriétés contre-intuitives de la probabilité conditionnelle dans ce cas.

### Lien avec l'indépendance

Si $X \perp!!!\perp Y$ : $p(x\mid y) = \dfrac{p(x,y)}{p(y)} = \dfrac{p(x)p(y)}{p(y)} = p(x)$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[C - Indépendance (variables aléatoires)]]
- [[T - Règle de la chaîne (probabilité)]]
- [[T - Théorème de Bayes]]