var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

contactCollection = [
    { // Object @ 0 index
        "userID": "admina",
        "Titel":"Frau",
        "Geschlecht":"weiblich",
        "Vorname":"Agnetha",
        "Nachname":"Agnethovic",
        "StrasseUndHausnummer":"Firlstraße 2",
        "PLZ": 12459,
        "Stadt":"Berlin",
        "Land":"Deutschland",
        "MailAdr":"keine Angabe",
        "Sonstiges":"keine Angabe",
        "PrivaterKontakt": true
    },
    { // Object @ 1 index
        "userID": "admina",
        "Titel":"Institution",
        "Geschlecht":"keine Angabe",
        "Vorname":"HTW",
        "Nachname":"Berlin",
        "StrasseUndHausnummer":"Wilhelminenhofstraße 75A",
        "PLZ":"12459",
        "Stadt":"Berlin",
        "Land":"Deutschland",
        "MailAdr":"keine Angabe",
        "Sonstiges":"keine Angabe",
        "PrivaterKontakt": false
    },
    { // Object @ 2 index
        "userID": "normalo",
        "Titel": "Herr",
        "Geschlecht":"männlich",
        "Vorname":"Jacob",
        "Nachname":"Jacobson",
        "StrasseUndHausnummer":"Seelenbinderstraße 12",
        "PLZ":"12555",
        "Stadt":"Berlin",
        "Land":"Deutschland",
        "MailAdr":"jj@gmail.com",
        "Sonstiges":"Ganz ok",
        "PrivaterKontakt": true
    },
    { // Object @ 3 index
        "userID": "normalo",
        "Titel": "Imbiss",
        "Geschlecht": "keine Angabe",
        "Vorname":"Gemüse",
        "Nachname":"Kebap",
        "StrasseUndHausnummer":"Rathenaustraße 1",
        "PLZ":"12459",
        "Stadt":"Berlin",
        "Land":"Deutschland",
        "MailAdr":"keine Angabe",
        "Sonstiges":"Immer für dich da",
        "PrivaterKontakt": false
    }
];
var contacts=[];
router.get("/", function (req, res, next) {
    var ID=req.query.userId;
    for (var i in contactCollection){
        if(ID===contactCollection[i].userID){
            contacts[i]=contactCollection[i];
        }
    }
    res.send(contacts);
});

module.exports = router;
