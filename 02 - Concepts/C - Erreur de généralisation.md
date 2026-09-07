---
## type: concept
cours: [IFT6758]
statut: complet
tags: []
prerequis: ["[[C - Risque]]", "[[C - Risque Empirique]]"]
maj: 2026-08-06
---

L'écart entre le [[C - Risque]] et le [[C - Risque Empirique]] est appelé l'erreur de généralisation. $R(\theta) - \widehat R(\theta; D_{train})$

- À cause de cette approximation, on ne cherche pas à tout prix à minimiser le risque empirique.
- Notre modèle doit être capable de généraliser (en fait si on faisait que minimiser le risque empirique à tout prix on serait plus propice de tomber en [[C - Surapprentissage]].