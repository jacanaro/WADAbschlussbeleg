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

const contactSchema = new mongoose.Schema ({
    Titel: String,
    m_w_d: String,
    Vorname: String,
    Name: String,
    StrHsnr: String,
    PLZ: Number,
    Stadt: String,
    Land: String,
    Email: String,
    Sonstiges: String,
    isPrivate: Boolean
});

const Contact = mongoose.model("Contact", contactSchema);

const userSchema = new mongoose.Schema ({
    userID: String,
    password: String,
    firstname: String,
    lastname: String,
    isAdminUser: Boolean
});

const User = mongoose.model("User", userSchema);

/*hier werden die vordefinierten Kontakte für die Datenbank erstellt
(noch nicht in die DB eingefügt)*/
const caro = new Contact({
    Titel: "Frau",
    m_w_d: "weiblich",
    Vorname: "Caro",
    Name: "A.",
    StrHsnr: "Firlstr. 2",
    PLZ: 12459,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "mail@mail.de",
    Sonstiges: "probiert was mit DB",
    isPrivate: true
});
const schmaron = new Contact({
    Titel: "Herr",
    m_w_d: "männlich",
    Vorname: "Aaron",
    Name: "B.",
    StrHsnr: "Seelstr. 32",
    PLZ: 1255,
    Stadt: "Berlin",
    Land: "Deutschland",
    Email: "andereMail@mail.de",
    isPrivate: false
});
const muster = new Contact({
    m_w_d: "divers",
    Vorname: "Muster",
    Name: "Mustermensch",
    StrHsnr: "Adressenstr. 0",
    PLZ: 12459,
    Stadt: "Berlin",
    Land: "Deutschland",
    Sonstiges: "schaut nur",
    isPrivate: true
});

const admina = new User({
    userID: 1,
    password: "admina",
    isAdminUser: true
});

const normalo = new User({
    userID: 2,
    password: "normalo",
    isAdminUser: false
});



/*--------HIER WIRD EINGEFÜGT---------*/
/*NACH EINMALIGEM NUTZEN AUSKOMMENTIEREN!!!!!,
SONST WIRD ES BEI JEDEM START NEU UND DOPPELT UND DREIFACH HINZUGEFÜGT*/

/*
Contact.insertMany([schmaron, caro, muster], function (err){
    if (err){
        console.log(err);
    } else {
        console.log("Erfolgreich die drei neuen dazu gemacht super");
    }
});

User.insertMany([admina, normalo], function (err){
    if (err){
        console.log(err);
    } else {
        console.log("Erfolgreich die beiden User dazu gemacht");
    }
});
 */
/*------------------END OF AUSKOMMENTIEREN------------------*/


Contact.find(function (err, contacts){
    if (err) {
        console.log(err);
    } else {
        console.log(contacts);
    }
});

//howto: mittels for-loop nur das Attribut Titel auslesen:

Contact.find(function (err, contacts){
    if (err) {
        console.log(err);
    } else {
        contacts.forEach(function(contact){
            console.log(contact.Titel);
        });
    }
});

