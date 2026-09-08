---
type: concept
cours: [IFT6135]
statut: brouillon
maj: 2026-09-08
---
Généralisation de l'[[C - Inverse d'une matrice|inverse]] à des matrices **non carrées** ou **non inversibles**, notée $\mathbf{A}^+$.

## Usage : résoudre $\mathbf{A}\mathbf{x}=\mathbf{b}$ quand $\mathbf{A}^{-1}$ n'existe pas

- Si $\mathbf{A}$ a plus de **colonnes** que de lignes (système sous-déterminé, plusieurs solutions possibles) : $\mathbf{x}=\mathbf{A}^+\mathbf{b}$ donne la solution de **norme minimale** $||\mathbf{x}||_2$ parmi toutes les solutions exactes.
- Si $\mathbf{A}$ a plus de **lignes** que de colonnes (système surdéterminé, aucune solution exacte) : $\mathbf{x}=\mathbf{A}^+\mathbf{b}$ donne la solution qui minimise $||\mathbf{A}\mathbf{x}-\mathbf{b}||_2$ (voir [[C - Moindres Carrés Ordinaires (MCO)]]).

## Liens connexes

- [[MOC - Algèbre linéaire]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[C - Inverse d'une matrice]]
- [[C - Moindres Carrés Ordinaires (MCO)]]
- [[C - Valeurs et Vecteurs propres]]