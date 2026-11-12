---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Procédure générale d'**apprentissage par transfert séquentiel** : on **préentraîne** un modèle sur une grande quantité de données non étiquetées avec un objectif auto-supervisé (modèle de langage, langage masqué…), puis on l'**affine** (*fine-tune*) sur des **tâches en aval** (*downstream*) étiquetées, souvent petites.

$$\theta_0 = \arg\min_\theta \mathcal L_{\text{préentr.}}(\theta;\ \mathcal D_{\text{non étiqueté}})\quad\longrightarrow\quad \theta^* = \arg\min_\theta \mathcal L_{\text{tâche}}(\theta;\ \mathcal D_{\text{étiqueté}}),\ \text{initialisé à } \theta_0$$

## Intuition
Le préentraînement apprend des représentations générales (syntaxe, sens, connaissances) qui servent de très bon point de départ ; c'est une forme de [[C - Régularisation|régularisation]] par une tâche liée, comme le [[A - Préentraînement glouton couche par couche|préentraînement non supervisé]]. On peut aussi utiliser le modèle comme **extracteur de caractéristiques** (geler les poids et entraîner une petite tête par-dessus).

## Formalisme
Comparaison des approches de représentation du cours :

| Approche | Modèle | # params | Objectif | Affinage ? | Données |
|---|---|---|---|---|---|
| CoVe | BiLSTM 2 couches | ?? | traduction (NMT) | non | WMT'17 (En-De) |
| ELMo | LSTM 3 couches (avant/arrière) | 93,6 M | LM | en partie | 1-billion word |
| OpenAI GPT | Transformer 12 couches | 117 M | LM | oui | BookCorpus |
| BERT | Transformer 24 couches | 340 M | LM masqué | oui | BookCorpus + Wiki |
| OpenAI GPT-2 | Transformer 48 couches | 1,5 G | LM | — | WebText |

## Limites des grands modèles préentraînés (fin du chap. 06)
- **Biais statistiques** : biais de genre (« *He is a nurse. She is a doctor.* » traduit en hongrois puis de retour en anglais devient « *She is a nurse. He is a doctor.* », Douglas 2017) ; erreurs de connaissances factuelles (LAMA, Petroni et al. 2019 ; la négation est mal gérée, Kassner et al. 2019) ; biais dans le sous-titrage d'images (Rohrbach, Hendricks et al. 2018) et en VQA (Agrawal et al. 2016).
- **Interprétabilité** limitée.
- **Compositionnalité** : les modèles de NLI s'appuient sur des heuristiques syntaxiques (McCoy et al. 2019, *Right for the Wrong Reasons*) ; la cause est à la fois l'architecture et les données d'entraînement. Les modèles vision-langage se comportent souvent comme des sacs de mots (Yuksekgonul et al., ICLR 2023).

## Exemple
[[M - BERT]] préentraîné sur Wikipédia + BookCorpus, puis affiné en ajoutant une couche de sortie sur le jeton [CLS] pour la classification de phrases (GLUE).

## Flashcards
#flashcards/IFT6135/06-transformer

Décrire le schéma préentraînement + affinage
?
Préentraîner un modèle sur beaucoup de données non étiquetées avec un objectif auto-supervisé, puis l'affiner (tous les poids ou une tête) sur une tâche en aval étiquetée, à partir des poids préentraînés.

Deux façons d'utiliser un modèle préentraîné ?::L'affiner entièrement sur la tâche, ou l'utiliser comme extracteur de caractéristiques figé avec une petite tête entraînée par-dessus.

Trois limites des grands modèles préentraînés vues en cours ?::Biais statistiques (genre, connaissances, biais des jeux de données), faible interprétabilité, mauvaise compositionnalité (heuristiques syntaxiques).

Pourquoi le préentraînement est-il une forme de régularisation ?::Il utilise une tâche liée (modélisation du langage) pour placer les paramètres dans une bonne région avant la tâche cible, ce qui réduit la variance quand il y a peu de données étiquetées.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - BERT]]
- [[M - GPT (GPT-1, GPT-2, GPT-3)]]
- [[A - Préentraînement glouton couche par couche]]
- [[C - Apprentissage multitâche (Multi-task Learning)]]
- [[C - Biais Algorithmiques]]
