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
            /*`<details>
                <summary id="sum`+requestContactCounter+`"></summary>
                                    <div>
                                        <form action=”/survey" method=" POST">

                    <div>
                        <br> <input type="text" id="Titel`+requestContactCounter+`" name=" titel"
                                    placeholder=" Titel"><br> <br>
                    </div>

                    <div>
                        <label for=" geschlecht">Geschlecht:</label> <select
                            name=" geschlecht" id="Geschlecht`+requestContactCounter+`">
                        <option value=" keineAngabe">keine Angabe</option>
                        <option value=" weiblich">weiblich</option>
                        <option value=" maennlich">männlich</option>
                        <option value=" divers">divers</option>
                    </select> <br> <br>
                    </div>

                    <div>
                        <input type=" text" id="Vorname`+requestContactCounter+`" name=" vorname"
                               placeholder=" Vorname" required><br>
                        <br>
                    </div>

                    <div>
                        <input type=" text" id="Nachname`+requestContactCounter+`" name=" nachname"
                               placeholder=" Nachname" required><br>
                        <br>
                    </div>

                    <div>
                        <input type=" text" id="StrasseUndHausnummer`+requestContactCounter+`" name=" strassehnr"
                               placeholder=" Straße und Hausnummer" required><br> <br>
                                    </div>

                                    <div>
                                        <input type="number" id="PLZ`+requestContactCounter+`" name="plz"
                                               placeholder="Postleitzahl" required><br>
                                            <br>
                                    </div>

                                    <div>
                                        <input type="text" id="Stadt`+requestContactCounter+`" name="stadt"
                                               placeholder="Stadt" required><br>
                                            <br>
                                    </div>

                                    <div>
                                        <input type="text" id="Land`+requestContactCounter+`" name="land"
                                               placeholder="Land" required><br>
                                            <br>
                                    </div>

                                    <div>
                                        <input type="text" id="MailAdr`+requestContactCounter+`" name="email"
                                               placeholder="Mail-Adresse"><br> <br>
                                    </div>

                                    <div>
                                        <input type="text" id="Sonstiges`+requestContactCounter+`" name="sonstiges"
                                               placeholder="Sonstiges"><br> <br>
                                    </div>

                                    <div>
                                        <label for="adminasPrivCheck">Privater Kontakt:</label>
                                        <input
                                            type="checkbox" id="PrivaterKontakt`+requestContactCounter+`" checked>
                                    </div>

                                    <p>*Required Fields</p>
                                    <button id="save" name="save" type="button">Save to Admina</button>
                                    <button name="saveToNormalo" type="button">Save to
                                        Normalo
                                    </button>
                                    <button name="close" type="button">Close</button>
                                    <br> <br>
                                    </form>
                                    </div>
                                </details>`;

        document.getElementById("sum"+requestContactCounter).innerHTML = obj1[i].Vorname + " " + obj1[i].Nachname;
        document.getElementById("Titel"+requestContactCounter).value = obj1[i].Titel;
        document.getElementById("Geschlecht"+requestContactCounter).value = obj1[i].Geschlecht;
        document.getElementById("Vorname"+requestContactCounter).value = obj1[i].Vorname;
        document.getElementById("Nachname"+requestContactCounter).value = obj1[i].Nachname;
        document.getElementById("StrasseUndHausnummer"+requestContactCounter).value = obj1[i].StrasseUndHausnummer;
        document.getElementById("PLZ"+requestContactCounter).value = obj1[i].PLZ;
        document.getElementById("Stadt"+requestContactCounter).value = obj1[i].Stadt;
        document.getElementById("Land"+requestContactCounter).value = obj1[i].Land;
        document.getElementById("MailAdr"+requestContactCounter).value = obj1[i].MailAdr;
        document.getElementById("Sonstiges"+requestContactCounter).value = obj1[i].Sonstiges;
        document.getElementById("PrivaterKontakt"+requestContactCounter).value = obj1[i].PrivaterKontakt;
        requestContactCounter++;*/

        } else {
            console.log(obj1.status);
        }
    };
    xhr.send();
}