---

type: algorithme

cours: [IFT6135]

statut: brouillon

maj: 2026-10-15

---
La [[A - Rétropropagation à travers le temps (BPTT)|BPTT]] complète exige de dérouler **toute** la séquence avant la moindre mise à jour : inappropriée pour les séquences **très longues** ou **infinies** (p. ex. apprentissage en ligne, flux continu), à cause du coût mémoire et du délai avant chaque mise à jour.
## Principe

La BPTT tronquée approxime la BPTT en :
- effectuant la propagation avant **$k_1$ pas à la fois** ;
- n'effectuant la rétropropagation que sur les **$k_2$ derniers pas**, puis en mettant à jour les paramètres, en traitant les pas antérieurs comme **fixes** (constantes).

L'état caché, lui, continue d'être **transmis** d'un segment à l'autre : seul le **gradient** est coupé.
## Exemple avec $k_1 = k_2 = 2$

1. Avant sur $t = 0, 1$ → arrière sur $t = 1, 0$ → mise à jour.
2. Avant sur $t = 2, 3$, en partant de $\mathbf{h}_1$ calculé **avant** la mise à jour (« pre-update » $\mathbf{h}_1$) → arrière sur $t = 3, 2$, **on arrête la BPTT à $t = 2$** → mise à jour.
## Conséquence

Le modèle ne peut plus recevoir de signal de gradient pour des dépendances plus longues que $k_2$ pas — même s'il peut en principe les représenter dans son état caché.

*(Complément, hors diapos : en PyTorch, on coupe le gradient entre segments avec `h = h.detach()`.)*
## Liens connexes

- [[A - Rétropropagation à travers le temps (BPTT)]]
- [[A - Réseau de Neurones Récurrent (RNN)]]
- [[C - Gradient Explosif et Évanescent (RNN)]]
- [[MOC - IFT6135 Apprentissage de Représentations]]