// simulate-form.js
// Ye script n8n, Make, ya kisi Website Form ki acting karti hai.
// Ye automatically leads bhejegi hamare API (Webhook) ko.

const leadsToTest = [
  { name: "Ali Khan", email: "ali@referral.com", source: "referral" }, // Expect: HIGH (90)
  { name: "Sara Ahmed", email: "sara@google.com", source: "google" },   // Expect: MEDIUM (70)
  { name: "Random Guy", email: "rand@unknown.com", source: "unknown" }  // Expect: LOW (40)
];

async function sendWebhooks() {
  console.log("🚀 Starting Automation Simulation...\n");

  for (const lead of leadsToTest) {
    try {
      // Ye wahi hai jo n8n ka "HTTP Request" node karta hai
      const response = await fetch('http://localhost:3000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });

      const result = await response.json();
      console.log(`✅ Sent: ${lead.name} | Score: ${result.score} | Priority: ${result.priority}`);
    } catch (error) {
      console.error(`❌ Error sending ${lead.name}:`, error.message);
    }
  }
  
  console.log("\n🏁 Simulation Complete! Check your database.");
}

sendWebhooks();