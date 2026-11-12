---
type: concept
cours: [IFT6269]
statut: à réviser
maj: 2026-11-11
---
## Définition

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
## Biais d'un estimateur (IFT6269)

Pour $D_n=(X_1,\dots,X_n)$, $X_i\overset{iid}\sim P_\theta$ et un estimateur $\widehat\theta_n=\delta_n(D_n)$ :
$$\text{Biais}(\widehat\theta_n)=\mathbb E\big[\widehat\theta_n-\theta\big]=\mathbb E[\widehat\theta_n]-\theta .$$
C'est le premier terme de la [[T - Décomposition biais-variance]] du risque quadratique. Un estimateur sans biais n'est pas forcément meilleur : voir [[C - Estimateur de James-Stein]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[T - Décomposition biais-variance]]
- [[C - Consistance d'un Estimateur]]

## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Biais d'un estimateur $\widehat\theta_n$ ?::$\mathbb E[\widehat\theta_n]-\theta$.
