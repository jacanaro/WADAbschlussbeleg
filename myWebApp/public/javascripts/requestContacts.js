function requestContacts(userID) {
    var xhr = new XMLHttpRequest();
    var url1 = `http://localhost:3000/adviz/contacts?userId=`;
    url1 += userID;

    xhr.open("GET", url1, true);
    xhr.onload = function (e) {// diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
        var data1 = this.response;
        var obj1 = JSON.parse(data1);

        if (this.status == 200) {
            for (var i = 0; i < obj1.length; i++) {
                if(obj1[i]!=null)
                createForm(obj1[i]);
            }

        } else {
            console.log(obj1.status);
        }
    };
    xhr.send();
}