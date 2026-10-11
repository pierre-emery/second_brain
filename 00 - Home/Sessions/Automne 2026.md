---
type: session
debut: 2026-09-02   # à vérifier (calendrier UdeM)
fin: 2026-12-21     # inclure examens / présentations finales
pas_de_cours: [2026-10-12]   # congés, semaine de relâche (une date par jour)
suivi_depuis: 2026-09-28
---

# Automne 2026

```dataview
TABLE sujet AS "Cours", prof AS "Prof", credits AS "Crédits"
FROM ""
WHERE type = "moc-cours" AND (session = this.file.name OR session = this.file.link)
SORT file.name ASC
```
