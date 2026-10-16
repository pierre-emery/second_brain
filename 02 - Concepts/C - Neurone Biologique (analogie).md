---
type: concept
cours:
  - IFT6135
statut: brouillon
maj: 2026-09-27
---
Un neurone biologique reçoit des signaux via ses **dendrites**, les « traite » dans son corps cellulaire (soma), puis transmet un signal via son **axone**. Le point de connexion entre les branches d'un axone et les dendrites d'un autre neurone est une **synapse**.

Un neurone ne génère un **potentiel d'action** (une impulsion électrique le long de l'axone) que s'il reçoit un pattern de signaux suffisant (au-delà d'un certain seuil) de la part d'autres neurones. La fréquence de ces impulsions (le **taux de décharge**, firing rate) caractérise l'activité du neurone ; selon les dendrites/axones impliqués, un neurone peut exciter ou inhiber le taux de décharge d'un autre.
## Correspondance formelle avec le [[C - Neurones Artificiels|neurone artificiel]]

| Neurone biologique                 | Neurone artificiel                        |
| ---------------------------------- | ----------------------------------------- |
| Taux de décharge                   | Activation $h(\mathbf{x})$                |
| Excitation / inhibition synaptique | Signe et magnitude des poids $\mathbf{w}$ |
| Seuil du potentiel d'action        | Biais $b$ et forme de $g(\cdot)$          |
## Attention : les limites de l'analogie

Cette analogie est utile pédagogiquement mais **ne doit pas être prise trop au sérieux** :

- Il existe de nombreux types de neurones biologiques différents.
- Les dendrites peuvent effectuer des calculs non-linéaires complexes à elles seules.
- Une synapse n'est pas un simple poids scalaire, mais un système dynamique non-linéaire complexe.
- Le codage par taux de décharge (rate code) n'est peut-être pas une description adéquate du calcul neuronal.
## Liens connexes

- [[C - Neurones Artificiels]]
- [[A - Réseau de neurones]]
- [[MOC - IFT6135 Apprentissage de représentations]]
## Flashcards

#flashcards/IFT6135/01-neurone

Correspondances biologique → artificiel : taux de décharge, excitation/inhibition synaptique, seuil ?::Taux de décharge → activation $h(\mathbf{x})$ ; excitation/inhibition → signe et magnitude des poids ; seuil → biais $b$ et forme de $g$.

Donne deux limites de l'analogie neurone biologique / artificiel.::P. ex. : les dendrites font elles-mêmes des calculs non linéaires ; une synapse est un système dynamique, pas un poids scalaire (aussi : nombreux types de neurones, le codage par taux est discutable).