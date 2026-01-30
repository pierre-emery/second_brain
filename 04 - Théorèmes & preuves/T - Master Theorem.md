$$T(n)=aT(\frac nb)+f(n)$$
Si on a une formule de récurrence de la même forme que celle ci-dessus, on compare $f(n)$ à $n^{log_b a}$ 
1. Si $f(n)=O(n^{log_b a})$ alors $T(n)=\Theta (n^{log_b a})$ 
2. Si $f(n)=\Theta(n^{log_b a}\log^kn)$ alors $T(n)=\Theta (n^{log_b a}\log^{k+1}n)$ 
3. Si $f(n)=\Omega(n^{log_b a+\epsilon})$ et une condition de régularité $T(n)=\Theta(f(n))$ 

## Exemples
Merge Sort : $T(n)=2T(n/2)+\Theta(n)$ on tombe dans le cas 2. puisque $n^{log_2 2}=n$ et on trouve alors $T(n)=\Theta(n\log n)$
