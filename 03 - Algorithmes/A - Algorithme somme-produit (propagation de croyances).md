---
type: algorithme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Algorithme d'inférence exacte sur un **arbre** (SPA, *sum-product algorithm*, ou *belief propagation*) : il calcule **toutes** les marginales de nœuds et d'arêtes d'un coup en **mémorisant et réutilisant les messages** de l'[[A - Élimination de variables|élimination de variables]] (programmation dynamique).
$$m_{i\to j}(x_j)=\sum_{x_i}\psi_i(x_i)\,\psi_{i,j}(x_i,x_j)\prod_{k\in N(i)\setminus\{j\}}m_{k\to i}(x_i)$$

## Intuition

L'élimination de variables calcule **une** marginale $p(x_F)$ ; pour chaque nouvelle requête, il faudrait tout recommencer. Or, sur un arbre, le message que $i$ envoie à son voisin $j$ ne dépend pas de la requête : c'est le résumé de **tout le sous-arbre derrière $i$** (vu depuis $j$). En calculant une fois les $2|E|$ messages (un par sens d'arête), on obtient n'importe quelle marginale par simple produit de messages.

## Formalisme / Dérivation

**UGM en arbre** (cliques = nœuds et arêtes) :
$$p(x)=\frac1Z\prod_{i=1}^n\psi_i(x_i)\prod_{\{i,j\}\in E}\psi_{i,j}(x_i,x_j).$$

**1. Élimination sur un arbre.** Bon ordre : éliminer **les feuilles d'abord**. Aucune arête n'est ajoutée au graphe augmenté → plus grande clique de taille 2, i.e. largeur arborescente 1 ([[C - Largeur arborescente (treewidth)]]). En prenant la requête $F$ comme **racine**, le message d'un enfant $i$ vers son parent $j$ est
$$m_{i\to j}(x_j)=\sum_{x_i}\psi_i(x_i)\psi_{i,j}(x_i,x_j)\underbrace{\prod_{k\in\mathrm{children}(i)}m_{k\to i}(x_i)}_{\text{nouveaux facteurs contenant } i\text{ sur la liste active}}.$$

**2. Message général** (n'importe quel sens) : on remplace « enfants » par « voisins sauf le destinataire », $N(i)\setminus\{j\}$ (formule en tête de note). **Règle** : $i$ ne peut envoyer à $j$ qu'après avoir reçu les messages de **tous ses autres voisins**.

**3. Marginales.**
- Nœud : $p(x_i)\propto\psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$, d'où
$$Z=\sum_{x_i}\psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)\quad(\text{pour n'importe quel } i).$$
- Arête $\{i,j\}$ (nœuds **adjacents** seulement) :
$$p(x_i,x_j)=\frac1Z\,\psi_i(x_i)\psi_j(x_j)\psi_{i,j}(x_i,x_j)\prod_{k\in N(i)\setminus\{j\}}m_{k\to i}(x_i)\prod_{k'\in N(j)\setminus\{i\}}m_{k'\to j}(x_j).$$
- Pour un ensemble de nœuds **non adjacents**, SPA ne suffit pas en général : il faut l'élimination de variables (qui ajoutera des arêtes).

**4. Ordonnancements (*schedules*).**
- **Collecte / distribution** : choisir une racine ; *collecte* = messages des feuilles vers la racine ; *distribution* = messages de la racine vers les feuilles. Après les deux phases, les $2|E|$ messages sont connus.
- **Parallèle (*flooding*)** : initialiser tous les messages à l'uniforme, puis à chaque étape recalculer **tous** les messages en parallèle à partir de ceux de l'étape précédente. Sur un arbre de diamètre $d$, tous les messages sont exacts (points fixes) après $d$ étapes.

**5. Conditionnelles $p(x_i\mid\bar x_E)$** (évidence $\bar x_E$ fixée). Astuce formelle : redéfinir les potentiels des nœuds observés avec un delta de Kronecker,
$$\tilde\psi_j(x_j)\triangleq\psi_j(x_j)\,\delta(x_j,\bar x_j),\qquad\text{d'où}\qquad\sum_{x_j}\tilde\psi_j(x_j)\,\text{(reste)}(x_j,x_i)=\psi_j(\bar x_j)\,\text{(reste)}(\bar x_j,x_i).$$
SPA donne alors $p(x_i,\bar x_E)\propto\psi_i(x_i)\prod_k m_{k\to i}(x_i)$ ; on **normalise sur $x_i$** pour obtenir $p(x_i\mid\bar x_E)$. Leçon : **on ne somme jamais sur les variables observées**.

## Complexité

Avec $k$ valeurs par variable : $2|E|$ messages à $O(k^2)$ chacun → $O(|E|\,k^2)$ pour **toutes** les marginales (contre $O(n\,|E|\,k^2)$ en relançant l'élimination pour chaque nœud).

## Exemple

Chaîne de Markov cachée : SPA sur la chaîne $z_1-\dots-z_T$ (avec les $x_t$ observés) donne exactement la [[A - Récursion alpha-bêta (avant-arrière)|récursion alpha-bêta]] ; la collecte vers $z_t$ est la récursion $\alpha$, la distribution la récursion $\beta$.

## IFT6269 — notation et remarques

- Les notes de 2020 écrivent $\psi_j(x_i)$ dans la formule du message (éq. 16.3, p. 2) : **coquille**, il faut lire $\psi_i(x_i)$.
- Sur un graphe **avec cycles**, l'algorithme n'est plus exact : voir [[A - Propagation de croyances à boucles (loopy BP)]] et [[A - Algorithme de l'arbre de jonction]].
- En remplaçant $(\sum,\times)$ par $(\max,\times)$, on obtient l'[[A - Algorithme max-produit]].

## Flashcards
#flashcards/IFT6269/14-propagation-croyances

Formule du message $m_{i\to j}(x_j)$ dans l'algorithme somme-produit ?::$\sum_{x_i}\psi_i(x_i)\psi_{i,j}(x_i,x_j)\prod_{k\in N(i)\setminus\{j\}}m_{k\to i}(x_i)$.

Pourquoi le message $m_{i\to j}$ exclut-il le message venant de $j$ ?
?
Le message résume le sous-arbre situé du côté de $i$ (vu depuis $j$). Inclure $m_{j\to i}$ réinjecterait de l'information venant de $j$ lui-même et la compterait deux fois.

Quand un nœud $i$ peut-il envoyer son message à $j$ ?::Quand il a reçu les messages de tous ses autres voisins $N(i)\setminus\{j\}$.

Comment obtenir la marginale d'un nœud et $Z$ après SPA ?::$p(x_i)\propto\psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$ ; $Z=\sum_{x_i}\psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$.

Comment conditionner sur une évidence $\bar x_E$ dans SPA ?::Multiplier chaque $\psi_j$ observé par $\delta(x_j,\bar x_j)$ (on ne somme pas sur $x_j$), puis normaliser la marginale obtenue sur $x_i$.

Différence entre l'ordonnancement collecte/distribution et l'ordonnancement parallèle ?::Collecte/distribution : feuilles → racine, puis racine → feuilles, chaque message calculé une fois. Parallèle : tous les messages mis à jour simultanément depuis l'uniforme ; exacts après $d$ étapes (diamètre de l'arbre).

## Liens connexes
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[A - Élimination de variables]]
- [[A - Passation de Messages]]
- [[C - Inférence dans les modèles graphiques]]
- [[M - Modèle Graphique Non-dirigé]]
- [[A - Algorithme max-produit]]
- [[A - Propagation de croyances à boucles (loopy BP)]]
- [[A - Algorithme de l'arbre de jonction]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
- [[T - Reparamétrisation d'un UGM en arbre par ses marginales]]
