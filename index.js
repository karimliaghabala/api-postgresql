require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./config/database.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.authenticate().then(()=>{
    console.log("Supabase-ə bağlandı ✅")
}).catch((err)=>{
    console.log("Database xətası:", err)
})

app.use("/", require('./router/userrouter.js'))

// Lokal üçün listen
if (require.main === module) {
  app.listen(3000, ()=>{
    console.log("3000 portunda işləyir 🚀")
  })
}



// require('dotenv').config()

// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()
// const db = require('./config/database.js')


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// db.authenticate().then(()=>{
//     console.log("veri tabanina bagladi")
// }).catch((err)=>{
//     console.log(err)
// })
// app.use("/",require('./router/userrouter.js'))

// app.listen(3000,()=>{
//     console.log("3000 ishleyir")
// })