---
type: modele
cours: [IFT6758, IFT6269]
statut: à réviser
maj: 2026-11-11
---
## Définition / Formule

$$f(x) = a_0 + a_1x_1 + \dots + a_Nx_N$$ Les $a_i$ sont les **paramètres à apprendre**.

L'algèbre linéaire donne directement les paramètres qui minimisent l'erreur quadratique ([[C - Moindres Carrés Ordinaires (MCO)]]) : $$\hat a = (\mathbf X^\top \mathbf X)^{-1}\mathbf X^\top \mathbf y$$
## [[C - Complexité d'un modèle (capacité)]] pour régression linéaire

- On peut complexifier un modèle linéaire "de base" en y ajoutant de nouvelles combinaisons de caractéristiques: $$\begin{align*} &\text{Modèle de base: } &&\hat y =\beta_0+\beta_1x_1+\beta_2x_2\ &\text{Ajout d'interactions: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2\ &\text{Ajout de non-linéarités: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1x_2+\beta_4x_1^2+\beta_5x^2_2\ &\text{Ajout de caractéristiques: }&&\hat y =\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_3\

\end{align*}$$

- Les paramètres $\beta$ des modèles linéaires sont faciles à estimer avec la méthodes des [[C - Moindres Carrés Ordinaires (MCO)]] (l'entraînement n'est pas un problème)
- Le nombre d'intéractions posisbles augmente comme $D^2$ ou D est la dimensionnalité de x

## Terme d'ordonnée à l'origine (biais) : linéaire vs affine

Le terme « régression linéaire » désigne souvent, de façon un peu abusive, un modèle légèrement plus riche avec un paramètre supplémentaire $b$ :

$$\hat y = \mathbf{w}^\top\mathbf{x} + b$$

La correspondance entre paramètres et prédictions reste linéaire, mais la correspondance entre caractéristiques et prédictions est désormais **affine** (le graphe des prédictions reste une droite, mais qui n'a plus besoin de passer par l'origine). Le terme $b$ est appelé le **biais** de la transformation affine mais attention, ce sens de « biais » (le résultat est « biaisé » vers $b$ en l'absence d'entrée) est complètement différent du [[C - Biais|biais statistique]] d'un estimateur.

Plutôt que d'ajouter explicitement $b$, une astuce courante consiste à augmenter $\mathbf{x}$ d'une entrée supplémentaire toujours fixée à 1 : le poids associé à cette entrée joue alors le rôle du biais.

## Justification par maximum de vraisemblance

Voir [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] : minimiser l'erreur quadratique moyenne équivaut exactement à maximiser la log-vraisemblance conditionnelle sous l'hypothèse $p(y\mid\mathbf{x})=\mathcal{N}(y;\widehat y(\mathbf{x};\mathbf{w}),\sigma^2)$ ce qui justifie a posteriori le choix, autrement arbitraire, de la MSE comme critère d'entraînement.

## Les métriques qui permettent l'[[MOC - Évaluation & généralisation]]

## Modèle probabiliste conditionnel (IFT6269, lecture 6)

Approche [[C - Approches génératives, conditionnelles et discriminantes|conditionnelle]] : on ne modélise que $p(y\mid x)$.
$$p(y\mid x,w)=\mathcal N\big(y\mid\langle w,x\rangle,\sigma^2\big)\iff Y=w^\top X+\epsilon,\quad\epsilon\sim\mathcal N(0,\sigma^2)\ \text{indépendant de }X .$$
Ordonnée à l'origine : notation « offset » $x=(\tilde x,1)$, $\tilde x\in\mathbb R^{d-1}$, de sorte que $w^\top x=w_{1:d-1}^\top\tilde x+w_d$.

**Log-vraisemblance conditionnelle** ($Y_i\mid X_i$ indépendants, les $X_i$ quelconques) :
$$\log p(y_{1:n}\mid x_{1:n};w,\sigma^2)=-\frac n2\log(2\pi\sigma^2)-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-w^\top x_i)^2 .$$
Maximiser en $w$ ⇔ $\widehat w=\arg\min_w\sum_i(y_i-w^\top x_i)^2=\arg\min_w\|y-Xw\|^2$, avec la **matrice de design** $X\in\mathbb R^{n\times d}$ (lignes $x_i^\top$).

**Équations normales** : $\nabla_w\big[\|y\|^2-2y^\top Xw+w^\top X^\top Xw\big]=-2X^\top y+2X^\top Xw=0$ (en utilisant $\nabla_w w^\top Aw=(A+A^\top)w$) :
$$(X^\top X)\,w=X^\top y .$$
- $X^\top X$ inversible ⇒ solution unique $\widehat w=(X^\top X)^{-1}X^\top y$.
- $n<d$ ⇒ $X$ pas de rang plein, $X^\top X$ non inversible : on peut prendre la [[C - Pseudo-inverse de Moore-Penrose|pseudo-inverse]] $X^\dagger$ (solution de **norme minimale** parmi les minimiseurs), mais c'est **numériquement instable** → préférer la régularisation : [[M - Régression Ridge]].

**Lecture géométrique** : $X\widehat w$ est la **projection orthogonale** de $y$ sur l'espace colonne de $X$.

**Contraste avec la logistique** : ici $\nabla\ell(w)=\sum_ix_i(y_i-w^\top x_i)$ donne une équation **linéaire** en $w$ ; en [[M - Régression Logistique (Binaire)|logistique]] on obtient une équation **transcendante** sans forme fermée.

## Liens connexes

- [[MOC - Modèles ML (supervisé)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Biais]]
- [[M - Régression Linéaire Bayésienne]]
- [[C - Recette de construction d'un algorithme ML]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[M - Régression Ridge]]
- [[C - Pseudo-inverse de Moore-Penrose]]
- [[C - Approches génératives, conditionnelles et discriminantes]]

## Flashcards

#flashcards/IFT6269/07-regression-lineaire

Modèle probabiliste de la régression linéaire ?::$p(y\mid x,w)=\mathcal N(y\mid w^\top x,\sigma^2)$, i.e. $Y=w^\top X+\epsilon$, $\epsilon\sim\mathcal N(0,\sigma^2)$ indépendant de $X$.

Maximiser la vraisemblance conditionnelle gaussienne en $w$ revient à… ?::Minimiser $\|y-Xw\|^2$ (moindres carrés).

Équations normales ?::$(X^\top X)w=X^\top y$.

Que faire si $n<d$ en régression linéaire ?::$X^\top X$ n'est pas inversible : pseudo-inverse (solution de norme minimale, mais instable numériquement) ou mieux, régularisation ridge.

Interprétation géométrique des moindres carrés ?::$X\widehat w$ est la projection orthogonale de $y$ sur l'espace colonne de $X$.

Gradient de $w^\top Aw$ ?::$(A+A^\top)w$.
