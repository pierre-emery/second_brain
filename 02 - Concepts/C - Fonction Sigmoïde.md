---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

$$\sigma:\ ]-\infty,+\infty[\ \to\ ]0,1[,\qquad \sigma(z)=\frac{1}{1+e^{-z}}$$
Courbe en S, $\sigma(0)=1/2$, quasi saturée à 0 pour $z<-6$ et à 1 pour $z>6$.
## Propriétés

1. **Symétrie** : $\sigma(-z)=1-\sigma(z)$.
2. **Dérivée** : $\sigma'(z)=\sigma(z)\big(1-\sigma(z)\big)=\sigma(z)\,\sigma(-z)$.
3. **Limites** : $\lim_{z\to-\infty}\sigma(z)=0$, $\lim_{z\to+\infty}\sigma(z)=1$.

*Preuve de 2* : $\sigma'(z)=\frac{e^{-z}}{(1+e^{-z})^2}=\frac{1}{1+e^{-z}}\cdot\frac{e^{-z}}{1+e^{-z}}=\sigma(z)\,(1-\sigma(z))$, et $1-\sigma(z)=\sigma(-z)$ par 1.
## Rôle

Pour toute loi jointe, $p(Y=1\mid X=x)=\sigma(f(x))$ où $f$ est le [[C - Log-ratio des cotes (log-odds)|log-ratio des cotes]]. Si $f$ est linéaire en des caractéristiques, on obtient la [[A - Régression Logistique (Binaire)|régression logistique]]. Aussi utilisée comme [[C - Fonction d'activation|fonction d'activation]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Régression Logistique (Binaire)]]
- [[C - Log-ratio des cotes (log-odds)]]
- [[C - Fonction d'activation]]
## Flashcards

#flashcards/IFT6269/08-regression-logistique

Définition de la sigmoïde ?::$\sigma(z)=1/(1+e^{-z})$, de $\mathbb R$ dans $]0,1[$.

Symétrie de la sigmoïde ?::$\sigma(-z)=1-\sigma(z)$.

Dérivée de la sigmoïde ?::$\sigma'(z)=\sigma(z)(1-\sigma(z))=\sigma(z)\sigma(-z)$.