var path = require("path");

function uploadFile(instance, socket, dbConn) {
  instance.listen(socket);

  instance.on("start", event => {
    console.log("uploadFile on start");
    //set directory based on upload type
    const obj = {
      CHANGE_AVATAR: path.join(__dirname, "/views/build/img"),
      NEW_REP: path.join(__dirname, "/views/build/img/proof")
    };

    instance.dir = obj[event.file.meta.uploadType];
  });

  instance.on("saved", event => {
    console.log("uploadFile on saved");
    //perform a different query for each specific upload type
    //possible upload types include: changing avatar image and uploading new
    //image for experience
    const obj = {
      CHANGE_AVATAR: () => {
        dbConn.getConnection((error, conn) => {
          conn.query(
            "UPDATE users SET avatar = ? WHERE id = ?",
            [event.file.name, event.file.meta.userId],
            (err, result, fields) => {
              conn.release();
              if (err) throw err;
              console.log("fileUpload on saved - after update query");
              socket.emit("upload file done", event.file.name);
            }
          );
        });
      },
      NEW_REP: () => {
        //get today's date
        let d = new Date();
        let today = [d.getFullYear(), d.getMonth(), d.getDate()];
        let todaysDate = today.join("-");
        //save to database
        dbConn.getConnection((error, conn) => {
          conn.query(
            "INSERT INTO experience (user_id, proof, date_added) VALUES (?, ?, ?)",
            [event.file.meta.userId, event.file.name, todaysDate],
            (err, result, fields) => {
              conn.release();
              if (err) throw err;
              socket.emit("upload file done", event.file.name);
            }
          );
        });
      }
    };

    obj[event.file.meta.uploadType]();
  });
  instance.on("error", event => console.log(event));
}

module.exports = uploadFile;
