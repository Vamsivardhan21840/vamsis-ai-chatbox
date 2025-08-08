const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "http://localhost:11434/v1/chat/completions",  // ✅ Corrected endpoint
      {
        model: "tinyllama:1.1b",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const reply = response.data.choices?.[0]?.message?.content ?? "No response";
    res.json({ choices: [{ message: { content: reply } }] });
  } catch (error) {
    console.error("Error with Ollama API:", error.message);
    res.status(500).json({ error: "Failed to get response from Ollama model." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
