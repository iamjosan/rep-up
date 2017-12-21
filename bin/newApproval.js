/*
* Use this function to approve users and experiences in the database
* send an email to notify the user of acceptance or rejection
*/
function newApproval(socket, dbConn, sendMail) {
  socket.on("new approval", data => {
    const status = {
      approve: {
        sql: "UPDATE * SET approved = 1 WHERE id IN (?)",
        emailSubject: "Approved",
        emailBody: `<p>Approved!</p>
<p>Log in to see what's happening!</p>
<p>Best,</p>
<p>The Rep Up Team</p>`
      },
      reject: {
        sql: "UPDATE * SET approved = -1 WHERE id IN (?)",
        emailSubject: "Rejected",
        emailBody: `<p>Sorry,
Rejections are final.<p>
<p>If your account was rejected, there's nothing you can do.
If your rep was rejected, try submitting better proof.</p>
<p>Sincerely,</p>
<p>The Rep Up Team</p>`
      }
    };
    const type = {
      users: { table: "users", emailSubject: "Account" },
      rep: { table: "experience", emailSubject: "Rep" }
    };
    const appStatus = status[data.status];
    const appType = type[data.type];
    const email = {
      subject: `Your ${appType.emailSubject} Was ${appStatus.emailSubject}`,
      body: appStatus.emailBody
    };
    const sql = appStatus.sql.replace("*", appType.table);
    console.log(data.values.id);
    //get connection from pool
    dbConn.getConnection((error, conn) => {
      conn.query(sql, [data.values.id], (err, result, fields) => {
        conn.release();
        if (err) throw err;
        var msg;
        if (result.changedRows === 0) {
          //send error message
          msg = { error: true, msg: "There was an error" };
        } else {
          msg = { error: false };
          //send email to all users
          data.values.email.forEach(e => {
            sendMail(e, email.subject, email.body);
          });
        }
        socket.emit("approval response", msg);
      });
    });
  });
}

module.exports = newApproval;
