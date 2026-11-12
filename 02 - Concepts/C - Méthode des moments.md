---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
## Définition

Soit $D=(X_1,\dots,X_n)$, $X_i\overset{iid}\sim P_\theta$ scalaires, avec $\theta=(\theta_1,\dots,\theta_k)$. On cherche une **bijection** $h$ qui envoie $\theta$ sur le vecteur des $k$ premiers moments :
$$h(\theta)=M_k(X_1)\triangleq\big(\mathbb E[X_1],\mathbb E[X_1^2],\dots,\mathbb E[X_1^k]\big),\qquad \theta=h^{-1}(M_k(X_1)).$$

L'**estimateur des moments** remplace les vrais moments par les **moments empiriques** $\widehat{\mathbb E}[X_1^j]\triangleq\frac1n\sum_i x_i^j$ :
$$\widehat\theta_{\text{MM}}=h^{-1}\big(\widehat M_k(X_1)\big).$$
## Exemple : gaussienne

$X_i\overset{iid}\sim\mathcal N(\mu,\sigma^2)$ : $\mathbb E[X_1]=\mu$, $\mathbb E[X_1^2]=\sigma^2+\mu^2$. On inverse : $\mu=\mathbb E[X_1]$, $\sigma^2=\mathbb E[X_1^2]-\mathbb E[X_1]^2$, d'où
$$\widehat\mu_{\text{MM}}=\widehat{\mathbb E}[X_1],\qquad \widehat\sigma^2_{\text{MM}}=\widehat{\mathbb E}[X_1^2]-\widehat{\mathbb E}[X_1]^2 .$$
Ici l'estimateur MM **coïncide avec le [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]]** : propriété de la [[D - Famille exponentielle|famille exponentielle]] (vue plus tard dans le cours).
## Remarques

- Très utile pour les **modèles à variables latentes** (ex. mélanges de gaussiennes) : méthodes « spectrales » / de **décomposition tensorielle** (Anandkumar et al., JMLR 2014).
- Lié au principe d'appariement des moments (*moment matching*) annoncé dans le [[MOC - IFT6269 Modèles Graphiques Probabilistes|MOC]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Règle de décision]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[D - Loi Gaussienne (Normale)]]
- [[C - Variable latente]]
## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Principe de la méthode des moments ?::Trouver une bijection $h(\theta)=(\mathbb E X,\dots,\mathbb E X^k)$, puis poser $\widehat\theta_{\text{MM}}=h^{-1}$(moments empiriques).

Estimateurs des moments de $\mu,\sigma^2$ pour une gaussienne ?::$\widehat\mu=\frac1n\sum x_i$, $\widehat\sigma^2=\frac1n\sum x_i^2-\widehat\mu^2$ ; identiques au MLE (famille exponentielle).

Domaine moderne où la méthode des moments est utile ?::Les modèles à variables latentes (mélanges) via méthodes spectrales / décomposition tensorielle.