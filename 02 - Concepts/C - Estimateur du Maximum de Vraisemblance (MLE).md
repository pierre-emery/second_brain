---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: à réviser
maj: 2026-09-09
---

Estimateur des paramètres $\theta$ qui maximise la vraisemblance des données observées :

$$\widehat\theta = \arg\max_\theta\ p(\mathbf{x}^{(1)},\ldots,\mathbf{x}^{(T)})$$

**Exemple (gaussienne)** : la moyenne échantillonnale $\widehat{\boldsymbol\mu}$ est le MLE de $\boldsymbol\mu$. La matrice de covariance échantillonnale (avec $T-1$) n'est **pas** le MLE. Le MLE utilise plutôt $T$ :

$$\frac{T-1}{T}\widehat\Sigma = \frac{1}{T}\sum_t (\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})(\mathbf{x}^{(t)}-\widehat{\boldsymbol\mu})^\top$$

## Astuce du logarithme

Le produit $\prod_t p(\mathbf{x}^{(t)};\theta)$ est numériquement peu pratique (sujet à l'[[C - Erreur d'arrondi et Dépassement de capacité (Overflow-Underflow)|underflow]]). Prendre le logarithme ne change pas l'$\arg\max$ mais transforme le produit en somme, et diviser par $T$ (ce qui ne change pas non plus l'$\arg\max$) exprime le critère comme une espérance sous la distribution empirique $\widehat p_{\text{data}}$ :

$$\widehat\theta_{\text{ML}} = \arg\max_\theta\ \mathbb{E}_{\mathbf{x}\sim\widehat p_{\text{data}}}\big[\log p(\mathbf{x};\theta)\big]$$

## Interprétation : minimiser la divergence KL

Le MLE peut être vu comme la minimisation de la [[C - Divergence de Kullback-Leibler|divergence KL]] entre la distribution empirique $\widehat p_{\text{data}}$ et la distribution du modèle ce qui correspond exactement à minimiser l'**entropie croisée** entre les deux.

## Généralisation au cas conditionnel

Le MLE se généralise directement à l'estimation d'une probabilité conditionnelle $P(y\mid \mathbf{x};\theta)$. La situation la plus courante en apprentissage supervisé :

$$\theta_{\text{ML}} = \arg\max_\theta \sum_t \log P(y^{(t)}\mid \mathbf{x}^{(t)};\theta)$$

**Exemple** : en supposant $p(y\mid\mathbf{x}) = \mathcal{N}(y;\widehat y(\mathbf{x};\mathbf{w}),\sigma^2)$, maximiser la log-vraisemblance conditionnelle par rapport à $\mathbf{w}$ donne exactement le même optimum que minimiser l'[[C - Perte quadratique (MSE)|erreur quadratique moyenne]] ce qui justifie l'usage de la MSE comme critère d'entraînement pour la [[A - Régression Linéaire|régression linéaire]] du point de vue du maximum de vraisemblance.

## Propriétés : pourquoi le MLE est souvent préféré

Sous certaines conditions (la vraie distribution $p_{\text{data}}$ doit appartenir à la famille de modèles considérée, et correspondre à une unique valeur de $\theta$), le MLE est :

- **[[C - Consistance d'un Estimateur|Consistant]]** : converge vers le vrai $\theta$ quand $T\to\infty$.
- **Statistiquement efficace** : parmi les estimateurs consistants, pour $T$ grand, aucun n'atteint une MSE plus faible que le MLE (borne de Cramér-Rao).

C'est pour ces deux raisons (consistance et efficacité) que le MLE est souvent l'estimateur de choix en apprentissage automatique. Quand le nombre d'exemples est trop petit et cause du surapprentissage, des stratégies de [[C - Régularisation|régularisation]] permettent d'obtenir une version biaisée du MLE, avec moins de variance.

## Exemple (Binomiale, IFT6269)

Pour $X \sim \mathrm{Bin}(n,\theta)$ observé, $x$ succès sur $n$ essais : $$\widehat\theta_{\text{MLE}}(x) = \frac{x}{n}$$ Le MLE est **non biaisé** ($E[\widehat\theta_{\text{MLE}}]=\theta$), mais il a tendance à sur-apprendre (overfitting) sur peu de données : si toutes les observations sont des succès ($x=n$), le MLE donne $\widehat\theta=1$ avec une confiance totale, sans encoder d'incertitude résiduelle. Comparer avec l'estimateur bayésien (voir [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]).

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Vraisemblance]]
- [[C - Hypothèse i.i.d.]]
- [[C - Interprétation de la probabilité (fréquentiste vs bayésienne)]]
- [[D - Binomiale]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Consistance d'un Estimateur]]
- [[C - Estimateur Ponctuel]]
- [[A - Régression Linéaire]]
- [[C - Perte quadratique (MSE)]]