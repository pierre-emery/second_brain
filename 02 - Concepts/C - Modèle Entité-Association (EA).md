# Modèle Entité-Association (EA)

## Objectif de la modélisation conceptuelle
La modélisation conceptuelle vise à représenter la réalité telle qu’elle est perçue par les utilisateurs.

Elle est :
- indépendante des solutions informatiques
- centrée sur la compréhension du domaine
- réalisée avant l’implantation logique et physique

La qualité de la conception conceptuelle est un facteur critique de réussite d’une base de données.
## Abstraction
La modélisation repose sur l’abstraction :
- on passe des objets concrets du monde réel
- à des types ou classes d’objets

Exemple :
- Marielle, Claire, Fabien → type d’entité : Personne
- propriétés : nom, âge, etc.
## Modèles conceptuels
Il existe plusieurs modèles conceptuels :
- Entité–Association (EA / ER)
- UML
- MERISE

Dans ce cours, on utilise le modèle Entité–Association.

## Modèle Entité–Association (EA)
Le modèle EA a été proposé par Chen (1976).

Il permet d’écrire formellement les données utilisées par un système d’information.

Correspondances fondamentales :
- objet ↔ entité
- lien ↔ association
- propriété ↔ attribut

## Entité et type d’entités
Entité :
- représentation d’un objet du monde réel
- ayant une existence propre

Type d’entités (TE) :
- ensemble d’entités perçues comme similaires
- ayant les mêmes caractéristiques

Exemple :
- entités : Marielle, Claire, Fabien
- type d’entités : Personne

## Association et type d’associations
Association :
- lien non orienté entre plusieurs entités
- chaque entité joue un rôle précis

Type d’associations (TA) :
- ensemble d’associations ayant la même sémantique

Exemple :
- Personne achète Maison

## Rôles dans une association
Dans une association, chaque entité joue un rôle.

Exemple :
Personne achète Maison  
Rôles :
- acheteur
- achetée
## Associations particulières

### Association cyclique
Une association est cyclique lorsque plusieurs rôles lient le même type d’entité.

Exemple :
- Personne marié à Personne

Solution :
- nommer les rôles (époux / épouse)

### Association ternaire
Association reliant trois types d’entités.

Exemple :
- Client achète Produit Fournisseur

## Cardinalités des rôles
La cardinalité indique :
- le nombre minimum
- le nombre maximum
d’occurrences liées à une entité dans une association.

Notations usuelles :
- 0:1
- 1:1
- 0:n
- 1:n
- n:m

Exemple :
- une personne peut posséder 0 à n voitures (0:n)
- une voiture a exactement 1 propriétaire (1:1)
## Attributs
Les attributs décrivent les propriétés associées à :
- un type d’entités
- un type d’associations
- un autre attribut
## Types d’attributs

### Attribut simple
- atomique
- non décomposable
Exemple : prénom, jour
### Attribut complexe
- décomposable en sous-attributs
Exemples :
- date → jour, mois, année
- adresse → rue, ville, code postal
## Attributs obligatoires et facultatifs
- obligatoire : cardinalité min ≥ 1
  Exemple : nom
- facultatif : cardinalité min = 0
  Exemple : salaire, téléphone
## Attributs mono ou multivalués
- monovalué : cardinalité max = 1
  Exemple : NAS, date de naissance
- multivalué : cardinalité max > 1
  Exemple : prénoms, téléphones
## Identifiants

### Identifiant d’un type d’entités
Un identifiant est un ensemble minimal d’attributs permettant d’identifier une entité de façon unique.

Exemples :
- numéro d’employé
- nom + prénoms

Sur les schémas, les identifiants sont soulignés.
## Identifiant d’un type d’associations
Plusieurs possibilités :
1. Attribut(s) propre(s) au TA
2. Identifiants des TE liés
3. Identifiants des TE + attribut(s) propre(s)
4. Rôle monovalué induisant un identifiant
## Type d’entités faible
Un TE est dit faible lorsqu’il ne peut être identifié par ses seuls attributs propres.

Exemple :
- Exemplaire dépend de Livre
- identifiant : ISBN + numéro d’exemplaire
## Spécialisation / Généralisation
Relation entre :
- une entité générale
- et des entités spécialisées

Exemple :
- Document
  - Livre
  - Audio
  - Vidéo

Cette structure introduit des contraintes d’intégrité référentielle.
## Démarche de conception (résumé)
À partir d’un texte :
1. Identifier les objets ayant une existence propre
2. Déterminer les types d’entités utiles
3. Identifier les attributs des entités
4. Déterminer les associations entre entités
5. Préciser les cardinalités et identifiants