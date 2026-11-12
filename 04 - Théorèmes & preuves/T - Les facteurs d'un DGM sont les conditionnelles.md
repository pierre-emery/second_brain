---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Si $p(x)\in\mathcal L(G)$ avec $p(x)=\prod_if_i(x_i,x_{\pi_i})$ (facteurs légaux), alors pour tout $i\in\{1,\dots,n\}$ :
$$p(x_i\mid x_{\pi_i})=f_i(x_i,x_{\pi_i}).$$
En particulier, les facteurs sont **uniques** (entièrement déterminés par $p$).

## Hypothèses

$G$ DAG ; $p\in\mathcal L(G)$.

## Preuve

**Récurrence sur $n=|V|$.** $G$ étant un DAG, il a une feuille ; on la renomme $n$ (SPDG).

*Étape 1 (marginale sans $n$).* Par la [[T - Propriété d'élagage des feuilles]] :
$$p(x_1,\dots,x_{n-1})=\sum_{x_n}f_n(x_n,x_{\pi_n})\prod_{i=1}^{n-1}f_i(x_i,x_{\pi_i})=\prod_{i=1}^{n-1}f_i(x_i,x_{\pi_i})\triangleq g(x_1,\dots,x_{n-1}).$$
Comme $G-\{n\}$ est un DAG, l'hypothèse de récurrence donne le résultat pour $i<n$. Reste à montrer $f_n=p(x_n\mid x_{\pi_n})$.

*Étape 2 (le nœud $n$).* En marginalisant tout sauf $\{n\}\cup\pi_n$ :
$$p(x_n,x_{\pi_n})=\sum_{x_i,\,i\notin\{n\}\cup\pi_n}g(x_1,\dots,x_{n-1})\,f_n(x_n,x_{\pi_n})=h(x_{\pi_n})\,f_n(x_n,x_{\pi_n}),$$
où $h(x_{\pi_n})$ ne dépend que de $x_{\pi_n}$. Donc
$$p(x_n\mid x_{\pi_n})=\frac{p(x_n,x_{\pi_n})}{\sum_{x_n'}p(x_n',x_{\pi_n})}=\frac{h(x_{\pi_n})f_n(x_n,x_{\pi_n})}{h(x_{\pi_n})\underbrace{\sum_{x'_n}f_n(x'_n,x_{\pi_n})}_{=1}}=f_n(x_n,x_{\pi_n}).\ \blacksquare$$

## Corollaires / Conséquences

Définition équivalente (non circulaire) du [[M - Modèle Graphique Dirigé (DGM)|DGM]] : $p\in\mathcal L(G)\iff p(x)=\prod_ip(x_i\mid x_{\pi_i})$.

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Que valent les facteurs légaux d'un DGM ?::Les vraies conditionnelles : $f_i(x_i,x_{\pi_i})=p(x_i\mid x_{\pi_i})$ (donc uniques).

Schéma de preuve « facteurs = conditionnelles » ?::Récurrence sur $|V|$ : enlever une feuille $n$ (élagage), puis $p(x_n,x_{\pi_n})=h(x_{\pi_n})f_n$ et normaliser ($\sum_{x_n}f_n=1$).

Pourquoi le facteur $h(x_{\pi_n})$ disparaît-il dans le calcul de $p(x_n\mid x_{\pi_n})$ ?::Il ne dépend que de $x_{\pi_n}$ : il apparaît au numérateur et au dénominateur (la somme sur $x_n$), et se simplifie ; il reste $f_n$ car $\sum_{x_n}f_n=1$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[T - Propriété d'élagage des feuilles]]
