const dbConn = require("./dbConnect");
const express = require("express");
const router = express.Router();

const sql = "";

router.get("/", (req, res) => {
  dbConn.getConnection((error, conn) => {
    conn.query(sql, (err, result, fields) => {
      conn.release();
      if (err) throw err;
      res.json(result);
    });
  });
});
