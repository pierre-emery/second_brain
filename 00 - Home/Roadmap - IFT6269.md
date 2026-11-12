---
type: roadmap
cours: [IFT6269]
maj: 2026-11-11
---
# Roadmap d'étude — IFT6269 Modèles graphiques probabilistes

**Objectif** : examen final en présentiel le **mer. 16 déc., 13 h 30 – 16 h 30** (50 %), sur toute la matière.
**Autres échéances** : Devoir 4 le 25 nov. · rapport d'avancement du projet (1 page) le 2 déc. · poster le 21 déc. · Devoir 5 et rapport de projet le 23 déc.
**Budget** : environ 14 h/semaine d'étude active (hors devoirs, projet et cours). IFT6269 a la priorité jusqu'au 16 déc., car c'est 50 % de la note et un cours très mathématique.
MOC : [[MOC - IFT6269 Modèles Graphiques Probabilistes]] · Roadmap jumelle : [[Roadmap - IFT6135]]

---

## Méthode (la même pour chaque bloc)

1. **Vault à jour** : chaque PDF de cours (lecture + scribbles) est donné à Claude dans les 48 h et intégré au vault.
2. **Explication active** : je lis le bloc *une* fois, puis je fais une séance de questions avec Claude (« interroge-moi sur le bloc X d'IFT6269 », mode étude du CLAUDE.md). Je dois réexpliquer sans regarder les notes.
3. **Dérivations à la main** : je refais au papier, sans notes, les dérivations clés listées pour le bloc. Si je bloque, je regarde une ligne, puis je recommence depuis le début.
4. **Exercices** : je refais les questions des devoirs du bloc *sans* la solution, puis je compare avec les solutions officielles.
5. **Points faibles** : les notes concernées passent en `statut: à réviser`, et Claude ajoute des flashcards ciblées.

**Tous les jours** : 20 à 30 min de flashcards (Spaced Repetition), avec `#flashcards/IFT6269`.
**Chaque dimanche** : quiz cumulatif d'environ 45 min avec Claude, mêlant les blocs déjà vus (interleaving).

---

## Les blocs

### Bloc A — Fondements statistiques
Probabilités, modèles paramétriques, fréquentiste vs bayésien, MLE, théorie de la décision, propriétés des estimateurs.
- Dérivations : MLE Bernoulli, binomial et multinomial (avec Lagrange) ; MLE de la gaussienne univariée ; décomposition biais-variance du risque quadratique ; posterior Beta-Bernoulli.
- Pièges : MLE biaisé (variance en $1/n$) ; condition du premier ordre invalide au bord de $\Theta$ ; admissibilité (James-Stein).

### Bloc B — Régression et classification
Régression linéaire, régression logistique, optimisation numérique (Newton, IRLS), classification générative (LDA de Fisher), astuces de dérivation matricielle pour le MLE gaussien.
- Dérivations : équations normales ; gradient et hessienne de la log-vraisemblance logistique ; mise à jour IRLS ; MLE de $\mu$ et $\Sigma$ multivariés (trace et log-det) ; frontière de décision de la LDA (linéaire) vs de la QDA.
- Pièges : régression logistique sur des données séparables (MLE infini) ; génératif vs discriminatif.

### Bloc C — Variables latentes : K-means, EM, GMM ⚠️ *absent du vault*
- Dérivations : K-means comme descente par coordonnées sur la distorsion ; borne de Jensen et ELBO ; étapes E et M pour le GMM ; preuve que EM ne fait jamais baisser la vraisemblance.
- Pièges : K-means comme limite d'un GMM avec $\sigma^2 \to 0$ ; optimum local, initialisation, singularités du GMM.

### Bloc D — Modèles graphiques dirigés et non dirigés
Théorie des graphes, DGM, d-séparation (Bayes ball), UGM, cliques, Hammersley-Clifford, passage dirigé → non dirigé (moralisation).
- Exercices : lire les indépendances d'un graphe ; montrer qu'une distribution se factorise selon un graphe ; trouver des indépendances qu'aucun DGM ou UGM ne représente.
- Pièges : explaining away (v-structure) ; marginalisation vs conditionnement dans les graphes.

### Bloc E — Inférence exacte
Élimination de variables, sum-product (somme-produit), max-product, arbre de jonction, HMM (forward-backward, Viterbi), EM pour les HMM (Baum-Welch).
- Dérivations : messages sum-product sur un arbre ; forward-backward écrit comme sum-product sur une chaîne ; étapes E et M de Baum-Welch.
- Exercices : complexité de l'élimination selon l'ordre (treewidth) ; calculer à la main des marginales sur un petit arbre.

### Bloc F — Théorie de l'information, max entropie, famille exponentielle
Entropie, KL, information mutuelle ; principe du maximum d'entropie et sa dualité ; famille exponentielle (statistiques suffisantes, log-partition, moment matching) ; estimation dans les modèles graphiques.
- Dérivations : max-ent sous contraintes de moments ⇒ famille exponentielle ; $\nabla A(\eta) = \mathbb E[T(X)]$ ; MLE dans une famille exponentielle = appariement des moments ; mettre Bernoulli, gaussienne et Poisson sous forme exponentielle.
- Pièges : $\mathrm{KL}(p\,\|\,q)$ vs $\mathrm{KL}(q\,\|\,p)$ (asymétrie, comportement mode-seeking vs mass-covering).

### Bloc G — Inférence approximative
Intégration Monte-Carlo, échantillonnage (inverse CDF, rejet, importance), MCMC, chaînes de Markov, Metropolis-Hastings, Gibbs, méthodes variationnelles (champ moyen).
- Dérivations : estimateur par importance sampling et sa variance ; balance détaillée ⇒ distribution stationnaire ; taux d'acceptation de MH ; Gibbs comme cas particulier de MH (acceptation = 1) ; mise à jour en champ moyen $\log q_j \propto \mathbb E_{-j}[\log p]$.
- Exercices : un Gibbs sampler pour un petit modèle (p. ex. un GMM) ; comparer MCMC et variationnel (biais vs variance, coût).

### Bloc H — Bayésien, sélection de modèle, modèles gaussiens
Méthodes bayésiennes, sélection de modèle (vraisemblance marginale, BIC), causalité (aperçu), réseaux gaussiens, analyse factorielle, PCA probabiliste, CCA, filtre de Kalman, VAE.
- Dérivations : conditionnement et marginalisation d'une gaussienne jointe (complément de Schur) ; modèle génératif de l'analyse factorielle et sa covariance marginale $WW^\top + \Psi$ ; PPCA comme limite ; filtre de Kalman vu comme forward dans un HMM gaussien.
- Lien avec IFT6135 : le VAE (chap. 11) et l'inférence variationnelle sont communs aux deux cours, donc à étudier ensemble.

---

## Calendrier

### Semaine 1 — jeu. 12 → dim. 15 nov.
- [ ] Rendre le dépôt privé
- [ ] Combler les trous du vault : donner à Claude les PDF des cours 10 (K-means/EM/GMM), 15–16 (HMM, EM pour HMM, théorie de l'information) et 17 (max entropie)
- [ ] Bloc A : séance de questions + dérivations
- [ ] Bloc A : refaire le Devoir 1 sans la solution
- [ ] Dim. : premier quiz cumulatif

### Semaine 2 — lun. 16 → dim. 22 nov.
Cours : famille exponentielle et estimation (lun.) ; MC et échantillonnage (mer.)
- [ ] Intégrer les cours de la semaine dans le vault
- [ ] Bloc B : questions + dérivations (IRLS, MLE gaussien matriciel)
- [ ] Bloc C : questions + dérivations (EM, GMM)
- [ ] Refaire le Devoir 2 sans la solution
- [ ] Avancer le Devoir 4
- [ ] Dim. : quiz cumulatif A–C

### Semaine 3 — lun. 23 → dim. 29 nov.
Cours : MCMC, Metropolis-Hastings (lun.) ; Gibbs, variationnel (mer.) · **Devoir 4 le mer. 25**
- [ ] Intégrer les cours de la semaine dans le vault
- [ ] Bloc D : questions + exercices de d-séparation
- [ ] Bloc E : questions + sum-product et forward-backward à la main
- [ ] Refaire le Devoir 3 sans la solution
- [ ] Dim. : quiz cumulatif A–E

### Semaine 4 — lun. 30 nov. → dim. 6 déc.
Cours : bayésien, sélection de modèle, causalité (lun.) ; réseaux gaussiens, FA, PCA, Kalman, VAE (mer.) · **Rapport d'avancement du projet le mer. 2**
- [ ] Intégrer les cours de la semaine dans le vault
- [ ] Bloc F : questions + dérivations (famille exponentielle, max-ent)
- [ ] Bloc G : questions + dérivations (MH, Gibbs, champ moyen)
- [ ] Refaire le Devoir 4 sans la solution
- [ ] Dim. : quiz cumulatif A–G

### Semaine 5 — lun. 7 → dim. 13 déc. (pas de cours, NeurIPS)
- [ ] Bloc H : questions + dérivations gaussiennes
- [ ] Examen blanc n° 1 : 3 h chronométrées, sans notes (anciens examens si disponibles, sinon examen généré par Claude à partir du vault)
- [ ] Corriger l'examen blanc et passer les notes ratées en `à réviser`
- [ ] Examen blanc n° 2 sur les blocs les plus faibles
- [ ] Avancer le projet et le Devoir 5

### Semaine 6 — lun. 14 → mer. 16 déc.
- [ ] Lun.–mar. : uniquement les notes `à réviser` et les flashcards en retard, sans nouvelle matière
- [ ] Préparer une liste des formules et dérivations à connaître par cœur, à se réciter mardi soir
- [ ] **Mer. 16 : examen**

---

## Suivi des points faibles

```dataview
LIST
FROM ""
WHERE cours AND contains(cours, "IFT6269") AND statut = "à réviser"
SORT file.name ASC
```
