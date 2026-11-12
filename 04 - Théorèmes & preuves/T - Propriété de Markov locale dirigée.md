---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

**Non-descendants** : $\mathrm{nd}(i)\triangleq\{j:\ \text{pas de chemin dirigé de } i \text{ à } j\}$ (les $j\ne i$ qui ne sont pas descendants de $i$).

Si $G$ est un DAG :
$$p\in\mathcal L(G)\iff X_i\perp\!\!\!\perp X_{\mathrm{nd}(i)\setminus\pi_i}\mid X_{\pi_i}\quad\forall i .$$
Chaque variable est indépendante de ses non-descendants sachant ses parents.

## Hypothèses

$G$ DAG, variables discrètes.

## Preuve

On ne prouve que **(⇒)**. Prenons $(1,\dots,n)$ un ordre topologique. Alors
$$p(x)=\prod_{i=1}^np(x_i\mid x_{\pi_i})\ \ (p\in\mathcal L(G)),\qquad p(x)=\prod_{i=1}^np(x_i\mid x_1,\dots,x_{i-1})\ \ (\text{règle de la chaîne}).$$
Comme l'ordre est topologique, $\pi_i\subseteq\{1,\dots,i-1\}$, et on montre par récurrence (en identifiant les facteurs successifs, via l'[[T - Propriété d'élagage des feuilles|élagage]]) que
$$p(x_i\mid x_{\pi_i})=p(x_i\mid x_1,\dots,x_{i-1})=p\big(x_i\mid x_{\pi_i},x_{\{1..i-1\}\setminus\pi_i}\big),$$
d'où $X_i\perp\!\!\!\perp X_{\{1..i-1\}\setminus\pi_i}\mid X_{\pi_i}$. **Idée clé** : pour tout $i$, il existe un ordre topologique où $\mathrm{nd}(i)=\{1,\dots,i-1\}$ (placer tous les non-descendants de $i$ avant $i$). $\blacksquare$

## Corollaires / Conséquences

- Caractérisation de $\mathcal L(G)$ **par des indépendances**, pas seulement par une factorisation.
- Cas particulier de la [[C - Séparation Directionnelle|d-séparation]] (qui donne **toutes** les indépendances).

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Propriété de Markov locale d'un DGM ?::$X_i\perp\!\!\!\perp X_{\mathrm{nd}(i)\setminus\pi_i}\mid X_{\pi_i}$ : chaque variable est indépendante de ses non-descendants sachant ses parents.

Idée clé de la preuve de la propriété de Markov locale ?::Comparer $\prod p(x_i\mid x_{\pi_i})$ et la règle de la chaîne selon un ordre topologique où $\mathrm{nd}(i)=\{1,\dots,i-1\}$.

Dans une chaîne $X_1\to X_2\to X_3$, que donne la propriété de Markov locale pour $X_3$ ?::$\mathrm{nd}(3)=\{1,2\}$ et $\pi_3=\{2\}$, donc $X_3\perp\!\!\!\perp X_1\mid X_2$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[C - Séparation Directionnelle]]
- [[C - Couverture de Markov]]
- [[C - Graphe acyclique dirigé (DAG)]]
