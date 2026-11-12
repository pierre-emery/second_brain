---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Condition suffisante de **dualité forte** pour un problème d'optimisation **convexe** : s'il existe un point **strictement réalisable** pour les contraintes d'inégalité non linéaires, alors la valeur du dual égale la valeur du primal ($d^*=p^*$).
$$\exists\,x\in\mathrm{int}(\mathrm{dom}\,f)\ \text{réalisable tel que}\ f_j(x)<0\ \ \text{pour tout } f_j \text{ non linéaire}\ \Longrightarrow\ d^*=p^*$$

## Intuition

La [[C - Dualité|dualité faible]] $d^*\le p^*$ est toujours vraie. Pour que l'écart se referme, il faut un peu de « régularité » du domaine réalisable : la condition de Slater exige qu'il ait un **intérieur** (on peut satisfaire strictement les contraintes non linéaires). Les contraintes affines peuvent rester des égalités. C'est un exemple de **condition de qualification des contraintes** ; il en existe d'autres.

## Formalisme

Problème primal convexe : $\min_xf(x)$ s.c. $f_j(x)\le0$ ($f_j$ convexes), $g_k(x)=0$ ($g_k$ affines). Si Slater est vérifiée :
- dualité forte, $d^*=\sup_{\lambda\ge0,\nu}g(\lambda,\nu)=p^*$ ;
- les [[C - Conditions KKT|conditions KKT]] permettent de reconstruire $x^*$ à partir de $(\lambda^*,\nu^*)$.

## Exemple

Maximum d'entropie avec contraintes de moments : toutes les contraintes sont **affines** en $q$, donc la condition est vérifiée dès que le problème est réalisable. Dualité forte → le dual (MLE de la famille exponentielle) donne la même valeur ([[T - Équivalence maximum de vraisemblance et maximum d'entropie]]).

## Flashcards
#flashcards/IFT6269/16-theorie-information

Énonce la condition de Slater.::Pour un problème convexe, il existe un point réalisable dans l'intérieur du domaine de $f$ qui satisfait strictement ($f_j(x)<0$) toutes les contraintes d'inégalité non linéaires. Elle implique la dualité forte.

Que garantit la condition de Slater, et pour quel type de problème ?::La dualité forte $d^*=p^*$, pour un problème primal convexe.

Pourquoi les contraintes affines n'ont-elles pas besoin d'être strictes dans Slater ?
?
Seules les contraintes d'inégalité non linéaires doivent être satisfaites strictement. Les contraintes affines (égalités ou inégalités) n'empêchent pas la dualité forte dès que le problème est réalisable.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Dualité]]
- [[C - Conditions KKT]]
- [[C - Optimisation Convexe]]
