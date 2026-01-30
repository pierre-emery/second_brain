# [[C - Lagrangien]]
Compte tenu d'un problème d'optimisation $\arg\min_{\vec z}f(\vec z)$ s.t. $g_j(\vec z)=0, j=1,...,k$, sa solution optimale doit être un point stationnaire de la fonction Lagrangienne $f_P(\vec z,\lambda_1,...,\lambda_k)=f(\vec z)-\sum_{j=1}^k \lambda_jg_j(\vec z)$, i.e. un point ou $\nabla f_P=0$.

Remarquons que :
- Les points stationnaires peuvent être des points cols/selles pas seulement des points extrêmes.
- Comme $\frac{\partial f_P}{\partial\lambda_j}=g_j$, il suffit de considérer les contraintes intiales et $\frac{\partial f_P}{\partial\vec z}=0$ 
- Attention! C'est une condition nécessaire mais pas suffisante.