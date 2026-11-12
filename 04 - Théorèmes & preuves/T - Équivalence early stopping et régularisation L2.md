---
type: theoreme
cours: [IFT6135]
statut: brouillon
maj: 2026-11-12
---
Pour un modèle linéaire, une erreur quadratique et une descente de gradient simple initialisée à l'origine, l'[[C - Early stopping|arrêt prématuré]] après $\tau$ pas avec un taux $\eta$ équivaut à une [[C - Régularisation L2 (Weight Decay)|régularisation L2]] de coefficient
$$\alpha \approx \frac{1}{\tau\,\eta}.$$

## Intuition
L'early stopping limite l'optimisation à un petit volume de l'espace des paramètres autour de $w^{(0)}$ : le nombre de pas $\tau$ joue le rôle de l'inverse du coefficient de régularisation. Plus on entraîne longtemps, moins on régularise. Les directions de forte courbure (grand $\lambda_i$) sont apprises en premier, celles de faible courbure restent proches de 0, exactement comme avec L2.

## Formalisme / Dérivation
1. **Approximation quadratique** autour de l'optimum non régularisé $w^*$ :
$$\hat J(w) = J(w^*) + \tfrac12 (w-w^*)^\top H (w-w^*),\qquad \nabla_w \hat J(w) = H(w-w^*).$$
2. **Descente de gradient**, avec $w^{(0)} = 0$ :
$$w^{(\tau)} = w^{(\tau-1)} - \eta H (w^{(\tau-1)} - w^*) \;\Rightarrow\; w^{(\tau)} - w^* = (I - \eta H)(w^{(\tau-1)} - w^*).$$
3. $H$ est réelle et symétrique : $H = Q\Lambda Q^\top$. Dans la base propre :
$$Q^\top (w^{(\tau)} - w^*) = (I - \eta\Lambda)\, Q^\top (w^{(\tau-1)} - w^*).$$
4. Si $|1-\eta\lambda_i| < 1$ pour tout $i$, en déroulant les $\tau$ pas depuis $w^{(0)}=0$ :
$$Q^\top w^{(\tau)} = \left[I - (I - \eta\Lambda)^\tau\right] Q^\top w^*.$$
5. **Solution L2** (voir [[C - Régularisation L2 (Weight Decay)]]) : $\tilde w = Q(\Lambda + \alpha I)^{-1}\Lambda Q^\top w^*$, qu'on réécrit
$$Q^\top \tilde w = \left[I - (\Lambda + \alpha I)^{-1}\alpha\right] Q^\top w^*.$$
6. Les deux coïncident si $(I - \eta\Lambda)^\tau = (\Lambda + \alpha I)^{-1}\alpha$. En prenant le log, $\tau \log(1-\eta\lambda_i) = -\log(1 + \lambda_i/\alpha)$, puis par développement de Taylor ($\log(1+x)\approx x$) pour $\eta\lambda_i \ll 1$ et $\lambda_i/\alpha \ll 1$ :
$$\tau\,\eta\,\lambda_i \approx \frac{\lambda_i}{\alpha}\quad\Longrightarrow\quad \alpha \approx \frac{1}{\tau\eta}.$$

## Exemple
Avec $\eta = 0{,}01$ et un arrêt à $\tau = 1000$ pas, on obtient en gros le même $w$ qu'une pénalité L2 avec $\alpha \approx 0{,}1$.

## IFT6135 — limites du résultat
L'équivalence n'est exacte que sous l'approximation quadratique et pour de petites valeurs propres. Avantage pratique de l'early stopping : il choisit automatiquement la « bonne » quantité de régularisation en un seul entraînement, alors que L2 demande plusieurs entraînements pour régler $\alpha$.

## Flashcards
#flashcards/IFT6135/07-regularisation

Sous quelles hypothèses l'early stopping équivaut-il à L2 ?::Modèle linéaire (ou approximation quadratique de la perte), descente de gradient simple, initialisation $w^{(0)}=0$, $|1-\eta\lambda_i|<1$ et petites valeurs propres.

Relation entre $\tau$, $\eta$ et $\alpha$ ?::$\alpha \approx 1/(\tau\eta)$ : le nombre de pas joue le rôle de l'inverse du coefficient L2.

Dérive $Q^\top w^{(\tau)}$ pour la descente de gradient sur une perte quadratique
?
$w^{(\tau)}-w^* = (I-\eta H)(w^{(\tau-1)}-w^*)$ ; avec $H = Q\Lambda Q^\top$ et $w^{(0)}=0$, en déroulant : $Q^\top w^{(\tau)} = [I-(I-\eta\Lambda)^\tau]Q^\top w^*$.

Pourquoi l'early stopping est-il pratique par rapport à L2 ?::Il trouve la quantité de régularisation en un seul entraînement (on surveille la validation), au lieu d'entraîner plusieurs fois pour régler $\alpha$.

## Liens connexes
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[MOC - Évaluation & généralisation]]
- [[C - Early stopping]]
- [[C - Régularisation L2 (Weight Decay)]]
- [[C - Valeurs et Vecteurs propres]]
- [[C - Matrice Hessienne]]
