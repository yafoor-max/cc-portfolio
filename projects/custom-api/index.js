const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create Express app
const app = express();
const PORT = 3000;

// Parse incoming JSON bodies
app.use(express.json());

// Open (or create) the SQLite database file
const dbPath = path.join(__dirname, 'automation.db');
const db = new sqlite3.Database(dbPath);

// Create the leads table if it does not exist yet
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
  res.json({ status: 'ok', message: 'Custom API running' });
});

// GET /api/leads — return all leads as JSON
app.get('/api/leads', (req, res) => {
  db.all('SELECT * FROM leads ORDER BY id DESC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch leads' });
    }
    res.json(rows);
  });
});

// POST /api/leads — insert a new lead
// Expected body: { "name": "string", "email": "string", "source": "string" }
app.post('/api/leads', (req, res) => {
  const { name, email, source } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Insert the new lead into the database
  db.run(
    'INSERT INTO leads (name, email, source) VALUES (?, ?, ?)',
    [name.trim(), email.trim(), source ? source.trim() : null],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create lead' });
      }
      // Return the created lead with its new id
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
