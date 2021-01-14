

function createForm(obj1) {
    var details = document.createElement("details");

    var summary = document.createElement("summary");
    summary.innerHTML = obj1.Vorname + " " + obj1.Nachname;
    details.appendChild(summary);

    var form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "/contacts");


    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "titel");
    input.value = obj1.Titel;
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
    select.value = obj1.Geschlecht;
    form.appendChild(select);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "vorname");
    input.required = true;
    input.value = obj1.Vorname;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "nachname");
    input.required = true;
    input.value = obj1.Nachname;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "StrasseUndHausnummer");
    input.required = true;
    input.value = obj1.StrasseUndHausnummer;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "number");
    input.setAttribute('name', "PLZ");
    input.required = true;
    input.value = obj1.PLZ;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Stadt");
    input.required = true;
    input.value = obj1.Stadt;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Land");
    input.required = true;
    input.value = obj1.Land;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "MailAdr");
    input.value = obj1.MailAdr;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    var input = document.createElement("input"); //input element, text
    input.setAttribute('type', "text");
    input.setAttribute('name', "Sonstiges");
    input.value = obj1.Sonstiges;
    form.appendChild(input);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);


    var submit = document.createElement("input"); //input element, Submit button
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "Submit");
    form.appendChild(submit);
    var br = document.createElement("br");
    form.appendChild(br);
    var br = document.createElement("br");
    form.appendChild(br);

    details.appendChild(form);

    document.getElementById('adminasContacts').appendChild(details);
}

