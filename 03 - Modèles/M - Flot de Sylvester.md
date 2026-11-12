---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Sylvester flow** (van den Berg et al. 2018) : généralisation du [[M - Flot planaire|flot planaire]] à une perturbation de **rang $d$** (au lieu de 1), dont le déterminant se calcule par l'[[T - Identité du déterminant de Sylvester|identité de Sylvester]].

$$f(x) = x + A\,h(Bx + b),\qquad A\in\mathbb R^{m\times d},\ B\in\mathbb R^{d\times m},\ b\in\mathbb R^d,\ d\le m$$

## Intuition
Au lieu de déformer l'espace selon une seule direction, chaque couche le déforme selon $d$ directions à la fois. Le « goulot » de dimension $d$ garde le déterminant bon marché : on calcule un déterminant $d\times d$ plutôt que $m\times m$.

## Formalisme
- **Inversibilité** : conditions semblables à celles du flot planaire.
- **Déterminant du jacobien** : $\frac{\partial f}{\partial x} = I_m + A\,\mathrm{diag}\big(h'(Bx+b)\big)B$, puis, par le théorème de Sylvester $\det(I_m + AB) = \det(I_d + BA)$ :
$$\det\frac{\partial f}{\partial x} = \det\Big(I_d + \mathrm{diag}\big(h'(Bx+b)\big)\,BA\Big),$$
un déterminant $d\times d$ seulement. Dans l'article, $A$ et $B$ sont paramétrés (orthogonal × triangulaire) pour que ce déterminant soit encore plus simple.

## Exemple
Comparaison (-ELBO et NLL) sur Freyfaces, Omniglot et Caltech 101 : les variantes O-SNF, H-SNF et T-SNF font mieux que le VAE, le flot planaire et IAF sur Omniglot et Caltech 101 (par exemple Omniglot NLL : VAE 97,25 ; planaire 96,04 ; H-SNF 93,77).

## Flashcards
#flashcards/IFT6135/10-generatifs

Forme d'une couche de flot de Sylvester ?::$f(x)=x+A\,h(Bx+b)$, avec $A\in\mathbb R^{m\times d}$, $B\in\mathbb R^{d\times m}$, $d\le m$.

Pourquoi le déterminant d'un flot de Sylvester est-il bon marché ?::$\det(I_m+AB)=\det(I_d+BA)$ : on calcule un déterminant $d\times d$ au lieu de $m\times m$.

Lien entre flot planaire et flot de Sylvester ?::Le planaire est le cas $d=1$ (perturbation de rang 1) ; Sylvester généralise à un rang $d$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[M - Flot planaire]]
- [[T - Identité du déterminant de Sylvester]]
- [[C - Déterminant d'une matrice]]
