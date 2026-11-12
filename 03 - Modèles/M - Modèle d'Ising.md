---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
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

## Représentation minimale (IFT6269, famille exponentielle)

Variables $x_i\in\{0,1\}$ (deux directions de spin), cliques de taille $\le2$. Avec des potentiels de nœuds **et** d'arêtes sous forme d'indicatrices $\mathbb 1\{x_C=y_C\}$, $T(x)$ est de dimension $2|V|+4|E|$ : famille **sur-paramétrée** (comme la multinoulli, car $\sum_{y_C}T_{C,y_C}(x)=1$).

**Représentation minimale**, de dimension $|V|+|E|$ :
$$T(x)=\begin{pmatrix}(x_i)_{i\in V}\\(x_ix_j)_{\{i,j\}\in E}\end{pmatrix}=\begin{pmatrix}\vdots\\\mathbb 1\{x_i=1\}\\\vdots\\\mathbb 1\{x_i=1,x_j=1\}\\\vdots\end{pmatrix},\qquad\mathbb E[T(x)]=\begin{pmatrix}(\mu_i)_{i\in V}\\(\mu_{ij})_{\{i,j\}\in E}\end{pmatrix}.$$
Elle suffit, car $p_i=\mu_i$, $p_j=\mu_j$ et $p_{ij}=\mu_{ij}$ déterminent toute la loi jointe de $(x_i,x_j)$ :

| | $x_i=0$ | $x_i=1$ |
|---|---|---|
| $x_j=0$ | $1-p_i-p_j+p_{ij}$ | $p_i-p_{ij}$ |
| $x_j=1$ | $p_j-p_{ij}$ | $p_{ij}$ |

**Apprentissage** : le gradient du MLE est $\hat\mu-\mu(\eta)$, avec $\mu_{ij}=p(x_i=1,x_j=1\mid\eta)$ ; sur une grille, il faut une inférence approximative → [[C - Estimation des paramètres dans les modèles graphiques]].

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Forme du modèle d'Ising ?::$p(x)\propto\exp(\sum_i\theta_ix_i+\sum_{\{i,j\}\in E}\theta_{ij}x_ix_j)$, $x_i\in\{0,1\}$ : potentiels de nœud et d'arête.

Pourquoi l'inférence exacte est-elle difficile dans un Ising sur grille ?::La largeur arborescente d'une grille croît comme $\sqrt{|V|}$ ; il faut de l'inférence approximative (Gibbs, champ moyen).

Que représente un $\theta_{ij}>0$ dans le modèle d'Ising ?::Un couplage positif : la configuration où deux voisins valent 1 ensemble est favorisée (voisins semblables, ex. pixels voisins de même étiquette).

Dimension de $T(x)$ pour un Ising en représentation minimale vs par indicatrices ?::Minimale : $|V|+|E|$ ($x_i$ et $x_ix_j$). Indicatrices de nœuds et d'arêtes : $2|V|+4|E|$ (sur-paramétrée).

Pourquoi $(p_i,p_j,p_{ij})$ suffisent-ils à décrire la loi de $(x_i,x_j)$ binaires ?::Les 4 cases s'en déduisent : $p_{ij}$, $p_i-p_{ij}$, $p_j-p_{ij}$, $1-p_i-p_j+p_{ij}$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Non-dirigé]]
- [[D - Famille exponentielle]]
- [[C - Largeur arborescente (treewidth)]]
- [[C - Estimation des paramètres dans les modèles graphiques]]
- [[A - Propagation de croyances à boucles (loopy BP)]]
