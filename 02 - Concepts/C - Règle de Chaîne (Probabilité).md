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
## Application : modèles de langage

La même factorisation, appliquée à une suite de mots, est le point de départ de la [[C - Modélisation du Langage|modélisation du langage]] : $p(w_1,\ldots,w_T) = \prod_t p(w_t \mid w_1,\ldots,w_{t-1})$.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[T - Théorème de Bayes]]
## Flashcards

#flashcards/IFT6135/00-revision

Règle de chaîne pour deux variables ?::$p(s,o) = p(s \mid o)\,p(o) = p(o \mid s)\,p(s)$

Règle de chaîne générale pour un vecteur $\mathbf{x}$ ?::$p(\mathbf{x}) = \prod_i p(x_i \mid x_1, \ldots, x_{i-1})$

La factorisation par règle de chaîne est-elle une approximation ?::Non, elle est **exacte**. C'est l'hypothèse de Markov (contexte tronqué) qui introduit une approximation.

En quoi la règle de chaîne est-elle le point de départ des modèles de langage ?::$p(w_1, \ldots, w_T) = \prod_t p(w_t \mid w_1, \ldots, w_{t-1})$ : il suffit de modéliser la distribution du mot suivant étant donné le contexte.