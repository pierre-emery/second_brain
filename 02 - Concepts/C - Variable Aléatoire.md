---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: brouillon
maj: 2026-09-30
---
Fonction définie sur les résultats d'un espace de probabilité.

**Exemple** (lancer d'un dé) : $X$ est la valeur du résultat ; $O$ vaut 1 si le résultat est 1, 3 ou 5, sinon 0 ; $S$ vaut 1 si le résultat est plus petit que 4, sinon 0.

Pour une variable continue $X$, $p(x)$ est une fonction de densité : $P(X \in A) = \int_{x \in A} p(x)\,dx$, et $P(X=x) = 0$.

## Notes supplémentaires de IFT6269

Formalisation de la notion de hasard : $X$ est une variable aléatoire $\rightarrow$ elle représente une **quantité incertaine**, par exemple $X =$ "résultat d'un lancer de dé". $X=x$ représente l'événement que $X$ prend la valeur $x$.

### Définition formelle

Une variable aléatoire est une application (mesurable) $X:\Omega\rightarrow\mathbb R$ où $\Omega$ est l'[[C - Espace de Probabilité|espace échantillon]].

Notation : $P(\{X=x\}) = p(x)$ (le raccourci usuel, encore plus ambigu : $p(x)$).

### Deux types de variables aléatoiresà
- **Discrète** : $\Omega$ (ou l'image de $X$) est dénombrable. Caractérisée par sa [[C - Fonction de masse et de densité (pmf-pdf)|fonction de masse (pmf)]].
- **Continue** : $\Omega$ est non-dénombrable. Caractérisée par sa [[C - Fonction de masse et de densité (pmf-pdf)|fonction de densité (pdf)]]. Le σ-field ($\mathcal E$) devient crucial ici (ex. le **σ-field de Borel**), il n'est plus simplement $2^\Omega$.
## Liens connexes

- [[MOC - Probabilité]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Espace de Probabilité]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[C - Distribution de probabilité (axiomes de Kolmogorov)]]
- [[C - Fonction de masse et de densité (pmf-pdf)]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition formelle d'une variable aléatoire ?::Une fonction (mesurable) $X: \Omega \to \mathbb{R}$ définie sur les résultats d'un espace de probabilité.

Pour une variable continue, que vaut $P(X = x)$ ?::0 : $p(x)$ est une densité, et $P(X \in A) = \int_A p(x)\,dx$.

Variable discrète vs continue : comment chacune est-elle caractérisée ?::Discrète : fonction de masse (pmf). Continue : fonction de densité (pdf).

#flashcards/IFT6269/01-probabilites

Que représente l'événement $\{X = x\}$, et quel est le raccourci de notation usuel ?::L'ensemble des $\omega \in \Omega$ tels que $X(\omega) = x$ ; on note $P(\{X=x\}) = p(x)$.

Pourquoi le σ-field devient-il crucial pour une variable continue ?::Quand $\Omega$ est non dénombrable, on ne peut plus prendre $\mathcal E = 2^\Omega$ ; on utilise un σ-field plus restreint, typiquement le σ-field de Borel.