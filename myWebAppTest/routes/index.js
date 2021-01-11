var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var user_name;
var password;
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Login' });
  res.sendFile(path.join(__dirname + '/index.html'));
});
router.post('/login',(req, res) => {
  user_name = req.body.user;
  password = req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
router.get('/loginData', function(req, res, next) {
  res.json({ username: user_name, password: password });
});
module.exports = router;
