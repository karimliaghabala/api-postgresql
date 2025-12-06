const express = require("express");
const router = express.Router();

const User = require("../models/news.js");

router.get("/", (req, res) => {
  User.findAll()
    .then((news) => res.json(news))
    .catch((err) => console.log(err));
});
// POST - Yeni məlumat əlavə et
router.post("/", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
      console.log("Yeni məlumat əlavə edildi");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Məlumat əlavə olunmadı" });
    });
});

module.exports = router;
