// ─────────────────────────────────────────────
// Auth Guard
// ─────────────────────────────────────────────
if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
    window.location.replace('admin-login.html');
}

const API_BASE = '/api';
let allSubmissions = [];
let allStudents = [];
let allSupport = [];

function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin-login.html';
}

// ─────────────────────────────────────────────
// Tab Navigation
// ─────────────────────────────────────────────
function switchDashTab(tab) {
    // Buttons
    document.querySelectorAll('.dash-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderBottomColor = 'transparent';
        btn.style.color = 'var(--text-muted)';
    });
    const activeBtn = document.getElementById(`tab-btn-${tab}`);
    activeBtn.classList.add('active');
    activeBtn.style.borderBottomColor = 'var(--accent)';
    activeBtn.style.color = 'var(--accent)';

    // Sections
    document.querySelectorAll('.dash-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(`section-${tab}`).style.display = 'block';
}

// ─────────────────────────────────────────────
// Load Dashboard Data
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    refreshDashboard();

    document.getElementById('clear-data-btn')?.addEventListener('click', () => {
        alert('⚠️ To clear data, manage collections directly in MongoDB Atlas or Compass.');
    });
});

async function refreshDashboard() {
    const subBody = document.getElementById('submissions-body');
    const stuBody = document.getElementById('students-body');

    // Initial loading state
    const loadingRow = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:30px;">⏳ Loading from database...</td></tr>`;
    subBody.innerHTML = loadingRow;
    stuBody.innerHTML = loadingRow;

    try {
        const [subRes, stuRes, supRes] = await Promise.all([
            fetch(`${API_BASE}/admin/submissions`),
            fetch(`${API_BASE}/admin/students`),
            fetch(`${API_BASE}/admin/support`),
        ]);

        allSubmissions = await subRes.json();
        allStudents = await stuRes.json();
        allSupport = await supRes.json();

        // Update Global Metrics
        document.getElementById('metric-total').innerText = allSubmissions.length;
        document.getElementById('metric-students').innerText = allStudents.length;
        document.getElementById('metric-pending').innerText = allSubmissions.filter(s => !s.reviewed).length;

        renderSubmissionsGrid();
        renderStudentsGrid();
        renderSupportGrid();

    } catch (err) {
        console.error(err);
        subBody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:#ef4444;padding:30px;">❌ Error connecting to server.</td></tr>`;
    }
}

// ── Render: Submissions Table ─────────────────────────
function renderSubmissionsGrid() {
    const tbody = document.getElementById('submissions-body');
    tbody.innerHTML = '';

    if (allSubmissions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:30px;">No submissions yet.</td></tr>`;
        return;
    }

    allSubmissions.forEach(sub => {
        const date = new Date(sub.submittedAt).toLocaleString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });

        // Links and File columns logic (same as before but cleaner)
        const linksHtml = buildLinksHtml(sub);
        const fileHtml = buildFileHtml(sub);

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <strong style="cursor:pointer;color:var(--accent)" onclick="openStudentDetail('${sub.studentEmail}')">${sub.studentName}</strong>
                <br><small style="color:var(--text-muted)">${sub.studentEmail}</small>
            </td>
            <td><span class="day-pill">Day ${sub.day}</span></td>
            <td>${sub.title}</td>
            <td>${linksHtml}</td>
            <td>${fileHtml}</td>
            <td style="color:var(--text-muted);font-size:0.82rem">${date}</td>
            <td>
                <span id="status-badge-${sub._id}" class="status-badge ${sub.reviewed ? 'status-completed' : 'status-review'}" style="font-size:0.75rem">
                    ${sub.reviewed ? 'Reviewed' : 'Awaiting Review'}
                </span>
                ${!sub.reviewed ? `<br><button class="action-btn" style="margin-top:8px;background:var(--accent);font-size:0.75rem" onclick="markReviewed('${sub._id}', event)">Mark Reviewed</button>` : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ── Render: Registered Students Table ──────────────────
function renderStudentsGrid() {
    const tbody = document.getElementById('students-body');
    tbody.innerHTML = '';

    if (allStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:30px;">No registered students yet.</td></tr>`;
        return;
    }

    allStudents.forEach(stu => {
        const joined = new Date(stu.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const subCount = allSubmissions.filter(s => s.studentEmail === stu.studentEmail).length;
        const compCount = stu.progress.filter(p => p.completed).length;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong style="font-size:1.05rem;color:var(--text-bright)">${stu.studentName}</strong></td>
            <td>${stu.studentEmail}</td>
            <td><span style="font-weight:700">${subCount}</span> tasks</td>
            <td><span class="status-badge status-completed">${compCount} / 17</span></td>
            <td style="color:var(--text-muted)">${joined}</td>
            <td>
                <button class="action-btn" style="background:#4f46e5;padding:10px 16px;" onclick="openStudentDetail('${stu.studentEmail}')">👁️ View Full Profile</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ── Render: Support Requests Table ────────────────────
function renderSupportGrid() {
    const tbody = document.getElementById('support-body');
    tbody.innerHTML = '';

    if (allSupport.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:30px;">No support messages yet.</td></tr>`;
        return;
    }

    allSupport.forEach(item => {
        const date = new Date(item.submittedAt).toLocaleString('en-IN', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
        });

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <strong style="color:var(--text-bright)">${item.studentName}</strong>
                <br><small style="color:var(--text-muted)">${item.studentEmail}</small>
            </td>
            <td><span style="font-weight:700;color:var(--indigo-light)">${item.subject}</span></td>
            <td><div style="max-width:300px; font-size:0.85rem; color:var(--text-main); white-space:pre-wrap;">${item.message}</div></td>
            <td style="color:var(--text-muted);font-size:0.82rem">${date}</td>
            <td>
                <span id="support-status-${item._id}" class="status-badge ${item.status === 'resolved' ? 'status-completed' : 'status-review'}">
                    ${item.status === 'resolved' ? 'Resolved' : 'Open'}
                </span>
            </td>
            <td>
                ${item.status !== 'resolved' ? `<button class="action-btn" style="background:var(--grad-emerald); font-size:0.75rem" onclick="resolveSupport('${item._id}')">Resolve ✓</button>` : '—'}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ── Helper: Build Links & Files ────────────────────────
function buildLinksHtml(sub) {
    let html = '';
    if (sub.taskLink) html += `<a href="${sub.taskLink}" target="_blank" class="action-btn" style="text-decoration:none;display:inline-block;padding:6px 10px;font-size:0.7rem;margin-bottom:4px;">🔗 Live Demo</a><br>`;
    if (sub.githubLink) html += `<a href="${sub.githubLink}" target="_blank" class="action-btn" style="text-decoration:none;background:#24292f;display:inline-block;padding:6px 10px;font-size:0.7rem;margin-bottom:4px;">🐙 GitHub</a><br>`;
    return html || `<span style="color:var(--text-muted);font-size:0.8rem">—</span>`;
}

function buildFileHtml(sub) {
    if (!sub.fileUrl) return `<span style="color:var(--text-muted);font-size:0.8rem">—</span>`;
    if (sub.fileType === 'image') return `<a href="${sub.fileUrl}" target="_blank"><img src="${sub.fileUrl}" style="width:48px;height:48px;border-radius:8px;border:1px solid #ddd;object-fit:cover;"></a>`;
    return `<a href="${sub.fileUrl}" target="_blank" class="action-btn" style="text-decoration:none;padding:6px 10px;font-size:0.7rem;background:#475569">📄 View PDF</a>`;
}

// ─────────────────────────────────────────────
// Student Detail Modal Logic
// ─────────────────────────────────────────────
function openStudentDetail(email) {
    const stu = allStudents.find(s => s.studentEmail === email);
    if (!stu) return;

    const modal = document.getElementById('student-detail-modal');
    modal.classList.add('show');

    // Basic Info
    document.getElementById('sd-avatar').innerText = stu.studentName.charAt(0).toUpperCase();
    document.getElementById('sd-name').innerText = stu.studentName;
    document.getElementById('sd-email').innerText = stu.studentEmail;
    document.getElementById('sd-phone').innerText = stu.phone || 'Not provided';
    document.getElementById('sd-joined').innerText = new Date(stu.createdAt).toLocaleDateString();

    // Progress
    const completedCount = stu.progress.filter(p => p.completed).length;
    const pct = Math.round((completedCount / 17) * 100);
    document.getElementById('sd-progress-fill').style.width = `${pct}%`;
    document.getElementById('sd-progress-pct').innerText = `${pct}%`;

    // Tasks Breakdown
    const listBody = document.getElementById('sd-task-list');
    listBody.innerHTML = '';

    // Day 1-15 loop
    for (let day = 1; day <= 17; day++) {
        const prog = stu.progress.find(p => p.day === day);
        const sub = allSubmissions.find(s => s.studentEmail === email && s.day === day);

        const dayDiv = document.createElement('div');
        dayDiv.style = `padding:20px; border-radius:12px; border:1px solid var(--border-glass); background:${prog?.completed ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)'}; position:relative;`;

        let statusBadge = `<span class="status-badge status-pending">Not Started</span>`;
        if (prog?.completed) statusBadge = `<span class="status-badge status-completed">Completed ✓</span>`;
        else if (prog?.submitted) statusBadge = `<span class="status-badge status-review">Under Review</span>`;

        let contentHtml = `<p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px;">No submission data for this day.</p>`;

        if (sub) {
            contentHtml = `
                <div style="margin-top:12px; display:flex; flex-wrap:wrap; gap:12px;">
                    ${sub.taskLink ? `<a href="${sub.taskLink}" target="_blank" style="font-size:0.8rem;text-decoration:none;color:var(--accent);font-weight:700">🔗 Link</a>` : ''}
                    ${sub.githubLink ? `<a href="${sub.githubLink}" target="_blank" style="font-size:0.8rem;text-decoration:none;color:#0f172a;font-weight:700">🐙 GitHub</a>` : ''}
                    ${sub.fileUrl ? `<a href="${sub.fileUrl}" target="_blank" style="font-size:0.8rem;text-decoration:none;color:#ef4444;font-weight:700">${sub.fileType === 'pdf' ? '📄 PDF' : '🖼️ Image'}</a>` : ''}
                </div>
                ${sub.notes ? `<p style="font-size:0.85rem;color:var(--text-muted);margin-top:8px;background:#f8fafc;padding:8px;border-radius:6px;">"${sub.notes}"</p>` : ''}
            `;
        }

        dayDiv.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h5 style="font-weight:800; font-size:1rem;">Day ${day}</h5>
                ${statusBadge}
            </div>
            ${contentHtml}
        `;
        listBody.appendChild(dayDiv);
    }
}

function closeStudentDetail() {
    document.getElementById('student-detail-modal').classList.remove('show');
}

// ─────────────────────────────────────────────
// Mark Reviewed Action
// ─────────────────────────────────────────────
async function markReviewed(id, e) {
    if (e) e.stopPropagation();
    try {
        const res = await fetch(`${API_BASE}/admin/submissions/${id}/review`, { method: 'PATCH' });
        if (res.ok) {
            const badge = document.getElementById(`status-badge-${id}`);
            if (badge) {
                badge.className = 'status-badge status-completed';
                badge.innerText = 'Reviewed';
                badge.nextElementSibling?.remove(); // remove button
            }
            // Update metrics immediately
            const pending = document.getElementById('metric-pending');
            if (pending) pending.innerText = Math.max(0, parseInt(pending.innerText) - 1);

            // Re-fetch in background to update local student data
            const stuRes = await fetch(`${API_BASE}/admin/students`);
            allStudents = await stuRes.json();
            renderStudentsGrid();
        }
    } catch {
        alert('❌ Error updating submission.');
    }
}
async function resolveSupport(id) {
    try {
        const res = await fetch(`${API_BASE}/admin/support/${id}/resolve`, { method: 'PATCH' });
        if (res.ok) {
            const badge = document.getElementById(`support-status-${id}`);
            if (badge) {
                badge.className = 'status-badge status-completed';
                badge.innerText = 'Resolved';
                badge.closest('tr').querySelector('button')?.remove();
            }
        }
    } catch {
        alert('❌ Error resolving request.');
    }
}
