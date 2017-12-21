function userRegister(socket, dbConn, sendMail, hash) {
  socket.on("user register", register => {
    //remove all whitespaces and make lowercase
    register.username = register.username.replace(/\s/g, "").toLowerCase();
    //check if username has been registered
    dbConn.getConnection((error, conn) => {
      conn.query(
        "SELECT username FROM users WHERE  username = ?",
        [register.username],
        (err, result, fields) => {
          if (err) throw err;
          if (result.length > 0) {
            conn.release();
            return socket.emit("user register", {
              msg: "Username is taken",
              msgColor: "red"
            });
          }
          //get today's date and style it to be year-month-day
          let d = new Date(),
            today = [d.getFullYear(), d.getMonth() + 1, d.getDate()],
            dateToday = today.join("-");
          let username = register.username.replace(/\s/g, "").toLowerCase(),
            email = register.email.replace(/\s/g, "").toLowerCase();
          conn.query(
            "INSERT INTO users (username, email, password, gll_name, date_join) VALUES (?, ?, ?, ?, ?)",
            [
              username,
              email,
              hash(register.password),
              register.gllName,
              dateToday
            ],
            (err, result, fields) => {
              conn.release();
              if (err) throw err;
              //send email if user registered successfully
              let body = `
<p>Thanks for registering to Rep-Up!</p>
<p>Please be patient while we approve your account. Once we approve it, we will notify you via email.</p>
<p>Thank you!</p>
<p>The Rep-Up Team</p>`;
              sendMail(email, "Please Verify Your Rep Up Account", body);
              socket.emit("user register", {
                msg: "Awaiting Approval",
                msgColor: "green"
              });
            }
          );
        }
      );
    });
  });
}

module.exports = userRegister;
