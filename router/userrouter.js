const express = require("express");
const router = express.Router();
const News = require("../models/news.js");

// GET - Bütün haberləri al
router.get("/", async (req, res) => {
  try {
    const data = await News.getAll()
    res.json(data)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumatlar yüklənə bilmədi" })
  }
});

// POST - Yeni haber əlavə et
router.post("/", async (req, res) => {
  try {
    const result = await News.create(req.body)
    res.status(201).json(result)
    console.log("Yeni məlumat əlavə edildi");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumat əlavə olunmadı" })
  }
});

module.exports = router;