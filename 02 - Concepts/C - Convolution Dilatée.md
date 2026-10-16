---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-28
---
Une convolution dilatée « gonfle » le noyau en insérant des espaces entre ses éléments, contrôlés par un hyperparamètre de dilatation $d$ ($d=1$ correspond à une convolution normale, $d-1$ espaces sont insérés entre les éléments du noyau).

Un noyau de taille $k$ dilaté par un facteur $d$ a une taille effective :
$$\hat{k} = k + (k-1)(d-1)$$
Permet de couvrir un plus grand champ récepteur **sans** augmenter le nombre de paramètres ni la résolution de sortie.
## Applications notables

- **WaveNet** (Van den Oord et al., 2016) : convolutions dilatées **causales** en 1D pour la synthèse vocale : permet de couvrir efficacement les nombreuses échelles temporelles présentes dans l'audio
- **ByteNet** (Kalchbrenner et al., 2016) : structure encodeur-décodeur avec convolution causale dans le décodeur, pour la traduction automatique

Une convolution **causale** ne regarde que le passé (les positions précédentes), jamais le futur ce qui est essentiel pour la génération séquentielle.
## Liens connexes

- [[C - Terminologie de la Convolution (stride, padding, kernel)]]
- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/03-cnn

Taille effective d'un noyau de taille $k$ dilaté d'un facteur $d$ ?::$\hat{k} = k + (k-1)(d-1)$

Avantage d'une convolution dilatée ?::Élargir le champ récepteur **sans** ajouter de paramètres ni réduire la résolution.

Qu'est-ce qu'une convolution causale et où sert-elle ?::Elle ne regarde que les positions passées ; essentielle pour la génération séquentielle (WaveNet, décodeur de ByteNet).
<!--SR:!2026-10-15,0,230-->