const Sequelize = require('sequelize')

const db  = require('../config/database.js')


const User = db.define('news',{
    name:{
        type:Sequelize.CHAR
    },
    content:{
        type:Sequelize.TEXT
    },
    createdAt:{
        type:Sequelize.TIME
    },
    updatedAt:{
        type:Sequelize.TIME
    },

})
module.exports=User