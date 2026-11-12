---
type: moc-cours
cours:
  - IFT6135
session: Automne 2026
sujet: Apprentissage de représentations
prof: Agrawal
credits: 4
jours:
  - 1
  - 3
évaluations: "- {nom: A1 théorie, poids: 10, echeance: , note: } - {nom: A1 pratique, poids: 15, echeance: , note: } - {nom: A2 théorie, poids: 10, echeance: , note: } - {nom: A2 pratique, poids: 15, echeance: , note: } - {nom: A3 théorie, poids: 10, echeance: , note: } - {nom: A3 pratique, poids: 15, echeance: , note: } - {nom: Examen final, poids: 25, echeance: , note: }"
maj: 2026-11-12
---
# MOC - IFT6135 : Apprentissage de représentations
## 0) Prérequis / Révision (Chapitre 00 - intro & review)
### Algèbre linéaire

- [[C - Produit Scalaire]]
- [[C - Norme]]
- [[C - Matrice Identité]]
- [[C - Matrice Diagonale]]
- [[C - Matrice Triangulaire]]
- [[C - Matrice Symétrique]]
- [[C - Matrice Orthogonale]]
- [[C - Trace d'une matrice]]
- [[C - Déterminant d'une matrice]]
- [[C - Inverse d'une matrice]]
- [[C - Transposée d'une matrice]]
- [[C - Rang d'une matrice]]
- [[C - Espace Image (Range) d'une matrice]]
- [[C - Espace Nul (Null Space) d'une matrice]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Matrice Symétrique Définie Positive]]
### Calcul différentiel

- [[C - Dérivée et Dérivée Partielle]]
- [[C - Gradient]]
- [[C - Matrice Hessienne]]
- [[C - Matrice Jacobienne]]
### Probabilité

- [[C - Espace de Probabilité]]
- [[C - Variable Aléatoire]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]
- [[C - Règle de Chaîne (Probabilité)]]
- [[T - Théorème de Bayes]]
- [[C - Indépendance (variables aléatoires)]]
- [[C - Indépendance Conditionnelle]]
- [[C - Variance]]
- [[C - Covariance]]
- [[C - Matrice de Variance-Covariance]]
- [[D - Bernoulli]]
- [[D - Loi Gaussienne (Normale)]]
### Statistique

- [[C - Hypothèse i.i.d.]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Vraisemblance]]
- [[C - Intervalle de Confiance]]

### Échantillonnage

- [[C - Estimation Monte Carlo]]
- [[C - Échantillonnage Préférentiel]]
### Apprentissage automatique fondamentaux

- [[C - Apprentissage supervisée]]
- [[C - Apprentissage non-supervisée]]
- [[C - Apprentissage semi-supervisé]]
- [[C - Modèle paramétrique]]
- [[C - Modèle Non Paramétrique]]
- [[C - Sélection de modèle]]
- [[C - Hyperparamètres]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Sous-apprentissage]]
- [[C - Surapprentissage]]
- [[C - Compromis Biais-Variance]]
- [[C - Risque Empirique]]
- [[C - Régularisation]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Points Critiques et Optima (local, global, point-selle)]]
## 1) Neurone artificiel & réseaux de neurones (Chapitre 01)
### Classification linéaire (mise en contexte)

- [[C - Classification Linéaire]]
### Neurone artificiel
- [[C - Neurones Artificiels]]
- [[C - Fonction d'activation]]
- [[C - Neurone Biologique (analogie)]]
### Réseaux multicouches
- [[M - Réseau de neurones]]
- [[T - Théorème d'approximation universelle]]
## 2) Entraînement des réseaux de neurones
### Perte et rétropropagation

- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[C - Graphe de Calcul (Flow Graph)]]
- [[C - Vérification de Gradient (Gradient Checking)]]
### Optimisation

- [[A - Descente de Gradient par Mini-lot (Mini-batch)]]
- [[C - Momentum]]
- [[C - Taux d'apprentissage]]
- [[A - Initialisation de Glorot (Xavier)]]
### Régularisation & sélection de modèle

- [[C - Régularisation L1]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Recherche en Grille (Grid Search)]]
- [[C - Recherche Aléatoire (Random Search)]]
- [[C - Early stopping]]
## 3) Réseaux de neurones convolutionnels
### Idées fondatrices

- [[C - Connectivité Locale (Champ Récepteur)]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Équivariance vs Invariance]]
- [[C - Couche de Pooling (Max Pooling)]]
### Convolution

- [[C - Convolution Discrète (2D)]]
- [[C - Terminologie de la Convolution (stride, padding, kernel)]]
- [[C - Convolution Dilatée]]
- [[C - Convolution Transposée (Déconvolution)]]
### Architecture et entraînement

- [[M - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Apprentissage Hiérarchique des Caractéristiques (CNN)]]
- [[C - Augmentation de Données (Data Augmentation)]]
- [[M - ResNet (Connexion Résiduelle)]]
## 4) Réseaux de neurones récurrents (Chapitre 05)

### Modélisation de séquences et du langage

- [[C - Modélisation du Langage]]
- [[C - n-grammes]]
- [[M - Modèle de Langage Neuronal (Bengio 2003)]]
- [[C - Plongement de Mots (Word Embedding)]]
### RNN

- [[M - Réseau de Neurones Récurrent (RNN)]]
- [[C - RNN Profond (Empilé)]]
- [[C - Étiquetage de Séquence]]
- [[C - Classification de Séquence]]
- [[M - RNN Bidirectionnel]]
### Entraînement et stabilité du gradient

- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[A - BPTT Tronquée (Truncated BPTT)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - Écrêtage du Gradient (Gradient Clipping)]]
- [[A - Initialisation Orthogonale]]
### Cellules à portes

- [[M - LSTM (Long Short-Term Memory)]]
- [[M - GRU (Gated Recurrent Unit)]]
### Séquence à séquence
- [[M - Seq2Seq (Encodeur-Décodeur)]]
- [[A - Recherche en Faisceau (Beam Search)]]
## 5) Mécanismes d'attention et Transformers (Chapitre 06)

### Attention
- [[M - Attention Douce (Bahdanau)]]
- [[C - Auto-attention (Self-Attention)]]
- [[C - Attention multi-têtes (Multi-Head Attention)]]
- [[C - Attention masquée (causale)]]
- [[C - Encodage positionnel (Positional Encoding)]]
### Architectures
- [[M - Transformer]]
- [[M - BERT]]
- [[M - GPT (GPT-1, GPT-2, GPT-3)]]
- [[M - Vision Transformer (ViT)]]
### Préentraînement, transfert et limites
- [[C - Préentraînement et affinage (Pre-training, Fine-tuning)]]
## 6) Régularisation (Chapitre 07)

### Pourquoi régulariser
- [[C - Régularisation]]
- [[C - Compromis Biais-Variance]]
- [[C - Double descente]]
### Pénalités sur les paramètres
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Régularisation L1]]
### Early stopping
- [[C - Early stopping]]
- [[T - Équivalence early stopping et régularisation L2]]
### Ensembles et dropout
- [[C - Bagging]]
- [[C - Dropout]]
### Tâches auxiliaires comme régularisation
- [[A - Préentraînement glouton couche par couche]]
- [[C - Apprentissage multitâche (Multi-task Learning)]]
## 7) Optimisation et normalisation (Chapitre 08)

### Méthodes du premier ordre
- [[A - Descente de Gradient Stochastique (SGD)]]
- [[C - Momentum]]
- [[A - Momentum de Nesterov]]
### Taux d'apprentissage adaptatifs
- [[A - AdaGrad]]
- [[A - RMSProp]]
- [[A - Adam]]
### Normalisation
- [[C - Normalisation par lot (Batch Normalization)]]
- [[C - Normalisation de couche (Layer Normalization)]]
- [[C - Normalisation d'instance (Instance Normalization)]]
- [[C - Normalisation de groupe (Group Normalization)]]
## 8) Autoencodeurs (Chapitre 09)

- [[M - Autoencodeur]]
- [[C - Représentation sous-complète et sur-complète]]
- [[T - Optimalité de l'autoencodeur linéaire (ACP)]]
- [[T - Théorème d'Eckart-Young]]
- [[M - Autoencodeur débruiteur (Denoising Autoencoder)]]
- [[M - Autoencodeur contractif]]
## 9) Modèles génératifs : autorégressifs et flots normalisants (Chapitre 10)

### Vue d'ensemble
- [[C - Familles de modèles génératifs profonds]]
### Modèles autorégressifs
- [[C - Modèle génératif autorégressif]]
- [[M - MADE (Masked Autoencoder for Distribution Estimation)]]
- [[M - PixelCNN]]
- [[M - WaveNet]]
### Flots normalisants
- [[T - Formule du changement de variable (densités)]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[M - Flot planaire]]
- [[M - Flot de Sylvester]]
- [[T - Identité du déterminant de Sylvester]]
- [[M - ResNet inversible (i-ResNet)]]
- [[T - Théorème du point fixe de Banach]]
- [[C - Estimateur de trace de Hutchinson]]
- [[M - Couche de couplage (NICE, RealNVP)]]
## À venir (mentionnés, pas encore développés)

- NADE (Larochelle & Murray 2011), PixelRNN, LSTM spatial : mentionnés dans le cours sur les modèles autorégressifs
- Flots autorégressifs IAF / MAF, NAF / BNAF, FFJORD, Glow : à revoir avec les VAE
- VAE, GAN, modèles de diffusion (chapitres suivants)
- Autoencodeur parcimonieux (sparse autoencoder)
- ViLBERT, Flamingo, MAPL (modèles vision-langage) : survolés au chap. 06
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]
- [[MOC - Modèles ML (supervisé)]]
- [[MOC - Évaluation & généralisation]]
- [[MOC - Non-supervisé & réduction de dimension]]