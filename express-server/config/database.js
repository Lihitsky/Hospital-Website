const { Sequelize } = require("@sequelize/core");
const { PostgresDialect } = require("@sequelize/postgres");

require("dotenv").config();

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL === "true",
});

module.exports = sequelize;
