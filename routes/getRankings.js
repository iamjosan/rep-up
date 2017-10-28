const dbConn = require('./dbConnect');
const express = require('express');
const router = express.Router();

const sql = 'SELECT b.username, b.avatar, COUNT(a.user_id) AS rep FROM experience a JOIN users b ON a.user_id = b.id WHERE a.date_added >= ? AND a.date_added <= ? AND a.approved = 1 AND b.approved = 1 GROUP BY b.username ORDER BY rep DESC';

router.get('/', (req,res) => {
	dbConn.query(sql, ['2017-09-01','2017-09-30'], (err,result,fields) => {
		if(err) throw err;
		/*
		const counter = {};
		
		result.forEach(row => {
			counter[row.user_id] = (counter[row.user_id] || 0) +1;
		});
		//sort from lowest to highest
		const sorted = Object.keys(counter).sort((a,b) => counter[a] - counter[b]);
		//reverse the array so the order becomes highest to lowest
		sorted.reverse();
		*/
		//send to client
		res.json(result);
		
	});
});



module.exports = router;
