function changeProfileInfo(socket, dbConn, hash) {
  //update profile data
  socket.on("change profile info", data => {
    console.log(data);
    //validate user's password
    //if password validates, we can update the profile info
    dbConn.getConnection((error, conn) => {
      conn.query(
        "SELECT username FROM users WHERE password = ?",
        [hash(data.password)],
        (err, result, fields) => {
          if (err) throw err;
          if (result.length === 0) {
            return socket.emit("change profile info", {
              msg: "Invalid Password",
              msgColor: "red"
            });
          }
          let sql = {
            email: "UPDATE users SET email = ? WHERE id = ?",
            password: "UPDATE users SET password = ? WHERE id = ?"
          };
          let newData =
            data.newDataType === "password"
              ? hash(data.newData)
              : data.newData.toLowerCase();
          conn.query(
            sql[data.newDataType],
            [newData, data.userID],
            (err, result, fields) => {
              conn.release();
              if (err) throw err;
              socket.emit("change profile info", {
                msg: "Saved",
                msgColor: "green"
              });
            }
          );
        }
      );
    });
  });
}

module.exports = changeProfileInfo;
