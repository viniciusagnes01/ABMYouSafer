# YouSafer ABM Control Center v5

Painel executivo/operacional para apresentação da estratégia ABM da YouSafer.

## Como editar sem quebrar o layout

A maior parte do conteúdo está em:

```text
assets/js/data.js
```

Edite os arrays:

- `emailPersonas`: cadências por persona
- `socialPosts`: temas de LinkedIn, Instagram e Facebook
- `personaLps`: LPs por persona
- `crmCadence`: régua CRM
- `plays`: biblioteca de plays
- `contentLibrary`: blog, ativos e conteúdos

O score ABM foi preservado no array `scoreRules` e não deve ser alterado sem aprovação.

## Publicação

O projeto é estático. Pode subir direto no GitHub Pages, Netlify ou abrir `index.html` localmente.

