---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Modèle génératif qui **traduit une distribution de probabilité en une autre** : une fonction **inversible** $f$ envoie les données $x$ vers une variable $y = f(x)$ de distribution de base simple $p_Y$ (souvent une gaussienne), et la densité du modèle s'obtient exactement par la [[T - Formule du changement de variable (densités)|formule du changement de variable]].

$$\log p_{\text{modèle}}(x) = \log p_Y\big(f(x)\big) + \log\left|\det\frac{\partial f(x)}{\partial x}\right|$$

## Intuition
On part d'une distribution facile (gaussienne), puis on la déforme par une suite de transformations inversibles $f = f_K\circ\dots\circ f_1$ ; chaque étape étire ou comprime l'espace, et le déterminant tient le compte des changements de volume. Le modèle génératif est la densité « poussée en avant » $p_{f^{-1}(Y)}$ : pour échantillonner, on tire $y\sim p_Y$ et on calcule $x = f^{-1}(y)$. Les log-déterminants des étapes s'additionnent.

## Formalisme / Dérivation
**Objectif** (estimation de densité) : $p_X$ = distribution des données, $p_Y$ = prior, $p_{f^{-1}(Y)}$ = modèle génératif. On minimise
$$\begin{aligned}
D_{KL}\big(p_X\,\|\,p_{f^{-1}(Y)}\big) &= \mathbb E_{x\sim p_X}\big[\log p_X(x) - \log p_{f^{-1}(Y)}(x)\big]\\
&= \mathbb E_{x\sim p_X}\left[\log p_X(x) - \log\left(p_Y(f(x))\left|\det\frac{\partial f(x)}{\partial x}\right|\right)\right]\\
&= \mathbb E_{x\sim p_X}\left[\log p_X(x) - \log p_Y(f(x)) - \log\left|\det\frac{\partial f(x)}{\partial x}\right|\right].
\end{aligned}$$
Le premier terme ne dépend pas de $f$ : minimiser la KL revient à **maximiser la vraisemblance** $\mathbb E[\log p_Y(f(x)) + \log|\det\partial f/\partial x|]$.

**Deux exigences de conception** (diapo de Ricky Chen) :
1. une **architecture inversible** (couches de couplage, transformations autorégressives…) ;
2. un calcul **efficace** du changement de variable, en particulier du log-déterminant du jacobien (le cas général coûte $\mathcal O(m^3)$).

### Taxonomie architecturale
| Famille | Idée | Exemples | Jacobien |
|---|---|---|---|
| 1. Identité de déterminant (connexion résiduelle) | $f(x) = x + $ terme de rang faible | [[M - Flot planaire\|flot planaire]], [[M - Flot de Sylvester\|flot de Sylvester]] | rang faible |
| 2. Estimation stochastique (connexion résiduelle) | $f(x) = x + g(x)$, $g$ contractante | FFJORD, [[M - ResNet inversible (i-ResNet)\|flots résiduels]] | norme bornée |
| 3. Bloc autorégressif (dépendance partielle ordonnée) | une partie des variables transforme l'autre | [[M - Couche de couplage (NICE, RealNVP)\|NICE, RealNVP]], Glow | triangulaire par blocs |
| 4. Autorégressif | chaque $y_i$ dépend de $x_{<i}$ | IAF, MAF, NAF, BNAF, SOS | triangulaire |

Les flots autorégressifs (IAF/MAF) seront revus avec les VAE.

## Exemple
1D : $f(x) = (x-\mu)/\sigma$ envoie $\mathcal N(\mu,\sigma^2)$ sur $\mathcal N(0,1)$ ; $\log p(x) = \log\mathcal N(f(x);0,1) - \log\sigma$.

## Flashcards
#flashcards/IFT6135/10-generatifs

Log-vraisemblance d'un flot normalisant ?::$\log p(x)=\log p_Y(f(x))+\log|\det\partial f(x)/\partial x|$, avec $f$ inversible et $p_Y$ une base simple.

Montrer que minimiser $D_{KL}(p_X\|p_{f^{-1}(Y)})$ équivaut au maximum de vraisemblance
?
$D_{KL} = \mathbb E_{p_X}[\log p_X(x) - \log p_Y(f(x)) - \log|\det \partial f/\partial x|]$ ; $\log p_X$ ne dépend pas de $f$, il reste à maximiser $\mathbb E[\log p_Y(f(x))+\log|\det J|]$.

Deux exigences de conception d'un flot ?::(1) Une architecture inversible ; (2) un log-déterminant du jacobien bon marché à calculer.

Quatre familles de flots et la structure de leur jacobien ?
?
Identité de déterminant (planaire, Sylvester) : rang faible. Estimation stochastique (i-ResNet, FFJORD) : norme bornée. Bloc autorégressif (NICE, RealNVP, Glow) : triangulaire par blocs. Autorégressif (IAF, MAF) : triangulaire.

Comment échantillonne-t-on avec un flot ?::Tirer $y\sim p_Y$, puis calculer $x=f^{-1}(y)$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Probabilité]]
- [[T - Formule du changement de variable (densités)]]
- [[C - Familles de modèles génératifs profonds]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[M - Couche de couplage (NICE, RealNVP)]]
- [[M - Flot planaire]]
- [[M - Flot de Sylvester]]
- [[M - ResNet inversible (i-ResNet)]]
