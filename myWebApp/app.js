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



module.exports = app;

//DATABASE
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/adviz", {useNewUrlParser: true });

const advizSchema = new mongoose.Schema ({
    name: String,
    alter: Number,
    beschreibung: String
});

const Contact = mongoose.model("Contact", advizSchema);

const contact = new Contact ({
    name: "Agnetha",
    alter: 12,
    beschreibung: "Neuer Text"
});

//contact.save();  //nach einmaligem Ausführen dieses Hier wieder auskommentieren, damit es nicht tausendmal eingefügt wird

/*Gleiches gilt für diesen Block: hier werden mehrere Elemente erstellt und dann eingefügt*/
/* const caro = new Contact({
    name: "Caro",
    alter: 23,
    beschreibung: "probiert das hier grade aus"
});
const schmaron = new Contact({
    name: "Aaron",
    alter: 25,
    beschreibung: "macht grade was anderes"
});
const muster = new Contact({
    name: "Muster Mustermensch",
    alter: 90,
    beschreibung: "ist ein Beispiel"
});
Contact.insertMany([schmaron, caro, muster], function (err){
    if (err){
        console.log(err);
    } else {
        console.log("Erfolgreich die drei neuen dazu gemacht super");
    }
});

 */


Contact.find(function (err, contacts){
    if (err) {
        console.log(err);
    } else {
        console.log(contacts);
    }
});

//howto: mittels for-loop nur das Attribut beschreibung auslesen:

Contact.find(function (err, contacts){
    if (err) {
        console.log(err);
    } else {
        contacts.forEach(function(contact){
            console.log(contact.beschreibung);
        });
    }
});