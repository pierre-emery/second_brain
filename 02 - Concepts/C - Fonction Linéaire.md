Une fonction $f: X\rightarrow \mathbb R$ définie sur un sous-espace $X\subseteq \mathbb R^n$ est linéaire si elle vérifie ces deux propriétés:
- $f(x+y) = f(x)+f(y)\forall x,y \in X$ (Additivité)
- $f(ax)=af(x) \forall x\in X, a\in \mathbb R$ (Homogénéité)

### Liens 
- [[A - Régression Linéaire]]: prédiction $\widehat y=w^\top x$ (linéaire en x).
- [[A - Régression Logistique (Binaire)]] : $w^\top x$ est linéaire, puis on applique une non-linéarité (sigmoïde) [[C - Fonction d'activation]].
- [[A - Réseau de neurones]] : couches “linéaires” = $Wx+b$ (affine), la non-linéarité vient de l’activation.