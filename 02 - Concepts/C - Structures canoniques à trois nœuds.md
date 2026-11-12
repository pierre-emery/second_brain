---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Définition

Énumération des comportements possibles d'un [[M - Modèle Graphique Dirigé (DGM)|DGM]] à 3 nœuds. Outre le graphe **vide** (indépendance totale) et le graphe **complet** (aucune information au-delà de la règle de la chaîne), trois structures à deux arêtes :

| Structure | Graphe | Indépendance garantie | Pas garanti |
|---|---|---|---|
| **Chaîne de Markov** | $X\to Z\to Y$ | $X\perp\!\!\!\perp Y\mid Z$ | $X\perp\!\!\!\perp Y$ |
| **Cause latente** (fourche) | $X\leftarrow Z\to Y$ | $X\perp\!\!\!\perp Y\mid Z$ | $X\perp\!\!\!\perp Y$ |
| **V-structure** (explication mutuelle) | $X\to Z\leftarrow Y$ | $X\perp\!\!\!\perp Y$ | $X\perp\!\!\!\perp Y\mid Z$ |

## Preuves

**Chaîne** $p=p(x)p(z\mid x)p(y\mid z)$ : le « futur » $Y$ est indépendant du « passé » $X$ sachant le « présent » $Z$.
$$p(y\mid z,x)=\frac{p(x,z,y)}{\sum_{y'}p(x,z,y')}=\frac{p(x)p(z\mid x)p(y\mid z)}{p(x)p(z\mid x)\sum_{y'}p(y'\mid z)}=p(y\mid z).$$
Mais il existe des $p\in\mathcal L(G)$ où $X\not\perp\!\!\!\perp Y$ (la dépendance « passe » par $Z$).

**Cause latente** $p=p(z)p(x\mid z)p(y\mid z)$ :
$$p(x,y\mid z)=\frac{p(z)p(x\mid z)p(y\mid z)}{p(z)}=p(x\mid z)p(y\mid z).$$

**V-structure** $p=p(x)p(y)p(z\mid x,y)$ :
$$p(x,y)=\sum_zp(x)p(y)p(z\mid x,y)=p(x)p(y)\sum_zp(z\mid x,y)=p(x)p(y).$$
En général $X\not\perp\!\!\!\perp Y\mid Z$ : observer $Z$ **crée** une dépendance → [[C - Explication mutuelle (explaining away)]].

## Remarques

- Chaîne et cause latente sont **Markov-équivalentes** (même DGM, par [[T - Renversement d'arête couverte|renversement d'arête]]) ; la V-structure est une classe différente.
- **Éviter le mot « cause »** : des statistiques observationnelles donnent des corrélations, pas de causalité.
- **Toute relation n'est pas représentable** par un modèle graphique : $Z=X\oplus Y$ (XOR, pièces équilibrées) donne trois variables **indépendantes deux à deux mais pas mutuellement** ; aucun DAG à 3 nœuds ne capture exactement cet ensemble d'indépendances.

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Chaîne $X\to Z\to Y$ : quelles indépendances ?::$X\perp\!\!\!\perp Y\mid Z$ toujours ; $X\perp\!\!\!\perp Y$ pas en général.

Cause latente $X\leftarrow Z\to Y$ : quelles indépendances ?::$X\perp\!\!\!\perp Y\mid Z$ toujours ; pas d'indépendance marginale en général.

V-structure $X\to Z\leftarrow Y$ : quelles indépendances ?::$X\perp\!\!\!\perp Y$ (marginalement) ; mais en général $X\not\perp\!\!\!\perp Y\mid Z$.

Preuve de $X\perp\!\!\!\perp Y$ dans la V-structure ?::$p(x,y)=\sum_zp(x)p(y)p(z\mid x,y)=p(x)p(y)\sum_zp(z\mid x,y)=p(x)p(y)$.

Exemple de distribution non représentable exactement par un DGM à 3 nœuds ?::$Z=X\oplus Y$ (XOR) : indépendance deux à deux sans indépendance mutuelle.

Quelles structures à 3 nœuds sont Markov-équivalentes ?::La chaîne et la cause latente ; la V-structure forme une classe à part.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[C - Explication mutuelle (explaining away)]]
- [[C - Séparation Directionnelle]]
- [[A - Bayes-Ball]]
- [[C - Indépendance Conditionnelle]]
