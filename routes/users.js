var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
	  userId: 1,
	  userName: 'Josan'
  },
  {
	  userId: 2,
	  userName: 'Adonay'
  }
  ]);
});

module.exports = router;
