---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Estimation ponctuelle qui choisit le point de **probabilité a posteriori maximale** (ou de densité maximale, pour $\theta$ continu) :

$$\widehat\theta_{\text{MAP}} = \arg\max_\theta\ p(\theta\mid x) = \arg\max_\theta\ \big[\log p(x\mid\theta) + \log p(\theta)\big]$$

Le premier terme est le terme de log-vraisemblance habituel (voir [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]]), et le second correspond à la distribution à priori.

## Différence avec l'estimateur de Bayes classique

Attention à ne pas confondre : le [[C - Estimateur de Bayes|estimateur de Bayes]] déjà vu ailleurs dans le vault (celui qui minimise le risque bayésien sous une fonction de perte) correspond, sous perte quadratique, à la **moyenne** a posteriori. Le MAP est plutôt le **mode** a posteriori, les deux ne coïncident que pour des distributions symétriques et unimodales.

## Pourquoi utiliser le MAP

L'approche la plus complète est d'utiliser la distribution a posteriori bayésienne dans son ensemble, mais la plupart des opérations sur cette distribution deviennent vite intraitables pour des modèles intéressants. Le MAP offre une approximation ponctuelle **tractable**, tout en conservant l'avantage de l'approche bayésienne : laisser le prior influencer le choix, plutôt que de revenir simplement au MLE.

## Lien avec la régularisation : MAP = décroissance des poids

Pour une [[A - Régression Linéaire|régression linéaire]] avec un prior gaussien $\mathcal{N}(\mathbf{w}; 0, \frac{1}{\lambda}\mathbf{I})$ sur les poids, le terme de log-prior dans l'équation ci-dessus est proportionnel à $\lambda\mathbf{w}^\top\mathbf{w}$ (plus un terme qui ne dépend pas de $\mathbf{w}$) — exactement la pénalité de [[C - Décroissance des poids (Weight Decay)|décroissance des poids]]. **L'inférence bayésienne MAP avec un prior gaussien sur les poids correspond donc exactement à la décroissance des poids.**

Plus généralement, beaucoup de stratégies de régularisation (ex. maximum de vraisemblance régularisé par décroissance des poids) peuvent être interprétées comme une approximation MAP de l'inférence bayésienne, dès que la régularisation ajoute un terme correspondant au $\log p(\theta)$ d'un prior. Attention : tous les régularisateurs ne correspondent pas à un MAP bayésien (certains ne sont pas le logarithme d'une distribution de probabilité valide, ou dépendent des données, ce qu'un prior n'a pas le droit de faire).

## [[C - Compromis Biais-Variance|Compromis biais-variance]]

Comme pour l'inférence bayésienne complète, l'estimation MAP exploite l'information apportée par le prior : information absente des données d'entraînement. Cela réduit la **variance** de l'estimé MAP (par rapport au MLE), mais au prix d'un **biais** accru.

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Estimateur de Bayes]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Décroissance des poids (Weight Decay)]]
- [[C - Régularisation]]
- [[C - Distribution à priori]]
- [[C - Distribution à postériori]]
- [[A - Régression Linéaire Bayésienne]]