---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Dans la [[D - Famille exponentielle|famille exponentielle]] de statistique suffisante $T(x)$, le **maximum de vraisemblance** et le **maximum d'entropie sous contraintes de moments** sont **duaux lagrangiens** l'un de l'autre ; tous deux font de l'**appariement de moments**.
$$\text{MLE dans la famille exponentielle de stat. } T\iff\max_{q}H(q)\ \text{ s.c. }\ \mathbb E_q[T(x)]=\mathbb E_{\hat p_n}[T(x)]\iff\mu(\nu^*)=\hat\mu_n$$

## Énoncé

Soit $u$ l'uniforme sur $\mathcal X$ (fini), $T_1,\dots,T_d$ des caractéristiques, $\alpha_j=\mathbb E_{\hat p_n}[T_j(x)]$ les moments empiriques, et
$$\mathcal M=\Big\{q\in\Delta_{|\mathcal X|}:\ \sum_xq(x)T_j(x)=\alpha_j\ \ \forall j\Big\}.$$
Le problème primal de [[C - Loi de maximum d'entropie|maximum d'entropie]] $\min_{q\in\mathcal M}D_{KL}(q\,\|\,u)$ a pour dual
$$\max_\nu\ \tilde g(\nu)=\max_\nu\ \frac1n\sum_{i=1}^n\log p(x^{(i)}\mid\nu),\qquad p(x\mid\nu)=u(x)\exp\big(\langle\nu,T(x)\rangle-\log Z(\nu)\big),$$
c'est-à-dire le **maximum de vraisemblance** dans la famille exponentielle de statistique suffisante $T$. Avec le principe généralisé $\min_{q\in\mathcal M}D_{KL}(q\,\|\,h_0)$, on obtient la famille exponentielle de **densité de référence $h_0$** au lieu de l'uniforme.

## Hypothèses

$\mathcal X$ fini ; contraintes de moments linéaires en $q$ ; dualité forte (problème convexe, contraintes affines).

## Preuve

**1. Lagrangien.** On ignore les contraintes $q(x)\ge0$ : la KL agit comme une **barrière** qui garde $q$ positive (comme pour le MLE multinoulli). Multiplicateurs $\nu_j$ pour les moments, et $c$ séparé pour la normalisation :
$$L(q,\nu,c)=\sum_xq(x)\log\frac{q(x)}{u(x)}+\sum_j\nu_j\big(\alpha_j-\mathbb E_q[T_j(x)]\big)+c\Big(1-\sum_xq(x)\Big).$$

**2. Minimiser en $q$** ($L$ convexe en $q$, gradient nul) :
$$\frac{\partial L}{\partial q(x)}=1+\log\frac{q(x)}{u(x)}-\sum_j\nu_jT_j(x)-c=0\iff q^*_{\nu,c}(x)=u(x)\exp\big(\langle\nu,T(x)\rangle+c-1\big).$$
**$q^*$ est dans la famille exponentielle !**

**3. Fonction duale** (notation abusive $\mathbb E_{q^*}=\sum_xq^*(x)\cdot$, même si $q^*$ n'est pas normalisée) :
$$g(\nu,c)=\mathbb E_{q^*}[\langle\nu,T\rangle+c-1]+\langle\nu,\alpha\rangle-\mathbb E_{q^*}[\langle\nu,T\rangle]+c-\mathbb E_{q^*}[c]=\langle\nu,\alpha\rangle+c-\mathbb E_{q^*}[1]=\langle\nu,\alpha\rangle+c-Z(\nu)\,e^{c-1},$$
avec $Z(\nu)\triangleq\sum_xu(x)\exp\langle\nu,T(x)\rangle$.

**4. Éliminer $c$** : $\partial g/\partial c=1-Z(\nu)e^{c-1}=0\iff e^{c^*-1}=1/Z(\nu)$, ce qui force $q^*$ à être **normalisée** (d'où le traitement séparé de $c$). Donc
$$\tilde g(\nu)=\max_cg(\nu,c)=\langle\nu,\alpha\rangle+c^*-1=\langle\nu,\alpha\rangle-\log Z(\nu).$$

**5. Reconnaître la vraisemblance.** Avec $\alpha=\frac1n\sum_iT(x^{(i)})$ :
$$\tilde g(\nu)=\frac1n\sum_{i=1}^n\Big[\langle\nu,T(x^{(i)})\rangle-\log Z(\nu)\Big]=\frac1n\sum_{i=1}^n\log p(x^{(i)}\mid\nu).\qquad\blacksquare$$

## Corollaires / Conséquences

**Appariement de moments.** $\nabla_\nu\log Z(\nu)=\sum_xp(x\mid\nu)T(x)=\mathbb E_{p(x\mid\nu)}[T(x)]\triangleq\mu(\nu)$ (le « moment du modèle »), donc
$$\nabla_\nu\tilde g(\nu)=\hat\mu_n-\mu(\nu)=0\ \Longrightarrow\ \mu(\nu^*)=\hat\mu_n .$$
Dans la famille exponentielle : **maximum de vraisemblance = maximum d'entropie = appariement de moments**. Pour d'autres familles (ex. mélanges, hors famille exponentielle), la [[C - Méthode des moments|méthode des moments]] peut donner un autre estimateur que le MLE.

## IFT6269 — remarques

Dans les notes de 2018 (p. 6), la ligne « $=\langle\nu,\alpha\rangle+\log Z(\nu)$ » est une **coquille** : puisque $c^*-1=-\log Z(\nu)$, il faut lire $\langle\nu,\alpha\rangle-\log Z(\nu)$, ce que confirme la suite du calcul.

## Flashcards
#flashcards/IFT6269/16-theorie-information

Quel est le dual lagrangien du maximum d'entropie sous contraintes de moments $\mathbb E_q[T]=\hat\mu_n$ ?::Le maximum de vraisemblance dans la famille exponentielle de statistique suffisante $T$ : $\max_\nu\frac1n\sum_i\log p(x^{(i)}\mid\nu)$.

Dérive la forme de $q^*$ dans le problème de maximum d'entropie.
?
$\partial L/\partial q(x)=1+\log\frac{q(x)}{u(x)}-\langle\nu,T(x)\rangle-c=0\Rightarrow q^*(x)=u(x)\exp(\langle\nu,T(x)\rangle+c-1)$ : une famille exponentielle.

Pourquoi traite-t-on le multiplicateur $c$ de la normalisation à part ?::En maximisant $g$ en $c$, on obtient $e^{c^*-1}=1/Z(\nu)$, ce qui normalise $q^*$ ; il reste $\tilde g(\nu)=\langle\nu,\alpha\rangle-\log Z(\nu)$.

Pourquoi peut-on ignorer les contraintes $q(x)\ge0$ ?::La KL (terme $q\log q$) agit comme une fonction barrière : l'optimum reste strictement positif.

Lien entre MLE et appariement de moments dans la famille exponentielle ?::$\nabla_\nu\tilde g=\hat\mu_n-\mu(\nu)$, donc à l'optimum les moments du modèle égalent les moments empiriques : $\mu(\nu^*)=\hat\mu_n$.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Loi de maximum d'entropie]]
- [[D - Famille exponentielle]]
- [[C - Dualité]]
- [[C - Lagrangien]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Méthode des moments]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[T - Dérivées de la fonction de log-partition]]
