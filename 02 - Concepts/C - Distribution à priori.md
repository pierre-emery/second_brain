---
type: concept
cours:
  - IFT6269
  - STT2105
statut: à réviser
maj: 2026-09-08
---
Dans un [[C - Modèle Bayésien|modèle bayésien]], soit $\theta$ un paramètre prenant ses valeurs dans $\Theta$. Puisque l'approche bayésienne traite **toute quantité incertaine comme une variable aléatoire**, on encode nos connaissances (« croyances ») sur $\theta$ **avant** d'observer les données au moyen d'une densité $\pi(\theta)$, appelée la **distribution à priori** (prior).

## Exemple (prior non-informatif)

Pour $\theta \in [0,1]$ (ex. le biais d'une pièce), un choix simple est le prior **uniforme** sur $[0,1]$ — il n'encode aucune préférence particulière : $$\pi(\theta) = 1 \quad \forall \theta \in [0,1]$$
## Rôle dans l'inférence bayésienne

Après avoir observé $x$, on **met à jour** cette croyance en une [[C - Distribution a postériori|distribution a postériori]] $\pi(\theta\mid x)$ via le [[T - Théorème de Bayes]] : $$\pi(\theta\mid x) = \frac{p(x\mid\theta),\pi(\theta)}{p(x)} \propto p(x\mid\theta),\pi(\theta)$$ où le symbole $\propto$ (« proportionnel à ») permet d'ignorer tout terme ne dépendant pas de $\theta$, le facteur de normalisation. $p(x)$ (la « vraisemblance marginale ») peut être retrouvé après coup en intégrant sur $\theta$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Modèle Bayésien]]
- [[C - Distribution à postériori]]
- [[T - Théorème de Bayes]]