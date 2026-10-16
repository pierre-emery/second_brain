---

type: concept

cours: [IFT6135]

statut: brouillon

---
Des variables $\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(T)}$ sont indépendantes et identiquement distribuées (i.i.d.) si elles proviennent toutes de la même distribution $p(\mathbf{x})$ et sont mutuellement indépendantes. Cela permet d'écrire la distribution jointe comme un simple produit :

$$p(\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(T)}) = \prod_t p(\mathbf{x}^{(t)})$$

C'est l'hypothèse centrale derrière la [[C - Vraisemblance]] et l'[[C - Estimateur du Maximum de Vraisemblance (MLE)]].
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Indépendance (variables aléatoires)]]

## Flashcards

#flashcards/IFT6135/00-revision 

Que signifie « i.i.d. » ?::Indépendantes et identiquement distribuées : toutes tirées de la même distribution $p(\mathbf{x})$ et mutuellement indépendantes.

Quelle simplification l'hypothèse i.i.d. permet-elle ?::La jointe devient un produit : $p(\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(T)}) = \prod_t p(\mathbf{x}^{(t)})$ : c'est ce qui rend la vraisemblance calculable.

Les mots d'une phrase sont-ils i.i.d. ? Conséquence ?::Non, ils sont fortement dépendants. C'est pourquoi on factorise par règle de chaîne et on utilise des modèles séquentiels (RNN) plutôt qu'un produit de marginales.