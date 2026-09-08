---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: brouillon
---
## Définition en IFT6135

**Jointe** : probabilité d'une assignation complète de plusieurs variables

$$p(X=x, O=o, S=s) \quad (\text{noté } p(x,s,o))$$

**Marginale** : probabilité d'une assignation partielle, en sommant sur les variables absentes

$$p(o,s) = \sum_x p(x,o,s)$$

**Conditionnelle** : probabilité de certaines variables étant donné une assignation des autres

$$p(S=s \mid O=o)$$

## Définition en IFT6269

Contexte des variables aléatoires multivariées (« vecteur aléatoire ») : $Z= (X,Y)$, avec $\Omega_Z\triangleq\Omega_X \times \Omega_Y$.

### Distribution jointe
- Cas discret : la pmf jointe $p(x,y)=P({X=x,Y=y})$. On peut représenter les événements élémentaires de $\Omega_{(X,Y)}$ sous forme de table.
- Cas continu : la pdf jointe, $P({(X,Y)\in\text{région}})=\int\int_{\text{région}}p(x,y)dxdy$.

### Distribution marginale

La distribution d'une composante d'un vecteur aléatoire, obtenue en marginalisant les autres : $$P\{X=x\}=\sum_{y\in\Omega_Y}P\{X=x,Y=y\}\;\;(\text{« règle de somme»})$$
En continu (intégration plutôt que somme):
$$p(x)=\int_yp(x,y)dy$$
#### Type mixte (X continue, Y discrète)
$$P\{(X,Y)\in S\}=\sum_y\int_{x \;\text{t.q.}\;(x,y)\in S}p(x,y)dx$$
on intègre sur la composante continue et somme sur celle qui est dicrète.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Variable Aléatoire]]
- [[C - Règle de Chaîne (Probabilité)]]
- [[T - Théorème de Bayes]]
- [[C - Fonction de masse et de densité (pmf-pdf)]]
- [[C - Conditionnement (probabilité conditionnelle)]]
- [[C - Indépendance (variables aléatoires)]]