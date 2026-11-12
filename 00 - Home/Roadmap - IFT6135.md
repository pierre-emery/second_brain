---
type: roadmap
cours: [IFT6135]
maj: 2026-11-11
---
# Roadmap d'étude — IFT6135 Apprentissage de représentations

**Objectif** : examen final (25 %), date à confirmer. ⚠️ Les 3 devoirs (théorie + pratique) valent 75 % : ils passent avant l'étude pour l'examen.
**Budget** : environ 8 h/semaine d'étude active jusqu'au 16 déc. (IFT6269 a la priorité), puis la quasi-totalité du temps jusqu'à l'examen d'IFT6135.
MOC : [[MOC - IFT6135 Apprentissage de Représentations]] · Roadmap jumelle : [[Roadmap - IFT6269]] · Référence : Goodfellow, *Deep Learning*

---

## Méthode

Même méthode que pour IFT6269 : vault à jour dans les 48 h, séance de questions avec Claude, dérivations à la main, puis notes `à réviser` et flashcards ciblées.
Spécificité d'IFT6135 : pour chaque architecture ou modèle, je dois pouvoir **(1)** écrire le forward, **(2)** écrire l'objectif d'entraînement, **(3)** dire quel problème il résout par rapport au modèle précédent, et **(4)** citer ses défauts connus.

**Tous les jours** : flashcards `#flashcards/IFT6135` (environ 15 min).

---

## Les blocs

### Bloc A — Fondements des réseaux (chap. 00–02) ✅ *dans le vault*
Neurone, MLP, fonctions d'activation, pertes, rétropropagation, initialisation.
- Dérivations : rétropropagation d'un MLP à 2 couches, sous forme matricielle ; gradient de softmax + entropie croisée ; justification de l'initialisation Glorot (conservation de la variance).

### Bloc B — Architectures (chap. 03, 05, 06)
CNN ✅, RNN/LSTM/GRU, seq2seq et attention ✅, **Transformer (chap. 06) ⚠️ absent du vault**.
- Dérivations : taille de sortie d'une convolution (padding, stride, dilatation) et champ réceptif ; BPTT et explosion/disparition du gradient (valeurs propres de $W$) ; pourquoi la cellule LSTM laisse passer le gradient ; attention $\mathrm{softmax}(QK^\top/\sqrt{d_k})V$ et la raison du $\sqrt{d_k}$ ; complexité de la self-attention ($O(n^2)$).
- Pièges : encodage positionnel ; masque causal ; BERT vs GPT.

### Bloc C — Optimisation et régularisation (chap. 07–08) ⚠️ *à intégrer*
SGD, momentum, Nesterov, AdaGrad, RMSProp, Adam ; BatchNorm, LayerNorm ; régularisation L2/L1, early stopping, augmentation de données, dropout.
- Dérivations : momentum comme moyenne mobile exponentielle ; correction de biais d'Adam ; équivalence L2 ↔ prior gaussien (MAP) ; dropout vu comme un ensemble et la mise à l'échelle à l'inférence.
- Liens : MAP, prior et régularisation ↔ IFT6269 bloc A.

### Bloc D — Génératifs I : autoencodeurs, autorégressifs, flows (chap. 09–10) ⚠️ *à intégrer*
Autoencodeurs (sous-complets, débruitants, contractifs), NADE, MADE, PixelRNN/PixelCNN (angle mort), normalizing flows.
- Dérivations : règle de la chaîne pour la densité autorégressive ; masques de MADE ; changement de variables $\log p(x) = \log p(z) + \log\lvert\det \partial z/\partial x\rvert$ ; pourquoi on utilise des jacobiens triangulaires.
- Lien : autoencodeur linéaire ↔ PCA (IFT6269 bloc H).

### Bloc E — Génératifs II : VAE, GAN, diffusion (chap. 11–13) ⚠️ *à intégrer*
- Dérivations : ELBO $= \mathbb E_q[\log p(x\mid z)] - \mathrm{KL}(q(z\mid x)\,\|\,p(z))$ ; reparamétrisation ; borne IWAE ; objectif minimax du GAN, discriminateur optimal et lien avec JSD ; diffusion : processus forward, perte de débruitage simplifiée.
- Pièges : posterior collapse ; mode collapse ; gap d'amortissement vs gap d'approximation.
- Lien fort : **à étudier avec IFT6269** (inférence variationnelle, EM, KL).

### Bloc F — Apprentissage auto-supervisé, méta-apprentissage (chap. 14–15, sous réserve)
Tâches prétextes, apprentissage contrastif (InfoNCE) ; méta-apprentissage (MAML, réseaux prototypiques).
- À adapter selon ce qui est réellement enseigné.

---

## Calendrier

### Semaines 1 à 4 — 12 nov. → 6 déc. (environ 8 h/sem.)
- [ ] Combler les trous du vault : donner à Claude les PDF des chapitres 06 à 10 (et les suivants au fil des cours)
- [ ] Sem. 1 : bloc A, séance de questions (consolidation rapide, c'est déjà dans le vault)
- [ ] Sem. 2 : bloc B, CNN + RNN + Transformer
- [ ] Sem. 3 : bloc C, optimisation et régularisation
- [ ] Sem. 4 : bloc D, autoencodeurs, autorégressifs, flows
- [ ] Devoirs A2 et A3 : à placer dans le calendrier dès que les échéances sont connues

### Semaine 5 — 7 → 13 déc.
- [ ] Bloc E : VAE en commun avec IFT6269 bloc H (inférence variationnelle), puis GAN et diffusion

### Après le 16 déc. → examen IFT6135
- [ ] Bloc F
- [ ] Quiz cumulatif A–F avec Claude
- [ ] Examen blanc chronométré, correction, notes `à réviser`
- [ ] Dernier jour : uniquement les notes `à réviser` et les flashcards en retard

---

## Suivi des points faibles

```dataview
LIST
FROM ""
WHERE cours AND contains(cours, "IFT6135") AND statut = "à réviser"
SORT file.name ASC
```
