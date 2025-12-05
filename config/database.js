const { Sequelize } = require("sequelize");
require('dotenv').config()

module.exports = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

// postgres:3991001993@localhost:3000/

