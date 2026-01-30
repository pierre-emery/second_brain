$T(n)=O(g(n))$ signifie : $\exists C>0$ et $n_0$ tels que $\forall n \geq n_0, T(n)\leq Cg(n)$.
On ne garde que le terme dominant (on ignore les constantes et termes de plus faibles ordre)

# Exemples
- $T(n)=3n^2+10n+7=O(n^2)$
- $T(n)=50n=O(n)$

## Hiérarchie

$$O(\log n)<O(n)<O(n\log n)<O(n^2)<O(n^3)\ll O(2^n)<O(n!)$$
