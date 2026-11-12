---

type: concept

cours: [IFT6269]

statut: à réviser

maj: 2026-10-24

---
## Définition

Pour apprendre une fonction de prédiction $f:\mathcal X\to\mathcal Y$ (classification binaire $\mathcal Y=\{0,1\}$, multiclasse, ou régression $\mathcal Y\subseteq\mathbb R$), trois perspectives :

| Perspective                                | Ce qu'on modélise                          | Hypothèses | Robustesse                          | Exemples                                                                                               |
| ------------------------------------------ | ------------------------------------------ | ---------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Générative**                             | la jointe $p(x,y)=p(y)\,p(x\mid y)$        | le plus    | la moins robuste pour la prédiction | [[A - Analyse Discriminante Linéaire (LDA)\|LDA]], [[A - Classification Naïve Bayésienne\|Bayes naïf]] |
| **Conditionnelle** (ex-« discriminative ») | seulement $p(y\mid x)$                     | moyennes   | robuste                             | [[A - Régression Linéaire\|régression linéaire]], [[A - Régression Logistique (Binaire)\|logistique]]  |
| **Pleinement discriminante**               | $f$ directement, via la perte $\ell(y,y')$ | le moins   | la plus robuste                     | [[A - Machines à vecteurs de support (SVM)\|SVM]], ERM                                                 |

## Intuition

- Le génératif fait plus d'hypothèses (il doit aussi modéliser $p(x)$), donc il est moins robuste si ces hypothèses sont fausses, mais **plus flexible** quand on ne sait pas encore quelle tâche on va résoudre (on peut répondre à n'importe quelle question sur $(x,y)$, gérer des données manquantes, générer…).
- Simon préfère « **conditionnel** » à « discriminatif » (terme du début des années 2000) pour les modèles de $p(y\mid x)$.
- Pont entre les deux : une classe de modèles génératifs (classes conditionnelles dans la famille exponentielle) donne **exactement** un modèle logistique → [[T - Classes conditionnelles exponentielles et régression logistique]].
## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Modèles ML (supervisé)]]
- [[A - Régression Logistique (Binaire)]]
- [[A - Analyse Discriminante Linéaire (LDA)]]
- [[T - Classes conditionnelles exponentielles et régression logistique]]
## Flashcards

#flashcards/IFT6269/07-regression-lineaire

Trois perspectives pour modéliser un problème de prédiction ?::Générative ($p(x,y)$), conditionnelle ($p(y\mid x)$), pleinement discriminante ($f$ directement via la perte).

Laquelle des trois perspectives est la plus robuste ? la plus flexible ?::Plus robuste : pleinement discriminante (moins d'hypothèses). Plus flexible : générative (utile si la tâche n'est pas encore fixée).

Régression logistique : générative, conditionnelle ou discriminante ?::Conditionnelle : elle modélise seulement $p(y\mid x)$.