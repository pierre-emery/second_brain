---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Pour $G=(V,E)$ et $G'=(V,E')$ sur les mêmes nœuds :
$$E\subseteq E'\ \Longrightarrow\ \mathcal L(G)\subseteq\mathcal L(G').$$
**Ajouter des arêtes ⇒ plus de distributions** (moins d'hypothèses d'indépendance). Vrai pour les DGM (DAG) comme pour les UGM.

> Les notes de 2018 écrivent « ⇔ », mais la **réciproque est fausse** : deux graphes [[T - Renversement d'arête couverte|Markov-équivalents]] (ex. $X\to Y$ et $Y\to X$) ont $\mathcal L(G)=\mathcal L(G')$ sans que $E\subseteq E'$.

## Preuve

**DGM.** $E\subseteq E'\Rightarrow\pi_i(G)\subseteq\pi_i(G')$ pour tout $i$. Si $p=\prod_if_i(x_i\mid x_{\pi_i(G)})$, chaque $f_i$ est aussi un facteur légal en $(x_i,x_{\pi_i(G')})$ qui ignore simplement les parents supplémentaires. Donc $p\in\mathcal L(G')$.

**UGM.** Toute clique de $G$ est une clique de $G'$ (ou incluse dans une), donc tout produit de potentiels sur les cliques de $G$ est un produit de potentiels sur les cliques de $G'$. $\blacksquare$

## Corollaires / Conséquences

Le graphe vide donne le plus petit modèle (indépendance totale), le graphe complet le plus gros (toutes les distributions).

## Flashcards

#flashcards/IFT6269/11-modeles-diriges

Propriété d'inclusion des modèles graphiques ?::$E\subseteq E'\Rightarrow\mathcal L(G)\subseteq\mathcal L(G')$ : plus d'arêtes, plus de distributions.

La réciproque de la propriété d'inclusion est-elle vraie ?::Non : des graphes Markov-équivalents (ex. $X\to Y$ vs $Y\to X$) donnent le même modèle sans inclusion des arêtes.

Pourquoi un facteur $f_i(x_i\mid x_{\pi_i(G)})$ reste-t-il légal dans $G'\supseteq G$ ?::Il suffit de le voir comme une fonction de $(x_i,x_{\pi_i(G')})$ qui ignore les parents ajoutés ; il somme toujours à 1 en $x_i$.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Dirigé (DGM)]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Renversement d'arête couverte]]
