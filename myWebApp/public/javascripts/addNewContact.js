document.getElementById('addNewContactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    function getAddNewContactFormData() {
        var newContactObject = {
            "_id": "",
            "Titel": "",
            "m_w_d": "",
            "Vorname": "",
            "Name": "",
            "StrHsnr": "",
            "PLZ": 0,
            "Stadt": "",
            "Land": "",
            "Email": "",
            "Sonstiges": "",
            "isPrivate": false,
            "lat": 0.0,
            "lng": 0.0,
            "ownerID": "",
            "__v": ""
        };

        newContactObject.Titel = document.getElementById("addNewTitle").value;
        newContactObject.m_w_d = document.getElementById("addNewGeschlecht").value;
        newContactObject.Vorname = document.getElementById("addNewVorname").value;
        newContactObject.Name = document.getElementById("addNewNachname").value;
        newContactObject.StrHsnr = document.getElementById("addNewStrasseUndHausnummer").value;
        newContactObject.PLZ = document.getElementById("addNewPlz").value;
        newContactObject.Stadt = document.getElementById("addNewStadt").value;
        newContactObject.Land = document.getElementById("addNewLand").value;
        newContactObject.Email = document.getElementById("addNewMailAdr").value;
        newContactObject.Sonstiges = document.getElementById("addNewSonstiges").value;
        newContactObject.isPrivate = document.getElementById("addNewPrivatCheck").checked;
        newContactObject.lat = newContactObject.results[0].geometry.location.lat;
        newContactObject.lng = newContactObject.results[0].geometry.location.lng;
        //todo
        newContactObject.ownerID = -1;

        return newContactObject;

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
