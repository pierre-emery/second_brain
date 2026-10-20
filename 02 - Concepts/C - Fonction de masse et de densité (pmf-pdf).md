---
type: concept
Cours:
  - IFT6269
statut: complet
maj: 2026-10-15
---
Les deux façons de caractériser complètement la distribution d'une [[C - Variable Aléatoire]], selon qu'elle soit discrète ou continue.

## Cas discret : fonction de masse (pmf)

Une variable aléatoire discrète est caractérisée par sa **probability mass function** $p : \Omega \to \mathbb R_+$ (notation « lower case » $p(x)$ pour $x \in \Omega$), telle que $$p(x) \geq 0 \ \forall x \in \Omega \qquad \text{et} \qquad \sum_{x \in \Omega} p(x) = 1$$ Rappel : $P({X=x}) = p(x)$.

Pour un événement $E \subseteq \Omega$ : $P(E) = \sum_{x \in E} p(x)$.

## Cas continu : fonction de densité (pdf)

Une variable aléatoire continue est caractérisée par sa **probability density function** $p : \Omega \to \mathbb R$ telle que $$p(x) \geq 0 \ \forall x \in \Omega \qquad \text{et} \qquad p \text{ est intégrable, } \int_\Omega p(x),dx = 1$$ Pour $\Omega = \mathbb R$ : $P([a,b]) = \int_a^b p(x),dx$, avec $\mathcal E \to$ le **σ-field de Borel**.

Interprétation comme limite : $p(x) = \lim_{r \to 0^+} \dfrac{P(B_r)}{\text{vol}(B_r)}$ où $B_r$ est une boule de rayon $r$ centrée en $x$.

**Point important** : $P({X=x}) = 0$ pour une variable continue (contrairement au cas discret où $P({X=x}) = p(x)$). $$P{X \in x \pm \tfrac{\Delta}{2}} \approx p(x),\Delta \quad \text{(approximation pour } \Delta \text{ petit)}$$

> Remarque en passant : on peut changer la valeur de $p$ sur un nombre **dénombrable** de points sans rien changer — un tel ensemble a une mesure nulle selon la mesure de Lebesgue.

## Récap

|                  | Discrète   | Continue   |
| ---------------- | ---------- | ---------- |
| Caractérisée par | pmf $p(x)$ | pdf $p(x)$ |
| $P({X=x})$       | $= p(x)$   | $= 0$      |

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Espace de Probabilité]]
- [[C - Fonction de répartition (CDF)]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]

## Flashcards

#flashcards/IFT6269/01-probabilites

Deux conditions pour qu'une fonction $p$ soit une pmf ?::$p(x) \geq 0$ pour tout $x \in \Omega$ et $\sum_{x \in \Omega} p(x) = 1$.

Deux conditions pour qu'une fonction $p$ soit une pdf ?::$p(x) \geq 0$ pour tout $x$, et $p$ intégrable avec $\int_\Omega p(x)\,dx = 1$.

Une densité $p(x)$ peut-elle être supérieure à 1 ?::Oui : seule son intégrale doit valoir 1. $p(x)$ n'est pas une probabilité ; $P(X \in x \pm \tfrac\Delta2) \approx p(x)\,\Delta$.

Interprétation de la densité comme limite ?::$p(x) = \lim_{r \to 0^+} \dfrac{P(B_r)}{\mathrm{vol}(B_r)}$, où $B_r$ est une boule de rayon $r$ centrée en $x$.

Pourquoi peut-on modifier une pdf en un nombre dénombrable de points sans rien changer ?::Un ensemble dénombrable est de mesure (de Lebesgue) nulle : les intégrales, donc toutes les probabilités, restent identiques.