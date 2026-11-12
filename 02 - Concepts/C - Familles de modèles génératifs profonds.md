---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Les modèles génératifs profonds apprennent une distribution $p(x)$ sur les données. Le cours les classe en trois familles selon la façon dont $p(x)$ est définie : **graphiques dirigés**, **non dirigés (à énergie)** et **autorégressifs**. Les [[M - Flot normalisant (Normalizing Flow)|flots normalisants]] forment une quatrième approche, vue juste après.

## Intuition : pourquoi des modèles génératifs ?
- **Signal d'apprentissage** pour le semi-supervisé : un bon modèle doit distinguer des données réelles d'un bruit aléatoire (pourquoi telle image est-elle un caractère et l'autre non ?).
- **Synthétiser** de nouvelles observations : utile pour la planification dans un environnement visuel (prédiction vidéo conditionnée par l'action, Oh et al. 2015).
- **A priori sur les observations réelles** : débruitage, super-résolution (Sønderby et al. 2016).

## Formalisme : les trois familles
| Famille | Définition de $p(x)$ | Exemples | Pour | Contre |
|---|---|---|---|---|
| **Graphiques dirigés** | prior sur la couche latente du haut, puis conditionnelles vers $x$ : $p(x, h^{(1)}, h^{(2)}, h^{(3)}) = p(x\mid h^{(1)})\,p(h^{(1)}\mid h^{(2)})\,p(h^{(2)}\mid h^{(3)})\,p(h^{(3)})$ | VAE, GAN, codage parcimonieux, machines de Helmholtz | facile à échantillonner (échantillonnage ancestral) | $p(x)$ intraitable, donc difficile à entraîner |
| **Non dirigés (énergie)** | énergie jointe $E(x,h^{(1)},h^{(2)},h^{(3)}) = -x^\top W^{(1)}h^{(1)} - h^{(1)\top}W^{(2)}h^{(2)} - h^{(2)\top}W^{(3)}h^{(3)}$, puis $p = \exp(-E)/Z$ | machines de Boltzmann profondes (DBM), modèles à énergie profonds | $p(x)$ calculable à une constante près (vrai pour les RBM, pas pour les BM générales) | difficile à échantillonner (MCMC), $p(x)$ intraitable |
| **Autorégressifs** | ordre sur les dimensions puis règle de la chaîne : $p(x) = \prod_{k=1}^D p(x_k\mid x_{<k})$ | MADE, NADE, PixelRNN, PixelCNN, LSTM spatial, WaveNet | $p(x)$ traitable : facile à entraîner et à échantillonner (mais lentement) | pas de représentation latente naturelle |

## Exemple
Pour une image binaire de 784 pixels : un VAE la génère à partir d'un code latent $z$ ; un modèle autorégressif la génère pixel par pixel ; une DBM la définit par une énergie à minimiser.

## IFT6135 — lien avec IFT6269
La factorisation des modèles dirigés est celle des [[M - Modèle Graphique Probabiliste|modèles graphiques]] dirigés ; le $Z$ des modèles à énergie est la fonction de partition des modèles non dirigés.

## Flashcards
#flashcards/IFT6135/10-generatifs

Trois familles de modèles génératifs profonds et leur définition de $p(x)$ ?
?
Dirigés : prior latent + conditionnelles vers $x$ (VAE, GAN). Non dirigés : $p=\exp(-E)/Z$ (DBM). Autorégressifs : $p(x)=\prod_k p(x_k\mid x_{<k})$ (MADE, PixelCNN).

Pour et contre des modèles dirigés ?::Pour : échantillonnage ancestral facile. Contre : $p(x)$ intraitable (marginaliser les latentes), donc entraînement difficile.

Pour et contre des modèles autorégressifs ?::Pour : $p(x)$ exact et traitable, entraînement facile. Contre : échantillonnage séquentiel (lent) et pas de représentation latente naturelle.

Trois usages des modèles génératifs cités en cours ?::Signal pour le semi-supervisé, synthèse de données (planification visuelle), a priori sur les observations (débruitage, super-résolution).

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Probabilité]]
- [[C - Approches génératives, conditionnelles et discriminantes]]
- [[C - Modèle génératif autorégressif]]
- [[M - Flot normalisant (Normalizing Flow)]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Variable latente]]
