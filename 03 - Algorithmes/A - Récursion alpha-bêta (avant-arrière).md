---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Algorithme d'inférence exacte dans un [[M - Modèle de Markov Caché (HMM)|HMM]] (*forward-backward*) : deux récursions, $\alpha$ (avant) et $\beta$ (arrière), qui donnent toutes les distributions de **filtrage** et de **lissage** en $O(Tk^2)$. C'est l'[[A - Algorithme somme-produit (propagation de croyances)|algorithme somme-produit]] appliqué à la chaîne.
$$p(z_t\mid\bar x_{1:T})=\frac{\alpha_t(z_t)\,\beta_t(z_t)}{\sum_{z_t}\alpha_t(z_t)\,\beta_t(z_t)},\qquad \alpha_t(z_t)\triangleq p(z_t,\bar x_{1:t}),\quad \beta_t(z_t)\triangleq p(\bar x_{t+1:T}\mid z_t)$$

## Intuition

Sachant l'état présent $z_t$, le passé et le futur sont indépendants (d-séparation dans la chaîne). On coupe donc les observations en deux : $\alpha_t$ résume tout ce que **le passé** $\bar x_{1:t}$ dit sur $z_t$, et $\beta_t$ tout ce que **le futur** $\bar x_{t+1:T}$ en dit. Le lissage est leur produit normalisé.

## Formalisme / Dérivation

**Découpage (indépendance conditionnelle).**
$$p(z_t\mid\bar x_{1:T})=\frac{p(\bar x_{1:T}\mid z_t)p(z_t)}{p(\bar x_{1:T})}=\frac{p(\bar x_{1:t}\mid z_t)\,p(\bar x_{t+1:T}\mid z_t)\,p(z_t)}{p(\bar x_{1:T})}=\frac{p(\bar x_{1:t},z_t)\,p(\bar x_{t+1:T}\mid z_t)}{p(\bar x_{1:T})}=\frac{\alpha_t(z_t)\beta_t(z_t)}{p(\bar x_{1:T})}.$$
La notation $\bar x$ indique des observations **fixées** pendant la marginalisation.

**Récursion $\alpha$ (avant, filtrage).** Par somme-produit avec $z_t$ comme racine (phase de collecte) : $p(z_t,\bar x_{1:t})=\frac1Z\cdot1\cdot m_{z_{t-1}\to z_t}(z_t)\cdot m_{x_t\to z_t}(z_t)$, avec $Z=1$ (c'est un DGM) et aucun potentiel de nœud, où
$$m_{x_t\to z_t}(z_t)=\sum_{x_t}p(x_t\mid z_t)\,\delta(x_t,\bar x_t)=p(\bar x_t\mid z_t),\qquad m_{z_{t-1}\to z_t}(z_t)=\sum_{z_{t-1}}p(z_t\mid z_{t-1})\underbrace{m_{z_{t-2}\to z_{t-1}}(z_{t-1})\,m_{x_{t-1}\to z_{t-1}}(z_{t-1})}_{=\alpha_{t-1}(z_{t-1})}.$$
D'où
$$\boxed{\alpha_t(z_t)=p(\bar x_t\mid z_t)\sum_{z_{t-1}}p(z_t\mid z_{t-1})\,\alpha_{t-1}(z_{t-1})},\qquad\alpha_1(z_1)=p(z_1)\,p(\bar x_1\mid z_1).$$
**Forme matricielle** : avec $O_t(z_t)\triangleq p(\bar x_t\mid z_t)$ et la matrice de transition $A_{ij}=p(z_t=i\mid z_{t-1}=j)$ (convention **colonnes** normalisées),
$$\alpha_t=O_t\odot(A\,\alpha_{t-1})\qquad(\odot=\text{produit de Hadamard}).$$
- Filtrage : $\tilde\alpha_t(z_t)\triangleq p(z_t\mid\bar x_{1:t})=\alpha_t(z_t)/\sum_{z_t}\alpha_t(z_t)$.
- Évidence : $\sum_{z_t}\alpha_t(z_t)=p(\bar x_{1:t})$.

**Récursion $\beta$ (arrière, lissage).** $p(z_t,\bar x_{1:T})=\frac1Z\,\alpha_t(z_t)\cdot\underbrace{m_{z_{t+1}\to z_t}(z_t)}_{\triangleq\beta_t(z_t)}$, et par indépendance conditionnelle $\beta_t(z_t)=p(\bar x_{t+1:T}\mid z_t)$. En développant le message :
$$\boxed{\beta_t(z_t)=\sum_{z_{t+1}}p(z_{t+1}\mid z_t)\,p(\bar x_{t+1}\mid z_{t+1})\,\beta_{t+1}(z_{t+1})},\qquad\beta_T(z_T)=1\ \ \forall z_T.$$
L'initialisation à 1 vient de l'[[T - Propriété d'élagage des feuilles|élagage des feuilles]] : rien n'est observé après $T$, marginaliser les feuilles d'un DGM donne 1.

**Marginale d'arête** (utile pour Baum-Welch) :
$$p(z_t,z_{t+1},\bar x_{1:T})=\alpha_t(z_t)\,\beta_{t+1}(z_{t+1})\,p(z_{t+1}\mid z_t)\,p(\bar x_{t+1}\mid z_{t+1}).$$

## Stabilité numérique

Les $\alpha_t,\beta_t$ sont des produits de nombreux termes $\ll1$ (ex. $10^{-100}$) → **sous-dépassement**. Deux remèdes :

**(A) Travailler en log** : stocker $\log\alpha_t$ et calculer les sommes avec l'[[C - Astuce log-somme-exponentielle (log-sum-exp)|astuce log-sum-exp]].

**(B) Normaliser les messages.** On propage directement le filtrage $\tilde\alpha_t$ :
$$\tilde\alpha_t=\frac{O_t\odot(A\,\tilde\alpha_{t-1})}{c_t},\qquad c_t\triangleq\sum_{z_t}\big(O_t\odot A\tilde\alpha_{t-1}\big)(z_t)=p(\bar x_t\mid\bar x_{1:t-1}),\qquad p(\bar x_{1:T})=\prod_{t=1}^Tc_t.$$
Pour $\beta$, on réutilise les $c_t$ stockés :
$$\tilde\beta_t(z_t)\triangleq\frac{\beta_t(z_t)}{p(\bar x_{t+1:T}\mid\bar x_{1:t})}=\frac{\beta_t(z_t)}{\prod_{u=t+1}^Tc_u}.$$
$\sum_{z_t}\tilde\beta_t(z_t)\ne1$ en général, mais la valeur reste raisonnable (pas de sous-dépassement), sans calcul supplémentaire.

*Exercice des notes — récursion $\tilde\beta$ (dérivation ajoutée)* : en divisant la récursion $\beta$ par $\prod_{u=t+1}^Tc_u=c_{t+1}\prod_{u=t+2}^Tc_u$,
$$\tilde\beta_t(z_t)=\frac1{c_{t+1}}\sum_{z_{t+1}}p(z_{t+1}\mid z_t)\,p(\bar x_{t+1}\mid z_{t+1})\,\tilde\beta_{t+1}(z_{t+1}),\qquad\tilde\beta_T=1.$$
On a alors directement $p(z_t\mid\bar x_{1:T})=\tilde\alpha_t(z_t)\,\tilde\beta_t(z_t)$, et l'arête : $p(z_t,z_{t+1}\mid\bar x_{1:T})=\frac{1}{c_{t+1}}\tilde\alpha_t(z_t)\,p(z_{t+1}\mid z_t)\,p(\bar x_{t+1}\mid z_{t+1})\,\tilde\beta_{t+1}(z_{t+1})$.

## Complexité

- Temps : $O(Tk^2)$ ($k^2$ par produit matrice-vecteur, répété $T$ fois).
- Mémoire supplémentaire : $O(k)$ pour la seule récursion $\alpha$ (stocker $A$ coûte $O(k^2)$, mais fait partie du problème) ; $O(Tk)$ si on garde tous les $\alpha_t$ pour le lissage.

## IFT6269 — remarques

- Convention de Simon : $A$ normalisée **par colonnes** ($\sum_iA_{ij}=1$), pour que les mises à jour soient des produits matrice-vecteur. Certains manuels normalisent les lignes (et écrivent $A^\top$).
- Dans les notes 2018 (p. 6), la formule normalisée écrit $\tilde\alpha_{t+1}(z_{t-1})$ : **coquille**, il faut lire $\tilde\alpha_{t-1}(z_{t-1})$.

## Flashcards
#flashcards/IFT6269/15-hmm

Définitions de $\alpha_t$ et $\beta_t$ dans un HMM ?::$\alpha_t(z_t)=p(z_t,\bar x_{1:t})$ ; $\beta_t(z_t)=p(\bar x_{t+1:T}\mid z_t)$.

Dérive la formule de lissage à partir de $\alpha$ et $\beta$.
?
$p(z_t\mid\bar x_{1:T})\propto p(\bar x_{1:T}\mid z_t)p(z_t)=p(\bar x_{1:t}\mid z_t)p(\bar x_{t+1:T}\mid z_t)p(z_t)$ (passé ⫫ futur sachant $z_t$) $=\alpha_t(z_t)\beta_t(z_t)$, puis on normalise sur $z_t$.

Récursion $\alpha$ et sa forme matricielle ?::$\alpha_t(z_t)=p(\bar x_t\mid z_t)\sum_{z_{t-1}}p(z_t\mid z_{t-1})\alpha_{t-1}(z_{t-1})$, i.e. $\alpha_t=O_t\odot A\alpha_{t-1}$, avec $\alpha_1=p(z_1)p(\bar x_1\mid z_1)$.

Récursion $\beta$ et son initialisation ?::$\beta_t(z_t)=\sum_{z_{t+1}}p(z_{t+1}\mid z_t)p(\bar x_{t+1}\mid z_{t+1})\beta_{t+1}(z_{t+1})$, $\beta_T=1$ (élagage des feuilles : rien d'observé après $T$).

Que valent les constantes de normalisation $c_t$ de $\tilde\alpha_t$ ?::$c_t=p(\bar x_t\mid\bar x_{1:t-1})$, donc $p(\bar x_{1:T})=\prod_tc_t$ : la vraisemblance s'obtient sans sous-dépassement (en sommant les $\log c_t$).

Complexité de la récursion alpha-bêta ?::$O(Tk^2)$ en temps (contre $O(k^T)$ par énumération).

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle de Markov Caché (HMM)]]
- [[C - Filtrage, lissage et prédiction (HMM)]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[A - Passation de Messages]]
- [[C - Astuce log-somme-exponentielle (log-sum-exp)]]
- [[A - Algorithme de Baum-Welch]]
- [[A - Algorithme de Viterbi]]
- [[T - Propriété d'élagage des feuilles]]
