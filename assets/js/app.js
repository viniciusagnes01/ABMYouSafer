const DATA = window.ABM_DATA;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

function renderControlMatrix() {
  const wrap = qs('#controlMatrix');
  if (!wrap) return;
  wrap.innerHTML = DATA.controlModules.map((item, index) => `
    <article class="control-card card-3d">
      <div class="card-index">${String(index + 1).padStart(2, '0')}</div>
      <i>${item.icon}</i>
      <h3>${esc(item.title)}</h3>
      <dl>
        <dt>Objetivo</dt><dd>${esc(item.objective)}</dd>
        <dt>Sinal</dt><dd>${esc(item.signal)}</dd>
        <dt>Ação</dt><dd>${esc(item.action)}</dd>
      </dl>
    </article>
  `).join('');
}

function renderFlow() {
  const wrap = qs('#flowBoard');
  if (!wrap) return;
  wrap.innerHTML = DATA.flowLanes.map((lane, index) => `
    <section class="flow-lane ${lane.hot ? 'hot' : ''}">
      <header>
        <strong>${esc(lane.stage)}</strong>
        <span>${esc(lane.summary)}</span>
      </header>
      <div class="flow-cards">
        ${lane.cards.map((card, cardIndex) => `
          <article class="flow-card ${lane.hot ? 'is-hot' : ''}" style="--delay:${(index * 0.12) + (cardIndex * 0.06)}s">
            <i>${card.icon}</i>
            <h3>${esc(card.title)}</h3>
            <p>${esc(card.text)}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function stageFromScore(score) {
  if (score >= 85) return ['Opportunity / Closer', 'Conta pronta para proposta, piloto ou business case com decisor.'];
  if (score >= 70) return ['SQA / SDR em 24h', 'Conta deve ir para abordagem comercial com briefing completo.'];
  if (score >= 50) return ['MQA', 'Conta gerou intenção suficiente para diagnóstico ou simulação.'];
  if (score >= 30) return ['Engajado', 'Conta deve receber nutrição e próximos sinais de intenção.'];
  return ['Nutrição', 'Conta ainda precisa de conteúdo e sinais antes de venda.'];
}

function renderScoreChecks() {
  const wrap = qs('#scoreChecks');
  if (!wrap) return;
  wrap.innerHTML = DATA.scoreRules.map((rule, index) => `
    <label class="score-item">
      <input type="checkbox" data-index="${index}" />
      <span>${esc(rule.label)}</span>
      <em>+${rule.points}</em>
    </label>
  `).join('');
  wrap.addEventListener('change', updateScore);
}

function updateScore() {
  const checked = qsa('#scoreChecks input:checked').map(input => DATA.scoreRules[Number(input.dataset.index)]);
  const buckets = { fit: 0, intent: 0, progression: 0 };
  checked.forEach(rule => { buckets[rule.bucket] += rule.points; });
  buckets.fit = Math.min(40, buckets.fit);
  buckets.intent = Math.min(40, buckets.intent);
  buckets.progression = Math.min(20, buckets.progression);
  const total = Math.min(100, buckets.fit + buckets.intent + buckets.progression);
  const [stage, advice] = stageFromScore(total);
  qs('#scoreValue').textContent = total;
  qs('.score-ring').style.setProperty('--score', total);
  qs('#scoreStage').textContent = stage;
  qs('#scoreAdvice').textContent = advice;
  qs('#fitOut').textContent = `${buckets.fit}/40`;
  qs('#intentOut').textContent = `${buckets.intent}/40`;
  qs('#progOut').textContent = `${buckets.progression}/20`;
  qs('#fitBar').style.width = `${(buckets.fit / 40) * 100}%`;
  qs('#intentBar').style.width = `${(buckets.intent / 40) * 100}%`;
  qs('#progBar').style.width = `${(buckets.progression / 20) * 100}%`;
}

function renderEmailTabs() {
  const tabs = qs('#emailPersonaTabs');
  if (!tabs) return;
  const entries = Object.entries(DATA.emailPersonas);
  tabs.innerHTML = entries.map(([key, persona], index) => `
    <button type="button" class="${index === 0 ? 'active' : ''}" data-persona="${key}" role="tab" aria-selected="${index === 0}">
      ${esc(persona.label)}
    </button>
  `).join('');
  tabs.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-persona]');
    if (!button) return;
    qsa('button', tabs).forEach(btn => {
      btn.classList.toggle('active', btn === button);
      btn.setAttribute('aria-selected', btn === button ? 'true' : 'false');
    });
    renderEmailPersona(button.dataset.persona);
  });
  renderEmailPersona(entries[0][0]);
}

function renderEmailPersona(key) {
  const persona = DATA.emailPersonas[key] || DATA.emailPersonas.ceo;
  qs('#personaSequenceLabel').textContent = persona.label;
  const summary = qs('#personaSummary');
  if (summary) {
    summary.innerHTML = `
      <small>Persona selecionada</small>
      <h3>${esc(persona.label)}</h3>
      <div class="brief-row"><b>Dor</b><span>${esc(persona.pain)}</span></div>
      <div class="brief-row"><b>Promessa</b><span>${esc(persona.promise)}</span></div>
      <div class="brief-row"><b>Objeção</b><span>${esc(persona.objection)}</span></div>
      <div class="brief-row success"><b>Passagem</b><span>${esc(persona.pass)}</span></div>
    `;
  }
  const sequence = qs('#emailSequence');
  if (!sequence) return;
  sequence.innerHTML = persona.sequence.map((item, index) => `
    <article class="email-step card-3d">
      <div class="step-day">${esc(item.day)}</div>
      <div class="email-step-content">
        <small>${esc(item.trigger)}</small>
        <h3>${esc(item.subject)}</h3>
        <p>${esc(item.angle)}</p>
        <span>${esc(item.cta)}</span>
      </div>
      <em>${String(index + 1).padStart(2, '0')}</em>
    </article>
  `).join('');
}

function renderSocial(channel = 'LinkedIn') {
  const strategy = DATA.socialStrategies[channel];
  const strategyWrap = qs('#channelStrategy');
  if (strategyWrap && strategy) {
    strategyWrap.innerHTML = `
      <small>Estratégia do canal</small>
      <h3>${esc(channel)}</h3>
      <dl>
        <dt>Papel</dt><dd>${esc(strategy.role)}</dd>
        <dt>Ritmo</dt><dd>${esc(strategy.rhythm)}</dd>
        <dt>Métrica</dt><dd>${esc(strategy.metric)}</dd>
      </dl>
    `;
  }
  const grid = qs('#socialGrid');
  if (!grid) return;
  const items = DATA.socialPosts.filter(post => post.channel === channel);
  grid.innerHTML = items.map((post, index) => `
    <article class="social-card card-3d">
      <div class="card-index">${String(index + 1).padStart(2, '0')}</div>
      <span class="channel-pill">${esc(post.format)}</span>
      <h3>${esc(post.title)}</h3>
      <p>${esc(post.objective)}</p>
      <strong>${esc(post.cta)}</strong>
    </article>
  `).join('');
}

function setupSocialTabs() {
  const tabs = qsa('.channel-tabs button');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.toggle('active', tab === btn));
      renderSocial(btn.dataset.channel);
    });
  });
}

function renderLps() {
  const wrap = qs('#personaLps');
  if (!wrap) return;
  wrap.innerHTML = DATA.personaLps.map((lp, index) => `
    <article class="lp-card card-3d">
      <div class="card-index">LP ${index + 1}</div>
      <span>${esc(lp.persona)}</span>
      <h3>${esc(lp.asset)}</h3>
      <p>${esc(lp.reason)}</p>
      <dl>
        <dt>Gancho</dt><dd>${esc(lp.hook)}</dd>
        <dt>Promessa</dt><dd>${esc(lp.promise)}</dd>
        <dt>CTA</dt><dd>${esc(lp.cta)}</dd>
        <dt>Campos</dt><dd>${lp.fields.map(field => `<b>${esc(field)}</b>`).join('')}</dd>
      </dl>
    </article>
  `).join('');
}

function renderCrm() {
  const wrap = qs('#crmCadence');
  if (wrap) {
    wrap.innerHTML = DATA.crmCadence.map((step, index) => `
      <article class="crm-step">
        <div class="step-day">${esc(step.day)}</div>
        <div>
          <small>${esc(step.trigger)}</small>
          <h3>${esc(step.title)}</h3>
          <p>${esc(step.action)}</p>
        </div>
        <em>${String(index + 1).padStart(2, '0')}</em>
      </article>
    `).join('');
  }
  const fields = qs('#crmFields');
  if (fields) fields.innerHTML = DATA.crmFields.map(field => `<li>${esc(field)}</li>`).join('');
}

function renderContentLibrary() {
  const wrap = qs('#contentLibrary');
  if (!wrap) return;
  wrap.innerHTML = DATA.contentLibrary.map((item, index) => `
    <article class="content-card card-3d">
      <div class="card-index">${String(index + 1).padStart(2, '0')}</div>
      <small>${esc(item.type)}</small>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.use)}</p>
      <span>${esc(item.next)}</span>
    </article>
  `).join('');
}

function renderPlayFilters() {
  const wrap = qs('#playFilters');
  if (!wrap) return;
  const stages = ['Todos', ...new Set(DATA.plays.map(play => play.stage))];
  wrap.innerHTML = stages.map((stage, index) => `
    <button type="button" class="${index === 0 ? 'active' : ''}" data-filter="${esc(stage)}">${esc(stage)}</button>
  `).join('');
  wrap.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    qsa('button', wrap).forEach(btn => btn.classList.toggle('active', btn === button));
    renderPlays(button.dataset.filter);
  });
}

function renderPlays(filter = 'Todos') {
  const wrap = qs('#playsGrid');
  if (!wrap) return;
  const items = filter === 'Todos' ? DATA.plays : DATA.plays.filter(play => play.stage === filter);
  wrap.innerHTML = items.map(play => `
    <article class="play-card card-3d">
      <div class="play-meta"><span>${esc(play.stage)} · ${esc(play.code)}</span><b>${esc(play.priority)}</b></div>
      <h3>${esc(play.name)}</h3>
      <p>${esc(play.desc)}</p>
      <div class="owners">${play.owners.map(owner => `<span>${esc(owner)}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderRoadmap() {
  const wrap = qs('#roadmapGrid');
  if (!wrap) return;
  wrap.innerHTML = DATA.roadmap.map(item => `
    <article class="roadmap-card card-3d">
      <small>${esc(item.week)}</small>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.desc)}</p>
    </article>
  `).join('');
}

function renderDecisions() {
  const wrap = qs('#decisionGrid');
  if (!wrap) return;
  wrap.innerHTML = DATA.decisions.map(item => `<span>${esc(item)}</span>`).join('');
}

function setupNavigation() {
  const toggle = qs('#menuToggle');
  const navLinks = qsa('.sidebar-nav a');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  navLinks.forEach(link => link.addEventListener('click', () => document.body.classList.remove('menu-open')));

  const sections = qsa('main section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(section => observer.observe(section));
}

function setupReveal() {
  const elements = qsa('[data-section], .card-3d');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.08 });
  elements.forEach(element => observer.observe(element));
}

function setupMascotMotion() {
  const mascotCards = qsa('.hero-mascot img, .final-mascot img, .with-mascot img');
  window.addEventListener('pointermove', (event) => {
    if (window.innerWidth < 900) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 14;
    mascotCards.forEach((img, index) => {
      img.style.transform = `translate3d(${x * (index ? 0.25 : 1)}px, ${y * (index ? 0.2 : 1)}px, 0)`;
    });
  });
}

renderControlMatrix();
renderFlow();
renderScoreChecks();
renderEmailTabs();
setupSocialTabs();
renderSocial('LinkedIn');
renderLps();
renderCrm();
renderContentLibrary();
renderPlayFilters();
renderPlays();
renderRoadmap();
renderDecisions();
setupNavigation();
setupReveal();
setupMascotMotion();
