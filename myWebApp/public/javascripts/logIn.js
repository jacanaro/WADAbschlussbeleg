$(document).ready(function () {
    var user, pass;
    $('form').on('submit', function (e) {
        e.preventDefault();
        user = $("#user").val();
        pass = $("#password").val();
        $.post("http://localhost:3000/adviz/login", {user: user, password: pass}, function (data) {
            if (data === 'yes') {
                function sendReq() {
                    var httpRequest = new XMLHttpRequest();

                    var url = `http://localhost:3000/adviz/loginData`;

                    httpRequest.open("GET", url, true);

                    httpRequest.onerror = function () {// diese Funktion wird ausgefuehrt, wenn ein Fehler auftritt
                        console.log("Connecting to server with " + url + " failed!\n");
                    };

                    httpRequest.onload = function (e) {// diese Funktion wird ausgefuehrt, wenn die Anfrage erfolgreich war
                        var data = this.response;
                        var obj = JSON.parse(data);

                        if (this.status == 200) {
                            document.getElementById("logIn").style.display = 'none';
                            document.getElementById("loggedIn").style.display = 'block';
                            document.getElementById("addNewContact").style.display = 'none';

                            // User specifics
                            requestContacts(obj.username);
/*
                            if (obj.isAdminFlag==true) {
                                document.getElementById("normalosContacts").style.display = 'none';
                            } else {
                                document.getElementById("adminasPrivateContacts").style.display = 'none';
                                document.getElementById("adminasPublicContacts").style.display = 'none';
                            }


 */
                            document.getElementById("loginData").innerHTML = "Hello, " + obj.username + "!";
                        } else if (this.status == 401) {
                            document.getElementById("loginFail").innerHTML = "401 " + obj.failString;
                        } else {
                            console.log(obj.status);
                        }
                    };

                    httpRequest.send();
                }

                sendReq();
            } else {
                alert("login data could not be sent");
            }
        });
        this.submit();
    });
});