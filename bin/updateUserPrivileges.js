function updateUserPrivileges(socket, dbConnection) {
  socket.on("update user privileges", data => {
    console.log(data);
    const { admin, ban, id } = data;
    dbConnection.getConnection((error, connection) => {
      connection.query(
        "UPDATE users SET admin = ?, ban = ? WHERE id = ?",
        [admin, ban, id],
        (err, result, fields) => {
          connection.release();
          if (err) throw err;
          console.log(result);
        }
      );
    });
  });
}

module.exports = updateUserPrivileges;
