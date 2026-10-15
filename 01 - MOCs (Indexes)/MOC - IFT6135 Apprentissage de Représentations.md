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
maj: 2026-09-28
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
- [[A - Réseau de neurones]]
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
- [[A - Convolution Transposée (Déconvolution)]]
### Architecture et entraînement

- [[A - Réseau de neuronnes convolutionnels (CNN)]]
- [[C - Apprentissage Hiérarchique des Caractéristiques (CNN)]]
- [[C - Augmentation de Données (Data Augmentation)]]
- [[A - ResNet (Connexion Résiduelle)]]
## 4) Réseaux de neurones récurrents (Chapitre 05)

### Modélisation de séquences et du langage

- [[C - Modélisation du Langage]]
- [[C - n-grammes]]
- [[A - Modèle de Langage Neuronal (Bengio 2003)]]
- [[C - Plongement de Mots (Word Embedding)]]
### RNN

- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - RNN Profond (Empilé)]]
- [[C - Étiquetage de Séquence]]
- [[C - Classification de Séquence]]
- [[A - RNN Bidirectionnel]]
### Entraînement et stabilité du gradient

- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[A - BPTT Tronquée (Truncated BPTT)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[A - Écrêtage du Gradient (Gradient Clipping)]]
- [[A - Initialisation Orthogonale]]
### Cellules à portes

- [[A - LSTM (Long Short-Term Memory)]]
- [[A - GRU (Gated Recurrent Unit)]]
### Séquence à séquence
- [[A - Seq2Seq (Encodeur-Décodeur)]]
- [[A - Recherche en Faisceau (Beam Search)]]
## 5) Mécanismes d'attention

- [[A - Attention Douce (Bahdanau)]]
## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - Probabilité]]
- [[MOC - Inférence Statistique]]
- [[MOC - Modèles ML (supervisé)]]
- [[MOC - Évaluation & généralisation]]