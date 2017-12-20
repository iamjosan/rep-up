var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const ladder = require("./routes/getRankings");
const getNewReps = require("./routes/getNewReps");
const getNewUsers = require("./routes/getNewUsers");

var app = express();

const reactBuild = express.static("/client/build");
console.log("reactBuild path: ", path.join(__dirname, "client/build"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(reactBuild);
app.use("/", reactBuild);
app.use("/db", ladder);
app.use("/get-new-reps", getNewReps);
app.use("/get-new-users", getNewUsers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
