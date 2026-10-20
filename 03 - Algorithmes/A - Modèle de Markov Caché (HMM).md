---
type: algorithme
cours:
  - IFT6269
statut: brouillon
maj: 2026-09-07
---
Un cas particulier de [[A - Modèle Graphique Probabiliste|modèle graphique probabiliste]] : une chaîne de variables latentes $Y_t$ générant à chaque pas de temps une observation $X_t$.
$$Y_t \to Y_{t+1} \to Y_{t+2} \to \cdots$$$$\downarrow \qquad\ \downarrow \qquad\quad \downarrow$$$$X_t \qquad X_{t+1} \qquad X_{t+2}$$
Applications typiques : reconnaissance de la parole, étiquetage grammatical, recherche de gènes, systèmes de contrôle (voir [[A - Modèle Graphique Probabiliste]] pour le détail de chacun).
## Filtre de Kalman

Cas particulier du système de contrôle : $$y_{t+1} = Ay_{t} + Bv_t + \epsilon_t \qquad \text{(état latent continu)}$$$$x_t = Cy_t + \epsilon_t' \qquad \text{(observation)}$$Si les bruits $\epsilon_t$ et $\epsilon_t'$ sont **gaussiens**, ce HMM (à variables continues) est appelé un **filtre de Kalman**.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[A - Modèle Graphique Probabiliste]]
- [[C - Factorisation d'une distribution jointe]]
- [[A - Passation de Messages]]
## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

Structure d'un HMM ?::Une chaîne de variables latentes $Y_t \to Y_{t+1}$, chacune générant une observation $X_t$.

Deux applications d'un HMM, en précisant $X_t$ et $Y_t$ ?::Reconnaissance de la parole ($X_t$ : onde sonore, $Y_t$ : phonème) ; étiquetage grammatical ($X_t$ : mot, $Y_t$ : catégorie grammaticale).

Qu'est-ce qu'un filtre de Kalman ?::Un HMM à états continus et linéaire, $y_{t+1} = Ay_t + Bv_t + \epsilon_t$, $x_t = Cy_t + \epsilon'_t$, avec des bruits gaussiens.
