---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**PixelCNN** (van den Oord, Kalchbrenner, Kavukcuoglu 2016) : [[C - Modèle génératif autorégressif|modèle autorégressif]] d'images qui utilise des **convolutions masquées** pour imposer la relation autorégressive en ordre de balayage (*raster scan* : ligne par ligne, de gauche à droite).

$$p(x) = \prod_{i=1}^{n^2} p(x_i\mid x_{<i}),\qquad p(x_i\mid x_{<i}) = p(x_{i,R}\mid x_{<i})\,p(x_{i,G}\mid x_{i,R}, x_{<i})\,p(x_{i,B}\mid x_{i,R}, x_{i,G}, x_{<i})$$

## Intuition
Un RNN qui balaie l'image (PixelRNN) est lent. Avec une pile de **convolutions masquées**, chaque position ne voit que les pixels au-dessus et à gauche ; empiler les couches **augmente la taille du contexte**. L'entraînement se parallélise sur tous les pixels, mais la **génération reste séquentielle** pixel par pixel.

## Formalisme
- **Masque de convolution** : dans le noyau, les poids des positions au-dessus et à gauche du centre valent 1, ceux du centre (selon le type) et des positions suivantes valent 0.
- **Autorégressif sur les canaux** : R, puis G sachant R, puis B sachant R et G. Le **masque A** (1re couche) interdit au canal de se voir lui-même ; le **masque B** (couches suivantes) l'autorise, puisque l'information de la position a déjà été décalée.
- **Sortie** : chaque valeur de pixel est une variable à 256 valeurs (8 bits), modélisée par une **softmax** (distribution [[D - Multinomiale (et Multinoulli)|multinoulli]]), ce qui permet des distributions multimodales.

### Améliorations (van den Oord et al., NeurIPS 2016, *Conditional image generation with PixelCNN decoders*)
1. **Angle mort** (*blind spot*) : en empilant des convolutions masquées 3 × 3, le champ récepteur grandit en escalier et ignore une zone en haut à droite du pixel. **Solution** : deux piles de convolutions, une **pile verticale** (toutes les lignes au-dessus) et une **pile horizontale** (la ligne courante à gauche). La pile verticale alimente la pile horizontale, ce qui préserve les bonnes dépendances.
2. **Non-linéarité plus expressive** (unités à portes, comme dans un LSTM) :
$$h_{k+1} = \tanh(W_{k,f} * h_k)\odot\sigma(W_{k,g} * h_k).$$
3. Version **conditionnelle** à la classe : échantillons ImageNet par classe.

### Génération multi-échelle
*Parallel Multiscale Autoregressive Density Estimation* (Reed et al. 2017) : on regroupe les pixels (groupe 1 = coins en haut à gauche de chaque bloc 2 × 2, puis groupes 2, 3, 4) ; tous les pixels d'un groupe sont générés **en parallèle**, conditionnés aux groupes précédents. On passe de $O(N)$ à $O(\log N)$ étapes pour $N$ pixels, et la structure globale semble meilleure (résolutions 4 → 256).

## Exemple
Résultats CIFAR-10 en NLL de test, bits/dimension (plus bas = mieux) : uniforme 8,00 ; gaussienne multivariée 4,70 ; NICE 4,48 ; DRAW 4,13 ; RIDE 3,47 ; **PixelCNN 3,14** ; **Gated PixelCNN 3,03** ; PixelRNN 3,00. Le Gated PixelCNN gagne 0,11 bit/dim sur le PixelCNN, ce qui se voit nettement dans la qualité des échantillons, et approche PixelRNN tout en étant bien plus rapide à entraîner.

## Flashcards
#flashcards/IFT6135/10-generatifs

Comment PixelCNN impose-t-il l'ordre autorégressif ?::Avec des convolutions masquées : chaque pixel ne voit que les pixels au-dessus et à gauche (ordre raster), et l'empilement des couches élargit le contexte.

Factorisation d'un pixel couleur dans PixelCNN ?::$p(x_{i,R}\mid x_{<i})\,p(x_{i,G}\mid x_{i,R},x_{<i})\,p(x_{i,B}\mid x_{i,R},x_{i,G},x_{<i})$ (masques A puis B).

Qu'est-ce que l'angle mort de PixelCNN et comment le corriger ?
?
En empilant des convolutions masquées, une zone en haut à droite du pixel n'entre jamais dans le champ récepteur. Correction : une pile verticale (lignes au-dessus) qui alimente une pile horizontale (ligne courante à gauche).

Pourquoi une softmax à 256 classes pour chaque valeur de pixel ?::Elle ne suppose pas de forme (unimodale, etc.) et peut représenter des distributions multimodales ou piquées aux bords (0, 255).

Entraînement vs génération dans PixelCNN ?::L'entraînement est parallèle (tous les pixels sont connus) ; la génération est séquentielle, un pixel à la fois (sauf en multi-échelle).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[C - Modèle génératif autorégressif]]
- [[M - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Connectivité Locale (Champ Récepteur)]]
- [[M - WaveNet]]
- [[M - MADE (Masked Autoencoder for Distribution Estimation)]]
