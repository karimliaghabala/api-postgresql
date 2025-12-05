const { Sequelize } = require("sequelize");

module.exports = new Sequelize("BigDataNews", "postgres", "3991001993", {
  host: "localhost",
  dialect: "postgres"
});
