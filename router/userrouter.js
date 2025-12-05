

const express = require("express");
const router = express.Router();
const supabase = require("../config/database.js");

// GET - Bütün məlumatları al
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
    
    if (error) throw error
    res.json(data)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumatlar yüklənə bilmədi" })
  }
});

// POST - Yeni məlumat əlavə et
router.post("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('news')
      .insert([req.body])
      .select()
    
    if (error) throw error
    res.status(201).json(data[0])
    console.log("Yeni məlumat əlavə edildi");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Məlumat əlavə olunmadı" })
  }
});

module.exports = router;
// const express = require("express");
// const router = express.Router();

// const User = require("../models/news.js");

// router.get("/", (req, res) => {
//   User.findAll()
//     .then((News) => res.json(News))
//     .catch((err) => console.log(err));
// });
// // POST - Yeni məlumat əlavə et
// router.post("/", (req, res) => {
//   User.create(req.body)
//     .then((newUser) => {
//       res.status(201).json(newUser);
//       console.log("Yeni məlumat əlavə edildi");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: "Məlumat əlavə olunmadı" });
//     });
// });

// module.exports = router;
