---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Phénomène de la **V-structure** $X\to Z\leftarrow Y$ ([[C - Structures canoniques à trois nœuds|structure canonique]]) : $X$ et $Y$ sont marginalement indépendants, mais **observer leur effet commun $Z$ (ou un descendant de $Z$) les rend dépendants**. Deux explications concurrentes d'un même effet : en confirmer une rend l'autre moins nécessaire.
## Exemple : non-monotonie du conditionnement

$X$ = « j'ai été enlevé par des extraterrestres », $Y$ = « ma montre est brisée », $Z$ = « je suis en retard ».

- $p(\text{alien})$ est minuscule ;
- $p(\text{alien}\mid\text{retard})>p(\text{alien})$ : être en retard est un (petit) indice d'enlèvement ;
- $p(\text{alien}\mid\text{retard},\text{montre brisée})<p(\text{alien}\mid\text{retard})$ : la montre **explique** le retard, l'enlèvement redevient improbable.

Conditionner sur plus d'information peut donc **augmenter ou diminuer** la probabilité d'un événement : le conditionnement est **non monotone**.
## Rôle

- Règle de **blocage** spéciale de la [[C - Séparation Directionnelle|d-séparation]] : une V-structure bloque un chemin **sauf** si $Z$ ou un de ses descendants est observé.
- Raison pour laquelle la [[C - Moralisation|moralisation]] « marie » les parents et pour laquelle la [[C - Couverture de Markov|couverture de Markov]] d'un DGM contient les co-parents.
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Structures canoniques à trois nœuds]]
- [[C - Séparation Directionnelle]]
- [[A - Bayes-Ball]]
- [[C - Moralisation]]
## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Qu'est-ce que l'« explaining away » ?::Dans $X\to Z\leftarrow Y$, $X\perp\!\!\!\perp Y$, mais observer $Z$ (ou un descendant) les rend dépendants : confirmer une cause rend l'autre moins probable.

Exemple alien / montre / retard : ordre des trois probabilités ?::$p(\text{alien})<p(\text{alien}\mid\text{retard})$ mais $p(\text{alien}\mid\text{retard},\text{montre})<p(\text{alien}\mid\text{retard})$.

Que signifie « conditionnement non monotone » ?::Ajouter de l'information conditionnante peut augmenter ou diminuer la probabilité d'un événement.