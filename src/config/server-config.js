const dotenv = require("dotenv");

dotenv.config({ path: require("path").resolve(__dirname, "../../.env") });

module.exports = {
  PORT: process.env.PORT,
  GMAIL_PASS: process.env.GMAIL_PASS,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
};
