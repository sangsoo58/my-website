(() => {
  const cases = (window.ENERGY_CASES || []).filter((item) => item.status === 'published');

  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const card = (item, base = 'cases/') => `
    <article class="case-card live-case-card reveal visible">
      <div class="case-top">
        <span>${escapeHtml(item.category)}</span>
        <span class="case-state live">실제 수행 사례</span>
      </div>
      <div class="case-kpi">
        <small>${escapeHtml(item.potentialLabel)}</small>
        <strong>${escapeHtml(item.potential)}</strong>
        <span>${escapeHtml(item.energyType)}</span>
      </div>
      <p class="case-company">${escapeHtml(item.company)} · ${escapeHtml(item.equipment)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.short)}</p>
      <div class="case-meta">${item.tags.slice(0, 5).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      <div class="case-card-foot">
        <span>${escapeHtml(item.verificationStatus)}</span>
        <a href="${base}${encodeURIComponent(item.id)}.html">사례 자세히 보기 <b>→</b></a>
      </div>
    </article>`;

  const featured = document.getElementById('featured-cases');
  if (featured) {
    featured.innerHTML = cases.map((item) => card(item)).join('');
  }

  const archive = document.getElementById('case-archive');
  if (archive) {
    archive.innerHTML = cases.map((item) => card(item, '')).join('');
  }

  const count = document.querySelectorAll('[data-case-count]');
  count.forEach((node) => { node.textContent = String(cases.length); });
})();
