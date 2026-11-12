---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-12
---
Forme la plus courante de [[C - Régularisation]], pénalisant la norme au carré des poids (pas des biais) :

$$\Omega(\theta) = \sum_k \sum_i \sum_j \left(W^{(k)}_{i,j}\right)^2 = \sum_k ||\mathbf{W}^{(k)}||_F^2$$
  **Gradient** : $\nabla_{\mathbf{W}^{(k)}} \Omega(\theta) = 2\mathbf{W}^{(k)}$

  **Interprétation** : équivaut à placer un **a priori gaussien** sur les poids. Aussi appelée « weight decay » (décroissance des poids) car elle tire les poids vers 0 à chaque mise à jour.

## Décroissance des poids : critère et effet
*(Contenu fusionné depuis l'ancienne note « C - Décroissance des poids (Weight Decay) ».)*

Exemple concret et le plus classique de [[C - Régularisation|régularisation]] : on exprime une **préférence** pour des poids $\mathbf{w}$ de plus petite norme $L^2$, plutôt que d'interdire complètement certaines fonctions de l'espace d'hypothèses.

Pour une [[M - Régression Linéaire|régression linéaire]], on minimise :

$$J(\mathbf{w}) = \text{MSE}_{\text{train}} + \lambda\,\mathbf{w}^\top\mathbf{w}$$

où $\lambda \geq 0$ contrôle la force de la préférence pour des poids petits. Quand $\lambda=0$, aucune préférence n'est imposée ; plus $\lambda$ est grand, plus les poids sont forcés à être petits.

Minimiser $J(\mathbf{w})$ crée un compromis entre bien ajuster les données d'entraînement et garder les poids petits. Le résultat : une pente plus faible, ou un poids réparti sur moins de caractéristiques, ce qui aide à contrôler le [[C - Surapprentissage|surapprentissage]] (grand $\lambda$ → risque de [[C - Sous-apprentissage|sous-apprentissage]] si trop fort ; $\lambda\to0$ → risque de surapprentissage, en particulier avec un modèle à haute capacité comme un polynôme de haut degré).

En général, on régularise un modèle $f(\mathbf{x};\theta)$ en ajoutant à la fonction de coût un terme **régularisateur** $\Omega(\theta)$. Pour la décroissance des poids, $\Omega(\mathbf{w})=\mathbf{w}^\top\mathbf{w}$, mais d'autres régularisateurs sont possibles.

**Interprétation bayésienne** : la décroissance des poids correspond exactement à une [[C - Estimation Maximum a Posteriori (MAP)|estimation MAP]] avec un prior gaussien centré en zéro sur les poids ; voir cette note pour la dérivation.

## IFT6135 — Chap. 07 : analyse par la hessienne
Notation du cours : $\tilde J(\theta; X, y) = J(\theta; X, y) + \alpha\,\Omega(\theta)$ avec $\Omega(\theta) = \tfrac12 \|w\|_2^2$, d'où
$$\nabla_w \tilde J(w; X, y) = \alpha w + \nabla_w J(w; X, y).$$

**Dérivation.** Approximation quadratique de $J$ autour de l'optimum non régularisé $w^*$ (le gradient y est nul) :
$$\hat J(w) = J(w^*) + \tfrac12 (w - w^*)^\top H (w - w^*),\qquad \nabla_w \hat J(w) = H(w - w^*).$$
À l'optimum régularisé $\tilde w$ :
$$\alpha \tilde w + H(\tilde w - w^*) = 0 \;\Rightarrow\; (H + \alpha I)\tilde w = H w^* \;\Rightarrow\; \tilde w = (H + \alpha I)^{-1} H w^*.$$
$H$ est réelle et symétrique, donc $H = Q\Lambda Q^\top$ ($Q$ orthogonale, $\Lambda$ diagonale) :
$$Q^\top \tilde w = (\Lambda + \alpha I)^{-1} \Lambda\, Q^\top w^*.$$

**Lecture** : la composante de $w^*$ alignée sur le $i$-ème vecteur propre de $H$ est multipliée par
$$\frac{\lambda_i}{\lambda_i + \alpha}.$$
- $\lambda_i \gg \alpha$ (direction de forte courbure, qui compte pour la perte) : facteur $\approx 1$, composante presque intacte.
- $\lambda_i \ll \alpha$ (direction plate, peu utile pour réduire la perte) : facteur $\approx 0$, composante écrasée vers 0.

Géométriquement (figure du cours) : $\tilde w$ est le point d'équilibre entre les ellipses de niveau de $J$ centrées en $w^*$ et les cercles de $\Omega$ centrés en 0. Contrairement à [[C - Régularisation L1|L1]], la solution n'est pas parcimonieuse : les poids rétrécissent sans devenir exactement nuls.

Lien : sous hypothèses quadratiques, l'[[C - Early stopping|early stopping]] produit le même effet, voir [[T - Équivalence early stopping et régularisation L2]].

## En régression linéaire (IFT6269)

La version linéaire est la [[M - Régression Ridge]] : MAP avec $p(w)=\mathcal N(0,I/\lambda)$, solution $(X^\top X+\lambda I)^{-1}X^\top y$.

## Liens connexes

- [[MOC - Évaluation & généralisation]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Régularisation]]
- [[C - Régularisation L1]]
- [[C - Norme]]
- [[M - Régression Ridge]]
- [[C - Estimation Maximum a Posteriori (MAP)]]
- [[C - Théorème du No Free Lunch]]
- [[C - Surapprentissage]]
- [[C - Sous-apprentissage]]
- [[C - Matrice Hessienne]]
- [[C - Valeurs et Vecteurs propres]]
- [[T - Équivalence early stopping et régularisation L2]]

## Flashcards

#flashcards/IFT6135/02-entrainement

Régularisateur L2 et son gradient ?::$\Omega = \sum_k \|\mathbf{W}^{(k)}\|_F^2$ ; $\nabla_{\mathbf{W}}\Omega = 2\mathbf{W}$.

Pourquoi L2 s'appelle-t-elle « weight decay » ?::Chaque mise à jour retire $2\lambda\alpha\mathbf{W}$ : les poids sont multipliés par un facteur $< 1$, ils « décroissent » vers 0.

A priori bayésien équivalent à L2 ?::Un a priori gaussien centré en 0 sur les poids.

#flashcards/IFT6135/07-regularisation

Dérive l'optimum régularisé L2 $\tilde w$ sous l'approximation quadratique
?
$\nabla \hat J(w) = H(w-w^*)$ ; à l'optimum $\alpha\tilde w + H(\tilde w - w^*) = 0$, donc $\tilde w = (H+\alpha I)^{-1}Hw^*$.

Par quel facteur L2 rééchelonne-t-elle la composante de $w^*$ selon le vecteur propre $i$ de $H$ ?::$\lambda_i/(\lambda_i+\alpha)$ : presque 1 si $\lambda_i \gg \alpha$, presque 0 si $\lambda_i \ll \alpha$.

Que se passe-t-il pour les directions où la perte est presque plate ?
?
Petite courbure $\lambda_i \ll \alpha$ : le facteur $\lambda_i/(\lambda_i+\alpha)\approx 0$, donc L2 ramène ces composantes vers 0. Elles contribuent peu à réduire la perte, la pénalité l'emporte.

Que représente $\lambda$ dans $J(\mathbf w)=\text{MSE}_{\text{train}}+\lambda\mathbf w^\top\mathbf w$, et que se passe-t-il aux extrêmes ?::La force de la préférence pour des petits poids. $\lambda\to 0$ : risque de surapprentissage ; $\lambda$ trop grand : sous-apprentissage.
