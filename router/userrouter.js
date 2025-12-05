const express = require("express");
const router = express.Router();
const pool = require("../config/database.js");

// GET - Bütün məlumatları al
router.get("/", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM news')
    res.json(result.rows)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumatlar yüklənə bilmədi" })
  }
});

// POST - Yeni məlumat əlavə et
router.post("/", async (req, res) => {
  try {
    const { ad, soyad, email } = req.body
    const result = await pool.query(
      'INSERT INTO news (ad, soyad, email) VALUES ($1, $2, $3) RETURNING *',
      [ad, soyad, email]
    )
    res.status(201).json(result.rows[0])
    console.log("Yeni məlumat əlavə edildi");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumat əlavə olunmadı" })
  }
});

module.exports = router;