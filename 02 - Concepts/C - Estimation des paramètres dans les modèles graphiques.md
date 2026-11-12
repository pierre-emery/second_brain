---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Estimation par **maximum de vraisemblance** des paramètres d'un modèle graphique à partir de données complètement observées. Pour un **DGM**, le problème se **découple** en un problème par nœud, avec des solutions par comptage. Pour un **UGM**, le gradient demande des **moments du modèle**, donc de l'**inférence** à chaque pas.
$$\text{DGM : }\ \log p(\text{données}\mid\theta)=\sum_{j=1}^{|V|}f_j(\theta_j)\qquad\text{UGM : }\ \nabla_{\eta_C}\frac1n\sum_i\log p(x^{(i)}\mid\eta)=\hat\mu_C-\mu_C(\eta)$$

## Intuition

Dans un DGM, chaque facteur $p(x_j\mid x_{\pi_j})$ est déjà normalisé : les paramètres de chaque nœud n'interagissent pas, on estime chaque CPT séparément. Dans un UGM, la constante de normalisation $Z(\eta)$ couple **tous** les paramètres : pour savoir comment bouger un potentiel, il faut savoir ce que le modèle actuel prédit, ce qui demande d'inférer.

## Formalisme / Dérivation

**DGM.** Famille à **paramétrisation indépendante** :
$$\mathcal P_\Theta=\Big\{p_\theta(x)=\prod_jp(x_j\mid x_{\pi_j},\theta_j):\ \theta=(\theta_1,\dots,\theta_{|V|})\in\Theta_1\times\dots\times\Theta_{|V|}\Big\}.$$
Avec $n$ données i.i.d. :
$$\log p(\text{données}\mid\theta)=\sum_{i=1}^n\sum_{j=1}^{|V|}\log p\big(x^{(i)}_j\mid x^{(i)}_{\pi_j},\theta_j\big)=\sum_{j=1}^{|V|}\underbrace{\sum_{i=1}^n\log p\big(x^{(i)}_j\mid x^{(i)}_{\pi_j},\theta_j\big)}_{f_j(\theta_j)}$$
→ $|V|$ problèmes indépendants. **Variables discrètes** : le MLE est une **proportion** (comme pour la [[D - Multinomiale (et Multinoulli)|multinoulli]]) :
$$\hat p(x_j=k\mid x_{\pi_j}=\text{config})=\frac{\#(x_j=k,\ x_{\pi_j}=\text{config})}{\#(x_{\pi_j}=\text{config})}.$$
Avec des **variables latentes**, on utilise EM (comme [[A - Algorithme de Baum-Welch|Baum-Welch]] pour les HMM).

**UGM** (famille exponentielle, potentiels $>0$) : $p(x\mid\eta)=\exp\big(\sum_C\langle\eta_C,T_C(x_C)\rangle-A(\eta)\big)$.
$$\frac1n\sum_{i=1}^n\log p(x^{(i)}\mid\eta)=\sum_C\eta_C^\top\underbrace{\frac1n\sum_{i=1}^nT_C(x^{(i)}_C)}_{\hat\mu_C}-A(\eta)\quad\Rightarrow\quad\nabla_{\eta_C}=\hat\mu_C-\mu_C(\eta),$$
avec $\mu_C(\eta)=\mathbb E_{p(x;\eta)}[T_C(x_C)]$ ([[T - Dérivées de la fonction de log-partition]]). Le problème est concave, mais chaque gradient demande les **marginales de cliques** du modèle courant → de l'[[C - Inférence dans les modèles graphiques|inférence]].

## Exemple : modèle d'Ising

$T_{ij}(x_i,x_j)=x_ix_j$ avec $x_i\in\{0,1\}$, donc $\mu_{ij}=\mathbb E[x_ix_j]=p(x_i=1,x_j=1\mid\eta)$. Sur une grille, la [[C - Largeur arborescente (treewidth)|largeur arborescente]] croît comme le côté de la grille : l'inférence exacte est intractable, il faut une inférence approximative (échantillonnage de Gibbs, champ moyen).

## Flashcards
#flashcards/IFT6269/17-famille-exponentielle

Pourquoi le MLE d'un DGM se découple-t-il nœud par nœud ?::La log-vraisemblance est une somme de termes $f_j(\theta_j)$, un par nœud, et la paramétrisation est indépendante ($\Theta=\Theta_1\times\dots\times\Theta_{|V|}$).

MLE d'une CPT discrète dans un DGM ?::$\hat p(x_j=k\mid x_{\pi_j}=c)=\#(x_j=k,x_{\pi_j}=c)/\#(x_{\pi_j}=c)$ : une proportion.

Gradient de la log-vraisemblance d'un UGM exponentiel par rapport à $\eta_C$ ?::$\hat\mu_C-\mu_C(\eta)$ : moments empiriques moins moments du modèle.

Pourquoi l'apprentissage d'un UGM est-il difficile alors que celui d'un DGM est facile ?
?
Dans un UGM, $Z(\eta)$ couple tous les paramètres : chaque pas de gradient exige $\mu_C(\eta)=\mathbb E_\eta[T_C]$, c'est-à-dire de l'inférence (intractable p. ex. sur une grille). Dans un DGM, chaque CPT est normalisée localement et s'estime par comptage.

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[M - Modèle Graphique Non-dirigé]]
- [[D - Famille exponentielle]]
- [[M - Modèle d'Ising]]
- [[A - Algorithme de Baum-Welch]]
