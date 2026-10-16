---

type: theoreme

cours: [IFT6135]

statut: brouillon

maj: 2026-09-26

---
**Énoncé (Hornik, 1991)** : un réseau de neurones à une seule couche cachée, avec une unité de sortie linéaire, peut approximer n'importe quelle fonction continue arbitrairement bien, à condition d'avoir assez d'unités cachées.

Le résultat s'applique pour la sigmoïde, tanh, ReLU, et beaucoup d'autres [[C - Fonction d'activation|fonctions d'activation]] en couche cachée.
## Attention

C'est un résultat d'**existence**, pas de constructibilité : il ne garantit pas qu'un algorithme d'apprentissage (ex. [[A - Descente de Gradient Stochastique (SGD)]]) puisse effectivement trouver les valeurs de paramètres nécessaires.
## Liens connexes

- [[A - Réseau de neurones]]
- [[C - Fonction d'activation]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - Modèles ML (supervisé)]]
## Flashcards

#flashcards/IFT6135/01-neurone

Énoncé du théorème d'approximation universelle (Hornik, 1991) ?::Un réseau à **une seule couche cachée** avec sortie linéaire peut approximer n'importe quelle fonction continue arbitrairement bien, avec assez d'unités cachées.

Quelle est la limite pratique du théorème d'approximation universelle ?::C'est un résultat d'**existence** : il ne garantit pas que l'apprentissage (SGD) trouvera ces paramètres, ni combien d'unités il faut.