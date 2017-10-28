const mysql = require('mysql');
//const express = require('express');

const conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'reputation'
});

module.exports = conn;