require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./config/database.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.authenticate().then(()=>{
    console.log("veri tabanina baglandi ✅")
}).catch((err)=>{
    console.log("DB Xətası:", err)
})

app.use("/", require('./router/userrouter.js'))

// Lokal üçün listen
if (require.main === module) {
  app.listen(3000, ()=>{
    console.log("3000 portunda işləyir 🚀")
  })
}

// ✅ VERCEL EXPORT - BU ÇOX VACIBDIR!
module.exports = app