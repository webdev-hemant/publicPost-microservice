const { Sequelize } = require("sequelize");
const {
  DB: { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME },
} = require("./allEnv");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
