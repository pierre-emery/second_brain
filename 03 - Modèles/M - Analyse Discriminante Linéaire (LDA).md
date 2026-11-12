---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Intuition

Approche **[[C - Approches génératives, conditionnelles et discriminantes|générative]]** de la classification binaire (Fisher LDA). Au lieu de modéliser seulement $p(y\mid x)$ comme la [[M - Régression Logistique (Binaire)|régression logistique]], on modélise toute la jointe $p(x,y)=p(y)\,p(x\mid y)$ avec des **classes conditionnelles gaussiennes de même covariance**. Les paramètres s'estiment en **forme fermée** par maximum de vraisemblance, puis on prédit avec $p(y\mid x)$ via Bayes.

> Généralise le *discriminant linéaire de Fisher* (combinaison linéaire de caractéristiques pour classifier). Ne pas confondre avec LDA = *Latent Dirichlet Allocation*.

## Idée générale / Formalisation

$X\in\mathbb R^d$, $Y\in\{0,1\}$ :
$$Y\sim\text{Bernoulli}(\pi):\quad p(y\mid\pi)=\pi^y(1-\pi)^{1-y}$$
$$X\mid Y=j\sim\mathcal N(\mu_j,\Sigma):\quad p(x\mid y=j)=\frac{1}{(2\pi)^{d/2}|\Sigma|^{1/2}}\exp\!\Big(-\tfrac12(x-\mu_j)^\top\Sigma^{-1}(x-\mu_j)\Big)$$
Paramètres $\theta=(\pi,\mu_0,\mu_1,\Sigma)$ ; **$\Sigma$ est partagée** par les deux classes (moyennes différentes, même forme d'ellipse).

**Prédiction** : par [[T - Classes conditionnelles exponentielles et régression logistique|le résultat général sur la famille exponentielle]], $p(y=1\mid x;\theta)=\sigma(w^\top\phi(x))$ avec $\phi(x)=(x,1)$ et $w$ fonction de $(\pi,\mu_0,\mu_1,\Sigma)$ → **frontière de décision linéaire**.

**QDA** (*quadratic discriminant analysis*) : covariances distinctes $\Sigma_0\ne\Sigma_1$ ⇒ $\phi(x)$ contient des termes quadratiques en $x$ → frontière **quadratique**.

## Algorithme (étapes)

1. Estimer $\widehat\theta$ par MLE joint sur $D=\{(x^{(i)},y^{(i)})\}_{i=1}^n$ — en forme fermée (exercice du **devoir 2** ; nécessite les [[C - Différentielle (calcul matriciel)|différentielles matricielles]] de la [[C - Distance de Mahalanobis|distance de Mahalanobis]] et du [[T - Différentielle du log-déterminant|log-déterminant]]).
2. Prédire $p(y\mid x;\widehat\theta)$.

## Modèle graphique

En [[C - Notation en plaques|notation en plaques]] : $\pi\to Y_i\to X_i\leftarrow\theta$, plaque sur $i=1,\dots,n$, avec $X_i$ et $Y_i$ observés.

## Avantages / Limites

**Avantages** : MLE en forme fermée (pas d'optimisation itérative) ; modèle génératif (gère $p(x)$, données manquantes).

**Limites** : hypothèse gaussienne à covariance partagée potentiellement fausse → moins robuste que la régression logistique pour la prédiction.

## Lien avec le mélange de gaussiennes

LDA est le cas **supervisé** : les étiquettes $y_i$ sont observées, et le MLE est en forme fermée. Si on retire les étiquettes, on obtient un [[M - Mélange de gaussiennes (GMM)|mélange de gaussiennes]] ; l'[[A - Algorithme EM (espérance-maximisation)|EM]] « remplit » alors les étiquettes manquantes par des valeurs souples (étape E), puis refait le MLE de type LDA avec ces poids (étape M).

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Modèle génératif de LDA ?::$Y\sim\text{Bernoulli}(\pi)$, $X\mid Y=j\sim\mathcal N(\mu_j,\Sigma)$ avec **la même** covariance $\Sigma$ pour les deux classes.

Forme de $p(y=1\mid x)$ sous LDA ?::$\sigma(w^\top(x,1))$ : frontière de décision linéaire.

LDA vs QDA ?::LDA : covariance partagée → frontière linéaire. QDA : covariances distinctes → frontière quadratique.

LDA vs régression logistique ?::LDA est générative (modélise $p(x,y)$, MLE en forme fermée) ; la logistique est conditionnelle (modélise $p(y\mid x)$, plus robuste, optimisation itérative).

Lien entre LDA et l'EM pour un GMM ?::LDA = MLE avec étiquettes observées. Sans étiquettes, l'EM les remplace par des responsabilités souples (E), puis refait le même MLE pondéré (M).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Régression Logistique (Binaire)]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
- [[D - Loi Gaussienne (Normale)]]
- [[D - Bernoulli]]
- [[C - Approches génératives, conditionnelles et discriminantes]]
- [[M - Mélange de gaussiennes (GMM)]]
- [[A - Algorithme EM (espérance-maximisation)]]
