C'est un Classificateur maximum a posteriori. Il utilise la [[C - Vraisemblance]] et la [[C - Distribution à priori]] de chaque classe pour estimer la [[C - Distribution a postériori]] et classer par probabilité a posteriori maximale. 

### Entraînement (ici dans un cas avec un seul attribut)
- Estimez la [[C - Distribution à priori]] par les tailles des classes dans les données
- Pour chaque classe C, estimez P(x|C):
				-Si x est discret juste comptez les valeurs
				-Si x est continu, discrétisez ou utilisé un modèle de distribution(p. ex [[D - Loi Gaussienne (Normale)]] ou [[D - Loi de Poisson]])
### Classification
Après l'entraînement, pour chauqe x choisir la classe C qui maximise P(x|C)P(C)

En supposanat que l'on ait les probabilités correctes, sans erreur d'estimation (ce qui est irréaliste en pratique), la classification bayésienne produire la meilleure précision théoriquement possible. 

On utilise comme métrique d'erreur [[C - Taux d'Erreur Bayésien]]. 