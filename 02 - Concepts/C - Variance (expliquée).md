**Définition**
La **variance** mesure à quel point le modèle appris change quand on change légèrement l’échantillon d’entraînement : modèle trop flexible ⇒ il “colle” aux particularités/bruit du set d'entraînement.

**Intuition**  
Différents échantillons ⇒ différents h(x) très différents (oscillations, ajustements instables) ⇒ grande sensibilité aux données.

**Symptômes pratiques**
- erreur **train faible** mais erreur **val/test élevée** → souvent [[C - Surapprentissage]]
- augmenter la régularisation / plus de données / ensembles (forêt) ↓ variance
**Notes en plus**
 - Résultats bons en moyenne mais trop variables en pratique 
 - Modèles trop complexes 
 - Révèle le surapprentissage o
 - Mesure : variance des prédictions d'un modèle