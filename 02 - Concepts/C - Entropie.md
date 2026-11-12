---
type: concept
cours: [IFT6758, IFT6269]
statut: brouillon
maj: 2026-11-12
---
## Mesure d'impureté pour les [[M - Arbre de décision]]
Concept standard de la théorie d'information qui mesure l'impureté d'un noeud en fonction du nombre de bits nécessaire pour y représenter les étiquettes de classe:
$$\text{Entropy}(t)=-\sum_cp(c|t)\log_2p(c|t)$$
où $p(c|t)$ est la fréquence de la classe $c$ dans le noeud $t$.

- L'entropie minimale est de zéro - obtenue lorsque tous les points de données du noeud ont la même classe
- L'entropie maximale est de log(#classes) - obtenue lorsque les points de données dans le noeud sont également répartis entre les classes.

## IFT6269 — entropie d'une distribution

Pour une loi discrète $p$ sur $\Omega$ :
$$H(p)=-\sum_{x\in\Omega}p(x)\log p(x)=\mathbb E_p[-\log p(X)].$$
En base 2, l'unité est le **bit** ; en base $e$, le **nat**. C'est la longueur moyenne du code optimal (théorie du codage), et la plus petite [[C - Perte d'Entropie Croisée (Cross-Entropy)|log-perte]] atteignable : $H(p)=\min_qL(p,q)$, atteint en $q=p$.

**Exemples.**
- Bernoulli($p$) : $H(X)=-p\log p-(1-p)\log(1-p)$, **maximale en $p=1/2$**.
- Uniforme sur $K$ états : $H(X)=-\sum_{i=1}^K\frac1K\log\frac1K=\log K$. L'uniforme est la loi d'**entropie maximale** parmi toutes les lois sur $K$ états.

Liens : [[C - Divergence de Kullback-Leibler]] ($D_{KL}(q\,\|\,u)=-H(q)+\log K$), [[C - Loi de maximum d'entropie]].

## Flashcards

#flashcards/IFT6269/16-theorie-information

Entropie d'une distribution discrète ?::$H(p)=-\sum_xp(x)\log p(x)$ (bits en base 2, nats en base $e$).

Entropie d'une Bernoulli($p$) ; où est-elle maximale ?::$-p\log p-(1-p)\log(1-p)$, maximale en $p=1/2$.

Quelle loi sur $K$ états maximise l'entropie, et que vaut alors $H$ ?::L'uniforme, avec $H=\log K$.

Pourquoi l'entropie est-elle la plus petite log-perte atteignable ?::L'entropie croisée $\mathbb E_p[-\log q]=H(p)+D_{KL}(p\,\|\,q)\ge H(p)$, avec égalité ssi $q=p$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Arbre de décision]]
- [[C - Gain d'information et d'impurité]]
- [[C - Divergence de Kullback-Leibler]]
- [[C - Loi de maximum d'entropie]]
