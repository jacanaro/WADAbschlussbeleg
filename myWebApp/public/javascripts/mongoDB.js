var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect( url,
    {useUnifiedTopology: true},
    function (err, client) {
        if(err) throw err;
        console.log("Connected");
        var db = client.db("advizDB");
        db.createCollection("test", function (err, res) {
            if (err) throw err;
            console.log("Test Collection created");
            console.log(client);
            client.close()
        });

    });

/*
        db.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });
*/

/*
        db.collection("users").findOne({userId: 'admina'}, function(err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });

*/

/*
 var myobj = {userId: "maxime", password: "maxime", firstName: "Maxime", lastName: "Muster", role: "non-admin"}

 db.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(res);
    client.close();
  });
*/

/*
var myobj = [{userId: "maxime", password: "maxime", 
                    firstName: "Maxime", lastName: "Muster", role: "non-admin"},
            {userId: "max", password: "max", 
                    firstName: "Max", lastName: "Mustermann", role: "non-admin"}];

        db.collection("users").insertMany(myobj, function(err, res) {
            if (err) throw err;

            client.close();
        });

*/

/*
        db.collection("users").deleteOne({firstName: 'Maxime'}, function(err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });

*/

/*
        db.collection("users").deleteMany({firstName: 'Maxime'}, function(err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
        });

*/

/*
        const query = {userId: 'max'}
        var replacement = {userId: "maxime", password: "maxime", firstName: "Maxime", lastName: "Muster", role: "non-admin"}

        db.collection("users").replaceOne(query, replacement,
            function(err, res) {
                if (err) throw err;
                console.log(res);
                client.close();
            });
*/