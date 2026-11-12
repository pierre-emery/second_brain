---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
**Dualité lagrangienne** : à tout problème d'optimisation contraint (le **primal**) on associe un problème **dual**, obtenu en échangeant $\inf$ et $\sup$ dans le [[C - Lagrangien|lagrangien]]. Le dual donne toujours une **borne inférieure** du primal, et la même valeur sous des conditions comme celle de [[C - Condition de Slater|Slater]].
$$\underbrace{\sup_{\lambda\ge0,\nu}\ \inf_xL(x,\lambda,\nu)}_{d^*}\ \le\ \underbrace{\inf_x\ \sup_{\lambda\ge0,\nu}L(x,\lambda,\nu)}_{p^*}$$

## Intuition

Le primal : « je choisis $x$, puis l'adversaire choisit la pire pénalité ». Le dual : « l'adversaire s'engage d'abord sur une pénalité, puis je choisis le meilleur $x$ ». Jouer en second est toujours un avantage, d'où $\sup\inf\le\inf\sup$. Le dual est souvent plus simple (concave, moins de variables) et sa solution permet de reconstruire celle du primal.

## Formalisme

**Primal convexe** : $\min_xf(x)$ s.c. $f_j(x)\le0$ ($f_j$ convexes, $j=1..m$), $g_k(x)=0$ ($g_k$ affines, $k=1..n$). Lagrangien $L(x,\lambda,\nu)=f(x)+\sum_j\lambda_jf_j(x)+\sum_k\nu_kg_k(x)$.

**Fonction duale** : $g(\lambda,\nu)\triangleq\inf_xL(x,\lambda,\nu)$. Elle est **toujours concave** (infimum de fonctions affines en $(\lambda,\nu)$), même si le primal ne l'est pas.

**Problème dual** : $\sup_{\lambda\ge0,\ \nu}g(\lambda,\nu)=d^*$.

**Dualité faible** (toujours vraie) : $g(\lambda,\nu)\le p^*$ pour tout $\lambda\ge0,\nu$, où $p^*=\inf\{f(x):x\text{ réalisable}\}$ ; donc $d^*\le p^*$.

**Dualité forte** : $d^*=p^*$. Pour un primal convexe, une condition suffisante est la [[C - Condition de Slater]] (une condition de qualification des contraintes parmi d'autres).

**Reconstruire le primal** : une fois $(\lambda^*,\nu^*)$ trouvés, on obtient souvent $x^*(\lambda^*,\nu^*)$ grâce aux [[C - Conditions KKT|conditions KKT]] (équations nécessaires vérifiées par les optima primal et dual quand la dualité forte tient).

## Exemple

Maximum d'entropie avec contraintes de moments : le dual est le maximum de vraisemblance dans la famille exponentielle → [[T - Équivalence maximum de vraisemblance et maximum d'entropie]].

## Remarques

- Référence : Boyd & Vandenberghe, *Convex Optimization*, chapitre 5.
- Note initiale de Pierre, conservée : « sera rempli avec ift2505 » (la section IFT2505 reste à ajouter).

## Flashcards
#flashcards/IFT6269/16-theorie-information

Comment obtient-on le problème dual à partir du primal ?::On écrit le primal comme $\inf_x\sup_{\lambda\ge0,\nu}L$, puis on échange : $\sup_{\lambda\ge0,\nu}\inf_xL$, i.e. maximiser $g(\lambda,\nu)=\inf_xL(x,\lambda,\nu)$.

Pourquoi la fonction duale est-elle toujours concave ?::C'est un infimum (sur $x$) de fonctions affines en $(\lambda,\nu)$.

Dualité faible vs dualité forte ?::Faible : $d^*\le p^*$, toujours vraie (car $\sup\inf\le\inf\sup$). Forte : $d^*=p^*$, garantie p. ex. par la condition de Slater pour un primal convexe.

À quoi servent les conditions KKT une fois le dual résolu ?::À reconstruire la solution primale $x^*$ à partir des multiplicateurs optimaux $(\lambda^*,\nu^*)$ quand la dualité forte tient.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Lagrangien]]
- [[C - Condition de Slater]]
- [[C - Conditions KKT]]
- [[C - Optimisation Convexe]]
- [[T - Équivalence maximum de vraisemblance et maximum d'entropie]]
