---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**Denoising autoencoder** (Vincent, Larochelle, Bengio, Manzagol, ICML 2008) : [[M - Autoencodeur|autoencodeur]] dont on **corrompt l'entrée** et qu'on entraîne à reconstruire l'entrée **propre**. Idée : la représentation doit être robuste à l'ajout de bruit.

$$\tilde x \sim p(\tilde x \mid x),\qquad \hat x = \mathrm{sigm}(c + W^* h(\tilde x)),\qquad l = l(\hat x,\ x)$$

## Intuition
Pour débruiter, le réseau ne peut pas copier son entrée (elle est fausse) : il doit apprendre les dépendances entre les composantes de $x$, donc la structure des données. Cela marche même avec une couche cachée [[C - Représentation sous-complète et sur-complète|sur-complète]].

**Perspective de variété** (*manifold*) : les données vivent près d'une variété de faible dimension ([[C - Hypothèse de Variété (Manifold Hypothesis)]]). La corruption $q_D(\tilde x\mid x)$ éloigne un point de la variété ; le débruiteur apprend à le **projeter de nouveau sur la variété**, donc il en apprend la forme.

## Formalisme
1. **Processus de bruit** $p(\tilde x \mid x)$ :
   - **masquage** : un sous-ensemble aléatoire des entrées est mis à 0, chacune avec probabilité $\nu$ ;
   - **bruit gaussien additif**.
2. **Reconstruction** à partir de l'entrée corrompue : $\hat x = \mathrm{sigm}(c + W^* h(\tilde x))$.
3. **Perte** : elle compare la reconstruction $\hat x$ à l'entrée **non bruitée** $x$ (par exemple l'entropie croisée).

## Exemple
Filtres appris sur MNIST (Vincent et al. 2008) : sans corruption, les filtres ressemblent à du bruit peu structuré ; avec 25 % puis 50 % des entrées corrompues, ils deviennent des détecteurs de traits plus nets et plus globaux.

## IFT6135 — débruiteur vs contractif
- **(+) débruiteur** : simple à implémenter (une ou deux lignes de code de plus qu'un autoencodeur ordinaire), pas besoin de calculer le jacobien de la couche cachée.
- **(+) [[M - Autoencodeur contractif|contractif]]** : gradient **déterministe**, donc on peut utiliser des optimiseurs du second ordre (gradient conjugué, L-BFGS), et il peut être plus stable que le débruiteur, dont le gradient est échantillonné.
- Les deux donnent de bonnes performances.

## Flashcards
#flashcards/IFT6135/09-autoencodeurs

Comment entraîne-t-on un autoencodeur débruiteur ?::On corrompt $x$ en $\tilde x\sim p(\tilde x\mid x)$, on reconstruit $\hat x$ à partir de $\tilde x$, et la perte compare $\hat x$ à l'entrée propre $x$.

Deux processus de corruption vus en cours ?::Le masquage (mettre à 0 un sous-ensemble aléatoire d'entrées, avec probabilité $\nu$) et le bruit gaussien additif.

Interprétation « variété » du débruitage ?::La corruption éloigne le point de la variété des données ; le modèle apprend à le reprojeter sur la variété, donc il en capture la structure.

Avantages du débruiteur vs du contractif ?
?
Débruiteur : plus simple, pas de jacobien à calculer. Contractif : gradient déterministe (optimiseurs du second ordre possibles), potentiellement plus stable que le gradient échantillonné du débruiteur.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[M - Autoencodeur]]
- [[M - Autoencodeur contractif]]
- [[C - Hypothèse de Variété (Manifold Hypothesis)]]
- [[C - Représentation sous-complète et sur-complète]]
