---
type: concept
cours:
  - IFT6135
  - IFT6269
statut: brouillon
maj: 2026-10-15
---
**Points critiques** : ${\mathbf{x} \in \mathbb{R}^d \mid \nabla_\mathbf{x} f(\mathbf{x}) = 0}$

**Courbure** dans la direction $\mathbf{v}$ : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v}$

**Types de points critiques** (via la Hessienne) :

- Minimum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} > 0\ \forall \mathbf{v}$ (Hessienne définie positive)
- Maximum local : $\mathbf{v}^\top \nabla^2_\mathbf{x} f(\mathbf{x}) \mathbf{v} < 0\ \forall \mathbf{v}$ (Hessienne définie négative)
- Point-selle : la courbure est positive dans certaines directions, négative dans d'autres

## Notes supplémentaires de IFT6269 (nécessaire vs suffisant, cas global et bords)

**Cas 1D** : $f'(\theta^\star)=0$ est une condition **nécessaire** (pas suffisante) pour un maximum local si $\theta^\star$ est à l'**intérieur** de $\Theta$. Il faut aussi $f''(\theta^\star)<0$ pour confirmer un maximum local (analogue 1D de la Hessienne définie négative).

**Résultat global** : si $f$ est **concave** sur tout $\Theta$ (i.e. $\forall\theta\in\Theta,\ f''(\theta)\leq 0$, ou en multivarié $\mathrm{Hessienne}(f)(\theta)\preceq 0$ partout), alors tout point stationnaire est automatiquement un maximum **global**, pas seulement local. C'est le cas typique des log-vraisemblances de familles exponentielles (ex. [[E - Exercice MLE Binomiale]], [[E - Exercice MLE Multinomiale]]).

**Piège des bords (boundary)** : si l'optimum $\theta^\star$ est sur la **frontière** de $\Theta$, il n'est en général **pas** un point stationnaire ($\nabla f(\theta^\star)$ peut être non nul). La condition de stationnarité ne s'applique qu'à l'intérieur du domaine.

## Liens connexes

- [[MOC - Optimisation & calcul matriciel]]
- [[MOC - IFT6135 Apprentissage de représentations]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Matrice Hessienne]]
- [[C - Gradient]]
- [[A - Maximisation de la vraisemblance]]
## Flashcards

#flashcards/IFT6135/00-revision

Définition d'un point critique ?::Un point où $\nabla_\mathbf{x} f(\mathbf{x}) = \mathbf{0}$.

Qu'est-ce qu'un point-selle ?::Un point critique où la courbure est positive dans certaines directions et négative dans d'autres.

Pourquoi la perte d'un réseau n'a-t-elle pas un optimum global unique ?::Permuter les unités cachées d'une couche (avec leurs connexions) donne la même fonction : les paramètres ne sont pas identifiables.

En haute dimension, quels points critiques posent surtout problème (Dauphin et al., 2014) ?::Les points-selles, plus que les minima locaux : d'où l'intérêt du momentum pour les traverser.

#flashcards/IFT6269/04-maximum-vraisemblance

En 1D, $f'(\theta^\star) = 0$ suffit-il pour un maximum local ?::Non, c'est nécessaire (à l'intérieur du domaine) mais pas suffisant : il faut aussi $f''(\theta^\star) < 0$.

Quelle classe de log-vraisemblances est typiquement concave, ce qui garantit un maximum global ?::Celles des familles exponentielles (ex. Binomiale, Multinomiale).