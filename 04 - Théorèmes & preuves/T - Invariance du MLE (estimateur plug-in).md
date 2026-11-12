---
type: theoreme
cours: [IFT6269]
statut: brouillon
maj: 2026-11-11
---
## Énoncé

**Cas bijectif.** Si $f:\Theta\to\Theta$ est une bijection,
$$\widehat{f(\theta)}_{\text{MLE}}=f\big(\widehat\theta_{\text{MLE}}\big).$$

**Cas général.** Pour $g:\Theta\to\Lambda$ quelconque (pas forcément bijective), on définit la **vraisemblance profilée**
$$\mathcal L(\eta)=\max_{\theta\,:\,\eta=g(\theta)}\ p(\text{données};\theta)$$
et le **MLE généralisé** $\widehat\eta_{\text{MLE}}=\arg\max_{\eta\in g(\Theta)}\mathcal L(\eta)$. Alors
$$\widehat\eta_{\text{MLE}}=g\big(\widehat\theta_{\text{MLE}}\big).$$
On parle d'**estimateur plug-in** : on « branche » $\widehat\theta_{\text{MLE}}$ dans $g$.

## Preuve (esquisse)

Pour tout $\eta$, $\mathcal L(\eta)\le\max_\theta p(\text{données};\theta)=p(\text{données};\widehat\theta_{\text{MLE}})$, et cette borne est atteinte en $\eta=g(\widehat\theta_{\text{MLE}})$ (car $\widehat\theta_{\text{MLE}}$ fait partie de l'ensemble $\{\theta:g(\theta)=\eta\}$). $\blacksquare$

## Exemples

- $\widehat{\sigma^2}_{\text{MLE}}=(\widehat\sigma_{\text{MLE}})^2$
- $\widehat{\sin(\sigma^2)}_{\text{MLE}}=\sin\big(\widehat{\sigma^2}_{\text{MLE}}\big)$

## Flashcards

#flashcards/IFT6269/06-proprietes-estimateurs

Invariance du MLE ?::Pour toute fonction $g$ : $\widehat{g(\theta)}_{\text{MLE}}=g(\widehat\theta_{\text{MLE}})$ (estimateur plug-in).

Comment définit-on le MLE de $\eta=g(\theta)$ quand $g$ n'est pas bijective ?::Via la vraisemblance profilée $\mathcal L(\eta)=\max_{\theta:g(\theta)=\eta}p(\text{données};\theta)$, puis $\arg\max_\eta$.

MLE de $\sigma^2$ connaissant $\widehat\sigma_{\text{MLE}}$ ?::$(\widehat\sigma_{\text{MLE}})^2$, par invariance.

## Liens connexes

- [[MOC - IFT6269 Modèles Graphiques Probabilistes]]
- [[MOC - Inférence Statistique]]
- [[C - Estimateur du Maximum de Vraisemblance (MLE)]]
- [[C - Vraisemblance]]
