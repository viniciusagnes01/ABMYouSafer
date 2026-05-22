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

function revealOnScroll() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function setupParallax() {
  const hero = document.querySelector('.hero-visual');
  if (!hero) return;
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 10;
    const y = (event.clientY / window.innerHeight - .5) * 10;
    hero.style.setProperty('--mx', `${x}px`);
    hero.style.setProperty('--my', `${y}px`);
    document.querySelectorAll('.floating-chip').forEach((chip, idx) => {
      chip.style.transform = `translate(${x * (idx + 1) * .35}px, ${y * (idx + 1) * .25}px)`;
    });
  });
}

renderScoreChecks();
renderPlays();
setupPlayFilters();
revealOnScroll();
setupParallax();
