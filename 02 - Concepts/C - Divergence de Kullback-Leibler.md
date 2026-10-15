---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-09
---
Mesure de dissimilarité entre deux distributions de probabilité $p$ et $q$ sur le même espace :

$$D_{KL}(p,||,q) = \mathbb{E}_{x\sim p}\big[\log p(x) - \log q(x)\big]$$

## Lien avec le maximum de vraisemblance

On peut interpréter l'[[C - Estimateur du Maximum de Vraisemblance (MLE)|estimation par maximum de vraisemblance]] comme la minimisation de la divergence KL entre la distribution empirique $\widehat p_{\text{data}}$ (définie par l'ensemble d'entraînement) et la distribution du modèle $p_{\text{model}}$ :

$$D_{KL}(\widehat p_{\text{data}},||,p_{\text{model}}) = \mathbb{E}_{x\sim \widehat p_{\text{data}}}\big[\log \widehat p_{\text{data}}(x)\big] - \mathbb{E}_{x\sim \widehat p_{\text{data}}}\big[\log p_{\text{model}}(x)\big]$$

Le premier terme ne dépend que du processus générateur des données, pas du modèle, donc minimiser la divergence KL revient exactement à minimiser $-\mathbb{E}_{x\sim\widehat p_{\text{data}}}[\log p_{\text{model}}(x)]$, ce qui est la même maximisation que pour le MLE.

## Entropie croisée

Minimiser cette divergence KL correspond exactement à minimiser l'**entropie croisée** entre les deux distributions. Toute perte de la forme « log-vraisemblance négative » est une entropie croisée entre la distribution empirique définie par l'ensemble d'entraînement et la distribution définie par le modèle. Par exemple, l'[[C - Perte quadratique (MSE)|erreur quadratique moyenne]] est l'entropie croisée entre la distribution empirique et un modèle gaussien.

## Interprétation

Le maximum de vraisemblance tente de faire correspondre la distribution du modèle à la distribution empirique $\widehat p_{\text{data}}$. Idéalement, on voudrait faire correspondre la vraie distribution génératrice $p_{\text{data}}$, mais on n'y a jamais directement accès.

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Vraisemblance]]
- [[C - Perte quadratique (MSE)]]
- [[C - Entropie]]