var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/adviz";

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get("/", function (req, res, next) {
    let contacts = [];
    let ID = req.query.userId;
    MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
        if (err) throw err;
        var db = client.db("adviz");

        if (ID == "all") {
            if (user_name == "admina") {
                db.collection("contacts").find({}).toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.json(result);
                    client.close();

                });
            } else {
                db.collection("contacts").find({}).toArray(function (err, result) {
                    if (err) throw err;
                    for (var i in result) {
                        if (result[i].ownerID != user_name) {
                            if (result[i].isPrivate == false) {
                                contacts[i] = result[i];
                            }
                        } else {
                            contacts[i] = result[i];
                        }
                    }
                    res.send(contacts);
                    client.close();
                });
            }
        } else {
            db.collection("contacts").find({ownerID: ID}).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                res.json(result);
                client.close();
            });
        }
    });
});

router.post("/", function (req, res, next) {
    var newContact = req.body;
    //datenbank aktualisieren

    console.log(newContact);
    res.end("yes");
});

router.put("/id", function (req, res, next){

    var updatedContact = req.body;
    console.log(updatedContact);
    /*
db.collection('contacts').updateOne(
    {
        $set: { 'Titel': req.body.Titel },
        $currentDate: { lastModified: true }
    }
);*/
    res.end("yes");
});
router.delete("/id", function (req, res, next){

    var contactToDelete = req.body;
    console.log(contactToDelete);
    res.end("yes");
});

module.exports = router;
