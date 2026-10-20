# Simple RAG (Retrieval-Augmented Generation) Simulation

# 1. Knowledge Base (Ye tumhari company ki documents hain)
knowledge_base = {
    "leave_policy": "Employees get 20 days of paid leave per year. Apply 3 days in advance.",
    "remote_work": "Remote work is allowed on Fridays. Must be online 9 AM to 5 PM.",
    "expenses": "Laptop expenses up to $2000 are reimbursed. Keep receipts."
}

def rag_query(question):
    print(f"\n🤖 User Question: {question}")
    
    # 2. Retrieval Step (Sawal mein se keywords dhundo)
    question_lower = question.lower()
    relevant_doc = None
    
    if "leave" in question_lower or "holiday" in question_lower:
        relevant_doc = knowledge_base["leave_policy"]
    elif "remote" in question_lower or "home" in question_lower:
        relevant_doc = knowledge_base["remote_work"]
    elif "expense" in question_lower or "laptop" in question_lower:
        relevant_doc = knowledge_base["expenses"]
    
    # 3. Generation Step (Context ke saath jawab do)
    if relevant_doc:
        print(f"✅ AI Answer: Based on our policy, {relevant_doc}")
    else:
        print("❌ AI Answer: I don't have information about that. Please contact HR.")

# Test the RAG Bot
rag_query("How many days of leave do I get?")
rag_query("Can I work from home on Friday?")
rag_query("What is the salary?") # Ye knowledge base mein nahi hai