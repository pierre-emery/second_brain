$\underline R=r(\pi_0,\delta^{\pi_0})$   

Relation avec [[C - Risque Minimax]]
$$\underline R=r(\pi_0,\delta^{\pi_0}) =\sup_\pi\inf_{\delta\in\mathcal D}r(\pi,\delta)\leq\bar R=\inf_{\delta^*\in\mathcal D^*}\sup_{\theta\in\Theta} R(\theta,\delta^*)$$
## Démonstration:
$$\begin{align*}
r(\pi)&=r(\pi,\delta^\pi)=\inf_{\delta\in\mathcal D}r(\pi,\delta)\\
&=\inf_{\delta^*\in\mathcal D^*}r(\pi,\delta^*)(\text{[[T - Théoreme estimateur non-aléatoire]]})\\
&=\inf_{\delta^*\in\mathcal D^*}\int_\Theta R(\theta,\delta^*)\pi(\theta)d\theta\\
&\leq\inf_{\delta^*\in\mathcal D^*}\sup_\theta R(\theta,\delta^*)
\end{align*}$$
## Notes
- Si $\underline R=\bar R$ alors l'estimateur minimax est Bayes par rapport à $\theta_0$.
- Il est possible de trouver un estimateur minimax en cherchant la densité à priori la moins favorable. (souvent une densité impropre) ([[C - Loi à priori impropre]])