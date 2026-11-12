---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Pour une fonction **concave** $f$ et toute distribution $q$, l'image de la moyenne domine la moyenne des images (l'inégalité s'inverse pour une fonction convexe).
$$\mathbb E_q[f(z)]\ \le\ f\big(\mathbb E_q[z]\big)\qquad(f\ \text{concave})$$

## Énoncé

1. $f$ concave ($\iff-f$ convexe) : $\mathbb E_q[f(z)]\le f(\mathbb E_q[z])$.
2. **Forme généralisée** (on remplace $z$ par $g(z)$) : $\mathbb E_q[f(g(z))]\le f(\mathbb E_q[g(z)])$. Avec $f=\log$ :
$$\log\mathbb E_q[g(z)]\ \ge\ \mathbb E_q[\log g(z)].$$
3. **Cas d'égalité** : si $f$ est **strictement** concave, l'inégalité est stricte **sauf si la variable est dégénérée** (une seule valeur possible), i.e. $g(z)$ constante $q$-presque partout.

## Hypothèses

$f$ concave ; espérances finies ; $q$ quelconque (fixée).

## Preuve

Non faite en classe ; illustration graphique (fig. 12.2 des notes 2020). Pour deux points $z_1,z_2$ et $q$ de masse $(\lambda,1-\lambda)$ : $\mathbb E[f(z)]=\lambda f(z_1)+(1-\lambda)f(z_2)$ est un point de la **corde** entre $(z_1,f(z_1))$ et $(z_2,f(z_2))$, qui est sous le graphe d'une fonction concave, donc $\le f(\lambda z_1+(1-\lambda)z_2)=f(\mathbb E[z])$. C'est exactement la définition de la concavité ; le cas général s'obtient par récurrence (lois discrètes) ou par un argument de tangente : $f(z)\le f(m)+f'(m)(z-m)$ avec $m=\mathbb E[z]$, puis on prend l'espérance.

## Corollaires / Conséquences

- **Borne de l'EM** : $\log p(x)=\log\mathbb E_q\big[\frac{p(x,z)}{q(z)}\big]\ge\mathbb E_q\big[\log\frac{p(x,z)}{q(z)}\big]$ → [[C - Borne inférieure de la log-vraisemblance (ELBO)]]. Le cas d'égalité donne l'étape E : $q(z)\propto p(x,z)$.
- **Positivité de la KL** : $-D_{KL}(p\,\|\,q)=\mathbb E_p\big[\log\frac qp\big]\le\log\mathbb E_p\big[\frac qp\big]=\log1=0$ → [[C - Divergence de Kullback-Leibler]].

## Flashcards
#flashcards/IFT6269/10-non-supervise

Inégalité de Jensen pour une fonction concave ?::$\mathbb E_q[f(z)]\le f(\mathbb E_q[z])$ (inversée pour une fonction convexe).

Forme de Jensen utilisée pour l'EM ?::$\log\mathbb E_q[g(z)]\ge\mathbb E_q[\log g(z)]$, car $\log$ est concave.

Quand l'inégalité de Jensen est-elle une égalité pour une $f$ strictement concave ?::Seulement si la variable est dégénérée, i.e. $g(z)$ est constante sous $q$.

Montre que $D_{KL}(p\,\|\,q)\ge0$ avec Jensen.
?
$-D_{KL}(p\,\|\,q)=\mathbb E_p[\log(q/p)]\le\log\mathbb E_p[q/p]=\log\sum_xq(x)=0$.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Borne inférieure de la log-vraisemblance (ELBO)]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Optimisation Convexe]]
- [[T - Dé-randomisation (perte convexe)]]
