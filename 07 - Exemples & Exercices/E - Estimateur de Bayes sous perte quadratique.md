---
type: exercice
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Avec $\mathcal A=\Theta$ et $L(\theta,a)=\|\theta-a\|^2$, montrer que la [[C - Perte Espérée à postériori|règle bayésienne]] est la moyenne a posteriori :
$$\delta^*_{\text{bayes}}(D)=\mathbb E[\theta\mid D].$$

## Solution

Le risque a posteriori d'une action $a$ est
$$R_B(a\mid D)=\int_\Theta\|\theta-a\|^2\,p(\theta\mid D)\,d\theta=\mathbb E\big[\|\theta-a\|^2\,\big|\,D\big].$$
On pose $m=\mathbb E[\theta\mid D]$ et on ajoute/retire $m$ :
$$\mathbb E\|\theta-a\|^2=\mathbb E\|\theta-m\|^2+2\,\mathbb E\langle\theta-m,\,m-a\rangle+\|m-a\|^2 .$$
Le terme croisé est nul car $m-a$ est constant (sachant $D$) et $\mathbb E[\theta-m\mid D]=0$. Donc
$$R_B(a\mid D)=\underbrace{\mathbb E\big[\|\theta-m\|^2\mid D\big]}_{\text{ne dépend pas de }a}+\|m-a\|^2,$$
minimisé exactement en $a=m$. $\blacksquare$

*(Alternative : $\nabla_a R_B = -2\,\mathbb E[\theta-a\mid D]=0 \Rightarrow a=\mathbb E[\theta\mid D]$, convexe en $a$.)*

## À retenir

Le risque minimal atteint est la **trace de la covariance a posteriori**, $\mathbb E[\|\theta-m\|^2\mid D]=\mathrm{tr}\,\mathrm{Cov}(\theta\mid D)$. Même astuce « ajouter/retirer la moyenne » que dans la [[T - Décomposition biais-variance]].

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Estimateur de Bayes sous perte quadratique ?::La moyenne a posteriori $\mathbb E[\theta\mid D]$.

Idée de la preuve que $\delta^*_{\text{bayes}}=\mathbb E[\theta\mid D]$ sous perte quadratique ?::Ajouter/retirer $m=\mathbb E[\theta\mid D]$ : $\mathbb E\|\theta-a\|^2=\mathbb E\|\theta-m\|^2+\|m-a\|^2$ (terme croisé nul), minimisé en $a=m$.

Que vaut le risque bayésien a posteriori minimal sous perte quadratique ?::$\mathbb E[\|\theta-m\|^2\mid D]=\mathrm{tr}\,\mathrm{Cov}(\theta\mid D)$, avec $m=\mathbb E[\theta\mid D]$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Perte Espérée à postériori]]
- [[C - Estimateur de Bayes]]
- [[C - Perte quadratique (MSE)]]
- [[T - Décomposition biais-variance]]
