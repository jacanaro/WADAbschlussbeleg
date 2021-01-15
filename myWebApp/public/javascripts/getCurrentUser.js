function getCurrentUser() {
    var httpRequest = new XMLHttpRequest();
    var url = `http://localhost:3000/adviz/loginData`;

    httpRequest.open("GET", url, true);

    httpRequest.onerror = function () {// diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
        console.log("Connecting to server with " + url + " failed!\n");
    };

    httpRequest.onload = function (e) {// diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
        var data = this.response;
        var obj = JSON.parse(data);

        if (this.status == 200) {
            requestContacts(obj.username);
        } else {
            console.log(obj.status);
        }
    };

    httpRequest.send();
}