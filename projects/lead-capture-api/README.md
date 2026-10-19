# Lead Capture API

Simple Express + SQLite REST API for capturing leads.

## Setup

```bash
# Install dependencies
npm install

# Start the server
npm start
# Server runs at http://localhost:3000
```

## Endpoints

| Method | Path | Body | Description |
|--------|------|------|-------------|
| GET | `/` | — | Health check |
| GET | `/api/leads` | — | Returns all leads as JSON |
| POST | `/api/leads` | `{ "name": "string", "email": "string", "source": "string" }` | Creates a new lead |

- `name` and `email` are required and cannot be empty.
- Email format is validated.
- `source` is optional.
- Data is stored in `automation.db` (SQLite, created automatically).

## Testing

Run the server first (`npm start`), then in another terminal:

```bash
# Create a lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","source":"landing-page"}'

# Create another lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob","email":"bob@example.com","source":"referral"}'

# Get all leads
curl http://localhost:3000/api/leads

# Test validation — should return 400
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"not-an-email"}'
```

## Deployment (Render.com Free Tier)

1. Push the project to GitHub (root `cc-portfolio` or as a standalone repo).
2. On [Render](https://dashboard.render.com/) → New → Web Service → connect the repo.
3. Set:
   - **Build Command:** `npm install --prefix projects/lead-capture-api`
   - **Start Command:** `npm start --prefix projects/lead-capture-api`
   - Or set **Root Directory** to `projects/lead-capture-api` and use `npm install` / `npm start`.
4. Render assigns a port via `$PORT` — the server reads `process.env.PORT`.
5. Verify: `GET https://<your-app>.onrender.com/api/leads` should return `[]` initially.

## Security

- Input validation: `name` and `email` cannot be empty; email format is checked with regex.
- SQL injection: all queries use parameterized statements (`?` placeholders).
- No secrets or API keys required — no env vars needed for local use.

## Monitoring

- Every request is logged to the console: `[timestamp] METHOD url`.
- POST and GET handlers log body and result counts.
- Database errors are logged with `console.error`.

## Tech Stack

Node.js · Express · SQLite3
