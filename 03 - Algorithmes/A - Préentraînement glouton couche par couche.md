---
type: algorithme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Procédure qui initialise un réseau profond en entraînant **une couche à la fois**, de façon **non supervisée** (typiquement comme un [[M - Autoencodeur|autoencodeur]]), puis qui affine tout le réseau sur la tâche supervisée. Elle agit comme un **régularisateur**.

$$\text{couche } l:\quad \min_{f_l, g_l} \sum_t \mathcal L\!\left(h_{l-1}^{(t)},\, g_l(f_l(h_{l-1}^{(t)}))\right),\qquad h_l = f_l(h_{l-1}),\ h_0 = x.$$

## Intuition
L'idée est de préentraîner les paramètres du modèle discriminant comme ceux d'un autoencodeur : l'encodeur $f$ apprend une représentation $h$ qui permet de reconstruire $x$ via le décodeur $g$. Ces poids sont un bon point de départ, qui place le réseau dans une région de l'espace des paramètres reflétant la structure de $p(x)$. On utilise ainsi les données non étiquetées comme un régularisateur dépendant des données.

## Formalisme / Dérivation
1. Entraîner un autoencodeur sur $x$ ; garder l'encodeur $f_1$.
2. Calculer $h_1 = f_1(x)$ pour tous les exemples ; entraîner un 2ᵉ autoencodeur sur $h_1$ ; garder $f_2$.
3. Répéter (« glouton » : chaque couche est optimisée sans revenir sur les précédentes).
4. Empiler $f_L \circ \dots \circ f_1$, ajouter une couche de sortie, puis **affiner** (*fine-tuning*) tout le réseau par rétropropagation supervisée.

Souvent, on ajoute un terme de pénalité pour donner au code $h$ des propriétés souhaitables (voir [[M - Autoencodeur débruiteur (Denoising Autoencoder)]], [[M - Autoencodeur contractif]]).

## Exemple
Erhan et al. (2009) : avec préentraînement, l'erreur d'**entraînement** est parfois plus haute, mais l'erreur de **test** est plus basse. C'est exactement le profil d'un régularisateur (moins de variance au prix d'un peu de biais).

## IFT6135 — Chap. 07 : l'apprentissage non supervisé comme régularisation
Le même principe s'étend à l'auto-supervision, au [[C - Apprentissage multitâche (Multi-task Learning)|multitâche]] et à l'apprentissage par transfert : on se sert de tâches liées pour régulariser les paramètres de la tâche cible. Cette idée mène au [[C - Préentraînement et affinage (Pre-training, Fine-tuning)|préentraînement moderne]] (BERT, GPT).

## Flashcards
#flashcards/IFT6135/07-regularisation

Décrire le préentraînement glouton couche par couche
?
Entraîner un autoencodeur sur l'entrée, garder l'encodeur, en entraîner un autre sur les codes obtenus, etc. Empiler les encodeurs, ajouter la sortie, puis affiner tout le réseau en supervisé.

Pourquoi « glouton » ?::Chaque couche est optimisée seule, sans revenir sur les couches déjà entraînées (avant l'affinage final).

Quelle observation d'Erhan et al. (2009) montre que le préentraînement est un régularisateur ?::L'erreur d'entraînement peut être plus haute, mais l'erreur de test est plus basse : moins de variance au prix d'un peu de biais.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Non-supervisé & réduction de dimension]]
- [[C - Régularisation]]
- [[M - Autoencodeur]]
- [[C - Apprentissage non-supervisée]]
- [[C - Préentraînement et affinage (Pre-training, Fine-tuning)]]
