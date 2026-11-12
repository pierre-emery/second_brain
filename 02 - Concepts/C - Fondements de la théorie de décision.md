---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
Nous cherchons des façons d'évaluer les performances de procédures statistiques
Posons :
- $\mathcal X$: espace échantillonal;
- $\Theta$: espace paramètre;
- $\mathcal A$: espace décisionnel.
 $\mathcal A$ contient l'ensemble des décisions ou actions possibles lorsque nous faisons de l'inférence sur $\theta$ ([[C - Inférence Statistique]])
### Exemple:
- [[C - Estimateur Ponctuel]]:  $\mathcal A=\Theta$
- [[C - Test d'hypothèse]]:  $\mathcal A=\{0,1\}$ où $0$ signifie rejeter $H_0$ et $1$ signifie rejeter $H_1$;
- [[C - Intervalle de Confiance]]: $\mathcal A=\{[\theta_0,\theta_1]\mid\theta_0<\theta_1,\theta_0,\theta_1\in\Theta\}$ 

## [[C - Inférence Statistique]]
Pour faire de l'inférence sur $\theta$ dans le cadre de la théorie de décision (approche paramétrique) nous devons spécifier:
- Un [[C - Modèle paramétrique]] $f(x|\theta)$
- Une [[C - Fonction de perte]]
- (dans un contexte bayésien uniquement [[C - Principe de la théorie bayésienne]]) il faut aussi spécifier une densité à priori ([[C - Distribution à priori]])

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

## Cadre formel (IFT6269)

La théorie de la décision statistique est un cadre pour analyser des **règles de décision sous incertitude**. L'estimation, les tests d'hypothèses **et** l'apprentissage supervisé y entrent tous.

| Objet                                        | Notation                                         | Rôle                                                            |
| -------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------- |
| Observation aléatoire                        | $D \in \mathcal D$                               | en ML : le jeu d'entraînement                                   |
| État (inconnu) du monde                      | $D \sim P$, $P \in \mathcal P$                   | source de l'incertitude ; souvent $P_\theta$, $\theta\in\Theta$ |
| Ensemble d'actions                           | $a \in \mathcal A$                               | ce qu'on a le droit de faire                                    |
| [[C - Fonction de perte\|Perte statistique]] | $L : \mathcal P \times \mathcal A \to \mathbb R$ | coût de faire $a$ quand le monde est $P$                        |
| [[C - Règle de décision]]                    | $\delta : \mathcal D \to \mathcal A$             | procédure qui choisit l'action à partir des données             |

**Lecture informelle** : la nature génère $D$ selon un $P$ qu'on ne connaît pas (on suppose seulement $P\in\mathcal P$). On choisit une action en fonction de ce qu'on observe, $a=\delta(D)$, et on paie $L(P,a)$.

> **Subtilité i.i.d.** : si $D=(X_1,\dots,X_n)$ avec $X_i \overset{iid}\sim P_0$, on écrit souvent $L(P_0,a)$ au lieu de $L(P,a)$ : la perte dépend de la loi d'**un** $X_i$, pas de la jointe. Le cadre marche aussi pour des données non i.i.d.
### Trois instanciations

1. **Estimation** : $\mathcal A = \Theta$, $\delta$ est un [[C - Estimateur Ponctuel|estimateur]] $\widehat\theta=\delta(D)$, perte typique $L(\theta,a)=\|\theta-a\|_2^2$. Ex. : $\mathcal P=\{\mathcal N(\cdot;\mu,1)\mid\mu\in\mathbb R\}$, $\delta(D)=\frac1n\sum_i X_i$.
2. **Test d'hypothèse** : $\mathcal A=\{0,1\}$ (rejeter ou non $H_0$) ; $\delta$ est le test statistique.
3. **Prédiction (ML)** : $D=((X_1,Y_1),\dots,(X_n,Y_n))$, $(X_i,Y_i)\overset{iid}\sim P_0$, $\mathcal A=\mathcal Y^{\mathcal X}$ (fonctions de $\mathcal X$ dans $\mathcal Y$). Avec une perte de prédiction $\ell:\mathcal Y^2\to\mathbb R$, la perte statistique est le **[[C - Risque|risque de Vapnik]]** $L(P,f)=\mathbb E_{P_0}[\ell(Y,f(X))]$ et $\delta$ est un **algorithme d'apprentissage** qui sort $\widehat f=\delta(D)$.
### Comment comparer des règles ?

- [[C - Risque Fréquentiste]] $R(P,\delta)$ : moyenne de la perte sur les jeux de données → profil de risque.
- [[C - Admissibilité]] (domination), [[C - Minimaxité|critère minimax]], [[C - Risque intégré|critère pondéré]] et [[C - Perte Espérée à postériori|critère bayésien]].
- Alternative « tail bound » : [[C - Théorie PAC]].
## Liens connexes
  
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Règle de décision]]
- [[C - Risque Fréquentiste]]
- [[C - Risque]]
- [[C - Théorie PAC]]
## Flashcards

#flashcards/IFT6269/05-theorie-decision

Cinq ingrédients du cadre de décision statistique ?::Observation $D\in\mathcal D$, loi inconnue $D\sim P\in\mathcal P$, actions $\mathcal A$, perte $L(P,a)$, règle $\delta:\mathcal D\to\mathcal A$.

En apprentissage supervisé, que sont $\mathcal A$, $L$ et $\delta$ ?::$\mathcal A=\mathcal Y^{\mathcal X}$ (fonctions de prédiction) ; $L(P,f)=\mathbb E_{P_0}[\ell(Y,f(X))]$ (risque de Vapnik) ; $\delta$ = l'algorithme d'apprentissage.

Pourquoi écrit-on souvent $L(P_0,a)$ plutôt que $L(P,a)$ ?::Avec des données i.i.d., la perte ne dépend que de la loi $P_0$ d'un seul $X_i$, pas de la jointe $P$.
