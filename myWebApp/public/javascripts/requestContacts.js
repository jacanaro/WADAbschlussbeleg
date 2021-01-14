function requestContacts(userID) {
    var xhr = new XMLHttpRequest();
    var url1 = `http://localhost:3000/adviz/contacts?userId=`;
    url1 += userID;

    xhr.open("GET", url1, true);
    xhr.onload = function (e) {// diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
        var data1 = this.response;
        var usersContacts = JSON.parse(data1);

        if (this.status == 200) {
            for (var i = 0; i < usersContacts.length; i++) {
                if(usersContacts[i]!=null)
                createForm(usersContacts[i]);
            }

        } else {
            console.log(obj1.status);
        }
    };
    xhr.send();
}