---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Conventions graphiques pour représenter un modèle probabiliste de façon concise (« une image vaut mille mots »), surtout quand des variables se **répètent** (ex. $n=10^6$ exemples).

**Nœuds et arêtes**
1. **Cercle** : variable aléatoire ou paramètre dont on **modélise l'incertitude**.
2. **Carré** : variable ou paramètre supposé **connu** (on ne modélise pas son incertitude).
3. **Flèche** : dépendance.
4. **Cercle ombragé** : variable **observée** ; non ombragé : non observée (latente).

**Plaques** (*plates*)
1. Un **rectangle** (plaque) regroupe les variables qui se répètent ensemble.
2. Les variables y sont indexées, et la plage de l'indice est écrite sur la plaque ; on « déplie » en répétant le contenu.
3. Une flèche qui traverse la plaque = une flèche **par répétition**.

> Les conventions varient selon les sources (voir Wikipedia *Plate notation*).

## Exemples

- **Mélange / variables latentes** : $\phi$ (carré) $\to Z_i\to X_i$, plaque $i=1..N$ ; $X_i$ ombragé, $Z_i$ non. Dépliée : $\phi\to Z_1\to X_1,\ \dots,\ \phi\to Z_N\to X_N$.
- **[[M - Analyse Discriminante Linéaire (LDA)|LDA]]** : $\pi\to Y_i\to X_i\leftarrow\theta$, plaque $i=1..n$, $X_i,Y_i$ observés.
- Exercice : dessiner la régression linéaire et la régression logistique en plaques.

## Flashcards

#flashcards/IFT6269/09-lda-calcul-matriciel

Cercle vs carré en notation graphique ?::Cercle : quantité dont on modélise l'incertitude. Carré : quantité supposée connue.

Que signifie un nœud ombragé ?::La variable est observée.

Que représente une plaque ?::Un groupe de variables répétées ensemble (indice et plage écrits sur la plaque) ; une flèche qui la traverse vaut une flèche par répétition.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Variable latente]]
