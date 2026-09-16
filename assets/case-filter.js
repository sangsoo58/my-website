(() => {
  const input = document.getElementById('case-search-input');
  const reset = document.getElementById('case-search-reset');
  const result = document.getElementById('case-filter-result');
  const cards = [...document.querySelectorAll('#case-archive .case-card')];
  const buttons = [...document.querySelectorAll('[data-sector]')];
  const links = [...document.querySelectorAll('[data-sector-link]')];
  if (!cards.length) return;
  let sector = new URLSearchParams(location.search).get('sector') || 'all';
  if (!['all','industry','building'].includes(sector)) sector = 'all';
  const apply = () => {
    const q = (input?.value || '').trim().toLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const hay = (card.dataset.caseSearch || card.textContent || '').toLowerCase();
      const sectorOk = sector === 'all' || card.dataset.caseSector === sector;
      const searchOk = !q || hay.includes(q);
      const show = sectorOk && searchOk;
      card.hidden = !show;
      if (show) count += 1;
    });
    buttons.forEach(b => b.classList.toggle('active', b.dataset.sector === sector));
    if (result) result.textContent = `${count}건`;
  };
  buttons.forEach((b) => b.addEventListener('click', () => { sector=b.dataset.sector; apply(); }));
  links.forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); sector=b.dataset.sectorLink || 'all'; apply(); document.getElementById('case-archive')?.scrollIntoView({behavior:'smooth',block:'start'}); }));
  input?.addEventListener('input', apply);
  reset?.addEventListener('click', () => { if(input) input.value=''; apply(); input?.focus(); });
  apply();
})();