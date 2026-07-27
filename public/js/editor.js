'use strict';

const DRAFT_KEY = 'papan-jadwal:editorDraft';
const DAYS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const CYCLES = ['siklus1', 'siklus2'];

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function showGlobalMsg(text) {
  const el = document.getElementById('globalMsg');
  el.textContent = text;
  el.className = 'msg ok';
  setTimeout(() => { el.textContent = ''; el.className = 'msg'; }, 2500);
}

// ---- Working copy: rooms & slots tetap dari data.js (tata letak denah),
// classes/teachers/subjects/schedule bisa diedit & tersimpan sebagai draft. ----
let DRAFT;
try {
  const saved = localStorage.getItem(DRAFT_KEY);
  DRAFT = saved ? JSON.parse(saved) : null;
} catch (_) { DRAFT = null; }

if (!DRAFT) {
  DRAFT = {
    classes: JSON.parse(JSON.stringify(window.SCHOOL_DATA.classes)),
    teachers: JSON.parse(JSON.stringify(window.SCHOOL_DATA.teachers)),
    subjects: JSON.parse(JSON.stringify(window.SCHOOL_DATA.subjects)),
    schedule: JSON.parse(JSON.stringify(window.SCHOOL_DATA.schedule)),
  };
}

function persistDraft() {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(DRAFT)); } catch (_) { /* abaikan kalau penuh/diblokir */ }
}

function nextId(list) {
  return list.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

/* ================= KELAS ================= */
function renderClassList() {
  const list = document.getElementById('classList');
  list.innerHTML = DRAFT.classes.map((c) => `
    <li>
      <span>${escapeHtml(c.name)}</span>
      <button class="btn danger" data-del-class="${c.id}" type="button">Hapus</button>
    </li>`).join('') || '<li><span class="meta">Belum ada kelas.</span></li>';

  list.querySelectorAll('[data-del-class]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.delClass);
      DRAFT.classes = DRAFT.classes.filter((c) => c.id !== id);
      delete DRAFT.schedule[id];
      persistDraft();
      renderClassList();
      renderScheduleClassSelect();
    });
  });
}

document.getElementById('addClassBtn').addEventListener('click', () => {
  const name = document.getElementById('newClassName').value.trim();
  if (!name) return;
  DRAFT.classes.push({ id: nextId(DRAFT.classes), name });
  document.getElementById('newClassName').value = '';
  persistDraft();
  renderClassList();
  renderScheduleClassSelect();
  showGlobalMsg('Kelas ditambahkan.');
});

/* ================= GURU ================= */
function populateRoomSelect() {
  const opts = window.SCHOOL_DATA.rooms.map((r) => `<option value="${r.id}">${escapeHtml(r.label)}</option>`).join('');
  document.getElementById('newTeacherRoom').innerHTML = opts;
  document.getElementById('newSubjLightRoom').innerHTML = '<option value="">— tidak ada —</option>' + opts;
}

function renderTeacherList() {
  const roomsById = Object.fromEntries(window.SCHOOL_DATA.rooms.map((r) => [r.id, r]));
  const list = document.getElementById('teacherList');
  list.innerHTML = DRAFT.teachers.map((t) => `
    <li>
      <span>${escapeHtml(t.name)} <span class="meta">→ ${escapeHtml((roomsById[t.roomId] || {}).label || t.roomId)}</span></span>
      <button class="btn danger" data-del-teacher="${t.id}" type="button">Hapus</button>
    </li>`).join('') || '<li><span class="meta">Belum ada guru.</span></li>';

  list.querySelectorAll('[data-del-teacher]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.delTeacher);
      DRAFT.teachers = DRAFT.teachers.filter((t) => t.id !== id);
      persistDraft();
      renderTeacherList();
      renderEditorTable();
    });
  });
}

document.getElementById('addTeacherBtn').addEventListener('click', () => {
  const name = document.getElementById('newTeacherName').value.trim();
  const roomId = document.getElementById('newTeacherRoom').value;
  if (!name || !roomId) return;
  DRAFT.teachers.push({ id: nextId(DRAFT.teachers), name, roomId });
  document.getElementById('newTeacherName').value = '';
  persistDraft();
  renderTeacherList();
  renderEditorTable();
  showGlobalMsg('Guru ditambahkan.');
});

/* ================= MAPEL ================= */
function renderSubjList() {
  const roomsById = Object.fromEntries(window.SCHOOL_DATA.rooms.map((r) => [r.id, r]));
  const list = document.getElementById('subjList');
  list.innerHTML = DRAFT.subjects.map((s) => `
    <li>
      <span>${escapeHtml(s.code)} <span class="meta">— ${escapeHtml(s.name || '(tanpa nama)')}${s.lightRoomId ? ' · ' + escapeHtml((roomsById[s.lightRoomId] || {}).label || s.lightRoomId) : ''}</span></span>
      <button class="btn danger" data-del-subj="${escapeHtml(s.code)}" type="button">Hapus</button>
    </li>`).join('') || '<li><span class="meta">Belum ada mapel.</span></li>';

  list.querySelectorAll('[data-del-subj]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.delSubj;
      DRAFT.subjects = DRAFT.subjects.filter((s) => s.code !== code);
      persistDraft();
      renderSubjList();
      renderEditorTable();
    });
  });
}

document.getElementById('addSubjBtn').addEventListener('click', () => {
  const code = document.getElementById('newSubjCode').value.trim();
  const name = document.getElementById('newSubjName').value.trim();
  const lightRoomId = document.getElementById('newSubjLightRoom').value || undefined;
  if (!code) return;
  DRAFT.subjects = DRAFT.subjects.filter((s) => s.code !== code);
  const entry = { code, name };
  if (lightRoomId) entry.lightRoomId = lightRoomId;
  DRAFT.subjects.push(entry);
  document.getElementById('newSubjCode').value = '';
  document.getElementById('newSubjName').value = '';
  document.getElementById('newSubjLightRoom').value = '';
  persistDraft();
  renderSubjList();
  renderEditorTable();
  showGlobalMsg('Mapel disimpan.');
});

/* ================= JADWAL ================= */
function renderScheduleClassSelect() {
  const sel = document.getElementById('scheduleClassSelect');
  const prev = sel.value;
  sel.innerHTML = DRAFT.classes.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  if (prev && DRAFT.classes.some((c) => String(c.id) === prev)) sel.value = prev;
  renderEditorTable();
}

document.getElementById('scheduleClassSelect').addEventListener('change', renderEditorTable);
document.getElementById('scheduleCycleSelect').addEventListener('change', renderEditorTable);

function renderEditorTable() {
  const table = document.getElementById('editorTable');
  const classId = Number(document.getElementById('scheduleClassSelect').value);
  const cycle = document.getElementById('scheduleCycleSelect').value;
  if (!classId) { table.innerHTML = ''; return; }

  if (!DRAFT.schedule[classId]) DRAFT.schedule[classId] = {};
  if (!DRAFT.schedule[classId][cycle]) DRAFT.schedule[classId][cycle] = {};
  const classSchedule = DRAFT.schedule[classId][cycle];

  const subjOptions = ['<option value="">— kosong —</option>']
    .concat(DRAFT.subjects.map((s) => `<option value="${escapeHtml(s.code)}">${escapeHtml(s.code)}</option>`))
    .join('');
  const teacherOptions = ['<option value="">— tanpa guru —</option>']
    .concat(DRAFT.teachers.map((t) => `<option value="${t.id}">${escapeHtml(t.name)}</option>`))
    .join('');

  let html = '<thead><tr><th>Jam</th>';
  DAYS.forEach((d) => { html += `<th>${d}</th>`; });
  html += '</tr></thead><tbody>';

  window.SCHOOL_DATA.slots.forEach((s) => {
    if (s.key === 'upacara' || s.key === 'istirahat' || s.key === 'ishoma') return; // jam istirahat, tidak diisi
    html += `<tr><th>${escapeHtml(s.label)}<br><span style="opacity:.6">${s.start}–${s.end}</span></th>`;
    DAYS.forEach((d) => {
      const entry = (classSchedule[d] || {})[s.key];
      const currentSubj = entry ? entry.subject || '' : '';
      const currentTeacher = entry && entry.teacher != null ? entry.teacher : '';
      html += `<td>
        <select class="cell-subj" data-day="${d}" data-slot="${s.key}">${subjOptions}</select>
        <select class="cell-teacher" data-day="${d}" data-slot="${s.key}" style="margin-top:3px;">${teacherOptions}</select>
      </td>`;
      window.__pending = window.__pending || [];
      window.__pending.push({ day: d, slot: s.key, subj: currentSubj, teacher: currentTeacher });
    });
    html += '</tr>';
  });
  html += '</tbody>';
  table.innerHTML = html;

  const pending = window.__pending || [];
  window.__pending = [];
  pending.forEach(({ day, slot, subj, teacher }) => {
    const subjSel = table.querySelector(`.cell-subj[data-day="${day}"][data-slot="${slot}"]`);
    const teacherSel = table.querySelector(`.cell-teacher[data-day="${day}"][data-slot="${slot}"]`);
    if (subjSel) subjSel.value = subj;
    if (teacherSel) teacherSel.value = teacher;
  });

  table.querySelectorAll('select').forEach((sel) => {
    sel.addEventListener('change', () => saveCell(classId, cycle, sel.dataset.day, sel.dataset.slot, table));
  });
}

function saveCell(classId, cycle, day, slotKey, table) {
  const subjSel = table.querySelector(`.cell-subj[data-day="${day}"][data-slot="${slotKey}"]`);
  const teacherSel = table.querySelector(`.cell-teacher[data-day="${day}"][data-slot="${slotKey}"]`);
  const subject = subjSel.value || null;
  const teacher = teacherSel.value ? Number(teacherSel.value) : null;

  if (!DRAFT.schedule[classId]) DRAFT.schedule[classId] = {};
  if (!DRAFT.schedule[classId][cycle]) DRAFT.schedule[classId][cycle] = {};
  if (!DRAFT.schedule[classId][cycle][day]) DRAFT.schedule[classId][cycle][day] = {};

  if (!subject) {
    delete DRAFT.schedule[classId][cycle][day][slotKey];
  } else {
    DRAFT.schedule[classId][cycle][day][slotKey] = { subject, teacher };
  }
  persistDraft();
}

/* ================= EXPORT ================= */
function buildDataJsText() {
  const roomsText = JSON.stringify(window.SCHOOL_DATA.rooms, null, 2);
  const slotsText = JSON.stringify(window.SCHOOL_DATA.slots, null, 2);
  const classesText = JSON.stringify(DRAFT.classes, null, 2);
  const teachersText = JSON.stringify(DRAFT.teachers, null, 2);
  const subjectsText = JSON.stringify(DRAFT.subjects, null, 2);
  const scheduleText = JSON.stringify(DRAFT.schedule, null, 2);

  return `// File ini dibuat otomatis oleh editor.html — jangan edit manual di tengah
// kecuali kamu tahu formatnya. Untuk mengubah data, pakai editor.html lagi.

window.SCHOOL_DATA = {
  rooms: ${roomsText},
  slots: ${slotsText},
  classes: ${classesText},
  teachers: ${teachersText},
  subjects: ${subjectsText},
  schedule: ${scheduleText},
};
`;
}

document.getElementById('buildOutputBtn').addEventListener('click', () => {
  document.getElementById('outputBox').value = buildDataJsText();
  showGlobalMsg('Kode dibuat — salin atau download di bawah.');
});

document.getElementById('copyOutputBtn').addEventListener('click', async () => {
  const box = document.getElementById('outputBox');
  if (!box.value) { document.getElementById('buildOutputBtn').click(); }
  try {
    await navigator.clipboard.writeText(box.value);
    showGlobalMsg('Tersalin ke clipboard.');
  } catch (_) {
    box.select();
    showGlobalMsg('Tap & tahan lalu pilih "Salin" secara manual.');
  }
});

document.getElementById('downloadOutputBtn').addEventListener('click', () => {
  const box = document.getElementById('outputBox');
  if (!box.value) { document.getElementById('buildOutputBtn').click(); }
  const blob = new Blob([document.getElementById('outputBox').value], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

/* ================= INIT ================= */
populateRoomSelect();
renderClassList();
renderTeacherList();
renderSubjList();
renderScheduleClassSelect();
