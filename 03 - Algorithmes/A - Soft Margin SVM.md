La formation au SVM ([[A - Machines à vecteurs de support (SVM)]]) à marge souple utilise le problème d'optimisation suivant, ou $\beta$ est une constante configurable par l'utilisateur (un [[C - Hyperparamètres]]) $$
\begin{align*}
&\arg\min_{\vec w,b,\xi_1,...,\xi_N}&&\frac{||\vec w^2||}2+\beta\sum_{i=1}^N\xi_i\\
&s.t.\forall_{1\leq1\leq N}&&c_i(\langle\vec w,\vec x_i\rangle-b)\geq1-\xi_i\\
& &&\xi_i\geq0
\end{align*}$$
L'application des [[C - Multiplicateurs de Lagrange]] donne le primal ([[C - Dualité]]):
$$\begin{align*}
L_p&=\frac{||\vec w||^2}{2}+\beta\sum_{i=1}^N\xi_i\\
&-\sum_{i=1}^N\lambda_i(c_i(\langle\vec w,\vec x_i\rangle-b)-1+\xi_i)-\sum_{i=1}^N
\mu_i\xi_i
\end{align*}$$
En fixant $\nabla L_P=0$, on obtient:
$$\begin{align*}
&\frac{\partial L_p}{\partial\vec w[j]}=0\implies\vec w[j]-\sum_{i=1}^N\lambda_ic_ix_i[j]=0\implies\vec w=\sum_{i=1}^N\lambda_ic_i\vec x_i\\
&\frac{\partial L_p}{\partial b}=0\implies -\sum_{i=1}^N \lambda_ic_i\implies\sum_{i=1}^N\lambda_ic_i=0\\
&\frac{\partial L_p}{\partial \xi_i}=0\implies \beta-\lambda_i-\mu_i=0\implies\lambda_i+\mu_i=\beta
\end{align*}$$
Ainsi on obtient le dual:
$$\begin{align*}
L_D&=\frac 12\sum_{i,j=1}^N\lambda_i\lambda_jc_ic_j\langle x_i,x_j\rangle+\beta\sum_{i=1}^N\xi_i-\sum_{i,j=1}^N\lambda_i\lambda_jc_ic_j\langle x_i,x_j\rangle\\
&+b\sum_{i=1}^Nc_i\lambda_i+\sum_{i=1}^N\lambda_i-\sum_{i=1}^N\lambda_i\xi_i-\sum_{i=1}^N(\beta-\lambda_i)\xi_i\\
&=\sum_{i=1}^N\lambda_i-\frac 12\sum_{i,j=1}^N\lambda_i\lambda_jc_ic_j\langle x_i,x_j\rangle
\end{align*}$$
Ce dual est le même que celui linéairement séparable. Cependant, dans ce cas, les [[C - Conditions KKT]] exigent $\lambda_i\geq0$ et $\mu_i\geq0,i=1,...,N$, donc $\lambda_i+\mu_i=\beta$ on obtient des contraintes $0\leq\lambda_i\leq\beta$.

Finalement, on applique la programmation quadratique pour résoudre:
$$\begin{align*}
&\arg\max_{\lambda_1,...,\lambda_N}&&\sum_{i=1}^N\lambda_i-\frac 12\sum_{i,j=1}^N\lambda_i\lambda_jc_ic_j\langle x_i,x_j\rangle\\
&s.t. \forall_{1\leq i \leq N} &&0\leq\lambda_i\leq\beta\\
& &&\sum_{i=1}^N c_i\lambda_i=0
\end{align*}$$
Ensuite, on définit $\mu_i=\beta-\lambda_i$, $\vec w=\sum_{i=1}^Nc_i\lambda_ix_i$ et récupère $b,\xi_1,...,\xi_n$ des conditions KKT qui fournissent un ensemble suffisant d'équations linéaires:
$\mu_i\xi_i=0$ and $\lambda_i(c_i(\langle\vec w,x_i\rangle -b)-1+\xi_i)=0$ and $\xi_i\geq 0$ 

Les [[C - Vecteur de Support]] ici sont situés sur les frontièeres de marge ou des points avec $\xi_i>0$ (c-à-d mal classés & à l'intérieur de la marge).
Notez que le classificateur résultant n'a pas besoin des variables slacks car il n'utilise que $\vec w$ et $b$ comme toujours avec le SVM linéaire ([[A - Machines à vecteurs de support (SVM)]]).