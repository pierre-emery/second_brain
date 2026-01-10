## Pandas (méthodes / fonctions)

### Création / assemblage

- `pd.DataFrame(list_of_dicts)` : créer un DataFrame.
- `pd.DataFrame.from_records(rows)` : alternative pour créer un DataFrame depuis une liste de dicts.
- `pd.concat([df1, df2, ...], ignore_index=True)` : concaténer plusieurs DataFrames (ex: plusieurs matchs).
### Sélection / filtrage

- `df["col"]` : accéder à une colonne (Series).
- `df[mask]` : filtrer des lignes avec un masque booléen.
- `series.isin([...])` : True/False si la valeur appartient à une liste.
- `df.copy()` : copier un DataFrame (souvent pour éviter warnings / modifications non voulues).
### Nettoyage / valeurs manquantes

- `series.fillna("Unknown")` : remplacer les valeurs manquantes (NaN).
- `df.dropna(subset=[...])` : enlever les lignes où certaines colonnes sont NaN.
### Groupby / agrégation

- `df.groupby("col", as_index=False, observed=True/False)` : regrouper par catégories.
- `.agg(...)` : calculer des stats par groupe (`size`, `mean`, `sum`, lambda…).

### Transformation / calcul

- `df.apply(func, axis=1)` : appliquer une fonction **ligne par ligne**.
- `series.apply(func)` : appliquer une fonction **élément par élément**.
- `pd.cut(series, bins=..., right=False)` : “binner” une variable continue en intervalles (distance_bin).
- `series.astype(int/str)` : conversion de type.
- `series.abs()` : valeur absolue (utilisé dans la version vectorisée de la distance).
- `pd.to_datetime(series)` : convertir en dates (mentionné pour `startTimeUTC`).
### Tri / inspection

- `df.sort_values("col", ascending=False)` : trier.
- `df.columns` : noms des colonnes.
- `df.head(n)` : afficher les premières lignes.
- `df.shape` : (nb_lignes, nb_colonnes).
- `series.value_counts()` : compter les occurrences.
- `series.nunique()` : nombre de valeurs uniques.

### I/O (sauvegarde/chargement)

- `df.to_csv("file.csv", index=False)` : sauver.
- `pd.read_csv("file.csv")` : relire.