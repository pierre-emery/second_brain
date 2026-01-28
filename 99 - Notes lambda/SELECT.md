# SELECT

## Idée
SELECT sert à récupérer des données d’une ou plusieurs tables (lecture).

## Structure minimale
SELECT col1, col2
FROM table
WHERE condition;

## Ordre logique (à comprendre)
1. FROM
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. ORDER BY
7. LIMIT

(L’écriture SQL met SELECT en premier, mais l’évaluation suit grosso modo cet ordre.)


## 1) Projection (choisir les colonnes)
SELECT NOM, FONCTION
FROM PROFESSEUR;

Astuce : * = toutes les colonnes (ok en exploration, à éviter en prod)
## 2) Filtrage (WHERE)
SELECT NOM, FONCTION
FROM PROFESSEUR
WHERE AN_ENT > 1992;
Conditions fréquentes :
- Comparaisons : =, <, >, <=, >=, <>
- Logique : AND, OR, NOT
- Appartenance : IN (...)
- Intervalle : BETWEEN a AND b
- Motif : LIKE 'abc%'
## 3) Tri et limite (ORDER BY / LIMIT)
SELECT NOM, AN_ENT
FROM PROFESSEUR
ORDER BY AN_ENT DESC
LIMIT 5;
## 4) Doublons (DISTINCT)
SELECT DISTINCT FONCTION
FROM PROFESSEUR;
## 5) Agrégations (COUNT, SUM, AVG, MIN, MAX)
SELECT COUNT(*) AS n
FROM PROFESSEUR;

GROUP BY (agréger par groupe)
SELECT FONCTION, COUNT(*) AS n
FROM PROFESSEUR
GROUP BY FONCTION;

HAVING (filtrer après agrégation)
SELECT FONCTION, COUNT(*) AS n
FROM PROFESSEUR
GROUP BY FONCTION
HAVING COUNT(*) >= 2;

## 6) NULL (piège classique)
NULL ≠ 0 et NULL ≠ ''

On teste avec IS NULL / IS NOT NULL

SELECT *
FROM PROFESSEUR
WHERE COURS IS NULL;
## Checklist (avant de valider une requête)
- Est-ce que mon WHERE est correct ?
- Est-ce que j’ai besoin de DISTINCT ?
- Si j’utilise une agrégation : ai-je bien mis GROUP BY ?
- Si je filtre une agrégation : c’est HAVING, pas WHERE.
- Ai-je pensé à NULL ?