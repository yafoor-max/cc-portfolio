const express = require('express');
const sqlite3 = require('sqlite3').verbose();
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
const db = new sqlite3.Database(dbPath);

// Create leads table if it does not exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      source TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Lead Capture API running' });
});

// GET /api/leads — return all leads as JSON
app.get('/api/leads', (req, res) => {
  console.log('GET /api/leads — fetching all leads');
  db.all('SELECT * FROM leads ORDER BY id DESC', (err, rows) => {
    if (err) {
      console.error('Database error on GET /api/leads:', err.message);
      return res.status(500).json({ error: 'Failed to fetch leads' });
    }
    console.log(`Found ${rows.length} lead(s)`);
    res.json(rows);
  });
});

// POST /api/leads — create a new lead
// Expected body: { "name": "string", "email": "string", "source": "string" }
app.post('/api/leads', (req, res) => {
  const { name, email, source } = req.body;
  console.log('POST /api/leads — body:', req.body);

  // Validate that name and email are present and not empty
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'name is required and cannot be empty' });
  }
  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ error: 'email is required and cannot be empty' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Insert the lead into the database
  db.run(
    'INSERT INTO leads (name, email, source) VALUES (?, ?, ?)',
    [name.trim(), email.trim(), source && typeof source === 'string' ? source.trim() : null],
    function (err) {
      if (err) {
        console.error('Database error on POST /api/leads:', err.message);
        return res.status(500).json({ error: 'Failed to create lead' });
      }
      console.log(`Lead created with id ${this.lastID}`);
      // Fetch and return the new lead
      db.get('SELECT * FROM leads WHERE id = ?', [this.lastID], (err, row) => {
        if (err) {
          return res.status(500).json({ error: 'Lead created but failed to fetch' });
        }
        res.status(201).json(row);
      });
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
