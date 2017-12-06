function fetchUsersAll(socket, dbConn) {
  socket.on("fetch users all", data => {
    dbConn.getConnection((error, conn) => {
      conn.query(
        "SELECT username, avatar FROM users WHERE approved = 1",
        (err, result, fields) => {
          conn.release();
          if (err) throw err;
          socket.emit("fetch users all", result);
        }
      );
    });
  });
}

module.exports = fetchUsersAll;
