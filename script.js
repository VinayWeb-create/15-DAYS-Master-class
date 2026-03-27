// ─────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────
const API_BASE = '/api';

const curriculum = [
    { day: 1, title: 'HTML Basics', desc: 'Introduction to Web, Tags, and building your first page.' },
    { day: 2, title: 'Advanced HTML', desc: 'Forms, Tables, and Semantic layouts.' },
    { day: 3, title: 'Styling with CSS', desc: 'Colors, fonts, and making things look beautiful.' },
    { day: 4, title: 'CSS Layouts', desc: 'Responsive design with Flexbox and Grid.' },
    { day: 5, title: 'Intro to JavaScript', desc: 'Variables, logic, bringing pages to life.' },
    { day: 6, title: 'JS & The DOM', desc: 'Interacting with HTML using JavaScript.' },
    { day: 7, title: 'Arrays & Loops', desc: 'Handling lists of data efficiently.' },
    { day: 8, title: 'Frameworks Overview', desc: 'Overview of React and modern frontend tools.' },
    { day: 9, title: 'Portfolio Project pt1', desc: 'Start building your personal portfolio.' },
    { day: 10, title: 'Portfolio Project pt2', desc: 'Finishing and polishing the portfolio.' },
    { day: 11, title: 'Interactive App pt1', desc: 'Building a To-Do tracker logic.' },
    { day: 12, title: 'Interactive App pt2', desc: 'Styling and finalizing the To-Do app.' },
    { day: 13, title: 'Python & AI Intro', desc: 'Basics of Python and Machine Learning concepts.' },
    { day: 14, title: 'Pandas & NumPy', desc: 'Data handling for ML models.' },
    { day: 15, title: 'First ML Model', desc: 'Building a predictive linear regression model.' },
];

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let currentSelectedDay = null;
let studentData = null;
let selectedFile = null;

const daysContainer = document.getElementById('days-container');
const modal = document.getElementById('task-modal');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.getElementById('submit-task-btn');
const progressFill = document.getElementById('overall-progress-fill');
const progressText = document.getElementById('overall-progress-text');

// ─────────────────────────────────────────────
// Student Identity — from sessionStorage
// ─────────────────────────────────────────────
async function initStudent() {
    const name = sessionStorage.getItem('studentName');
    const email = sessionStorage.getItem('studentEmail');

    if (!name || !email) {
        window.location.replace('student-login.html');
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/progress/${encodeURIComponent(email)}`);
        studentData = await res.json();
        if (!res.ok) throw new Error(studentData.error);
        if (!sessionStorage.getItem('studentJoined') && studentData.createdAt) {
            sessionStorage.setItem('studentJoined', studentData.createdAt);
        }
        renderDays();
    } catch {
        console.warn('Server unreachable — using local fallback.');
        studentData = { progress: curriculum.map(c => ({ ...c, completed: false })) };
        renderDays();
    }
}

// ─────────────────────────────────────────────
// Render day cards
// ─────────────────────────────────────────────
function renderDays() {
    if (!daysContainer) return;
    daysContainer.innerHTML = '';
    let completedCount = 0;

    curriculum.forEach((item, index) => {
        const savedDay = studentData.progress.find(p => p.day === item.day);
        const completed = savedDay ? savedDay.completed : false;
        const submitted = savedDay ? savedDay.submitted : false;

        if (completed) completedCount++;

        let statusText = 'Pending';
        let statusClass = 'status-pending';

        if (completed) {
            statusText = 'Completed ✓';
            statusClass = 'status-completed';
        } else if (submitted) {
            statusText = '⏳ Under Review';
            statusClass = 'status-review';
        }

        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
      <div class="day-header">
        <span class="day-pill">Day ${item.day}</span>
        <span class="status-badge ${statusClass}">
          ${statusText}
        </span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;
        card.addEventListener('click', () => openModal(index));
        daysContainer.appendChild(card);
    });

    updateProgress(completedCount);
}

function updateProgress(completedCount) {
    const pct = Math.round((completedCount / curriculum.length) * 100);
    progressFill.style.width = `${pct}%`;
    progressText.innerText = `${pct}%`;
    document.dispatchEvent(new Event('progressUpdated'));
}

// ─────────────────────────────────────────────
// Modal — Open / Close
// ─────────────────────────────────────────────
function openModal(index) {
    currentSelectedDay = index;
    const item = curriculum[index];
    const savedDay = studentData.progress.find(p => p.day === item.day);
    const completed = savedDay ? savedDay.completed : false;
    const submitted = savedDay ? savedDay.submitted : false;

    document.getElementById('modal-title').innerText = `Day ${item.day}: ${item.title}`;
    document.getElementById('modal-description').innerText = `Complete the tasks for "${item.title}" and submit your work below.`;

    // Reset all fields
    document.getElementById('task-link').value = '';
    document.getElementById('github-link').value = '';
    document.getElementById('task-notes').value = '';
    document.getElementById('submission-status').innerText = '';
    clearFile();

    submitBtn.innerText = (completed || submitted) ? 'Resubmit Task' : 'Submit Task 🚀';
    submitBtn.disabled = false;

    const statusDiv = document.getElementById('submission-status');
    if (completed) {
        statusDiv.innerHTML = `<span style="color:var(--success)">✅ You completed this day! (Reviewed by admin)</span>`;
    } else if (submitted) {
        statusDiv.innerHTML = `<span style="color:var(--warning)">⏳ Your submission is under review by the instructor. You can resubmit if needed.</span>`;
    }

    modal.classList.add('show');
}

function closeModal() { modal.classList.remove('show'); clearFile(); }

if (closeBtn) closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// ─────────────────────────────────────────────
// File Upload — Drag & Drop + Preview
// ─────────────────────────────────────────────
const fileInput = document.getElementById('file-input');
const uploadZone = document.getElementById('upload-zone');

if (fileInput) {
    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) handleFileSelected(fileInput.files[0]);
    });
}

if (uploadZone) {
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) handleFileSelected(file);
    });
}

function handleFileSelected(file) {
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        document.getElementById('submission-status').innerHTML =
            `<span style="color:#ef4444">⚠️ File too large. Maximum size is 10 MB.</span>`;
        return;
    }
    selectedFile = file;
    const sizeStr = file.size > 1024 * 1024
        ? `${(file.size / 1024 / 1024).toFixed(1)} MB`
        : `${(file.size / 1024).toFixed(0)} KB`;

    document.getElementById('preview-name').innerText = file.name;
    document.getElementById('preview-size').innerText = sizeStr;

    const thumb = document.getElementById('preview-thumb');
    const pdfIcon = document.getElementById('preview-pdf-icon');

    if (file.type === 'application/pdf') {
        thumb.style.display = 'none';
        pdfIcon.style.display = 'block';
    } else {
        pdfIcon.style.display = 'none';
        const reader = new FileReader();
        reader.onload = (e) => { thumb.src = e.target.result; thumb.style.display = 'block'; };
        reader.readAsDataURL(file);
    }
    document.getElementById('file-preview').classList.add('visible');
}

function clearFile() {
    selectedFile = null;
    if (fileInput) fileInput.value = '';
    document.getElementById('file-preview').classList.remove('visible');
    const thumb = document.getElementById('preview-thumb');
    if (thumb) { thumb.src = ''; thumb.style.display = 'none'; }
    const pdfIcon = document.getElementById('preview-pdf-icon');
    if (pdfIcon) pdfIcon.style.display = 'none';
}

// ─────────────────────────────────────────────
// Submit Task → FormData → API → MongoDB + Cloudinary
// ─────────────────────────────────────────────
if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
        const taskLink = document.getElementById('task-link').value.trim();
        const githubLink = document.getElementById('github-link').value.trim();
        const notes = document.getElementById('task-notes').value.trim();
        const item = curriculum[currentSelectedDay];
        const statusDiv = document.getElementById('submission-status');

        if (!taskLink && !githubLink && !selectedFile) {
            statusDiv.innerHTML = `<span style="color:#f59e0b">⚠️ Please provide at least a task link, GitHub link, or upload a file.</span>`;
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = '⏳ Uploading & Submitting...';
        statusDiv.innerHTML = '';

        // Use FormData to support file upload
        const formData = new FormData();
        formData.append('studentName', sessionStorage.getItem('studentName'));
        formData.append('studentEmail', sessionStorage.getItem('studentEmail'));
        formData.append('day', item.day);
        formData.append('title', item.title);
        formData.append('taskLink', taskLink);
        formData.append('githubLink', githubLink);
        formData.append('notes', notes);
        if (selectedFile) {
            formData.append('attachment', selectedFile, selectedFile.name);
        }

        try {
            const res = await fetch(`${API_BASE}/submit`, { method: 'POST', body: formData });
            const data = await res.json();

            if (res.ok && data.success) {
                const progressEntry = studentData.progress.find(p => p.day === item.day);
                if (progressEntry) {
                    progressEntry.submitted = true;
                    // Note: completed stays false until admin reviews
                }

                statusDiv.innerHTML = `<span style="color:#10b981">✅ Task submitted for review! It will show as completed once the instructor reviews it. 🚀</span>`;
                clearFile();
                setTimeout(() => { closeModal(); renderDays(); }, 2000);
            } else {
                statusDiv.innerHTML = `<span style="color:#ef4444">❌ ${data.error || 'Submission failed.'}</span>`;
                submitBtn.disabled = false;
                submitBtn.innerText = 'Submit Task 🚀';
            }
        } catch {
            statusDiv.innerHTML = `<span style="color:#ef4444">❌ Cannot reach server. Is the backend running?</span>`;
            submitBtn.disabled = false;
            submitBtn.innerText = 'Submit Task 🚀';
        }
    });
}

// ─────────────────────────────────────────────
// Boot
// ─────────────────────────────────────────────
initStudent();
