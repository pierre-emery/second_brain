---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Pour une classification binaire $Y\in\{0,1\}$, le **log-ratio des cotes** (*log odds ratio*) est

$$f(x)=\log\frac{p(Y=1,X=x)}{p(Y=0,X=x)}=\underbrace{\log\frac{p(X=x\mid Y=1)}{p(X=x\mid Y=0)}}_{\text{ratio des classes conditionnelles}}+\underbrace{\log\frac{p(Y=1)}{p(Y=0)}}_{\text{ratio des cotes a priori}}$$

## Lien avec la sigmoïde (toujours vrai)

$$p(Y=1\mid X=x)=\frac{p(Y=1,x)}{p(Y=1,x)+p(Y=0,x)}=\frac{1}{1+\frac{p(Y=0,x)}{p(Y=1,x)}}=\frac{1}{1+e^{-f(x)}}=\sigma(f(x)).$$

Aucune hypothèse sauf l'existence des densités $p(x\mid Y=1)$, $p(x\mid Y=0)$. La [[A - Régression Logistique (Binaire)|régression logistique]] suppose simplement que $f$ est **linéaire** en des caractéristiques $\phi(x)$.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Fonction Sigmoïde]]
- [[A - Régression Logistique (Binaire)]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
## Flashcards

#flashcards/IFT6269/08-regression-logistique

Décomposition du log-ratio des cotes $f(x)$ ?::$\log\frac{p(x\mid Y=1)}{p(x\mid Y=0)}+\log\frac{p(Y=1)}{p(Y=0)}$ : ratio des classes conditionnelles + ratio des cotes a priori.

Relation générale entre $p(Y=1\mid x)$ et le log-ratio des cotes ?::$p(Y=1\mid x)=\sigma(f(x))$, toujours vraie (seule hypothèse : les densités existent).