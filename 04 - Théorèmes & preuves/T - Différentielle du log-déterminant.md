---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Pour $f(A)=\log|A|$ avec $A\in\mathbb R^{d\times d}$ symétrique définie positive ($A\succ0$) :
$$\log|A+\Delta|-\log|A|=\mathrm{tr}(A^{-1}\Delta)+o(\|\Delta\|),\qquad\text{i.e.}\qquad \frac{d\log|A|}{dA}=A^{-1}.$$

## Hypothèses

$A\succ0$ symétrique ⇒ inversible et admet une racine carrée $A^{1/2}$ (théorème spectral). Couvre les cas utiles : $A=\Sigma$ ou $\Sigma^{-1}$.

Outils : $|BC|=|B||C|$ ; pour $M$ diagonalisable $\mathrm{tr}M=\sum_i\lambda_i(M)$ et $|M|=\prod_i\lambda_i(M)$ ; $\mathrm{tr}(BCD)=\mathrm{tr}(DBC)$ ; $M\to0\Rightarrow\lambda_i(M)\to0$ ; $\log(1+x)=\sum_{k\ge1}(-1)^{k+1}x^k/k$ pour $|x|<1$.

## Preuve

Posons $M=A^{-1/2}\Delta A^{-1/2}$.
$$\begin{aligned}
\log|A+\Delta|-\log|A|&=\log\big|A^{1/2}(I+M)A^{1/2}\big|-\log\big|A^{1/2}A^{1/2}\big|=\log|I+M|\\
&=\log\prod_{i=1}^d\lambda_i(I+M)=\sum_{i=1}^d\log\big(1+\lambda_i(M)\big)\\
&=\sum_{i=1}^d\lambda_i(M)+\underbrace{\sum_{k\ge2}\sum_{i=1}^d(-1)^{k+1}\frac{\lambda_i(M)^k}{k}}_{o(\|\Delta\|)}\\
&=\mathrm{tr}(A^{-1/2}\Delta A^{-1/2})+o(\|\Delta\|)=\mathrm{tr}(A^{-1}\Delta)+o(\|\Delta\|).\ \blacksquare
\end{aligned}$$

**Justification du $o(\|\Delta\|)$ (optionnel).** $\sum_i\lambda_i^k=\mathrm{tr}(M^k)$ ; pour toute $B$, $|\mathrm{tr}B|\le\sum_i|B_{ii}|\le\sqrt d\,\|B\|_F$ (inégalité des moyennes quadratiques) ; Cauchy-Schwarz $\|BC\|_F\le\|B\|_F\|C\|_F$. Donc
$$0\le\Big|\sum_i\lambda_i^k\Big|\le\sqrt d\,\|A^{-1/2}\|_F^{2k}\,\|\Delta\|_F^k,$$
et en divisant par $\|\Delta\|_F$ on obtient une borne en $\|\Delta\|_F^{k-1}\to0$ pour $k>1$ (théorème du sandwich).

## Corollaires / Conséquences

Avec la différentielle de la [[C - Distance de Mahalanobis]], c'est l'outil pour dériver le MLE de $\Sigma$ d'une gaussienne (ex. [[M - Analyse Discriminante Linéaire (LDA)|LDA]], devoir 2) : la log-vraisemblance contient $-\frac n2\log|\Sigma|$.

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Différentielle de $\log|A|$ ($A\succ0$) ?::$A^{-1}$ : $\log|A+\Delta|-\log|A|=\mathrm{tr}(A^{-1}\Delta)+o(\|\Delta\|)$.

Astuce clé de la preuve de $d\log|A|=A^{-1}$ ?::Factoriser $A+\Delta=A^{1/2}(I+A^{-1/2}\Delta A^{-1/2})A^{1/2}$, puis $\log|I+M|=\sum_i\log(1+\lambda_i(M))\approx\mathrm{tr}M$.

À quoi sert $d\log|\Sigma|=\Sigma^{-1}$ en pratique ?::À dériver le MLE de la covariance d'une gaussienne (ex. LDA) : la log-vraisemblance contient $-\frac n2\log|\Sigma|$ et des termes de Mahalanobis.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Différentielle (calcul matriciel)]]
- [[C - Déterminant d'une matrice]]
- [[C - Trace d'une matrice]]
- [[C - Matrice Symétrique Définie Positive]]
