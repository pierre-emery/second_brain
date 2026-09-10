---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-09
---

## Erreur standard

Pour un [[C - Estimateur Ponctuel|estimateur]] $\widehat\theta$, l'**erreur standard** $SE(\widehat\theta)$ est la racine carrée de sa variance : $SE(\widehat\theta) = \sqrt{\text{Var}(\widehat\theta)}$. Elle mesure à quel point on s'attend à ce que l'estimé varie si on rééchantillonnait indépendamment le jeu de données depuis le processus générateur sous-jacent.

**Attention** : ni la racine carrée de la variance échantillonnale, ni celle de l'estimateur non biaisé de la variance, ne donnent un estimé non biaisé de l'écart-type. Les deux ont tendance à sous-estimer le véritable écart-type (l'estimateur non biaisé de la variance sous-estime moins). Pour $m$ grand, l'approximation reste raisonnable en pratique.

## Cas de la moyenne échantillonnale

Pour un échantillon assez grand ($T$ grand), la quantité suivante est approximativement gaussienne de moyenne 0 et variance 1 :

$$\frac{\widehat\mu - \mu}{\sqrt{\widehat\sigma^2/T}}$$

L'erreur standard de la moyenne est donc $SE(\widehat\mu_m) = \sigma/\sqrt{m}$.

## Intervalle de confiance

On en déduit un intervalle de confiance à 95 % pour la vraie moyenne $\mu$ :

$$\mu \in \widehat\mu \pm 1.96\sqrt{\widehat\sigma^2/T}$$

## Usage en apprentissage automatique

L'erreur standard de la moyenne est très utile pour estimer l'erreur de généralisation : on calcule la moyenne empirique de l'erreur sur l'ensemble de test, et le nombre d'exemples de test détermine la précision de cette estimation. En pratique, on dit souvent qu'un algorithme A est meilleur qu'un algorithme B si la borne supérieure de l'intervalle de confiance à 95 % de l'erreur de A est inférieure à la borne inférieure de l'intervalle de confiance de B.

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[D - Loi Gaussienne (Normale)]]
- [[C - Estimateur Ponctuel]]
- [[C - Compromis Biais-Variance]]