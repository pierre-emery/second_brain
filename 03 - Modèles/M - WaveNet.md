---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**WaveNet** (van den Oord et al. 2016) : adaptation de [[M - PixelCNN|PixelCNN]] à l'**audio brut**, avec des **convolutions causales dilatées** pour capturer de très longues dépendances temporelles.

$$p(x) = \prod_{t=1}^T p(x_t\mid x_1,\dots,x_{t-1}),\qquad z = \tanh(W_{k,f} * x)\odot\sigma(W_{k,g} * x)$$

## Intuition
L'audio a une dimension **beaucoup plus grande** que les images (au moins 16 000 échantillons par **seconde**). Avec des convolutions ordinaires, le champ récepteur ne grandit que linéairement avec la profondeur. Avec des [[C - Convolution Dilatée|convolutions dilatées]] (dilatation 1, 2, 4, 8…), il **double à chaque couche**, donc il grandit exponentiellement.

## Formalisme
- **Convolution causale** : la sortie au temps $t$ ne dépend que des entrées $\le t$.
- **Pas de convolution à pas (strided)** : la sortie doit avoir la **même dimensionnalité** que l'entrée (une prédiction par échantillon).
- **Architecture complète** : convolution causale → $k$ couches de [convolution dilatée → unité à portes $\tanh \odot \sigma$ → $1\times1$ → connexion **résiduelle**] ; des **connexions de saut** (*skip*) de chaque couche sont additionnées → ReLU → $1\times1$ → ReLU → $1\times1$ → **softmax** sur les valeurs quantifiées.

### Génération conditionnelle
- **Globale** (par exemple l'identité du locuteur), $h$ un vecteur :
$$z = \tanh(W_{k,f} * x + V_{k,f}^\top h)\odot\sigma(W_{k,g} * x + V_{k,g}^\top h).$$
- **Locale** (par exemple des caractéristiques linguistiques du texte), $h$ une série temporelle :
$$z = \tanh(W_{k,f} * x + V_{k,f} * h)\odot\sigma(W_{k,g} * x + V_{k,g} * h).$$

## Exemple
Avec un noyau de taille 2 et des dilatations $1, 2, \dots, 512$ (10 couches), le champ récepteur atteint 1024 échantillons ; en répétant ce bloc, on couvre des centaines de millisecondes d'audio.

## Flashcards
#flashcards/IFT6135/10-generatifs

Quel problème WaveNet résout-il par rapport à PixelCNN ?::Les très longues dépendances temporelles de l'audio (≥ 16 000 échantillons/s) : les convolutions dilatées font croître le champ récepteur exponentiellement avec la profondeur.

Pourquoi WaveNet n'utilise-t-il pas de convolutions à pas ?::La sortie doit avoir la même dimensionnalité que l'entrée (une conditionnelle par échantillon).

Différence entre conditionnement global et local dans WaveNet ?
?
Global : un vecteur $h$ (identité du locuteur) ajouté via $V^\top h$, le même à chaque pas. Local : une série $h$ (caractéristiques du texte) convoluée, $V*h$, qui varie dans le temps.

Écrire l'unité à portes de WaveNet / PixelCNN ?::$z = \tanh(W_f * x)\odot\sigma(W_g * x)$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - PixelCNN]]
- [[C - Modèle génératif autorégressif]]
- [[C - Convolution Dilatée]]
- [[M - ResNet (Connexion Résiduelle)]]
