const dbConn = require("./dbConnect");
const express = require("express");
const router = express.Router();

const sql =
  "SELECT experience.id, experience.proof, users.username, users.email FROM experience JOIN users ON experience.user_id = users.id WHERE experience.approved = 0 AND users.approved = 1";

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
