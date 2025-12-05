const Sequelize = require('sequelize')

const db  = require('../config/database.js')


const User = db.define('News',{
    name:{
        type:Sequelize.CHAR
    },
    content:{
        type:Sequelize.CHAR
    },
    status:{
        type:Sequelize.SMALLINT
    },
    source:{
        type:Sequelize.CHAR
    },
    createdAt:{
        type:Sequelize.DATE
    },
    updatedAt:{
        type:Sequelize.DATE
    },

})
module.exports=User