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
          var response;
          if (result.length === 0) {
            response = { error: true, msg: "Incorrect Login" };
          } else if (result[0].ban === 1) {
            response = { error: true, msg: "You have been banned" };
          } else {
            response = { error: false, user: result };
          }
          console.log("response", response);
          socket.emit("user login", response);
        }
      );
    });
  });
}

module.exports = userLogin;
