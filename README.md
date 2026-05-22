# YouSafer ABM Command Center

Site estático para apresentar a estratégia ABM completa da YouSafer em formato executivo, inspirado na estrutura do V4 Command Center.

## Identidade visual

- Azul principal: `#002d91`
- Azul de apoio: `#0647c9`
- Verde de destaque: `#00e482`

O arquivo `assets/yousafer-mark.svg` usa um monograma vetorial provisório em vez do logo oficial. Substitua pelo arquivo oficial da marca quando desejar.

## Estrutura

```txt
index.html
styles.css
app.js
assets/yousafer-mark.svg
netlify.toml
```

## Como abrir localmente

Abra `index.html` no navegador ou use um servidor local:

```bash
python3 -m http.server 8080
```

Acesse: `http://localhost:8080`

## Como publicar no repositório ABMYouSafer

O repositório alvo identificado é `viniciusagnes01/ABMYouSafer`, com branch padrão `V4-COMPANY`.

```bash
git clone https://github.com/viniciusagnes01/ABMYouSafer.git
cd ABMYouSafer
cp -R /caminho/para/abm-yousafer-site/* .
git add .
git commit -m "feat: cria site executivo ABM YouSafer"
git push origin V4-COMPANY
```

Caso o repositório ainda esteja vazio, crie a branch local antes do primeiro push:

```bash
git checkout -b V4-COMPANY
git add .
git commit -m "feat: cria site executivo ABM YouSafer"
git push -u origin V4-COMPANY
```

## Conteúdo incluído

- Tese estratégica para ISPs
- ICP e segmentação por Tier 1, Tier 2 e Tier 3
- Account Progression Model
- 24 plays ABM com status, prioridade e responsáveis
- Drawflow visual de inteligência → pipeline
- Automação com Make, Apollo, CRM, LPs, UTMs, score e dashboards
- Régua de ativação em 10 dias
- Conteúdo, ativos, mensagens, riscos, responsabilidades e roadmap de 6 semanas
