(() => {
  const cases = window.ENERGY_CASES || [];
  const params = new URLSearchParams(window.location.search);
  const id = document.body.dataset.caseId || params.get('id');
  const item = cases.find((entry) => entry.id === id && entry.status === 'published');
  const root = document.getElementById('case-detail-root');

  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  if (!root) return;

  if (!item) {
    root.innerHTML = `
      <section class="case-detail-empty">
        <p class="eyebrow">ENERGY SAVING CASE</p>
        <h1>사례를 찾을 수 없습니다.</h1>
        <p>URL을 확인하거나 전체 사례 목록에서 다시 선택해 주세요.</p>
        <a class="button button-primary" href="./">전체 사례 보기</a>
      </section>`;
    return;
  }

  document.title = `${item.company} 에너지 절감 사례 | 글로벌 에너지 최적화 연구소`;

  const list = (items) => `<ul>${items.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ul>`;

  root.innerHTML = `
    <section class="case-detail-hero">
      <div class="case-detail-breadcrumb"><a href="../">홈</a><span>›</span><a href="./">절감 사례</a><span>›</span><strong>${escapeHtml(item.company)}</strong></div>
      <div class="case-detail-hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(item.category)} · ${escapeHtml(item.energyType)}</p>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="case-detail-lead">${escapeHtml(item.short)}</p>
          <div class="case-detail-tags">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
        <aside class="case-summary-panel">
          <span class="case-state live">실제 수행 사례</span>
          <small>${escapeHtml(item.potentialLabel)}</small>
          <strong>${escapeHtml(item.potential)}</strong>
          <dl>
            <div><dt>고객사</dt><dd>${escapeHtml(item.company)}</dd></div>
            <div><dt>대상 설비</dt><dd>${escapeHtml(item.equipment)}</dd></div>
            <div><dt>분석기간</dt><dd>${escapeHtml(item.period)}</dd></div>
            <div><dt>에너지원</dt><dd>${escapeHtml(item.energyType)}</dd></div>
          </dl>
          <p>${escapeHtml(item.verificationStatus)}</p>
        </aside>
      </div>
    </section>

    <section class="case-detail-section two-col">
      <div>
        <p class="eyebrow">01 · CHALLENGE</p>
        <h2>현장에서 확인한 주요 과제</h2>
        ${list(item.problem)}
      </div>
      <div>
        <p class="eyebrow">02 · DATA</p>
        <h2>분석에 사용한 데이터</h2>
        ${list(item.dataUsed)}
      </div>
    </section>

    <section class="case-detail-section">
      <p class="eyebrow">03 · BASELINE / MODEL</p>
      <h2>Baseline 및 예측모델</h2>
      <div class="model-grid">
        ${item.baselineModels.map((model) => `
          <article class="model-card">
            <span>${escapeHtml(model.name)}</span>
            <code>${escapeHtml(model.formula)}</code>
            <dl>
              <div><dt>방법</dt><dd>${escapeHtml(model.method)}</dd></div>
              <div><dt>성능·해석</dt><dd>${escapeHtml(model.performance)}</dd></div>
            </dl>
          </article>`).join('')}
      </div>
    </section>

    <section class="case-detail-section">
      <p class="eyebrow">04 · SAVING OPPORTUNITY</p>
      <h2>1차 절감 잠재량 시나리오</h2>
      <div class="scenario-table-wrap">
        <table class="scenario-table">
          <thead><tr><th>개선 시나리오</th><th>Baseline</th><th>목표</th><th>1차 잠재량</th></tr></thead>
          <tbody>
            ${item.scenarios.map((scenario) => `
              <tr>
                <td><strong>${escapeHtml(scenario.name)}</strong><span>${escapeHtml(scenario.note)}</span></td>
                <td>${escapeHtml(scenario.baseline)}</td>
                <td>${escapeHtml(scenario.target)}</td>
                <td class="saving-cell">${escapeHtml(scenario.saving)}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="verification-box">
        <strong>검증 조건</strong>
        <p>${escapeHtml(item.verification)}</p>
      </div>
      <p class="source-note">자료 기준: ${escapeHtml(item.sourceNote)}</p>
    </section>

    <section class="case-detail-cta">
      <div>
        <p class="eyebrow light">APPLY TO YOUR FACTORY</p>
        <h2>우리 공장 데이터에도 같은 방식으로 적용할 수 있을까요?</h2>
        <p>생산량·가동시간·에너지사용량 등 기본 자료가 있다면 현재 설비의 Baseline과 절감 가능성을 함께 검토할 수 있습니다.</p>
      </div>
      <a class="button button-submit" href="../#contact">에너지 절감 상담 요청하기</a>
    </section>`;
})();
