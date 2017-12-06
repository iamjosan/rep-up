const dbConn = require("./dbConnect");
const express = require("express");
const router = express.Router();

const sql =
  "SELECT id, username, email, gll_name FROM users WHERE approved = 0";

router.get("/", (req, res) => {
  dbConn.getConnection((error, conn) => {
    conn.query(sql, (err, result, fields) => {
      conn.release();
      if (err) throw err;
      res.json(result);
    });
  });
});

module.exports = router;
