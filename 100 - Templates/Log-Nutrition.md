---
type: nutrition
date: <% tp.date.now("YYYY-MM-DD") %>
dejeuner: <% tp.system.prompt("Déjeuner") %>
diner: <% tp.system.prompt("Dîner (midi)") %>
collations: <% tp.system.prompt("Collations", "") %>
souper: <% tp.system.prompt("Souper") %>

--- 
## Notes <% tp.system.prompt("Notes libres (optionnel)", "") %>


