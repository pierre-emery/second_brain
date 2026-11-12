---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-12
---
Mesure de dissimilarité entre deux distributions de probabilité $p$ et $q$ sur le même espace :

$$D_{KL}(p\,\|\,q) = \mathbb{E}_{x\sim p}\big[\log p(x) - \log q(x)\big]$$

## Lien avec le maximum de vraisemblance

On peut interpréter l'[[C - Estimateur du Maximum de Vraisemblance (MLE)|estimation par maximum de vraisemblance]] comme la minimisation de la divergence KL entre la distribution empirique $\widehat p_{\text{data}}$ (définie par l'ensemble d'entraînement) et la distribution du modèle $p_{\text{model}}$ :

$$D_{KL}(\widehat p_{\text{data}}\,\|\,p_{\text{model}}) = \mathbb{E}_{x\sim \widehat p_{\text{data}}}\big[\log \widehat p_{\text{data}}(x)\big] - \mathbb{E}_{x\sim \widehat p_{\text{data}}}\big[\log p_{\text{model}}(x)\big]$$

Le premier terme ne dépend que du processus générateur des données, pas du modèle, donc minimiser la divergence KL revient exactement à minimiser $-\mathbb{E}_{x\sim\widehat p_{\text{data}}}[\log p_{\text{model}}(x)]$, ce qui est la même maximisation que pour le MLE.

## Entropie croisée

Minimiser cette divergence KL correspond exactement à minimiser l'**entropie croisée** entre les deux distributions. Toute perte de la forme « log-vraisemblance négative » est une entropie croisée entre la distribution empirique définie par l'ensemble d'entraînement et la distribution définie par le modèle. Par exemple, l'[[C - Perte quadratique (MSE)|erreur quadratique moyenne]] est l'entropie croisée entre la distribution empirique et un modèle gaussien.

## Interprétation

Le maximum de vraisemblance tente de faire correspondre la distribution du modèle à la distribution empirique $\widehat p_{\text{data}}$. Idéalement, on voudrait faire correspondre la vraie distribution génératrice $p_{\text{data}}$, mais on n'y a jamais directement accès.

## IFT6269 — définition, motivations et propriétés

**Définition (cas discret).**
$$D_{KL}(p\,\|\,q)\triangleq\sum_{x\in\Omega}p(x)\log\frac{p(x)}{q(x)}=\mathbb E_p\Big[\log\frac{p(x)}{q(x)}\Big].$$

**Motivation 1 : estimation de densité (théorie de la décision).** On estime la vraie loi $p_\theta$ par $\hat q$, avec la perte logarithmique (celle du maximum de vraisemblance). La perte statistique est l'[[C - Perte d'Entropie Croisée (Cross-Entropy)|entropie croisée]]
$$L(p_\theta,\hat q)\triangleq\mathbb E_{X\sim p_\theta}[-\log\hat q(X)].$$
La meilleure action $\hat q=p_\theta$ donne $L(p_\theta,p_\theta)=-\sum_xp_\theta(x)\log p_\theta(x)=H(p_\theta)$, l'[[C - Entropie|entropie]]. La **perte excédentaire** est alors
$$L(p,\hat q)-\min_qL(p,q)=L(p,\hat q)-L(p,p)=-\sum_xp(x)\log\frac{\hat q(x)}{p(x)}=D_{KL}(p\,\|\,\hat q).$$
→ La KL est la **log-perte excédentaire** subie en prédisant $\hat q$ au lieu de la vraie loi.

**Motivation 2 : théorie du codage.** La longueur optimale du code d'un symbole $x$ est $-\log_2p(x)$ bits ; la longueur moyenne est $\sum_xp(x)(-\log_2p(x))$ (entropie en bits ; en base $e$, en **nats**). La KL est le **surcoût moyen de longueur de code** quand on code avec $q$ au lieu de la loi optimale $p$.

**Propriétés.**
1. $D_{KL}(p\,\|\,q)\ge0$ ([[T - Inégalité de Jensen|inégalité de Jensen]]).
2. Strictement convexe en chacun de ses arguments.
3. **Non symétrique** : $D_{KL}(p\,\|\,q)\ne D_{KL}(q\,\|\,p)$ en général. Ce n'est pas une distance.
4. $D_{KL}(p\,\|\,p)=0$, et $D_{KL}(p\,\|\,q)>0$ si $p\ne q$.

**Maximum de vraisemblance ⇔ minimisation de la KL.** Soit $\{p_\theta\}_{\theta\in\Theta}$ une famille paramétrique et $\hat p_n(x)=\frac1n\sum_{i=1}^n\delta(x,x^{(i)})$ la loi empirique. Alors ML pour $\theta\iff\min_{\theta\in\Theta}D_{KL}(\hat p_n\,\|\,p_\theta)$. *Preuve :*
$$D_{KL}(\hat p_n\,\|\,p_\theta)=H(\hat p_n)-\sum_x\hat p_n(x)\log p_\theta(x)=H(\hat p_n)-\frac1n\sum_x\sum_{i=1}^n\delta(x,x^{(i)})\log p_\theta(x)=\underbrace{H(\hat p_n)}_{\text{cst en }\theta}-\frac1n\sum_{i=1}^n\log p_\theta(x^{(i)}).$$
Minimiser en $\theta$ revient à maximiser la log-vraisemblance moyenne. $\blacksquare$

**Ordre des arguments** : le MLE minimise $D_{KL}(\hat p_n\,\|\,p_\theta)$ (données en premier) ; le [[C - Loi de maximum d'entropie|maximum d'entropie]] minimise $D_{KL}(q\,\|\,u)$ (modèle en premier).

## IFT6269 — écart de l'EM

Pour un modèle à variables latentes : $\log p(x;\theta)=\mathcal L(q,\theta)+D_{KL}\big(q(\cdot)\,\|\,p(\cdot\mid x;\theta)\big)$. L'écart entre la log-vraisemblance et l'[[C - Borne inférieure de la log-vraisemblance (ELBO)|ELBO]] est une KL ; l'étape E de l'[[A - Algorithme EM (espérance-maximisation)|EM]] l'annule en prenant $q=p(z\mid x;\theta)$.

## Flashcards

#flashcards/IFT6269/16-theorie-information

Interprète la KL comme une perte excédentaire.
?
Avec la log-perte, $L(p,\hat q)=\mathbb E_p[-\log\hat q]$ (entropie croisée) est minimale en $\hat q=p$, où elle vaut $H(p)$. L'excès $L(p,\hat q)-H(p)=D_{KL}(p\,\|\,\hat q)$ est la perte supplémentaire due à $\hat q$.

Interprétation de la KL en théorie du codage ?::Le surcoût moyen de longueur de code (en bits si $\log_2$) quand on code avec $q$ au lieu de la loi optimale $p$.

Quatre propriétés de la KL ?::$\ge0$ (Jensen) ; strictement convexe en chaque argument ; non symétrique ; nulle ssi $p=q$.

Dérive l'équivalence entre ML et minimisation de la KL.
?
$D_{KL}(\hat p_n\,\|\,p_\theta)=H(\hat p_n)-\sum_x\hat p_n(x)\log p_\theta(x)=\text{cst}-\frac1n\sum_i\log p_\theta(x^{(i)})$ : minimiser la KL en $\theta$ revient à maximiser la log-vraisemblance.

Dans l'équivalence ML ⇔ KL, quel argument est la loi empirique ?::Le premier : $\min_\theta D_{KL}(\hat p_n\,\|\,p_\theta)$.

Quel écart la KL mesure-t-elle dans l'EM ?::$\log p(x;\theta)-\mathcal L(q,\theta)=D_{KL}(q\,\|\,p(\cdot\mid x;\theta))$ ; l'étape E l'annule.

## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Vraisemblance]]
- [[C - Perte quadratique (MSE)]]
- [[C - Entropie]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Loi de maximum d'entropie]]
- [[T - Équivalence maximum de vraisemblance et maximum d'entropie]]
- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[T - Inégalité de Jensen]]
- [[C - Borne inférieure de la log-vraisemblance (ELBO)]]
- [[A - Algorithme EM (espérance-maximisation)]]
