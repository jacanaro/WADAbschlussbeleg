// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        username: "admina",
        password: "admina"
    },
    { // Object @ 1 index
        username: "normalo",
        password: "normalo"
    }
]
$(document).ready(function(){
    var user,pass;
    $("#submit").click(function(){
        user=$("#user").val();
        pass=$("#password").val();
        $.post("http://localhost:3000/adviz/login",{user: user,password: pass}, function(data){
            if(data === 'yes') {
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
                            document.getElementById("test").innerHTML = obj.username+obj.password;
                            for (var i = 0; i < objPeople.length; i++) {
                                if (obj.username == objPeople[i].username && obj.password == objPeople[i].password) {
                                    document.getElementById("logIn").style.display = 'none';
                                    document.getElementById("loggedIn").style.display = 'block';
                                    document.getElementById("addNewContact").style.display = 'none';
                                    if (obj.username=="admina"){
                                        document.getElementById("normalosContacts").style.display = 'none';
                                    }
                                    else if (obj.username=="normalo"){
                                        document.getElementById("adminasPrivateContacts").style.display = 'none';
                                        document.getElementById("adminasPublicContacts").style.display = 'none';
                                    }

                                    document.getElementById("loginData").innerHTML = "Hello, " + obj.username + "!";
                                }
                            }
                        }
                        else if (this.status==401){
                            document.getElementById("loginFail").innerHTML = "401 " + obj.failString;
                        }
                            else {
                            console.log(obj.status);
                        }
                    };

                    httpRequest.send();
                }
                sendReq();
            }
            else{
                alert("login data could not be sent");
            }
        });
    });
});