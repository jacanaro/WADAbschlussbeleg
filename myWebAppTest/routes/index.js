var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Login' });
  res.sendFile(path.join(__dirname + '/index.html'));
});
router.get('/loginData', function(req, res, next) {
  res.json({ username: "normalo" });
});

module.exports = router;
