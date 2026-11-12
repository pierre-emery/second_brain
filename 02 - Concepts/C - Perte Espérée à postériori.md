---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
La perte espérée à postériori si nous avons observé x est $$p(\pi,\delta(x)\mid x) = \mathbb E_{\theta|x}[L(\theta,\delta(x))|x]=\mathbb E_ \theta[L(\theta,a)]$$$$= \int _\Theta L(\theta,\delta(x))\pi(\theta|x)d\theta$$
La perte espérée à postériori est une fonction de l'échantillon observé x.
Pour un échantillon donné, la meilleure décision consiste à minimiser la perte espérée à postériori

## Critère bayésien (IFT6269)

Contrairement au minimax et à la pondération, ce critère **utilise les données observées**. Le **risque bayésien a posteriori** :
$$R_B(\delta\mid D)=\int_\Theta L(P_\theta,\delta(D))\,p(\theta\mid D)\,d\theta$$
et la règle optimale :
$$\delta^*_{\text{bayes}}(D)=\arg\min_{\delta} R_B(\delta\mid D)$$

- Le bayésien traite toute quantité incertaine par des probabilités : la [[C - Distribution à postériori|postérieure]] résume tout ce qu'on sait sur $\theta$ ; une fois $\theta$ intégré, il n'y a plus d'incertitude, la perte dit simplement comment agir.
- $\delta^*_{\text{bayes}}$ est **la seule procédure à utiliser pour un bayésien** : pas besoin de se soucier de minimax, de risque fréquentiste, etc. Il ne s'intéresse pas à ce qui arriverait pour d'autres $D$.
- Un fréquentiste peut quand même analyser cette procédure : la plupart des règles bayésiennes sont [[C - Admissibilité|admissibles]], et elles sont optimales pour le [[C - Risque intégré|risque pondéré]] (diamant de Fubini).
- Exercice : sous perte quadratique, $\delta^*_{\text{bayes}}(D)=\mathbb E[\theta\mid D]$ → [[E - Estimateur de Bayes sous perte quadratique]].

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Estimateur de Bayes]]
- [[C - Risque intégré]]
- [[E - Estimateur de Bayes sous perte quadratique]]

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Risque bayésien a posteriori ?::$R_B(\delta\mid D)=\int_\Theta L(P_\theta,\delta(D))\,p(\theta\mid D)\,d\theta$.

Règle bayésienne optimale ?::$\delta^*_{\text{bayes}}(D)=\arg\min_\delta R_B(\delta\mid D)$ (minimiser la perte espérée a posteriori pour le $D$ observé).

Différence clé entre critère bayésien et critères minimax/pondéré ?::Le bayésien conditionne sur les données observées $D$ ; les deux autres moyennent/maximisent sur des $D$ hypothétiques.
