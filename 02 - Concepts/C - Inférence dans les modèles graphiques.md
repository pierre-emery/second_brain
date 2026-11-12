---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-12
---
## Définition

**Inférence** = utiliser un modèle graphique pour calculer :

1. une **marginale** $p(x_F)$, $F\subseteq V$ ;
2. une **conditionnelle** $p(x_F\mid x_E)$ (nœuds requête $F$, nœuds d'évidence $E$) ;
3. la **fonction de partition** d'un UGM, $Z=\sum_{x_V}\prod_C\psi_C(x_C)$.

C'est le thème (B) du cours, entre (A) la **représentation/paramétrisation** des familles de distributions (DGM, UGM, famille exponentielle) et (C) l'**estimation statistique** (maximum de vraisemblance, maximum d'entropie, méthode des moments). Voir [[C - Thèmes clés de l'apprentissage statistique]].

## Situations qui demandent de l'inférence

| Tâche              | Quantité                                     | Exemple                           |
| ------------------ | -------------------------------------------- | --------------------------------- |
| Données manquantes | $p(x_{\text{non obs.}}\mid x_{\text{obs.}})$ | complétion d'image (*inpainting*) |
| Prédiction         | $p(x_{\text{futur}}\mid x_{\text{passé}})$   | série temporelle                  |
| Cause latente      | $p(x_{\text{cause}}\mid x_{\text{obs.}})$    | modèle QMR (maladies ↔ symptômes) |
| Décodage (lié)     | $\arg\max_{x_F}p(x_F\mid x_E)$               | reconnaissance de la parole       |
| Estimation         | $p(z\mid x)$                                 | étape E de l'[[A - Algorithme EM (espérance-maximisation)\|algorithme EM]] |
## Remarques

- On présente les algorithmes pour les **UGM** (plus simples et plus généraux) ; un DGM s'y ramène par [[C - Moralisation|moralisation]] : $\psi_{C_i}(x_{C_i})=p(x_i\mid x_{\pi_i})$ sur $C_i=\{i\}\cup\pi_i$, $Z=1$.
- Algorithmes : [[A - Élimination de variables]], [[A - Algorithme somme-produit (propagation de croyances)]] (arbres), [[A - Algorithme max-produit]] et [[A - Algorithme de Viterbi]] (arg max), [[A - Algorithme de l'arbre de jonction]] (graphes triangulés), [[A - Propagation de croyances à boucles (loopy BP)]] (approximatif) ; cas des HMM : [[A - Récursion alpha-bêta (avant-arrière)]].
- **Mauvaise nouvelle** : l'inférence exacte est NP-difficile en général → inférence **approximative** (Gibbs, champ moyen). **Bonne nouvelle** : temps linéaire sur les arbres, efficace à faible [[C - Largeur arborescente (treewidth)|largeur arborescente]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Élimination de variables]]
- [[A - Passation de Messages]]
- [[C - Largeur arborescente (treewidth)]]
- [[C - Thèmes clés de l'apprentissage statistique]]
- [[A - Algorithme somme-produit (propagation de croyances)]]
- [[A - Algorithme de l'arbre de jonction]]
- [[C - Filtrage, lissage et prédiction (HMM)]]
- [[A - Algorithme EM (espérance-maximisation)]]

## Flashcards

#flashcards/IFT6269/13-inference

Trois quantités typiques que l'inférence calcule ?::Une marginale $p(x_F)$, une conditionnelle $p(x_F\mid x_E)$, la fonction de partition $Z$ d'un UGM.

Trois grands thèmes du cours IFT6269 ?::(A) représentation/paramétrisation, (B) inférence, (C) estimation statistique.

Pourquoi présenter l'inférence pour les UGM seulement ?::C'est plus simple et plus général ; un DGM se convertit en UGM par moralisation (potentiels = CPT, $Z=1$).

Exemple d'inférence nécessaire à l'estimation ?::L'étape E de l'algorithme EM calcule $p(z\mid x)$ dans un modèle à variables latentes.
