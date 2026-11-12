---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Soit $p(Y=1)=\pi$ et des classes conditionnelles dans la même [[D - Famille exponentielle|famille exponentielle]] :
$$p(x\mid Y=y)=h(x)\exp\big(\eta_y^\top T(x)-A(\eta_y)\big),\quad y\in\{0,1\}.$$
Alors
$$p(Y=1\mid X=x)=\sigma\big(w^\top\phi(x)\big),\qquad w=\begin{pmatrix}\eta_1-\eta_0\\ A(\eta_0)-A(\eta_1)+\log\frac{\pi}{1-\pi}\end{pmatrix},\quad \phi(x)=\begin{pmatrix}T(x)\\1\end{pmatrix}.$$
C'est **exactement** un modèle de [[M - Régression Logistique (Binaire)|régression logistique]] avec caractéristiques $\phi(x)$.

## Preuve

Par le [[C - Log-ratio des cotes (log-odds)|log-ratio des cotes]], $p(Y=1\mid x)=\sigma(f(x))$ avec
$$f(x)=\log\frac{h(x)e^{\eta_1^\top T(x)-A(\eta_1)}}{h(x)e^{\eta_0^\top T(x)-A(\eta_0)}}+\log\frac{\pi}{1-\pi}=(\eta_1-\eta_0)^\top T(x)+A(\eta_0)-A(\eta_1)+\log\frac{\pi}{1-\pi}=w^\top\phi(x).\ \blacksquare$$
Note : **$h(x)$ s'annule** dans le ratio.

## Corollaires / Conséquences

- **Gaussiennes** $p(x\mid y)=\mathcal N(x\mid\mu_y,\Sigma_y)$ :
  - $\Sigma_0=\Sigma_1$ ⇒ $\phi(x)=(x,1)$ : frontière **linéaire** ([[M - Analyse Discriminante Linéaire (LDA)|LDA]]) ;
  - $\Sigma_0\ne\Sigma_1$ ⇒ $\phi(x)=(xx^\top,x,1)$ : frontière **quadratique** (QDA). *(Devoir 2.)*
- **Robustesse de la régression logistique** : beaucoup de modèles génératifs différents (différents $h$, différentes lois de la famille) donnent le **même** $\sigma(w^\top\phi(x))$. Le modèle conditionnel est donc robuste aux choix de modélisation de $p(x\mid y)$ — c'est en ce sens qu'il est plus robuste que l'approche [[C - Approches génératives, conditionnelles et discriminantes|générative]].

## Flashcards

#flashcards/IFT6269/08-regression-logistique

Classes conditionnelles dans la famille exponentielle : forme de $p(Y=1\mid x)$ ?::$\sigma(w^\top\phi(x))$ avec $w=(\eta_1-\eta_0,\ A(\eta_0)-A(\eta_1)+\log\frac{\pi}{1-\pi})$ et $\phi(x)=(T(x),1)$.

Gaussiennes à covariance partagée vs différente : quelles caractéristiques $\phi(x)$ ?::Partagée : $(x,1)$ → frontière linéaire (LDA). Différente : $(xx^\top,x,1)$ → frontière quadratique (QDA).

En quel sens la régression logistique est-elle robuste ?::Beaucoup de modèles génératifs différents (le $h(x)$ s'annule, différentes lois exp.) donnent le même $p(y\mid x)=\sigma(w^\top\phi(x))$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Régression Logistique (Binaire)]]
- [[M - Analyse Discriminante Linéaire (LDA)]]
- [[D - Famille exponentielle]]
- [[C - Log-ratio des cotes (log-odds)]]
