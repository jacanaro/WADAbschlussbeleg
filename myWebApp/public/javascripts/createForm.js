function createForm(contactObject) {
    var details = document.createElement("details");


    var summary = document.createElement("summary");
    summary.innerHTML = contactObject.Vorname + " " + contactObject.Nachname;
    details.appendChild(summary);

    var form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "/contacts");


    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "titel");
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
    var br = document.createElement("br");
    form.appendChild(br);

    var select = document.createElement("select");
    select.setAttribute("name", "Geschlecht");
    var options = ["keine Angabe", "männlich", "weiblich"];
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        select.appendChild(option);
    }
    select.value = contactObject.Geschlecht;
    form.appendChild(select);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "vorname");
    input.required = true;
    input.value = contactObject.Vorname;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "nachname");
    input.required = true;
    input.value = contactObject.Nachname;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "StrasseUndHausnummer");
    input.required = true;
    input.value = contactObject.StrasseUndHausnummer;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "number");
    input.setAttribute('name', "PLZ");
    input.required = true;
    input.value = contactObject.PLZ;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Stadt");
    input.required = true;
    input.value = contactObject.Stadt;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Land");
    input.required = true;
    input.value = contactObject.Land;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "MailAdr");
    input.value = contactObject.MailAdr;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Sonstiges");
    input.value = contactObject.Sonstiges;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var submit = document.createElement("button"); //input element, Submit button
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "submit");
    submit.textContent= 'Update Contact';
    form.appendChild(submit);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);
    var deleteContact = document.createElement("button"); //input element, Submit button
    deleteContact.setAttribute('type', "submit");
    deleteContact .setAttribute('value', "submit");
    deleteContact.textContent= 'Delete Contact';
    form.appendChild(deleteContact);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    details.appendChild(form);

    document.getElementById('displayedContacts').appendChild(details);


    const All_Details = document.querySelectorAll('details');

    All_Details.forEach(deet=>{
        deet.addEventListener('toggle', toggleOpenOneOnly)
    })

    function toggleOpenOneOnly(e) {
        if (this.open) {
            All_Details.forEach(deet=>{
                if (deet!=this && deet.open) deet.open = false
            });
        }
    }
}
