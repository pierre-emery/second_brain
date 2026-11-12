---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Une **règle de décision** (ou procédure) est une fonction
$$\delta : \mathcal D \to \mathcal A$$
qui associe à chaque observation possible $D$ une action $a=\delta(D)$. C'est l'objet qu'on cherche à choisir dans le cadre de la [[C - Fondements de la théorie de décision|théorie de la décision statistique]].

## Cas particuliers

| Problème | $\mathcal A$ | $\delta$ s'appelle… |
|---|---|---|
| Estimation | $\Theta$ | un [[C - Estimateur Ponctuel\|estimateur]] $\widehat\theta$ |
| Test d'hypothèse | $\{0,1\}$ | un test statistique |
| Prédiction (ML) | $\mathcal Y^{\mathcal X}$ | un algorithme d'apprentissage, $\delta(D)=\widehat f$ |

## Exemples d'estimateurs (IFT6269)
- [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] : $\delta_{\text{MLE}}(D)=\arg\max_\theta \mathcal L_D(\theta)$
- [[C - Estimation Maximum a Posteriori (MAP)|MAP]] : $\delta_{\text{MAP}}(D)=\arg\max_\theta \pi(\theta\mid D)$
- [[C - Méthode des moments]] : $\widehat\theta_{\text{MM}}=h^{-1}(\widehat M_k)$
- [[C - Risque Empirique|ERM]] : $\widehat f_{\text{ERM}}=\arg\min_{f\in\mathcal F}\widehat{\mathbb E}[\ell(y,f(x))]$

## Comparer des règles
On évalue une règle par son [[C - Risque Fréquentiste|risque]] $R(P,\delta)$, puis on la compare aux autres par [[C - Admissibilité|domination]], [[C - Minimaxité|minimax]], [[C - Risque intégré|risque pondéré]] ou selon le [[C - Perte Espérée à postériori|critère bayésien]]. Il n'existe **pas de procédure universellement meilleure** : souvent aucune règle n'en domine toutes les autres.

> Des règles **aléatoires** existent aussi : voir [[C - Règles de décision aléatoires]].

## Flashcards

#flashcards/IFT6269/05-theorie-decision

Qu'est-ce qu'une règle de décision ?::Une fonction $\delta:\mathcal D\to\mathcal A$ qui choisit une action à partir des données observées.

Pourquoi n'existe-t-il pas de procédure universellement meilleure ?::En général aucune règle ne domine toutes les autres : les profils de risque se croisent selon la vraie valeur de $P$ (ou $\theta$).

Donner trois exemples d'estimateurs vus comme des règles de décision.::MLE ($\arg\max_\theta$ vraisemblance), MAP ($\arg\max_\theta$ postérieure), méthode des moments ($h^{-1}$ des moments empiriques) ; aussi l'ERM pour la prédiction.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Fondements de la théorie de décision]]
- [[C - Risque Fréquentiste]]
- [[C - Règles de décision aléatoires]]
