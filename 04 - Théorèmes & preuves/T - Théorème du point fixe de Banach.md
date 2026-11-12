---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Dans un espace métrique **complet**, toute application **contractante** $T$ (il existe $L < 1$ tel que $d(T(x), T(x')) \le L\, d(x, x')$) admet un **unique point fixe** $x^*$, et la suite $x_{t+1} = T(x_t)$ y converge depuis n'importe quel point de départ.

$$d(x_t, x^*) \le L^t\, d(x_0, x^*)$$

## Intuition
Chaque application de $T$ rapproche les points d'un facteur $L$ : les itérés forment une suite de Cauchy qui converge (l'espace est complet), et deux points fixes distincts seraient à la fois à distance $d$ et à distance $\le Ld < d$, ce qui est impossible.

## Formalisme / Dérivation
1. $d(x_{t+1}, x_t) \le L^t d(x_1, x_0)$ par récurrence.
2. Pour $n > t$ : $d(x_n, x_t) \le \sum_{k=t}^{n-1} L^k d(x_1,x_0) \le \frac{L^t}{1-L} d(x_1,x_0) \to 0$ : suite de Cauchy, donc convergente vers un $x^*$.
3. $T$ est continue (lipschitzienne), donc $x^* = \lim T(x_t) = T(x^*)$.
4. **Unicité** : si $T(x^*)=x^*$ et $T(y^*)=y^*$, alors $d(x^*,y^*) \le L\, d(x^*,y^*)$, donc $d = 0$.

## Exemple
$T(x) = \cos(x)$ sur $[0,1]$ ($|T'| \le \sin 1 < 1$) : l'itération converge vers $x^* \approx 0{,}739$.

## IFT6135 — usage
Preuve de l'inversibilité des [[M - ResNet inversible (i-ResNet)|ResNets inversibles]] : pour $y$ fixé, $T(x) = y - g(x)$ est contractante si $\mathrm{Lip}(g) < 1$, et son point fixe vérifie $x^* + g(x^*) = y$.

## Flashcards
#flashcards/IFT6135/10-generatifs

Énoncé du théorème du point fixe de Banach ?::Une application contractante ($L<1$) sur un espace métrique complet a un unique point fixe, et l'itération $x_{t+1}=T(x_t)$ y converge depuis tout point de départ.

Pourquoi le point fixe est-il unique ?::Deux points fixes vérifieraient $d(x^*,y^*)\le L\,d(x^*,y^*)$ avec $L<1$, donc $d=0$.

Quelle application contractante utilise-t-on pour inverser $f(x)=x+g(x)$ ?::$T(x)=y-g(x)$ : contractante si $\mathrm{Lip}(g)<1$, et son point fixe vérifie $f(x^*)=y$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Optimisation & calcul matriciel]]
- [[C - Continuité de Lipschitz]]
- [[M - ResNet inversible (i-ResNet)]]
