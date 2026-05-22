/*
  YouSafer ABM Control Center - Data layer
  Para adicionar conteúdo: edite apenas os arrays abaixo. A interface renderiza tudo automaticamente.
  IMPORTANTE: scoreRules foi preservado sem alterar regras nem pontos.
*/

window.ABM_DATA = {
  scoreRules: [
    { label: 'Conta pertence ao ICP primário de provedores regionais/médios', bucket: 'fit', points: 10 },
    { label: 'Base recorrente relevante ou potencial de contrato maior', bucket: 'fit', points: 12 },
    { label: 'Decisor acessível ou sponsor identificado', bucket: 'fit', points: 8 },
    { label: 'Dor de churn, retenção ou diferenciação declarada', bucket: 'fit', points: 10 },
    { label: 'Aceitou conexão ou interagiu no LinkedIn', bucket: 'intent', points: 5 },
    { label: 'Visitou LP do Diagnóstico de Retenção', bucket: 'intent', points: 12 },
    { label: 'Baixou checklist ou consumiu conteúdo-chave', bucket: 'intent', points: 8 },
    { label: 'Usou a calculadora churn x SVA ou pediu simulação', bucket: 'intent', points: 15 },
    { label: 'Respondeu email, LinkedIn ou WhatsApp permitido', bucket: 'intent', points: 15 },
    { label: 'Há pelo menos 2 stakeholders mapeados', bucket: 'progression', points: 7 },
    { label: 'Reunião/diagnóstico solicitado ou aceito', bucket: 'progression', points: 8 },
    { label: 'Próximo passo com data, responsável e contexto comercial', bucket: 'progression', points: 5 }
  ],

  controlModules: [
    { icon: '🎯', title: 'ICP e conta-alvo', objective: 'Definir quem entra no ABM.', signal: 'ISP regional/médio, base recorrente, dor de churn, SVA ativo ou intenção de diferenciação.', action: 'Classificar Tier 1/2/3 e excluir contas sem base mínima, decisor ou maturidade comercial.' },
    { icon: '🧠', title: 'Narrativa de mercado', objective: 'Fazer o problema ficar óbvio.', signal: 'Conta engaja com temas de preço, churn, retenção, valor percebido ou SVA útil.', action: 'Distribuir tese em LinkedIn, blog, email e social ads antes de pedir reunião.' },
    { icon: '📣', title: 'Canais de ativação', objective: 'Cercar o comitê de compra.', signal: 'Decisores e influenciadores interagem em canais diferentes.', action: 'LinkedIn para autoridade, Instagram para explicação visual, Facebook para remarketing e email para cadência consultiva.' },
    { icon: '📄', title: 'LPs por persona', objective: 'Converter cada dor em sinal.', signal: 'Persona chega com problema diferente.', action: 'CEO vai para diagnóstico; Comercial para kit; Produto para checklist; CS para régua; Financeiro para calculadora.' },
    { icon: '⚙️', title: 'CRM e automação', objective: 'Não perder nenhum sinal.', signal: 'Clique, visita, formulário parcial, resposta ou conexão aceita.', action: 'Make/n8n cria tags, score, tarefa, SLA, próximo passo e briefing comercial.' },
    { icon: '📊', title: 'Score ABM', objective: 'Priorizar abordagem comercial.', signal: 'Fit + Intent + Progression passam de 50/70/85 pontos.', action: '50 vira MQA, 70 vira SQA, 85 entra em proposta, piloto ou business case.' },
    { icon: '🤝', title: 'Handoff comercial', objective: 'Chegar em vendas com contexto.', signal: 'Conta tem dor, autoridade, timing ou diagnóstico solicitado.', action: 'SDR/Closer recebe resumo com persona, dor, conteúdo consumido, score, objeção e próximo CTA.' },
    { icon: '🔁', title: 'Reengajamento', objective: 'Recuperar contas mornas.', signal: 'No-show, formulário parcial, clique sem reunião ou closed-lost.', action: 'Nova oferta com simulação, atualização de mercado, conteúdo de prova ou convite para mesa/webinar.' }
  ],

  flowLanes: [
    {
      stage: 'Aquisição',
      summary: 'Montar e limpar lista com fit real.',
      cards: [
        { icon: '🧭', title: 'Fontes de lista', text: 'Apollo, CRM, LinkedIn, inbound, base fria, listas setoriais e indicações.' },
        { icon: '🏢', title: 'Conta-alvo', text: 'Provedor regional/médio com base recorrente, dor de churn e maturidade para SVA.' },
        { icon: '👥', title: 'Comitê', text: 'CEO, Comercial, Produto/SVA, CS/Retenção e Financeiro mapeados por influência.' }
      ]
    },
    {
      stage: 'Engajamento',
      summary: 'Criar consciência e autoridade.',
      cards: [
        { icon: '💼', title: 'LinkedIn + social', text: 'Post do Gabriel, conexão consultiva, prova de autoridade e ads por conta.' },
        { icon: '📝', title: 'Blog + conteúdo', text: 'Churn, SVA, retenção, custo de reconquista e régua de ativação.' },
        { icon: '📩', title: 'Apollo + email', text: 'Sequência por persona com CTA progressivo, sem pedir reunião cedo demais.' }
      ]
    },
    {
      stage: 'Conversão',
      summary: 'Transformar interesse em sinal.',
      cards: [
        { icon: '📄', title: '5 LPs por persona', text: 'Cada persona recebe dor, promessa, CTA e formulário próprios.' },
        { icon: '🧮', title: 'Calculadora', text: 'Churn x SVA transforma dor em impacto financeiro e urgência.' },
        { icon: '🎙️', title: 'Webinar / mesa', text: 'Retenção em provedores para multi-thread e contas estratégicas.' }
      ]
    },
    {
      stage: 'Comercial',
      summary: 'Roteamento com contexto.',
      cards: [
        { icon: '🎯', title: 'LP Diagnóstico', text: 'CTA principal para mão levantada, briefing e geração de MQA.' },
        { icon: '⚙️', title: 'Make + CRM', text: 'UTM, persona, score, campo ABM, tarefa, SLA e briefing automático.' },
        { icon: '📲', title: 'WhatsApp permitido', text: 'Follow-up consultivo e recuperação de formulário para SDR/Closer.' }
      ]
    },
    {
      stage: 'Pipeline',
      summary: 'Converter em oportunidade.',
      hot: true,
      cards: [
        { icon: '🤝', title: 'Diagnóstico 1:1', text: 'Reunião com dor, autoridade, timing, stakeholders e próximo passo.' },
        { icon: '📊', title: 'Business case', text: 'Simulação, kit comercial, piloto e proposta para decisão.' },
        { icon: '🚀', title: 'Oportunidade', text: 'Plano de 30 dias, valor de pipeline, previsão de fechamento e responsável.' }
      ]
    }
  ],

  emailPersonas: {
    ceo: {
      label: 'CEO / Dono',
      pain: 'Churn, crescimento previsível e diferenciação estratégica.',
      promise: 'Mostrar como saúde digital protege receita e cria uma tese de retenção.',
      objection: '“Já tenho SVA e minha prioridade é vender internet.”',
      pass: 'Vai para SDR quando pedir diagnóstico, simulação ou responder sobre churn/base ativa.',
      sequence: [
        { day: 'D0', trigger: 'Conta entra por lista ou pesquisa', subject: 'Enriquecimento e hipótese de dor', angle: 'Validar base, cidades, presença digital, oferta atual e decisor.', cta: 'Sem contato ainda' },
        { day: 'D1', trigger: 'Fit confirmado', subject: 'O custo invisível de reconquistar clientes todos os meses', angle: 'Abrir a conversa mostrando que churn não é só preço; é percepção de valor.', cta: 'Ver diagnóstico de retenção' },
        { day: 'D3', trigger: 'Abriu ou não respondeu', subject: 'Velocidade virou requisito. O que fica como diferencial?', angle: 'Reposicionar saúde digital como ativo estratégico de retenção.', cta: 'Receber checklist executivo' },
        { day: 'D5', trigger: 'Clique leve ou conexão aceita', subject: 'LinkedIn do Gabriel + comentário consultivo', angle: 'Abordagem curta citando retenção, base e diferenciação sem forçar reunião.', cta: 'Responder com prioridade atual' },
        { day: 'D7', trigger: 'Engajou com conteúdo', subject: 'Quanto 1% de churn custa na margem do provedor?', angle: 'Levar para impacto financeiro e simulação conservadora.', cta: 'Pedir simulação' },
        { day: 'D10', trigger: 'Score >= 50', subject: 'Uma conversa para mapear retenção e SVA útil', angle: 'Convite objetivo para diagnóstico, com expectativa clara de 30 minutos.', cta: 'Agendar diagnóstico' },
        { day: 'D14', trigger: 'Sem reunião marcada', subject: 'Fecho aqui ou faz sentido retomar depois?', angle: 'Break-up educado, abrindo espaço para timing futuro.', cta: 'Responder com melhor momento' }
      ]
    },
    comercial: {
      label: 'Diretor Comercial',
      pain: 'Guerra de preço, objeção de velocidade e falta de argumento de valor.',
      promise: 'Dar um argumento vendável para defender preço e aumentar percepção do pacote.',
      objection: '“Meu time já vende com desconto e campanha.”',
      pass: 'Vai para SDR quando pedir kit comercial, script ou demonstrar dor de conversão/margem.',
      sequence: [
        { day: 'D0', trigger: 'Conta mapeada', subject: 'Mapear time comercial e oferta atual', angle: 'Checar planos, combos, canais de venda e se já usam SVA como argumento.', cta: 'Sem contato ainda' },
        { day: 'D1', trigger: 'Comercial identificado', subject: 'Um argumento além da velocidade', angle: 'Mostrar que vender internet por velocidade força desconto; saúde cria conversa de valor.', cta: 'Baixar kit comercial' },
        { day: 'D3', trigger: 'Não respondeu', subject: '3 objeções que o vendedor pode quebrar com um SVA útil', angle: 'Conteúdo prático para SDR/vendedor: valor, família, recorrência e diferenciação.', cta: 'Ver scripts de abordagem' },
        { day: 'D5', trigger: 'Clicou no kit', subject: 'Como transformar benefício em argumento de fechamento', angle: 'Exemplo de script para proposta e follow-up comercial.', cta: 'Pedir modelo de script' },
        { day: 'D7', trigger: 'Interesse comercial', subject: 'O kit precisa caber no playbook do seu time', angle: 'Oferecer conversa sobre adaptação para canal de venda do provedor.', cta: 'Agendar conversa comercial' },
        { day: 'D10', trigger: 'Score >= 50', subject: 'Diagnóstico rápido do discurso comercial', angle: 'Analisar onde o time perde margem por falta de argumento.', cta: 'Agendar diagnóstico' },
        { day: 'D14', trigger: 'Sem avanço', subject: 'Deixo o kit com você para usar quando fizer sentido', angle: 'Reengajamento leve com material útil.', cta: 'Receber kit por email' }
      ]
    },
    produto: {
      label: 'Produto / SVA',
      pain: 'SVA genérico, baixa ativação e pouca percepção de utilidade.',
      promise: 'Comparar SVA de saúde com benefícios de baixo uso para qualificar portfólio.',
      objection: '“Já temos SVAs suficientes.”',
      pass: 'Vai para SDR quando baixar checklist, citar SVA atual ou pedir comparação.',
      sequence: [
        { day: 'D0', trigger: 'Responsável por produto encontrado', subject: 'Inventário de SVA e hipótese de maturidade', angle: 'Mapear benefícios atuais, ativação e como a oferta entra no pacote.', cta: 'Sem contato ainda' },
        { day: 'D1', trigger: 'Fit de SVA', subject: 'Seu SVA gera uso ou só ocupa contrato?', angle: 'Provocar a diferença entre benefício listado e benefício lembrado pelo cliente.', cta: 'Receber checklist SVA útil' },
        { day: 'D3', trigger: 'Sem resposta', subject: 'O que diferencia um SVA utilitário de um SVA de entretenimento', angle: 'Comparativo simples para educar produto e marketing.', cta: 'Ver comparativo' },
        { day: 'D5', trigger: 'Baixou checklist', subject: 'Como ativar o benefício nos primeiros 30 dias', angle: 'Conectar produto com ativação e recorrência de uso.', cta: 'Receber régua de ativação' },
        { day: 'D7', trigger: 'Engajou com ativação', subject: 'Critérios para testar saúde digital como SVA', angle: 'Propor piloto com critérios de sucesso e baixa fricção.', cta: 'Desenhar piloto' },
        { day: 'D10', trigger: 'Score >= 50', subject: 'Conversa sobre portfólio de SVA e percepção de valor', angle: 'Diagnóstico de portfólio e aderência da YouSafer.', cta: 'Agendar diagnóstico de SVA' },
        { day: 'D14', trigger: 'Sem avanço', subject: 'Checklist para revisar quando forem mexer no portfólio', angle: 'Manter top of mind para momento de revisão.', cta: 'Salvar checklist' }
      ]
    },
    cs: {
      label: 'CS / Retenção',
      pain: 'Cancelamento silencioso, baixa ativação e cliente que não percebe valor.',
      promise: 'Mostrar como ativação do benefício pode virar rotina de retenção.',
      objection: '“Retenção é atendimento e suporte, não SVA.”',
      pass: 'Vai para SDR quando pedir régua 30 dias, citar churn ou pedir rotina de ativação.',
      sequence: [
        { day: 'D0', trigger: 'CS/Retenção mapeado', subject: 'Mapear pontos de churn e canais de relacionamento', angle: 'Entender onboarding, inadimplência, suporte, cancelamento e comunicação de base.', cta: 'Sem contato ainda' },
        { day: 'D1', trigger: 'Persona validada', subject: 'Benefício só fideliza quando o cliente lembra que ele existe', angle: 'Mostrar que SVA sem ativação não protege retenção.', cta: 'Baixar régua 30 dias' },
        { day: 'D3', trigger: 'Sem resposta', subject: 'Os 7 primeiros dias definem se o benefício será usado', angle: 'Explicar ativação inicial e pontos de contato com a base.', cta: 'Ver rotina de ativação' },
        { day: 'D5', trigger: 'Clicou na régua', subject: 'Como usar saúde digital em comunicação de retenção', angle: 'Exemplos de mensagens para base, WhatsApp e email.', cta: 'Receber modelos' },
        { day: 'D7', trigger: 'Engajou com modelos', subject: 'Quando acionar o benefício antes do cancelamento', angle: 'Gatilhos de relacionamento: onboarding, NPS, inadimplência e churn risk.', cta: 'Mapear gatilhos' },
        { day: 'D10', trigger: 'Score >= 50', subject: 'Diagnóstico de ativação e retenção', angle: 'Conversar sobre rotina, base e como encaixar YouSafer.', cta: 'Agendar diagnóstico' },
        { day: 'D14', trigger: 'Sem avanço', subject: 'Deixo a régua para sua próxima campanha de base', angle: 'Reengajamento útil para momento de operação.', cta: 'Guardar régua' }
      ]
    },
    financeiro: {
      label: 'Financeiro / Controller',
      pain: 'ROI, margem, payback, custo de churn e segurança da decisão.',
      promise: 'Traduzir SVA de saúde em simulação conservadora de proteção de receita.',
      objection: '“Qual o retorno e qual o risco de custo?”',
      pass: 'Vai para SDR quando pedir simulação, informar base/ticket/churn ou questionar ROI.',
      sequence: [
        { day: 'D0', trigger: 'Financeiro identificado', subject: 'Preparar hipótese de impacto financeiro', angle: 'Levantar base, ticket, churn, margem e CAC estimado do provedor.', cta: 'Sem contato ainda' },
        { day: 'D1', trigger: 'Fit confirmado', subject: 'O custo de churn raramente aparece inteiro no DRE', angle: 'Apresentar lógica conservadora de churn x retenção.', cta: 'Ver calculadora' },
        { day: 'D3', trigger: 'Sem resposta', subject: 'Como comparar custo de SVA com custo de reconquista', angle: 'Conectar CAC, payback, perda de margem e proteção da base.', cta: 'Pedir simulação' },
        { day: 'D5', trigger: 'Clicou na calculadora', subject: 'Quais dados precisamos para estimar impacto sem inflar promessa', angle: 'Pedir dados mínimos para simulação conservadora.', cta: 'Enviar base/ticket/churn' },
        { day: 'D7', trigger: 'Dados parciais', subject: 'Cenário conservador para aprovar piloto', angle: 'Mostrar faixa de impacto, premissas e riscos mitigados.', cta: 'Receber cenário' },
        { day: 'D10', trigger: 'Score >= 50', subject: 'Conversa financeira de 30 minutos', angle: 'Discutir viabilidade e critérios de piloto.', cta: 'Agendar conversa de ROI' },
        { day: 'D14', trigger: 'Sem avanço', subject: 'Deixo a calculadora para quando forem revisar churn/margem', angle: 'Break-up com ativo prático.', cta: 'Salvar calculadora' }
      ]
    }
  },

  socialStrategies: {
    LinkedIn: { role: 'Autoridade, multi-thread e influência no comitê.', rhythm: '3 posts semanais + social selling do Gabriel + ads por conta.', metric: 'Conexões aceitas, comentários de decisores, cliques em LP e stakeholders mapeados.' },
    Instagram: { role: 'Explicação visual, prova, recortes educativos e remarketing.', rhythm: '3 reels/carrosséis semanais + stories de CTA + bastidores.', metric: 'Salvamentos, respostas, cliques, visitantes de LP e remarketing.' },
    Facebook: { role: 'Distribuição, captura, remarketing e reengajamento de contas mornas.', rhythm: 'Campanhas por ativo + públicos de engajamento + formulários.', metric: 'Leads de conteúdo, custo por sinal, retorno de visitantes e MQA.' }
  },

  socialPosts: [
    { channel: 'LinkedIn', title: 'Internet virou commodity. Retenção virou estratégia.', objective: 'Abrir a tese para CEO e decisores.', format: 'Post executivo do Gabriel', cta: 'Comentar “retenção” ou visitar diagnóstico' },
    { channel: 'LinkedIn', title: 'O custo de reconquistar clientes todo mês', objective: 'Conectar churn com margem e previsibilidade.', format: 'Artigo curto + gráfico', cta: 'Pedir simulação' },
    { channel: 'LinkedIn', title: 'SVA útil vs SVA que só ocupa contrato', objective: 'Educar Produto/SVA e Comercial.', format: 'Carrossel comparativo', cta: 'Baixar checklist' },
    { channel: 'LinkedIn', title: 'Quem precisa comprar a tese dentro do provedor?', objective: 'Introduzir multi-thread e comitê.', format: 'Post framework', cta: 'Ver mapa de stakeholders' },
    { channel: 'LinkedIn', title: 'Benefício só fideliza quando vira uso', objective: 'Trazer CS/Retenção para a conversa.', format: 'Post de ativação', cta: 'Receber régua 30 dias' },
    { channel: 'LinkedIn', title: 'Como vender internet sem entrar em guerra de preço', objective: 'Falar com Comercial sobre argumento de valor.', format: 'Post com script', cta: 'Baixar kit comercial' },
    { channel: 'LinkedIn', title: 'Quando uma conta está quente o suficiente para vendas?', objective: 'Explicar score e progressão ABM.', format: 'Conteúdo educativo', cta: 'Ver Score ABM' },
    { channel: 'LinkedIn', title: 'Retenção para provedores: como sair da guerra de preço', objective: 'Chamar para webinar/mesa.', format: 'Evento LinkedIn', cta: 'Inscrever-se' },
    { channel: 'LinkedIn', title: 'Plano de 30 dias para validar SVA de saúde', objective: 'Levar contas quentes para piloto.', format: 'Post plano de ação', cta: 'Agendar diagnóstico' },

    { channel: 'Instagram', title: '3 sinais de que seu provedor virou commodity', objective: 'Educar rápido com linguagem visual.', format: 'Reels 30s', cta: 'Ir para diagnóstico' },
    { channel: 'Instagram', title: 'SVA útil ou SVA esquecido?', objective: 'Comparar benefícios de forma simples.', format: 'Carrossel', cta: 'Baixar checklist' },
    { channel: 'Instagram', title: 'Quanto custa perder um cliente?', objective: 'Levar dor financeira para tela simples.', format: 'Reels cálculo rápido', cta: 'Pedir simulação' },
    { channel: 'Instagram', title: 'Os primeiros 7 dias de ativação do benefício', objective: 'Mostrar processo para CS.', format: 'Carrossel timeline', cta: 'Receber régua' },
    { channel: 'Instagram', title: 'Como explicar saúde digital no pacote de internet', objective: 'Ajudar Comercial a vender.', format: 'Reels com roteiro', cta: 'Baixar kit' },
    { channel: 'Instagram', title: 'O que o cliente percebe além da velocidade?', objective: 'Reforçar valor percebido.', format: 'Stories + enquete', cta: 'Responder enquete' },
    { channel: 'Instagram', title: 'Bastidores de uma estratégia de retenção', objective: 'Humanizar e aproximar marca.', format: 'Stories bastidores', cta: 'Enviar dúvida' },
    { channel: 'Instagram', title: 'Mitos sobre SVA de saúde', objective: 'Quebrar objeções de forma leve.', format: 'Carrossel mito/verdade', cta: 'Ver FAQ' },
    { channel: 'Instagram', title: 'Checklist visual do provedor pronto para SVA', objective: 'Qualificar fit com conteúdo.', format: 'Carrossel checklist', cta: 'Salvar e baixar completo' },

    { channel: 'Facebook', title: 'Diagnóstico de Retenção para Provedores', objective: 'Capturar contas com dor explícita.', format: 'Anúncio de conversão', cta: 'Agendar diagnóstico' },
    { channel: 'Facebook', title: 'Checklist de SVA de alto valor percebido', objective: 'Gerar leads de Produto/SVA e Comercial.', format: 'Lead ad / LP', cta: 'Baixar checklist' },
    { channel: 'Facebook', title: 'Calculadora churn x SVA', objective: 'Atrair Financeiro e CEO.', format: 'Anúncio com número', cta: 'Pedir simulação' },
    { channel: 'Facebook', title: 'Kit comercial para vender sem desconto', objective: 'Gerar interesse comercial.', format: 'Criativo estático + prova', cta: 'Baixar kit' },
    { channel: 'Facebook', title: 'Régua de ativação em 30 dias', objective: 'Atrair CS/Retenção.', format: 'Anúncio carrossel', cta: 'Receber régua' },
    { channel: 'Facebook', title: 'Retargeting: visitou LP e não converteu', objective: 'Recuperar interesse sem pressão.', format: 'Remarketing', cta: 'Continuar diagnóstico' },
    { channel: 'Facebook', title: 'Retargeting: abriu formulário e abandonou', objective: 'Transformar abandono em MQA.', format: 'Anúncio + WhatsApp permitido', cta: 'Retomar preenchimento' },
    { channel: 'Facebook', title: 'Convite para mesa sobre retenção em ISPs', objective: 'Aquecer contas e criar autoridade.', format: 'Evento / inscrições', cta: 'Inscrever-se' },
    { channel: 'Facebook', title: 'Reengajamento de contas closed-lost/no-show', objective: 'Reabrir conversa com nova oferta.', format: 'Campanha de reativação', cta: 'Pedir cenário atualizado' }
  ],

  personaLps: [
    { persona: 'CEO / Dono', asset: 'Diagnóstico de Retenção para Provedores', reason: 'Decide prioridade estratégica e precisa enxergar proteção de receita.', hook: 'Quanto custa perder 1% da sua base todos os meses?', promise: 'Mapear risco de churn, valor percebido e potencial de SVA útil.', cta: 'Agendar diagnóstico', fields: ['base ativa', 'churn estimado', 'ticket médio', 'região', 'timing'] },
    { persona: 'Diretor Comercial', asset: 'Kit para vender internet sem desconto', reason: 'Precisa de argumento para defender preço e margem.', hook: 'Um argumento além da velocidade para o seu time vender melhor.', promise: 'Scripts e argumentos para vender saúde digital dentro do pacote.', cta: 'Baixar kit comercial', fields: ['time comercial', 'oferta atual', 'objeções', 'canais de venda'] },
    { persona: 'Produto / SVA', asset: 'Checklist de SVA de alto valor percebido', reason: 'Compara benefício genérico com utilidade real.', hook: 'Seu SVA gera uso ou só ocupa espaço no contrato?', promise: 'Critérios para avaliar se o benefício gera percepção e recorrência.', cta: 'Receber checklist', fields: ['SVAs atuais', 'adesão', 'uso percebido', 'ativação'] },
    { persona: 'CS / Retenção', asset: 'Régua de ativação do benefício em 30 dias', reason: 'Precisa transformar benefício contratado em uso lembrado.', hook: 'SVA sem ativação não gera retenção.', promise: 'Roteiro de contatos para fazer o cliente lembrar e usar o benefício.', cta: 'Baixar régua 30 dias', fields: ['onboarding', 'canais', 'base', 'gatilhos de cancelamento'] },
    { persona: 'Financeiro / Controller', asset: 'Calculadora churn x SVA de saúde', reason: 'Precisa validar ROI, payback e risco financeiro.', hook: 'Compare o custo do churn com o custo de proteger a base.', promise: 'Simulação conservadora para apoiar decisão e piloto.', cta: 'Pedir simulação', fields: ['ticket médio', 'churn', 'margem', 'CAC', 'base ativa'] }
  ],

  crmCadence: [
    { day: 'D0', title: 'Conta entra no CRM', trigger: 'Apollo, social, LP, inbound, evento, base fria ou indicação', action: 'Criar/atualizar conta, contato, origem, tier, persona e responsável.' },
    { day: 'D1', title: 'Primeiro toque educativo', trigger: 'Fit mínimo validado', action: 'Disparo da sequência da persona + task de social selling para Tier 1/2.' },
    { day: 'D3', title: 'Segundo toque por dor', trigger: 'Sem resposta ou clique leve', action: 'Enviar email específico da persona com ativo de meio de funil.' },
    { day: 'D5', title: 'Multicanal', trigger: 'Abertura, clique, conexão aceita ou visita em LP', action: 'LinkedIn do Gabriel + remarketing + atualização do Intent Score.' },
    { day: 'D7', title: 'Oferta de conversão', trigger: 'Conta engajada sem mão levantada', action: 'Enviar checklist, calculadora, régua ou kit conforme persona.' },
    { day: 'D10', title: 'MQA', trigger: 'Score >= 50 ou formulário parcial relevante', action: 'Criar tarefa SDR em até 24h com contexto, dor e CTA sugerido.' },
    { day: 'D14', title: 'SQA', trigger: 'Score >= 70, resposta direta ou diagnóstico aceito', action: 'Briefing para Gabriel/Closer com autoridade, timing e próximos passos.' },
    { day: 'D21', title: 'Reengajamento', trigger: 'No-show, MQA sem reunião, visitante sem conversão ou closed-lost', action: 'Nova oferta: simulação, benchmark, atualização de mercado ou mesa/webinar.' },
    { day: 'D30', title: 'War room mensal', trigger: 'Fechamento do ciclo', action: 'Revisar contas quentes, objeções, stakeholders faltantes, pipeline e aprendizados.' }
  ],

  crmFields: ['tier da conta', 'persona principal', 'origem/canal/UTM', 'conteúdo consumido', 'dor declarada', 'ABM score atual', 'status MQA/SQA/SQL', 'próximo passo', 'responsável', 'SLA', 'stakeholders mapeados', 'data da última interação'],

  contentLibrary: [
    { type: 'Blog', title: 'Por que provedores perdem clientes mesmo entregando qualidade', use: 'Topo de funil para CEO e CS.', next: 'Diagnóstico de Retenção' },
    { type: 'Blog', title: 'Como vender plano de internet sem entrar em guerra de preço', use: 'Comercial e social selling.', next: 'Kit comercial' },
    { type: 'Planilha', title: 'Custo de churn: impacto real na margem do provedor', use: 'Financeiro e CEO.', next: 'Calculadora / simulação' },
    { type: 'Checklist', title: 'SVA de alto valor percebido', use: 'Produto/SVA e Comercial.', next: 'Checklist LP' },
    { type: 'Template', title: 'Régua de relacionamento para provedores', use: 'CS e Retenção.', next: 'Régua 30 dias' },
    { type: 'Webinar', title: 'Retenção para provedores: como sair da guerra de preço', use: 'Multi-thread e autoridade.', next: 'Diagnóstico 1:1' },
    { type: 'Carrossel', title: 'Score de intenção: quando a conta está pronta para vendas', use: 'Alinhar Marketing e Vendas.', next: 'Score ABM' },
    { type: 'PDF', title: 'Kit comercial: saúde digital no pacote de internet', use: 'Apoiar vendedor e SDR.', next: 'Reunião comercial' },
    { type: 'Case/Prova', title: 'Uso do benefício e prova de valor percebido', use: 'Reduzir risco e objeção.', next: 'Business case' }
  ],

  plays: [
    { stage: 'Reconhecimento', code: 'R1', name: 'Lista setorial/Apollo | Dor de churn', priority: 'Alta', owners: ['Vinicius / Conteúdo', 'Giullio / Operações'], desc: 'Construir lista de contas com hipótese de dor, clusterizar por tier e iniciar tese de retenção.' },
    { stage: 'Reconhecimento', code: 'R2', name: 'LinkedIn Ads por contas-alvo', priority: 'Alta', owners: ['Vinicius', 'Tráfego / Giullio'], desc: 'Distribuir tese para empresas e cargos prioritários com foco em reconhecimento de problema.' },
    { stage: 'Reconhecimento', code: 'R3', name: 'Social selling Gabriel + decisores', priority: 'Alta', owners: ['Gabriel / Vinicius', 'SDR / Operações'], desc: 'Conectar decisores e influenciadores com abordagem consultiva, sem pedir reunião cedo demais.' },
    { stage: 'Reconhecimento', code: 'R4', name: 'Conteúdo “internet virou commodity”', priority: 'Média', owners: ['Conteúdo', 'Social Media'], desc: 'Abrir a conversa sobre preço, velocidade, valor percebido e diferencial utilitário.' },
    { stage: 'Reconhecimento', code: 'R5', name: 'Podcast/entrevista com líderes ISP', priority: 'Média', owners: ['Vinicius / Gabriel', 'Operações'], desc: 'Gerar autoridade e prova de categoria para nutrir contas frias e mornas.' },
    { stage: 'Engajamento Inicial', code: 'E1', name: 'Diagnóstico de Retenção para Provedores', priority: 'Alta', owners: ['Vinicius', 'LP / Make / CRM'], desc: 'Oferta central para converter interesse em sinal qualificado de dor e abertura comercial.' },
    { stage: 'Engajamento Inicial', code: 'E2', name: 'Checklist de SVA de alto valor percebido', priority: 'Alta', owners: ['Conteúdo', 'Design / LP'], desc: 'Ativo de meio de funil para mostrar diferença entre benefício genérico e SVA útil.' },
    { stage: 'Engajamento Inicial', code: 'E3', name: 'Sequência Apollo educativa por persona', priority: 'Alta', owners: ['Vinicius', 'Giullio / Apollo'], desc: 'Cadência CEO, Comercial, Produto/SVA, CS e Financeiro com CTAs progressivos.' },
    { stage: 'Engajamento Inicial', code: 'E4', name: 'Newsletter/email “churn vs valor percebido”', priority: 'Média', owners: ['Conteúdo', 'CRM'], desc: 'Nutrição recorrente para contas que ainda não estão prontas para reunião.' },
    { stage: 'Engajamento Inicial', code: 'E5', name: 'Remarketing visitantes/formulários abertos', priority: 'Alta', owners: ['Tráfego', 'CRM'], desc: 'Recuperar intenção sem depender de novo lead.' },
    { stage: 'Engajamento Significativo', code: 'M1', name: 'Simulação financeira churn vs SVA', priority: 'Alta', owners: ['Vinicius', 'LP / Planilha'], desc: 'Traduzir dor em impacto financeiro para CEO e Financeiro.' },
    { stage: 'Engajamento Significativo', code: 'M2', name: 'Webinar/mesa “retenção em provedores”', priority: 'Alta', owners: ['Gabriel / Vinicius', 'Eventos / CRM'], desc: 'Criar autoridade e multi-thread com contas estratégicas.' },
    { stage: 'Engajamento Significativo', code: 'M3', name: 'Comparativo SVA utilitário vs entretenimento', priority: 'Média', owners: ['Conteúdo', 'Design'], desc: 'Educar Produto/SVA e Comercial sobre valor percebido.' },
    { stage: 'Engajamento Significativo', code: 'M4', name: 'Multi-thread por comitê de compra', priority: 'Alta', owners: ['Vinicius', 'SDR / Apollo'], desc: 'Cercar decisor, influenciadores e financeiro com mensagens diferentes.' },
    { stage: 'Engajamento Significativo', code: 'M5', name: 'Caso/prova de uso do benefício', priority: 'Alta', owners: ['YouSafer', 'Conteúdo'], desc: 'Reduzir risco percebido e facilitar decisão.' },
    { stage: 'Conversão', code: 'C1', name: 'Oferta de Diagnóstico 1:1', priority: 'Alta', owners: ['Vinicius', 'SDR / Gabriel'], desc: 'Transformar MQA em conversa real com contexto e próximo passo.' },
    { stage: 'Conversão', code: 'C2', name: 'Play SQA com decisor + proposta', priority: 'Alta', owners: ['Gabriel', 'Closer'], desc: 'Levar conta com dor e timing para proposta, piloto ou business case.' },
    { stage: 'Conversão', code: 'C3', name: 'Kit comercial para vender SVA na base', priority: 'Alta', owners: ['Conteúdo', 'Comercial'], desc: 'Apoiar adoção interna e argumento comercial do provedor.' },
    { stage: 'Conversão', code: 'C4', name: 'Retargeting de MQA sem reunião', priority: 'Média', owners: ['Tráfego', 'CRM'], desc: 'Reativar contas com intenção mas sem agenda marcada.' },
    { stage: 'Reengajamento', code: 'G1', name: 'Closed-lost/no-show 6+ meses', priority: 'Média', owners: ['CRM', 'SDR'], desc: 'Retomar contas com nova tese e oferta de simulação.' },
    { stage: 'Reengajamento', code: 'G2', name: 'Reengajar leads antigos e listas setoriais', priority: 'Alta', owners: ['Vinicius', 'CRM'], desc: 'Transformar bases antigas em novas conversas sem depender de evento.' },
    { stage: 'Reengajamento', code: 'G3', name: 'Conteúdo “o que mudou no mercado ISP”', priority: 'Média', owners: ['Conteúdo', 'Social'], desc: 'Criar motivo legítimo para retomar contas frias.' },
    { stage: 'Reengajamento', code: 'G4', name: 'Nova oferta de simulação de impacto', priority: 'Alta', owners: ['Financeiro / Comercial', 'CRM'], desc: 'Dar argumento concreto para reabrir conversa.' },
    { stage: 'Pipeline', code: 'P1', name: 'Plano de próximos passos em 30 dias', priority: 'Alta', owners: ['Gabriel / Closer', 'Operações'], desc: 'Fechar a reunião com plano, responsáveis, critérios de sucesso e forecast.' }
  ],

  roadmap: [
    { week: 'S1', title: 'Base e ICP', desc: 'Confirmar contas, tiers, critérios de exclusão, personas e campos obrigatórios.' },
    { week: 'S2', title: 'LPs e tracking', desc: 'Publicar 5 LPs, UTMs, pixels, formulários e integração Make/CRM.' },
    { week: 'S3', title: 'Conteúdo e social', desc: 'Subir calendário LinkedIn, Instagram, Facebook, blog e remarketing por estágio.' },
    { week: 'S4', title: 'Cadência Apollo/CRM', desc: 'Ativar sequência por persona, gatilhos de score e SLA MQA/SQA.' },
    { week: 'S5', title: 'War room comercial', desc: 'Revisar contas quentes, objeções, respostas, stakeholders e próximos passos.' },
    { week: 'S6', title: 'Revisão executiva', desc: 'Apresentar evolução: contas engajadas, MQAs, SQAs, reuniões, pipeline e aprendizados.' }
  ],

  decisions: ['Aprovar ICP e lista Tier 1/2', 'Validar oferta principal: Diagnóstico de Retenção', 'Aprovar 5 LPs por persona', 'Aprovar cadências por persona', 'Definir SLA MQA → SQA → Closer', 'Separar provas/cases e números', 'Publicar tracking e campos CRM', 'Iniciar piloto ABM de 30 dias']
};
