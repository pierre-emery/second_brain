# Définition
Le **biais** mesure l’erreur **systématique** d’un modèle due à des hypothèses trop restrictives : même avec beaucoup de données, le modèle “vise à côté” parce qu’il ne peut pas représenter la vraie relation.
(Autre définition pour les statistiques sommaires) Une variation systématique des mesures par rapport à la quantité mesurée.

## Intuition  
Modèle trop simple ⇒ il rate la forme du signal f(x) ⇒ la moyenne des modèles appris (sur différents échantillons) reste loin de f(x).

## Symptômes pratiques
- erreur **train élevée** et erreur **val/test élevée** → souvent **sous-apprentissage**
- augmenter la complexité / features diminue souvent le biais

## Notes en plus
- Erreur systématique non nulle 
- Modèles trop simples 
- Révèle le sous-apprentissage
- Mesure : moyenne des prédictions d’un modèle