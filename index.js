require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./config/database.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' })
})

async function connectDatabase() {
  try {
    await db.authenticate()
    console.log("✅ Neon-a bağlandı")
  } catch (err) {
    console.error("❌ DB Xətası:", err.message)
  }
}

connectDatabase()

app.use("/", require('./router/userrouter.js'))

// Error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message })
})

if (require.main === module) {
  app.listen(8080, () => {
    console.log("3000 portunda işləyir 🚀")
  })
}

module.exports = app