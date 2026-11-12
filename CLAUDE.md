# CLAUDE.md — Second Brain (vault Obsidian de Pierre)

Ce dépôt est un vault Obsidian de type Zettelkasten. Il regroupe les concepts d'informatique, de mathématiques, de statistique et de ML appris au bac et à la maîtrise (Mila / UdeM). Il sert aussi au suivi sportif.
Langue du vault : **français**. Les termes techniques anglais vont entre parenthèses quand c'est utile, p. ex. `C - Pseudo-inverse de Moore-Penrose`.

Ton rôle : **transformer les PDF de cours (slides, notes tapées, « scribbles » manuscrits) en notes atomiques bien liées**, mettre à jour les MOC, puis faire le commit. Pierre ne réécrit plus ses notes lui-même : il étudie activement à partir du vault. La qualité et la justesse des notes sont donc critiques.

---

## 1. Types de notes et préfixes

| Préfixe | `type:` | Usage |
|---|---|---|
| `C - ` | `concept` | Concept, définition, technique |
| `T - ` | `theoreme` | Théorème, loi, résultat démontré |
| `M - ` | `modele` | **Modèle** / famille d'hypothèses : ce qu'on apprend (régression logistique, SVM, arbre de décision, forêt aléatoire, CNN, LSTM, HMM…) |
| `A - ` | `algorithme` | **Algorithme** / procédure : comment on apprend, on infère ou on calcule (SGD, rétropropagation, K-Means, passation de messages, beam search, méthode de Newton…) |
| `D - ` | `distribution` | Distribution de probabilité, fonction de perte |
| `G - ` | — | Graphe / figure |
| `E - ` | `exercice` | Exercice résolu |
| `MOC - ` | `moc-cours` / `moc-theme` | Map of Content |

**Distinguer `M -` et `A -`** : un modèle définit une famille de fonctions ou de distributions et ses paramètres ; un algorithme est une procédure qui opère sur un modèle ou sur des données. Si une note décrit les deux (p. ex. « régression linéaire » avec sa résolution par moindres carrés), la note principale est un `M -`, et l'algorithme d'entraînement va dans son propre `A -` s'il est non trivial, transclus ou lié. Les méthodes non supervisées qui sont avant tout des procédures (K-Means, DBSCAN, regroupement hiérarchique, Isomap) restent des `A -`.

Format du nom de fichier : `<Préfixe> - <Nom en français avec majuscule>.md`, p. ex. `C - Divergence de Kullback-Leibler.md`.

## 1 bis. Arborescence du vault

| Dossier | Contenu |
|---|---|
| `00 - Home/` | Dashboard du master, habit tracker, programme d'entraînement, sessions |
| `01 - MOCs (Indexes)/` | Tous les MOC (cours et thématiques) |
| `02 - Concepts/` | Notes `C -` |
| `03 - Algorithmes/` | Notes `A -` |
| `03 - Modèles/` | Notes `M -` |
| `04 - Théorèmes & preuves/` | Notes `T -` |
| `05 - Distributions/` | Notes `D -` |
| `06 - Graphes/` | Notes `G -` |
| `07 - Exemples & Exercices/` | Notes `E -` |
| `100 - Templates/` | Templates Templater (ne pas modifier sans demande) |
| `97 - Calendrier/`, `98 - Logs Santé/` | Notes périodiques et suivi sportif/santé (**ne pas toucher**) |
| `99 - Notes lambda/` | Divers |
| `Excalidraw/`, `Scripts/` | Dessins, scripts QuickAdd (**ne pas toucher**) |

Chaque nouvelle note va dans le dossier de son préfixe. Pour renommer ou déplacer une note, utilise `git mv` puis mets à jour **tous** les wikilinks qui pointent vers elle dans le vault (`grep -rl "\[\[<ancien nom>" --include=*.md .`), y compris les alias `[[ancien nom|texte]]` et les transclusions `![[...]]`.

## 2. Frontmatter (obligatoire, exactement ce format)

```yaml
---
type: concept
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
```

- `type` : sur sa propre ligne, en clé YAML simple. **Jamais** `## type:`, car Dataview ignore alors silencieusement le champ.
- `cours` : **toujours une liste YAML**, même avec un seul élément (`[IFT6269]`, pas `IFT6269`), sinon `contains()` casse dans les MOC.
- `statut` : `incomplet` | `brouillon` | `complet` | `à réviser`. Une note que tu crées est un `brouillon`. Mets `complet` seulement si la note couvre tout le contenu du cours sur ce concept.
- `maj` : date du jour (AAAA-MM-JJ) à chaque modification.
- Un seul bloc frontmatter. Si tu tombes sur un `---` en double (corruption connue), corrige-le.

## 3. Structure d'une note

```markdown
---
(frontmatter)
---
Définition courte (1 à 3 phrases), puis la formule principale en $$...$$.

## Intuition
Pourquoi ça existe, ce que ça mesure, image mentale.

## Formalisme / Dérivation
Étapes clés de la dérivation telles que vues en cours (ne pas sauter les étapes que le prof a faites au tableau).

## Exemple
Petit exemple concret ou cas particulier.

## IFT6269 — <angle spécifique au cours>     ← une section par cours si le concept est partagé

## Flashcards
#flashcards/IFT6269/<thème>

Question courte::Réponse courte

Question qui demande une explication
?
Réponse sur plusieurs lignes

## Liens connexes
- [[MOC - ...]]
- [[C - ...]]
```

Règles :
- **Atomicité** : une note = un concept. Si une note en couvre plusieurs, extrais chacun dans son propre fichier et transclus-le dans le parent avec `![[C - ...]]` plutôt que de le réexpliquer.
- **Liens** : chaque note pointe vers au moins un MOC de cours et un MOC thématique, plus les concepts prérequis et dérivés. Mets des wikilinks dans le texte quand un concept existant est mentionné (`[[C - Vraisemblance|vraisemblance]]`).
- **Vérifie que la cible d'un lien existe** (nom exact, casse et accents compris) avant de l'écrire. Un lien vers une note qui n'existe pas encore est acceptable seulement si tu la crées dans le même lot, ou si tu l'ajoutes à la section « À venir » du MOC.
- Reste fidèle à la notation du prof. Si elle diffère d'un autre cours, signale-le dans la section du cours.

## 4. LaTeX

- Inline `$...$`, bloc `$$...$$`.
- Fais très attention aux backslashes devant un caractère non alphabétique : `\{ \}`, `\,`, `\!`, `\\`, `\|`. Une corruption connue du vault les a supprimés (`D_{KL}(p\,\|\,q)` devenu `p,||,q`, `\{1,5\}` devenu `{1,5}`). **Quand tu édites une note et que tu vois ce motif, répare-le.**
- Indépendance conditionnelle : `\perp\!\!\!\perp`.
- Dans les commandes bash qui écrivent du LaTeX, utilise le délimiteur de heredoc `HEREEOF` (pas `EOF`) ou, mieux, l'outil d'écriture de fichiers.

## 5. MOC

- MOC de cours : `MOC - <CODE> <Titre complet>`, p. ex. `MOC - IFT6269 Modèles Graphiques Probabilistes`. `type: moc-cours`.
- MOC thématiques (`MOC - Probabilité`, `MOC - Inférence Statistique`, `MOC - Algèbre linéaire`…) : `type: moc-theme`.
- Les MOC sont organisés **par thème, jamais par semaine ou par séance**. Ajoute chaque nouvelle note dans la bonne section ; crée une section si aucune ne convient.
- Ne touche pas aux blocs Dataview existants. Les requêtes doivent garder leurs gardes : `cours AND contains(cours, this.cours[0])` et `statut AND statut != "complet"`.
- Ne modifie pas les champs `évaluations:` des MOC de cours : c'est Pierre qui y saisit ses notes.
- Tiens à jour la section « À venir (mentionnés, pas encore développés) » du MOC.

## 6. Procédure : traiter un PDF de cours

1. **Extraire le texte** : `pdftotext -layout fichier.pdf -`, puis découper les pages sur le caractère form-feed (`\f`).
2. **Rasteriser seulement les pages chargées en équations ou en figures**, ou celles où le texte extrait est vide ou illisible (scribbles manuscrits) : `pdftoppm -jpeg -r 130 -f N -l N`. Lis ces images pour récupérer les formules exactes.
3. **Deux sources par séance** : les notes tapées (« lectures ») donnent la structure, les scribbles contiennent ce qui a été improvisé au tableau. Intègre les deux.
4. **Inventaire avant d'écrire** : liste les concepts de la séance, puis pour chacun cherche s'il existe déjà une note :
   - `ls | grep -i "<mot-clé>"` et `grep -ril "<mot-clé>" --include=*.md .`
   - Pense aux variantes (singulier/pluriel, accents, nom anglais).
5. **Note existante → enrichir, ne jamais écraser.** Lis-la en entier. Ajoute le code du cours à `cours:` si besoin, ajoute une section propre au cours, fusionne le contenu nouveau, mets `maj` à jour. Ne supprime pas de contenu sans raison explicite.
6. **Nouvelle note** : utilise le format de la section 3, avec ses flashcards.
7. **Mets à jour** le MOC du cours et le ou les MOC thématiques concernés.
8. **Vérifie** (section 8), puis fais le commit.
9. **Résume à Pierre** : notes créées, notes enrichies, MOC modifiés, points incertains (formule illisible, notation ambiguë) en indiquant la page du PDF.

Les PDF sources ne sont pas commités dans le vault, sauf demande explicite.

## 7. Flashcards (plugin Spaced Repetition)

- Chaque nouvelle note contient une section `## Flashcards`. Quand tu enrichis une note existante, ajoute des cartes pour le nouveau contenu.
- Tag : `#flashcards/<CODE>/<thème>`.
  - Thèmes IFT6269 : `probabilites`, `modeles-parametriques`, `frequentiste-vs-bayesien`, `maximum-vraisemblance`, `theorie-decision`, `proprietes-estimateurs`, `regression-lineaire`, `regression-logistique`, `modeles-graphiques`, `inference`. Ajoute un thème quand le cours avance.
  - IFT6135 : un thème par chapitre (`ch00-revision`, `ch01-...`).
- Entre 3 et 6 cartes par note. Privilégie les questions qui forcent à **reconstruire ou expliquer** : « Pourquoi… ? », « Dérive… », « Que se passe-t-il si… ? », « Différence entre X et Y ? ». Évite les cartes de pure récitation.
- Une ligne : `Question::Réponse`. Plusieurs lignes : question, ligne `?`, réponse.

## 8. Vérifications avant commit

- [ ] Frontmatter valide sur chaque fichier touché (`type` en clé simple, `cours` en liste, un seul bloc `---`).
- [ ] Aucun wikilink cassé dans les fichiers touchés : la cible existe, avec son nom exact.
- [ ] LaTeX : pas de backslashes perdus ; accolades et environnements équilibrés.
- [ ] Chaque nouvelle note figure dans au moins un MOC.
- [ ] Aucune note existante écrasée ni appauvrie (`git diff --stat` : méfie-toi des grosses suppressions).

## 9. Git

- Un commit par séance de cours traitée. Message : `IFT6269 — Cours 7 : estimateurs (biais, variance, consistance)`. Liste les notes créées et enrichies dans le corps du message.
- Pierre synchronise avec le plugin Obsidian Git. Fais `git pull --rebase` avant de commencer et avant de pousser.
- Ne touche pas à `.obsidian/`, `Scripts/`, `97 - Calendrier/`, `98 - Logs Santé/` ni au suivi sportif de `00 - Home/`, sauf demande explicite.

## 10. Mode étude (quand Pierre veut être interrogé)

Pierre étudie activement : il veut **réexpliquer les concepts** et non relire. Quand il demande à être interrogé sur un cours ou un thème :
- Pars des notes du vault (le MOC du cours, puis les notes liées). Le vault est la référence ; si tu ajoutes un élément qui n'y figure pas, signale-le.
- Pose **une question à la fois**, du plus fondamental au plus avancé : définition → intuition → dérivation → lien avec d'autres concepts → application ou piège classique.
- Laisse Pierre répondre avec ses propres mots. Ensuite, dis-lui ce qui est juste, ce qui manque ou ce qui est faux, et donne le bon raisonnement en citant la note (`[[...]]`).
- Ne donne pas la réponse avant qu'il ait essayé. S'il bloque, donne un indice d'abord.
- À la fin, résume les points faibles. Si Pierre le veut, ajoute-les à `statut: à réviser` ou crée des flashcards supplémentaires.

## 11. Contexte des cours (Automne 2026)

- **IFT6135 — Apprentissage de représentations** (Agrawal) : 3 devoirs (théorie + pratique) 75 %, examen final 25 %. Référence : Goodfellow, *Deep Learning*.
- **IFT6269 — Modèles graphiques probabilistes** (Lacoste-Julien) : 5 devoirs 20 %, projet 30 % (rapport + poster, 21 déc.), examen final en présentiel 50 % (16 déc.).
- Les concepts partagés (probabilité, algèbre linéaire, optimisation, MLE…) existent souvent déjà depuis le bac : réutilise-les et ajoute des liens entre cours.
