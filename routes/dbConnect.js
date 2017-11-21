const mysql = require("mysql");
//const express = require('express');

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "reputation"
});

module.exports = conn;
