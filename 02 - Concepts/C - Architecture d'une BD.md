# Architecture d’une base de données
#### Rôle du SGBD
Un SGBD (Système de Gestion de Base de Données) est un logiciel spécialisé qui permet de gérer une base de données.

Ses principales fonctions sont :
- Définir la structure des données (via le LDD / DDL)
- Rechercher des données (LMD / DML)
- Mettre à jour des données (LMD / DML)
- Transformer des données (LMD / DML)
- Assurer la sécurité et l’intégrité
- Gérer les accès concurrents et les reprises (transactions)
- Maintenir un dictionnaire de données (métadonnées)
- Optimiser les performances
#### Architecture à 3 niveaux
L’architecture classique d’un SGBD est une architecture à trois niveaux :
- Niveau externe
- Niveau conceptuel
- Niveau interne

Cette architecture vise à séparer les préoccupations des utilisateurs, de la logique des données et de leur stockage physique.
#### Niveau interne
Le niveau interne correspond à la représentation physique des données.

Caractéristiques :
- Représentation de bas niveau de la base de données
- Situé juste au-dessus du stockage physique (blocs, pages mémoire)
- Décrit par un schéma interne

Le schéma interne définit :
- Les types d’enregistrements mémoire
- Les index
- La représentation des champs en mémoire
#### Niveau conceptuel
Le niveau conceptuel fournit une représentation abstraite et globale des données.

Caractéristiques :
- Vue commune de l’ensemble des informations
- Indépendante des applications
- Indépendante de l’implantation physique
- Définie par un schéma conceptuel

Le schéma conceptuel inclut :
- Les schémas externes
- Les règles de sécurité
- Les contraintes d’intégrité
#### Niveau externe
Le niveau externe correspond à la vue des utilisateurs.

Caractéristiques :
- Vue abstraite des données
- Spécifique à un type d’utilisateur ou à une application
- Chaque vue est définie par un schéma externe
- Les schémas externes sont définis à l’aide du LDD

Exemples de vues :
- Vue du service du personnel
- Vue du service commercial
- Vue du professeur dans un institut de formation
## Exemple (vue externe)
Une vue externe peut être obtenue en :
- Sélectionnant des attributs de plusieurs tables
- Effectuant des jointures
- Calculant de nouvelles valeurs (ex : moyenne)

Exemple conceptuel :
note_finale = (note1 + note2) / 2

#### Avantages de l’architecture à 3 niveaux

##### Indépendance physique
On peut modifier l’organisation physique des données sans modifier :
- Les requêtes
- Les programmes d’application
##### Indépendance logique
Une modification du schéma conceptuel n’affecte pas :
- Les programmes non concernés
- Les vues externes non impactées

#### Architecture client-serveur
Dans une architecture client-serveur :
- Le programme d’application est le client
- Le SGBD est le serveur
- Le client fournit l’interface utilisateur et une partie du traitement
- Le serveur fournit l’accès aux données
- Client et serveur peuvent être sur des machines distinctes

Cette architecture permet une meilleure séparation des responsabilités.