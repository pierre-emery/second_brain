## Idée générale
Le modèle relationnel est souvent considéré comme le plus simple et le plus élégant des modèles de données.

- Simplicité : représentation tabulaire
- Élégance : fondations formelles (ensembles et relations)
- À la base de nombreux [[C - SGBD]] commerciaux (Oracle, MySQL, etc.)
## Deux approches du modèle relationnel

### Approche formelle
- Relations (attributs, tuples, identifiants)
- Algèbre relationnelle
- Calculs relationnels
- Normalisation
### Modèle SQL implémenté
- Tables : colonnes et lignes
- Clés
- SQL pour :
  - définir et modifier le schéma
  - spécifier les contraintes d’intégrité
  - insérer, supprimer et mettre à jour les données
  - interroger les données
## Domaine de valeurs
Chaque colonne d’une table est définie sur un domaine de valeurs (type).

- Types scalaires : entier, réel, chaîne de caractères
- Types énumérés
- Intervalles

Exemples :
- jours = {dimanche, lundi, mardi, mercredi, jeudi, vendredi, samedi}
- ages = $[0,125]$

Toutes les valeurs d’une colonne doivent appartenir au même domaine.

## Relation : schéma et valeur (approche formelle)
Une relation est définie par :
- un schéma
- une valeur
Schéma :
R(A1 : D1, ..., An : Dn)
- R : nom de la relation
- Ai : attributs
- Di : domaines (types)
Valeur :
- ensemble de tuples satisfaisant le schéma
Tuple :
{A1 : d1, ..., An : dn}
avec di ∈ Di
Remarques :
- l’ordre des attributs n’a pas d’importance
- la valeur d’une relation est un ensemble (pas un multiensemble en théorie)

## Arité et cardinalité
- Arité : nombre d’attributs (colonnes)
- Cardinalité : nombre de tuples (lignes)

## Propriétés des relations
- Pas de tuples identiques (en théorie)
- Pas d’ordre des colonnes
- Pas d’ordre des lignes

(SQL généralise cela aux multi-ensembles.)

## Schéma de [[C - Base de données (BD)]]
Une base de données est un ensemble de relations.

- Les schémas des relations définissent le schéma de la BD
- Les contraintes d’intégrité sont définies dans les schémas
- Les attributs soulignés représentent les clés primaires

Exemples :
- Etudiant(Matricule, Trimestre, nom, prénom, programme)
- Cours(Sigle, Trimestre, NbCrédits, Prof)
- Inscription(Matricule, Sigle, Trimestre)

## Intégrité des données
À tout instant, la base de données doit représenter la réalité courante.

Objectifs :
- éviter des valeurs absurdes (ex : âge = -35)
- garantir la cohérence applicative
- respecter les contraintes du modèle

Exemples :
- une personne ne peut être mariée à elle-même
- un matricule d’inscription doit correspondre à un étudiant existant

## Clés candidates
Une clé candidate est un ensemble minimal d’attributs permettant d’identifier un tuple de manière unique.

Conditions :
- unicité : pas deux lignes identiques sur ces attributs
- minimalité : enlever un attribut brise l’unicité

Chaque relation possède au moins une clé candidate.
## Clé primaire
Une clé primaire est une clé candidate choisie comme identifiant principal.

- Le choix est en principe arbitraire
- On privilégie les identifiants simples et stables
## Clé étrangère
Une clé étrangère FK dans une relation R référence une clé candidate K d’une relation R’.

Conditions :
1. K est une clé candidate de R’
2. Chaque valeur de FK correspond à une valeur de K

Remarques :
- FK n’est pas nécessairement une clé candidate
- une clé étrangère peut être composée
- les domaines doivent être compatibles
## Règles d’intégrité
- Une clé primaire ne peut jamais être NULL
- Intégrité référentielle :
  - une valeur de clé étrangère doit correspondre à une valeur existante
  - certaines suppressions ou mises à jour sont interdites

Les vérifications sont assurées par le SGBD.
## Systèmes relationnels
Un système relationnel doit permettre :
- Projection (colonnes)
- Sélection (lignes)
- Jointure naturelle

Un système relationnel complet inclut aussi :
- règles d’intégrité
## Jointure naturelle (idée)
La jointure naturelle combine deux relations en :
- fusionnant les attributs communs
- ne gardant que les tuples compatibles

Elle est définie uniquement si les attributs communs ont le même domaine.

## Passage du [[C - Modèle Entité-Association (EA)]] au modèle relationnel

### Entités
- Chaque entité devient une relation
- Les attributs simples deviennent des colonnes
- L’identifiant devient la clé primaire
### Associations
- Association 1:1 : clé étrangère dans une des relations
- Association sans lien 1:1 : création d’une relation pour l’association
- Association de degré > 2 : création d’une relation spécifique

### Attributs multivalués
- Création d’une relation séparée
- Clé primaire = clé étrangère + attribut multivalué

### Entités faibles
- Création d’une relation
- Clé étrangère vers l’entité propriétaire
- Clé primaire composée

### Héritage
- La relation fille contient :
  - ses attributs propres
  - une clé étrangère vers la relation mère
## Remarques importantes
- Un attribut est une donnée élémentaire (pas dérivée)
- Les données calculées ne sont pas des attributs
- Les attributs d’association dépendent de plusieurs entités
## Types énumérés (simulation)
On peut simuler un type énuméré avec une relation :

- Création d’une table des valeurs possibles
- L’attribut est une clé étrangère vers cette table

Cela garantit qu’aucune valeur invalide ne peut être insérée.