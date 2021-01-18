function createContactFormAndMapMarker(contactObject) {
    //create marker on map
    createMapMarker(contactObject);

    var details = document.createElement("details");


    var summary = document.createElement("summary");
    summary.innerHTML = contactObject.Vorname + " " + contactObject.Name;
    details.appendChild(summary);

    var form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "/contacts");


    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "titel");
    input.setAttribute('placeholder', "Titel");
    input.id = "titel" + contactObject._id;
    input.value = contactObject.Titel;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var label = document.createElement("label");
    label.setAttribute("for", "Geschlecht");
    label.innerHTML = "Geschlecht: "
    form.appendChild(label);

    var select = document.createElement("select");
    select.setAttribute("name", "Geschlecht");
    var options = ["keine Angabe", "männlich", "weiblich"];
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        select.appendChild(option);
    }
    select.id = "geschlecht" + contactObject._id;
    select.value = contactObject.m_w_d;
    form.appendChild(select);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "vorname");
    input.setAttribute('placeholder', "Vorname");
    input.required = true;
    input.id = "vorname" + contactObject._id;
    input.value = contactObject.Vorname;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "nachname");
    input.setAttribute('placeholder', "Nachname");
    input.required = true;
    input.id = "name" + contactObject._id;
    input.value = contactObject.Name;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "StrasseUndHausnummer");
    input.setAttribute('placeholder', "Straße und Hausnummer");
    input.required = true;
    input.id = "strHsnr" + contactObject._id;
    input.value = contactObject.StrHsnr;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "number");
    input.setAttribute('name', "PLZ");
    input.setAttribute('placeholder', "Postleitzahl");
    input.required = true;
    input.id = "plz" + contactObject._id;
    input.value = contactObject.PLZ;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Stadt");
    input.setAttribute('placeholder', "Stadt");
    input.required = true;
    input.id = "stadt" + contactObject._id;
    input.value = contactObject.Stadt;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Land");
    input.setAttribute('placeholder', "Land");
    input.required = true;
    input.id = "land" + contactObject._id;
    input.value = contactObject.Land;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "MailAdr");
    input.setAttribute('placeholder', "Mail-Adresse");
    input.id = "email" + contactObject._id;
    input.value = contactObject.Email;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Sonstiges");
    input.setAttribute('placeholder', "Sonstiges");
    input.id = "sonstiges" + contactObject._id;
    input.value = contactObject.Sonstiges;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var label = document.createElement("label");
    label.setAttribute("for", "privContakt");
    label.innerHTML = "Privater Kontakt: "
    form.appendChild(label);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "checkbox");
    input.setAttribute('name', "isPrivContact");
    input.id = "isPrivat" + contactObject._id;
    input.checked = contactObject.isPrivate;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var submit = document.createElement("button"); //input element, Submit button
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "submit");
    submit.textContent = 'Update Contact';
    //submit.onclick = updateContact();


    //var updateID = "update" + contactObject._id;
    submit.id = "update" + String(contactObject._id);

    submit.addEventListener('submit', function (e) {
        e.preventDefault();
        /*var xhr = new XMLHttpRequest();
        var url1 = `http://localhost:3000/adviz/contacts/id`;

        xhr.open("PUT", url1, true);*/
        var newContactObject = {
            _id: contactObject._id,
            Titel: 'Frau',
            m_w_d: 'weiblich',
            Vorname: 'Caro',
            Name: 'A.',
            StrHsnr: 'Firlstraße 2',
            PLZ: 12459,
            Stadt: 'Berlin',
            Land: 'Deutschland',
            Email: 'mail@mail.de',
            Sonstiges: 'probiert was mit DB',
            isPrivate: true,
            lat: 52.4626,
            lng: 13.52322,
            ownerID: 'admina',
            __v: 0
        };
        //newContactObject._id= contactObject._id;
        //newContactObject.Titel = document.getElementById("titel"+contactObject._id).value;
        /*newContactObject.m_w_d = document.getElementById("addNewGeschlecht").value;
        newContactObject.Vorname = document.getElementById("addNewVorname").value;
        newContactObject.Name = document.getElementById("addNewNachname").value;
        newContactObject.StrHsnr = document.getElementById("addNewStrasseUndHausnummer").value;
        newContactObject.PLZ = document.getElementById("addNewPlz").value;
        newContactObject.Stadt = document.getElementById("addNewStadt").value;
        newContactObject.Land = document.getElementById("addNewLand").value;
        newContactObject.Email = document.getElementById("addNewMailAdr").value;
        newContactObject.Sonstiges = document.getElementById("addNewSonstiges").value;
        newContactObject.isPrivate = document.getElementById("addNewPrivatCheck").checked;*/

        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/adviz/contacts/id";
        xhr.open("PUT", url, true);
        //xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                alert("it worked");
            } else {
                alert("server didnt get put");
            }
        }
        xhr.JSON(newContactObject);/*
        $.put("http://localhost:3000/adviz/contacts/id",newContactObject, function (data) {
            if (data === 'yes') {
                console.log(201);
            } else {
                alert("updated contact could not be sent");
            }
        });*/
        /*xhr.onload = function (e) { //diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
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
        xhr.send();*/
    });


    form.appendChild(submit);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);
    var deleteContact = document.createElement("button"); //input element, Submit button
    deleteContact.setAttribute('type', "submit");
    deleteContact.setAttribute('value', "submit");
    deleteContact.id = "delete";
    deleteContact.textContent = 'Delete Contact';
    form.appendChild(deleteContact);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    details.appendChild(form);

    document.getElementById('displayedContacts').appendChild(details);


    const All_Details = document.querySelectorAll('details');

    All_Details.forEach(deet => {
        deet.addEventListener('toggle', toggleOpenOneOnly)
    })

    function toggleOpenOneOnly(e) {
        if (this.open) {
            All_Details.forEach(deet => {
                if (deet != this && deet.open) deet.open = false
            });
        }
    }
}
