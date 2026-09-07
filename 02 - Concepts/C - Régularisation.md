---

type: concept

cours: [IFT6135]

statut: brouillon

---
Terme ajouté à la fonction objective pour pénaliser certaines valeurs des paramètres $\theta$, en général pour limiter la complexité du modèle et réduire le surapprentissage :

$$\arg\min_\theta\ \frac{1}{T}\sum_t l(f(\mathbf{x}^{(t)};\theta), y^{(t)}) + \lambda\,\Omega(\theta)$$

$\Omega(\theta)$ est le régularisateur, $\lambda$ contrôle son importance. Techniquement, l'ajout de ce terme fait de la minimisation du risque empirique une minimisation du risque **structurel**.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Risque Empirique]]
- [[C - Surapprentissage]]