document.getElementById('addNewContactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    function getAddNewContactFormData() {
        var newContactObject = {
            "userID": "",
            "Titel": "",
            "Geschlecht": "",
            "Vorname": "",
            "Nachname": "",
            "StrasseUndHausnummer": "",
            "PLZ": "",
            "Stadt": "",
            "Land": "",
            "MailAdr": "",
            "Sonstiges": "",
            "PrivaterKontakt": false
        };

        newContactObject.Titel = document.getElementById("addNewTitle").value;
        newContactObject.Geschlecht = document.getElementById("addNewGeschlecht").value;
        newContactObject.Vorname = document.getElementById("addNewVorname").value;
        newContactObject.Nachname = document.getElementById("addNewNachname").value;
        newContactObject.StrasseUndHausnummer = document.getElementById("addNewStrasseUndHausnummer").value;
        newContactObject.PLZ = document.getElementById("addNewPlz").value;
        newContactObject.Stadt = document.getElementById("addNewStadt").value;
        newContactObject.Land = document.getElementById("addNewLand").value;
        newContactObject.MailAdr = document.getElementById("addNewMailAdr").value;
        newContactObject.Sonstiges = document.getElementById("addNewSonstiges").value;
        newContactObject.PrivaterKontakt = document.getElementById("addNewPrivatCheck").checked;

        return newContactObject

    }

    var newContactObject = getAddNewContactFormData();
    //send to Client
    createContactFormAndMapMarker(newContactObject);
    $.post("http://localhost:3000/adviz/contacts",newContactObject, function (data) {
        if (data === 'yes') {
            console.log(201);
        } else {
            alert("login data could not be sent");
        }
    });
});
