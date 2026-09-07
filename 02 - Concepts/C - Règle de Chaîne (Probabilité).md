---

type: concept

cours: [IFT6135]

statut: brouillon

---
Permet de décomposer une distribution jointe en produit de conditionnelles :

$$p(s,o) = p(s|o)p(o) = p(o|s)p(s)$$
En général, pour un vecteur $\mathbf{x}$ :

$$p(\mathbf{x}) = \prod_i p(x_i \mid x_1,\ldots,x_{i-1})$$

C'est cette règle qui, combinée à la définition de la probabilité conditionnelle, mène au [[T - Théorème de Bayes]] :

$$p(O=o|S=s) = \frac{p(S=s|O=o)p(O=o)}{\sum_{o'} p(S=s|O=o')p(O=o')}$$
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[T - Théorème de Bayes]]