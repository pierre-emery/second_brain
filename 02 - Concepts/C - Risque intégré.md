---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
Le risque intégré de la règle de décision $\delta$ est $$\begin{align*}
r(\pi,\delta)&=\mathbb E_\theta [R(\theta,\delta)]\\
&=\mathbb E_\theta[\mathbb E_{X|\theta}[L(\theta,\delta(X))]]
\end{align*}$$
# Note
Comme $r(\pi,\delta)$ est un nombre nous pouvons nous en servir pour ordonner les règles de décision.

## Critère de pondération (IFT6269)

On choisit une pondération $\pi(\theta)$ sur $\Theta$ (interprétable comme un a priori) et on moyenne le profil de risque :
$$\delta^*_{\text{weight}} = \arg\min_\delta \int_\Theta R(P_\theta,\delta)\,\pi(\theta)\,d\theta$$
Plus de poids sur les $\theta$ jugés importants pour le phénomène étudié.

## Lien avec la procédure bayésienne : le « diamant » (Fubini)

Partant de la perte $L(P_\theta,\delta(D))$, on peut intégrer dans deux ordres :

```
                L(P_θ, δ(D))
     E_{D~p(·|θ)} ↙          ↘ E_{θ~π(·|D)}
         R(P_θ, δ)            R_B(δ | D)
       E_{θ~π(·)} ↘          ↙ E_{D~p(·)}
              résumé pondéré
```
où $p(\cdot)=\int_\Theta p(\cdot\mid\theta)\pi(\theta)d\theta$ est la marginale de $D$. Par Fubini, les deux chemins donnent le **même** résumé pondéré. Comme la [[C - Perte Espérée à postériori|procédure bayésienne]] minimise $R_B(\delta\mid D)$ **pour chaque $D$**, elle minimise aussi son espérance sur $D$ : **la procédure bayésienne est optimale pour le risque pondéré quand $\pi$ = l'a priori**.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Risque Fréquentiste]]
- [[C - Perte Espérée à postériori]]
- [[C - Estimateur de Bayes]]

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Critère de pondération d'une règle ?::$\delta^*=\arg\min_\delta\int_\Theta R(P_\theta,\delta)\pi(\theta)d\theta$, avec $\pi$ une pondération (≈ a priori).

Pourquoi la procédure bayésienne minimise-t-elle le risque pondéré (avec $\pi$ = a priori) ?::Par Fubini, le résumé pondéré = $\mathbb E_{D}[R_B(\delta\mid D)]$ ; la règle bayésienne minimise $R_B(\delta\mid D)$ pour chaque $D$, donc aussi son espérance.
