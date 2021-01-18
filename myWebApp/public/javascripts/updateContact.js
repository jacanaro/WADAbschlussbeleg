/*function updateContact() {
    var xhr = new XMLHttpRequest();
    var url1 = `http://localhost:3000/adviz/contacts/id`;

    xhr.open("PUT", url1, true);
    xhr.onload = function (e) { //diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
        var updatedData = this.response;
        var updatedContact = JSON.parse(updatedData);

        if (this.status == 200) {
            for (var i = 0; i < updatedContact.length; i++) {
                if(updatedContact[i]!=null)
                    createContactFormAndMapMarker(updatedContact[i]);
            }


        } else {
            console.log(updatedContact.status);
        }
    };
    xhr.send();
}

 */