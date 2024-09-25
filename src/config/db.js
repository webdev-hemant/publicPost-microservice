const { Sequelize } = require("sequelize");
const {
  DB: { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME },
} = require("./allEnv");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});

module.exports = sequelize;
