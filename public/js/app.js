'use strict';

const SELECTED_CLASS_KEY = 'papan-jadwal:selectedClassId';
const SELECTED_CYCLE_KEY = 'papan-jadwal:selectedCycle';
const DAYS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

const CAT_COLOR = {
  tkj:'var(--c-tkj)', pjok:'var(--c-pjok)', kik:'var(--c-kik)', pipas:'var(--c-pipas)',
  bindo:'var(--c-bindo)', mtk:'var(--c-mtk)', ap:'var(--c-ap)', aphp:'var(--c-aphp)',
  tp:'var(--c-tp)', tkr:'var(--c-tkr)', bing:'var(--c-bing)', k3:'var(--c-k3)',
  agama:'var(--c-agama)', info:'var(--c-info)', none:'var(--c-none)'
};

const CAMPUS_TEMPLATE = `
  "k20     kolam1 k19      k18    urs  k17 labinfo guru  toilet1 rapat  rpstkj"
  "k21     kolam1 .        .      lap  lap lap     lap   lap     lap   bkk"
  "k22     koperasi perpus .      lap  lap lap     lap   lap     lap   k1"
  "k23     kolam2 toilet2  labipa lap  lap lap     lap   lap     lap   k2"
  "toilet3 .      k8       k7     k6   k5  k4      k3    coe     coe   coe"
  "tpa     rpstkr k16      k15    k14  k13 k12     bkuks k11     k10   k9"
  "kolam3  rencanaap rpsaphp rpstp k24 toilet4 rpsap ruangserba kepsek gudang tu"
`;

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

// Siklus 1 = Juli-September, Siklus 2 = Oktober-Desember.
// Di luar rentang itu (Jan-Jun) belum ada data — pakai Siklus 2 sebagai fallback.
function autoDetectCycle() {
  const month = new Date().getMonth() + 1; // 1-12
  if (month >= 7 && month <= 9) return 'siklus1';
  if (month >= 10 && month <= 12) return 'siklus2';
  return 'siklus2';
}

const DATA = window.SCHOOL_DATA;
const roomsById = Object.fromEntries(DATA.rooms.map((r) => [r.id, r]));
const teachersById = Object.fromEntries(DATA.teachers.map((t) => [t.id, t]));
const subjectsByCode = Object.fromEntries(DATA.subjects.map((s) => [s.code, s]));

let SELECTED_CLASS_ID = null;
let SELECTED_CYCLE = null;

/* ================= CLOCK ================= */
function tickClock() {
  const now = new Date();
  document.getElementById('clockTime').textContent = now.toLocaleTimeString('id-ID');
  document.getElementById('clockDate').textContent = now.toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* ================= CLASS PICKER (sheet + search + grade tabs) ================= */
function classGrade(name) {
  const first = String(name).trim().split(/\s+/)[0] || '';
  if (first === 'XII') return 'XII';
  if (first === 'XI') return 'XI';
  if (first === 'X') return 'X';
  return 'Lainnya';
}

function updateClassPickerLabel() {
  const label = document.getElementById('classPickerLabel');
  if (!label) return;
  const cls = DATA.classes.find((c) => c.id === SELECTED_CLASS_ID);
  label.textContent = cls ? cls.name : 'Pilih kelas';
}

function renderClassSheetList(activeTab, query) {
  const listEl = document.getElementById('classList');
  const q = (query || '').trim().toLowerCase();
  const filtered = DATA.classes.filter((c) => {
    const matchesTab = activeTab === 'Semua' || classGrade(c.name) === activeTab;
    const matchesQuery = !q || c.name.toLowerCase().includes(q);
    return matchesTab && matchesQuery;
  });
  if (!filtered.length) {
    listEl.innerHTML = '<div class="class-sheet-empty">Tidak ada kelas yang cocok.</div>';
    return;
  }
  listEl.innerHTML = filtered.map((c) => `
    <button type="button" data-id="${c.id}" class="${c.id === SELECTED_CLASS_ID ? 'active' : ''}">${escapeHtml(c.name)}</button>
  `).join('');
  listEl.querySelectorAll('button[data-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      SELECTED_CLASS_ID = Number(btn.dataset.id);
      try { localStorage.setItem(SELECTED_CLASS_KEY, String(SELECTED_CLASS_ID)); } catch (_) { /* abaikan */ }
      updateClassPickerLabel();
      closeClassSheet();
      renderAll();
    });
  });
}

function closeClassSheet() {
  const backdrop = document.getElementById('classSheetBackdrop');
  const btn = document.getElementById('classPickerBtn');
  if (!backdrop) return;
  backdrop.hidden = true;
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function openClassSheet() {
  const backdrop = document.getElementById('classSheetBackdrop');
  const btn = document.getElementById('classPickerBtn');
  const search = document.getElementById('classSearch');
  if (!backdrop) return;
  backdrop.hidden = false;
  if (btn) btn.setAttribute('aria-expanded', 'true');
  if (search) { search.value = ''; setTimeout(() => search.focus(), 30); }
  const activeTabBtn = document.querySelector('#classTabs button.active');
  renderClassSheetList(activeTabBtn ? activeTabBtn.dataset.tab : 'Semua', '');
}

function renderClassPicker() {
  const grades = ['Semua', 'X', 'XI', 'XII'];
  const tabsEl = document.getElementById('classTabs');
  tabsEl.innerHTML = grades.map((g, i) => `
    <button type="button" data-tab="${g}" class="${i === 0 ? 'active' : ''}">${g}</button>
  `).join('');
  tabsEl.querySelectorAll('button').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      tabsEl.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      tabBtn.classList.add('active');
      renderClassSheetList(tabBtn.dataset.tab, document.getElementById('classSearch').value);
    });
  });

  document.getElementById('classSearch').addEventListener('input', (e) => {
    const activeTabBtn = document.querySelector('#classTabs button.active');
    renderClassSheetList(activeTabBtn ? activeTabBtn.dataset.tab : 'Semua', e.target.value);
  });

  document.getElementById('classPickerBtn').addEventListener('click', openClassSheet);
  document.getElementById('classSheetClose').addEventListener('click', closeClassSheet);
  document.getElementById('classSheetBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'classSheetBackdrop') closeClassSheet();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeClassSheet();
  });

  updateClassPickerLabel();
}

/* ================= CYCLE PICKER (segmented toggle) ================= */
function renderCyclePicker() {
  const toggle = document.getElementById('cycleToggle');
  if (!toggle) return;
  const buttons = toggle.querySelectorAll('button[data-cycle]');
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.cycle === SELECTED_CYCLE);
    btn.addEventListener('click', () => {
      SELECTED_CYCLE = btn.dataset.cycle;
      try { localStorage.setItem(SELECTED_CYCLE_KEY, SELECTED_CYCLE); } catch (_) { /* abaikan */ }
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      renderAll();
    });
  });
}

/* ================= LEGEND ================= */
function renderLegend() {
  const seen = new Set();
  const legendEl = document.getElementById('mapLegend');
  legendEl.innerHTML = '';
  DATA.rooms.forEach((r) => {
    if (!r.category || seen.has(r.category)) return;
    seen.add(r.category);
    const chip = document.createElement('div');
    chip.className = 'legend-chip';
    chip.innerHTML = `<i style="background:${CAT_COLOR[r.category] || CAT_COLOR.none}"></i>${escapeHtml(r.label)}`;
    legendEl.appendChild(chip);
  });
}

/* ================= MAP ================= */
function renderMap(activeRoomIds) {
  const campusEl = document.getElementById('campus');
  campusEl.innerHTML = '';
  campusEl.style.gridTemplateAreas = CAMPUS_TEMPLATE;

  DATA.rooms.forEach((r) => {
    const active = activeRoomIds.includes(r.id);
    const cell = document.createElement('div');
    let cls = 'campus-area';
    if (r.id === 'lap') cls += ' lapangan';
    else if (r.id.startsWith('kolam')) cls += ' kolam';
    else if (r.isFacility) cls += ' facility';
    else cls += ' classroom';
    if (active) cls += ' active';
    cell.className = cls;
    cell.style.setProperty('--area', r.gridArea);

    if (r.category && !r.isFacility && !active) {
      cell.style.background = `linear-gradient(160deg, ${CAT_COLOR[r.category] || CAT_COLOR.none}33, #341f11 55%)`;
    }

    cell.innerHTML = `<div class="roof"></div><div class="rname">${escapeHtml(r.label)}</div>`;
    campusEl.appendChild(cell);
  });
}

/* ================= SCHEDULE TABLE ================= */
function entryLabel(entry) {
  if (!entry || !entry.subject) return null;
  const teacher = entry.teacher != null ? teachersById[entry.teacher] : null;
  if (entry.subject === 'WALI' && !teacher) return null; // wali kelas belum ditentukan -> kosongkan
  return teacher ? `${entry.subject} · ${teacher.name}` : entry.subject;
}

function getClassSchedule(classId, cycle) {
  return ((DATA.schedule[classId] || {})[cycle] || {});
}

function renderTable(highlightDay, highlightSlotKey) {
  const classSchedule = getClassSchedule(SELECTED_CLASS_ID, SELECTED_CYCLE);
  const table = document.getElementById('scheduleTable');

  let html = '<thead><tr><th>Jam</th>';
  DAYS.forEach((d) => {
    html += `<th class="${d === highlightDay ? 'day-col-now' : ''}">${escapeHtml(d)}</th>`;
  });
  html += '</tr></thead><tbody>';

  DATA.slots.forEach((s) => {
    const isNowRow = s.key === highlightSlotKey;
    html += `<tr class="${isNowRow ? 'now-row' : ''}"><th>${escapeHtml(s.label)}<br><span style="color:#5c7089">${s.start}–${s.end}</span></th>`;
    DAYS.forEach((d) => {
      const entry = (classSchedule[d] || {})[s.key];
      const isNowCell = isNowRow && d === highlightDay;
      const label = entryLabel(entry);
      if (!label) {
        html += `<td class="${isNowCell ? 'now-cell' : ''}">—</td>`;
      } else {
        html += `<td class="${isNowCell ? 'now-cell' : ''}">${escapeHtml(label)}</td>`;
      }
    });
    html += '</tr>';
  });
  html += '</tbody>';
  table.innerHTML = html;
}

/* ================= LIVE STATUS ================= */
function computeLive() {
  const now = new Date();
  const jsDay = now.getDay(); // 0=Minggu .. 6=Sabtu
  if (jsDay === 0 || jsDay === 6) return { day: null };

  const day = DAYS[jsDay - 1];
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const slot = DATA.slots.find((s) => nowMinutes >= toMinutes(s.start) && nowMinutes < toMinutes(s.end));
  if (!slot) return { day, slot: null };

  const classSchedule = getClassSchedule(SELECTED_CLASS_ID, SELECTED_CYCLE);
  const entry = (classSchedule[day] || {})[slot.key];
  if (!entry || !entry.subject) return { day, slot, entry: null };

  const subj = subjectsByCode[entry.subject];
  const teacher = entry.teacher != null ? teachersById[entry.teacher] : null;
  let room = teacher ? roomsById[teacher.roomId] : null;
  if (!room && subj && subj.lightRoomId) room = roomsById[subj.lightRoomId];

  return { day, slot, entry, subj, teacher, room };
}

function renderStatus(live) {
  const mapelEl = document.getElementById('statusMapel');
  const subEl = document.getElementById('statusSub');
  const roomEl = document.getElementById('statusRoom');
  const timeEl = document.getElementById('statusTime');
  const className = (DATA.classes.find((c) => c.id === SELECTED_CLASS_ID) || {}).name || '';

  if (!live.day) {
    mapelEl.textContent = 'Akhir pekan';
    subEl.textContent = 'Tidak ada jadwal pelajaran hari ini.';
    roomEl.textContent = 'Ruang —';
    timeEl.textContent = '--:-- – --:--';
    return [];
  }
  if (!live.slot) {
    mapelEl.textContent = 'Di luar jam pelajaran';
    subEl.textContent = `${live.day} · belum masuk jam berapapun`;
    roomEl.textContent = 'Ruang —';
    timeEl.textContent = '--:-- – --:--';
    return [];
  }
  if (!live.entry) {
    mapelEl.textContent = live.slot.label;
    subEl.textContent = `${live.day} · kegiatan tanpa jam mapel tetap`;
    roomEl.textContent = 'Ruang —';
    timeEl.textContent = `${live.slot.start} – ${live.slot.end}`;
    return [];
  }

  const subjName = (live.subj && live.subj.name) || live.entry.subject;
  mapelEl.textContent = subjName;
  subEl.textContent = live.teacher
    ? `${live.day} · ${live.slot.label} · ${className} · Guru: ${live.teacher.name}`
    : `${live.day} · ${live.slot.label} · ${className}`;
  timeEl.textContent = `${live.slot.start} – ${live.slot.end}`;

  if (live.room) {
    roomEl.textContent = live.room.label;
    return [live.room.id];
  }
  roomEl.textContent = 'Ruang tidak tetap';
  return [];
}

/* ================= RENDER ALL ================= */
function renderAll() {
  const cls = DATA.classes.find((c) => c.id === SELECTED_CLASS_ID);
  const cycleLabel = SELECTED_CYCLE === 'siklus1' ? 'Siklus 1 (Jul-Sep)' : 'Siklus 2 (Okt-Des)';
  document.getElementById('brandSub').textContent = cls ? `Sekolah · ${cls.name} · ${cycleLabel}` : 'Sekolah';
  document.getElementById('tableTitle').textContent = cls ? `Jadwal Minggu Ini — ${cls.name} · ${cycleLabel}` : 'Jadwal Minggu Ini';

  const live = computeLive();
  const activeRooms = renderStatus(live);
  renderMap(activeRooms);
  renderTable(live.day, live.slot ? live.slot.key : null);
}

/* ================= INIT ================= */
function init() {
  tickClock();
  setInterval(tickClock, 1000);

  if (!DATA.classes.length) {
    document.querySelector('.wrap').insertAdjacentHTML('afterbegin',
      '<div class="error-banner">Belum ada kelas di js/data.js. Tambahkan lewat editor.html.</div>');
    return;
  }

  let storedId = null;
  try { storedId = Number(localStorage.getItem(SELECTED_CLASS_KEY)); } catch (_) { /* abaikan */ }
  SELECTED_CLASS_ID = DATA.classes.some((c) => c.id === storedId) ? storedId : DATA.classes[0].id;

  let storedCycle = null;
  try { storedCycle = localStorage.getItem(SELECTED_CYCLE_KEY); } catch (_) { /* abaikan */ }
  SELECTED_CYCLE = (storedCycle === 'siklus1' || storedCycle === 'siklus2') ? storedCycle : autoDetectCycle();

  renderClassPicker();
  renderCyclePicker();
  renderLegend();
  renderAll();
  setInterval(renderAll, 15000);
}

document.addEventListener('DOMContentLoaded', init);
