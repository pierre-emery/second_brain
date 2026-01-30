Une coupe sépare les noeuds en deux ensembles:
- D'un côté, un ensemble de noeuds qui contient la source S
- De l'autre son complément, qui contient le puits T.
Tout le flot partant de S et arrivant à T doit traverser cette coupe.
La capacité de la coupe = somme des capacités des arcs qu'elle traverse **du côté S au côté T**.

Trouver la coupe la plus restrictive entre S et T $\iff$ Trouver le [[C - Flot Maximum]] de S à T.