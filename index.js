require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./config/database.js')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.authenticate().then(()=>{
    console.log("veri tabanina bagladi")
}).catch((err)=>{
    console.log(err)
})
app.use("/",require('./router/userrouter.js'))

app.listen(process.env.DATABASE_URL,()=>{
    console.log("3000 ishleyir")
})