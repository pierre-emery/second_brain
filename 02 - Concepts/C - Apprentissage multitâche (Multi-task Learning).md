---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Entraîner **un même modèle sur plusieurs tâches liées** en partageant une partie de ses paramètres (couches basses communes), pour que chaque tâche **régularise les autres**.

$$\min_{\theta_{sh},\,\theta_1,\dots,\theta_K}\ \sum_{k=1}^K \lambda_k\, \mathcal L_k\big(y_k,\ g_k(h(x;\theta_{sh});\theta_k)\big)$$

## Intuition
Si plusieurs tâches dépendent des mêmes facteurs explicatifs de $x$, une représentation partagée $h$ doit capturer ces facteurs plutôt que du bruit propre à une seule tâche. Les paramètres partagés voient plus de signal (de toutes les tâches), donc ils ont moins de variance.

## Formalisme
Architecture du cours : entrée $X$ → couche partagée $h_{\text{partagé}}$ → branches spécifiques $h_1 \to Y_1$ et $h_2 \to Y_2$ (plus éventuellement $h_3$, non supervisée).
- Paramètres **partagés** $\theta_{sh}$ : profitent de toutes les tâches, ce qui améliore la généralisation.
- Paramètres **spécifiques** $\theta_k$ : propres à chaque tâche.

## Exemple
Une même base CNN qui prédit à la fois la classe d'un objet et sa boîte englobante.

## IFT6135 — Chap. 07
Le même principe que pour l'[[A - Préentraînement glouton couche par couche|apprentissage non supervisé]] s'applique à l'apprentissage auto-supervisé, multitâche et par transfert : dans tous les cas, on se sert de tâches liées pour régulariser les paramètres de la tâche cible. Le principe reste valable même quand il y a plusieurs tâches cibles : chaque tâche régularise les autres.

## Flashcards
#flashcards/IFT6135/07-regularisation

Pourquoi l'apprentissage multitâche régularise-t-il ?::Les paramètres partagés doivent servir à toutes les tâches : ils capturent les facteurs communs plutôt que le bruit d'une tâche, et ils voient plus de données, donc moins de variance.

Quels paramètres profitent du multitâche, et lesquels non ?::Les paramètres partagés (couches basses) en profitent ; les têtes spécifiques à une tâche n'en profitent pas directement.

Point commun entre préentraînement non supervisé, auto-supervision, multitâche et transfert ?::Tous se servent d'autres tâches liées pour régulariser les paramètres de la tâche cible.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Évaluation & généralisation]]
- [[C - Régularisation]]
- [[C - Partage de Paramètres (Poids Partagés)]]
- [[C - Préentraînement et affinage (Pre-training, Fine-tuning)]]
