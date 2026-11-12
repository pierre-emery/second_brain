---

type: concept

cours: [IFT6269]

statut: incomplet

maj: 2026-10-24

---
## Définition

Estimateur de la moyenne $\mu$ de $X_i\overset{iid}\sim\mathcal N_d(\mu,\sigma^2 I)$ qui **domine le MLE** $\bar X$ pour la perte quadratique dès que $d\ge 3$. Il montre donc que le MLE est **[[C - Admissibilité|inadmissible]]** dans ce cas.

Forme classique (une observation $X\sim\mathcal N_d(\mu,\sigma^2I)$, $\sigma^2$ connu) (*formule non donnée dans les notes du cours, ajoutée pour référence*) :
$$\widehat\mu_{\text{JS}}=\left(1-\frac{(d-2)\,\sigma^2}{\|X\|^2}\right)X$$
Il **rétrécit** (*shrinkage*) l'estimé vers l'origine.
## Intuition

- Il est **biaisé**, mais sa **variance** est suffisamment plus faible que celle du MLE pour compenser le biais au carré (voir [[T - Décomposition biais-variance]]).
- Le rétrécissement ressemble à un a priori centré en 0 : lien avec les estimateurs bayésiens / [[A - Régression Ridge|ridge]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Admissibilité]]
- [[T - Décomposition biais-variance]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[D - Loi Gaussienne (Normale)]]
## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Que montre l'estimateur de James-Stein ?::Pour la moyenne d'une $\mathcal N_d(\mu,\sigma^2I)$ avec $d\ge3$ et perte quadratique, il domine le MLE : le MLE est inadmissible.

Comment James-Stein peut-il battre le MLE tout en étant biaisé ?::Sa variance est assez plus faible pour compenser le biais au carré (il rétrécit vers 0).