const express = require("express");
const router = express.Router();

const { generateImagePrompt } = require("../services/GeminiService");

router.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const result = await generateImagePrompt(prompt);
    if (result) {
      return res.json(result);
    } else {
      return res.status(500).json({ error: "No image generated." });
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
