function fetchUser(socket, dbConn) {
  socket.on("fetch user", username => {
    let sqlGetUser =
      "SELECT users.username, users.avatar, COUNT(experience.user_id) AS rep FROM users LEFT JOIN experience ON users.id = experience.user_id AND experience.approved = 1 WHERE users.username = ? AND users.approved = 1 GROUP BY users.username";
    dbConn.getConnection((error, conn) => {
      conn.query(sqlGetUser, [username], (err, result, fields) => {
        conn.release();
        if (err) throw err;
        socket.emit("send user", result);
      });
    });
  });
}

module.exports = fetchUser;
