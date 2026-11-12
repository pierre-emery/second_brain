---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Fonction auxiliaire $\mathcal L(q,\theta)$ qui **minore** la log-vraisemblance d'un modèle à [[C - Variable latente|variables latentes]] pour **toute** distribution $q$ sur $z$. Son nom courant est **ELBO** (*evidence lower bound*). L'écart à la log-vraisemblance est exactement une divergence KL.
$$\log p(x;\theta)\ \ge\ \mathcal L(q,\theta)\triangleq\mathbb E_q\Big[\log\frac{p(x,z;\theta)}{q(z)}\Big]=\underbrace{\mathbb E_q[\log p(x,z;\theta)]}_{\text{log-vraisemblance complète espérée}}+\underbrace{H(q)}_{\text{entropie de }q}$$

## Intuition

$\log p(x;\theta)=\log\sum_zp(x,z;\theta)$ est difficile à optimiser : le log d'une somme donne un problème multimodal, non concave. On introduit une distribution « devinette » $q$ sur les latentes, et Jensen fait passer le log **à l'intérieur** de la somme : on obtient une borne facile à optimiser (souvent concave en $\theta$). La borne est **serrée** quand $q$ est la vraie postérieure $p(z\mid x;\theta)$.

## Formalisme / Dérivation

**Borne (Jensen, $\log$ concave)** :
$$\log\sum_zp(x,z)=\log\sum_zq(z)\frac{p(x,z)}{q(z)}=\log\mathbb E_q\Big[\frac{p(x,z)}{q(z)}\Big]\ \ge\ \mathbb E_q\Big[\log\frac{p(x,z)}{q(z)}\Big]=\sum_zq(z)\log p_\theta(x,z)-\sum_zq(z)\log q(z)\triangleq\mathcal L(q,\theta).$$
Valable pour tout $q$ dont le support contient celui de $p(x,\cdot)$ : $p(x,z)\ne0\Rightarrow q(z)\ne0$ (convention $0/0=0$, permise seulement si $p(x,z)=0$).

**Quand la borne est-elle serrée ?** Jensen est une égalité pour $\log$ (strictement concave) ssi $\frac{p(x,z)}{q(z)}$ est constant en $z$, i.e. $q(z)\propto p(x,z)$ :
$$q^*(z)=p(z\mid x;\theta),\qquad\mathcal L(q^*,\theta)=\log p(x;\theta).$$

**Écart = KL** :
$$\log p(x;\theta)-\mathcal L(q,\theta)=-\mathbb E_q\Big[\log\frac{p(x,z;\theta)}{q(z)\,p(x;\theta)}\Big]=\mathbb E_q\Big[\log\frac{q(z)}{p(z\mid x;\theta)}\Big]=D_{KL}\big(q(\cdot)\,\|\,p(\cdot\mid x;\theta)\big)\ \ge0.$$
Donc $\log p(x;\theta)=\mathcal L(q,\theta)+D_{KL}(q\,\|\,p(\cdot\mid x;\theta))$.

## Exemple

Mélange de gaussiennes : $\mathbb E_q[\log p(x,z;\theta)]=\sum_i\sum_j\tau_{ij}\big(\log\mathcal N(x_i\mid\mu_j,\Sigma_j)+\log\pi_j\big)$, où $\tau_{ij}=q(z_{ij}=1)$ → [[E - Algorithme EM pour un mélange de gaussiennes]].

## IFT6269 — rôle dans le cours

- L'[[A - Algorithme EM (espérance-maximisation)|EM]] est une montée par blocs de coordonnées sur $\mathcal L(q,\theta)$.
- Annoncé pour plus tard : l'**inférence variationnelle** et l'**EM variationnel** maximisent $\mathcal L$ sur une famille restreinte $\mathcal Q$ de $q$ (étape E approximative) ; l'écart KL ne peut alors plus être annulé.

## Flashcards
#flashcards/IFT6269/10-non-supervise

Définition de l'ELBO $\mathcal L(q,\theta)$ ?::$\mathbb E_q[\log\frac{p(x,z;\theta)}{q(z)}]=\mathbb E_q[\log p(x,z;\theta)]+H(q)$.

Dérive la borne $\log p(x;\theta)\ge\mathcal L(q,\theta)$.
?
$\log p(x)=\log\sum_zq(z)\frac{p(x,z)}{q(z)}=\log\mathbb E_q[\frac{p(x,z)}{q(z)}]\ge\mathbb E_q[\log\frac{p(x,z)}{q(z)}]$ par Jensen ($\log$ concave).

Que vaut l'écart $\log p(x;\theta)-\mathcal L(q,\theta)$ ?::$D_{KL}(q(\cdot)\,\|\,p(\cdot\mid x;\theta))$.

Pour quel $q$ la borne est-elle serrée, et pourquoi ?::$q(z)=p(z\mid x;\theta)$ : le ratio $p(x,z)/q(z)=p(x)$ est constant, donc Jensen est une égalité (et la KL est nulle).

Pourquoi optimiser l'ELBO plutôt que $\log p(x;\theta)$ directement ?::Le log d'une somme est multimodal et non concave ; l'ELBO place le log à l'intérieur, et son terme $\mathbb E_q[\log p(x,z;\theta)]$ est souvent concave en $\theta$, avec des mises à jour en forme fermée.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[T - Inégalité de Jensen]]
- [[A - Algorithme EM (espérance-maximisation)]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Entropie]]
- [[C - Variable latente]]
