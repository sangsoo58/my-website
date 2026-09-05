(() => {
  const input = document.getElementById('case-search-input');
  const reset = document.getElementById('case-search-reset');
  const result = document.getElementById('case-filter-result');
  const cards = [...document.querySelectorAll('#case-archive .case-card')];
  if (!input || !cards.length) return;
  const apply = () => {
    const q = input.value.trim().toLowerCase();
    let count = 0;
    cards.forEach((card) => {
      const hay = (card.dataset.caseSearch || card.textContent || '').toLowerCase();
      const show = !q || hay.includes(q);
      card.hidden = !show;
      if (show) count += 1;
    });
    if (result) result.textContent = `${count}건`;
  };
  input.addEventListener('input', apply);
  reset?.addEventListener('click', () => { input.value = ''; apply(); input.focus(); });
})();
