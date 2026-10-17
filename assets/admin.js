(() => {
  const STATUSES = ['신규', '확인중', '상담중', '완료', '보류'];
  const TOKEN_KEY = 'energy_d1_admin_token';

  let consultations = [];
  let selectedId = null;
  let adminToken = sessionStorage.getItem(TOKEN_KEY) || '';

  const $ = (id) => document.getElementById(id);

  const panels = {
    loading: $('loading-panel'),
    config: $('config-panel'),
    login: $('login-panel'),
    denied: $('denied-panel'),
    dashboard: $('dashboard-panel')
  };

  const apiBase = () => {
    const raw = String(window.ENERGY_CONTACT_API?.baseUrl || '').trim();
    if (!raw || raw.includes('REPLACE-WITH-YOUR-WORKER')) return '';
    return raw.replace(/\/+$/, '');
  };

  function showPanel(name) {
    Object.entries(panels).forEach(([key, element]) => {
      if (element) element.hidden = key !== name;
    });

    const loggedIn = name === 'dashboard';
    $('logout-button').hidden = !loggedIn;
    $('refresh-button').hidden = !loggedIn;
  }

  function showMessage(element, message, type = 'error') {
    if (!element) return;
    element.hidden = !message;
    element.textContent = message || '';
    element.classList.remove('success', 'error');
    if (message) element.classList.add(type);
  }

  function formatDate(value) {
    if (!value) return '-';
    try {
      return new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date(value));
    } catch (_) {
      return value;
    }
  }

  function createCell(text, className = '') {
    const td = document.createElement('td');
    td.textContent = text ?? '-';
    if (className) td.className = className;
    return td;
  }

  function statusBadge(status) {
    const span = document.createElement('span');
    const safe = STATUSES.includes(status) ? status : '신규';
    span.className = `status-badge status-${safe}`;
    span.textContent = safe;
    return span;
  }

  async function apiFetch(path, options = {}) {
    const base = apiBase();
    if (!base) throw new Error('API_NOT_CONFIGURED');

    const headers = new Headers(options.headers || {});
    headers.set('Accept', 'application/json');

    if (options.body && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    if (adminToken) {
      headers.set('Authorization', `Bearer ${adminToken}`);
    }

    const response = await fetch(`${base}${path}`, {
      ...options,
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      headers
    });

    let body = {};
    try {
      body = await response.json();
    } catch (_) {}

    if (!response.ok) {
      const error = new Error(body?.message || `HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }

    return body;
  }

  async function ensureAdmin() {
    if (!adminToken) {
      showPanel('login');
      return false;
    }

    try {
      await apiFetch('/api/admin/session');
      $('session-label').textContent = 'Cloudflare D1 관리자 세션으로 로그인되어 있습니다.';
      showPanel('dashboard');
      return true;
    } catch (error) {
      if (error?.status === 401 || error?.status === 403) {
        adminToken = '';
        sessionStorage.removeItem(TOKEN_KEY);
        showPanel('login');
        showMessage($('login-message'), '관리자 Access Key가 올바르지 않습니다.', 'error');
        return false;
      }
      throw error;
    }
  }

  async function loadConsultations() {
    showMessage($('dashboard-message'), '상담목록을 불러오는 중입니다.', 'success');

    const body = await apiFetch('/api/admin/consultations');
    consultations = Array.isArray(body?.data) ? body.data : [];

    showMessage($('dashboard-message'), '');
    updateStats();
    renderTable();
  }

  function updateStats() {
    $('stat-total').textContent = String(consultations.length);
    $('stat-new').textContent = String(consultations.filter((x) => x.status === '신규').length);
    $('stat-checking').textContent = String(consultations.filter((x) => x.status === '확인중').length);
    $('stat-consulting').textContent = String(consultations.filter((x) => x.status === '상담중').length);
    $('stat-done').textContent = String(consultations.filter((x) => x.status === '완료').length);
    $('stat-hold').textContent = String(consultations.filter((x) => x.status === '보류').length);
  }

  function filteredRows() {
    const q = ($('search-input').value || '').trim().toLowerCase();
    const status = $('status-filter').value;

    return consultations.filter((row) => {
      const statusMatch = status === '전체' || row.status === status;
      if (!statusMatch) return false;
      if (!q) return true;

      const haystack = [
        row.company,
        row.contact_name,
        row.email,
        row.phone,
        row.industry,
        row.topic,
        row.message,
        row.admin_note
      ].map((v) => String(v || '').toLowerCase()).join(' ');

      return haystack.includes(q);
    });
  }

  function renderTable() {
    const tbody = $('consultation-body');
    tbody.replaceChildren();

    const rows = filteredRows();
    $('result-count').textContent = `${rows.length}건`;

    if (!rows.length) {
      const tr = document.createElement('tr');
      const td = createCell('조건에 맞는 상담내역이 없습니다.', 'empty-cell');
      td.colSpan = 7;
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }

    rows.forEach((row) => {
      const tr = document.createElement('tr');
      tr.appendChild(createCell(formatDate(row.created_at), 'nowrap'));

      const company = document.createElement('td');
      const strong = document.createElement('strong');
      strong.textContent = row.company || '-';
      const small = document.createElement('small');
      small.textContent = row.industry || '';
      company.append(strong, small);
      tr.appendChild(company);

      const person = document.createElement('td');
      const pstrong = document.createElement('strong');
      pstrong.textContent = row.contact_name || '-';
      const psmall = document.createElement('small');
      psmall.textContent = row.email || '';
      person.append(pstrong, psmall);
      tr.appendChild(person);

      tr.appendChild(createCell(row.topic || '-'));

      const statusCell = document.createElement('td');
      statusCell.appendChild(statusBadge(row.status));
      tr.appendChild(statusCell);

      tr.appendChild(createCell(formatDate(row.updated_at), 'nowrap'));

      const action = document.createElement('td');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'detail-link button-link';
      button.textContent = '상세보기';
      button.addEventListener('click', () => openDetail(row.id));
      action.appendChild(button);
      tr.appendChild(action);

      tbody.appendChild(tr);
    });
  }

  function openDetail(id) {
    const row = consultations.find((item) => String(item.id) === String(id));
    if (!row) return;

    selectedId = row.id;
    $('detail-company').textContent = row.company || '상담 상세';
    $('detail-created').textContent = formatDate(row.created_at);
    $('detail-name').textContent = row.contact_name || '-';

    $('detail-email').replaceChildren();
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${row.email || ''}`;
    emailLink.textContent = row.email || '-';
    $('detail-email').appendChild(emailLink);

    $('detail-phone').replaceChildren();
    if (row.phone) {
      const phoneLink = document.createElement('a');
      phoneLink.href = `tel:${String(row.phone).replace(/[^0-9+]/g, '')}`;
      phoneLink.textContent = row.phone;
      $('detail-phone').appendChild(phoneLink);
    } else {
      $('detail-phone').textContent = '-';
    }

    $('detail-industry').textContent = row.industry || '-';
    $('detail-topic').textContent = row.topic || '-';
    $('detail-message').textContent = row.message || '-';
    $('detail-status').value = STATUSES.includes(row.status) ? row.status : '신규';
    $('detail-note').value = row.admin_note || '';

    showMessage($('detail-message-box'), '');
    $('detail-dialog').showModal();
  }

  async function saveSelected() {
    if (!selectedId) return;

    const status = $('detail-status').value;
    const adminNote = $('detail-note').value.trim();

    if (!STATUSES.includes(status)) return;

    $('save-button').disabled = true;
    showMessage($('detail-message-box'), '저장 중입니다.', 'success');

    try {
      const body = await apiFetch(`/api/admin/consultations/${encodeURIComponent(selectedId)}`, {
        method: 'PUT',
        body: JSON.stringify({
          status,
          admin_note: adminNote
        })
      });

      const row = consultations.find((item) => String(item.id) === String(selectedId));
      if (row) {
        row.status = status;
        row.admin_note = adminNote;
        row.updated_at = body?.updated_at || new Date().toISOString();
      }

      updateStats();
      renderTable();
      showMessage($('detail-message-box'), '변경사항을 저장했습니다.', 'success');
    } catch (error) {
      console.error(error);

      if (error?.status === 401 || error?.status === 403) {
        signOut();
        return;
      }

      showMessage($('detail-message-box'), '저장에 실패했습니다. 네트워크 상태를 확인해 주세요.', 'error');
    } finally {
      $('save-button').disabled = false;
    }
  }

  async function deleteSelected() {
    if (!selectedId) return;

    const row = consultations.find((item) => String(item.id) === String(selectedId));
    if (!window.confirm(`${row?.company || '이 상담'}의 상담내역을 정말 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.`)) {
      return;
    }

    $('delete-button').disabled = true;

    try {
      await apiFetch(`/api/admin/consultations/${encodeURIComponent(selectedId)}`, {
        method: 'DELETE'
      });

      consultations = consultations.filter((item) => String(item.id) !== String(selectedId));
      selectedId = null;
      $('detail-dialog').close();

      updateStats();
      renderTable();
      showMessage($('dashboard-message'), '상담내역을 삭제했습니다.', 'success');
    } catch (error) {
      console.error(error);

      if (error?.status === 401 || error?.status === 403) {
        signOut();
        return;
      }

      showMessage($('detail-message-box'), '삭제에 실패했습니다.', 'error');
    } finally {
      $('delete-button').disabled = false;
    }
  }

  function csvSafe(value) {
    let text = String(value ?? '').replace(/\r?\n/g, ' ');
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  function exportCsv() {
    const headers = [
      '접수일',
      '회사명',
      '담당자',
      '이메일',
      '연락처',
      '업종/공정',
      '상담분야',
      '문의내용',
      '상태',
      '관리자메모',
      '최종수정'
    ];

    const rows = consultations.map((row) => [
      formatDate(row.created_at),
      row.company,
      row.contact_name,
      row.email,
      row.phone,
      row.industry,
      row.topic,
      row.message,
      row.status,
      row.admin_note,
      formatDate(row.updated_at)
    ]);

    const csv = '\uFEFF' + [headers, ...rows]
      .map((row) => row.map(csvSafe).join(','))
      .join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = `energy-consultations-${new Date().toISOString().slice(0, 10)}.csv`;

    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function signOut() {
    adminToken = '';
    consultations = [];
    selectedId = null;
    sessionStorage.removeItem(TOKEN_KEY);
    showPanel('login');
  }

  async function init() {
    if (!apiBase()) {
      showPanel('config');
      return;
    }

    if (!adminToken) {
      showPanel('login');
      return;
    }

    try {
      const ok = await ensureAdmin();
      if (ok) await loadConsultations();
    } catch (error) {
      console.error(error);
      showPanel('login');
      showMessage($('login-message'), 'Cloudflare D1 상담 API 연결을 확인해 주세요.', 'error');
    }
  }

  $('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // 중요:
    // async/await 이후에는 event.currentTarget이 null이 될 수 있으므로
    // 시작 시점에 form 참조를 별도 변수로 보관합니다.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const token = String(formData.get('token') || '').trim();

    if (!token) {
      showMessage($('login-message'), '관리자 Access Key를 입력해 주세요.', 'error');
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;

    showMessage($('login-message'), '로그인 중입니다.', 'success');

    adminToken = token;

    try {
      await apiFetch('/api/admin/session');
      sessionStorage.setItem(TOKEN_KEY, adminToken);

      showPanel('dashboard');
      $('session-label').textContent = 'Cloudflare D1 관리자 세션으로 로그인되어 있습니다.';
      showMessage($('login-message'), '');

      await loadConsultations();

      // event.currentTarget.reset() 대신 저장해 둔 form 참조 사용
      form.reset();
    } catch (error) {
      console.error(error);
      adminToken = '';
      sessionStorage.removeItem(TOKEN_KEY);
      showPanel('login');

      if (error?.status === 401 || error?.status === 403) {
        showMessage($('login-message'), '관리자 Access Key가 올바르지 않습니다.', 'error');
      } else {
        showMessage($('login-message'), 'Cloudflare D1 상담 API 연결을 확인해 주세요.', 'error');
      }
    } finally {
      button.disabled = false;
    }
  });

  $('logout-button').addEventListener('click', signOut);
  $('denied-logout-button').addEventListener('click', signOut);

  $('refresh-button').addEventListener('click', () => {
    loadConsultations().catch((error) => {
      console.error(error);
      showMessage($('dashboard-message'), '상담목록을 새로고침하지 못했습니다.', 'error');
    });
  });

  $('search-input').addEventListener('input', renderTable);

  $('status-filter').addEventListener('change', () => {
    document.querySelectorAll('.stat-card').forEach((x) => {
      x.classList.toggle('active', x.dataset.status === $('status-filter').value);
    });
    renderTable();
  });

  $('filter-reset').addEventListener('click', () => {
    $('search-input').value = '';
    $('status-filter').value = '전체';

    document.querySelectorAll('.stat-card').forEach((x) => {
      x.classList.toggle('active', x.dataset.status === '전체');
    });

    renderTable();
  });

  document.querySelectorAll('.stat-card').forEach((button) => {
    button.addEventListener('click', () => {
      $('status-filter').value = button.dataset.status;

      document.querySelectorAll('.stat-card').forEach((x) => {
        x.classList.toggle('active', x === button);
      });

      renderTable();
    });
  });

  $('save-button').addEventListener('click', saveSelected);
  $('delete-button').addEventListener('click', deleteSelected);
  $('export-button').addEventListener('click', exportCsv);

  window.addEventListener('DOMContentLoaded', init, { once: true });
})();
