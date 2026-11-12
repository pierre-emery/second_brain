---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
**BERT** (*Bidirectional Encoder Representations from Transformers*, Devlin et al., Google AI Language, 2018) : pile d'**encodeurs** [[M - Transformer|Transformer]] préentraînée avec un objectif de **langage masqué** (*masked LM*) et de **prédiction de la phrase suivante**, puis affinée sur des tâches en aval.

$$\mathcal L = \underbrace{-\sum_{i\in\text{masqués}}\log p(x_i\mid x_{\setminus \text{masqués}})}_{\text{LM masqué}}\ \underbrace{-\ \log p(\text{IsNext}\mid A, B)}_{\text{phrase suivante}}$$

## Intuition
**Problème des méthodes précédentes** : les modèles de langage n'utilisent que le contexte gauche *ou* droit, alors que la compréhension du langage est bidirectionnelle. Pourquoi les LM sont-ils unidirectionnels ?
1. La directionnalité est nécessaire pour obtenir une distribution de probabilité bien formée : on n'en a pas besoin ici.
2. Dans un encodeur bidirectionnel, les mots peuvent **« se voir eux-mêmes »** à travers les couches, ce qui rend la prédiction triviale.

**Solution** : masquer $k\,\%$ des mots d'entrée et prédire les mots masqués (toujours $k = 15\,\%$). Trop peu de masquage : entraînement trop coûteux ; trop de masquage : pas assez de contexte.

## Formalisme
**Masquage 80/10/10** : le jeton [MASK] n'apparaît jamais à l'affinage. Parmi les 15 % de mots à prédire :
- 80 % sont remplacés par [MASK] (« went to the store » → « went to the [MASK] ») ;
- 10 % par un mot aléatoire (→ « went to the running ») ;
- 10 % restent inchangés (→ « went to the store »).
Deux inconvénients : décalage entre préentraînement et affinage, et convergence plus lente (on ne prédit que 15 % des jetons).

**Prédiction de la phrase suivante** : pour apprendre les relations entre phrases, prédire si la phrase B suit réellement la phrase A ou si c'est une phrase aléatoire.

**Représentation d'entrée** : vocabulaire WordPiece de 30 000 jetons ; chaque jeton = somme de **trois plongements** (jeton + segment A/B + position) ; une seule séquence est bien plus efficace.

**Architecture** : encodeur Transformer.
- l'attention multi-têtes modélise le contexte ;
- les couches à propagation avant calculent des caractéristiques hiérarchiques non linéaires ;
- LayerNorm et résidus gardent l'entraînement des réseaux profonds stable ;
- les plongements de position permettent d'apprendre le positionnement relatif.

**Avantages empiriques du Transformer vs LSTM** : (1) l'auto-attention n'a pas de biais de localité, le contexte lointain a « autant de chances » ; (2) une seule multiplication par couche, donc efficace sur TPU : la taille de lot effective est le nombre de **mots**, pas de séquences.

**Détails** : Wikipédia (2,5 G mots) + BookCorpus (800 M mots) ; lots de 131 072 mots (1024 séq. × 128 ou 256 × 512) ; 1 M de pas (~40 époques) ; AdamW, taux $10^{-4}$, décroissance linéaire ; BERT-Base : 12 couches, 768 cachées, 12 têtes ; BERT-Large : 24 couches, 1024 cachées, 16 têtes ; 4 jours sur 4×4 ou 8×8 TPU.

**Affinage** : ajouter une couche de sortie (par exemple sur le jeton [CLS]) et affiner tous les poids. SWAG : on passe chaque paire prémisse + fin dans BERT et on produit un logit sur le jeton 0 ([CLS]).

## Exemple : résultats
- GLUE : MultiNLI (prémisse/hypothèse → contradiction…), CoLa (acceptabilité grammaticale).
- Le LM masqué converge un peu plus lentement que le LM gauche-à-droite, mais ses résultats absolus sont bien meilleurs presque immédiatement.
- **Taille** : passer de 110 M à 340 M paramètres aide beaucoup, même sur des jeux de 3 600 exemples étiquetés ; les gains n'ont pas encore atteint d'asymptote.
- **Extraction de caractéristiques** : on peut utiliser les activations de différentes couches avec différentes stratégies de mise en commun (pooling), sans affinage.

## IFT6135 — conclusions du cours
Le plus grand impact de BERT : avec le préentraînement, **plus gros = meilleur**, sans limite claire (pour l'instant). Ajouter des éléments par-dessus BERT n'aide pas beaucoup : bien pour ceux qui construisent des systèmes, moins excitant pour la recherche. Comparaison : BERT est vraiment bidirectionnel ; [[M - GPT (GPT-1, GPT-2, GPT-3)|GPT-1]] est unidirectionnel ; ELMo combine deux LSTM unidirectionnels.

## Flashcards
#flashcards/IFT6135/06-transformer

Pourquoi ne peut-on pas entraîner un encodeur bidirectionnel comme un LM classique ?::Chaque mot pourrait « se voir lui-même » à travers les couches, ce qui rend la prédiction triviale.

Règle 80/10/10 du LM masqué et sa raison ?
?
Sur les 15 % de jetons à prédire : 80 % → [MASK], 10 % → mot aléatoire, 10 % → inchangé. Raison : [MASK] n'apparaît jamais à l'affinage, il faut que le modèle produise aussi de bonnes représentations pour des jetons non masqués.

Les deux tâches de préentraînement de BERT ?::LM masqué (prédire 15 % de jetons masqués) et prédiction de la phrase suivante (B suit-il A ?).

De quoi se compose le plongement d'entrée de BERT ?::Somme de trois plongements : jeton (WordPiece, 30 000), segment (A/B) et position.

Pourquoi masquer 15 % et pas plus ou moins ?::Moins : trop coûteux, peu de signal par séquence. Plus : pas assez de contexte pour prédire.

BERT-Base vs BERT-Large ?::Base : 12 couches, 768 cachées, 12 têtes (110 M). Large : 24 couches, 1024 cachées, 16 têtes (340 M).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Transformer]]
- [[C - Préentraînement et affinage (Pre-training, Fine-tuning)]]
- [[M - GPT (GPT-1, GPT-2, GPT-3)]]
- [[C - Modélisation du Langage]]
- [[A - Adam]]
