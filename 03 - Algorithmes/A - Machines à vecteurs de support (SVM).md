## En bref
Le SVM linéaire définit un modèle de [[C - Classification]] basé sur un [[C - Hyperplan]] et la marge qui l'entour.
- L'entraînement se fait par l'optimisation pour maximiser la largeur de la marge
- Le classificateur formé ne dépend que d'un petit nombre de [[C - Vecteur de Support]]
Le [[A - Kernel SVM]] étend ce modèle aux frontieres de décision non linéaires
Et des marges souples ([[A - Soft Margin SVM]]) peuvent être appliquées à la fois dans les cas linéaires et non linéaires pour permettre la robustesse au [[C - Bruit -- Variabilité non expliquée]]  et aux [[C - Valeurs Aberrantes]].

## Entraînement 
Entrées :
- Point de données $\vec x_1,...,\vec x_N \in \mathbb R^n$ 
- Cibles de classification $c_1,...,c_N \in\{-1,1\}$ 
Résoudre le problème de la maximisation des marges
$\max a >0$
s.t. $c_i(\langle\vec w, \vec x_i \rangle -b)\geq a$ 
    $||\vec w||=1$  
    
Sortie: la solution $(\vec w, b ,a)$

# [[C - Classification]]
Entrées :
- Nouveau point de données $\vec x$ 
- La solution $(\vec w,b,a)$ de l'entraînement de SVM
Classer selon la valeur de $\langle\vec w,\vec x \rangle -b$ :
$$\left\{
\begin{array}{ll}
(-\infty,-1] & \Rightarrow \text{class is } - \\
(-1,0)       & \Rightarrow \text{class is probably } - \\
[0,1)        & \Rightarrow \text{class is probably } + \\
[1,\infty)   & \Rightarrow \text{class is } +
\end{array}
\right.$$

## Optimisation Quadratique 
(même si ça n'est pas de l'[[C - Optimisation Linéaire]] il y a un gros lien)
Considérons $\vec w_a=\frac{\vec w}{a}$ et $b_a=\langle \vec w_a,\vec u \rangle=\frac ab$. Alors la contrainte de SVM peut être reformulée comme $$c_i(\langle\vec w,\vec x_i\rangle-b)\geq a \iff c_i(\langle\vec w_a,\vec x_i\rangle-b_a)\geq 1$$ et la taille de la marge devient $2a=\frac 2{||w_a||}$. Donc on peut reformuler le problème d'optimisation de SVM comme :
$$\begin{align*}
&\arg\min_{\vec w_a,b_a}\frac{||\vec w_a||^2}{2}\\
&s.t. \forall_{1\leq i\leq N}c_i(\langle\vec w_a,\vec x_i\rangle-b_a)\geq1
\end{align*}$$
Évidemment, minimiser $||\vec w_a||/2$ est équivalent à maximiser $a$. Avec cette formulation, on a un critère quadratique avec des contraintes linéaires. Telles optimisations sont convexes et donnent une **solution unique**.

On peut appliquer au problèmes les [[C - Multiplicateurs de Lagrange]], on obtien le Langrangien qui est le problème primal ([[C - Dualité]])
$$f_P(\vec w,b,\lambda_1,...,\lambda_N)=\frac 12||\vec w||^2-\sum_{i=1}^N\lambda_i(c_i(\langle\vec w,\vec x_i\rangle-b)-1)$$ et ensuite en mettant son gradient p/r à $\vec w$ et $b$ à zéro on obtient :
$\frac{\partial}{\partial\vec w}f_P=0\implies\vec w=\sum_{i=1}^N\lambda_ic_i\vec x_i$ 
$\frac{\partial}{\partial b}f_P=0 \implies\sum_{i=1}^N\lambda_ic_i=0$.

On peut maintenant substituer $\vec w = \sum_{i=1}^N\lambda_ic_i\vec x_i$ dans les contraintes linéaires pour obtenir $N$ d'inégalités:
$$\sum_{j=1}^Nc_ic_j\langle\vec x_i,\vec x_j\rangle\lambda_j-c_ib\geq1,i=1,...,N$$ S'il s'agissait de contraintes d'égalité, nous pourrions résoudre l'ensemble des équations $N+1$ (avec $\sum_{i=1}^N\lambda_ic_i=0$) dans les variables $N+1(b,\lambda_1,...,\lambda_N)$. Cependant, comme il s'agit d'inégalités, cette approche directe ne s'applique pas ici.

Pour résoudre ce problème on applique deux technique doptimisation avancées

### [[C - Transformation primal-dual]]

En substituant $\vec w=\sum_{i=1}^N\lambda_ic_i\vec x_i$ dans le lagrangien primal on obtient:
$f_P=\frac 12 \sum_{i,j=1}^Nc_ic_j\lambda_i\lambda_j\langle\vec x_i,\vec x_j\rangle+b\sum_{i=1}^Nc_i\lambda_i+\sum_{i=1}^N\lambda$

Ensuite en utilisant $\sum_{i=1}^N\lambda_ic_i=0$ et en simplifiant on obtient le langrangien dual

Trouvez le maximum du dual :
$$f_D(\lambda_1,...,\lambda_N)=\sum_{i=1}^N\lambda_i-\frac 12\sum_{i,j=1}^Nc_ic_j\lambda_i\lambda_j\langle\vec x_i,\vec x_j\rangle$$
### Remarques
- Comme le primal le dual est aussi une forme quadratique
- Par contre, il ne dépend pas de $\vec w, b-$ seulement des multiplicateurs $\lambda_1,...,\lambda_N$ 
- Alors le point stationnaire du primal est un minimum, pour le dual c'est un maximum.

# [[C - Conditions KKT]]

On peut montrer que la solution de la minimisation originale satisfait pour chaque $i=1,...,N:$ $$\lambda_i\geq0 \text{ et } \lambda_i(c_i(\langle\vec w,x_i\rangle-b-1)=0$$
Par conséquent, les $\vec w$ et $b$ peuvent être calculés à partir de $\lambda_1,...,\lambda_N \geq 0$ qui maximisent le dual, qui peut lui-même être estimé numériquement en utilisant la programmation quadratique sous les contraintes $\sum_{i=1}^N\lambda_ic_i=0$ et $\lambda_i\geq0$ 

### [[C - Vecteur de Support]]
Les frontières des marges sont données par $\langle\vec w,\vec x_i\rangle-b=c_i \pm 1$, donc tout $\vec x_i$ qui ne repose pas dessus doit avoir $\lambda_i=0$ puisque $\lambda_i(c_i(\langle\vec w,\vec x_i\rangle-b)-1)=0$. Par ailleurs, comme $\sum_{i=1}^N\lambda_ic_i\vec x_i=\vec w\neq 0$ (sinon les contraintes deviennent $\forall_i - c_ib\geq 1$ et sont violées par une des classes), certains $\lambda_i$ doivent être non nuls.

Les $\vec w$ et le $b$ ne dépendent que des vecteurs de support identifiés. Toutefois, en raison d'erreurs numériques, ces vecteurs peuvent doner plusieurs estimations de b, de sorte qu'en pratique, c'est lestimation moyenne qui utilisée.


## Marge souple [[A - Soft Margin SVM]]

On peut assouplir le modèle SVM en ajoutant des variables ressort $\xi_1,...,\xi_N\geq0$ et reformuler les contraintes comme:
$$\forall_{1\leq i\leq N}c_i(\langle\vec w,\vec x_i\rangle-b)\geq1-\xi_i$$
Ainsi, dans la classe positive ($c_i=1$), on obtient $\langle\vec w,\vec x_i\rangle-b\geq1-\xi_i$ et dans la classe négative ($c_i=-1$), on obtient $\langle\vec w,\vec x_i\rangle-b\leq1-\xi_i$.

Les nouvelles contraintes permettent aux points de données de se situer dans la marge, ou même du mauvais côté de la limite de décision, tandis que le slack $\xi_i\geq0$ quantifie la distance entre $x_i$ et la satisfaction de contraintes initiales.

Semblable au poids de Lagrange $\lambda_i\geq0$, lorsque $\xi_i=0$ le point $x_i$ est bien classé loin de la limite de la marge.

Les variables de slcak non seulement rendent SVM plus robuste, mais elles permettent aussi de classer les données non séparables (ou linéairement séparables).

Avec les nouvelles contraintes, plusieurs choix d'[[C - Hyperplan]] et de marges peuvent être adaptés pour les satisfaire avec des valeurs de relâchement appropriées

#### Attention, on a un problème
L'objectif initial d'optimisation de la marge maximale est insuffisant avec ces contraintes, car il ne contrôle pas la quantité ou l'ampleur des errerus de classification dans le modèle. Nous pouvons facilemetn obtenir une marge large ou la pluspart des données sont mal classées ou se trouvent dans la marge.
#### Pour y remédier
On adapte la fonction cible pour minimiser également les valeurs de relâchement.

# [[A - Kernel SVM]]
Lorsque les données ne sont pas séparable de manière linéaire, on utilise une transformation $x\rightarrow\Phi(x)$ des données en un nouvel espace de représentation ou elles sont linéairement séparables.

Typiquement [[C - Augmentation de la dimensionnalité]] des données non linéairement séparables peut les transformer en une représentation linéairement séparable.