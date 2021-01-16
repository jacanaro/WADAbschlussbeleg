function createMarker(contactObject) {
    var markerReq = new XMLHttpRequest();
    var url = "https://maps.googleapis.com/maps/api/geocode/json?";
    url = url + "address="+contactObject.StrasseUndHausnummer+", "+contactObject.Stadt;
    url = url + "&key=AIzaSyB6r6VNSQh_pXayQ1yY3-NOp_0rKzaukZ4";

    markerReq.open("GET", url, true);

    markerReq.onerror = function () {// Aufruf, wenneinFehlerauftritt
        alert("Connecting to server with " + url + " failed!\n");
    };
    markerReq.onload = function (e) {// Aufruf,wenndie Anfrage erfolgreich war
        var data = this.response;
        var obj = JSON.parse(data);
        console.log(obj);
        if (this.status == 200) {
            if (obj.status != "ZERO_RESULTS") {
                var lat = obj.results[0].geometry.location.lat;
                var lng = obj.results[0].geometry.location.lng;
            } else {
                alert("Die Adresse konnte nicht aufgelöst werden!");
            }
        } else {
            alert("HTTP-status code was: " + obj.status);
        }
    };
    markerReq.send();
}