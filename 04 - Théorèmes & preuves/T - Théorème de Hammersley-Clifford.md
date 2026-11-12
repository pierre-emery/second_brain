---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Si $p(x_V)>0$ pour tout $x_V$, alors
$$p\in\mathcal L(G)\iff p\ \text{satisfait la propriété de Markov globale pour } G .$$
Pour les distributions **strictement positives**, « se factoriser selon les cliques » et « respecter les indépendances lues par séparation » sont équivalents.

## Hypothèses

**Positivité stricte** : indispensable pour (⇐). Sans elle, il existe des $p$ qui satisfont toutes les indépendances de Markov sans se factoriser (devoir 3).

## Preuve

- (⇒) vraie même sans positivité : [[T - La factorisation UGM implique la propriété de Markov globale]].
- (⇐) théorème profond : voir le chapitre 16 du livre de Michael I. Jordan.

## Corollaires / Conséquences

Pour $p>0$, on peut passer librement entre la vue **représentation** (factorisation) et la vue **indépendances** d'un UGM.

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Théorème de Hammersley-Clifford ?::Si $p>0$ partout : $p\in\mathcal L(G)$ ssi $p$ satisfait la propriété de Markov globale pour $G$.

Quelle direction de Hammersley-Clifford demande la positivité ?::Markov global ⇒ factorisation. La direction factorisation ⇒ Markov global est toujours vraie.

Que se passe-t-il pour Hammersley-Clifford si $p$ n'est pas strictement positive ?::$p$ peut satisfaire toutes les indépendances de Markov globales sans se factoriser selon les cliques (contre-exemple du devoir 3).

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[M - Modèle Graphique Non-dirigé]]
- [[C - Propriété de Markov globale]]
- [[T - La factorisation UGM implique la propriété de Markov globale]]
