---

type: concept

cours: [IFT6135]

statut: brouillon

---
Méthode pour approximer une espérance coûteuse à calculer exactement :

$$E[f(\mathbf{X})] = \sum_\mathbf{x} f(\mathbf{x})\,p(\mathbf{x}) \approx \frac{1}{K}\sum_k f(\mathbf{x}^{(k)})$$
où les $\mathbf{x}^{(k)}$ doivent être échantillonnés depuis $p(\mathbf{x})$.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Échantillonnage Préférentiel]]

## Flashcards

#flashcards/IFT6135/00-revision

Formule de l'estimation Monte Carlo de $E[f(\mathbf{X})]$ ?::$E[f(\mathbf{X})] \approx \frac{1}{K}\sum_{k=1}^K f(\mathbf{x}^{(k)})$, avec $\mathbf{x}^{(k)} \sim p(\mathbf{x})$.

Condition indispensable pour l'estimation Monte Carlo simple ?::Pouvoir échantillonner depuis $p(\mathbf{x})$.
<!--SR:!2026-10-19,3,250-->

Comment l'erreur d'un estimateur Monte Carlo décroît-elle avec $K$ ? *(complément)*::Comme $1/\sqrt{K}$ (écart-type de la moyenne de $K$ échantillons i.i.d.).