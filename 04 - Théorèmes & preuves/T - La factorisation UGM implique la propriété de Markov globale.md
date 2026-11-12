---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

Si $p\in\mathcal L(G)$ (UGM), alors $p$ satisfait la [[C - Propriété de Markov globale|propriété de Markov globale]] pour $G$.

## Hypothèses

$G$ non dirigé, $p$ se factorise en potentiels sur les cliques de $G$ (aucune positivité requise).

## Preuve

**Réduction à $A\cup B\cup S=V$.** Si $A\cup B\cup S\subsetneq V$, posons
$$\tilde A\triangleq A\cup\{a\in V:\ a \text{ et } A \text{ ne sont pas séparés par } S\},\qquad \tilde B\triangleq V\setminus(S\cup\tilde A).$$
Alors $\tilde A\cup\tilde B\cup S=V$ (union disjointe) et $S$ sépare $\tilde A$ de $\tilde B$ : sinon il existerait $a\in\tilde A$, $b\in\tilde B$ reliés par un chemin évitant $S$, et par définition $b\in\tilde A$, contradiction. De plus $B\subseteq\tilde B$ (car $S$ séparait $A$ de $B$). Si l'on montre $X_{\tilde A}\perp\!\!\!\perp X_{\tilde B}\mid X_S$, la **décomposition** donne $X_A\perp\!\!\!\perp X_B\mid X_S$. On suppose donc $A\cup B\cup S=V$.

**Factorisation en deux blocs.** Une clique $C$ ne peut pas intersecter à la fois $A$ et $B$ (sinon une arête directe relierait $A$ à $B$ sans passer par $S$). Donc chaque clique est incluse dans $A\cup S$ ou dans $B\cup S$ :
$$p(x)=\frac1Z\prod_{C\subseteq A\cup S}\psi_C(x_C)\prod_{C'\not\subseteq A\cup S}\psi_{C'}(x_{C'})=f(x_{A\cup S})\,g(x_{B\cup S}),$$
car $C'\not\subseteq A\cup S\Rightarrow C'\subseteq B\cup S$.

**Conditionnelles.**
$$p(x_A\mid x_S)\propto p(x_A,x_S)=\sum_{x_B}f(x_{A\cup S})g(x_{B\cup S})=f(x_{A\cup S})\underbrace{\sum_{x_B}g(x_{B\cup S})}_{\text{cst en }x_A}\ \Rightarrow\ p(x_A\mid x_S)=\frac{f(x_A,x_S)}{\sum_{x'_A}f(x'_A,x_S)},$$
et de même $p(x_B\mid x_S)=\dfrac{g(x_B,x_S)}{\sum_{x'_B}g(x'_B,x_S)}$. Donc
$$p(x_A\mid x_S)\,p(x_B\mid x_S)=\frac{f(x_{A\cup S})\,g(x_{B\cup S})}{\sum_{x'_A}\sum_{x'_B}f(x'_A,x_S)g(x'_B,x_S)}=\frac{p(x_V)}{p(x_S)}=p(x_A,x_B\mid x_S).\ \blacksquare$$

## Corollaires / Conséquences

Une moitié de [[T - Théorème de Hammersley-Clifford]] (la direction qui ne demande pas $p>0$).

## Flashcards

#flashcards/IFT6269/12-modeles-non-diriges

Étape clé de « factorisation UGM ⇒ Markov global » ?::Aucune clique ne touche à la fois $A$ et $B$, donc $p=f(x_{A\cup S})g(x_{B\cup S})$, ce qui donne l'indépendance conditionnelle.

Comment se ramène-t-on au cas $A\cup B\cup S=V$ ?::Agrandir $A$ en $\tilde A$ (tout ce qui est relié à $A$ sans passer par $S$), poser $\tilde B$ = le reste, puis utiliser la décomposition.

La direction « factorisation ⇒ Markov global » demande-t-elle $p>0$ ?::Non : elle vaut pour toute $p$ qui se factorise selon les cliques. Seule la réciproque (Hammersley-Clifford) exige la positivité.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Probabilité]]
- [[C - Propriété de Markov globale]]
- [[M - Modèle Graphique Non-dirigé]]
- [[T - Théorème de Hammersley-Clifford]]
- [[C - Indépendance Conditionnelle]]
