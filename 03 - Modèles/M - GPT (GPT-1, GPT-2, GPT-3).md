---
type: modele
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Famille de grands **modèles de langage Transformer décodeur seul** (OpenAI), entraînés à prédire le jeton suivant (objectif autorégressif, [[C - Attention masquée (causale)|attention causale]]) sur de très grandes quantités de texte.

$$\mathcal L(\theta) = -\sum_t \log p_\theta(x_t\mid x_{<t})$$

## Intuition
Thème commun : de grands modèles de langage Transformer, entraînés sur beaucoup de données. Plus on augmente le modèle et les données, plus le modèle acquiert des capacités qu'on ne lui a pas enseignées explicitement : de l'affinage (GPT-1) au **zéro-coup** (GPT-2) puis au **few-shot** (GPT-3).

## Formalisme
### GPT-1 (Radford et al. 2018)
Idée : beaucoup de données, un modèle profond et plus parallélisable, puis on affine les représentations. On entraîne un gros LM Transformer sur des livres publics (BookCorpus) ; il apprend de bonnes représentations contextuelles de mots, évaluées en l'affinant sur des tâches supervisées de compréhension (NLU). Transformer de 12 couches, 117 M paramètres, contexte de 512 jetons.

### GPT-2 (Radford et al. 2019, *Language Models are Unsupervised Multitask Learners*)
- **Données** : WebText, des articles web sur des sujets variés, récupérés en suivant les liens Reddit avec au moins 3 karma (40 Go).
- **Prétraitement** : BPE sur des **octets** plutôt que sur des symboles Unicode.
- **Modèle** : plus de 10× plus de paramètres (1,5 G, 48 couches), plus profond et plus large.
- **Contexte** : 1024 jetons (vs 512).
- **Focus** : apprentissage multitâche **zéro-coup** (surtout un effet des données), meilleure qualité d'échantillons et meilleure estimation de densité, plutôt que l'apprentissage de représentations.

**Tâches zéro-coup** par simple conditionnement du LM :
- modélisation du langage sur de nouveaux domaines ;
- schémas de Winograd (+7 % sur Trinh et al. 2018) ;
- compréhension de lecture (CoQA) : égale les approches supervisées, mais loin de BERT ;
- résumé (CNN/DailyMail) : ajouter « TL;DR » à la fin de l'article et échantillonner ;
- traduction (WMT'14 En-Fr) : ajouter « english sentence = » après la phrase française et générer de façon gloutonne ;
- questions-réponses (Natural Questions) : conditionner sur des paires question-réponse, puis générer pour une nouvelle question.
On vérifie aussi le chevauchement entre WebText et les jeux de test.

### GPT-3 (Brown et al. 2020, *Language Models are Few-Shot Learners*)
- Version agrandie de GPT-2 : **175 G paramètres** (100× GPT-2).
- Données : Common Crawl, WebText2, Books1, Books2, Wikipédia.
- Bonnes performances **few-shot** (quelques exemples dans le prompt, sans mise à jour des poids) sur les tâches NLP classiques, l'arithmétique, le démêlage de mots et l'emploi d'un mot nouveau dans une phrase.

### ChatGPT, GPT-4
ChatGPT : innovation principale, l'**apprentissage par renforcement à partir de rétroaction humaine** (RLHF). GPT-4(V) : multimodal (rapport technique et analyses qualitatives cités en cours).

## Exemple
Échantillon célèbre de GPT-2 : à partir d'une amorce sur une harde de licornes parlant anglais dans les Andes, le modèle poursuit avec un article cohérent sur plusieurs paragraphes (noms de chercheurs inventés, citations…).

## Flashcards
#flashcards/IFT6135/06-transformer

Objectif d'entraînement de GPT ?::Modèle de langage autorégressif : maximiser $\sum_t\log p(x_t\mid x_{<t})$ avec un Transformer décodeur seul (attention causale).

Différence principale entre BERT et GPT ?::BERT : encodeur bidirectionnel, LM masqué, pensé pour l'affinage. GPT : décodeur unidirectionnel, LM gauche-à-droite, peut générer du texte.

Qu'est-ce qui change de GPT-1 à GPT-2 ?
?
Données WebText (40 Go, liens Reddit), BPE sur octets, plus de 10× les paramètres (1,5 G), contexte 1024, et un focus sur le multitâche zéro-coup plutôt que l'affinage.

Comment GPT-2 fait-il un résumé en zéro-coup ?::On ajoute « TL;DR » à la fin de l'article et on échantillonne la suite du LM.

Zéro-coup vs few-shot (GPT-3) ?::Zéro-coup : seulement une instruction ou un format dans le prompt. Few-shot : quelques exemples résolus dans le prompt ; aucun poids n'est mis à jour dans les deux cas.

Innovation principale de ChatGPT selon le cours ?::Le RLHF (apprentissage par renforcement à partir de rétroaction humaine).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Modèles ML (supervisé)]]
- [[M - Transformer]]
- [[C - Attention masquée (causale)]]
- [[C - Modèle génératif autorégressif]]
- [[C - Modélisation du Langage]]
- [[M - BERT]]
- [[C - Préentraînement et affinage (Pre-training, Fine-tuning)]]
