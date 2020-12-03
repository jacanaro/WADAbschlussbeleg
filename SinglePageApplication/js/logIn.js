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

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if (username == objPeople[i].username && password == objPeople[i].password) {
            document.getElementById("logIn").style.display = 'none';
            document.getElementById("loggedIn").style.display = 'block';
            document.getElementById("addNewContact").style.display = 'none';


            document.getElementById("loginData").innerHTML = "Hello, " + username + "!";
            return
        }
        document.getElementById("loginFail").innerHTML = "Incorrect username or password!"; 
    }
}