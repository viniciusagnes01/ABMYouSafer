
const DATA = window.ABM_DATA;
const qs = (s, root = document) => root.querySelector(s);
const qsa = (s, root = document) => Array.from(root.querySelectorAll(s));
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const firstName = (name) => String(name || '').split(' ')[0] || String(name || '');

const ICONS = {
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h8v18"/><path d="M14 9h4a2 2 0 0 1 2 2v10"/><path d="M8 7h2M8 11h2M8 15h2M17 13h1M17 17h1"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M6 9v12M6 5v.01M10 21V9h4v2a4 4 0 0 1 7 3v7"/></svg>',
  article: '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6M9 9h2"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
  layout: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/></svg>',
  calculator: '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0"/></svg>',
  webinar: '<svg viewBox="0 0 24 24"><path d="M4 5h16v10H4z"/><path d="M8 21h8M12 15v6M9 9l2 2 4-4"/></svg>',
  bullseye: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  automation: '<svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
  handshake: '<svg viewBox="0 0 24 24"><path d="M7 12 3 8l4-4 4 4"/><path d="m17 12 4-4-4-4-4 4"/><path d="M8 13l2 2a3 3 0 0 0 4 0l2-2"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M7 16V9M12 16V5M17 16v-4"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M5 19c2-1 3-2 4-4"/><path d="M9 15 5 11l5-5c3-3 7-3 9-1 2 2 2 6-1 9l-5 5-4-4Z"/><path d="M15 9h.01"/></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M8 5a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 5 2.2"/><path d="M16 5a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-5 2.2"/><path d="M12 4v16"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24"><path d="M4 13h3l10 5V6L7 11H4z"/><path d="M7 13v5"/></svg>',
  score: '<svg viewBox="0 0 24 24"><path d="M4 19a8 8 0 1 1 16 0"/><path d="m12 13 4-4"/><path d="M12 19h.01"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>'
};
function icon(key) { return `<span class="ys-icon" aria-hidden="true">${ICONS[key] || ICONS.target}</span>`; }
function routeClass(type) { return String(type || '').toLowerCase().replace(':','').replace('ã','a').replace('á','a'); }

function renderControlMatrix() {
  const wrap = qs('#controlMatrix'); if (!wrap) return;
  wrap.innerHTML = DATA.controlModules.map((item, i) => `<article class="control-card card-3d"><div class="card-index">${String(i+1).padStart(2,'0')}</div>${icon(item.icon)}<h3>${esc(item.title)}</h3><dl><dt>Objetivo</dt><dd>${esc(item.objective)}</dd><dt>Sinal</dt><dd>${esc(item.signal)}</dd><dt>Ação</dt><dd>${esc(item.action)}</dd></dl></article>`).join('');
}

function renderFlow() {
  const wrap = qs('#flowBoard'); if (!wrap) return;
  wrap.innerHTML = DATA.flowLanes.map((lane, i) => `<section class="flow-lane ${lane.hot?'hot':''}"><header><strong>${esc(lane.stage)}</strong><span>${esc(lane.summary)}</span></header><div class="flow-cards">${lane.cards.map((card, j) => `<article class="flow-card ${lane.hot?'is-hot':''}" style="--delay:${(i*.1)+(j*.06)}s">${icon(card.icon)}<h3>${esc(card.title)}</h3><p>${esc(card.text)}</p></article>`).join('')}</div></section>`).join('');
}

function stageFromScore(score) {
  if (score >= 85) return ['Opportunity / Closer', 'Conta pronta para proposta, piloto ou business case com decisor.'];
  if (score >= 70) return ['SQA / SDR em 24h', 'Conta deve ir para abordagem comercial com briefing completo.'];
  if (score >= 50) return ['MQA', 'Conta gerou intenção suficiente para diagnóstico ou simulação.'];
  if (score >= 30) return ['Engajado', 'Conta deve receber nutrição e próximos sinais de intenção.'];
  return ['Nutrição', 'Conta ainda precisa de conteúdo e sinais antes de venda.'];
}
function renderScoreChecks() {
  const wrap = qs('#scoreChecks'); if (!wrap) return;
  wrap.innerHTML = DATA.scoreRules.map((rule, i) => `<label class="score-item"><input type="checkbox" data-index="${i}"/><span>${esc(rule.label)}</span><em>+${rule.points}</em></label>`).join('');
  wrap.addEventListener('change', updateScore);
}
function updateScore() {
  const buckets = {fit:0,intent:0,progression:0};
  qsa('#scoreChecks input:checked').forEach(input => { const r = DATA.scoreRules[Number(input.dataset.index)]; buckets[r.bucket]+=r.points; });
  buckets.fit = Math.min(40,buckets.fit); buckets.intent = Math.min(40,buckets.intent); buckets.progression = Math.min(20,buckets.progression);
  const total = Math.min(100, buckets.fit+buckets.intent+buckets.progression);
  const [stage, advice] = stageFromScore(total);
  qs('#scoreValue').textContent = total; qs('.score-ring').style.setProperty('--score', total);
  qs('#scoreStage').textContent = stage; qs('#scoreAdvice').textContent = advice;
  qs('#fitOut').textContent = `${buckets.fit}/40`; qs('#intentOut').textContent = `${buckets.intent}/40`; qs('#progOut').textContent = `${buckets.progression}/20`;
  qs('#fitBar').style.width = `${(buckets.fit/40)*100}%`; qs('#intentBar').style.width = `${(buckets.intent/40)*100}%`; qs('#progBar').style.width = `${(buckets.progression/20)*100}%`;
}

function renderEmailTabs() {
  const tabs = qs('#emailPersonaTabs'); if (!tabs) return;
  const entries = Object.entries(DATA.emailPersonas);
  tabs.innerHTML = entries.map(([key,p],i) => `<button type="button" class="${i===0?'active':''}" data-persona="${key}" role="tab" aria-selected="${i===0}">${esc(p.label)}</button>`).join('');
  tabs.addEventListener('click', e => { const btn=e.target.closest('button[data-persona]'); if(!btn) return; qsa('button',tabs).forEach(b=>{b.classList.toggle('active',b===btn); b.setAttribute('aria-selected', b===btn?'true':'false');}); renderEmailPersona(btn.dataset.persona); });
  renderEmailPersona(entries[0][0]);
}
function renderEmailPersona(key) {
  const p = DATA.emailPersonas[key] || Object.values(DATA.emailPersonas)[0];
  const label = qs('#personaSequenceLabel'); if(label) label.textContent = p.label;
  const summary = qs('#personaSummary');
  if(summary) summary.innerHTML = `<small>Persona selecionada</small><h3>${esc(p.label)}</h3><div class="brief-row"><b>Dor</b><span>${esc(p.pain)}</span></div><div class="brief-row"><b>Promessa</b><span>${esc(p.promise)}</span></div><div class="brief-row"><b>Objeção</b><span>${esc(p.objection)}</span></div><div class="brief-row success"><b>Passagem</b><span>${esc(p.pass)}</span></div>`;
  const sequence = qs('#emailSequence'); if(!sequence) return;
  sequence.innerHTML = (p.sequence || []).map((item,i) => `<article class="email-step card-3d"><div class="step-day">${esc(item.day)}</div><div class="email-step-content"><small>${esc(item.trigger)}</small><h3>${esc(item.subject)}</h3><p>${esc(item.angle)}</p><span>${esc(item.cta)}</span></div><em>${String(i+1).padStart(2,'0')}</em></article>`).join('');
}


function renderChannelMatrix() {
  const wrap = qs('#channelMatrix');
  if(!wrap || !DATA.channelMatrix) return;
  const rows = DATA.channelMatrix.map(row => `
    <tr data-channel-row="${esc(row.canal)}">
      <td class="matrix-channel-cell">
        <button type="button" data-jump-channel="${esc(row.canal)}">${esc(row.canal)}</button>
        <small>${esc(row.observacao || '')}</small>
      </td>
      <td>${esc(row.funil)}</td>
      <td>${esc(row.papel)}</td>
      <td><strong>${esc(row.cta)}</strong></td>
    </tr>`).join('');
  wrap.innerHTML = `
    <div class="matrix-table-scroll stable-matrix" role="region" aria-label="Matriz por canal">
      <table class="channel-matrix-table">
        <thead>
          <tr><th>Canal</th><th>Funil</th><th>Papel</th><th>CTA principal</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  qsa('[data-jump-channel]', wrap).forEach(btn => btn.addEventListener('click', () => activateChannel(btn.dataset.jumpChannel)));
}
function renderAcquisitionClusters() {
  const wrap = qs('#channelBaseClusters'); if(!wrap || !DATA.userBaseChannelClusters) return;
  wrap.innerHTML = DATA.userBaseChannelClusters.map((row, i)=>`<article class="base-channel-card card-3d">
    <div class="card-index">${String(i+1).padStart(2,'0')}</div>
    <h3>${esc(row.cluster)}</h3>
    <dl><dt>Ângulo principal</dt><dd>${esc(row.angle)}</dd><dt>Melhor canal</dt><dd>${esc(row.bestChannels)}</dd></dl>
    <blockquote>${esc(row.language)}</blockquote>
  </article>`).join('');
}
function renderBlogSchedule() {
  const wrap = qs('#blogSchedulePanel');
  if(!wrap) return;
  const posts = DATA.socialPosts.filter(p => p.channel === 'Blog');
  wrap.innerHTML = `<div class="blog-schedule-head"><div><small>Blog / SEO</small><h3>Grade fixa de artigos — 3 por semana</h3><p>Conteúdo útil para pessoas, com profundidade, prova e ponte para LP, WhatsApp ou diagnóstico.</p></div><button type="button" data-blog-open>Ver blog na grade</button></div>
    <div class="blog-schedule-table-wrap"><table class="blog-schedule-table"><thead><tr><th>Dia</th><th>Tema</th><th>Palavra/cluster</th><th>Persona</th><th>Cluster de base</th><th>CTA</th></tr></thead><tbody>${posts.map(p=>`<tr><td>${esc(p.day)}</td><td><strong>${esc(p.title)}</strong><small>${esc(p.objective)}</small></td><td>${esc(p.keyword || '-')}</td><td>${esc(p.persona)}</td><td>${esc(p.cluster)}</td><td><b>${esc(p.cta)}</b></td></tr>`).join('')}</tbody></table></div>`;
  const btn = qs('[data-blog-open]', wrap);
  if(btn) btn.addEventListener('click', () => activateChannel('Blog'));
}
function normalizeChannel(channel='LinkedIn') {
  if(channel === 'Blog / Artigos' || channel === 'Artigos / Blog' || channel === 'Blog SEO') return 'Blog';
  return channel || 'LinkedIn';
}
function activateChannel(channel='LinkedIn') {
  const normalized = normalizeChannel(channel);
  qsa('.channel-capture-tabs button[data-channel]').forEach(tab => {
    const active = normalizeChannel(tab.dataset.channel) === normalized;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  renderSocial(normalized);
  const grid = qs('#socialGrid');
  if(grid) grid.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function renderSocial(channel='LinkedIn') {
  const normalized = normalizeChannel(channel);
  const strategy = DATA.socialStrategies[normalized] || DATA.socialStrategies.LinkedIn;
  const strategyWrap = qs('#channelStrategy');
  const channelLabel = normalized === 'Blog' ? 'Blog / Artigos SEO' : normalized;
  if(strategyWrap && strategy) {
    strategyWrap.innerHTML = `<small>Canal selecionado</small><h3>${esc(channelLabel)}</h3><dl><dt>Funil</dt><dd>${esc(strategy.funil)}</dd><dt>Papel</dt><dd>${esc(strategy.role)}</dd><dt>CTA principal</dt><dd>${esc(strategy.cta)}</dd><dt>Ritmo</dt><dd>${esc(strategy.rhythm)}</dd><dt>Métrica</dt><dd>${esc(strategy.metric)}</dd></dl><p class="channel-note">${esc(strategy.note || '')}</p>`;
  }
  const grid = qs('#socialGrid'); if(!grid) return;
  const items = DATA.socialPosts.filter(p => p.channel === normalized);
  const title = qs('#channelFeedTitle');
  const count = qs('#channelFeedCount');
  if(title) title.textContent = normalized === 'Blog' ? 'Artigos do blog — grade SEO semanal' : `Posts por canal — ${normalized}`;
  if(count) count.textContent = `${items.length} conteúdo${items.length === 1 ? '' : 's'}`;
  grid.dataset.activeChannel = normalized;
  if(!items.length) {
    grid.innerHTML = `<article class="social-card acquisition-card empty-state"><h3>Nenhum conteúdo cadastrado para ${esc(channelLabel)}</h3><p>Adicione novos itens em DATA.socialPosts usando channel: "${esc(normalized)}".</p></article>`;
    return;
  }
  grid.innerHTML = items.map((post,i) => `<article class="social-card acquisition-card card-3d ${normalized==='Blog'?'blog-card':''}">
    <div class="card-index">${esc(post.day || post.post || String(i+1).padStart(2,'0'))}</div>
    <span class="channel-pill">${esc(post.format)}</span>
    <h3>${esc(post.title)}</h3>
    <p>${esc(post.objective)}</p>
    <div class="post-meta-grid">
      ${post.keyword ? `<span><b>Palavra/cluster</b>${esc(post.keyword)}</span>` : ''}
      <span><b>Persona</b>${esc(post.persona || 'Todos')}</span>
      <span><b>Cluster de base</b>${esc(post.cluster || '-')}</span>
      <span><b>Funil</b>${esc(post.funnel || strategy?.funil || '-')}</span>
    </div>
    <strong>${esc(post.cta)}</strong>
  </article>`).join('');
}
function setupSocialTabs() {
  const tabs = qsa('.channel-capture-tabs button[data-channel]');
  tabs.forEach(btn => btn.addEventListener('click', () => activateChannel(btn.dataset.channel)));
}

function renderLps() {
  const wrap = qs('#personaLps'); if(!wrap) return;
  wrap.innerHTML = DATA.personaLps.map((lp,i)=>`<article class="lp-card card-3d"><div class="card-index">LP ${i+1}</div><span>${esc(lp.persona)}</span><h3>${esc(lp.asset)}</h3><p>${esc(lp.reason)}</p><dl><dt>Gancho</dt><dd>${esc(lp.hook)}</dd><dt>Promessa</dt><dd>${esc(lp.promise)}</dd><dt>CTA</dt><dd>${esc(lp.cta)}</dd><dt>Campos</dt><dd>${lp.fields.map(f=>`<b>${esc(f)}</b>`).join('')}</dd></dl></article>`).join('');
}
function renderCrm() {
  const wrap = qs('#crmCadence'); if(wrap) wrap.innerHTML = DATA.crmCadence.map((s,i)=>`<article class="crm-step card-3d"><div class="step-day">${esc(s.day)}</div><div><small>${esc(s.trigger)}</small><h3>${esc(s.title)}</h3><p>${esc(s.action)}</p></div><em>${String(i+1).padStart(2,'0')}</em></article>`).join('');
  const fields = qs('#crmFields'); if(fields) fields.innerHTML = DATA.crmFields.map(f=>`<li>${esc(f)}</li>`).join('');
}
function renderContentLibrary() {
  const wrap = qs('#contentLibrary'); if(!wrap) return;
  wrap.innerHTML = DATA.contentLibrary.map((item,i)=>`<article class="content-card card-3d"><div class="card-index">${String(i+1).padStart(2,'0')}</div><small>${esc(item.type)}</small><h3>${esc(item.title)}</h3><p>${esc(item.use)}</p><span>${esc(item.next)}</span></article>`).join('');
}
function renderPlayFilters() {
  const wrap = qs('#playFilters'); if(!wrap) return;
  const stages = ['Todos', ...new Set(DATA.plays.map(p=>p.stage))];
  wrap.innerHTML = stages.map((s,i)=>`<button type="button" class="${i===0?'active':''}" data-filter="${esc(s)}">${esc(s)}</button>`).join('');
  wrap.addEventListener('click', e => { const b=e.target.closest('button[data-filter]'); if(!b) return; qsa('button',wrap).forEach(btn=>btn.classList.toggle('active',btn===b)); renderPlays(b.dataset.filter); });
}
function renderPlays(filter='Todos') {
  const wrap = qs('#playsGrid'); if(!wrap) return;
  const items = filter==='Todos' ? DATA.plays : DATA.plays.filter(p=>p.stage===filter);
  wrap.innerHTML = items.map(p=>`<article class="play-card card-3d"><div class="play-meta"><span>${esc(p.stage)} · ${esc(p.code)}</span><b>${esc(p.priority)}</b></div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="owners">${p.owners.map(o=>`<span>${esc(o)}</span>`).join('')}</div></article>`).join('');
}
function renderRoadmap() {
  const wrap = qs('#roadmapGrid'); if(!wrap) return;
  wrap.innerHTML = DATA.roadmap.map(item=>`<article class="roadmap-card card-3d"><small>${esc(item.week)}</small><h3>${esc(item.title)}</h3><p>${esc(item.desc)}</p></article>`).join('');
}
function renderDecisions() { const wrap=qs('#decisionGrid'); if(wrap) wrap.innerHTML = DATA.decisions.map(x=>`<span>${esc(x)}</span>`).join(''); }

function getClusterPersona(key) { return (DATA.scrapCluster.personas || []).find(p=>p.key===key) || DATA.scrapCluster.personas[0]; }
function renderScrapCluster() {
  if(!DATA.scrapCluster) return;
  const personas = DATA.scrapCluster.personas || []; if(!personas.length) return;
  const stats = qs('#clusterStats'); if(stats){ const s=DATA.scrapCluster.source; stats.innerHTML = [['Leads válidos',s.validLeads],['Empresas únicas',s.uniqueAccounts],['Personas',s.personas],['Regra nova',s.baseLogic || s.rule],['Validação',s.validation || 'Validar porte antes do comercial']].map(([l,v])=>`<article><small>${esc(l)}</small><strong>${esc(v)}</strong></article>`).join(''); }
  renderBaseRules();
  const tabs = qs('#clusterPersonaTabs'); if(tabs){ tabs.innerHTML = personas.map((p,i)=>`<button type="button" class="${i===0?'active':''}" data-cluster-persona="${esc(p.key)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(p.label)}</button>`).join(''); tabs.addEventListener('click', e=>{ const b=e.target.closest('button[data-cluster-persona]'); if(!b) return; qsa('button',tabs).forEach(btn=>btn.classList.toggle('active',btn===b)); renderClusterPersona(b.dataset.clusterPersona); }); }
  renderClusterPersona(personas[0].key);
}
function renderBaseRules() {
  const wrap=qs('#baseRules'); if(!wrap || !DATA.scrapCluster.baseRules) return;
  wrap.innerHTML = DATA.scrapCluster.baseRules.map((r,i)=>`<article class="base-rule-card card-3d ${i===0?'hot':''}"><span>${String(i+1).padStart(2,'0')}</span><small>${esc(r.range)}</small><h3>${esc(r.tier)}</h3><b>${esc(r.abmType)}</b><p>${esc(r.why)}</p><em>${esc(r.investment)}</em></article>`).join('');
}
function renderClusterPersona(key) {
  const p = getClusterPersona(key); if(!p) return;
  const lbl=qs('#clusterTableLabel'); if(lbl) lbl.textContent = p.label;
  const selected=qs('#clusterSelectedSummary'); if(selected){ const counts = { '1:1':0, '1:Poucos':0, '1:Muitos':0 }; const baseCounts={}; p.leads.forEach(l=>{counts[l.abmType]++; baseCounts[l.baseTier]=(baseCounts[l.baseTier]||0)+1;}); selected.innerHTML = `<h3>${esc(p.label)}</h3><p>${esc(p.role)}</p><div class="route-counters"><span><b>${counts['1:1']}</b> 1:1</span><span><b>${counts['1:Poucos']}</b> 1:poucos</span><span><b>${counts['1:Muitos']}</b> 1:muitos</span></div><div class="base-mini">${Object.entries(baseCounts).map(([k,v])=>`<i>${esc(k)} <b>${v}</b></i>`).join('')}</div>`; }
  renderClusterTable(p);
  renderActiveLead(p, p.leads[0]);
}
function renderClusterTable(persona) {
  const table=qs('#clusterLeadTable'); if(!table) return;
  table.innerHTML = `<thead><tr><th>#</th><th>Lead</th><th>Empresa</th><th>Cargo</th><th>Base estimada</th><th>Score</th><th>Conta</th><th>Rota</th><th>Próximo passo</th></tr></thead><tbody>${persona.leads.map((lead,i)=>`<tr class="${i===0?'active':''}" data-lead-index="${i}" tabindex="0"><td>${String(lead.rank||i+1).padStart(2,'0')}</td><td><strong>${esc(lead.name)}</strong><small>${esc(lead.email || '')}</small></td><td>${esc(lead.company)}<small>${esc(lead.city)}</small></td><td>${esc(lead.role)}</td><td><strong>${esc(lead.baseUsers || 'a validar')}</strong><small>${esc(lead.baseTier || '')}</small></td><td><b>${esc(lead.score)}</b></td><td>${esc(lead.tier)}<small>${esc(lead.contacts)} contatos · ${esc(lead.personas)} personas</small></td><td><span class="route-badge route-${routeClass(lead.abmType)}">${esc(lead.abmType)}</span></td><td>${esc(lead.nextStep)}</td></tr>`).join('')}</tbody>`;
  qsa('tbody tr',table).forEach(row=>{ const run=()=>{ qsa('tbody tr',table).forEach(r=>r.classList.toggle('active',r===row)); renderActiveLead(persona, persona.leads[Number(row.dataset.leadIndex)]); }; row.addEventListener('click',run); row.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();run();}}); });
}
function renderActiveLead(persona, lead) {
  if(!lead) return;
  const active=qs('#activeLeadCard');
  if(active) active.innerHTML = `<small>Simulação ativa</small><h3>${esc(lead.name)}</h3><p><b>${esc(lead.role)}</b> · ${esc(lead.company)}</p><div class="active-lead-meta"><span>Base estimada <b>${esc(lead.baseUsers || 'a validar')}</b></span><span>Tier por base <b>${esc(lead.baseTier || 'a validar')}</b></span><span>Persona <b>${esc(persona.label)}</b></span><span>Score preservado <b>${esc(lead.score)}</b></span><span>Contatos <b>${esc(lead.contacts)}</b></span><span>Personas <b>${esc(lead.personas)}</b></span><span>Senioridade <b>${esc(lead.seniority)}</b></span><span>Tag <b>${esc(lead.tag)}</b></span></div><div class="active-route route-${routeClass(lead.abmType)}"><strong>${esc(lead.abmType)}</strong><span>${esc(lead.reason)}</span></div><p class="next-step"><b>Regra aplicada:</b> ${esc(lead.routeLogic || 'base define intensidade; persona define narrativa')}</p><p class="next-step"><b>Próximo passo:</b> ${esc(lead.nextStep)}</p>${lead.source ? `<p class="next-step"><b>Fonte:</b> ${esc(lead.source)}</p>` : ''}`;
  const label=qs('#activeFunnelLabel'); if(label) label.textContent = lead.abmType;
  const funnel=qs('#abmFunnelVisual'); if(funnel){ qsa('[data-type]',funnel).forEach(btn=>{ btn.classList.toggle('active', btn.dataset.type===lead.abmType); btn.classList.toggle('muted-route', btn.dataset.type!==lead.abmType); }); }
  renderClusterJourney(lead, persona); renderClusterCrm(persona, lead);
}
function renderClusterJourney(lead, persona) {
  const flow=qs('#clusterJourneyFlow'); if(!flow) return;
  const route = DATA.scrapCluster.abmTypes[lead.abmType] || DATA.scrapCluster.abmTypes['1:Poucos'];
  flow.innerHTML = `<header class="journey-head"><div><p class="eyebrow"><span></span> Downflow do lead</p><h3>${esc(route.label)} · ${esc(route.position)}</h3><p>${esc(route.motion)}</p></div><strong>${esc(route.criteria)}</strong></header><div class="journey-steps">${route.steps.map((step,i)=>`<article class="journey-step card-3d" style="--delay:${i*.08}s"><span>${String(i+1).padStart(2,'0')}</span><h4>${esc(step)}</h4><p>${journeyCopy(lead, persona, i)}</p></article>`).join('')}</div>`;
}
function journeyCopy(lead, persona, index) {
  const copies = [`Validar porte real da base de ${lead.company}: ${lead.baseUsers || 'a validar'}, Anatel/ZoomInfo/site e sinais públicos.`, `Usar a persona ${persona.short || persona.label} para adaptar dor, LP, argumento e CTA.`, `Registrar origem, baseTier ${lead.baseTier || 'a validar'}, score ${lead.score}, tag ${lead.tag || 'CRM'} e conteúdo consumido.`, `Avançar apenas com sinal real: resposta, clique, formulário, conexão ou abertura repetida.`, `Entregar ao comercial com briefing: porte da base, por que entrou em ${lead.abmType} e qual CTA usar.`];
  return copies[index] || copies[copies.length-1];
}
function renderClusterCrm(persona, lead) {
  const wrap=qs('#clusterCrmSequence'); if(!wrap) return;
  const steps = persona.crmSteps && persona.crmSteps.length ? persona.crmSteps : [{day:'D0',channel:'Email',goal:'Abrir conversa',message:'{{Nome}}, olhando para {{Empresa}}, faz sentido avaliarmos retenção e SVA de saúde com mais profundidade.',cta:'Responder interesse',nextStatus:'Engajamento inicial'}];
  wrap.innerHTML = `<header><small>Cadência da persona aplicada ao lead</small><h3>${esc(persona.label)} · ${esc(lead.company)}</h3></header><div class="cluster-crm-grid">${steps.map((s,i)=>`<article class="cluster-crm-card card-3d"><div class="step-day">${esc(s.day)}</div><div><small>${esc(s.channel)} · ${esc(s.goal)}</small><p>${esc(s.message).replace(/\{\{Nome\}\}/g, firstName(lead.name)).replace(/\{\{Empresa\}\}/g, lead.company)}</p><span>${esc(s.cta)}</span></div><em>${esc(s.nextStatus)}</em></article>`).join('')}</div>`;
}

function setupNavigation() {
  const toggle=qs('#menuToggle'); const navLinks=qsa('.sidebar-nav a');
  if(toggle) toggle.addEventListener('click',()=>{ const open=document.body.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded',open?'true':'false'); });
  navLinks.forEach(link=>link.addEventListener('click',()=>document.body.classList.remove('menu-open')));
  const sections=qsa('main section[id]'); const obs=new IntersectionObserver(entries=>{ entries.forEach(entry=>{ if(!entry.isIntersecting) return; const id=entry.target.id; navLinks.forEach(link=>link.classList.toggle('active', link.getAttribute('href')===`#${id}`)); }); },{rootMargin:'-35% 0px -55% 0px', threshold:.01}); sections.forEach(s=>obs.observe(s));
}
function setupReveal() { const elements=qsa('[data-section], .card-3d'); const obs=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-visible'); }); },{threshold:.05}); elements.forEach(el=>obs.observe(el)); }
function setupMascotMotion(){ const imgs=qsa('.hero-mascot img, .final-mascot img, .with-mascot img'); window.addEventListener('pointermove', e=>{ if(window.innerWidth<900) return; const x=(e.clientX/window.innerWidth-.5)*8; const y=(e.clientY/window.innerHeight-.5)*8; imgs.forEach((img,i)=>{ img.style.transform=`translate3d(${x*(i?0.25:1)}px, ${y*(i?0.2:1)}px, 0)`; }); }); }

renderControlMatrix(); renderScrapCluster(); renderFlow(); renderChannelMatrix(); renderAcquisitionClusters(); renderBlogSchedule(); renderScoreChecks(); renderEmailTabs(); setupSocialTabs(); renderSocial('LinkedIn'); renderLps(); renderCrm(); renderContentLibrary(); renderPlayFilters(); renderPlays(); renderRoadmap(); renderDecisions(); setupNavigation(); setupReveal(); setupMascotMotion();
