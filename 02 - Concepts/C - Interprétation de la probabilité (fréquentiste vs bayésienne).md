---
type: concept
cours: IFT6269
statut: à réviser
maj: 2026-09-08
---

La théorie des probabilités peut servir à générer/inférer des données à partir d'un modèle (un problème bien posé). À l'inverse, la statistique infère un modèle à partir de données observées (malheureusement, ce problème est mal posé).
$$\underbrace{\theta \longrightarrow \text{données } X}_{\text{théorie des probabilités}} \qquad\qquad \underbrace{X \longrightarrow \theta}_{\text{statistique}}$$
Exemple : un modèle générant $n$ lancers de pièce indépendants. En probabilité, on calcule la probabilité d'obtenir $k$ faces d'affilée (modèle connu, pas de données). En statistique, on observe seulement des données (ex. $k$ faces sur $n$ lancers) et on infère le paramètre du modèle (ex. le biais de la pièce).

Au-delà de ce problème mal posé, le **sens même** d'une probabilité diffère selon l'école de pensée.

## L'école fréquentiste

$$P(X=x) \text{ représente la fréquence relative limite d'observer } X=x \text{ si on pouvait répéter une infinité d'expériences i.i.d.}$$ Voir [[T - Loi des grands nombres]] et [[T - Théorème central limite]] pour la justification formelle (convergence et concentration de la moyenne empirique). Ce point de vue sous-tend l'[[C - Estimateur du Maximum de Vraisemblance (MLE)|estimation par maximum de vraisemblance]] et la [[C - Statistique fréquentiste|statistique fréquentiste]] en général, où $\theta$ est traité comme un **paramètre fixe et inconnu**.

## L'école bayésienne

$$P(X=x) \text{ encode la « croyance » d'un agent que } X=x$$ Les lois de la probabilité caractérisent une façon « rationnelle » de combiner croyances et évidence (observations) et est motivé notamment par la théorie de la décision et les paris. Dans cette approche, **toute quantité incertaine est traitée comme une variable aléatoire**, y compris les paramètres (voir [[C - Modèle Bayésien]], [[C - Distribution à priori]] et [[C - Distribution à postériori]]).

## Exemple comparatif : MLE vs estimateur bayésien

Pour $X \sim \mathrm{Bin}(n,\theta)$ observé, $x$ succès :

- **Fréquentiste (MLE)** : $\widehat\theta_{\text{MLE}}(x) = \dfrac{x}{n}$
- **Bayésien** (avec prior uniforme $\theta\sim\mathrm{Beta}(1,1)$, donc a postériori $\theta\mid x \sim \mathrm{Beta}(x+1,n-x+1)$) : l'estimateur bayésien usuel est la **moyenne a postériori** $$\widehat\theta_{\text{Bayes}}(x) \triangleq E[\theta\mid X=x] = \frac{x+1}{n+2}$$ (en utilisant $E[\mathrm{Beta}(\alpha,\beta)] = \frac{\alpha}{\alpha+\beta}$, voir [[D - Beta]]).

Le MLE est **non biaisé**, alors que l'estimateur bayésien est **biaisé mais asymptotiquement non biaisé**. Par contre, l'estimateur bayésien encode une incertitude résiduelle : même si toutes les observations sont des faces, il garde une petite probabilité pour un pile contrairement au MLE, qui a tendance à [[C - Surapprentissage|sur-apprendre (overfitting)]] dans ce cas extrême.

> Dérivation (marginalisation + règle de la chaîne) de $P(F=1\mid X=x)$ pour le prochain lancer $F$ : $$P(F=1\mid X=x) = \int_\theta P(F=1\mid\theta,X=x),\pi(\theta\mid x),d\theta = \int_\theta \theta,\pi(\theta\mid x),d\theta = E_\theta[\theta\mid X=x]$$ (on utilise $P(F=1\mid\theta,X=x)=\theta$ par définition du modèle).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Statistique fréquentiste]]
- [[C - Modèle Bayésien]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[T - Loi des grands nombres]]
- [[T - Théorème central limite]]
- [[D - Binomiale]]
- [[D - Beta]]