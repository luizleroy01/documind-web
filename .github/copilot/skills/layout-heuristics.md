
---

## 2. `material-mapping.md`

Mapeamento direto para Angular Material.

````md
---
name: material-mapping
description: Mapeamento visual do Figma para Angular Material
---

# Regra Principal

Sempre preferir Angular Material.

Fallback para HTML puro apenas quando não houver equivalente.

---

# Botões

## Primário

Se houver:

- destaque visual
- fundo sólido
- CTA principal

Usar:

```html
<button mat-raised-button color="primary">
</button>