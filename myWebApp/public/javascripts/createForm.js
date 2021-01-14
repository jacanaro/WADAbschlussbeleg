function createForm(obj1) {
    var details=document.createElement("details");
        var summary= document.createElement("summary");
        summary.innerHTML=obj1.Vorname+" "+obj1.Nachname;
        details.appendChild(summary);

        var form = document.createElement("form");
        form.setAttribute('method', "post");
        form.setAttribute('action', "/contacts");

            var input = document.createElement("input"); //input element, text
            input.setAttribute('type', "text");
            input.setAttribute('name', "titel");
            input.value = obj1.Titel;
            form.appendChild(input);
            var br=document.createElement("br");
            form.appendChild(br);

            var label = document.createElement("label");
            label.setAttribute("for", "Geschlecht");
            label.innerHTML="Geschlecht: "
            form.appendChild(label);

            var select=document.createElement("select");
            select.setAttribute("name", "Geschlecht");
                var options = ["keine Angabe","männlich","weiblich"];
                for (var i = 0; i < options.length; i++) {
                    var option = document.createElement("option");
                    option.value = options[i];
                    option.text = options[i];
                    select.appendChild(option);
                }
            select.value=obj1.Geschlecht;
            form.appendChild(select);
            var br=document.createElement("br");
            form.appendChild(br);

            var inputTags=["Vorname","Nachname","StrasseUndHausnummer","PLZ", "Stadt", "Land", "MailAdr", "Sonstiges"];
            for(var i in inputTags){
                var input = document.createElement("input");
                input.setAttribute('type', "text");
                input.name=inputTags[i];
                switch (inputTags[i]){
                    case "Vorname":
                        input.value = obj1.Vorname;
                        break;
                    case "Nachname":
                        input.value = obj1.Nachname;
                        break;
                    case "StrasseUndHausnummer":
                        input.value = obj1.StrasseUndHausnummer;
                        break;
                    case "PLZ":
                        input.value = obj1.PLZ;
                        break;
                    case "Stadt":
                        input.value = obj1.Stadt;
                        break;
                    case "Land":
                        input.value = obj1.Land;
                        break;
                    case "MailAdr":
                        input.value = obj1.MailAdr;
                        break;
                    case "Sonstiges":
                        input.value = obj1.Sonstiges;
                        break;
                }
                form.appendChild(input);
                var br=document.createElement("br");
                form.appendChild(br);
            }

            var submit = document.createElement("input"); //input element, Submit button
            submit.setAttribute('type', "submit");
            submit.setAttribute('value', "Submit");
            form.appendChild(submit);
            var br=document.createElement("br");
            form.appendChild(br);

    details.appendChild(form);

    document.getElementById('adminasContacts').appendChild(details);
}