---
## type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-10-15
---
Méthode générale pour trouver l'[[C - Estimateur du Maximum de Vraisemblance (MLE)|estimateur du maximum de vraisemblance]] $\widehat\theta_{\text{ML}}(x) = \arg\max_{\theta\in\Theta} p(x;\theta)$.

## 1. Passer à la log-vraisemblance

Puisque $\log$ est strictement croissant, maximiser $L(\theta) \triangleq p(x;\theta)$ est équivalent à maximiser $\ell(\theta) \triangleq \log p(x;\theta)$ : $$\widehat\theta_{\text{ML}} = \arg\max_\theta p(x;\theta) = \arg\max_\theta \log p(x;\theta)$$ Le log simplifie les produits (i.i.d. $\Rightarrow$ $L(\theta)=\prod_i p(x_i;\theta)$ devient une somme de logs) et est mathématiquement plus commode à différencier. Convention : si $p(x;\theta)=0$ pour un $\theta$, poser $\ell(\theta)=-\infty$, sans effet sur la maximisation.

## 2. Chercher les points stationnaires

Condition **nécessaire** (si $\theta$ est à l'intérieur de $\Theta$) pour un maximum local : $\nabla_\theta \ell(\theta) = 0$ (ou $\ell'(\theta)=0$ en 1D). Voir [[C - Points Critiques et Optima (local, global, point-selle)]].

## 3. Vérifier l'optimalité

- **Localement** : il faut aussi vérifier $\ell''(\theta) < 0$ (1D) ou que la [[C - Matrice Hessienne|Hessienne]] est définie négative (multivarié), pour distinguer un maximum local d'un minimum local ou point-selle.
- **Globalement** : si $\ell$ est **concave** sur tout $\Theta$ (Hessienne semi-définie négative partout), alors un point stationnaire est automatiquement un maximum **global** — pas besoin de vérifier ailleurs.
- **Attention aux bords** : si l'optimum $\theta^\star$ se trouve sur la **frontière** de $\Theta$, il n'est pas nécessairement un point stationnaire ($\nabla_\theta\ell(\theta^\star)$ peut être non nul). Il faut alors exploiter la monotonie de $\ell$ pour conclure.

## 4. Cas contraint : multiplicateurs de Lagrange

Quand $\Theta$ impose une contrainte d'égalité (ex. le [[C - Simplexe de probabilité|simplexe de probabilité]] $\sum_j \pi_j=1$), on utilise les [[C - Multiplicateurs de Lagrange]] pour transformer le problème contraint en recherche de points stationnaires du Lagrangien.

## Exemples travaillés

- [[E - Exercice MLE Binomiale]]
- [[E - Exercice MLE Multinomiale]]

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Vraisemblance]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
- [[C - Multiplicateurs de Lagrange]]

## Flashcards

#flashcards/IFT6269/04-maximum-vraisemblance

Les étapes de la recherche du MLE ?::(1) Passer à la log-vraisemblance ; (2) chercher les points stationnaires ; (3) vérifier l'optimalité (Hessienne, concavité, bords) ; (4) si contrainte d'égalité, multiplicateurs de Lagrange.

Pourquoi maximiser $\log p(x;\theta)$ donne-t-il le même $\widehat\theta$ que $p(x;\theta)$ ?::Le $\log$ est strictement croissant : il préserve l'$\arg\max$.

Convention si $p(x;\theta) = 0$ pour certains $\theta$ ?::Poser $\ell(\theta) = -\infty$ ; cela ne change pas la maximisation.

Quand $\nabla_\theta \ell(\theta) = 0$ est-il une condition nécessaire pour un maximum ?::Seulement si $\theta$ est à l'intérieur de $\Theta$.

Quand un point stationnaire de $\ell$ est-il automatiquement un maximum global ?::Quand $\ell$ est concave sur tout $\Theta$ (Hessienne semi-définie négative partout).

Que faire si l'optimum est sur la frontière de $\Theta$ ?::Il n'est en général pas stationnaire : on conclut en exploitant la monotonie de $\ell$.