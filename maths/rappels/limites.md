---
title: ⚛️ Rappels Limites
---

# Limites : rappels

## Limites sur les additions

| $\lim(f)$           | $\ell$        | $\ell$    | $\ell$    | $+\infty$ | $-\infty$ | **$+\infty$** |
| ------------------- | ------------- | --------- | --------- | --------- | --------- | ------------- |
| $\lim(g)$           | $\ell'$       | $+\infty$ | $-\infty$ | $+\infty$ | $-\infty$ | **$-\infty$** |
| $\lim(f) + \lim(g)$ | $\ell+\ell'$  | $+\infty$ | $-\infty$ | $+\infty$ | $-\infty$ | **F.I.**      |

## Limites sur les multiplications

| $\lim(f)$               | $\ell$         | $\ell > 0$ | $\ell > 0$ | $\ell < 0$ | $\ell < 0$ | **$0$**          | $+\infty$ | $-\infty$ | $+\infty$ |
| ----------------------- | -------------- | ---------- | ---------- | ---------- | ---------- | ---------------- | --------- | --------- | --------- |
| $\lim(g)$               | $\ell'$        | $+\infty$  | $-\infty$  | $+\infty$  | $-\infty$  | **$\pm\infty$**  | $+\infty$ | $-\infty$ | $-\infty$ |
| $\lim(f) \times \lim(g)$| $\ell \cdot \ell'$ | $+\infty$  | $-\infty$  | $-\infty$  | $+\infty$  | **F.I.**         | $+\infty$ | $+\infty$ | $-\infty$ |

## Limites sur les quotients

| $\lim(f)$           | $\ell$          | $\ell \neq 0$ | **$0$** | $\ell$    | $\ell$    | $+\infty$   | $-\infty$   | $+\infty$   | $-\infty$   | **$\pm\infty$** |
| ------------------- | --------------- | ------------- | ------- | --------- | --------- | ----------- | ----------- | ----------- | ----------- | --------------- |
| $\lim(g)$           | $\ell' \neq 0$  | $0$           | **$0$** | $+\infty$ | $-\infty$ | $\ell' > 0$ | $\ell' > 0$ | $\ell' < 0$ | $\ell' < 0$ | **$\pm\infty$** |
| $\lim(f) / \lim(g)$ | $\ell / \ell'$  | $\pm\infty$   | **F.I.**| $0$       | $0$       | $+\infty$   | $-\infty$   | $-\infty$   | $+\infty$   | **F.I.**        |

---

## Limites usuelles en $0$ et en $+\infty$

### Fonctions de référence (avec $n \in \mathbb{N}^*$)

| Fonction $f(x)$ | $\lim_{x \to 0^+} f(x)$ | $\lim_{x \to +\infty} f(x)$ |
| :--- | :---: | :---: |
| $x^n$ | $0$ | $+\infty$ |
| $\frac{1}{x^n}$ | $+\infty$ | $0$ |
| $\sqrt{x}$ | $0$ | $+\infty$ |
| $\frac{1}{\sqrt{x}}$ | $+\infty$ | $0$ |
| $e^x$ | $1$ | $+\infty$ |
| $\ln(x)$ | $-\infty$ | $+\infty$ |

### Croissances comparées (en $0^+$ et $+\infty$, pour $n \in \mathbb{N}^*$)

* **En $+\infty$ :**
  $$\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \qquad \text{et} \qquad \lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0$$

* **En $0^+$ :**
  $$\lim_{x \to 0^+} x^n \ln(x) = 0$$

### Taux d'accroissement en $0$ (levées d'indétermination)

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1 \qquad \lim_{x \to 0} \frac{\ln(1+x)}{x} = 1 \qquad \lim_{x \to 0} \frac{\sin(x)}{x} = 1 \qquad \lim_{x \to 0} \frac{\cos(x) - 1}{x} = 0$$
