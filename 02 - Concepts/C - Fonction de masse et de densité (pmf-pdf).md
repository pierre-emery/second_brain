---
type: concept
Cours:
  - IFT6269
statut: brouillon
maj: 2026-09-07
---
Les deux façons de caractériser complètement la distribution d'une [[C - Variable Aléatoire]] selon qu'elle soit discrète ou continue.

# Cas discret : fonction de masse (pmf)

Une variable aléatoire discrète est caractérisée par sa probability mass function $p:\Omega \rightarrow \mathbb R_+$ telle que $$p(x)\geq0\;\forall x\in\Omega \;\;\;\text{et}\;\;\;\sum_{x\in\Omega}p(x)=1$$
Rappel : $P({X=x})=p(x)$
Pour un événement $E\subseteq \Omega:P(E)=\sum_{x\in E}p(x)$.

# Cas continu : fonction de densité (pdf)

Une variable aléatoire continue est caractérisée par sa probability density function $p:\Omega\rightarrow\mathbb R$ telle que $$p(x)\geq0\;\forall x\in \Omega\;\;\;\text{et}\;\;\;\text{$p$ est intégrable,}\;\; \int_\Omega p(x)dx=1$$
Pour $\Omega=\mathbb R:P([a,b])=\int_a^bp(x)dx$, avec $\mathcal E\rightarrow$ le $\sigma$-field de Borel.


Interprétation comme limite : $p(x)=\lim_{r\rightarrow 0^+}\frac{P(B_r)}{\text{vol}(B_r)}$ où $B_r$ est une boule de rayon $r$ centrée en $x$.

**Point important :** $P{(X=x)}=0$ pour une variable aléatoire (contrairement au cas discret)

On peut l'approximer par un très petit domaine $P{X\in x \pm \frac{\Delta}{2}}\approx p(x) \Delta$

## Liens connexe

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[C - Espace de Probabilité]]
- [[C - Fonction de répartition (CDF)]]
- [[C - Distribution Jointe, Marginale et Conditionnelle]]

