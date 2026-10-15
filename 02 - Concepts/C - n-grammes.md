---

type: concept

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
Un **n-gramme** est une suite de $n$ mots consécutifs. Un modèle de langage n-gramme applique l'hypothèse de Markov d'ordre $n$ (voir [[C - Modélisation du Langage]]) : chaque mot ne dépend que des $n-1$ mots qui le précèdent.
$$p(w_t \mid w_1, \dots, w_{t-1}) \approx p(w_t \mid w_{t-(n-1)}, \dots, w_{t-1})$$
## Estimation par comptage *(complément, hors diapos)*

Le modèle classique estime chaque conditionnelle par fréquences relatives dans un corpus :
$$\hat{p}(w_t \mid w_{t-n+1}, \dots, w_{t-1}) = \frac{\mathrm{count}(w_{t-n+1}, \dots, w_{t-1}, w_t)}{\mathrm{count}(w_{t-n+1}, \dots, w_{t-1})}$$
C'est le [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] d'une loi catégorielle par contexte.
## Limite : rareté des données

Le nombre de contextes possibles croît en $|V|^{n-1}$ ([[C - Malédiction de la dimensionalité|malédiction de la dimensionalité]]) : la plupart des n-grammes n'apparaissent jamais dans le corpus et reçoivent une probabilité nulle. Chaque n-gramme est traité comme un symbole indépendant : rien n'est partagé entre « le chat dort » et « le chien dort ».

C'est la motivation du [[A - Modèle de Langage Neuronal (Bengio 2003)|modèle de langage neuronal]] : en apprenant des [[C - Plongement de Mots (Word Embedding)|représentations de mots]], on **transfère** vers des n-grammes non observés à l'entraînement.
## Comme caractéristiques de texte

Les n-grammes servent aussi de caractéristiques : on étend le [[C - Bag of Words|sac de mots]] en comptant les n-grammes (bigrammes, trigrammes…) d'un document, ce qui capture un peu d'ordre local des mots au prix d'un vocabulaire beaucoup plus grand.
## Liens connexes

- [[C - Bag of Words]]
- [[MOC - Modèles ML (supervisé)]]
- [[C - Modélisation du Langage]]
- [[A - Modèle de Langage Neuronal (Bengio 2003)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]