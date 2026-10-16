---
cours:
  - IFT6758
  - IFT6135
statut: complet
tags: []
prerequis:
  - "[[C - Neurones Artificiels]]"
  - "[[C - Fonction d'activation]]"
maj: 2026-09-26
---
Un réseau de neurone est une fonction de la forme : $f(x;\theta)=f_L(f_{L-1}(...(f_1(x))...))$

- Ils sont composés de [[C - Neurones Artificiels]]
- Une couche est un ensemble de neurones. Chaque neurone de la couche traite les entrées de la couche précédente et produit une sortie
- Plusieurs couches connectées forment un réseau de neurones artificiels profond. Trois types de couches: entrée, sortie, couches cachées. Les sorties d’une couche sont les entrées de la suivante.
- À la sortie d'un neurone artificiel on applique une [[C - Fonction d'activation]] (non linéaire)
- La fonction d’activation de la dernière couche d’un réseau de neurones artificiels permet d’adapter la sortie à la tâche que nous voulons accomplir ([[C - Classification]] binaire ou multiclasse, [[C - Régression]])

## Notation formelle (réseau à $L$ couches cachées)

Avec $\mathbf{h}^{(0)}(\mathbf{x}) = \mathbf{h}$, pour $k=1, \ldots, L$ :

**Pré-activation de la couche $k$ :**
$$\mathbf{a}^{(k)}(\mathbf{x}) = \mathbf{b}^{(k)} + \mathbf{W}^{(k)}\mathbf{h}^{(k-1)}(\mathbf{x})$$
**Activation de la couche $k$ :**
$$\mathbf{h}^{(k)}(\mathbf{x}) = \mathbf{g}(\mathbf{a}^{(k)}(\mathbf{x}))$$
**Sortie du réseau** (couche $k=L+1$, avec activation de sortie $o$) :
$$\mathbf{h}^{(L+1)}(\mathbf{x}) = \mathbf{o}(\mathbf{a}^{(L+1)}(\mathbf{x})) = f(\mathbf{x})$$
**Nomenclature** : le nombre de "couches" d'un réseau ("N-layer network") compte les couches cachées **et** la couche de sortie, mais pas la couche d'entrée. Ex. : 1 couche cachée + sortie = "2-layer network". Un réseau où chaque couche est connectée à toutes les unités de la couche précédente est dit **fully-connected**.

**Exemple compact** (2 couches, activation ReLU) : $f(\mathbf{x}) = \mathbf{W}_2\max(0, \mathbf{W}_1\mathbf{x})$. Avec 3 couches : $f(\mathbf{x}) = \mathbf{W}_3\max(0, \mathbf{W}_2\max(0, \mathbf{W}_1\mathbf{x}))$.

L'ensemble des paramètres est souvent noté $\theta \equiv \{\mathbf{W}^{(1)}, \mathbf{b}^{(1)}, \ldots, \mathbf{W}^{(L+1)}, \mathbf{b}^{(L+1)}\}$.
## Capacité et expressivité

Un seul neurone (donc un [[C - Classification Linéaire|classificateur linéaire]]) ne peut pas résoudre un problème non-linéairement séparable (l'exemple classique est **XOR**). Une couche cachée permet de combiner plusieurs frontières linéaires (une par unité cachée) pour former des régions de décision arbitrairement complexes (voir [[T - Théorème d'approximation universelle]]).
## Analogie biologique

Voir [[C - Neurone Biologique (analogie)]] pour la correspondance (et ses limites) entre neurone artificiel et neurone biologique.

## Entraînement

Voir [[A - Rétropropagation du gradient (gradient descent)]] pour le calcul du gradient et [[A - Initialisation de Glorot (Xavier)]] pour l'initialisation des paramètres.
## Motivation : apprendre les caractéristiques automatiquement

En [[A - Régression Polynomiale]], il faut spécifier "à la main" les transformations de caractéristiques $\phi(x)$. L'idée d'un réseau de neurones est de rendre ces transformations elles-mêmes apprenables : $$f(x;\theta)=W\phi(x;\theta_2)+b, \quad \theta=(\theta_1,\theta_2),\ \theta_1=(W,b)$$ En répétant ce processus (composer plusieurs couches), on gagne en expressivité à condition d'ajouter de la non-linéarité entre les couches (voir [[C - Fonction d'activation]]).
## [[C - Complexité d'un modèle (capacité)]]

ATTENTION! ajouter des couches à une réseau de neurones n'est pas toujours la solution

- Ça améliore les performances d'un réseau de neurones jusqu'à un certain point.
- Les performances peuvent chuter si on en ajoute trop (problème de la [[A - Rétropropagation du gradient (gradient descent)]]
- C'est particulièrement vrai avec l'architecture classique des RN convolutionnels
- L'erreur de classification finit par augmenter avec le nombre de couches

Changer la structure du réseau de neurones est souvent plus efficace

- Le réseau ResNet surpasse les performances des [[A - Réseau de neuronnes convolutionnels (CNN)]] classiques
- La structure de ResNet lui permet d'améliorer ses performances en ajoutant des couches.
- Famille de modèles Resnet (18, 34, 50, 101, 152 couches)

Changer de famille de modèles est encore plus efficace

- Les performances finissent par plaffoner pour une famille de structure donnée
- Il faut tester des structures différentes de RN
- Trop peaufiner un modèle préféré diminue les retours sur investissement.
- Il est important d'être au courant de la littérature et des ressources disponibles.

## [[C - Interprétabilité]]

L'interprétabilité des résultats des réseaux de neurones est un champ actif de recherche. Il faut être un expert pour comprendre un résultat et ses implications. Mais un système expert de nouvelle génération pourrait expliquer ses décisions

## Liens connexes

- [[T - Théorème d'approximation universelle]]
- [[C - Neurone Biologique (analogie)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Initialisation de Glorot (Xavier)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/01-neurone

Pré-activation et activation de la couche $k$ d'un réseau ?::$\mathbf{a}^{(k)} = \mathbf{b}^{(k)} + \mathbf{W}^{(k)}\mathbf{h}^{(k-1)}$ ; $\mathbf{h}^{(k)} = \mathbf{g}(\mathbf{a}^{(k)})$.

Combien de couches a un « 2-layer network » ?::Une couche cachée + la couche de sortie (on ne compte pas l'entrée).

Écris un réseau ReLU à 3 couches de façon compacte (sans biais).::$f(\mathbf{x}) = \mathbf{W}_3\max(0, \mathbf{W}_2\max(0, \mathbf{W}_1\mathbf{x}))$

Exemple classique de problème qu'un seul neurone ne peut pas résoudre ?::XOR (non linéairement séparable).

Quelle est l'idée clé d'un réseau de neurones par rapport à une régression polynomiale ?::Rendre les transformations de caractéristiques $\phi(\mathbf{x}; \theta)$ **apprenables** au lieu de les fixer à la main.

Ajouter des couches améliore-t-il toujours la performance ?::Non : au-delà d'un certain point l'erreur augmente (difficultés d'optimisation, gradients) : ce que ResNet corrige.