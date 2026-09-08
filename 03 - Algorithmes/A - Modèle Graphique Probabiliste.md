---
type: algorithme
cours:
  - IFT6269
statut: à réviser
maj: 2026-09-07
---
Objectif : Modéliser des données multivariées. Un modèle graphique probabiliste (probabilistic graphical model, PGM) est un mélange de théorie des graphes et de théorie des probabilités à l'intersection de l'informatique (CS), des probabilités/statistiques et de l'apprentissage automatique (ML).

### Notation graphique
- Noeud = variable aléatoire.
	- Noeud vide : variable non observée (latente), notée $Y_t$
	- Noeud ombragé (shaded) : variable observée, notée $X_t$
- Arête (arrow) : représente une corrélation possible / dépendance statistique potentielle entre variables. L'absence d'arête représente une hypothèse d'[[C - Indépendance Conditionnelle| indépendance conditionnelle]]  

> Point important : un « nœud » (une « variable aléatoire ») peut être scalaire ou vectoriel. Dans le contexte des PGM, un vecteur aléatoire est souvent simplement appelé « variable aléatoire ».

### Exemple d'applications ([A - Modèle de Markov Caché (HMM)])

a. **Reconnaissance de la parole** : $X_t$ = encodage de l'onde sonore (observé), $Y_t$ = phonème (latent)

b. **Étiquetage grammatical (POS tagging)** : $X_t$ = mot, $Y_t$ = catégorie grammaticale

c. **Recherche de gènes** : $X_t$ = base nitrogénée (ADN), $Y_t$ = codant ou non-codant ($Y_t \in \{0,1\}$)

d. **Système de contrôle** : $y_{t+1} = Ay_t + Bv_t + \epsilon_t$ (état latent continu, $v_t$ = commande de contrôle), $x_t = Cy_t + \epsilon_t'$ (observation, ex. lecture de capteur). Si $\epsilon_t, \epsilon_t'$ sont gaussiens, ce HMM devient un [[C - Modèle de Markov Caché (HMM)#Filtre de Kalman|filtre de Kalman]].

e. **GPT / RNN** (analogie) : $Y_t \to h_t$ (état latent caché du réseau), $X_t \to$ mots. La même intuition « état latent → observation » que le HMM sous-tend les réseaux récurrents.

### Deux grandes familles : dirigé vs. non-dirigé

Un PGM se décline en deux foramlismes selon le type d'arête du graphe $G$ :
#### Modèles dirigés

Les arêtes sont orientées. Le graphe encode une factorisation en distribution conditionnelles : chaque variable $x_i$ possède un facteur correspondant à sa distribution conditionnelle sachant ses parents dans le grpahe, notés $Pa_G(x_i)$:$$p(x) = \prod_i p\big(x_i \mid \text{Pa}_G(x_i)\big)$$
C'est la forme générale dont la [[T - Règle de la chaîne (probabilité)| chaîne markovienne]] utilisée dans le [[A - Modèle de Markov Caché (HMM)|HMM]] n'est qu'un cas particulier (chaque noeud n'a qu'un seul parent, le précédent dans la séquence).
#### Modèles non-dirigés

![[A - Modèle Graphique Non-dirigé]]

## La distinction
Elle est sur la représentation, pas sur la distribution : être dirigé ou non-dirigé n'est pas une propriété de la distribution de probabilité elle-même, mais une propriété d'une description particulière de cette distribution. N'importe quelle distribution peut en principe être décrite des deux façons. Le choix dépend de ce qui est le plus naturel et efficace à représenter pour le problème donné (ex. dépendances séquentielles -­­> dirigé; contraintes symétriques mutuelles (vision par ordinateur) -> non-dirigé).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle de Markov Caché (HMM)]]
- [[C - Factorisation d'une distribution jointe]]
- [[C - Indépendance (variables aléatoires)]]
- [[A - Modèle Graphique Non-dirigé]]
- [[A - Passation de Messages]]
- [[C - Séparation Directionnelle]]