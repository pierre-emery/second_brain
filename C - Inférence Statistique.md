Dériver à partir d'observations d'un phénomène aléatoire, une inférence sur la distribution sous-jacente à ce phénomène.

En particulier on veut soit :
- Analyser un phénomène passé
- Prédire un phénomène futur

L'inférence statistique est un problème d'inversion:
- Étant donné $x_1,...,x_n$, n observations de variables aléatoire i.i.d dont la densité est $f(x;\theta)$, nous voulons estimer $\theta$ qui n'est pas observable.
- Il suffit de considérer $f(x;\theta)=f(x_1,...,x_n;\theta)$ comme étant une fonction de $\theta$ 
- Étant donné l'échantillon $x_1,...,x_n$ ceci nous ramène à la fonction de [[C - Vraisemblance]] $\mathcal L(\theta|x)=\mathcal L(\theta|x_1,...,x_n)$ 