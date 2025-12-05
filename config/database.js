const { Sequelize } = require("sequelize");
require('dotenv').config()

module.exports = new Sequelize(process.env.POSTGRES_DATABASE, "postgres", process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: "postgres"
});


// postgres:3991001993@localhost:3000/

