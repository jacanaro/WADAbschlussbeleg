const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const contactsRouter = require('./routes/contacts');
const advizRouter = require('./routes/adviz');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/adviz', advizRouter);
app.use('/adviz/contacts', contactsRouter);

/*

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


 */
/*
app.get("/users", function(req, res) {

    MongoClient.connect(url, {useUnifiedTopology: true},
        function (err, client) {
            if(err) { //better error handling needed
                throw err;
            }

            let db = client.db("advizDB");
            db.collection("users").find({}).toArray(
                function(err, result) {
                    if (err) { //better error handling needed
                        throw err;
                    }
                    console.log(result);
                    res.status(200).send(result);
                    client.close();
                });
        });
});



 */

module.exports = app;
