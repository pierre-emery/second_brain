---
type: modele
cours: [IFT6758]
statut: complet
tags: []
prerequis: ["[[M - Régression Logistique (Binaire)]]"]
maj: 2026-11-11
---
On peut adapter la [[M - Régression Logistique (Binaire)]] s'il y a plus d'une classe en utilisant la distribution catégorielle $$p(y|x;\theta) = \text {Cat}(y|\text {softmax}(Wx+b))$$ et ici $\text{Cat}(\theta) = \prod _{c=1}^C\theta_c^{\mathrm I(y=c)}$ On a donc que la probabilité d'être dans une classe s'écrit alors: $p(y=c|x;\theta)=\frac{e^{a_c}}{\sum^C_{c'=1}e^{a_{c'}}}$

## Liens connexes

- [[C - Fonction d'activation]] (softmax)
- [[M - Régression Logistique (Binaire)]]