Nous cherchons des façons d'évaluer les performances de procédures statistiques
Posons :
- $\mathcal X$: espace échantillonal;
- $\Theta$: espace paramètre;
- $\mathcal A$: espace décisionnel.
 $\mathcal A$ contient l'ensemble des décisions ou actions possibles lorsque nous faisons de l'inférence sur $\theta$ ([[C - Inférence Statistique]])

### Exemple:
- [[C - Estimation ponctuelle]]:  $\mathcal A=\Theta$
- [[C - Test d'hypothèse]]:  $\mathcal A=\{0,1\}$ où $0$ signifie rejeter $H_0$ et $1$ signifie rejeter $H_1$;
- [[C - Intervalle de confiance]]: $\mathcal A=\{[\theta_0,\theta_1]\mid\theta_0<\theta_1,\theta_0,\theta_1\in\Theta\}$ 

## [[C - Inférence Statistique]]
Pour faire de l'inférence sur $\theta$ dans le cadre de la théorie de décision (approche paramétrique) nous devons spécifier:
- Un [[C - Modèle paramétrique]] $f(x|\theta)$
- Une [[C - Fonction de perte]]
- (dans un contexte bayésien uniquement [[C - Principe de la théorie bayésienne]]) il faut aussi spécifier une densité à priori ([[C - Distribution a priori]])

### Exemple:
Supposons $X_1,...,X_n\mid\lambda\sim$ i.i.d. Exp($\lambda$) et $\lambda\sim\Gamma(\alpha,\beta)$, où $\alpha$ et $\beta$ sont connus.
- Estimation ponctuelle: $L(\lambda,a)=(\lambda-a)^2$ 
- Test d'hypothèses: $H_0:\lambda\leq\lambda_0$ contre $H_1:\lambda>\lambda_0$, et$\mathcal A = \{0,1\}$ où $a=0$ signifie rejetter $H_0$. Une fonction de perte possible est $L(\lambda,a)=\begin{cases}0,\text{ si }\lambda\leq\lambda_0\text{ et }a=1\text{ ou }\lambda>\lambda_0\text{ et }a=0,\\c,\text{ sinon} \end{cases}$

# Application de la théorie de décision bayésienne
### Exemple Réaliste
Est-ce qu'un certain médicament contre le cancer devrait être approuvé?
- $X$ : Données sur l'efficacité et les effets secondaires du médicament, provenant d'une étude clinique;
- $\theta$: Paramètres du modèle échantillonnal décrivant les effets (positifs et négatifs) du médicament;
- $\mathcal A={0,1}$, où $0$ correspond à approuver l'utilisation du médicament;
- $L(\theta,-)$: Perte associée à l'approbation ou au rejet du médicament lorsque les vrais paramètres décrivant les effets sont $\theta$ . Par exemple : Perte associée au cancer si le médicament n'est pas approuvé; Couts associés à l'utilisation du médicament; Effets secondaires reliés à l'utilisation du médicament.

### Exemple irréaliste
$X_1,...,X_n\mid\mu\sim$ i.i.d. $\mathcal N(\mu,\sigma^2)$ où $\sigma^2$ est connu;
- $\theta=\mu$, le paramètre d'intérêt;
- $\mathcal A = \mathbb R$: contient les estimés $\widehat \mu$ possibles pour $\mu$;
- $L(\mu,a)=L(\mu,\widehat \mu)=(\mu-\widehat \mu)^2$;
Règles de décision $\delta \in \mathcal D$ possibles:
- Non-aléatoire: $\delta_1(x)=\bar x$
- Aléatoire: $\delta_2(x)\sim\mathcal N (\bar x, 1/n)$

#### Ici on dit que c'est irréaliste parce que ce ne sont pas des choix de la vraie vie comme dans l'exemple précédent.