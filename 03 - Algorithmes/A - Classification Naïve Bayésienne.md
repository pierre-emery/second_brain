On l'appelle classificateur naïf parce qu'on suppose l'indépendance des attributs étant donné la classe C.

Disons dans le même cadre que le [[A - Classificateur de Bayes]] mais avec plusieurs attributs, il faut donc estimer la [[C - Vraisemblance]] $P(x[1],x[2],...,x[n]|C)$.
Pour ce faire on va estimer chaque $P(x[j]|C)$ individuellement et les combiner ensuite en supposant leur indépendance par rapport à la classe C.

Donc on suppose que $P(x[j_1] \mid C, x[j_2], ..., x[j_k])=P(x[j_1]|C)$ pour chaque ensemble $j_1,...,j_k, 1<k\leq n$ des attributs.
Et sous l'hypothèse de l'indépendance des classes on peut calculer 
$$P(x[i],x[k]|C) = P(x[i]|C,x[k])P(x[k]|C) = P(x[i]|C)P(x[k]|C)$$ pour n'importe quel i, j. De même, pour n attributs on a 
$$P(\stackrel{\to}{x}|C)=P(x[1],x[2],...,x[n]|C)=\prod_{j=1}^nP(x[j]|C)$$
Donc, on peut formuler un classifcateur multivarié comme suit :

### Entraînement 
Pour chaque C et j, estimez P(C) et $P(x[j]|C)$ des données d'entraînement

### Classificateur
Chaque x est classé par $\boxed{argmax_c P(C)\prod_{j=1}^n P(x[j]|C)}$

Si $Pr[x[j]=a|C=C_i]\approx 0$ soit un rareté des données, le postérieur de {x : $x[j]=a$} sera zéro, même si d'autres attributs prédisent $C_i$. Ce problème peut être atténué par deux méthodes de correction:
- [[C - Correction de Laplace]]
- [[C - m-estimate]]