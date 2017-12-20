const mysql = require("mysql");
var conn;

if (process.env.JAWSDB_URL) {
  conn = mysql.createPool(process.env.JAWSDB_URL);
} else {
  conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "reputation"
  });
}

module.exports = conn;
