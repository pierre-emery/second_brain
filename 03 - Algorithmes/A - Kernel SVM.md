## En bref
extensions du modèle [[A - Machines à vecteurs de support (SVM)]] pour des décisions non linéaires.
- La formation au SVM ne repose que sur les produits internes aux données, qui sont remplaces par un noyau de Mercer ([[T - Théorème de Mercer]])
- Il est également possible de concevoir et d'apprendre des feature maps non linéaires (p.ex. via [[C - Apprentissage profond (Deep Learning)]])
- Les noyaux sont choisis et réglés par validations croise de plusieurs alternatives
des marges souples ([[A - Soft Margin SVM]]) peuvent être appliquées à la fois dans les cas linéaires et non linéaires pour permettre la robustesse au [[C - Bruit -- Variabilité non expliquée]]  et aux [[C - Valeurs Aberrantes]].
# SVM non linéaire

Lorsque les données ne sont pas séparable de manière linéaire, on utilise une transformation $x\rightarrow\Phi(x)$ des données en un nouvel espace de représentation ou elles sont linéairement séparables.

Typiquement [[C - Augmentation de la dimensionnalité]] des données non linéairement séparables peut les transformer en une représentation linéairement séparable.

En utilisant $\Phi$ le SVM peut être reformulé pour utiliser ces caractéristiques plutôt que les données originales qui ne doivent plus être en $\mathbb R^n$:
$$\begin{align*}
&\arg\min_{\vec w,b} &&\frac{||\vec w||^2}2\\
&s.t.\forall_{1\leq i\leq N}&&c_i(\langle\vec w,\Phi(x_i)\rangle-b)\geq1 
\end{align*}$$
L'optimisation suit les mêmes étapes que pour [[A - Machines à vecteurs de support (SVM)]] et la classification tient compte $\langle\vec w,\phi(y)\rangle-b$ pour un nouveau point y.

Les transformations de représentation peuvent être conçus (p. ex. filter banks et scattering) ou apprises des données (p. ex., à [[C - Apprentissage profond (Deep Learning)]]). Cependant, l'extraction des caractéristiques ([[C - Ingénerie de Caractéristiques]]) appropriées n'est pas toujours claire ou pratique.

# Entrainement de Kernel SVM
Entrée:
- Matrice d'un noyau Mercer $K\in\mathbb R^{N\times N}$ t.q.$K_{i,j}=k(x_i,x_j)$
- Cibles de classification $c_1,...,c_N\in\{-1,1\}$ 
- Cibles de classification $c_1,...,c_N\in$ 
Résolvez le problème de maximisation :$$\begin{align*}
&\arg\max_{\lambda_1,...,\lambda_N}&&\sum_{i=1}^N\lambda_i-\frac 12\sum_{i,j=1}^Nc_ic_j\lambda_i\lambda_jK_{i,j}\\&s.t.\forall_{1\leq i\leq N}&&\lambda_i\geq0\\
& &&\sum_{i=1}^N
c_i\lambda_i=0\end{align*}$$
Calculez : $b=\text{mean}\Big\{\sum_{i=1}^Nc_i\lambda_iK_{i,j}-c_j\mid\lambda_j>0,\;\;j=1,...,N\Big\}$ 
Sortie: les vecteurs de biais $b$ et des poids $\vec v \in \mathbb R^N$ t.q. $\vec v[i]=c_i\lambda_i, i=1,...,N$ 

# Classification  
Entrée :
- Nouvelle rangée du noyau $\vec k_y\in\mathbb R^N$ t.q. $\vec k_y[i]=k(y,x_i)$ 
- Les paramètres du modèle $b, \vec v$ entrainé
Classez par la valeur de $\sum_{i=1}^N\vec v[i]\vec k_y[i]-b$:
$$\left\{
\begin{array}{ll}
(-\infty,-1] & \Rightarrow \text{class is } - \\
(-1,0)       & \Rightarrow \text{class is probably } - \\
[0,1)        & \Rightarrow \text{class is probably } + \\
[1,\infty)   & \Rightarrow \text{class is } +
\end{array}
\right.$$

On remarque que cette méthode peut être optimisée pour ne considérer que les vecteurs de support en éliminant tous les , donc les $\vec v$ et les $\vec k_y$ peuvent être très clairsemés.

## [[C - Astuce du noyau]]

On commence par traiter les produits scalaires comme des relations entre des points de données, et on considère l'optimisation du dual de SVM:
$$\begin{align*}
&\arg\max_{\lambda_1,...,\lambda_N}&&\sum_{i=1}^N\lambda_i-\frac 12\sum_{i,j=1}^Nc_ic_j\lambda_i\lambda_j\langle\Phi(x_i),\Phi(x_j)\rangle\\
&s.t. &&\lambda_i\geq0\\
& &&\sum_{i=1}^Nc_i\lambda_i=0
\end{align*}$$
Il faut noter que cette optimisation ne nécessite pas l'accès à des caractéristiques explicites mais seulements des [[C - Produit Scalaire]] $\langle\Phi(x_i),\Phi(x_j)\rangle$
Ainsi, les [[C - Multiplicateurs de Lagrange]] $\lambda_1,...,\lambda_N$ peuvent être récupérés en utilisant uniquement les produits scalaires des caractéristiques.

Rappelons que $\vec w=\sum_{i=1}^Nc_i\lambda_i\Phi(x)$ (vu dans [[A - Machines à vecteurs de support (SVM)]] classique, solution du primal), et par conséquent on peut reformuler l'extraction de $b$ comme:
$$\begin{align*}
&\lambda_j(c_j(\langle\vec w,\Phi(x_j)\rangle-b)-1)=0 \;\;\;\;\; \lambda_j\neq0\\
&\implies c_j(\langle\vec w,\Phi(x_j)\rangle-b)=1\overset{c_j=\pm 1}{\implies}\langle\vec w,\Phi(x_j)\rangle-b=c_j\\
&\implies b = \langle\vec w,\Phi(x_j)\rangle-c_j=\sum_{i=1}^Nc_i\lambda_i\langle\Phi(x_i),\Phi(x_j)\rangle-c_j\\
&\implies b=\text{mean}\Big\{\sum_{i=1}^Nc_i\lambda_i\langle\Phi(x_i),\Phi(x_j)\rangle-c_j\mid\lambda_j,\;\;j=1,...,N\Big\}
\end{align*}$$
Donc, $b$ peut également être récupéré en utilisant uniquement les produits scalaires, sans accès aux caractéristiques elles-mêmes.

## [[C - Classification]]
La dernière étape de l'algorithme consiste à classer un nouveau point de données $y$ en testant $\langle\vec w, \Phi(y)\rangle-b$.

Le problème est qu'on ne connait pas $\vec w$ mais en utilisant encore $\vec w=\sum_{i=1}^Nc_i\lambda-i\Phi(x_i)$ on obtient la règle de classification :
$$
\sum_{i=1}^{N} c_i \lambda_i \langle \phi(x_i), \phi(y)\rangle - b \in
\left\{
\begin{array}{ll}
(-\infty,-1] & \Rightarrow \text{class is } - \\
(-1,0)       & \Rightarrow \text{class is probably } - \\
[0,1)        & \Rightarrow \text{class is probably } + \\
[1,\infty)   & \Rightarrow \text{class is } +
\end{array}
\right.
$$ Cette règle ne repose pas sur la récupération de $\vec w$ mais une fois que l'on a $b$ et $\lambda_1,...,\lambda_N$ la classification peut être faite selon les produits scalaires sans exiger de caractéristiques explicites.

Comme le SVM ne repose que sur des produits scalaires, il peut être reformulé à l'aide d'une [[C - Fonction de Noyau]] $k:X\times X \rightarrow \mathbb R$, t.q. $k(x,y)=\langle\Phi(x),\Phi(y)\rangle$ au lieu d'utiliser explicitement $\Phi$.
Il est souvent plus simple de formuler des noyaux que des caractéristiques et ils ne nécessitent pas de connaissance de la dimensionnalité de l'espace de caractéristiques.

Pour savoir quelles fonctions peuvent être utilisées comme noyau sans tenir compte des transformation de caractéristiques on utilise le [[T - Théorème de Mercer]]
Un noyau Mercer avec l'espace ambait des données définit un [[C - Espace Pré-Hilbertien]]. Dans des contextes continus, ces espaces sont connus sous le nom de reproducing kernel Hilbert spaces et sont étudiés dans l'analyse fonctionnelle.

## Noyaux populaires

De nombreux noyaux dépendant de tâche ou de données peuvent être définis mais la pluspart des applications utilisent des noyaux standard populaires tels que :
- [[C - Noyau Polynomial]]
- [[C - Fonction de Base Radiale (RBF)]]
