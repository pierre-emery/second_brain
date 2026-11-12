---
type: concept
cours: [IFT6758, IFT6269]
statut: complet
tags: []
prerequis:
  - "[[C - Risque]]"
  - "[[C - Risque Empirique]]"
maj: 2026-11-11
---
L'écart entre le [[C - Risque]] et le [[C - Risque Empirique]] est appelé l'erreur de généralisation. $R(\theta) - \widehat R(\theta; D_{train})$

- À cause de cette approximation, on ne cherche pas à tout prix à minimiser le risque empirique.
- Notre modèle doit être capable de généraliser (en fait si on faisait que minimiser le risque empirique à tout prix on serait plus propice de tomber en [[C - Surapprentissage]].
## Attention au vocabulaire (IFT6269)

Dans IFT6269, « erreur de généralisation » désigne le **risque lui-même**, $\mathbb E_{P_0}[\ell(Y,f(X))]$, appelé aussi [[C - Risque|risque de Vapnik]], pas l'écart risque − risque empirique.
## Liens connexes

- [[C - Risque]]
