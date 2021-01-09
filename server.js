


const express = require('express');

const app = express();
// var path = require('path');


//hier passiert die Magie
app.use(express.static("SinglePageApplication"));


/*
app.get("/", function(req, res){ //CALLBACK-FUNCTION
    res.sendFile(path.join(__dirname + '/SinglePageApplication/index.html'));
});
    (hat nicht funktioniert, hat nur html übertragen und css und js nicht) 
 */


app.listen(3001, function() {
    console.log("Server started on port 3001");
});

