require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
const PORT = process.env.PORT || 3001;

// ─────────────────────────────────────────────
//  Cloudinary Configuration
// ─────────────────────────────────────────────
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ─────────────────────────────────────────────
//  Multer → Cloudinary Storage
// ─────────────────────────────────────────────
const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        const isPDF = file.mimetype === 'application/pdf';
        return {
            folder: 'masterclass/submissions',
            resource_type: isPDF ? 'raw' : 'image',
            allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf'],
            public_id: `day${req.body.day || 'x'}_${Date.now()}`,
        };
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
        if (allowed.includes(file.mimetype)) cb(null, true);
        else cb(new Error('Only images (JPG, PNG, GIF, WEBP) and PDFs are allowed.'));
    },
});

// ─────────────────────────────────────────────
//  Middleware
// ─────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ─────────────────────────────────────────────
//  MongoDB Connection
// ─────────────────────────────────────────────
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    });

// ─────────────────────────────────────────────
//  Schemas & Models
// ─────────────────────────────────────────────
const progressSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true, unique: true },
    phone: { type: String, default: '' },
    progress: [
        {
            day: Number,
            title: String,
            submitted: { type: Boolean, default: false }, // student submitted, awaiting review
            completed: { type: Boolean, default: false }, // admin marked as reviewed → counts in progress
            submittedAt: Date,
            completedAt: Date,
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

const submissionSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    day: { type: Number, required: true },
    title: { type: String, required: true },
    taskLink: { type: String, default: '' },                // CodePen / hosted URL
    githubLink: { type: String, default: '' },               // GitHub repository URL
    notes: { type: String, default: '' },
    // Cloudinary upload fields
    fileUrl: { type: String, default: '' },               // Cloudinary secure URL
    fileName: { type: String, default: '' },               // original filename
    fileType: { type: String, default: '' },               // 'image' | 'pdf'
    publicId: { type: String, default: '' },               // Cloudinary public_id
    reviewed: { type: Boolean, default: false },
    submittedAt: { type: Date, default: Date.now },
});

const supportSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['pending', 'resolved'], default: 'pending' },
    submittedAt: { type: Date, default: Date.now },
});

const Progress = mongoose.model('Progress', progressSchema);
const Submission = mongoose.model('Submission', submissionSchema);
const Support = mongoose.model('Support', supportSchema);

// ─────────────────────────────────────────────
//  15-Day Curriculum (for new progress docs)
// ─────────────────────────────────────────────
const CURRICULUM = [
    { day: 1, title: 'HTML Basics' },
    { day: 2, title: 'Advanced HTML' },
    { day: 3, title: 'Styling with CSS' },
    { day: 4, title: 'CSS Layouts' },
    { day: 5, title: 'Intro to JavaScript' },
    { day: 6, title: 'JS & The DOM' },
    { day: 7, title: 'Arrays & Loops' },
    { day: 8, title: 'Frameworks Overview' },
    { day: 9, title: 'Portfolio Project pt1' },
    { day: 10, title: 'Portfolio Project pt2' },
    { day: 11, title: 'Interactive App pt1' },
    { day: 12, title: 'Interactive App pt2' },
    { day: 13, title: 'Python & AI Intro' },
    { day: 14, title: 'Pandas & NumPy' },
    { day: 15, title: 'First ML Model' },
    { day: 16, title: 'Capstone: Task Dashboard' },
    { day: 17, title: 'Capstone: Price Predictor' },
];

// ─────────────────────────────────────────────
//  ROUTES
// ─────────────────────────────────────────────

// ── STUDENT: Register / Load Progress ──────────────────
app.post('/api/student/init', async (req, res) => {
    const { studentName, studentEmail, phone } = req.body;
    if (!studentName || !studentEmail)
        return res.status(400).json({ error: 'Name and email are required.' });
    try {
        let doc = await Progress.findOne({ studentEmail });
        if (!doc) {
            doc = await Progress.create({
                studentName,
                studentEmail,
                phone: phone || '',
                progress: CURRICULUM.map((c) => ({ ...c, completed: false })),
            });
        }
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── STUDENT: Get progress by email ────────────────────
app.get('/api/progress/:email', async (req, res) => {
    try {
        let doc = await Progress.findOne({ studentEmail: req.params.email });
        if (!doc) return res.status(404).json({ error: 'Student not found.' });

        // Auto-patch missing curriculum items (e.g. newly added project days)
        const existingDays = doc.progress.map(p => p.day);
        const missingItems = CURRICULUM.filter(c => !existingDays.includes(c.day));

        if (missingItems.length > 0) {
            const newItems = missingItems.map(c => ({ ...c, completed: false, submitted: false }));
            doc.progress.push(...newItems);
            doc.progress.sort((a, b) => a.day - b.day);
            await doc.save();
        }

        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── STUDENT: Submit task (with optional file upload) ──
// POST /api/submit  (multipart/form-data)
// Fields: studentName, studentEmail, day, title, taskLink, githubLink, notes
// File:   attachment (optional)
app.post('/api/submit', upload.single('attachment'), async (req, res) => {
    const { studentName, studentEmail, day, title, taskLink, githubLink, notes } = req.body;

    if (!studentName || !studentEmail || !day)
        return res.status(400).json({ error: 'Missing required fields.' });

    try {
        // Build file metadata if a file was uploaded
        let fileUrl = '', fileName = '', fileType = '', publicId = '';
        if (req.file) {
            fileUrl = req.file.path;           // Cloudinary secure URL
            fileName = req.file.originalname;
            publicId = req.file.filename;
            fileType = req.file.mimetype === 'application/pdf' ? 'pdf' : 'image';
        }

        const submission = await Submission.create({
            studentName,
            studentEmail,
            day: Number(day),
            title: title || '',
            taskLink: taskLink || '',
            githubLink: githubLink || '',
            notes: notes || '',
            fileUrl,
            fileName,
            fileType,
            publicId,
        });

        // Mark day as SUBMITTED (not completed — admin review required to complete)
        await Progress.updateOne(
            { studentEmail, 'progress.day': Number(day) },
            { $set: { 'progress.$.submitted': true, 'progress.$.submittedAt': new Date() } }
        );

        res.json({ success: true, submission });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Server error.' });
    }
});

// ── ADMIN: Login ──────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid credentials.' });
    }
});

// ── ADMIN: All submissions ─────────────────────────────
app.get('/api/admin/submissions', async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ submittedAt: -1 });
        res.json(submissions);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── ADMIN: All students ────────────────────────────────
app.get('/api/admin/students', async (req, res) => {
    try {
        const students = await Progress.find().sort({ createdAt: -1 });
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── ADMIN: Mark as reviewed ───────────────────────────
// This is the ONLY action that marks a student's day as completed
// and therefore increases their progress bar.
app.patch('/api/admin/submissions/:id/review', async (req, res) => {
    try {
        // 1. Mark submission as reviewed
        const sub = await Submission.findByIdAndUpdate(
            req.params.id,
            { reviewed: true },
            { new: true }
        );
        if (!sub) return res.status(404).json({ error: 'Submission not found.' });

        // 2. Mark the student's day as COMPLETED in Progress (drives the progress bar)
        await Progress.updateOne(
            { studentEmail: sub.studentEmail, 'progress.day': sub.day },
            { $set: { 'progress.$.completed': true, 'progress.$.completedAt': new Date() } }
        );

        res.json(sub);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── STUDENT: Submit support request ────────────────────
app.post('/api/support', async (req, res) => {
    const { studentName, studentEmail, subject, message } = req.body;
    if (!studentName || !studentEmail || !subject || !message)
        return res.status(400).json({ error: 'All fields are required.' });
    try {
        const support = await Support.create({ studentName, studentEmail, subject, message });
        res.json({ success: true, support });
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── ADMIN: Get all support requests ────────────────────
app.get('/api/admin/support', async (req, res) => {
    try {
        const requests = await Support.find().sort({ submittedAt: -1 });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── ADMIN: Resolve support request ─────────────────────
app.patch('/api/admin/support/:id/resolve', async (req, res) => {
    try {
        const support = await Support.findByIdAndUpdate(
            req.params.id,
            { status: 'resolved' },
            { new: true }
        );
        if (!support) return res.status(404).json({ error: 'Support request not found.' });
        res.json(support);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
});

// ── Error handler for multer ──────────────────────────
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError || err.message) {
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

// ─────────────────────────────────────────────
//  SPA Fallback
// ─────────────────────────────────────────────
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ─────────────────────────────────────────────
//  Start
// ─────────────────────────────────────────────
const server = app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${PORT} is already in use.`);
        console.error(`   Run this command to free it, then restart:\n`);
        console.error(`   npx kill-port ${PORT}\n`);
        process.exit(1);
    } else {
        throw err;
    }
});
