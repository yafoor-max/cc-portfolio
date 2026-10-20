// scorer.js - Lead Scoring Agent Logic
// Assigns priority score based on lead source

function scoreLead(lead) {
  let score = 40;
  let priority = "LOW";

  // High Priority Logic
  if (lead.source === "portfolio" || lead.source === "referral") {
    score = 90;
    priority = "HIGH";
  }
  // Medium Priority Logic
  else if (lead.source === "facebook" || lead.source === "google") {
    score = 70;
    priority = "MEDIUM";
  }

  // Return new object with score added
  return {
    ...lead,
    score: score,
    priority: priority,
    scoredAt: new Date().toISOString()
  };
}

module.exports = { scoreLead };