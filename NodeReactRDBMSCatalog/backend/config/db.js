const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "category_db",
});

module.exports = connection;
