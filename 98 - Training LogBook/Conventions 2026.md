[[Programme d'entrainement]]
[[Log]]
# Conventions CSV — 2026

## Règles globales
- Séparateur CSV: `;` (Excel FR)
- Dates: **vraie date** `YYYY-MM-DD` (ex: `2026-01-11`)
  - En Excel on affiche si besoin en `mmdd` via format personnalisé.
- Pas de lignes vides dans les CSV.
- Toujours la même écriture (majuscules/minuscules identiques).
## 1) LogBook 2026.csv (séances)
Colonnes:
- date: `YYYY-MM-DD`
- type (valeurs autorisées):
  - `bouldering`
  - `hangboard`
  - `gym`
  - `mixed`
- gym: nom du lieu (choisir une écriture et garder la même)
  - ex: `Cafe Bloc` (toujours pareil)
- time: **minutes** (nombre)
  - ex: `90` au lieu de `1h30`
- rpe: entier 1–10
- energy: entier 1–10
- sleep: entier 1–10
- pain: `0` ou `1`
- pain_area: vide si pain=0, sinon texte court (ex: `right pulley`, `elbow`)
- notes: texte libre
## 2) climbs.csv (blocs travaillés)
Colonnes:
- date: `YYYY-MM-DD`
- location: ex `Cafe Bloc` (même écriture que dans LogBook)
- board (valeurs autorisées):
  - `gymset`
  - `kilter`
  - `spray`
- grade: format unique: `V0 ... V10` (V majuscule)
- result (valeurs autorisées):
  - `flash`
  - `send`
  - `fail`
- tries: entier >= 1
- style: tags séparés par `|` (liste courte)
  - `slab` | `vert` | `overhang`
  - `crimps` | `pinch` | `slopers`
  - `dyno` | `coordination` | `compression`
- notes_short: texte court
## 3) conditionning.csv (hangboard/gym)
Colonnes:
- date: `YYYY-MM-DD`
- exercise (valeurs autorisées):
  - `pullup`
  - `row`
  - `dip`
  - `hang`
  - `lockoff`
  - `core`
- variation: texte court (ex: `wide`, `rings`, `20mm_halfcrimp`)
- sets: entier
- reps: entier, ou `-` si non applicable
- weight_kg: nombre, ou `bw`
- edge_mm: nombre (ex 20, 15), ou `-`
- hold_sec: nombre, ou `-`
- rpe: entier 1–10
- notes_short: texte court
