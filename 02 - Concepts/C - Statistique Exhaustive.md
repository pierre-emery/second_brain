---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Soit $X_i \sim f(x|\theta), i =1,...,n$. Une statistique $T(X)$ est dite exhaustive si la densité conditionnelle $f(x|T(X) = t)$ est indépendante de $\theta$.
Une statistique exhaustive pour un paramètre $\theta$ est une statistique qui capture toute l'information sur $\theta$ disponible dans l'échantillon.

## IFT6269 — définition bayésienne

$T(X)$ est **suffisante** (exhaustive) pour une famille paramétrique $p_\theta$ si
$$\theta\perp\!\!\!\perp X\mid T(X).$$
Cette définition adopte le **point de vue bayésien** ($\theta$ est une variable aléatoire) : une fois $T(X)$ connue, les données n'apportent plus aucune information sur $\theta$. La définition fréquentiste ci-dessus ($f(x\mid T(X)=t)$ ne dépend pas de $\theta$) est équivalente ; le lien passe par le [[T - Critère de factorisation de Neyman|critère de factorisation de Fisher-Neyman]].

Dans une [[D - Famille exponentielle|famille exponentielle]] $h(x)\exp\{\eta^\top T(x)-A(\eta)\}$, $T(x)$ est suffisante ; pour $n$ données i.i.d., $\sum_iT(x^{(i)})$ l'est (le MLE ne dépend que des moments empiriques $\hat\mu_n$).

## Flashcards
#flashcards/IFT6269/17-famille-exponentielle

Définition bayésienne d'une statistique suffisante ?::$\theta\perp\!\!\!\perp X\mid T(X)$ : sachant $T(X)$, les données n'apportent plus d'information sur $\theta$.

Quel théorème relie les définitions bayésienne et fréquentiste de la suffisance ?::Le critère de factorisation de Fisher-Neyman.

Quelle est la statistique suffisante de $n$ données i.i.d. dans une famille exponentielle ?::$\sum_iT(x^{(i)})$ (de façon équivalente, les moments empiriques $\hat\mu_n$).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[T - Critère de factorisation de Neyman]]
- [[D - Famille exponentielle]]
