---
name: angular-rules
description: Regras obrigatórias para geração de componentes Angular
---

# Angular Version

Assumir Angular 20+

---

# Estrutura Obrigatória

Todo componente gerado deve ser standalone.

Sempre gerar:

- component.ts
- component.html
- component.scss

Nunca gerar componentes inline.

---

# Decorator

Sempre utilizar:

```ts
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})