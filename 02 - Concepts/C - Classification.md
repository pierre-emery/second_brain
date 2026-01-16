Cas de [[C - Apprentissage supervisée]] dans lequel la sortie y prend des valeurs discrètes (qu'on interprète comme des classes.)
Donc ce qui est fait concrètement c'est classer des ''objets'' en un ensemble fini de ''catégories''

## Entraînement
$$\underbrace{\{x_1,l_1,...,(x_n,l_n)\}}_{\text{Données étiquetées}} \subset X \times L \Rightarrow \underbrace{F : X\rightarrow L, F(x_i) = l_i,}_{\text{Modèle de classification}}  \space \space |L|<\inf$$
## Généralisation
$$\underbrace{y_1,y_2,...\in X}_{\text{Nouvelles données}} \rightarrow \boxed{\text{Modèle de Classification}} \Rightarrow \underbrace{F(y_1),...,F(y_n)\in L}_{\text{Résultats de classification}}$$
### Formulation classique de classificateurs
Pour chaque point de données x, trouvez la classe $C_i$ dans laquelle il correspondrait le mieux:
$$
x \mapsto
\begin{bmatrix}
0\\
\vdots\\
1\\
\vdots\\
0
\end{bmatrix}
\quad
\begin{array}{l}
\leftarrow\, C_1\\
\vdots\\
\leftarrow\, C_j\\
\vdots\\
\leftarrow\, C_k
\end{array}
$$
Le problème ce formule d'un point de vu statistique ou probabiliste. Pour chaque ppint x et classe $C_i$ il faut calculer la probabilité que $x \in C_i$ . 
$$x \mapsto
\begin{bmatrix}
0.05\\
\vdots\\
0.6\\
\vdots\\
0.15
\end{bmatrix}
\quad
\begin{array}{l}
\leftarrow\,Pr[x\in C_1]\\
\vdots\\
\leftarrow\, Pr[x\in C_i]\\
\vdots\\
\leftarrow\, Pr[x\in C_k]
\end{array}$$
Si l'on traite x et C comme des variables aléatoires (dépendantes, on espère) alors on peut considérer les probabilitées $Pr[x\in C_i]$ comme les probabilités conditionnelles $Pr[C|x]$  (ici cest la [[C - Vraisemblance]] de C sachant x)

### Exemple 
Supposons qu'un patient se rend chez le médecin avec de la fièvre, des nausées et des douleurs articulaires. Le médecin peut considérer d'autres patietns présentant des symptômes similaires et décider quelle maladie a provoqué ces symptômes. Le médecin le fait en considérant plusieurs maladies, en estimant la probabilité de chacune et en choisissant la plus probable

#### Problème:
L'estimation directe de  $Pr[C|x]$ est difficile / impraticable!
- Chaque point x n'a qu'une seule étiquette C (et même ses voisons ont probablement la même classe)
- Il existe de nombreux points x tous différents
Il faut donc estimer de nombreuses distributions avec peu d'informations sur chacune

# Algorithmes 
- Classification bayésienne :  - [[A - Classification Naïve Bayésienne]]
						- [[A - Réseaux de croyances bayésiens (BBN)]]

- Machine à vecteurs de support [[A - SVM]]: - [[C - Classification Linéaire]]
									-  [[C - Astuce du noyau]]

- [[A - Arbre de décision]] : - [[C - Mesure d'impureté]]
					- [[C - Gain d'information et d'impurité]]

- [[A - Forêt Aléatoire]]
- [[A - Ruled-based classification]]
- [[C - Apprentissage profond (Deep Learning)]]
- [[A - Régression Logistique (Multiclasse)]] ou binaire peut être appliquée à la classification en estimant la confiance de la classification.