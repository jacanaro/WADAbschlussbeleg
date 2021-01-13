var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

userCollection = [
    { // Object @ 0 index
        username: "admina",
        password: "admina",
        isAdminFlag: true
    },
    { // Object @ 1 index
        username: "normalo",
        password: "normalo",
        isAdminFlag: false
    }
];

var user_name;
var password;

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Login' });
    res.sendFile('index.html', {root: '../myWebApp/public'});
});
router.post('/login', (req, res) => {
    user_name = req.body.user;
    password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.end("yes");
});
router.get('/loginData', function (req, res, next) {
    for (var i = 0; i < userCollection.length; i++) {
        // check is user input matches username and password of a current index of the userCollection array
        if (user_name == userCollection[i].username && password == userCollection[i].password) {
            res.json({username: user_name, password: password});
            break;
        } else if (i == userCollection.length - 1) {
            res.status(401).json({failString: "Unauthorized"});
        }
    }
});

module.exports = router;