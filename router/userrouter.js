const express = require("express");
const router = express.Router();
const db = require("../config/database.js");

// GET - Sadəcə SELECT FROM ilə
router.get("/", async (req, res) => {
  try {
    const [news] = await db.query('SELECT * FROM "news"')
    res.json(news)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Xəta baş verdi" })
  }
});

// POST - Yeni məlumat əlavə et
router.post("/", async (req, res) => {
  try {
    const { name, content } = req.body
    await db.query(
      'INSERT INTO "news" ("name", "content") VALUES ($1, $2)',
      [name, content]
    )
    res.status(201).json({ message: "Məlumat əlavə edildi" })
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Xəta baş verdi" })
  }
});

module.exports = router;