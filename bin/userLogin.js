function userLogin(socket, dbConn, hash) {
  socket.on("user login", login => {
    console.log(hash(login.password));
    let sqlLogin =
      "SELECT users.*, COUNT(experience.user_id) AS rep FROM users LEFT JOIN experience ON users.id = experience.user_id AND experience.approved = 1 WHERE users.username = ?  AND users.approved = 1 AND users.password = ? GROUP BY users.id";
    dbConn.getConnection((error, conn) => {
      conn.query(
        sqlLogin,
        [login.username, hash(login.password)],
        (err, result, fields) => {
          conn.release();
          if (err) throw err;
          console.log(result);
          //if user login doesnt match
          //return false
          result = result.length > 0 ? result : false;
          socket.emit("user login", result);
        }
      );
    });
  });
}

module.exports = userLogin;
