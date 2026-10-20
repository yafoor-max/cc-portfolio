const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { scoreLead } = require('./scorer');
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Log every incoming request to the console
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Parse JSON request bodies
app.use(express.json());

// Open (or create) the SQLite database
const dbPath = path.join(__dirname, 'automation.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('Database error:', err);
  else console.log('Connected to SQLite database');
});

// Create leads table if not exists (with score columns)
db.run(`CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT,
  score INTEGER,
  priority TEXT,
  scoredAt TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Lead Capture API running' });
});

// GET all leads
app.get('/api/leads', (req, res) => {
  db.all('SELECT * FROM leads ORDER BY id DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST new lead (with scoring agent)
app.post('/api/leads', (req, res) => {
  const { name, email, source } = req.body;

  // Validation
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  // Score the lead using our agent
  const scoredLead = scoreLead({ name, email, source: source || 'unknown' });

  const sql = `INSERT INTO leads (name, email, source, score, priority, scoredAt) VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [scoredLead.name, scoredLead.email, scoredLead.source, scoredLead.score, scoredLead.priority, scoredLead.scoredAt];

  db.run(sql, params, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({
      id: this.lastID,
      ...scoredLead
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});