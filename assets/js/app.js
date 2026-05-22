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
  { title: 'Diagnóstico de Retenção para Provedores', persona: 'CEO / Comercial', hook: 'Convite consultivo para conta com fit e sinais.', cta: 'Agendar diagnóstico' }
];

const emailSequence = [
  { day: 'D0', title: 'Entrada no fluxo + enriquecimento', trigger: 'Conta entra por lista, inbound, social ou evento', action: 'Tag de origem, tier, persona e tarefa de revisão.' },
  { day: 'D1', title: 'Email 1 - tese de churn', trigger: 'ICP confirmado', action: 'Educar sem pedir reunião; CTA para conteúdo curto.' },
  { day: 'D3', title: 'Email 2 - argumento além da velocidade', trigger: 'Sem resposta ou clique leve', action: 'Direcionar Comercial/CEO para checklist de SVA.' },
  { day: 'D5', title: 'LinkedIn + social selling', trigger: 'Conta engajou ou abriu email', action: 'Conexão do Gabriel + comentário contextual.' },
  { day: 'D7', title: 'Email 3 - calculadora churn x SVA', trigger: 'Clique em conteúdo de dor', action: 'Convite para estimar impacto financeiro.' },
  { day: 'D10', title: 'WhatsApp permitido / SDR', trigger: 'Score >= 50 ou formulário parcial', action: 'Mensagem consultiva e tentativa de diagnóstico.' },
  { day: 'D14', title: 'Email 4 - case/prova lógica', trigger: 'Conta morna sem reunião', action: 'Prova de uso, régua 30 dias e objeção respondida.' },
  { day: 'D21', title: 'Reengajamento ou handoff', trigger: 'Sem avanço ou score >= 70', action: 'No-show/closed-lost para nutrição ou SQA para closer.' }
];

const socialPosts = [
  { channel: 'LinkedIn', title: 'Velocidade virou commodity', objective: 'Abrir consciência executiva em CEO e Comercial.', bullets: ['Post do Gabriel com tese forte', 'CTA leve para diagnóstico', 'Comentário em decisores de Tier 1'] },
  { channel: 'LinkedIn', title: 'Quanto custa perder 1% da base?', objective: 'Levar CFO/CEO para dor financeira do churn.', bullets: ['Carrossel com cálculo simples', 'Link para calculadora', 'Retargeting de visitantes'] },
  { channel: 'LinkedIn', title: 'SVA útil vs SVA de entretenimento', objective: 'Educar Produto/SVA e Marketing sobre valor percebido.', bullets: ['Comparativo visual', 'CTA para checklist', 'Uso em cadência Apollo'] },
  { channel: 'Instagram', title: 'Cliente não cancela só por preço', objective: 'Transformar a tese em conteúdo visual e simples.', bullets: ['Reels curto', 'Carrossel de dor', 'Stories com enquete'] },
  { channel: 'Instagram', title: 'Benefício que entra na rotina', objective: 'Mostrar saúde como utilidade diária para famílias.', bullets: ['Post explicativo', 'Prova de uso', 'CTA para landing page'] },
  { channel: 'Instagram', title: 'Como vender internet com saúde', objective: 'Ajudar comercial do provedor a entender argumento.', bullets: ['Carrossel de scripts', 'Story com caixa de pergunta', 'Remarketing'] },
  { channel: 'Facebook', title: 'Retenção para provedores regionais', objective: 'Distribuição e remarketing em público ISP.', bullets: ['Post educativo', 'Anúncio por interesse/cargo', 'Link para checklist'] },
  { channel: 'Facebook', title: 'Guia de SVA de alto valor', objective: 'Captura de leads de meio de funil.', bullets: ['Post com benefício prático', 'LP checklist', 'Tag MQA se completar'] },
  { channel: 'Facebook', title: 'Convite para diagnóstico', objective: 'Reimpactar quem abriu formulário ou visitou LP.', bullets: ['Criativo direto', 'WhatsApp permitido', 'SLA SDR em 24h'] }
];

const personaLps = [
  { persona: 'CEO / Dono', title: 'Diagnóstico de Retenção para Provedores', why: 'É quem decide prioridade estratégica e precisa enxergar proteção de receita.', attention: '“Quanto custa perder 1% da sua base todos os meses?”', cta: 'Agendar diagnóstico', fields: 'Base ativa, churn estimado, ticket médio, região e timing.' },
  { persona: 'Diretor Comercial', title: 'Kit para vender internet sem desconto', why: 'Precisa de argumento para sair da guerra de preço e abrir conversa com valor.', attention: '“Um argumento além da velocidade para defender preço e margem.”', cta: 'Baixar kit comercial', fields: 'Tamanho do time, oferta atual, objeções e canais de venda.' },
  { persona: 'Produto / SVA', title: 'Checklist de SVA de alto valor percebido', why: 'Compara benefício genérico com utilidade real e ajuda a validar a categoria.', attention: '“Seu SVA gera uso ou só ocupa espaço no contrato?”', cta: 'Receber checklist', fields: 'SVAs atuais, adesão, uso percebido e maturidade de ativação.' },
  { persona: 'CS / Retenção', title: 'Régua de ativação do benefício em 30 dias', why: 'Garante que o benefício vire uso e não apenas promessa comercial.', attention: '“SVA sem ativação não gera retenção.”', cta: 'Baixar régua 30 dias', fields: 'Onboarding, canais de comunicação, base e gatilhos de cancelamento.' },
  { persona: 'Financeiro / Controller', title: 'Calculadora churn x SVA de saúde', why: 'Traduz a tese em impacto de margem, payback e proteção de receita.', attention: '“Compare o custo do churn com o custo de proteger a base.”', cta: 'Pedir simulação', fields: 'Ticket médio, churn, margem, custo de aquisição e base ativa.' }
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

function renderEmailSequence() {
  const wrap = document.getElementById('emailSequence');
  if (!wrap) return;
  wrap.innerHTML = emailSequence.map(item => `
    <article class="email-card">
      <small>${item.day} · ${item.trigger}</small>
      <h3>${item.title}</h3>
      <p>${item.action}</p>
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
        <dt>Gancho</dt><dd>${item.attention}</dd>
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
renderEmailThemes();
renderEmailSequence();
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
