---
sujet: modeles-supervises
maj: 2026-09-26
---
- [[C - Ingénierie de Caractéristiques]]
- [[C - Augmentation de la dimensionnalité]]
## 1) Cadre & types de tâches

- [[C - Apprentissage Statistique (définition)]]
- [[C - Apprentissage supervisée]]
- [[C - Méthodes prédictives vs descriptives]]
- [[C - Classification]]
- [[C - Régression]]
- [[C - Réduction de dimensions (cadre supervisé)]]
- [[C - Recette de construction d'un algorithme ML]]
## 2) Hypothèses de modélisation & estimation

- [[C - Modèle paramétrique]]
- [[C - Vraisemblance]]
- [[C - Bruit -- Variabilité non expliquée]]

## 3) Grandes familles de modèles (A -)

### 3.1 Modèles linéaires (régression / classification)

- [[A - Régression Linéaire]]
- [[A - Régression Polynomiale]]
- [[A - Régression Logistique (Binaire)]]
- [[A - Régression Logistique (Multiclasse)]]
- [[C - Séparation Directionnelle]] _(séparabilité/marge → lien SVM, perceptron)_

### 3.2 Méthodes à noyau / marge

- [[A - Machines à vecteurs de support (SVM)]]
- [[A - Kernel SVM]]
- [[A - Soft Margin SVM]]
- [[C - Hyperplan]]
- [[C - Vecteur de Support]]

### 3.3 Méthodes à base d’instances

- [[A - KNN]]

### 3.4 Arbres & ensembles

- [[A - Arbre de décision]]
- [[A - Forêt Aléatoire]]
- [[A - Gradient Boosted Trees (XGBoost)]]
- [[C - Mesure d'impureté]]
- [[C - Gain d'information et d'impurité]]

### 3.5 Modèles bayésiens (classification)

- [[A - Classificateur de Bayes]]
- [[A - Classification Naïve Bayésienne]]
- [[C - Correction de Laplace]]
- [[C - m-estimate]]
- [[C - Taux d'Erreur Bayésien]]

### 3.6 Réseaux de neurones

- [[C - Neurones Artificiels]]
- [[C - Fonction d'activation]]
- [[A - Réseau de neurones]]
- [[T - Théorème d'approximation universelle]]
- [[C - Neurone Biologique (analogie)]]
- [[A - Réseau de neurones convolutionnels (CNN)]]
- [[C - Perte d'Entropie Croisée (Cross-Entropy)]]
- [[A - Rétropropagation du gradient (gradient descent)]]
- [[A - Initialisation de Glorot (Xavier)]]
- [[C - Apprentissage profond (Deep Learning)]]

### 3.6.1 Réseaux convolutionnels

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Connectivité Locale (Champ Récepteur)]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Équivariance vs Invariance]]
- [[C - Couche de Pooling (Max Pooling)]]
- [[C - Convolution Discrète (2D)]]
- [[C - Terminologie de la Convolution (stride, padding, kernel)]]
- [[C - Convolution Dilatée]]
- [[A - Convolution Transposée (Déconvolution)]]
- [[C - Apprentissage Hiérarchique des Caractéristiques (CNN)]]
- [[C - Augmentation de Données (Data Augmentation)]]
- [[A - ResNet (Connexion Résiduelle)]]

### 3.6.2 Réseaux récurrents & attention

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[A - Modèle de Langage Neuronal (Bengio 2003)]]
- [[C - RNN Profond (Empilé)]]
- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - LSTM (Long Short-Term Memory)]]
- [[A - GRU (Gated Recurrent Unit)]]
- [[A - RNN Bidirectionnel]]
- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[A - Attention Douce (Bahdanau)]]
### 3.7 Approches basées sur règles

- [[A - Ruled-based classification]]

## 4) Réglage & généralisation (pont vers MOC Évaluation)

- [[C - Hyperparamètres]]
- [[C - Complexité d'un modèle (capacité)]]
- [[C - Surapprentissage]]
- [[C - Sous-apprentissage]]
- [[C - Biais]]
- [[C - Variance (expliquée)]]
- [[C - Compromis Biais-Variance]]
- [[C - Théorème du No Free Lunch]]
## 5) Représentations de texte (features)

- [[C - Bag of Words]]
- [[C - n-grammes]]
- [[C - skip-grammes]]
- [[C - Word 2 vec]]

## 6) Ponts vers autres cadres

- [[C - Apprentissage semi-supervisé]]
- [[C - Apprentissage non-supervisée]]