# 📖 Dictionary App (Using Ninja API)

This is my first API-based project where I built a simple Dictionary App using HTML, CSS, and JavaScript. I used the free [Ninja Dictionary API](https://api-ninjas.com/api/dictionary), which provides real-time word definitions with **no credit card required** for up to 10,000 requests.

## 🚀 Features

- 📗 Real-time word meaning fetch using **Fetch API**
- 🎯 User types a word and hits "Search" — the meaning is instantly shown
- 💡 Basic but clean UI design
- ✅ 100% free API with no signup fees
- 🎯 Focus on JavaScript functionality and API integration

## 🔐 API Key & Security Insight

> Although this is a frontend-only project, in real-world applications, **API keys must never be exposed in frontend code**.

### ✅ How to Secure API Keys in Production:

- Use a backend server (e.g., **Node.js + Express**) to call APIs.
- Store the API key securely in a `.env` file.
- Serve data from your backend to frontend — this keeps the key hidden from users.

```env
# Example .env
NINJA_API_KEY=your_secret_key

// Example Express endpoint
app.get("/define/:word", async (req, res) => {
  const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${req.params.word}`, {
    headers: { 'X-Api-Key': process.env.NINJA_API_KEY }
  });
  const data = await response.json();
  res.json(data);
});
```

## 📁 Tech Stack

- HTML
- CSS
- JavaScript (Fetch API)

---

## 📦 Learning Outcome

Through this small project, I learned:

- How to fetch real-time data from APIs
- Basics of working with API keys
- Understanding the importance of `.env` files and backend handling
- Practical integration of frontend and backend for real-world usage

## 🌐 Live Demo

Experience the project live here:  
🔗 [Click to View Live](https://malik-dictionary-app.vercel.app/)
