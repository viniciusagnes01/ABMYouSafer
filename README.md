# YouSafer ABM Command Center v2

Site executivo para apresentar a estrategia ABM completa da YouSafer ao Gabriel.

## O que mudou nesta versao

- Remove a logica de Health Score do cliente antigo.
- Usa ABM Score: Fit + Intent + Progression.
- Traz mapa mental de redes sociais, blog, LPs, automacao, reunioes e CRM.
- Traz drawflow 3D animado com blocos reais da estrategia.
- Organiza todos os plays por estagio.
- Inclui roteiro de apresentacao.
- Usa a identidade visual YouSafer com azul #002d91, azul apoio #0647c9 e verde #00e482.

## Como rodar localmente

Abra `index.html` no navegador ou rode:

```bash
python3 -m http.server 8080
```

Depois acesse: `http://localhost:8080`

## Deploy sugerido

Repositorio: `viniciusagnes01/ABMYouSafer`
Branch: `V4-COMPANY`

```bash
git clone -b V4-COMPANY https://github.com/viniciusagnes01/ABMYouSafer.git
cd ABMYouSafer
unzip /caminho/yousafer-abm-command-center-v2.zip -d .
git add .
git commit -m "feat: remodel YouSafer ABM Command Center"
git push origin V4-COMPANY
```

> Observacao: fontes OTF enviadas nao foram empacotadas no projeto. O site usa fontes de sistema por seguranca e portabilidade.
