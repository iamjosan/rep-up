const dbConn = require("./dbConnect");
const express = require("express");
const router = express.Router();

const sql =
  "SELECT users.username, COUNT(experience.user_id) AS rep FROM users LEFT JOIN experience ON users.id = experience.user_id AND experience.approved = 1 AND experience.date_added >= ? AND experience.date_added <= ? WHERE users.approved = 1 GROUP BY users.username ORDER BY rep DESC";

//we will get users' all-time rank
//range will be from start-date of app to today
const d = new Date(),
  today = [d.getFullYear(), d.getMonth(), d.getDate()],
  dateToday = today.join("-");

router.get("/", (req, res) => {
  dbConn.query(sql, ["2017-09-01", dateToday], (err, result, fields) => {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
