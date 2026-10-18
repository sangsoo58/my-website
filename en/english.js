(() => {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); };
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1100) close(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const grid = document.getElementById('english-case-grid');
  if (!grid) return;
  const search = document.getElementById('case-search-en');
  const sector = document.getElementById('case-sector-en');
  const evidence = document.getElementById('case-evidence-en');
  const reset = document.getElementById('case-reset-en');
  const count = document.getElementById('case-count-en');
  const empty = document.getElementById('case-empty-en');
  const cards = [...grid.querySelectorAll('.en-case-card')];
  const normalize = value => value.toLowerCase().replace(/\s+/g, ' ').trim();
  const update = () => {
    const terms = normalize(search.value).split(' ').filter(Boolean);
    let visible = 0;
    cards.forEach(card => { const text = normalize(card.textContent); const match = terms.every(term => text.includes(term)) && (!sector.value || card.dataset.sector === sector.value) && (!evidence.value || card.dataset.evidence === evidence.value); card.hidden = !match; if (match) visible++; });
    count.textContent = `${visible} of ${cards.length} English cases`;
    empty.hidden = visible !== 0;
  };
  document.querySelector('.case-tools').hidden = false;
  search.addEventListener('input', update);
  sector.addEventListener('change', update);
  evidence.addEventListener('change', update);
  reset.addEventListener('click', () => { search.value = ''; sector.value = ''; evidence.value = ''; update(); search.focus(); });
  update();
})();

/* CASE01~88 related consulting services — safe one-time loader */
(()=>{if(!/^\/(?:en\/)?cases\/case\d{2}\.html$/i.test(location.pathname))return;if(document.getElementById('eo-case-consulting-loader'))return;const s=document.createElement('script');s.id='eo-case-consulting-loader';s.src='/assets/case-consulting-links.js?v=20261019';s.defer=true;document.body.appendChild(s)})();
