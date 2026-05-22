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


## v6 - Scrap + Clusterização ABM

Esta versão adiciona um módulo interativo de **Scrap, Base e Clusterização**:

- Mockup de notebook com screenshot de LinkedIn / fonte pública.
- Mockup de notebook com screenshot de planilha / base bruta.
- Seta animada de enriquecimento para 5 tabelas por persona.
- Seleção de persona: CEO/Dono, Comercial, CS/Retenção, Financeiro/Admin e TI/Operação.
- Tabela dinâmica com leads da planilha `YouSafer_ABM_Clusterizacao_Leads_Personas.xlsx`.
- Clique em uma linha para simular a regra de negócio do lead.
- Classificação automática em ABM `1:1`, `1:Poucos` ou `1:Muitos`.
- Funil ABM animado e downflow do caminho que o lead seguirá.
- Cadência CRM da persona aplicada ao lead selecionado.

O conteúdo de clusterização está em `assets/js/data.js` dentro de `DATA.scrapCluster`, e a renderização está em `assets/js/app.js` nas funções `renderScrapCluster`, `renderClusterPersona`, `renderActiveLead`, `renderClusterJourney` e `renderClusterCrm`.
