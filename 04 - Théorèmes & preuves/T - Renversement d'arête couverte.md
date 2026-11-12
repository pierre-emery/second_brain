---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

**Arête couverte.** Dans un DAG, $(i,j)\in E$ est **couverte** si $\pi_j=\pi_i\cup\{i\}$ : $j$ a exactement les parents de $i$, plus $i$.

**Théorème (renversement).** Soit $G=(V,E)$ un DAG et $(i,j)$ une arête couverte. Posons $G'=(V,E')$ avec $E'=(E\setminus\{(i,j)\})\cup\{(j,i)\}$. Alors $G'$ est un DAG et
$$\mathcal L(G)=\mathcal L(G').$$

**Cas particulier (équivalence de Markov, prop. 11.22).** Si $|\pi_i|=0$ et $|\pi_j|\le1$ (donc $\pi_j=\{i\}$), on peut renverser $(i,j)$.

## Preuve

**$G'$ est un DAG.** Prenons un ordre topologique de $G$ : $(1,\dots,i,\dots,j,\dots,n)$, $j=i+k$. On peut remonter $j$ juste après $i$ : $(1,\dots,i,j,i+1,\dots,n)$ reste topologique pour $G$, car $\pi_j=\pi_i\cup\{i\}\subseteq\{1,\dots,i\}$, et pour les nœuds intermédiaires $m$, $\pi_m\subseteq\{1,\dots,m-1\}$ reste satisfait (aucun n'est enfant de $j$, sinon $j$ ne serait pas après eux). Alors $(1,\dots,j,i,\dots,n)$ est topologique pour $G'$ : seuls les parents de $i$ et $j$ changent ($\pi'_j=\pi_i$, $\pi'_i=\pi_i\cup\{j\}$), et tous sont à leur gauche. Donc $G'$ est un DAG.

**$\mathcal L(G)\subseteq\mathcal L(G')$.** Soit $p\in\mathcal L(G)$ : $p(x)=\prod_kp(x_k\mid x_{\pi_k})$. Pour $p(x_i,x_j,x_{\pi_i})\ne0$, la règle de la chaîne (valable pour toute distribution) donne
$$p(x_i\mid x_{\pi_i})\,p(x_j\mid x_i,x_{\pi_i})=p(x_i,x_j\mid x_{\pi_i})=p(x_j\mid x_{\pi_i})\,p(x_i\mid x_j,x_{\pi_i}).$$
Comme l'arête est couverte, $\pi_j=\pi_i\cup\{i\}$, et dans $G'$ : $\pi'_j=\pi_i$, $\pi'_i=\pi_i\cup\{j\}$. L'égalité se lit
$$p(x_i\mid x_{\pi_i})\,p(x_j\mid x_{\pi_j})=p(x_j\mid x_{\pi'_j})\,p(x_i\mid x_{\pi'_i}).$$
Puisque $\pi'_k=\pi_k$ pour $k\ne i,j$, on échange simplement les deux facteurs :
$$p(x)=p(x_j\mid x_{\pi'_j})\,p(x_i\mid x_{\pi'_i})\prod_{k\ne i,j}p(x_k\mid x_{\pi'_k}).$$
Si $p(x_i,x_j,x_{\pi_i})=0$, les deux côtés valent 0. Donc $p\in\mathcal L(G')$.

**Réciproque** : par symétrie ($(j,i)$ est couverte dans $G'$). $\blacksquare$

*(Les notes de 2018 contiennent la coquille « $\pi_j=\pi_i\cup\{j\}$ » dans la preuve ; il faut lire $\cup\{i\}$.)*

## Corollaires / Conséquences

- **3 nœuds** : la chaîne $X\to Z\to Y$ et la cause latente $X\leftarrow Z\to Y$ sont équivalentes ; la **V-structure** ne l'est pas (renverser une de ses arêtes la détruirait).
- En appliquant le renversement plusieurs fois : **tous les arbres dirigés obtenus d'un même arbre non dirigé donnent le même DGM**.
- Renverser une arête **non couverte** peut créer un cycle ou changer le modèle.

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Qu'est-ce qu'une arête couverte $(i,j)$ ?::Une arête telle que $\pi_j=\pi_i\cup\{i\}$.

Que dit le théorème du renversement d'arête couverte ?::Renverser une arête couverte donne un DAG $G'$ avec $\mathcal L(G)=\mathcal L(G')$.

Identité clé de la preuve du renversement d'arête couverte ?::$p(x_i\mid x_{\pi_i})p(x_j\mid x_i,x_{\pi_i})=p(x_j\mid x_{\pi_i})p(x_i\mid x_j,x_{\pi_i})$ (règle de la chaîne), puis on échange les deux facteurs.

Conséquence pour les arbres dirigés ?::Toutes les orientations d'un même arbre non dirigé (avec une seule racine) donnent le même DGM.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[C - Structures canoniques à trois nœuds]]
- [[T - Inclusion des modèles graphiques]]
- [[C - Graphe acyclique dirigé (DAG)]]
