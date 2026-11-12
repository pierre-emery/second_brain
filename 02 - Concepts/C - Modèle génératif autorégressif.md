---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Modèle génératif qui choisit un **ordre** sur les dimensions de $x$, puis modélise chaque conditionnelle de la [[C - Règle de Chaîne (Probabilité)|règle de la chaîne]] avec un réseau de neurones.

$$p(x) = \prod_{k=1}^D p(x_k \mid x_{<k})$$

## Intuition
La règle de la chaîne est **exacte** pour n'importe quelle distribution : il n'y a aucune approximation dans la factorisation, seulement dans le choix des conditionnelles. Comme chaque facteur est une distribution normalisée (softmax, Bernoulli…), $\log p(x)$ se calcule exactement : on entraîne par maximum de vraisemblance, sans variable latente.

## Formalisme
- **Entraînement** : maximiser $\sum_t \sum_k \log p(x_k^{(t)} \mid x_{<k}^{(t)})$. On peut **paralléliser** toutes les conditionnelles si l'architecture respecte la contrainte autorégressive (masques).
- **Échantillonnage** : **séquentiel**, $x_1 \sim p(x_1)$, puis $x_2 \sim p(x_2\mid x_1)$, etc. Il faut $D$ passes.
- **Pour** : $p(x)$ traitable, entraînement facile, échantillonnage facile (mais plus lent).
- **Contre** : pas de représentation latente naturelle.

**Historique** : bien connus pour les séquences (modélisation du langage, séries temporelles), moins évidents pour des observations non séquentielles.
- régression logistique pour les conditionnelles (Frey et al. 1996) ;
- réseaux de neurones pour les conditionnelles (Bengio & Bengio 2000) ;
- même idée avec un nouveau partage de poids : NADE (Larochelle & Murray ; Gregor & LeCun 2011) ;
- puis [[M - MADE (Masked Autoencoder for Distribution Estimation)|MADE]], LSTM spatial, PixelRNN, [[M - PixelCNN|PixelCNN]], [[M - WaveNet|WaveNet]], Video Pixel Network…

## Exemple
Les modèles de langage ([[C - Modélisation du Langage]]) sont autorégressifs sur les mots. Parti (Yu et al. 2022) et DALL-E appliquent la même idée au texte → image : un transformeur décodeur prédit une suite de jetons d'image (tokeniseur ViT-VQGAN), conditionnée par le texte.

## Flashcards
#flashcards/IFT6135/10-generatifs

Définition d'un modèle génératif autorégressif ?::On choisit un ordre sur les dimensions et on modélise chaque facteur de $p(x)=\prod_k p(x_k\mid x_{<k})$ avec un réseau.

Pourquoi l'entraînement est-il parallèle mais l'échantillonnage séquentiel ?::À l'entraînement, tous les $x_{<k}$ sont connus, donc toutes les conditionnelles se calculent en une passe (avec masques). En génération, $x_k$ dépend des valeurs déjà tirées : $D$ passes.

Pourquoi $\log p(x)$ est-il exact pour un modèle autorégressif ?::La règle de la chaîne est exacte et chaque facteur est une distribution normalisée ; il n'y a pas de latente à marginaliser.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Probabilité]]
- [[C - Familles de modèles génératifs profonds]]
- [[C - Règle de Chaîne (Probabilité)]]
- [[M - MADE (Masked Autoencoder for Distribution Estimation)]]
- [[M - PixelCNN]]
- [[M - WaveNet]]
- [[C - Modélisation du Langage]]
- [[M - GPT (GPT-1, GPT-2, GPT-3)]]
