## Gain d'information dans le cas [[A - Arbre de décision]]
Pour un noeud $t$ divisé en noeuds enfants $t_1,...,t_k$, le gain d'information de cette division est défini comme suit :
$$\text{Info\_Gain}(t,t_1,...,t_k)=\text{Entropy}(t)-\sum_{i=1}\frac{\text{\#pts}(t_i)}{\text{\#pts}(t)}\text{Entropy}(t_i)$$ où \#pts(.) est le nombre de points de données dans un noeud.

- Il mesure la réduction de l'entropie obtenue par scission - une division optimale maximiserait ce gain.
- Désavantage : il tend à préférer un grand nombre de petits noeuds enfants purs (p.ex. provoquant de surajustement)

## Gain Ratio dans le cas [[A - Arbre de décision]]
Pour un noeud $t$ divisé en noeuds enfants $t_1,...,t_k$, le ratio de gain normalise le gain d'information par $$\text{Split\_Info}(t,t_1,...,t_k)=-\sum_{i=1}\frac{\text{\#pts}(t_i)}{\text{\#pts}(t)}\log_2\frac{\text{\#pts}(t_i)}{\text{\#pts}(t)}$$
pour obtenir Gain_Ratio = $\frac{\text{Info\_Gain}}{\text{Split\_Info}}$. 

- Il pénalise les partitions à forte [[C - Entropie]] (c-à-d, avec un grand nombre de petits noeuds enfants)
- Il est utilisé dans le C4.5 pour surmonter les désavantages du gain d'information brute.