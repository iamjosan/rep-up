const mysqlEvents = require('mysql-events');
const express = require('express');
const router = express.Router();

const dsn = {
	host: 'localhost',
	user: 'root',
	password: ''
};
const mysqlEventWatcher = mysqlEvents(dsn);

module.exports = mysqlEventWatcher;