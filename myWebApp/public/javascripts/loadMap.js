var xhr = new XMLHttpRequest();
var url = "https://maps.googleapis.com/maps/api/geocode/json?"
url = url + "address=Wilhelminenhofstr75, Berlin";
url = url + "&key=AIzaSyB6r6VNSQh_pXayQ1yY3-NOp_0rKzaukZ4";

xhr.open("GET", url, true);
xhr.onerror = function () {// Aufruf, wenn ein Fehler auftritt
    alert("Connecting to server with " + url + " failed!\n");
};
xhr.onload = function (e) { // Aufruf,wenn die Anfrage erfolgreich war
    var data = this.response;
    var obj = JSON.parse(data);
    console.log(obj);

    if (this.status == 200) {
        if (obj.status != "ZERO_RESULTS") {
            var lat = obj.results[0].geometry.location.lat;
            var lng = obj.results[0].geometry.location.lng;
            console.log(lat + ", " + lng);
        } else {
            alert("Die Adresse konnte nicht aufgelöst werden!");
        }
    } else {     //Handhabungvon nicht-200er
        alert("HTTP-status code was: " + obj.status);
    }
};
xhr.send();
