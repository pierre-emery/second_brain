---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Pour un graphe non dirigé $G$ :
$$\mathrm{tw}(G)\triangleq\min_{\text{ordres d'élimination}}\big\{\text{taille de la plus grande clique (d'élimination)}-1\big\}.$$
Le « $-1$ » est une convention pour que **la largeur arborescente d'un arbre vaille 1**.
## Intuition

Mesure à quel point un graphe est « loin d'un arbre ». Le coût en temps et en mémoire de l'[[A - Élimination de variables|élimination de variables]] est exponentiel en la taille de la plus grande clique d'élimination ; le **meilleur ordre** donne donc un coût $\approx k^{\mathrm{tw}+1}\cdot n$.
## Exemples

| Graphe                                                                                                  | $\mathrm{tw}$                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Arbre (chaîne, HMM, étoile avec bon ordre)                                                              | 1                              |
| Cycle                                                                                                   | 2                              |
| Grille $\sqrt{\lvert V\rvert}\times\sqrt{\lvert V\rvert}$ (ex. [[A - Modèle d'Ising\|Ising]] en vision) | $\approx\sqrt{\lvert V\rvert}$ |
| Graphe complet $K_n$                                                                                    | $n-1$                          |
## Propriétés

- **Calculer la largeur arborescente (trouver le meilleur ordre) est NP-difficile.**
- L'inférence exacte est NP-difficile en général → méthodes **approximatives** (Gibbs, champ moyen).
- Faible largeur arborescente → inférence exacte efficace : temps linéaire $O(|V|+|E|)$ sur les arbres (somme-produit), arbre de jonction sur les graphes généraux.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Élimination de variables]]
- [[C - Graphe triangulé]]
- [[C - Inférence dans les modèles graphiques]]
- [[A - Modèle d'Ising]]
## Flashcards

#flashcards/IFT6269/13-inference

Définition de la largeur arborescente ?::Le minimum, sur les ordres d'élimination, de (taille de la plus grande clique d'élimination − 1).

Largeur arborescente d'un arbre ? d'une grille ?::Arbre : 1. Grille à $|V|$ nœuds : $\approx\sqrt{|V|}$.

Pourquoi la largeur arborescente compte-t-elle pour l'inférence ?::Le coût de l'élimination de variables est exponentiel en la taille de la plus grande clique d'élimination ; le meilleur ordre donne $\approx k^{\mathrm{tw}+1}n$.

Peut-on calculer facilement la largeur arborescente ?::Non, c'est NP-difficile (comme l'inférence exacte en général).