---

type: concept

cours: [IFT6135]

statut: brouillon

---
Méthode d'échantillonnage (importance sampling) utilisée quand $p(\mathbf{x})$ est coûteuse à échantillonner directement :
$$E[f(\mathbf{X})] = \sum_\mathbf{x} f(\mathbf{x})\frac{p(\mathbf{x})}{q(\mathbf{x})}q(\mathbf{x}) \approx \frac{1}{K}\sum_k f(\mathbf{x}^{(k)})\frac{p(\mathbf{x}^{(k)})}{q(\mathbf{x}^{(k)})}$$
$q(\mathbf{x})$ doit être facile à échantillonner et aussi similaire que possible à $p(\mathbf{x})$. En pratique, concevoir un bon $q(\mathbf{x})$ est souvent difficile.
## Liens connexes
- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Estimation Monte Carlo]]

## Flashcards

#flashcards/IFT6135/00-revision

Formule de l'échantillonnage préférentiel ?
?
$$E_p[f(\mathbf{X})] = \sum_\mathbf{x} f(\mathbf{x})\frac{p(\mathbf{x})}{q(\mathbf{x})}q(\mathbf{x}) \approx \frac{1}{K}\sum_k f(\mathbf{x}^{(k)})\frac{p(\mathbf{x}^{(k)})}{q(\mathbf{x}^{(k)})}, \quad \mathbf{x}^{(k)} \sim q$$

Quand utilise-t-on l'échantillonnage préférentiel  ?::Quand $p(\mathbf{x})$ est difficile à échantillonner mais facile à évaluer.

Deux exigences sur la distribution de proposition $q$ ?::Facile à échantillonner, et aussi proche que possible de $p$ (sinon les poids $p/q$ ont une forte variance).