---
type: concept
cours: [IFT6135, IFT6269]
statut: brouillon
maj: 2026-11-11
---
Propriété souhaitable d'un [[C - Estimateur Ponctuel|estimateur ponctuel]] : à mesure que le nombre de points de données $m$ augmente, l'estimé converge vers la vraie valeur du paramètre :

$$\text{plim}_{m\to\infty} \widehat\theta_m = \theta$$
où $\text{plim}$ désigne la **convergence en probabilité** : pour tout $\epsilon>0$, $P(|\widehat\theta_m-\theta|>\epsilon)\to0$ quand $m\to\infty$. C'est ce qu'on appelle la consistance **faible** (la consistance **forte** exige la convergence presque sûre).
## Ce que ça garantit et ce que ça ne garantit pas

La consistance garantit que le [[C - Biais|biais]] induit par l'estimateur diminue à mesure que le nombre d'exemples augmente. **Mais l'inverse n'est pas vrai** : le fait qu'un estimateur soit asymptotiquement non biaisé n'implique pas qu'il soit consistant.

**Contre-exemple** : pour estimer la moyenne $\mu$ d'une gaussienne avec $m$ échantillons ${x^{(1)},\ldots,x^{(m)}}$, on pourrait utiliser $\widehat\theta = x^{(1)}$ (seulement le premier échantillon). Cet estimateur est non biaisé peu importe $m$ (donc asymptotiquement non biaisé), mais il n'est **pas consistant**. Il ne converge jamais vers $\mu$ à mesure que $m$ croît, puisqu'il ignore tous les autres échantillons.

## Consistance standard vs consistance $L^2$ (IFT6269)

- **Consistance (statistique standard)** : $\widehat\theta_n\xrightarrow{p}\theta$ ([[C - Convergence de variables aléatoires|convergence en probabilité]]).
- **Consistance $L^2$** : $\widehat\theta_n\xrightarrow{L^2}\theta$, i.e. $\mathbb E\|\widehat\theta_n-\theta\|^2\to0$, ce qui équivaut (par la [[T - Décomposition biais-variance]]) à : biais $\to0$ **et** variance $\to0$.
- $L^2$-consistant ⇒ consistant (la réciproque est fausse).
- Le [[C - Estimateur du Maximum de Vraisemblance (MLE)|MLE]] est consistant sous conditions de régularité.
## Liens connexes

- [[MOC - Inférence Statistique]]
- [[MOC - IFT6135 Apprentissage de Représentations]]
- [[C - Estimateur Ponctuel]]
- [[C - Biais]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Convergence de variables aléatoires]]
- [[T - Décomposition biais-variance]]
## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Consistance vs consistance $L^2$ d'un estimateur ?::Consistant : $\widehat\theta_n\xrightarrow{p}\theta$. $L^2$-consistant : $\mathbb E\|\widehat\theta_n-\theta\|^2\to0$ (plus fort).

Condition équivalente à la consistance $L^2$ en termes de biais et variance ?::Biais $\to0$ et variance $\to0$ (décomposition biais-variance).
