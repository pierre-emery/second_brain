---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-09-08
---
Si $B_1, B_2, \dots$ sont i.i.d. avec $E[B_i] = \theta$, alors la moyenne empirique converge vers l'espérance : $$\frac1n \sum_{i=1}^n B_i \ \xrightarrow[n\to\infty]{} \ E[B_i] = \theta$$

## Exemple d'usage (interprétation fréquentiste)

Soit $B \triangleq \mathbb 1{X=x} \sim \mathrm{Bern}(\theta)$, encodant l'événement $X=x$. En répétant l'expérience i.i.d. $B_i \overset{\text{iid}}{\sim} \mathrm{Bern}(\theta)$, la loi des grands nombres justifie l'interprétation fréquentiste de $\theta$ comme une **fréquence relative limite** (voir [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]_.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[T - Théorème central limite]]
- [[D - Binomiale]]