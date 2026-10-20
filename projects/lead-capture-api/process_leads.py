import csv
import json

# 1. Mock Data (Ye wahi hai jo n8n se aata hai)
leads_data = [
    {"name": "Ali Khan", "email": "ali@referral.com", "source": "referral", "score": 90},
    {"name": "Sara Ahmed", "email": "sara@google.com", "source": "google", "score": 70},
    {"name": "Random Guy", "email": "rand@unknown.com", "source": "unknown", "score": 40},
    {"name": "Big Client", "email": "ceo@bigcorp.com", "source": "portfolio", "score": 95}
]

# 2. CSV File mein save karo (Simulation)
with open('leads.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["name", "email", "source", "score"])
    writer.writeheader()
    writer.writerows(leads_data)

print("✅ CSV File created: leads.csv")

# 3. Ab High Priority Leads ko filter karo (Automation Logic)
print("\n Filtering HIGH Priority Leads (Score > 80)...")

high_priority_leads = []
with open('leads.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        if int(row['score']) >= 80:
            high_priority_leads.append(row)
            # Yahan real world mein Email API call hoti hai
            print(f"📧 Draft Email to: {row['name']} ({row['email']}) - Priority: HIGH")

print(f"\n🏁 Total High Priority Leads: {len(high_priority_leads)}")