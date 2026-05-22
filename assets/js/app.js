const scoreRules = [
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
];

const plays = [
  { stage: 'Reconhecimento', code: 'R1', name: 'Lista setorial/Apollo | Dor de churn', priority: 'Alta', owners: ['Vinicius / Conteúdo', 'Giullio / Operações'], desc: 'Construir lista de contas com hipótese de dor, clusterizar por tier e iniciar tese de retenção.' },
  { stage: 'Reconhecimento', code: 'R2', name: 'LinkedIn Ads por contas-alvo', priority: 'Alta', owners: ['Vinicius', 'Tráfego / Giullio'], desc: 'Distribuir tese para empresas e cargos prioritários com foco em reconhecimento de problema.' },
  { stage: 'Reconhecimento', code: 'R3', name: 'Social selling Gabriel + decisores', priority: 'Alta', owners: ['Gabriel / Vinicius', 'SDR / Operações'], desc: 'Conectar decisores e influenciadores com abordagem consultiva, sem pedir reunião cedo demais.' },
  { stage: 'Reconhecimento', code: 'R4', name: 'Conteúdo “internet virou commodity”', priority: 'Média', owners: ['Conteúdo', 'Social Media'], desc: 'Abrir a conversa sobre preço, velocidade, valor percebido e diferencial utilitário.' },
  { stage: 'Reconhecimento', code: 'R5', name: 'Podcast/entrevista com líderes ISP', priority: 'Média', owners: ['Vinicius / Gabriel', 'Operações'], desc: 'Gerar autoridade e prova de categoria para nutrir contas frias e mornas.' },
  { stage: 'Engajamento Inicial', code: 'E1', name: 'Diagnóstico de Retenção para Provedores', priority: 'Alta', owners: ['Vinicius', 'LP / Make / CRM'], desc: 'Oferta central para converter interesse em sinal qualificado de dor e abertura comercial.' },
  { stage: 'Engajamento Inicial', code: 'E2', name: 'Checklist de SVA de alto valor percebido', priority: 'Alta', owners: ['Conteúdo', 'Design / LP'], desc: 'Ativo de meio de funil para mostrar diferença entre benefício genérico e SVA útil.' },
  { stage: 'Engajamento Inicial', code: 'E3', name: 'Sequência Apollo educativa por persona', priority: 'Alta', owners: ['Vinicius', 'Giullio / Apollo'], desc: 'Cadência CEO, Comercial, Produto/SVA, CS e Financeiro com CTAs progressivos.' },
  { stage: 'Engajamento Inicial', code: 'E4', name: 'Newsletter/email “churn vs valor percebido”', priority: 'Média', owners: ['Conteúdo', 'CRM'], desc: 'Nutrição recorrente para contas que ainda não estão prontas para reunião.' },
  { stage: 'Engajamento Inicial', code: 'E5', name: 'Remarketing de visitantes e formulários abertos', priority: 'Média', owners: ['Conteúdo', 'Tráfego'], desc: 'Reimpactar contas que demonstraram sinal, mas não concluíram o próximo passo.' },
  { stage: 'Engajamento Significativo', code: 'M1', name: 'Simulação financeira churn vs SVA', priority: 'Alta', owners: ['Vinicius', 'Planilha / LP'], desc: 'Converter a tese em impacto financeiro para CEO e financeiro.' },
  { stage: 'Engajamento Significativo', code: 'M2', name: 'Webinar/mesa “retenção em provedores”', priority: 'Alta', owners: ['Gabriel / Vinicius', 'Eventos / CRM'], desc: 'Criar ambiente de autoridade e interação com múltiplas contas e personas.' },
  { stage: 'Engajamento Significativo', code: 'M3', name: 'Comparativo SVA utilitário vs entretenimento', priority: 'Média', owners: ['Conteúdo', 'Design'], desc: 'Ajudar Produto/SVA a comparar utilidade real, percepção de valor e recorrência de uso.' },
  { stage: 'Engajamento Significativo', code: 'M4', name: 'Multi-thread por comitê de compra', priority: 'Alta', owners: ['Vinicius', 'SDR / Apollo'], desc: 'Cercar CEO, Comercial, CS, Produto/SVA e Financeiro com mensagens específicas.' },
  { stage: 'Engajamento Significativo', code: 'M5', name: 'Caso/prova de uso do benefício', priority: 'Alta', owners: ['YouSafer', 'Conteúdo'], desc: 'Transformar uso e resultado em prova para reduzir risco percebido.' },
  { stage: 'Conversão', code: 'C1', name: 'Oferta de Diagnóstico 1:1', priority: 'Alta', owners: ['Vinicius / Gabriel', 'SDR / CRM'], desc: 'Entrada comercial principal para contas com score suficiente e contexto claro.' },
  { stage: 'Conversão', code: 'C2', name: 'Play SQA: reunião com decisor + proposta', priority: 'Alta', owners: ['Gabriel', 'Closer / Operações'], desc: 'Handoff para vendas com briefing, dor, autoridade, timing e próximo passo.' },
  { stage: 'Conversão', code: 'C3', name: 'Convite premium para contas Tier 1', priority: 'Média', owners: ['Gabriel', 'Operações'], desc: 'Ação de alto toque para contas estratégicas sem parecer abordagem em massa.' },
  { stage: 'Conversão', code: 'C4', name: 'Kit comercial para vender SVA na base', priority: 'Alta', owners: ['Conteúdo', 'Design / CS'], desc: 'Material para ajudar o provedor a ativar o benefício junto aos próprios clientes.' },
  { stage: 'Conversão', code: 'C5', name: 'Retargeting de MQA sem reunião', priority: 'Média', owners: ['Conteúdo', 'Tráfego'], desc: 'Reativar contas com alto score que não chegaram ao diagnóstico.' },
  { stage: 'Reengajamento', code: 'RE1', name: 'Closed-lost / no-show 6+ meses', priority: 'Alta', owners: ['Vinicius', 'SDR / CRM'], desc: 'Reabrir conversas com nova tese, novo ativo e pergunta consultiva.' },
  { stage: 'Reengajamento', code: 'RE2', name: 'Reengajar leads pós-bases setoriais/eventos', priority: 'Alta', owners: ['Vinicius / Gabriel', 'Apollo / CRM'], desc: 'Tratar listas e eventos como fontes de sinal, não como centro da estratégia.' },
  { stage: 'Reengajamento', code: 'RE3', name: '“O que mudou no mercado de SVA”', priority: 'Média', owners: ['Conteúdo', 'Email / Ads'], desc: 'Dar um novo motivo para a conta voltar a considerar a conversa.' },
  { stage: 'Reengajamento', code: 'RE4', name: 'Nova oferta: simulação de impacto', priority: 'Alta', owners: ['Vinicius', 'SDR / Gabriel'], desc: 'Retomar contas frias com oferta financeira objetiva e menor fricção.' }
];

const emailThemes = [
  { title: 'O custo de reconquistar clientes todo mês', persona: 'CEO / Financeiro', hook: 'Conectar churn com margem e previsibilidade.', cta: 'Pedir simulação' },
  { title: 'Um argumento além da velocidade', persona: 'Comercial', hook: 'Mostrar como vender internet com saúde digital no pacote.', cta: 'Baixar kit comercial' },
  { title: 'Seu SVA gera uso ou só ocupa contrato?', persona: 'Produto/SVA', hook: 'Comparar SVA utilitário com benefícios de baixo valor percebido.', cta: 'Ver checklist' },
  { title: 'Retenção antes do cancelamento', persona: 'CS / Retenção', hook: 'Apresentar régua de ativação nos primeiros 30 dias.', cta: 'Receber régua' },
  { title: 'Diagnóstico de Retenção para Provedores', persona: 'CEO / Comercial', hook: 'Convite consultivo para conta com fit e sinais.', cta: 'Agendar diagnóstico' },
  { title: 'A pergunta que o financeiro fará sobre SVA', persona: 'Financeiro', hook: 'Antecipar ROI, payback e risco percebido.', cta: 'Ver modelo de cálculo' }
];

const emailPersonas = {
  ceo: {
    label: 'CEO / Dono',
    promise: 'Convencer pela proteção de receita, diferenciação e visão estratégica.',
    summary: 'A abordagem precisa mostrar que o problema não é só marketing: é previsibilidade, valor da base e defesa contra guerra de preço.',
    bullets: ['Falar de churn e margem', 'Evitar linguagem técnica de ferramenta', 'Levar para diagnóstico e simulação executiva'],
    sequence: [
      { day: 'D0', title: 'Conta entra na lista Tier 1/2', trigger: 'Base recorrente + decisor acessível', action: 'Enriquecer empresa, mapear dono/CEO e registrar hipótese de dor.' },
      { day: 'D1', title: 'Email 1 — velocidade virou commodity', trigger: 'ICP validado', action: 'Tese curta: preço e velocidade não sustentam diferenciação. CTA para leitura de 2 min.' },
      { day: 'D3', title: 'LinkedIn Gabriel — autoridade', trigger: 'Email aberto ou conexão possível', action: 'Conexão sem venda: comentário sobre retenção e valor percebido em ISPs.' },
      { day: 'D5', title: 'Email 2 — custo de perder 1% da base', trigger: 'Sem resposta', action: 'Trazer cálculo simples de churn x receita. CTA para calculadora.' },
      { day: 'D8', title: 'Retargeting por conta', trigger: 'Visita em conteúdo ou LP', action: 'Anúncio com tese de retenção e convite para diagnóstico.' },
      { day: 'D10', title: 'Email 3 — diagnóstico executivo', trigger: 'Score >= 50', action: 'Convite consultivo: mapear base, churn, SVA atual e oportunidade de diferenciação.' },
      { day: 'D14', title: 'WhatsApp permitido / SDR', trigger: 'Clique, resposta ou formulário parcial', action: 'Mensagem objetiva com contexto da conta e opção de horário.' }
    ]
  },
  comercial: {
    label: 'Diretor Comercial',
    promise: 'Convencer pelo argumento de venda: defender preço, sair do desconto e criar nova conversa.',
    summary: 'O comercial precisa enxergar a YouSafer como uma ferramenta para vender melhor o plano de internet, não como benefício anexado.',
    bullets: ['Falar de argumento de venda', 'Usar exemplos de abordagem', 'Levar para kit comercial e diagnóstico'],
    sequence: [
      { day: 'D0', title: 'Mapear responsável comercial', trigger: 'Conta com time comercial ou operação ativa', action: 'Registrar canal de venda, objeções prováveis e ofertas atuais.' },
      { day: 'D1', title: 'Email 1 — um argumento além da velocidade', trigger: 'Persona comercial confirmada', action: 'Mostrar que saúde digital cria conversa de valor sem entrar direto em desconto.' },
      { day: 'D3', title: 'Email 2 — script para vender SVA na base', trigger: 'Sem resposta ou abertura', action: 'Enviar ângulo prático: como falar com cliente sem prometer plano de saúde.' },
      { day: 'D5', title: 'LinkedIn — prova de abordagem', trigger: 'Conta engajou', action: 'Post/comentário sobre guerra de preço e diferenciação comercial.' },
      { day: 'D7', title: 'CTA — baixar kit comercial', trigger: 'Clique em email ou post', action: 'Levar para LP do kit com perguntas sobre equipe, objeções e oferta atual.' },
      { day: 'D10', title: 'Email 3 — diagnóstico comercial', trigger: 'Score >= 50', action: 'Convite para revisar oferta atual e construir argumento de retenção.' },
      { day: 'D14', title: 'SLA SDR', trigger: 'Baixou kit ou respondeu', action: 'SDR aborda com contexto de venda, objeção e próximo passo.' }
    ]
  },
  produto: {
    label: 'Produto / SVA',
    promise: 'Convencer pela qualidade do benefício, uso percebido e diferença entre SVA útil e SVA decorativo.',
    summary: 'Produto/SVA precisa comparar valor percebido, ativação e uso. O foco é mostrar que saúde digital tem mais utilidade recorrente.',
    bullets: ['Falar de uso percebido', 'Comparar SVA utilitário x entretenimento', 'Levar para checklist e prova de uso'],
    sequence: [
      { day: 'D0', title: 'Identificar responsável por SVA/produto', trigger: 'Provedor já usa ou avalia SVAs', action: 'Registrar SVAs atuais, ativação e possíveis lacunas de percepção.' },
      { day: 'D1', title: 'Email 1 — seu SVA gera uso?', trigger: 'Persona produto confirmada', action: 'Abrir com pergunta direta sobre benefício que o cliente lembra e usa.' },
      { day: 'D3', title: 'Email 2 — utilitário vs entretenimento', trigger: 'Abertura ou clique leve', action: 'Comparativo simples: saúde digital como SVA de necessidade, não de distração.' },
      { day: 'D5', title: 'Conteúdo — checklist SVA', trigger: 'Interesse em categoria', action: 'Enviar checklist com critérios de valor percebido, ativação e recorrência.' },
      { day: 'D8', title: 'Email 3 — prova de ativação', trigger: 'Baixou checklist', action: 'Mostrar como benefício vira uso nos primeiros 30 dias.' },
      { day: 'D11', title: 'Reunião técnica leve', trigger: 'Score >= 50', action: 'Convite para avaliar aderência do benefício ao pacote atual.' },
      { day: 'D16', title: 'Reengajamento', trigger: 'Sem reunião', action: 'Enviar comparativo visual de SVA e pergunta sobre ativação atual.' }
    ]
  },
  cs: {
    label: 'CS / Retenção',
    promise: 'Convencer pela ativação, uso nos primeiros 30 dias e redução de cancelamento por valor percebido.',
    summary: 'CS precisa entender que o benefício só retém se entrar na rotina do cliente. A cadência puxa régua de ativação e prevenção de churn.',
    bullets: ['Falar de ativação e jornada', 'Mostrar régua de 30 dias', 'Levar para diagnóstico de retenção'],
    sequence: [
      { day: 'D0', title: 'Mapear CS/retention', trigger: 'Conta tem base ativa relevante', action: 'Registrar jornada atual, onboarding, canais de comunicação e gatilhos de cancelamento.' },
      { day: 'D1', title: 'Email 1 — retenção antes do cancelamento', trigger: 'Persona CS confirmada', action: 'Mostrar que o benefício precisa ser ativado antes do cliente pensar em sair.' },
      { day: 'D3', title: 'Email 2 — primeiros 30 dias do benefício', trigger: 'Abertura ou clique', action: 'Enviar visão da régua: boas-vindas, uso, lembrete, prova de valor e resgate.' },
      { day: 'D6', title: 'CTA — baixar régua 30 dias', trigger: 'Interesse em ativação', action: 'LP com campos sobre onboarding, canais e base ativa.' },
      { day: 'D9', title: 'Email 3 — sinais de risco', trigger: 'Baixou régua', action: 'Conectar baixa ativação com churn silencioso e perda de valor percebido.' },
      { day: 'D12', title: 'Diagnóstico de retenção', trigger: 'Score >= 50', action: 'Convite para revisar régua atual e oportunidades de ativação do SVA.' },
      { day: 'D18', title: 'Reengajamento com pergunta', trigger: 'Sem resposta', action: 'Perguntar como o provedor comunica benefícios após o 7º dia.' }
    ]
  },
  financeiro: {
    label: 'Financeiro / Controller',
    promise: 'Convencer por impacto financeiro conservador: churn, margem, payback e risco controlado.',
    summary: 'Financeiro precisa de números e premissas. A comunicação deve ser sóbria, sem hype, com cálculo simples e cenário conservador.',
    bullets: ['Falar de custo de churn', 'Usar cálculo conservador', 'Levar para simulação e business case'],
    sequence: [
      { day: 'D0', title: 'Mapear financeiro/controller', trigger: 'Conta com base e margem estimável', action: 'Registrar ticket médio, base, margem estimada e custo de aquisição quando possível.' },
      { day: 'D1', title: 'Email 1 — quanto custa perder clientes?', trigger: 'Persona financeira confirmada', action: 'Abrir com cálculo de churn mensal e impacto em receita recorrente.' },
      { day: 'D3', title: 'Email 2 — ROI conservador do SVA', trigger: 'Sem resposta ou abertura', action: 'Mostrar que a conta não precisa prometer milagre: basta reduzir perda e aumentar percepção.' },
      { day: 'D6', title: 'CTA — pedir simulação', trigger: 'Clique em cálculo', action: 'LP calculadora com campos de ticket, churn, margem e base ativa.' },
      { day: 'D9', title: 'Email 3 — perguntas do financeiro', trigger: 'Baixou/visitou calculadora', action: 'Responder objeções: custo, LGPD, implantação, risco e payback.' },
      { day: 'D12', title: 'Business case preliminar', trigger: 'Score >= 60', action: 'Enviar estrutura de simulação e chamar para diagnóstico com decisor.' },
      { day: 'D18', title: 'Follow-up executivo', trigger: 'Sem avanço', action: 'Retomar com cenário conservador e convite para validar premissas em 20 minutos.' }
    ]
  }
};

const socialPosts = [
  // LinkedIn
  { channel: 'LinkedIn', title: 'Velocidade virou commodity', objective: 'Abrir consciência executiva em CEO e Comercial.', bullets: ['Post assinado pelo Gabriel', 'Tese sobre preço x valor percebido', 'CTA leve para diagnóstico'] },
  { channel: 'LinkedIn', title: 'Quanto custa perder 1% da base?', objective: 'Levar CFO/CEO para dor financeira do churn.', bullets: ['Carrossel com cálculo simples', 'Link para calculadora', 'Retargeting de visitantes'] },
  { channel: 'LinkedIn', title: 'SVA útil vs SVA de entretenimento', objective: 'Educar Produto/SVA e Marketing sobre utilidade real.', bullets: ['Comparativo visual', 'CTA para checklist', 'Uso na cadência Apollo'] },
  { channel: 'LinkedIn', title: 'Quem precisa comprar a tese do SVA?', objective: 'Explicar comitê de compra e multi-thread.', bullets: ['Mapa CEO/Comercial/CS/Financeiro', 'Conteúdo para vendas', 'CTA para plano ABM'] },
  { channel: 'LinkedIn', title: 'Retenção não começa no cancelamento', objective: 'Conectar CS e ativação à retenção.', bullets: ['Framework de 30 dias', 'CTA para régua de ativação', 'Post técnico para CS'] },
  { channel: 'LinkedIn', title: 'Diagnóstico de Retenção para Provedores', objective: 'Gerar mão levantada em contas com dor.', bullets: ['Post convite consultivo', 'Sem promessa genérica', 'CTA para LP diagnóstico'] },
  { channel: 'LinkedIn', title: 'As 7 perguntas do financeiro sobre SVA', objective: 'Aproximar Controller/CFO com abordagem racional.', bullets: ['Formato checklist', 'Conecta risco e ROI', 'CTA para simulação'] },
  { channel: 'LinkedIn', title: 'Como vender internet sem desconto', objective: 'Dar munição para Diretor Comercial.', bullets: ['Exemplo de script', 'Argumento além da velocidade', 'CTA para kit comercial'] },
  { channel: 'LinkedIn', title: 'O que aprendemos com provedores', objective: 'Reengajar contas frias com aprendizado de mercado.', bullets: ['Post de learnings', 'Tom consultivo', 'CTA para retomar conversa'] },

  // Instagram
  { channel: 'Instagram', title: 'Cliente não cancela só por preço', objective: 'Transformar a tese em conteúdo visual e simples.', bullets: ['Reels curto', 'Carrossel de dor', 'Stories com enquete'] },
  { channel: 'Instagram', title: 'Benefício que entra na rotina', objective: 'Mostrar saúde como utilidade diária para famílias.', bullets: ['Cena cotidiana', 'Prova de uso', 'CTA para saber mais'] },
  { channel: 'Instagram', title: 'SVA que ninguém usa não retém', objective: 'Educar sobre ativação de benefício.', bullets: ['Carrossel 5 erros', 'Gancho de CS', 'CTA para régua 30 dias'] },
  { channel: 'Instagram', title: 'Quanto custa reconquistar cliente?', objective: 'Simplificar a dor financeira para decisores.', bullets: ['Reels com conta rápida', 'Sticker de pergunta', 'Link para calculadora'] },
  { channel: 'Instagram', title: 'Saúde digital no pacote de internet', objective: 'Mostrar o benefício de forma tangível.', bullets: ['Mockup da oferta', 'Antes/depois de argumento', 'CTA para diagnóstico'] },
  { channel: 'Instagram', title: '3 sinais de que seu SVA é fraco', objective: 'Gerar dor em Produto/SVA e Comercial.', bullets: ['Carrossel educativo', 'Checklist no final', 'Remarketing para engajados'] },
  { channel: 'Instagram', title: 'Perguntas que seu cliente faz antes de cancelar', objective: 'Conectar atendimento, valor percebido e retenção.', bullets: ['Formato lista', 'CTA para conversa', 'Stories com votação'] },
  { channel: 'Instagram', title: 'Por dentro da ativação em 30 dias', objective: 'Mostrar processo e não só promessa.', bullets: ['Linha do tempo visual', 'Benefício lembrado', 'CTA para régua'] },
  { channel: 'Instagram', title: 'Case/hipótese de uso do benefício', objective: 'Reduzir risco percebido com narrativa prática.', bullets: ['Mini storytelling', 'Uso recorrente', 'CTA para simulação'] },

  // Facebook
  { channel: 'Facebook', title: 'Convite para diagnóstico de retenção', objective: 'Reimpactar quem abriu formulário ou visitou LP.', bullets: ['Criativo direto', 'WhatsApp permitido', 'SLA SDR em 24h'] },
  { channel: 'Facebook', title: 'Checklist SVA de alto valor', objective: 'Distribuir isca para audiência de provedores.', bullets: ['Público lookalike/remarketing', 'Formulário simples', 'Tag de persona'] },
  { channel: 'Facebook', title: 'Calculadora churn x SVA', objective: 'Capturar intenção financeira.', bullets: ['Criativo com número', 'CTA simulação', 'Campo de base ativa'] },
  { channel: 'Facebook', title: 'Kit comercial para vender sem desconto', objective: 'Apoiar equipe comercial do provedor.', bullets: ['Criativo de dor comercial', 'CTA download', 'Segmentação por cargo'] },
  { channel: 'Facebook', title: 'Régua de ativação em 30 dias', objective: 'Atrair CS/Retenção e operações.', bullets: ['Formato passo a passo', 'CTA baixar régua', 'Remarketing por engajamento'] },
  { channel: 'Facebook', title: 'SVA útil vs entretenimento', objective: 'Educar sobre valor percebido.', bullets: ['Comparativo simples', 'CTA checklist', 'Testar criativo estático'] },
  { channel: 'Facebook', title: 'Benefício que protege a base', objective: 'Reforçar retenção para público amplo.', bullets: ['Copy de baixa fricção', 'Imagem de família/rotina', 'CTA conteúdo'] },
  { channel: 'Facebook', title: 'Live/mesa sobre retenção em ISPs', objective: 'Gerar presença e aquecer contas.', bullets: ['Evento remarketing', 'Lista de inscritos', 'Handoff para CRM'] },
  { channel: 'Facebook', title: 'Reengajamento de contas mornas', objective: 'Trazer de volta quem não converteu.', bullets: ['Criativo com pergunta', 'Oferta de simulação', 'Sequência D21'] }
];

const personaLps = [
  { persona: 'CEO / Dono', title: 'Diagnóstico de Retenção para Provedores', why: 'É quem decide prioridade estratégica e precisa enxergar proteção de receita.', attention: '“Quanto custa perder 1% da sua base todos os meses?”', cta: 'Agendar diagnóstico', fields: 'Base ativa, churn estimado, ticket médio, região e timing.', promise: 'Mostrar onde a base perde valor e como um SVA útil pode defender receita.' },
  { persona: 'Diretor Comercial', title: 'Kit para vender internet sem desconto', why: 'Precisa de argumento para sair da guerra de preço e abrir conversa com valor.', attention: '“Um argumento além da velocidade para defender preço e margem.”', cta: 'Baixar kit comercial', fields: 'Tamanho do time, oferta atual, objeções e canais de venda.', promise: 'Dar scripts e argumentos para vender saúde digital no pacote.' },
  { persona: 'Produto / SVA', title: 'Checklist de SVA de alto valor percebido', why: 'Compara benefício genérico com utilidade real e ajuda a validar a categoria.', attention: '“Seu SVA gera uso ou só ocupa espaço no contrato?”', cta: 'Receber checklist', fields: 'SVAs atuais, adesão, uso percebido e maturidade de ativação.', promise: 'Ajudar o time a avaliar se o benefício gera percepção e recorrência.' },
  { persona: 'CS / Retenção', title: 'Régua de ativação do benefício em 30 dias', why: 'Garante que o benefício vire uso e não apenas promessa comercial.', attention: '“SVA sem ativação não gera retenção.”', cta: 'Baixar régua 30 dias', fields: 'Onboarding, canais de comunicação, base e gatilhos de cancelamento.', promise: 'Mostrar como transformar benefício contratado em uso lembrado pelo cliente.' },
  { persona: 'Financeiro / Controller', title: 'Calculadora churn x SVA de saúde', why: 'Traduz a tese em impacto de margem, payback e proteção de receita.', attention: '“Compare o custo do churn com o custo de proteger a base.”', cta: 'Pedir simulação', fields: 'Ticket médio, churn, margem, custo de aquisição e base ativa.', promise: 'Dar uma leitura conservadora de impacto antes de pedir decisão.' }
];

const crmCadence = [
  { day: 'D0', title: 'Lead/conta entra no CRM', trigger: 'Fonte: Apollo, social, LP, inbound, evento ou base fria', action: 'Criar conta, contato, tag de origem, tier e persona.' },
  { day: 'D1', title: 'Primeiro disparo educativo', trigger: 'Fit mínimo validado', action: 'Email de tese + task de social selling se Tier 1/2.' },
  { day: 'D3', title: 'Segundo disparo por persona', trigger: 'Sem resposta ou clique leve', action: 'Email específico para CEO, Comercial, Produto, CS ou Financeiro.' },
  { day: 'D5', title: 'Ação multicanal', trigger: 'Abertura, clique ou conexão aceita', action: 'LinkedIn do Gabriel + remarketing + atualização de Intent.' },
  { day: 'D7', title: 'Oferta de meio de funil', trigger: 'Conta engajada sem mão levantada', action: 'Checklist, calculadora ou régua 30 dias conforme persona.' },
  { day: 'D10', title: 'SLA MQA', trigger: 'Score >= 50', action: 'Tarefa SDR em até 24h com contexto e próximo CTA.' },
  { day: 'D14', title: 'SLA SQA', trigger: 'Score >= 70 ou diagnóstico aceito', action: 'Briefing para Gabriel/Closer, dor, autoridade, timing e próximos passos.' },
  { day: 'D21', title: 'Reengajamento', trigger: 'No-show, formulário aberto, MQA sem reunião ou closed-lost', action: 'Nova oferta: simulação financeira ou atualização de mercado.' },
  { day: 'D30', title: 'War room e limpeza', trigger: 'Fechamento do ciclo mensal', action: 'Revisar contas quentes, objeções, stakeholders faltantes e pipeline.' }
];

const roadmap = [
  { week: 'S1', title: 'Base e ICP', desc: 'Confirmar contas, tiers, critérios de exclusão, personas e campos obrigatórios.' },
  { week: 'S2', title: 'LPs e tracking', desc: 'Publicar 5 LPs, UTMs, pixels, formulários e integração Make/CRM.' },
  { week: 'S3', title: 'Conteúdo e social', desc: 'Subir calendário LinkedIn, Instagram, Facebook, blog e remarketing por estágio.' },
  { week: 'S4', title: 'Cadência Apollo/CRM', desc: 'Ativar sequência por persona, gatilhos de score e SLA MQA/SQA.' },
  { week: 'S5', title: 'War room comercial', desc: 'Revisar contas quentes, objeções, respostas, stakeholders e próximos passos.' },
  { week: 'S6', title: 'Revisão executiva', desc: 'Apresentar evolução: contas engajadas, MQAs, SQAs, reuniões, pipeline e aprendizados.' }
];

function stageFromScore(score) {
  if (score >= 85) return ['Opportunity / Closer', 'Conta pronta para proposta, piloto ou business case com decisor.'];
  if (score >= 70) return ['SQA / SDR em 24h', 'Conta deve ir para abordagem comercial com briefing completo.'];
  if (score >= 50) return ['MQA', 'Conta gerou intenção suficiente para diagnóstico ou simulação.'];
  if (score >= 30) return ['Engajado', 'Conta deve receber nutrição e próximos sinais de intenção.'];
  return ['Nutrição', 'Conta ainda precisa de conteúdo e sinais antes de venda.'];
}

function renderScoreChecks() {
  const wrap = document.getElementById('scoreChecks');
  if (!wrap) return;
  wrap.innerHTML = scoreRules.map((rule, index) => `
    <label>
      <input type="checkbox" data-index="${index}" />
      <span>${rule.label}</span>
      <em>+${rule.points}</em>
    </label>
  `).join('');
  wrap.addEventListener('change', updateScore);
}

function updateScore() {
  const checked = [...document.querySelectorAll('#scoreChecks input:checked')].map(i => scoreRules[Number(i.dataset.index)]);
  const buckets = { fit: 0, intent: 0, progression: 0 };
  checked.forEach(rule => { buckets[rule.bucket] += rule.points; });
  buckets.fit = Math.min(40, buckets.fit);
  buckets.intent = Math.min(40, buckets.intent);
  buckets.progression = Math.min(20, buckets.progression);
  const total = Math.min(100, buckets.fit + buckets.intent + buckets.progression);
  const [stage, advice] = stageFromScore(total);
  document.getElementById('scoreValue').textContent = total;
  document.querySelector('.score-ring').style.setProperty('--score', total);
  document.getElementById('scoreStage').textContent = stage;
  document.getElementById('scoreAdvice').textContent = advice;
  document.getElementById('fitOut').textContent = `${buckets.fit}/40`;
  document.getElementById('intentOut').textContent = `${buckets.intent}/40`;
  document.getElementById('progOut').textContent = `${buckets.progression}/20`;
  document.getElementById('fitBar').style.width = `${(buckets.fit / 40) * 100}%`;
  document.getElementById('intentBar').style.width = `${(buckets.intent / 40) * 100}%`;
  document.getElementById('progBar').style.width = `${(buckets.progression / 20) * 100}%`;
}

function renderEmailPersonaTabs() {
  const tabs = document.getElementById('emailPersonaTabs');
  if (!tabs) return;
  tabs.innerHTML = Object.entries(emailPersonas).map(([key, persona], index) => `
    <button class="${index === 0 ? 'active' : ''}" data-persona="${key}">${persona.label}</button>
  `).join('');
  tabs.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEmailSequence(btn.dataset.persona);
    });
  });
}

function renderEmailSequence(personaKey = 'ceo') {
  const persona = emailPersonas[personaKey] || emailPersonas.ceo;
  const summary = document.getElementById('personaSummary');
  const wrap = document.getElementById('emailSequence');
  if (summary) {
    summary.innerHTML = `
      <small>Persona selecionada</small>
      <h3>${persona.label}</h3>
      <p><strong>${persona.promise}</strong></p>
      <p>${persona.summary}</p>
      <ul>${persona.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
  }
  if (!wrap) return;
  wrap.innerHTML = persona.sequence.map(item => `
    <article class="email-card">
      <small>${item.day} · ${item.trigger}</small>
      <h3>${item.title}</h3>
      <p>${item.action}</p>
    </article>
  `).join('');
}

function renderEmailThemes() {
  const wrap = document.getElementById('emailThemes');
  if (!wrap) return;
  wrap.innerHTML = emailThemes.map(item => `
    <article class="email-card">
      <small>${item.persona}</small>
      <h3>${item.title}</h3>
      <p>${item.hook}</p>
      <span class="tagline">${item.cta}</span>
    </article>
  `).join('');
}

function renderSocial(channel = 'LinkedIn') {
  const wrap = document.getElementById('socialGrid');
  if (!wrap) return;
  const items = socialPosts.filter(item => item.channel === channel);
  wrap.innerHTML = items.map(item => `
    <article class="social-card">
      <span class="channel">${item.channel}</span>
      <h3>${item.title}</h3>
      <p>${item.objective}</p>
      <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function setupSocialTabs() {
  document.querySelectorAll('.channel-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.channel-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSocial(btn.dataset.channel);
    });
  });
}

function renderPersonaLps() {
  const wrap = document.getElementById('personaLps');
  if (!wrap) return;
  wrap.innerHTML = personaLps.map(item => `
    <article class="lp-card">
      <span class="persona">${item.persona}</span>
      <h3>${item.title}</h3>
      <p>${item.why}</p>
      <dl>
        <dt>Como chamar atenção</dt><dd>${item.attention}</dd>
        <dt>Promessa curta</dt><dd>${item.promise}</dd>
        <dt>CTA</dt><dd>${item.cta}</dd>
        <dt>Campos</dt><dd>${item.fields}</dd>
      </dl>
    </article>
  `).join('');
}

function renderCrmCadence() {
  const wrap = document.getElementById('crmCadence');
  if (!wrap) return;
  wrap.innerHTML = crmCadence.map(item => `
    <article class="crm-step">
      <strong>${item.day}</strong>
      <div>
        <h3>${item.title}</h3>
        <p>${item.action}</p>
      </div>
      <span class="trigger">${item.trigger}</span>
    </article>
  `).join('');
}

function renderPlays(filter = 'all') {
  const grid = document.getElementById('playsGrid');
  if (!grid) return;
  const items = filter === 'all' ? plays : plays.filter(play => play.stage === filter);
  grid.innerHTML = items.map(play => `
    <article class="play-card">
      <div class="play-meta"><span class="play-stage">${play.stage} · ${play.code}</span><span class="play-priority">${play.priority}</span></div>
      <h3>${play.name}</h3>
      <p>${play.desc}</p>
      <div class="owners">${play.owners.map(owner => `<span>${owner}</span>`).join('')}</div>
    </article>
  `).join('');
}

function setupPlayFilters() {
  document.querySelectorAll('.play-filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.play-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlays(btn.dataset.filter);
    });
  });
}

function renderRoadmap() {
  const wrap = document.getElementById('roadmapGrid');
  if (!wrap) return;
  wrap.innerHTML = roadmap.map(item => `
    <article class="roadmap-card">
      <small>${item.week}</small>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </article>
  `).join('');
}

function revealOnScroll() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

function setupNav() {
  const links = document.querySelectorAll('.panel-nav a');
  links.forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('menu-open'));
  });
  const toggle = document.getElementById('menuToggle');
  if (toggle) toggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
  const sections = [...document.querySelectorAll('main section[id]')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

function setupParallax() {
  const hero = document.querySelector('.mission-card img');
  if (!hero) return;
  window.addEventListener('mousemove', event => {
    if (window.innerWidth < 900) return;
    const x = (event.clientX / window.innerWidth - .5) * 12;
    const y = (event.clientY / window.innerHeight - .5) * 12;
    document.documentElement.style.setProperty('--mx', `${x}px`);
    document.documentElement.style.setProperty('--my', `${y}px`);
  });
}

renderScoreChecks();
renderEmailPersonaTabs();
renderEmailSequence('ceo');
renderEmailThemes();
renderSocial();
setupSocialTabs();
renderPersonaLps();
renderCrmCadence();
renderPlays();
setupPlayFilters();
renderRoadmap();
setupNav();
setupParallax();
revealOnScroll();
