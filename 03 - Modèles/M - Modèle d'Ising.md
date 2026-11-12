---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Intuition

Modèle de physique statistique (spins magnétiques) devenu un [[M - Modèle Graphique Non-dirigé|UGM]] classique, très utilisé en **vision par ordinateur** (pixels voisins sur une **grille**). Variables binaires $x_i\in\{0,1\}$ avec des potentiels de nœud et d'arête.

## Idée générale / Formalisation

Potentiels strictement positifs ⇒ [[D - Famille exponentielle|famille exponentielle]] :
$$p(x)=\frac1Z\exp\Big(\sum_{i\in V}\theta_i\,x_i+\sum_{\{i,j\}\in E}\theta_{ij}\,x_ix_j\Big)$$
- potentiel de nœud : $\theta_i$ ↔ $\log\psi_i(x_i=1)$ (« énergie » locale) ;
- potentiel d'arête : $\theta_{ij}$ ↔ $\log\psi_{ij}(x_i=1,x_j=1)$ (couplage : $\theta_{ij}>0$ favorise des voisins égaux à 1).

*(Les notes donnent seulement $E_i=\psi_i(x_i=1)$ et $E_{ij}=\psi_{ij}(x_i=1,x_j=1)$ ; la forme exponentielle ci-dessus est la paramétrisation standard.)*

## Complexité

Sur une grille $\sqrt{|V|}\times\sqrt{|V|}$, la [[C - Largeur arborescente (treewidth)|largeur arborescente]] croît comme $\sqrt{|V|}$ → inférence **exacte** intractable ; on utilisera l'échantillonnage de Gibbs ou le champ moyen (*mean field*) plus tard.

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Forme du modèle d'Ising ?::$p(x)\propto\exp(\sum_i\theta_ix_i+\sum_{\{i,j\}\in E}\theta_{ij}x_ix_j)$, $x_i\in\{0,1\}$ : potentiels de nœud et d'arête.

Pourquoi l'inférence exacte est-elle difficile dans un Ising sur grille ?::La largeur arborescente d'une grille croît comme $\sqrt{|V|}$ ; il faut de l'inférence approximative (Gibbs, champ moyen).

Que représente un $\theta_{ij}>0$ dans le modèle d'Ising ?::Un couplage positif : la configuration où deux voisins valent 1 ensemble est favorisée (voisins semblables, ex. pixels voisins de même étiquette).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Non-dirigé]]
- [[D - Famille exponentielle]]
- [[C - Largeur arborescente (treewidth)]]
