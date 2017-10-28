const dbConn = require('./dbConnect');
const express = require('express');
const router = express.Router();

function insertUser(userName,email,pw,avatar,gllName,date){
	dbConn.query("INSERT INTO users (username,email,password,avatar,gll_name,date_join) VALUES (?,?,?,?,?,?)", [userName,email,pw,avatar,gllName,date], (err,result,fields) => {
		if(err) throw err;
	});
}

function insertRep(userId,proof,date){
	dbConn.query("INSERT INTO experience (user_id,proof,date_added) VALUES (?,?,?)", [userId,proof,date], (err,result,fields) => {
		if(err) throw err;
	});
}

function getUser(userName){
	let sqlGetUser = 'SELECT b.username, b.avatar, COUNT(a.user_id) AS rep FROM experience a JOIN users b ON a.user_id = b.id WHERE b.username = ? AND a.approved = 1 AND b.approved = 1 GROUP BY b.username';
	dbConn.query(sqlGetUser, [userName], (err,result,fields) => {
		if(err) throw err;
	});
}

module.exports = {insertUser,insertRep,getUser};