const strategy = {
  metrics: [
    { value: '3', label: 'Tiers de ICP' },
    { value: '24', label: 'Plays ABM mapeados' },
    { value: '20', label: 'MQAs/mês alvo' },
    { value: '8', label: 'SQAs aceitas/mês' },
    { value: '3', label: 'Oportunidades/mês' },
    { value: '4', label: 'LPs principais' },
    { value: '6', label: 'Cadências Apollo' },
    { value: '60+', label: 'Score MQL → SQL' }
  ],
  tiers: [
    { name: 'Tier 1', text: 'Contas estratégicas: maior base, marca regional forte, múltiplas cidades, sinal de SVA e maior potencial de contrato.' },
    { name: 'Tier 2', text: 'Sweet spot: provedores médios com dor explícita de retenção e maturidade para testar SVA de saúde.' },
    { name: 'Tier 3', text: 'Mercado ampliado: contas menores ou frias para nutrição, remarketing e validação de mensagem.' }
  ],
  signals: [
    { name: 'Reconhecimento', text: 'Conta alcançada, conexão aceita, clique, visita em LP e engajamento com tema churn.' },
    { name: 'Intenção', text: 'Download, reply, formulário, checklist, calculadora e visita de alta intenção.' },
    { name: 'Compra', text: 'Diagnóstico solicitado, decisor envolvido, multi-thread ativo, SQA e proposta.' }
  ],
  channels: [
    { name: 'Apollo', text: 'Listas, enriquecimento, cadências educativas por persona e reengajamento.' },
    { name: 'LinkedIn + Ads', text: 'Conexão com decisores, social selling, campanhas por conta e remarketing.' },
    { name: 'LPs + CRM', text: 'Diagnóstico, checklist, calculadora, agendamento, UTMs e campos ABM.' }
  ],
  war: [
    { name: 'Contas quentes', text: 'Revisar MQAs, stakeholders, páginas visitadas, conteúdos consumidos e timing.' },
    { name: 'Objeções', text: 'Mapear custo, integração, adesão, LGPD, operação do SVA e ativação de uso.' },
    { name: 'Próximo passo', text: 'Toda conta quente precisa sair com dono, prazo, contexto e ação comercial.' }
  ],
  flowNodes: [
    { x: 42, y: 72, title: 'Fontes', small: 'Base, Apollo, listas setoriais', w: 170 },
    { x: 310, y: 162, title: 'TAL', small: 'Tier, fit, persona e dor', w: 170 },
    { x: 585, y: 72, title: 'Mensagem', small: 'Retenção + SVA + valor', w: 190 },
    { x: 850, y: 162, title: 'Distribuição', small: 'Ads, social, e-mail, WhatsApp', w: 210 },
    { x: 42, y: 382, title: 'LPs', small: 'Diagnóstico, checklist, calculadora', w: 190 },
    { x: 320, y: 292, title: 'Intent Score', small: 'Cliques, replies, multi-thread', w: 190 },
    { x: 590, y: 382, title: 'MQA → SQA', small: 'SLA 4h-24h', w: 180 },
    { x: 845, y: 292, title: 'Diagnóstico', small: 'Gabriel + decisor + proposta', w: 220 },
    { x: 970, y: 382, title: 'Pipeline', small: 'Oportunidade, valor e previsão', w: 190 }
  ],
  stages: [
    {
      name: 'Reconhecimento',
      objective: 'Fazer o provedor reconhecer que churn não é apenas problema de preço ou velocidade.',
      signals: 'Conta alcançada, conexão, CTR, visita em LP, clique e resposta inicial.',
      kpis: ['Contas alcançadas', 'Conexões', 'CTR', 'Visitas LP']
    },
    {
      name: 'Engajamento Inicial',
      objective: 'Transformar interesse leve em dor explícita de retenção e SVA.',
      signals: 'Download de material, resposta em cadência, visita qualificada e formulário iniciado.',
      kpis: ['Downloads', 'Replies', 'Visitas qualificadas', 'Formulários']
    },
    {
      name: 'Engajamento Significativo',
      objective: 'Levar a conta a comparar soluções e entender viabilidade operacional e financeira.',
      signals: 'Multi-thread, consumo de conteúdo de meio de funil, simulação e retorno do decisor.',
      kpis: ['Multi-thread', 'Visitas de alta intenção', 'Simulações']
    },
    {
      name: 'Toque Convertido',
      objective: 'Gerar mão levantada: diagnóstico, simulação, reunião ou pedido de conversa.',
      signals: 'Pedido de diagnóstico, calendário aberto, WhatsApp ativo ou formulário completo.',
      kpis: ['MQA', 'Diagnósticos', 'Reuniões marcadas']
    },
    {
      name: 'SQA / SQL',
      objective: 'Validar base mínima, dor, autoridade, timing e próximo passo comercial.',
      signals: 'Reunião aceita por vendas, briefing da conta e encaminhamento para closer.',
      kpis: ['Reuniões aceitas', 'SQLs', 'Next step']
    },
    {
      name: 'Oportunidade',
      objective: 'Criar oportunidade real com proposta, plano de implantação e previsão de fechamento.',
      signals: 'Proposta enviada, valor estimado, sponsor e data de decisão.',
      kpis: ['Pipeline', 'Proposta enviada', 'Forecast']
    }
  ],
  plays: [
    { stage: 'Reconhecimento', name: 'R1 — Lista setorial + Apollo | Dor de Churn', status: 'Em construção', priority: 'Alta', content: 'Vinicius / Conteúdo', ops: 'Giullio / Operações', details: 'Contas de provedores com fit, enriquecimento e primeira tese de dor sem pedir reunião cedo demais.' },
    { stage: 'Reconhecimento', name: 'R2 — LinkedIn Ads por contas-alvo', status: 'Em construção', priority: 'Alta', content: 'Vinicius', ops: 'Tráfego / Giullio', details: 'Campanhas por empresa/persona, com criativos de retenção, guerra de preço e valor percebido.' },
    { stage: 'Reconhecimento', name: 'R3 — Social selling Gabriel + decisores', status: 'Não iniciado', priority: 'Alta', content: 'Gabriel / Vinicius', ops: 'SDR / Operações', details: 'Conexão, comentário inteligente, inbox curto e ponte para conteúdos estratégicos.' },
    { stage: 'Reconhecimento', name: 'R4 — Conteúdo “internet virou commodity”', status: 'Em produção', priority: 'Média', content: 'Conteúdo', ops: 'Social Media', details: 'Conteúdo manifesto para abrir consciência de problema no topo do funil.' },
    { stage: 'Reconhecimento', name: 'R5 — Podcast/entrevista com líderes ISP', status: 'Backlog', priority: 'Média', content: 'Vinicius / Gabriel', ops: 'Operações', details: 'Autoridade e prova de mercado para gerar conversa com decisores.' },
    { stage: 'Engajamento Inicial', name: 'E1 — Diagnóstico de Retenção para Provedores', status: 'Em construção', priority: 'Alta', content: 'Vinicius', ops: 'LP / Make / CRM', details: 'Oferta principal de MQA com formulário de base, dor, SVA atual e timing.' },
    { stage: 'Engajamento Inicial', name: 'E2 — Checklist de SVA de alto valor percebido', status: 'Em produção', priority: 'Alta', content: 'Conteúdo', ops: 'Design / LP', details: 'Isca para educar e marcar intenção inicial por persona.' },
    { stage: 'Engajamento Inicial', name: 'E3 — Sequência Apollo educativa por persona', status: 'Não iniciado', priority: 'Alta', content: 'Vinicius', ops: 'Giullio / Apollo', details: 'Cadências por CEO, comercial, financeiro, CS e produto/SVA.' },
    { stage: 'Engajamento Inicial', name: 'E4 — Newsletter “churn vs valor percebido”', status: 'Backlog', priority: 'Média', content: 'Conteúdo', ops: 'CRM', details: 'Nutrição para leads frios e contas em estágio inicial.' },
    { stage: 'Engajamento Inicial', name: 'E5 — Remarketing de visitantes e formulários abertos', status: 'Backlog', priority: 'Média', content: 'Conteúdo', ops: 'Tráfego', details: 'Reativar usuários que visitaram LPs, abriram formulários ou consumiram conteúdo.' },
    { stage: 'Engajamento Significativo', name: 'M1 — Simulação financeira churn vs SVA', status: 'Em produção', priority: 'Alta', content: 'Vinicius', ops: 'Planilha / LP', details: 'Calculadora para conectar churn, margem, custo de aquisição e impacto do benefício.' },
    { stage: 'Engajamento Significativo', name: 'M2 — Webinar/mesa “retenção em provedores”', status: 'Backlog', priority: 'Alta', content: 'Gabriel / Vinicius', ops: 'Eventos / CRM', details: 'Ativo de autoridade para gerar multi-thread e conversa com decisores.' },
    { stage: 'Engajamento Significativo', name: 'M3 — Comparativo SVA utilitário vs entretenimento', status: 'Não iniciado', priority: 'Média', content: 'Conteúdo', ops: 'Design', details: 'Comparativo para mostrar quando cada tipo de SVA ajuda e por que saúde gera utilidade recorrente.' },
    { stage: 'Engajamento Significativo', name: 'M4 — Multi-thread por comitê de compra', status: 'Não iniciado', priority: 'Alta', content: 'Vinicius', ops: 'SDR / Apollo', details: 'Abrir conversas com CEO, comercial, financeiro, CS e produto para reduzir dependência de um único contato.' },
    { stage: 'Engajamento Significativo', name: 'M5 — Caso/prova de uso do benefício', status: 'Pendente de insumo', priority: 'Alta', content: 'YouSafer', ops: 'Conteúdo', details: 'Prova de ativação, utilização, aderência e valor percebido para combater objeções.' },
    { stage: 'Conversão', name: 'C1 — Oferta de Diagnóstico 1:1', status: 'Em construção', priority: 'Alta', content: 'Vinicius / Gabriel', ops: 'SDR / CRM', details: 'CTA principal para transformar intenção em reunião consultiva.' },
    { stage: 'Conversão', name: 'C2 — Play SQA: reunião com decisor + proposta', status: 'Não iniciado', priority: 'Alta', content: 'Gabriel', ops: 'Closer / Operações', details: 'Briefing da conta, validação de dor, autoridade, timing e próximo passo.' },
    { stage: 'Conversão', name: 'C3 — Direct mail/convite para contas Tier 1', status: 'Backlog', priority: 'Média', content: 'Gabriel', ops: 'Operações', details: 'Ação de alto toque para contas estratégicas com maior ticket potencial.' },
    { stage: 'Conversão', name: 'C4 — Kit comercial para vender SVA na base', status: 'Não iniciado', priority: 'Alta', content: 'Conteúdo', ops: 'Design / CS', details: 'Material para o provedor comunicar saúde digital para seus clientes finais.' },
    { stage: 'Conversão', name: 'C5 — Retargeting de MQA sem reunião', status: 'Backlog', priority: 'Média', content: 'Conteúdo', ops: 'Tráfego', details: 'Recuperar contas que demonstraram intenção, mas não converteram em agenda.' },
    { stage: 'Reengajamento', name: 'RE1 — Closed-lost / no-show 6+ meses', status: 'Não iniciado', priority: 'Alta', content: 'Vinicius', ops: 'SDR / CRM', details: 'Sequência para contas que já conhecem a oferta, mas esfriaram.' },
    { stage: 'Reengajamento', name: 'RE2 — Reengajar leads pós-fonte setorial', status: 'Em construção', priority: 'Alta', content: 'Vinicius / Gabriel', ops: 'Apollo / CRM', details: 'Reativar contatos captados em movimentos de mercado e conversas anteriores.' },
    { stage: 'Reengajamento', name: 'RE3 — “O que mudou desde nossa última conversa”', status: 'Backlog', priority: 'Média', content: 'Conteúdo', ops: 'Email / Ads', details: 'Mensagem de reabertura com novo ângulo de simulação e maturidade de mercado.' },
    { stage: 'Reengajamento', name: 'RE4 — Nova oferta: simulação de impacto', status: 'Backlog', priority: 'Alta', content: 'Vinicius', ops: 'SDR / Gabriel', details: 'Reabrir contas com uma oferta menos comercial e mais analítica.' }
  ],
  crmFields: ['tier', 'persona', 'score', 'conteúdo consumido', 'dor principal', 'SVA atual', 'base estimada', 'timing', 'próximo passo', 'dono comercial', 'status MQA/SQA', 'motivo de perda'],
  cadence: [
    { day: 'D0', channel: 'Entrada', msg: 'Lead entra no fluxo, origem e UTM são registradas.' },
    { day: 'D1', channel: 'WhatsApp', msg: 'Boas-vindas personalizada com CTA para simulação ou conversa.' },
    { day: 'D2', channel: 'E-mail', msg: 'Conteúdo longo + prova social + 1-pager.' },
    { day: 'D3', channel: 'WhatsApp', msg: 'Follow-up com pergunta aberta para qualificar dor.' },
    { day: 'D4', channel: 'WhatsApp', msg: 'Mensagem curta com urgência e benefício claro.' },
    { day: 'D6', channel: 'E-mail', msg: 'Oferta detalhada e link para agenda/proposta.' },
    { day: 'D8', channel: 'WhatsApp', msg: 'Reforço de oportunidade e tentativa de recuperação.' },
    { day: 'D10', channel: 'E-mail', msg: 'Última chamada e encaminhamento para consultor.' }
  ],
  themes: [
    { name: 'Tese central', text: 'Velocidade e preço viraram commodity; saúde digital adiciona utilidade recorrente e valor percebido.' },
    { name: 'Dor', text: 'Clientes cancelam mesmo quando a internet funciona porque não percebem motivo forte para ficar.' },
    { name: 'Promessa', text: 'Transformar SVA de saúde em alavanca de retenção, diferenciação e vínculo com a base.' },
    { name: 'Prova lógica', text: 'Comparar custo do churn com custo do benefício e ativar uso no dia a dia.' },
    { name: 'Objeção', text: 'Não vender mais um benefício; vender plano operacional com ativação, régua e mensuração.' }
  ],
  assets: [
    { name: 'LP Diagnóstico de Retenção', text: 'Principal conversão para MQA e início de diagnóstico 1:1.' },
    { name: 'Checklist SVA de alto valor', text: 'Meio de funil para educar e capturar intenção inicial.' },
    { name: 'Calculadora churn x SVA', text: 'Ativo financeiro para CFO e decisores racionais.' },
    { name: 'Kit comercial para vender SVA', text: 'Material para o provedor ativar o benefício na base.' },
    { name: 'Régua de ativação 30 dias', text: 'Plano de CS para gerar uso real e percepção de valor.' },
    { name: '1-pager executivo', text: 'Resumo para decisor com problema, solução, ROI e próximo passo.' },
    { name: 'FAQ técnico/legal', text: 'LGPD, integração, atuação clínica, SLA e governança.' },
    { name: 'Prova/case de uso', text: 'Evidência para combater objeções e acelerar aprovação.' }
  ],
  calendar: [
    { topic: 'Retenção ISP', text: 'Como reduzir churn em provedores sem depender de desconto.' },
    { topic: 'Custo de churn', text: 'Quanto custa perder 1% da base todos os meses?' },
    { topic: 'SVA de saúde', text: 'Como escolher benefícios de alto valor percebido.' },
    { topic: 'Venda sem desconto', text: 'Argumentos para vender internet sem guerra de preço.' },
    { topic: 'Comitê de compra', text: 'Quem precisa comprar a tese dentro do provedor?' },
    { topic: 'Financeiro', text: 'Perguntas que o CFO fará antes de aprovar um SVA.' },
    { topic: 'CS e ativação', text: 'SVA que não gera uso não gera retenção.' },
    { topic: 'Diagnóstico', text: 'Oferta para transformar interesse em conversa qualificada.' }
  ],
  roadmap: [
    { week: 'Semana 1', title: 'Base e infraestrutura', text: 'Confirmar TAL, fontes setoriais, LPs, eventos de tracking, campos CRM e modelo de score.' },
    { week: 'Semana 2', title: 'Cadências e ofertas', text: 'Ativar Apollo, aprovar Diagnóstico, checklist, calculadora e mensagens por persona.' },
    { week: 'Semana 3', title: 'Ativação Tier 2', text: 'Subir 80-150 contas com cluster por persona, dor, região e maturidade.' },
    { week: 'Semana 4', title: 'Handoff MQA/SQA', text: 'Definir SLA 4h-24h por score/status e próximo passo obrigatório no CRM.' },
    { week: 'Semana 5', title: 'War Room', text: 'Revisar contas quentes, objeções, stakeholders faltantes, respostas e oportunidades.' },
    { week: 'Semana 6', title: 'Revisão executiva', text: 'Apresentar contas engajadas, MQAs, SQAs, reuniões, pipeline e aprendizados.' }
  ],
  roles: [
    { name: 'Estratégia / Vinicius', text: 'Tese, mensagens, priorização, conteúdo, playbook, simulação e condução do plano.' },
    { name: 'Operações', text: 'Apollo, Make, CRM, UTMs, campos, dashboards, QA e integridade dos dados.' },
    { name: 'SDR', text: 'Executar cadências, qualificar MQA, registrar motivos e acionar comercial.' },
    { name: 'Gabriel / Closer', text: 'Entrar em Tier 1/SQA, conduzir diagnóstico, proposta e próximo passo.' },
    { name: 'YouSafer / CS Produto', text: 'Validar oferta, provas, implantação, ativação, FAQ e operação do SVA.' }
  ],
  risks: [
    { name: 'Leads curiosos sem fit', text: 'Controlar com formulário de base, dor, SVA atual e timing.' },
    { name: 'Fragmentação de dados', text: 'Padronizar Make, CRM, UTMs e campos obrigatórios.' },
    { name: 'Abordagem cedo demais', text: 'Usar intent score e não passar para comercial sem contexto.' },
    { name: 'Promessa sem operação', text: 'Amarrar kit comercial, régua 30 dias e validação de CS/Produto.' },
    { name: 'Sinais perdidos ou duplicados', text: 'Check técnico semanal e dashboard por conta.' }
  ]
};

const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];

function renderMetricStrip() {
  $('#metricStrip').innerHTML = strategy.metrics.map((m) => `
    <div class="metric"><strong>${m.value}</strong><span>${m.label}</span></div>
  `).join('');
}

function renderTiles(target, items) {
  $(target).innerHTML = items.map((item) => `
    <div class="tile"><strong>${item.name}</strong><small>${item.text}</small></div>
  `).join('');
}

function renderFlow() {
  const group = $('#flowNodes');
  group.innerHTML = strategy.flowNodes.map((n, i) => `
    <g class="flow-node" style="animation-delay:${i * .08}s" transform="translate(${n.x}, ${n.y})">
      <rect width="${n.w}" height="86"></rect>
      <text x="18" y="35">${n.title}</text>
      <text x="18" y="60" class="small">${n.small}</text>
    </g>
  `).join('');
}

function renderStages() {
  $('#stageTimeline').innerHTML = strategy.stages.map((s, i) => `
    <article class="stage-card">
      <div>
        <div class="stage-index">${String(i + 1).padStart(2, '0')}</div>
        <h3>${s.name}</h3>
      </div>
      <div>
        <strong>Objetivo</strong>
        <p>${s.objective}</p>
        <strong>Sinais</strong>
        <p>${s.signals}</p>
      </div>
      <div class="kpi-list">${s.kpis.map((k) => `<span>${k}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderFilters() {
  const stages = ['Todos', ...new Set(strategy.plays.map((p) => p.stage))];
  $('#playFilters').innerHTML = stages.map((stage, i) => `
    <button class="chip-btn ${i === 0 ? 'active' : ''}" data-stage="${stage}">${stage}</button>
  `).join('');
  $$('#playFilters .chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#playFilters .chip-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlays(btn.dataset.stage);
    });
  });
}

function renderPlays(stage = 'Todos') {
  const data = stage === 'Todos' ? strategy.plays : strategy.plays.filter((p) => p.stage === stage);
  $('#playsGrid').innerHTML = data.map((p) => `
    <article class="play-card">
      <div class="play-top">
        <h3>${p.name}</h3>
        <span class="badge ${p.priority === 'Alta' ? 'hot' : ''}">${p.priority}</span>
      </div>
      <p>${p.details}</p>
      <div class="play-meta">
        <span><strong>Estágio:</strong> ${p.stage}</span>
        <span><strong>Status:</strong> ${p.status}</span>
        <span><strong>Conteúdo:</strong> ${p.content}</span>
        <span><strong>Operações:</strong> ${p.ops}</span>
      </div>
      <div class="badges"><span class="badge">${p.status}</span><span class="badge">ABM</span><span class="badge">YouSafer</span></div>
    </article>
  `).join('');
}

function renderAutomation() {
  $('#crmFields').innerHTML = strategy.crmFields.map((f) => `<span>${f}</span>`).join('');
  $('#cadenceGrid').innerHTML = strategy.cadence.map((c) => `
    <div class="cadence-item"><strong>${c.day} · ${c.channel}</strong><span>${c.msg}</span></div>
  `).join('');
}

function renderContent() {
  $('#messageThemes').innerHTML = strategy.themes.map((t) => `<div class="theme"><strong>${t.name}</strong><span>${t.text}</span></div>`).join('');
  $('#assetList').innerHTML = strategy.assets.map((a) => `<div class="asset"><strong>${a.name}</strong><span>${a.text}</span></div>`).join('');
  $('#contentCalendar').innerHTML = strategy.calendar.map((c) => `<div class="calendar-card"><strong>${c.topic}</strong><span>${c.text}</span></div>`).join('');
}

function renderExecution() {
  $('#roadmap').innerHTML = strategy.roadmap.map((r) => `
    <article class="road-card"><span class="week">${r.week}</span><h3>${r.title}</h3><p>${r.text}</p></article>
  `).join('');
  $('#roleList').innerHTML = strategy.roles.map((r) => `<div class="role"><strong>${r.name}</strong><span>${r.text}</span></div>`).join('');
  $('#riskList').innerHTML = strategy.risks.map((r) => `<div class="risk"><strong>${r.name}</strong><span>${r.text}</span></div>`).join('');
}

function bindSystemTabs() {
  $$('.sys-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('.sys-item').forEach((b) => b.classList.remove('active'));
      $$('.sys-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      $('#' + btn.dataset.target).classList.add('active');
    });
  });
}

function bindReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => io.observe(el));
}

function bindNavSpy() {
  const links = $$('.side-nav nav a');
  const sections = links.map((link) => $(link.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => io.observe(section));
}

function init() {
  renderMetricStrip();
  renderTiles('#tierGrid', strategy.tiers);
  renderTiles('#signalMap', strategy.signals);
  renderTiles('#channelGrid', strategy.channels);
  renderTiles('#warGrid', strategy.war);
  renderFlow();
  renderStages();
  renderFilters();
  renderPlays();
  renderAutomation();
  renderContent();
  renderExecution();
  bindSystemTabs();
  bindReveal();
  bindNavSpy();
  $('#themeToggle').addEventListener('click', () => document.body.classList.toggle('presenting'));
}

document.addEventListener('DOMContentLoaded', init);
