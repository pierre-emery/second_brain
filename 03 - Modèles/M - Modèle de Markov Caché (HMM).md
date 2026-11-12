---
type: modele
cours: [IFT6269]
statut: brouillon
maj: 2026-11-12
---
Un cas particulier de [[M - Modèle Graphique Probabiliste|modèle graphique probabiliste]] : une chaîne de variables latentes $Y_t$ générant à chaque pas de temps une observation $X_t$.
$$Y_t \to Y_{t+1} \to Y_{t+2} \to \cdots$$$$\downarrow \qquad\ \downarrow \qquad\quad \downarrow$$$$X_t \qquad X_{t+1} \qquad X_{t+2}$$
Applications typiques : reconnaissance de la parole, étiquetage grammatical, recherche de gènes, systèmes de contrôle (voir [[M - Modèle Graphique Probabiliste]] pour le détail de chacun).
## Filtre de Kalman

Cas particulier du système de contrôle : $$y_{t+1} = Ay_{t} + Bv_t + \epsilon_t \qquad \text{(état latent continu)}$$$$x_t = Cy_t + \epsilon_t' \qquad \text{(observation)}$$Si les bruits $\epsilon_t$ et $\epsilon_t'$ sont **gaussiens**, ce HMM (à variables continues) est appelé un **filtre de Kalman**.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[M - Modèle Graphique Probabiliste]]
- [[C - Factorisation d'une distribution jointe]]
- [[A - Passation de Messages]]
- [[MOC - Probabilité]]
- [[A - Récursion alpha-bêta (avant-arrière)]]
- [[C - Filtrage, lissage et prédiction (HMM)]]
- [[A - Algorithme de Baum-Welch]]
- [[A - Algorithme de Viterbi]]
- [[C - Variable latente]]

## IFT6269 — formalisation (notation $Z_t$, $X_t$)

Le cours note les états cachés $Z_t$ (et non $Y_t$). Le HMM généralise un **modèle à variables latentes** (comme le mélange de gaussiennes, où les $Z_t$ sont indépendants) en ajoutant une **dépendance temporelle** $Z_{t-1}\to Z_t$.
- Latentes : $Z_t\in\{1,\dots,k\}$ discrètes (si $Z_t$ est gaussienne, on obtient le filtre de Kalman ci-dessus).
- Observées : $X_t$ continues (signal de parole) ou discrètes (séquence d'ADN).

**Factorisation (théorie des DGM).**
$$p(x_{1:T},z_{1:T})=p(z_1)\prod_{t=1}^T\underbrace{p(x_t\mid z_t)}_{\text{émission}}\prod_{t=2}^T\underbrace{p(z_t\mid z_{t-1})}_{\text{transition}}$$
Souvent **homogène** (indépendant de $t$) : $p_t(x_t\mid z_t)=f(x_t\mid z_t)$ et $p_t(z_t=i\mid z_{t-1}=j)=A_{ij}$, où $A$ est la **matrice de transition** (ou matrice stochastique), normalisée **par colonnes** : $\sum_iA_{ij}=1$, la colonne $j$ est une loi sur $z_t$. (Certains manuels normalisent les lignes ; Simon préfère les colonnes pour que les mises à jour soient des produits matrice-vecteur.)

**Inférence** : prédiction, filtrage, lissage → [[C - Filtrage, lissage et prédiction (HMM)]], calculés par la [[A - Récursion alpha-bêta (avant-arrière)]] ; décodage par [[A - Algorithme de Viterbi]].

**Apprentissage** : EM, c'est-à-dire l'[[A - Algorithme de Baum-Welch]].

## Flashcards

#flashcards/IFT6269/00-modeles-graphiques

Structure d'un HMM ?::Une chaîne de variables latentes $Y_t \to Y_{t+1}$, chacune générant une observation $X_t$.

Deux applications d'un HMM, en précisant $X_t$ et $Y_t$ ?::Reconnaissance de la parole ($X_t$ : onde sonore, $Y_t$ : phonème) ; étiquetage grammatical ($X_t$ : mot, $Y_t$ : catégorie grammaticale).

Qu'est-ce qu'un filtre de Kalman ?::Un HMM à états continus et linéaire, $y_{t+1} = Ay_t + Bv_t + \epsilon_t$, $x_t = Cy_t + \epsilon'_t$, avec des bruits gaussiens.

#flashcards/IFT6269/15-hmm

Factorisation de la jointe d'un HMM ?::$p(x_{1:T},z_{1:T})=p(z_1)\prod_{t=1}^Tp(x_t\mid z_t)\prod_{t=2}^Tp(z_t\mid z_{t-1})$ : émissions × transitions.

Convention de la matrice de transition dans le cours ?::$A_{ij}=p(z_t=i\mid z_{t-1}=j)$, normalisée par colonnes, pour que les mises à jour soient des produits matrice-vecteur $A\alpha_{t-1}$.

En quoi un HMM généralise-t-il un mélange de gaussiennes ?::Dans un mélange, les latentes $Z_t$ sont i.i.d. ; le HMM ajoute une dépendance markovienne $Z_{t-1}\to Z_t$ entre elles.
