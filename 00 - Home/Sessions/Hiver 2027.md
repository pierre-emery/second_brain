---
type: session
debut: 2027-01-06   # à vérifier (calendrier UdeM)
fin: 2027-04-30     # inclure examens / présentations finales
pas_de_cours: []   # congés, semaine de relâche (une date par jour)
# suivi_depuis: AAAA-MM-JJ   # optionnel : début du suivi « cours → mise à jour »
---

# Hiver 2027

```dataview
TABLE sujet AS "Cours", prof AS "Prof", credits AS "Crédits"
FROM ""
WHERE type = "moc-cours" AND (session = this.file.name OR session = this.file.link)
SORT file.name ASC
```
